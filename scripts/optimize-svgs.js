#!/usr/bin/env node
/**
 * optimize-svgs.js
 *
 * Recursively walks the svgs/ directory and runs SVGO on each SVG file in-place.
 */
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// Root directory containing raw SVGs
const SVGS_DIR = path.resolve(__dirname, '../svgs');

/**
 * Recursively traverse a directory and apply a callback to each .svg file
 * @param {string} dir - directory path
 * @param {(filePath: string) => void} callback
 */
function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile() && fullPath.endsWith('.svg')) {
      callback(fullPath);
    }
  }
}

/**
 * Optimize a single SVG file using SVGO and overwrite it
 * @param {string} filePath
 */
function optimizeFile(filePath) {
  const svg = fs.readFileSync(filePath, 'utf8');
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
  fs.writeFileSync(filePath, result.data, 'utf8');
  console.log(`Optimized ${filePath}`);
}

// Start optimization process
console.log('Starting SVG optimization in', SVGS_DIR);
walkDir(SVGS_DIR, optimizeFile);
console.log('SVG optimization complete');
