#!/usr/bin/env node

/**
 * This script untracks generated files from Git that should not be committed.
 * It's useful after adding previously tracked files to .gitignore.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Define paths to untrack relative to project root
const pathsToUntrack = [
  // Icon component directories
  'packages/react/src/icons',
  'packages/react-native/src/icons',
  'packages/vue/src/icons',
  'packages/flutter/lib/src/icons',

  // Asset directories
  'packages/flutter/assets',

  // Generated manifests and indexes
  'packages/core/src/icon-manifest.ts',
  'packages/react/src/index.ts',
  'packages/react-native/src/index.ts',
  'packages/vue/src/index.ts',

  // Any other generated files
  'packages/*/dist/icon-manifest.json',
  'packages/*/dist/client.js',
  'packages/*/dist/client.js.map',
];

// Get project root directory
const projectRoot = path.resolve(__dirname, '..');

/**
 * Executes git commands to untrack files
 */
function untrackFiles() {
  console.log('🔄 Untracking generated files from Git...');

  // Process each path to untrack
  for (const relativePath of pathsToUntrack) {
    try {
      // Check if path contains a wildcard
      if (relativePath.includes('*')) {
        // Use git command to find and remove matching paths
        const command = `git ls-files "${relativePath}" | xargs git rm --cached -r --ignore-unmatch`;
        execSync(command, { cwd: projectRoot, stdio: 'inherit' });
      } else {
        const fullPath = path.join(projectRoot, relativePath);

        // Check if path exists before attempting to untrack
        if (fs.existsSync(fullPath)) {
          console.log(`Untracking: ${relativePath}`);
          execSync(`git rm --cached -r --ignore-unmatch "${relativePath}"`, {
            cwd: projectRoot,
            stdio: 'inherit',
          });
        } else {
          console.log(`Skipping (not found): ${relativePath}`);
        }
      }
    } catch (error) {
      console.error(`⚠️ Error untracking ${relativePath}:`, error.message);
    }
  }

  console.log(
    '✅ Files untracked successfully. These files will no longer be committed to Git.',
  );
  console.log(
    '📝 Note: The files still exist locally, but are now ignored by Git.',
  );
}

// Execute the untracking process
untrackFiles();
