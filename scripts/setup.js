/**
 * setup.js - Runs all the setup tasks in a Node.js environment without shell dependencies
 * Used for CI environments like Vercel where shell type detection might fail
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Running setup tasks for deployment...');

try {
  // Run the setup-missing-files.js script
  console.log('\n📁 Setting up missing files...');
  require('./setup-missing-files.js');
  console.log('✅ Missing files setup completed');
} catch (error) {
  console.error('❌ Error during setup:', error.message);
  process.exit(1);
}
