#!/usr/bin/env node
/**
 * rename-numeric-files.js
 * 
 * A temporary fix script to rename existing icon files that start with digits
 * and update their imports in the index files.
 */

const fs = require('fs');
const path = require('path');

const REACT_PKG_DIR = path.resolve(__dirname, '../packages/react/src');
const RN_PKG_DIR = path.resolve(__dirname, '../packages/react-native/src');
const REACT_ICONS_DIR = path.join(REACT_PKG_DIR, 'icons');
const RN_ICONS_DIR = path.join(RN_PKG_DIR, 'icons');
const REACT_INDEX_FILE = path.join(REACT_PKG_DIR, 'index.ts');
const RN_INDEX_FILE = path.join(RN_PKG_DIR, 'index.ts');

// Track all renamings for index file updates
const renamingMap = new Map();

/**
 * Rename files in a directory if they start with digits
 * @param {string} dir - Directory to process
 * @returns {number} - Number of files renamed
 */
function renameNumericFilesInDir(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory does not exist: ${dir}`);
    return 0;
  }

  const subdirs = fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(dir, dirent.name));
  
  let renamedCount = 0;

  // Process each category subdirectory
  for (const subdir of subdirs) {
    const category = path.basename(subdir);
    const files = fs.readdirSync(subdir)
      .filter(file => file.endsWith('.tsx') && /^\d/.test(file));
    
    for (const file of files) {
      const oldPath = path.join(subdir, file);
      const newName = `Icon${file}`;
      const newPath = path.join(subdir, newName);
      
      // Track the renaming for index file updates
      const fileBase = path.basename(file, '.tsx');
      const newBase = `Icon${fileBase}`;
      renamingMap.set(
        `export { default as ${fileBase} } from './icons/${category}/${fileBase}';`,
        `export { default as ${fileBase} } from './icons/${category}/${newBase}';`
      );
      
      // Backup file content in case we need to revert
      const content = fs.readFileSync(oldPath, 'utf8');
      
      try {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ Renamed: ${oldPath} -> ${newPath}`);
        renamedCount++;
      } catch (error) {
        console.error(`❌ Failed to rename ${oldPath}: ${error.message}`);
        // Try to rewrite the file with the new name if rename fails
        try {
          fs.writeFileSync(newPath, content, 'utf8');
          fs.unlinkSync(oldPath);
          console.log(`✅ Rewritten: ${oldPath} -> ${newPath}`);
          renamedCount++;
        } catch (writeError) {
          console.error(`❌ Failed to rewrite ${oldPath}: ${writeError.message}`);
        }
      }
    }
  }
  
  return renamedCount;
}

/**
 * Update index file with new import paths
 * @param {string} indexFile - Path to the index file
 * @returns {boolean} - Whether update was successful
 */
function updateIndexFile(indexFile) {
  if (!fs.existsSync(indexFile) || renamingMap.size === 0) {
    return false;
  }
  
  let content = fs.readFileSync(indexFile, 'utf8');
  
  // Update each path in the content
  for (const [oldPath, newPath] of renamingMap.entries()) {
    content = content.replace(oldPath, newPath);
  }
  
  try {
    fs.writeFileSync(indexFile, content, 'utf8');
    console.log(`✅ Updated index file: ${indexFile}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to update index file ${indexFile}: ${error.message}`);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for icon files starting with digits...');

// Rename files in React package
const reactRenamedCount = renameNumericFilesInDir(REACT_ICONS_DIR);
console.log(`📦 Renamed ${reactRenamedCount} files in React package`);

// Rename files in React Native package
const rnRenamedCount = renameNumericFilesInDir(RN_ICONS_DIR);
console.log(`📱 Renamed ${rnRenamedCount} files in React Native package`);

// Update index files if any files were renamed
if (renamingMap.size > 0) {
  console.log(`🔄 Updating import paths in index files for ${renamingMap.size} components...`);
  updateIndexFile(REACT_INDEX_FILE);
  updateIndexFile(RN_INDEX_FILE);
}

console.log('✅ Fix completed!');