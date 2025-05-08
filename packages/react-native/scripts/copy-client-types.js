/**
 * This script ensures proper TypeScript declarations for the client.js entry point
 * in the React Native package.
 */

const fs = require('fs');
const path = require('path');

// Paths to the relevant files
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const clientTypesSource = path.join(distDir, 'client.d.ts');
const clientTypesDest = path.join(rootDir, 'client.d.ts');

// Make sure we have all necessary declarations
function generateClientTypes() {
  try {
    // If there's already a client.d.ts in the dist folder, use it as base
    let clientTypesContent = '';
    if (fs.existsSync(clientTypesSource)) {
      clientTypesContent = fs.readFileSync(clientTypesSource, 'utf8');
    }

    // Create a comprehensive client.d.ts file at the root level
    const clientTypes = `// Type definitions for @airqo-icons-min/react-native/client
import React from 'react';
import { IconNativeProps } from '@airqo-icons-min/core';
import * as Icons from './dist/index';

// Include existing generated client types
${clientTypesContent}

// Re-export everything from the main index for convenience
export * from './dist/index';

// Explicitly export ClientIcon with its proper type
export declare const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconNativeProps>;
  } & IconNativeProps
>;

// Export enhanced icons
export declare const icons: typeof Icons;

// Export a default object with all enhanced icons
export default Icons;
`;

    // Write the client.d.ts file to the root directory
    fs.writeFileSync(clientTypesDest, clientTypes);
    console.log(
      '✅ Created client.d.ts file for React Native TypeScript support',
    );
  } catch (error) {
    console.error(
      '❌ Error generating client type declarations for React Native:',
      error,
    );
    process.exit(1);
  }
}

generateClientTypes();
