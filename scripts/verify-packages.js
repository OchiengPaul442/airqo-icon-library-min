#!/usr/bin/env node
/**
 * verify-packages.js
 *
 * A utility script to verify package configurations to ensure they can be published
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Package directories to verify
const PACKAGES = [
  'packages/core',
  'packages/react',
  'packages/react-native',
  'packages/vue',
];

const ROOT_DIR = path.resolve(__dirname, '..');

function verifyPackage(packagePath) {
  console.log(`\n\n🔍 Verifying package: ${packagePath}`);
  const pkgJsonPath = path.join(ROOT_DIR, packagePath, 'package.json');

  // Check if package.json exists
  if (!fs.existsSync(pkgJsonPath)) {
    console.error(`❌ ERROR: package.json not found at ${pkgJsonPath}`);
    return false;
  }

  // Read and parse package.json
  let pkgJson;
  try {
    pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
  } catch (error) {
    console.error(`❌ ERROR: Could not parse package.json: ${error.message}`);
    return false;
  }

  let hasErrors = false;

  // Check essential fields
  console.log('\n📋 Checking essential fields:');

  // Name
  if (!pkgJson.name) {
    console.error('❌ ERROR: Missing "name" field');
    hasErrors = true;
  } else {
    console.log(`✅ Name: ${pkgJson.name}`);
  }

  // Version
  if (!pkgJson.version) {
    console.error('❌ ERROR: Missing "version" field');
    hasErrors = true;
  } else {
    console.log(`✅ Version: ${pkgJson.version}`);
  }

  // Main/Module/Types
  if (!pkgJson.main) {
    console.warn('⚠️ WARNING: Missing "main" field');
  } else {
    const mainPath = path.join(ROOT_DIR, packagePath, pkgJson.main);
    if (!fs.existsSync(mainPath)) {
      console.error(`❌ ERROR: Main file not found: ${pkgJson.main}`);
      hasErrors = true;
    } else {
      console.log(`✅ Main: ${pkgJson.main}`);
    }
  }

  // Check publishConfig
  console.log('\n📦 Checking publishConfig:');
  if (!pkgJson.publishConfig) {
    console.warn('⚠️ WARNING: No publishConfig specified. Using npm defaults.');
  } else {
    if (!pkgJson.publishConfig.access) {
      console.warn('⚠️ WARNING: No access level specified in publishConfig');
    } else {
      console.log(`✅ Access: ${pkgJson.publishConfig.access}`);
    }

    if (pkgJson.publishConfig.registry) {
      console.log(`✅ Registry: ${pkgJson.publishConfig.registry}`);
    }
  }

  // Check dependencies
  console.log('\n🔗 Checking dependencies:');

  if (pkgJson.dependencies && Object.keys(pkgJson.dependencies).length > 0) {
    console.log('✅ Dependencies:');
    Object.entries(pkgJson.dependencies).forEach(([dep, version]) => {
      console.log(`   - ${dep}: ${version}`);

      // Check if this is an internal dependency
      if (dep.startsWith('@airqo-icons-min/')) {
        // Verify the version matches with the dependency package
        const depPkgPath = path.join(
          ROOT_DIR,
          'packages',
          dep.split('/')[1],
          'package.json',
        );
        if (fs.existsSync(depPkgPath)) {
          const depPkg = JSON.parse(fs.readFileSync(depPkgPath, 'utf-8'));
          if (version.startsWith('^') || version.startsWith('~')) {
            const versionMatch = version.substring(1);
            if (!depPkg.version.startsWith(versionMatch)) {
              console.warn(
                `⚠️ WARNING: Version mismatch for ${dep}. Expected ${version}, got ${depPkg.version}`,
              );
            }
          } else {
            if (version !== depPkg.version) {
              console.warn(
                `⚠️ WARNING: Version mismatch for ${dep}. Expected ${version}, got ${depPkg.version}`,
              );
            }
          }
        }
      }
    });
  }

  // Run npm pack --dry-run to check for issues
  console.log('\n📦 Running npm pack --dry-run:');
  try {
    const result = execSync('npm pack --dry-run', {
      cwd: path.join(ROOT_DIR, packagePath),
      encoding: 'utf-8',
    });
    console.log(`✅ npm pack successful: ${result}`);
  } catch (error) {
    console.error(`❌ ERROR: npm pack failed: ${error.message}`);
    hasErrors = true;
  }

  return !hasErrors;
}

// Main function
async function main() {
  console.log('🚀 Starting package verification');

  // Check the root package first
  const rootPkgPath = path.join(ROOT_DIR, 'package.json');
  if (fs.existsSync(rootPkgPath)) {
    const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf-8'));
    console.log(`\nRoot package: ${rootPkg.name} v${rootPkg.version}`);
    if (rootPkg.private) {
      console.log('⚠️ NOTE: Root package is marked as private');
    } else {
      console.log('✅ Root package is NOT marked as private');
    }
  }

  // Verify each package
  const results = {};
  for (const pkg of PACKAGES) {
    results[pkg] = verifyPackage(pkg);
  }

  // Summary
  console.log('\n\n📊 Verification Summary:');
  let hasFailures = false;
  Object.entries(results).forEach(([pkg, success]) => {
    if (success) {
      console.log(`✅ ${pkg}: Passed all checks`);
    } else {
      console.log(`❌ ${pkg}: Failed verification`);
      hasFailures = true;
    }
  });

  if (hasFailures) {
    console.log(
      '\n⚠️ Some packages have issues that need to be fixed before publishing.',
    );
    process.exit(1);
  } else {
    console.log('\n🎉 All packages are ready to be published!');
  }
}

main().catch((error) => {
  console.error('Fatal error during verification:', error);
  process.exit(1);
});
