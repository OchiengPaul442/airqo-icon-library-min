#!/usr/bin/env node
/**
 * setup-missing-files.js
 *
 * This script ensures that all required files for the project are in place
 * It creates missing files that are necessary for building the project
 */
const fs = require('fs');
const path = require('path');

// Paths to check and create if missing
const filesToCheck = [
  {
    path: path.resolve(__dirname, '../website/src/lib/utils.ts'),
    content: `// Define ClassValue type if not available in the clsx package
type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: boolean }
  | ClassValue[];
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines Tailwind CSS classes
 * and handles class name conflicts properly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Export functions as default and named exports
export default { cn };
`,
  },
];

console.log('🔍 Checking for missing files...');

let createdFiles = 0;

// Check each file and create if missing
filesToCheck.forEach((file) => {
  const dirPath = path.dirname(file.path);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    console.log(`📁 Creating directory: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Create file if it doesn't exist
  if (!fs.existsSync(file.path)) {
    console.log(`📄 Creating file: ${file.path}`);
    fs.writeFileSync(file.path, file.content, 'utf8');
    createdFiles++;
  }
});

if (createdFiles > 0) {
  console.log(`✅ Created ${createdFiles} missing files.`);
} else {
  console.log('✅ All required files are present.');
}

console.log('✅ Setup complete!');
