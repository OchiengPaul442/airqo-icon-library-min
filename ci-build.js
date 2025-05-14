/**
 * ci-build.js
 *
 * A Node.js build script for CI environments that doesn't rely on shell features
 * This script builds the core packages and website2 for deployment
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Helper function to run commands and log output
function runCommand(command, options = {}) {
  console.log(`> ${command}`);
  try {
    const output = execSync(command, {
      stdio: 'inherit',
      encoding: 'utf-8',
      ...options,
    });
    return { success: true, output };
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    if (!options.continueOnError) {
      process.exit(1);
    }
    return { success: false, error };
  }
}

// Helper to change directory safely
function changeDir(dir) {
  const prevDir = process.cwd();
  console.log(`Changing directory: ${prevDir} -> ${dir}`);
  process.chdir(dir);
  return () => {
    console.log(`Returning to directory: ${dir} -> ${prevDir}`);
    process.chdir(prevDir);
  };
}

// Main build process
async function main() {
  console.log('🚀 Starting CI build process');

  // Create build steps
  const steps = [
    {
      name: 'Install dependencies',
      action: () => runCommand('pnpm install'),
    },
    {
      name: 'Clean packages',
      action: () => runCommand('pnpm -r run clean'),
    },
    {
      name: 'Generate icons',
      action: () => runCommand('node scripts/generate-icons.js'),
    },
    {
      name: 'Fix component types',
      action: () => runCommand('node scripts/fix-component-types.js'),
    },
    {
      name: 'Setup files',
      action: () => runCommand('node scripts/setup-missing-files.js'),
    },
    {
      name: 'Build core package',
      action: () => {
        const restoreDir = changeDir('./packages/core');
        runCommand('pnpm build');
        restoreDir();
      },
    },
    {
      name: 'Build React package',
      action: () => {
        const restoreDir = changeDir('./packages/react');
        runCommand('pnpm build');
        restoreDir();
      },
    },
    {
      name: 'Build website2',
      action: () => {
        const restoreDir = changeDir('./website2');
        runCommand('pnpm install --no-frozen-lockfile');
        runCommand('pnpm build');
        restoreDir();
      },
    },
  ];

  // Execute each step
  for (const step of steps) {
    console.log(`\n✨ ${step.name}...`);
    try {
      await step.action();
      console.log(`✅ ${step.name} completed`);
    } catch (error) {
      console.error(`❌ ${step.name} failed: ${error.message}`);
      process.exit(1);
    }
  }

  console.log('\n🎉 Build completed successfully!');
}

// Run the build
main().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
