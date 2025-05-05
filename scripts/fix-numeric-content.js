#!/usr/bin/env node
/**
 * fix-numeric-content.js
 * 
 * Fixes TypeScript errors in generated icon component files that contain
 * numeric literals that TypeScript interprets as invalid octal/decimal literals.
 */

const fs = require('fs');
const path = require('path');

const REACT_PKG_DIR = path.resolve(__dirname, '../packages/react/src');
const RN_PKG_DIR = path.resolve(__dirname, '../packages/react-native/src');
const REACT_ICONS_DIR = path.join(REACT_PKG_DIR, 'icons');
const RN_ICONS_DIR = path.join(RN_PKG_DIR, 'icons');

/**
 * Fix the content of component files to avoid numeric literal errors
 * @param {string} filePath - Path to the component file
 * @returns {boolean} - Whether fix was successful
 */
function fixComponentFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const baseName = path.basename(filePath, '.tsx');
    
    // Extract the numeric part if it exists (e.g., "Icon01" -> "01")
    const match = baseName.match(/Icon(\d+)/);
    if (!match) return false; // Not a numeric icon
    
    const numericPart = match[1];
    const componentName = baseName;
    
    // Fix the most common problematic pattern:
    // Replace "const 01WithProps = withIconProps("01");" with "const iconWithProps = withIconProps("01");"
    content = content.replace(
      new RegExp(`const ${numericPart}WithProps = withIconProps\\("${numericPart}"\\);`, 'g'),
      `const iconWithProps = withIconProps("${numericPart}");`
    );
    
    // Fix the displayName line
    content = content.replace(
      new RegExp(`${numericPart}WithProps\\.displayName = ['"]${numericPart}['"];`, 'g'),
      `iconWithProps.displayName = "${componentName}";`
    );
    
    // Fix the export line
    content = content.replace(
      new RegExp(`export default ${numericPart}WithProps;`, 'g'),
      `export default iconWithProps;`
    );
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed content in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to fix content in ${filePath}: ${error.message}`);
    return false;
  }
}

/**
 * Process all component files in a directory
 * @param {string} dir - Directory to process
 * @returns {number} - Number of files fixed
 */
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory does not exist: ${dir}`);
    return 0;
  }

  const subdirs = fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(dir, dirent.name));
  
  let fixedCount = 0;

  // Process each category subdirectory
  for (const subdir of subdirs) {
    const files = fs.readdirSync(subdir)
      .filter(file => file.endsWith('.tsx') && /^Icon\d+\.tsx$/.test(file));
    
    for (const file of files) {
      const filePath = path.join(subdir, file);
      
      // Replace the component's file content to avoid numeric literal errors
      if (fixComponentFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('🔍 Searching for icon component files with numeric identifiers...');

// Fix component files in React package
const reactFixedCount = processDirectory(REACT_ICONS_DIR);
console.log(`📦 Fixed ${reactFixedCount} files in React package`);

// Fix component files in React Native package
const rnFixedCount = processDirectory(RN_ICONS_DIR);
console.log(`📱 Fixed ${rnFixedCount} files in React Native package`);

console.log(`✅ Fixed ${reactFixedCount + rnFixedCount} files in total.`);