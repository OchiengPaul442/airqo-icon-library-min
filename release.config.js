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
    // Core package publish
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/core',
        tarballDir: 'dist',
        npmPublish: true,
      },
    ],
    // React package publish
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/react',
        tarballDir: 'dist',
        npmPublish: true,
      },
    ],
    // React Native package publish
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/react-native',
        tarballDir: 'dist',
        npmPublish: true,
      },
    ],
    // Vue package publish
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/vue',
        tarballDir: 'dist',
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
