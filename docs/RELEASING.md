# Release Guide for AirQo Icon Library

This document provides detailed instructions for both automated and manual release processes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Automated Release Process](#automated-release-process)
- [Manual Release Process](#manual-release-process)
- [Troubleshooting](#troubleshooting)
- [After Release](#after-release)

## Prerequisites

Before releasing, ensure:

1. All changes are committed and pushed to the main branch
2. CI checks are passing
3. You have appropriate permissions for the repository and npm
4. For manual releases, npm authentication is set up (`npm login`)

## Automated Release Process

The recommended way to release is using the GitHub Actions workflow:

### Using GitHub Actions

1. Navigate to the repository on GitHub
2. Go to the "Actions" tab
3. Select the "Manual Release" workflow
4. Click "Run workflow"
5. Configure the release:
   - Release type: `patch`, `minor`, or `major` (following semantic versioning)
   - Dry run: Set to `true` to simulate the release without publishing
6. Click "Run workflow" to start the release process

### Monitoring the Release

1. Watch the workflow execution in the Actions tab
2. Once completed, check:
   - GitHub releases for the new tag
   - npm packages for the updated versions

## Manual Release Process

If GitHub Actions fails or you prefer to release manually:

### Using the Package Scripts

1. Ensure you have the latest code:
   ```bash
   git pull origin main
   ```

2. Run the release script with appropriate flags:
   ```bash
   # For a dry run
   pnpm release:dry -- --patch

   # For an actual release
   pnpm release -- --patch
   ```

   Available flags:
   - `--patch`, `--minor`, or `--major` for release type
   - `--dry-run` is handled by using the release:dry command

### Advanced Manual Release

For advanced users or troubleshooting:

1. Generate the icon components:
   ```bash
   pnpm generate
   pnpm fix-component-types
   pnpm enhance-rn
   ```

2. Update versions manually:
   ```bash
   # For each package
   cd packages/core
   npm version patch --no-git-tag-version
   cd ../react
   npm version patch --no-git-tag-version
   # And so on for other packages
   ```

3. Build the packages:
   ```bash
   pnpm build
   ```

4. Publish manually:
   ```bash
   cd packages/core
   npm publish --access public
   cd ../react
   npm publish --access public
   # And so on for other packages
   ```

## Troubleshooting

### Common Issues

1. **Authentication failures**:
   - Error: "npm ERR! code E401" or permission denied errors
   - Solution: Ensure you're logged in (`npm login`) and have publish rights

2. **Version conflicts**:
   - Error: Dependency errors between packages
   - Solution: Manually sync version numbers across packages

3. **Git issues**:
   - Error: Git-related errors during versioning
   - Solution: Ensure you have a clean git working directory

### Getting Help

If you encounter problems:
1. Check the GitHub Actions logs for detailed error messages
2. Review npm documentation for publishing issues
3. Reach out to the repository maintainers

## After Release

Once a new version is released:

1. Verify the packages are available on npm
2. Update the documentation website to reflect new features or changes
3. Communicate the release to relevant stakeholders
4. Create a new GitHub milestone for the next release cycle
