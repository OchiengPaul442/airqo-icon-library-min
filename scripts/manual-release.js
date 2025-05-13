#!/usr/bin/env node

/**
 * manual-release.js
 *
 * A script to manually run the release process
 * This can be used when GitHub Actions workflow fails or to test the process locally
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const resetVersion = args.includes('--reset-version');

// Determine release type (patch, minor, major)
let releaseType = 'patch'; // default
['patch', 'minor', 'major'].forEach((type) => {
  if (args.includes(`--${type}`)) {
    releaseType = type;
  }
});

console.log(`Release type: ${releaseType}`);
console.log(`Dry run: ${isDryRun ? 'Yes' : 'No'}`);
console.log(`Reset version: ${resetVersion ? 'Yes' : 'No'}`);

// Function to run shell commands
function runCommand(command) {
  console.log(`\n> ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Failed to execute: ${command}`);
    return false;
  }
}

// Lerna has been removed, so we no longer need to initialize lerna.json

// Reset versions if requested
if (resetVersion) {
  console.log('\n# Resetting versions to 1.0.0');
  const rootPkgPath = path.join(process.cwd(), 'package.json');
  const rootPkg = require(rootPkgPath);
  rootPkg.version = '1.0.0';
  fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');

  // Update all packages
  const packagesDir = path.join(process.cwd(), 'packages');
  const packages = fs.readdirSync(packagesDir);

  for (const pkg of packages) {
    const pkgJsonPath = path.join(packagesDir, pkg, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      const pkgJson = require(pkgJsonPath);
      pkgJson.version = '1.0.0';
      fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + '\n');
      console.log(`Reset ${pkg} to version 1.0.0`);
    }
  }

  // Update website package
  const websitePkgPath = path.join(process.cwd(), 'website', 'package.json');
  if (fs.existsSync(websitePkgPath)) {
    const websitePkg = require(websitePkgPath);
    websitePkg.version = '1.0.0';
    fs.writeFileSync(
      websitePkgPath,
      JSON.stringify(websitePkg, null, 2) + '\n',
    );
    console.log(`Reset website to version 1.0.0`);
  }
}

// Step 1: Install dependencies
console.log('\n# Installing dependencies');
runCommand('pnpm install');

// Step 2: Generate icons
console.log('\n# Generating icons');
runCommand('pnpm generate');

// Step 3: Fix component types
console.log('\n# Fixing component types');
runCommand('pnpm fix-component-types');

// Step 4: Enhance React Native icons
console.log('\n# Enhancing React Native icons');
runCommand('pnpm enhance-rn');

// Step 5: Clean up generated files
console.log('\n# Cleaning up generated files');
runCommand('rm -rf packages/*/dist');

// Step 6: Update versions in each package
console.log('\n# Creating release version');
const dryRunFlag = isDryRun ? '--dry-run' : '';

// Update root package.json
console.log('\n## Updating root package version');
if (!isDryRun) {
  runCommand(`npm version ${releaseType} --no-git-tag-version`);
} else {
  console.log('(dry run) Would update root package version');
}

// Get the new version from the root package.json
const rootPkgPath = path.join(process.cwd(), 'package.json');
const rootPkg = require(rootPkgPath);
const newVersion = rootPkg.version;
console.log(`New version: ${newVersion}`);

// Update all packages
const packagesDir = path.join(process.cwd(), 'packages');
const packages = fs.readdirSync(packagesDir);

for (const pkg of packages) {
  const pkgJsonPath = path.join(packagesDir, pkg, 'package.json');
  if (fs.existsSync(pkgJsonPath)) {
    console.log(`\n## Updating ${pkg} version to ${newVersion}`);
    if (!isDryRun) {
      // Read the package.json
      const pkgJson = require(pkgJsonPath);
      pkgJson.version = newVersion;

      // Update dependencies to reference the new version
      if (pkgJson.dependencies) {
        Object.keys(pkgJson.dependencies).forEach((dep) => {
          if (dep.startsWith('@airqo/')) {
            pkgJson.dependencies[dep] = newVersion;
          }
        });
      }

      // Write back the updated package.json
      fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + '\n');
      console.log(`Updated ${pkg} to version ${newVersion}`);
    } else {
      console.log(`(dry run) Would update ${pkg} to version ${newVersion}`);
    }
  }
}

// Create git tag
if (!isDryRun) {
  console.log('\n## Creating git tag');
  runCommand(`git add .`);
  runCommand(`git commit -m "chore(release): publish v${newVersion}"`);
  runCommand(`git tag -a v${newVersion} -m "Release v${newVersion}"`);
} else {
  console.log(`(dry run) Would create git tag v${newVersion}`);
}

// Step 7: Build packages
console.log('\n# Building packages');
runCommand('pnpm build');

// Only perform publish steps if not a dry run
if (!isDryRun) {
  // Step 8: Push changes and tags
  console.log('\n# Pushing changes and tags');
  runCommand('git push --follow-tags');

  // Step 9: Publish packages to npm
  console.log('\n# Publishing packages to npm');

  // Loop through each package and publish it
  for (const pkg of packages) {
    const pkgPath = path.join(packagesDir, pkg);
    if (fs.existsSync(path.join(pkgPath, 'package.json'))) {
      console.log(`\n## Publishing ${pkg}`);
      runCommand(`cd ${pkgPath} && npm publish --access public`);
    }
  }
} else {
  console.log('\n# Skipping publish steps (dry run)');
}

console.log('\n# Release process completed successfully!');
