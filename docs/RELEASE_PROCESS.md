# Release Process

This document outlines the detailed release process for the AirQo Icon Library packages.

## Release Types

The AirQo Icon Library follows semantic versioning (SemVer) with three types of releases:

- **Patch**: Bug fixes and minor updates (`1.0.0` → `1.0.1`)
- **Minor**: New features that don't break existing functionality (`1.0.0` → `1.1.0`)
- **Major**: Breaking changes that require users to modify their code (`1.0.0` → `2.0.0`)

## Release Workflow

### 1. Preparation

Before initiating a release:

1. Ensure all tests pass in the CI pipeline
2. Verify the documentation is up-to-date
3. Make sure all intended changes are merged into the main branch

### 2. Manual Release Workflow

Releases are triggered manually through GitHub Actions:

1. Navigate to the repository on GitHub
2. Go to the "Actions" tab
3. Select the "Manual Release" workflow
4. Click "Run workflow"
5. Select the release type (patch, minor, or major)
6. Optionally check "Reset version to 1.0.0" for complete version resets
7. Optionally check "Dry run" to test the release process without publishing
8. Click "Run workflow" to start the release process

### 3. Release Process Steps

The release workflow performs these steps:

1. **Build Verification**:

   - Checks out the code
   - Sets up Node.js and PNPM
   - Installs dependencies
   - Generates icon components
   - Builds all packages

2. **Version Management**:

   - Determines the next version based on the selected release type
   - Updates version numbers in all package.json files
   - Creates git tags for the new version

3. **Publishing to npm**:

   - If not a dry run, publishes all packages to npm
   - Uses the NPM_TOKEN stored in GitHub Secrets

4. **GitHub Release Creation**:
   - Creates a GitHub release with automatically generated release notes
   - Links to the git tag for the version

### 4. Environment Requirements

For successful releases, the following must be configured:

- GitHub repository secret: `NPM_TOKEN` with publish permissions
- GitHub Actions workflow permissions to create releases
- Optional: Protected environments for controlled releases

## Special Version Reset

In some cases, it may be necessary to reset all package versions to `1.0.0`:

- Use this option when completely refactoring the package structure
- This will reset the version in all package.json files
- All dependencies between packages will be updated to reference `1.0.0`

## Post-Release

After a successful release:

1. Verify all packages appear on npm with the correct version
2. Check that the GitHub release was created correctly
3. Ensure the documentation website reflects the latest version

## Troubleshooting

If a release fails:

1. Check the GitHub Actions log for specific error messages
2. Verify that the NPM_TOKEN is valid and has publish permissions
3. For git push issues, ensure the workflow has proper permissions
4. For npm authentication issues, check registry URLs in package.json files

## Manual Recovery

In rare cases where the automatic process fails:

1. Reset any partial git tags: `git tag -d v<version> && git push origin :refs/tags/v<version>`
2. Manually publish using: `npx lerna publish from-package`
