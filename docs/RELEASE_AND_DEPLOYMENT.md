# Release and Deployment Guide

This document provides comprehensive instructions for releasing packages and deploying the documentation website for the AirQo Icon Library.

## Package Release Process

### Automatic Release via GitHub Actions

This is the recommended method for releasing packages:

1. Go to the GitHub repository
2. Click on "Actions" in the top navigation bar
3. Select the "Manual Release" workflow
4. Click on "Run workflow"
5. Choose the release type (patch, minor, or major)
6. Optionally enable "Reset version to 1.0.0" or "Dry run"
7. Click "Run workflow" to start the release process

The workflow will:

- Generate and build all packages
- Update version numbers according to your selection
- Publish packages to npm
- Create a GitHub release with release notes
- Push tags to the repository

### Manual Release From Local Machine

If the GitHub Actions workflow fails or you prefer to release locally:

1.  Clone the repository:

    ```bash
    git clone https://github.com/OchiengPaul442/airqo-icon-library-min.git
    cd airqo-icon-library-min
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

          "conventionalCommits": true,
          "changelogPreset": "angular",
          "message": "chore(release): publish %s",
          "private": false,
          "push": false,
          "gitTagVersion": true,
          "exact": true
        },
        3. Run the manual release script:

    For a dry run (no actual publishing):

    ```bash
    pnpm release:manual:dry --patch
    ```

    For an actual release:

    ```bash
    pnpm release:manual --patch
    ```

    Options:

    - `--patch`, `--minor`, or `--major` to specify the release type
    - `--dry-run` to simulate without publishing
    - `--reset-version` to reset all versions to 1.0.0

## Website Deployment

### Automatic Deployment via GitHub Actions

This is the recommended approach:

1. Go to the GitHub repository
2. Click on "Actions" in the top navigation bar
3. Select the "Deploy Documentation Website" workflow
4. Click on "Run workflow"
5. Add an optional deployment note
6. Click "Run workflow" to start the deployment

### Manual Local Deployment

To deploy the website manually:

1. Clone the repository:

   ```bash
   git clone https://github.com/OchiengPaul442/airqo-icon-library-min.git
   cd airqo-icon-library-min
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Generate icons and build the website:

   ```bash
   pnpm static:website
   ```

   This will:

   - Generate all the icons
   - Build the core package
   - Build the website with static export

4. The static website will be in the `website/out` directory

5. Preview locally before deployment:

   ```bash
   cd website
   npx serve out
   ```

6. Deploy to GitHub Pages manually:

   ```bash
   git checkout -b gh-pages
   rm -rf ./* !(.git)
   cp -r website/out/* .
   git add .
   git commit -m "Manual website deployment"
   git push -f origin gh-pages
   ```

## Troubleshooting

### Package Release Issues

1. **Lerna errors**:

   - Make sure you have lerna.json in the project root
   - Use the `--no-verify-access` flag if you encounter npm authentication issues
   - Check that your npm authentication token is valid

2. **Version conflicts**:
   - Use `--reset-version` to start from a clean version
   - Ensure versions across packages are consistent

### Website Deployment Issues

1. **Build failures**:

   - Check that Next.js is configured correctly with `output: 'export'`
   - Ensure the `next export` command is not being used (it's deprecated)
   - Use `next build` instead which handles the static export automatically

2. **GitHub Pages issues**:

   - Verify that GitHub Pages is enabled in repository settings
   - Check that the correct source branch is selected
   - Ensure the workflow has appropriate permissions

3. **404 errors after deployment**:
   - Make sure the `basePath` in next.config.js is set correctly if using a subdirectory
   - Verify the 404.html page exists for client-side routing support
