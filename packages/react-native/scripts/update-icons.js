const fs = require('fs');
const path = require('path');

function updateIconComponent(content) {
  // Remove xmlns attribute
  content = content.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '');

  // Fix the types import path
  content = content.replace(/from ['"]\.\.\/types['"]/g, "from '../../types'");

  return content;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const updated = updateIconComponent(content);
      fs.writeFileSync(fullPath, updated);
    }
  });
}

// Start processing from the src/icons directory
const iconsDir = path.join(__dirname, '../src/icons');
processDirectory(iconsDir);
