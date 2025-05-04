#!/usr/bin/env node

/**
 * This script handles publishing all packages to npm
 * It's used as part of the semantic-release process
 */

const { execSync, exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const packagesDir = path.join(__dirname, '../packages');
const packages = ['core', 'react', 'react-native', 'vue'];

// Order matters - publish core first, then the other packages
console.log('Publishing packages in order...');

// Check if a package version already exists on npm
function checkIfPackageVersionExists(packageName, version) {
  try {
    const output = execSync(
      `npm view @airqo-icons-min/${packageName}@${version} version`,
      {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
      },
    );
    // If we get output, the version exists
    return output.trim() === version;
  } catch (error) {
    // If the command fails, the version doesn't exist
    return false;
  }
}

// Keep track of failures
let hasError = false;

// Publish each package
packages.forEach((pkg) => {
  const packageDir = path.join(packagesDir, pkg);
  const packageJsonPath = path.join(packageDir, 'package.json');

  try {
    // Read the package.json to get the version
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const version = packageJson.version;

    console.log(`Processing @airqo-icons-min/${pkg}@${version}...`);

    // Check if this version already exists
    if (checkIfPackageVersionExists(pkg, version)) {
      console.log(
        `@airqo-icons-min/${pkg}@${version} already exists on npm registry - skipping`,
      );
      return; // Skip to next package
    }

    // Run npm publish
    console.log(`Publishing @airqo-icons-min/${pkg}@${version}...`);
    execSync('npm publish --access public', {
      cwd: packageDir,
      stdio: 'inherit',
    });

    console.log(`Successfully published @airqo-icons-min/${pkg}@${version}`);
  } catch (error) {
    // If error contains a message about already published version, it's not a real error
    if (
      error.message &&
      error.message.includes(
        'You cannot publish over the previously published versions',
      )
    ) {
      console.log(
        `@airqo-icons-min/${pkg} - version already exists - continuing`,
      );
    } else {
      console.error(`Error processing ${pkg}:`, error.message);
      hasError = true;
      // Continue with other packages even if one fails
    }
  }
});

// Exit with success even if some packages were already published
console.log('Package publishing completed');
