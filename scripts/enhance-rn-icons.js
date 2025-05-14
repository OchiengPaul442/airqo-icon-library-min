#!/usr/bin/env node
/**
 * enhance-rn-icons.js
 *
 * This script wraps all React Native icon components with the withIconProps HOC
 * to add size prop support and converts file imports to use the IconComponent type.
 * Enhanced to work in any environment including CI platforms.
 */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisify file system operations for better async/await usage
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Define paths
const RN_ICONS_DIR = path.resolve(
  __dirname,
  '../packages/react-native/src/icons',
);
const RN_INDEX_PATH = path.resolve(
  __dirname,
  '../packages/react-native/src/index.ts',
);

/**
 * Recursively gets all files in a directory
 * @param {string} dir - Directory to search
 * @returns {Promise<string[]>} Array of file paths
 */
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }),
  );
  return files.flat();
}

/**
 * Updates a React Native icon component to use withIconProps HOC
 * @param {string} content - File content
 * @param {string} componentName - Component name
 * @param {string} filePath - File path
 * @returns {string} Updated content
 */
function enhanceIconComponent(content, componentName, filePath) {
  // Skip if already enhanced
  if (content.includes('withIconProps')) {
    return content;
  }

  // Calculate the relative path to the withIconProps file
  const iconDirPath = path.dirname(filePath);
  const packageSrcPath = path.resolve(
    __dirname,
    '../packages/react-native/src',
  );

  // Get relative path from the icon file to the package src directory
  const relativePath = path.relative(iconDirPath, packageSrcPath);
  const withIconPropsImportPath = path
    .join(relativePath, 'withIconProps')
    .replace(/\\/g, '/');

  // 1. Update imports with the correct relative path
  let updatedContent = content.replace(
    /import \* as React from ['"]react['"];/,
    `import * as React from 'react';
import { withIconProps } from '${withIconPropsImportPath}';`,
  );

  // 2. Wrap the component with withIconProps HOC
  // Find the export statement
  const exportMatch = updatedContent.match(/export default (\w+);/);
  if (!exportMatch) {
    console.warn(`⚠️ Could not find export in ${componentName}`);
    return content;
  }

  // Replace the export with the wrapped version
  updatedContent = updatedContent.replace(
    /export default (\w+);/,
    `const ${exportMatch[1]}WithProps = withIconProps(${exportMatch[1]});
${exportMatch[1]}WithProps.displayName = '${componentName}';
export default ${exportMatch[1]}WithProps;`,
  );

  return updatedContent;
}

/**
 * Main function to update all React Native icon components
 */
async function enhanceAllIconComponents() {
  try {
    console.log('🔄 Enhancing React Native icons with size prop support...');

    // 1. Get all React Native icon components
    const files = await getFiles(RN_ICONS_DIR);
    const tsxFiles = files.filter((file) => file.endsWith('.tsx'));

    console.log(`🔍 Found ${tsxFiles.length} icon components to process.`);

    // 2. Update each component
    let updatedCount = 0;
    let skippedCount = 0;

    // Process in batches of 20 to avoid overwhelming the console with messages
    const batchSize = 20;
    for (let i = 0; i < tsxFiles.length; i += batchSize) {
      const batch = tsxFiles.slice(i, i + batchSize);

      // Use sequential processing instead of parallel to avoid potential issues
      for (const file of batch) {
        try {
          const content = await readFile(file, 'utf8');
          const componentName = path.basename(file, '.tsx');
          const updatedContent = enhanceIconComponent(
            content,
            componentName,
            file,
          );

          if (content !== updatedContent) {
            await writeFile(file, updatedContent);
            updatedCount++;
          } else {
            skippedCount++;
          }
        } catch (fileError) {
          console.error(`❌ Error processing file ${file}:`, fileError.message);
        }
      }

      // Show progress update for each batch
      console.log(
        `Progress: ${Math.min(i + batchSize, tsxFiles.length)}/${
          tsxFiles.length
        } files processed`,
      );
    }

    console.log(
      `\n✅ Summary: ${updatedCount} components enhanced, ${skippedCount} already enhanced or skipped.`,
    );

    console.log('🚀 All icons now support the size prop in React Native!');
  } catch (error) {
    console.error('❌ Error enhancing React Native components:', error);
    process.exit(1);
  }
}

// Run the main function with proper error handling
enhanceAllIconComponents().catch((error) => {
  console.error('❌ Unhandled error during script execution:', error);
  process.exit(1);
});
