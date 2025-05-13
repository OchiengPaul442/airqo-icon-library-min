const fs = require('fs');
const path = require('path');

// Get the dist directory path
const distDir = path.resolve(__dirname, '../dist');

// Check if the directory exists
if (!fs.existsSync(distDir)) {
  console.log('Creating dist directory...');
  fs.mkdirSync(distDir, { recursive: true });
} else {
  console.log('Dist directory already exists.');
}
