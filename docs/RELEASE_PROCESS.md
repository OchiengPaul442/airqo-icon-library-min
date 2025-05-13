# Release Process

This document provides a guide on how to release new versions of the AirQo Icon Library.

## Release Methods

There are two main ways to release:

1. **Automated Release** (Recommended): Using GitHub Actions workflow
2. **Manual Release**: Using command-line scripts

## Automated Release via GitHub Actions

### Steps

1. Go to the GitHub repository
2. Click on "Actions" in the top navigation bar
3. Select the "Manual Release" workflow
4. Click "Run workflow"
5. Configure the release:
   - Select release type: `patch`, `minor`, or `major`
   - Choose whether to run in dry-run mode (no actual publishing)
6. Click "Run workflow" to start the release process

### What Happens During Release

The workflow will:

1. Generate icon components
2. Update version numbers in all packages
3. Publish packages to npm
4. Create tags and a GitHub release

## Manual Release

If you need to release manually:

### Prerequisites

1. Make sure you have npm access to publish packages
2. Run `npm login` to authenticate with npm

### Command Line Release

Use the package.json script:

```bash
# For a dry run (no actual publishing)
pnpm release:dry

# For an actual release
pnpm release -- --patch  # For patch version
pnpm release -- --minor  # For minor version
pnpm release -- --major  # For major version
```

## Versioning Guidelines

We follow semantic versioning:

- **Patch (1.0.x)**: Bug fixes, minor improvements
- **Minor (1.x.0)**: New features, non-breaking changes
- **Major (x.0.0)**: Breaking changes

## After Release

After releasing:

1. Verify the packages are available on npm
2. Deploy the documentation website
3. Notify users about the new release

## Troubleshooting

If issues occur during release:

1. Check the npm authentication status
2. Verify package.json versions are correct
3. Check for any build errors
