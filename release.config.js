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
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/core',
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/react',
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/react-native',
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/vue',
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'packages/*/package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  preset: 'angular',
};
