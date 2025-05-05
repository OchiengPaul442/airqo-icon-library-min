#!/usr/bin/env node
/**
 * fix-paths.js
 * 
 * This script ensures the directory structure expected by the build process exists.
 * It creates symbolic links or copies files from the working directory to the expected paths.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Source and target directories
const SOURCE_ROOT = path.resolve(__dirname, '../packages');
const TARGET_ROOT = 'e:\\Projects\\airqo-icons\\packages\\icons';

// Define icon categories from the source
function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

console.log('🔄 Creating path structure for build process...');

// Create target directory structure if it doesn't exist
if (!fs.existsSync(TARGET_ROOT)) {
  console.log(`📁 Creating base directory: ${TARGET_ROOT}`);
  fs.mkdirSync(TARGET_ROOT, { recursive: true });
}

const targetSrcDir = path.join(TARGET_ROOT, 'src');
if (!fs.existsSync(targetSrcDir)) {
  console.log(`📁 Creating src directory: ${targetSrcDir}`);
  fs.mkdirSync(targetSrcDir, { recursive: true });
}

const targetIconsDir = path.join(targetSrcDir, 'icons');
if (!fs.existsSync(targetIconsDir)) {
  console.log(`📁 Creating icons directory: ${targetIconsDir}`);
  fs.mkdirSync(targetIconsDir, { recursive: true });
}

// Get categories from source directory
const categoriesSourceDir = path.join(SOURCE_ROOT, 'react/src/icons');
try {
  const categories = getDirectories(categoriesSourceDir);
  console.log(`🔍 Found ${categories.length} icon categories: ${categories.join(', ')}`);

  // Create directories for each category in target location
  categories.forEach(category => {
    const sourceDir = path.join(categoriesSourceDir, category);
    const targetDir = path.join(targetIconsDir, category);
    
    if (!fs.existsSync(targetDir)) {
      console.log(`📁 Creating directory: ${targetDir}`);
      fs.mkdirSync(targetDir, { recursive: true });
      
      // Copy icon files to target directory
      const files = fs.readdirSync(sourceDir);
      files.forEach(file => {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          const sourcePath = path.join(sourceDir, file);
          const targetPath = path.join(targetDir, file);
          console.log(`📄 Copying: ${sourcePath} -> ${targetPath}`);
          fs.copyFileSync(sourcePath, targetPath);
        }
      });
    } else {
      console.log(`✓ Directory already exists: ${targetDir}`);
    }
  });
  
  console.log('✅ Path fix completed successfully!');
} catch (error) {
  console.error('❌ Error processing icon categories:', error);
  process.exit(1);
}