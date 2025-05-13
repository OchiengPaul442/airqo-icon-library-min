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

// Check for command line arguments
const isDryRun = process.argv.includes('--dry-run');
const releaseType = ['--patch', '--minor', '--major'].find((type) =>
  process.argv.includes(type),
);

// Normalize the release type for npm version command
const npmReleaseType = releaseType ? releaseType.replace('--', '') : 'patch';

// Run a command and return its output
function runCommand(command, cwd = process.cwd()) {
  try {
    console.log(`Running: ${command} in ${cwd}`);
    if (isDryRun && command.includes('npm publish')) {
      console.log('DRY RUN: Would execute the command above');
      return 'dry-run-output';
    }

    return execSync(command, {
      cwd,
      stdio: 'inherit', // Show output to help with debugging
      encoding: 'utf-8',
    });
  } catch (error) {
    console.error(`Error running "${command}": ${error.message}`);
    throw error;
  }
}

// Get and set package version from package.json
function getPackageVersion(packagePath) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`Package.json not found at ${packageJsonPath}`);
  }

  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
  try {
    const packageJson = JSON.parse(packageJsonContent);
    return packageJson.version;
  } catch (err) {
    throw new Error(
      `Error parsing package.json at ${packageJsonPath}: ${err.message}`,
    );
  }
}

// Update version in package.json and update dependencies
function updatePackageVersion(packagePath, releaseType, newVersion = null) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`Package.json not found at ${packageJsonPath}`);
  }

  // Read the package.json
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
  let packageJson;

  try {
    packageJson = JSON.parse(packageJsonContent);
  } catch (err) {
    throw new Error(
      `Error parsing package.json at ${packageJsonPath}: ${err.message}`,
    );
  }

  if (!packageJson.version) {
    throw new Error(`No version field in package.json at ${packageJsonPath}`);
  }

  // Calculate new version if not provided
  if (!newVersion) {
    // Parse current version
    const currentVersion = packageJson.version;
    const versionParts = currentVersion
      .split('.')
      .map((part) => parseInt(part, 10));

    if (versionParts.length !== 3) {
      throw new Error(
        `Invalid version format in ${packageJsonPath}: ${currentVersion}`,
      );
    }

    // Update version based on release type
    let [major, minor, patch] = versionParts;

    if (releaseType === 'major') {
      major++;
      minor = 0;
      patch = 0;
    } else if (releaseType === 'minor') {
      minor++;
      patch = 0;
    } else {
      // patch
      patch++;
    }
    newVersion = `${major}.${minor}.${patch}`;
  }

  // Set the new version
  packageJson.version = newVersion;

  // Update any internal dependencies
  if (packageJson.dependencies) {
    Object.keys(packageJson.dependencies).forEach((dep) => {
      if (dep.startsWith('@airqo-icons-min/')) {
        packageJson.dependencies[dep] = newVersion;
      }
    });
  }

  // Update peerDependencies if they reference our packages
  if (packageJson.peerDependencies) {
    Object.keys(packageJson.peerDependencies).forEach((dep) => {
      if (dep.startsWith('@airqo-icons-min/')) {
        packageJson.peerDependencies[dep] = newVersion;
      }
    });
  }

  // Write back to package.json
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n',
  );

  return newVersion;
}

// Publishing function with better error handling
async function publishPackages() {
  const mode = isDryRun ? '🧪 DRY RUN' : '🚀 PRODUCTION';
  console.log(`${mode}: Publishing packages with ${npmReleaseType} release...`);

  // First, bump versions in all packages
  console.log(`\n📈 Updating version for all packages (${npmReleaseType})...`);

  let newVersion = null;

  for (const pkg of PACKAGES) {
    const pkgPath = path.resolve(__dirname, '..', pkg);
    const pkgName = path.basename(pkg);

    try {
      // Update the version
      if (!isDryRun) {
        newVersion = updatePackageVersion(pkgPath, npmReleaseType);
        console.log(`Updated ${pkgName} to version ${newVersion}`);
      } else {
        console.log(
          `DRY RUN: Would bump version of ${pkgName} (${npmReleaseType})`,
        );
        const currentVersion = getPackageVersion(pkgPath);
        console.log(`Version for ${pkgName}: ${currentVersion}`);
      }
    } catch (error) {
      console.error(
        `Failed to update version for ${pkgName}: ${error.message}`,
      );
      throw error;
    }
  } // Then publish each package
  for (const pkg of PACKAGES) {
    const pkgPath = path.resolve(__dirname, '..', pkg);
    const pkgName = path.basename(pkg);

    let pkgVersion;
    try {
      pkgVersion = getPackageVersion(pkgPath);
      console.log(
        `\n📦 ${
          isDryRun ? 'Would publish' : 'Publishing'
        } ${pkgName}@${pkgVersion}...`,
      );
    } catch (error) {
      console.error(`Error getting version for ${pkgName}: ${error.message}`);
      console.log(`Skipping publication of ${pkgName} due to version error`);
      continue;
    }

    try {
      // Use npm directly with force and access flags to handle Node.js v20 issues
      const publishCommand = isDryRun
        ? 'npm publish --access public --dry-run'
        : 'npm publish --access public';

      runCommand(publishCommand, pkgPath);
      console.log(
        `✅ ${
          isDryRun ? 'Would have published' : 'Successfully published'
        } ${pkgName}@${pkgVersion}`,
      );
    } catch (error) {
      console.error(
        `❌ Failed to ${isDryRun ? 'dry run' : 'publish'} ${pkgName}:`,
        error.message,
      );

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

  console.log(`\n🎉 ${isDryRun ? 'Dry run' : 'Publishing'} complete!`);
}

// Run the function
publishPackages().catch((error) => {
  console.error('Fatal error during publishing:', error);
  process.exit(1);
});
