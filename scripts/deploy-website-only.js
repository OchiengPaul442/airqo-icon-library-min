#!/usr/bin/env node
/**
 * deploy-website-only.js
 *
 * This script helps in creating a commit that will only trigger the website deployment
 * and skip the package release process by adding [skip-packages] to the commit message
 */

const { execSync } = require('child_process');

// Helper to run commands
function runCommand(command) {
  try {
    return execSync(command, {
      stdio: 'inherit',
      encoding: 'utf-8',
    });
  } catch (error) {
    console.error(`Error running "${command}": ${error.message}`);
    process.exit(1);
  }
}

// Main function
function deployWebsiteOnly() {
  console.log('🌐 Preparing website-only deployment...');

  // Check if there are any pending changes
  const status = execSync('git status --porcelain', { encoding: 'utf-8' });

  if (!status.trim()) {
    console.log('❌ No changes detected! Make changes to website files first.');
    process.exit(1);
  }

  // Prompt for commit message
  console.log('\n📝 Enter a commit message for your website changes:');
  process.stdout.write('> ');

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (message) => {
    if (!message.trim()) {
      console.log('❌ Commit message cannot be empty!');
      rl.close();
      process.exit(1);
    }

    // Format the commit message with the skip tag
    const commitMessage = `${message.trim()} [website-only]`;

    try {
      // Stage all changes
      runCommand('git add .');

      // Commit with the special message
      runCommand(`git commit -m "${commitMessage}"`);

      console.log('\n✅ Changes committed with [website-only] tag!');
      console.log(
        '🚀 You can now push these changes to trigger only the website deployment.',
      );
      console.log('   Run: git push origin main');
    } catch (error) {
      console.error('❌ Failed to commit changes:', error.message);
    }

    rl.close();
  });
}

// Run the main function
deployWebsiteOnly();
