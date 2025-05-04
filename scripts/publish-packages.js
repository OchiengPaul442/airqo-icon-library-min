#!/usr/bin/env node

/**
 * This script handles publishing all packages to npm
 * It's used as part of the semantic-release process
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const packagesDir = path.join(__dirname, '../packages');
const packages = ['core', 'react', 'react-native', 'vue'];

// Order matters - publish core first, then the other packages
console.log('Publishing packages in order...');

let hasError = false;

// Publish each package
packages.forEach((pkg) => {
  const packageDir = path.join(packagesDir, pkg);
  const packageJsonPath = path.join(packageDir, 'package.json');

  try {
    // Read the package.json to get the version
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log(`Publishing @airqo-icons-min/${pkg}@${packageJson.version}...`);

    // Run npm publish
    execSync('npm publish --access public', {
      cwd: packageDir,
      stdio: 'inherit',
    });

    console.log(
      `Successfully published @airqo-icons-min/${pkg}@${packageJson.version}`,
    );
  } catch (error) {
    console.error(`Error publishing ${pkg}:`, error.message);
    hasError = true;
    // Continue with other packages even if one fails
  }
});

if (hasError) {
  console.error('One or more packages failed to publish');
  process.exit(1);
} else {
  console.log('All packages published successfully');
}
