module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md'
    }],
    // Core package publish
    ['@semantic-release/npm', {
      pkgRoot: './packages/core',
      tarballDir: 'dist',
      npmPublish: true
    }],
    // React package publish
    ['@semantic-release/npm', {
      pkgRoot: './packages/react',
      tarballDir: 'dist',
      npmPublish: true
    }],
    // React Native package publish
    ['@semantic-release/npm', {
      pkgRoot: './packages/react-native',
      tarballDir: 'dist',
      npmPublish: true
    }],
    // Angular package publish
    ['@semantic-release/npm', {
      pkgRoot: './packages/angular',
      tarballDir: 'dist',
      npmPublish: true
    }],
    // Vue package publish
    ['@semantic-release/npm', {
      pkgRoot: './packages/vue',
      tarballDir: 'dist',
      npmPublish: true
    }],
    // Publish Flutter package to pub.dev via exec plugin
    ['@semantic-release/exec', {
      publishCmd: 'cd packages/flutter && flutter pub publish --force'
    }],
    '@semantic-release/github'
  ]
};

// **Why was the Flutter plugin commented out?**
// Official semantic-release plugins for pub.dev are not mature, so we use `@semantic-release/exec` to run
// `flutter pub publish` directly, ensuring the Flutter package is published in the same CI pipeline.
