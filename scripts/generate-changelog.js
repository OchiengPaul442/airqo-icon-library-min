#!/usr/bin/env node
/**
 * generate-changelog.js
 *
 * A script to generate a comprehensive changelog from git history.
 * Uses conventional commits to categorize changes.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CATEGORIES = {
  feat: '🚀 Features',
  fix: '🐛 Bug Fixes',
  perf: '⚡️ Performance',
  refactor: '♻️ Refactoring',
  docs: '📝 Documentation',
  test: '✅ Tests',
  build: '👷 Build',
  ci: '🔧 CI',
  chore: '🧹 Chore',
  style: '💄 Style',
  revert: '⏪ Reverts',
};

const CHANGELOG_FILE = path.join(__dirname, '../CHANGELOG.md');
const CURRENT_VERSION = require('../package.json').version;

/**
 * Get Git commits since the last tag
 * @returns {Array<Object>} Parsed commit objects
 */
function getCommitsSinceLastTag() {
  let lastTag;

  try {
    // Try to get the last tag
    lastTag = execSync('git describe --tags --abbrev=0').toString().trim();
  } catch (error) {
    // No tags found, use the first commit
    console.warn('No tags found. Getting all commits.');
    const firstCommit = execSync('git rev-list --max-parents=0 HEAD')
      .toString()
      .trim();
    lastTag = firstCommit;
  }

  // Get commits between last tag and HEAD
  const gitLogCommand = `git log ${lastTag}..HEAD --pretty=format:"%h|%s|%an|%ae"`;
  const commitsRaw = execSync(gitLogCommand).toString().trim();

  if (!commitsRaw) {
    console.log('No new commits since last tag.');
    return [];
  }

  // Parse commits into objects
  return commitsRaw.split('\n').map((commit) => {
    const [hash, subject, author, email] = commit.split('|');

    // Parse conventional commit format
    // Format: type(scope): message
    const match = subject.match(/^(\w+)(?:\(([^)]+)\))?: (.+)$/);

    if (match) {
      const [, type, scope, message] = match;
      return { hash, type, scope, message, author, email };
    } else {
      return {
        hash,
        type: 'other',
        scope: null,
        message: subject,
        author,
        email,
      };
    }
  });
}

/**
 * Group commits by category
 * @param {Array<Object>} commits - Parsed commits
 * @returns {Object} Grouped commits
 */
function groupCommitsByCategory(commits) {
  const grouped = {};

  commits.forEach((commit) => {
    const category = CATEGORIES[commit.type] || 'Other Changes';

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(commit);
  });

  return grouped;
}

/**
 * Format the changelog entry
 * @param {Object} groupedCommits - Commits grouped by category
 * @returns {string} Formatted changelog entry
 */
function formatChangelogEntry(groupedCommits) {
  const now = new Date().toISOString().split('T')[0];
  let content = `## [${CURRENT_VERSION}] - ${now}\n\n`;

  // Add each category and its commits
  Object.keys(groupedCommits)
    .sort()
    .forEach((category) => {
      content += `### ${category}\n\n`;

      groupedCommits[category].forEach((commit) => {
        const scope = commit.scope ? `**${commit.scope}:** ` : '';
        content += `- ${scope}${commit.message} ([${commit.hash.substring(
          0,
          7,
        )}](https://github.com/airqo-platform/airqo-icon-library-min/commit/${
          commit.hash
        }))\n`;
      });

      content += '\n';
    });

  return content;
}

/**
 * Update the CHANGELOG.md file
 * @param {string} newEntry - New changelog entry to prepend
 */
function updateChangelog(newEntry) {
  let existingContent = '';

  try {
    if (fs.existsSync(CHANGELOG_FILE)) {
      existingContent = fs.readFileSync(CHANGELOG_FILE, 'utf8');

      // Remove the title so we don't duplicate it
      existingContent = existingContent.replace(/^# Changelog\n+/, '');
    }
  } catch (error) {
    console.warn('No existing CHANGELOG.md found. Creating a new one.');
  }

  const fullChangelog = `# Changelog\n\n${newEntry}${existingContent}`;

  fs.writeFileSync(CHANGELOG_FILE, fullChangelog, 'utf8');
  console.log(`✅ CHANGELOG.md updated with version ${CURRENT_VERSION}`);
}

/**
 * Main function
 */
function main() {
  console.log('🔄 Generating changelog...');

  // Get and parse commits
  const commits = getCommitsSinceLastTag();

  if (commits.length === 0) {
    console.log('No new commits to add to changelog.');
    return;
  }

  // Group commits by category
  const groupedCommits = groupCommitsByCategory(commits);

  // Format changelog entry
  const changelogEntry = formatChangelogEntry(groupedCommits);

  // Update CHANGELOG.md
  updateChangelog(changelogEntry);

  console.log(`✨ Done! ${commits.length} commits processed.`);
}

// Run the script
main();
