module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md', 'packages/*/package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    // Only include GitHub plugin when not in dry-run mode or when GitHub token is available
    ...(!process.env.DRY_RUN &&
    (process.env.GITHUB_TOKEN || process.env.GH_TOKEN)
      ? ['@semantic-release/github']
      : []),
  ],
};
