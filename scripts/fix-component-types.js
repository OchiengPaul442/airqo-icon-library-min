#!/usr/bin/env node
/**
 * fix-component-types.js
 *
 * This script fixes TypeScript issues in the generated React components by:
 * 1. Adding proper imports for the IconProps type
 * 2. Updating the component props to use IconProps
 * 3. Adding proper size and color handling
 */
const fs = require('fs');
const path = require('path');

// Paths
const ROOT_DIR = path.resolve(__dirname, '..');
const REACT_PKG_DIR = path.join(ROOT_DIR, 'packages/react/src');
const REACT_ICONS_DIR = path.join(REACT_PKG_DIR, 'icons');

/**
 * Recursively find files with a specific extension
 * @param {string} dir Directory to search
 * @param {string} ext File extension to look for
 * @returns {string[]} Array of file paths
 */
function findFilesWithExt(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursive case: search subdirectories
      results = results.concat(findFilesWithExt(filePath, ext));
    } else if (file.endsWith(ext)) {
      // Base case: found a file with the right extension
      results.push(filePath);
    }
  });

  return results;
}

/**
 * Processes a single React component file
 * @param {string} filePath Path to the component file
 */
function processReactComponent(filePath) {
  try {
    console.log(`Processing: ${path.relative(ROOT_DIR, filePath)}`);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if the file has already been processed
    if (content.includes('IconProps')) {
      return;
    }

    // Add import for IconProps
    content = content.replace(
      /import \* as React from ['"]react['"];/,
      `import * as React from 'react';\nimport { IconProps } from '../../types/icon';`,
    );

    // Update the component props type
    content = content.replace(
      /const (\w+) = \(\{([^}]*)}\: React\.SVGProps<SVGSVGElement>/g,
      (match, name, props) => {
        return `const ${name} = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = "currentColor",`;
      },
    );

    // Fix props spreading
    content = content.replace(
      /}\: React\.SVGProps<SVGSVGElement>\) => \(/g,
      `  ...props
}, ref) => (`,
    );

    // Update SVG element attributes
    content = content.replace(/<svg([^>]*)>/g, (match, attributes) => {
      // Don't replace if it already has width, height and stroke attributes
      if (
        attributes.includes('width={size}') &&
        attributes.includes('stroke={color}')
      ) {
        return match;
      }

      return `<svg${attributes}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>`;
    });

    // Fix export
    const componentName = path.basename(filePath, '.tsx');
    content = content.replace(
      /export default \w+;/,
      `${componentName}.displayName = '${componentName}';\nexport default ${componentName};`,
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${path.relative(ROOT_DIR, filePath)}`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

/**
 * Main execution function
 */
function main() {
  console.log('🔧 Fixing React component types...');

  // Find all React component files using native Node.js methods
  const componentFiles = findFilesWithExt(REACT_ICONS_DIR, '.tsx');
  console.log(`Found ${componentFiles.length} component files to process.`);

  let processed = 0;
  for (const file of componentFiles) {
    processReactComponent(file);
    processed++;

    if (processed % 10 === 0) {
      console.log(`Progress: ${processed}/${componentFiles.length}`);
    }
  }

  console.log(`🎉 Finished processing ${processed} files.`);
}

// Run main function
main();
