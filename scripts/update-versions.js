#!/usr/bin/env node

/**
 * This script updates the version in all package.json files
 * It's used as part of the semantic-release process
 */

const fs = require('fs');
const path = require('path');

const newVersion = process.argv[2];
if (!newVersion) {
  console.error('No version specified');
  process.exit(1);
}

console.log(`Updating all packages to version ${newVersion}`);

const packagesDir = path.join(__dirname, '../packages');
const packages = ['core', 'react', 'react-native', 'vue'];

// Update each package.json with the new version
packages.forEach((pkg) => {
  const packageJsonPath = path.join(packagesDir, pkg, 'package.json');

  console.log(`Updating ${packageJsonPath}`);

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.version = newVersion;

    // If this is not the core package, update the core dependency version
    if (
      pkg !== 'core' &&
      packageJson.dependencies &&
      packageJson.dependencies['@airqo-icons-min/core']
    ) {
      packageJson.dependencies['@airqo-icons-min/core'] = `^${newVersion}`;
    }

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
    );
    console.log(`Updated ${pkg} to version ${newVersion}`);
  } catch (error) {
    console.error(`Error updating ${pkg}:`, error);
    process.exit(1);
  }
});

console.log('All packages updated successfully');
