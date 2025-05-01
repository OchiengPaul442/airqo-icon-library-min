#!/usr/bin/env node

/**
 * optimize-svgs.js
 *
 * Recursively walks the svgs/ directory and runs SVGO on each SVG file in-place.
 * Implements checks to avoid duplicate processing and provides better logging.
 */

const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const crypto = require('crypto');

// Root directory containing raw SVGs
const SVGS_DIR = path.resolve(__dirname, '../svgs');

// Keep track of processed files to avoid duplicates
const processedFiles = new Set();

// Tracking stats
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  unchanged: 0,
  optimized: 0,
};

/**
 * Generate a hash for file content
 * @param {string} content - file content
 * @returns {string} - md5 hash
 */
function getContentHash(content) {
  return crypto.createHash('md5').update(content).digest('hex');
}

/**
 * Recursively traverse a directory and apply a callback to each .svg file
 * @param {string} dir - directory path
 * @param {(filePath: string) => void} callback
 */
function walkDir(dir, callback) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walkDir(fullPath, callback);
      } else if (
        entry.isFile() &&
        fullPath.endsWith('.svg') &&
        !processedFiles.has(fullPath)
      ) {
        // Mark as processed to avoid duplicates
        processedFiles.add(fullPath);
        callback(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
    stats.errors++;
  }
}

/**
 * Optimize a single SVG file using SVGO and overwrite it
 * @param {string} filePath
 */
function optimizeFile(filePath) {
  try {
    const svg = fs.readFileSync(filePath, 'utf8');
    const originalHash = getContentHash(svg);

    const result = optimize(svg, {
      multipass: true,
      plugins: [
        'preset-default',
        { name: 'removeComments' },
        { name: 'removeMetadata' },
        { name: 'removeTitle' },
        { name: 'removeDesc' },
        { name: 'removeDimensions' },
      ],
    });

    const optimizedHash = getContentHash(result.data);

    if (originalHash !== optimizedHash) {
      fs.writeFileSync(filePath, result.data, 'utf8');
      console.log(`✓ Optimized: ${path.relative(process.cwd(), filePath)}`);
      stats.optimized++;
    } else {
      console.log(`- Unchanged: ${path.relative(process.cwd(), filePath)}`);
      stats.unchanged++;
    }

    stats.processed++;
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    stats.errors++;
  }
}

// Create a lock file to prevent concurrent runs
function createLock() {
  const lockFile = path.join(__dirname, '.svg-optimize.lock');

  if (fs.existsSync(lockFile)) {
    const lockTime = fs.statSync(lockFile).mtime;
    const now = new Date();
    const lockAgeMinutes = (now - lockTime) / (1000 * 60);

    if (lockAgeMinutes < 60) {
      // Lock expires after 60 minutes
      console.error(
        'SVG optimization is already running or was aborted. Delete .svg-optimize.lock to force a run.',
      );
      process.exit(1);
    } else {
      console.warn('Stale lock file found. Removing and continuing...');
      fs.unlinkSync(lockFile);
    }
  }

  fs.writeFileSync(lockFile, new Date().toISOString());

  return function removeLock() {
    if (fs.existsSync(lockFile)) {
      fs.unlinkSync(lockFile);
    }
  };
}

// Start optimization process
function main() {
  const removeLock = createLock();

  console.log('\n=== SVG Optimization ===');
  console.log(`Source directory: ${SVGS_DIR}`);
  console.log('Starting optimization process...\n');

  const startTime = Date.now();

  try {
    walkDir(SVGS_DIR, optimizeFile);

    const endTime = Date.now();
    const durationSecs = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n=== Optimization Complete ===');
    console.log(`Total files processed: ${stats.processed}`);
    console.log(`Files optimized: ${stats.optimized}`);
    console.log(`Files unchanged: ${stats.unchanged}`);
    console.log(`Errors: ${stats.errors}`);
    console.log(`Duration: ${durationSecs} seconds`);
  } catch (error) {
    console.error('\n=== Optimization Failed ===');
    console.error(error);
    process.exit(1);
  } finally {
    removeLock();
  }
}

main();
