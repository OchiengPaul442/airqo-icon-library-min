# Release Process Cleanup

This document summarizes the changes made to clean up and improve the release process of the AirQo Icon Library.

## Changes Made

### 1. Removed Lerna Dependency

Lerna was previously used for managing the release of multiple packages. However, to simplify the setup:

- Removed `lerna.json` file
- Updated release scripts to use direct npm version and publish commands
- Removed Lerna initialization from workflow files

Benefits:

- Simplified release process
- Reduced dependencies
- More direct control over versioning

### 2. Updated GitHub Actions Workflows

The workflows have been simplified and improved:

- Fixed YAML syntax in workflow files
- Created clean versions of workflows with proper formatting
- Simplified to three main workflows:
  1. CI build
  2. Manual release
  3. Website deployment

### 3. Updated Release Scripts

The scripts for releasing packages have been updated to use direct npm commands:

- `scripts/publish-packages.js` now uses `npm version` and `npm publish`
- `scripts/manual-release.js` has been updated to remove Lerna initialization
- Added proper version synchronization across packages

### 4. Updated Documentation

Documentation has been updated to reflect the simpler process:

- Updated RELEASE_PROCESS.md with current workflow
- Updated RELEASING.md with clearer instructions
- Updated RELEASE_AND_DEPLOYMENT.md to remove Lerna references

## Testing and Next Steps

To ensure the updated release process works correctly:

1. Run a dry-run release with `pnpm release:dry -- --patch`
2. Verify that:
   - Package versions are updated correctly
   - No actual publishing occurs
   - Scripts exit with success status

After testing, a full release can be performed via:

- GitHub Actions "Manual Release" workflow
- Or running `pnpm release -- --patch` locally

## Additional Improvements

For further enhancement of the release process:

1. Set up branch protection rules in the repository
2. Configure GitHub Pages settings
3. Add NPM_TOKEN to GitHub secrets if not already present
