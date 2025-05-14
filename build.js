// build.js - A Node.js script to build the project without relying on shell features
const { execSync } = require('child_process');

console.log('Starting build process...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('pnpm install', { stdio: 'inherit' });

  // Build core package
  console.log('Building core package...');
  execSync('pnpm build:core', { stdio: 'inherit' });

  // Build React package
  console.log('Building React package...');
  process.chdir('./packages/react');
  execSync('pnpm build', { stdio: 'inherit' });
  process.chdir('../..');

  // Build website2
  console.log('Building website2...');
  process.chdir('./website2');
  execSync('pnpm install --no-frozen-lockfile', { stdio: 'inherit' });
  execSync('pnpm build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
