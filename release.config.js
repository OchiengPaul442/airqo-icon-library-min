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
      '@semantic-release/github',
      {
        assets: [{ path: 'packages/*/dist/*.tgz', label: 'NPM distribution' }],
        successComment: true,
        failTitle: true,
      },
    ],
    // Core package publish (must be first since others depend on it)
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/core',
        tarballDir: 'dist',
        npmPublish: true,
        // Ensure core package is published before others
        verifyConditions: ['@semantic-release/npm', { npmPublish: true }],
        prepare: ['@semantic-release/npm', { npmPublish: true }],
      },
    ],
    // Other packages that depend on core
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/react',
        tarballDir: 'dist',
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/react-native',
        tarballDir: 'dist',
        npmPublish: true,
      },
    ],
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
        assets: ['CHANGELOG.md', 'packages/*/package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  preset: 'angular',
};
