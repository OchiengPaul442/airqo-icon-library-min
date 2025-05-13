#!/usr/bin/env node
/**
 * manual-release.js
 *
 * A script for manual releasing of the airqo-icon-library packages,
 * compatible with semantic-release and proper NPM publishing.
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check for command line arguments
const isDryRun = process.argv.includes('--dry-run');
const versionArgs = process.argv
  .filter((arg) => ['--patch', '--minor', '--major'].includes(arg))
  .map((arg) => arg.substring(2));

const versionType = versionArgs[0] || 'patch';

// Package directories to publish
const PACKAGES = [
  'packages/core',
  'packages/react',
  'packages/react-native',
  'packages/vue',
];

function log(message) {
  console.log(`[RELEASE] ${message}`);
}

function runCommand(command, cwd = process.cwd()) {
  try {
    log(`Running: ${command} in ${cwd}`);
    if (
      isDryRun &&
      (command.includes('npm publish') || command.includes('semantic-release'))
    ) {
      log('DRY RUN: Would execute the command above');
      return 'dry-run-output';
    }

    return execSync(command, {
      cwd,
      stdio: 'inherit',
      encoding: 'utf-8',
    });
  } catch (error) {
    console.error(`Error running "${command}": ${error.message}`);
    throw error;
  }
}

function updateVersionDependencies(version) {
  for (const pkg of PACKAGES) {
    const pkgPath = path.resolve(__dirname, '..', pkg);
    const pkgJsonPath = path.join(pkgPath, 'package.json');

    if (!fs.existsSync(pkgJsonPath)) continue;

    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
    pkgJson.version = version;

    // Update any internal dependencies
    if (pkgJson.dependencies) {
      Object.keys(pkgJson.dependencies).forEach((dep) => {
        if (dep.startsWith('@airqo-icons-min/')) {
          pkgJson.dependencies[dep] = version;
        }
      });
    }

    // Update peerDependencies if they reference our packages
    if (pkgJson.peerDependencies) {
      Object.keys(pkgJson.peerDependencies).forEach((dep) => {
        if (dep.startsWith('@airqo-icons-min/')) {
          pkgJson.peerDependencies[dep] = version;
        }
      });
    }

    fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + '\n');
    log(`Updated ${pkg} version and dependencies to ${version}`);
  }
}

async function manualRelease() {
  const mode = isDryRun ? '🧪 DRY RUN' : '🚀 PRODUCTION';
  log(
    `${mode}: Starting manual release process with ${versionType} release...`,
  );

  // 1. Make sure we have a clean environment
  runCommand('pnpm clean');

  // 2. Generate icons and build packages
  log('\n⚙️ Generating icons and building packages...');
  runCommand('pnpm generate');
  runCommand('pnpm fix-component-types');
  runCommand('pnpm enhance-rn');

  // 3. Run semantic-release to determine version and generate changelog
  log('\n📊 Running semantic-release to determine version...');
  try {
    const releaseCommand = isDryRun
      ? 'npx semantic-release --dry-run'
      : 'npx semantic-release';

    const releaseOutput = runCommand(releaseCommand);
    log('Semantic Release completed successfully');
  } catch (error) {
    log(
      'Semantic Release did not find any releasable changes or encountered an error',
    );
    if (!isDryRun) {
      log('Aborting since no changes to release were found');
      return;
    }
  }

  // 4. Get current version from package.json and increment it
  const rootPkgPath = path.resolve(__dirname, '..');
  const rootPkgJson = require(path.join(rootPkgPath, 'package.json'));
  const currentVersion = rootPkgJson.version || '1.0.0';

  // Parse current version
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  let newVersion;

  switch (versionType) {
    case 'major':
      newVersion = `${major + 1}.0.0`;
      break;
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`;
      break;
    default:
      newVersion = `${major}.${minor}.${patch + 1}`;
  }

  // 5. Update all package versions
  log(`\n📦 Updating package versions to ${newVersion}...`);
  if (!isDryRun) {
    updateVersionDependencies(newVersion);

    // Update root package.json
    rootPkgJson.version = newVersion;
    fs.writeFileSync(
      path.join(rootPkgPath, 'package.json'),
      JSON.stringify(rootPkgJson, null, 2) + '\n',
    );
  } else {
    log(`DRY RUN: Would update all packages to version ${newVersion}`);
  }

  // 6. Build all packages
  log('\n🔨 Building packages...');
  runCommand('pnpm build');

  // 7. Publish packages
  log('\n🚀 Publishing packages...');
  for (const pkg of PACKAGES) {
    const pkgPath = path.resolve(__dirname, '..', pkg);
    const pkgName = path.basename(pkg);

    try {
      const publishCommand = isDryRun
        ? 'npm publish --access public --dry-run'
        : 'npm publish --access public';

      runCommand(publishCommand, pkgPath);
      log(
        `✅ ${
          isDryRun ? 'Would have published' : 'Successfully published'
        } ${pkgName}@${newVersion}`,
      );
    } catch (error) {
      console.error(
        `❌ Failed to ${isDryRun ? 'dry run' : 'publish'} ${pkgName}: ${
          error.message
        }`,
      );
      if (!isDryRun) throw error;
    }
  }

  // 8. Commit changes and push tags if not dry run
  if (!isDryRun) {
    log('\n📝 Committing changes and creating git tag...');
    try {
      runCommand(`git add package.json CHANGELOG.md packages/*/package.json`);
      runCommand(`git commit -m "chore(release): ${newVersion} [skip ci]"`);
      runCommand(`git tag -a v${newVersion} -m "Release ${newVersion}"`);
      log('✅ Changes committed and tag created successfully');
    } catch (error) {
      console.error('Failed to commit changes or create tag:', error.message);
    }
  } else {
    log('\nDRY RUN: Would commit changes and create git tag');
  }

  log(`\n🎉 ${isDryRun ? 'Dry run' : 'Manual release'} complete!`);
  if (!isDryRun) {
    log(
      `\nRemember to push the changes and tags with: git push && git push --tags`,
    );
  }
}

manualRelease().catch((error) => {
  console.error('Fatal error during manual release:', error);
  process.exit(1);
});
