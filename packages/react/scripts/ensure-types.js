const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Copy type definitions
const srcTypesPath = path.join(__dirname, '..', 'src', 'index.d.ts');
const distTypesPath = path.join(distPath, 'index.d.ts');

if (fs.existsSync(srcTypesPath)) {
  fs.copyFileSync(srcTypesPath, distTypesPath);
  console.log('✓ Type definitions copied to dist');
} else {
  console.log('! Type definitions not found in src');
}
