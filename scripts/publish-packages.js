#!/usr/bin/env node
/**
 * publish-packages.js
 *
 * A more controlled publishing script with better error handling for Node.js v20
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Package directories to publish
const PACKAGES = [
  'packages/core',
  'packages/react',
  'packages/react-native',
  'packages/vue',
];

// Run a command and return its output
function runCommand(command, cwd = process.cwd()) {
  try {
    return execSync(command, {
      cwd,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf-8',
    });
  } catch (error) {
    console.error(`Error running "${command}": ${error.message}`);
    if (error.stdout) console.log('STDOUT:', error.stdout);
    if (error.stderr) console.log('STDERR:', error.stderr);
    throw error;
  }
}

// Get package version from package.json
function getPackageVersion(packagePath) {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(packagePath, 'package.json'), 'utf-8'),
  );
  return packageJson.version;
}

// Publishing function with better error handling
async function publishPackages() {
  console.log('🚀 Publishing packages...');

  for (const pkg of PACKAGES) {
    const pkgPath = path.resolve(__dirname, '..', pkg);
    const pkgName = path.basename(pkg);
    const pkgVersion = getPackageVersion(pkgPath);

    console.log(`\n📦 Publishing ${pkgName}@${pkgVersion}...`);

    try {
      // Use npm directly with force and access flags to handle Node.js v20 issues
      runCommand('npm publish --access public', pkgPath);
      console.log(`✅ Successfully published ${pkgName}@${pkgVersion}`);
    } catch (error) {
      console.error(`❌ Failed to publish ${pkgName}:`, error.message);

      if (
        error.message.includes('EBUSY') ||
        error.message.includes('resource busy')
      ) {
        console.warn('This might be due to Node.js v20 file locking issues.');
        console.warn(
          'Try publishing this package manually with: cd packages/xxx && npm publish --access public',
        );
      }
    }
  }

  console.log('\n🎉 Publishing complete!');
}

// Run the function
publishPackages().catch((error) => {
  console.error('Fatal error during publishing:', error);
  process.exit(1);
});
