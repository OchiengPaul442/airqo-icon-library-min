# Website Deployment Guide

This document provides a comprehensive guide on how to deploy the AirQo Icon Library documentation website to GitHub Pages.

## Deployment Methods

The website can be deployed using the following methods:

1. **Automatic Deployment**: Using GitHub Actions workflow
2. **Manual Deployment**: Using local build and GitHub Pages settings

## Running the Website Locally

To run the website locally:

1. Build the website first:

   ```bash
   pnpm build:website
   ```

2. Start the local server to view the static export:

   ```bash
   pnpm start:website
   ```

   This will serve the static files from the `website/out` directory using the `serve` package.

   > **Note**: Since the website uses static export configuration (`output: 'export'` in next.config.js),
   > you cannot use `next start` to run it. Instead, we use a static file server.

## Automatic Deployment via GitHub Actions

This is the recommended approach for deploying the website.

### Prerequisites

1. Ensure you have administrator access to the repository
2. Configure GitHub Pages as described in [ADMIN_DEPLOYMENTS.md](./ADMIN_DEPLOYMENTS.md)

### Deployment Steps

1. Go to the GitHub repository
2. Click on "Actions" in the top navigation bar
3. Select the "Deploy Documentation Website" workflow
4. Click on "Run workflow"
5. Add an optional deployment note (for reference)
6. Click "Run workflow" to start the deployment process

### What Happens During Deployment

1. The workflow checks out the code
2. Installs dependencies
3. Generates icon components
4. Builds the website using Next.js static export
5. Deploys to GitHub Pages

### Monitoring Deployment

1. You can monitor the progress of the deployment in the Actions tab
2. Once completed successfully, you'll see a green checkmark
3. The deployment summary will show the URL of the deployed website

## Manual Local Deployment

You can also build the website locally and deploy it manually.

### Local Build Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/OchiengPaul442/airqo-icon-library-min.git
   cd airqo-icon-library-min
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Generate icons:

   ```bash
   pnpm generate
   ```

4. Build the website:

   ```bash
   cd website
   pnpm static
   ```

5. The static website will be in the `website/out` directory

### Manual Deployment to GitHub Pages

1. Go to the repository settings
2. Click on "Pages" in the left sidebar
3. Under "Build and deployment", select "Deploy from a branch"
4. Select the branch (usually "gh-pages" or "main")
5. Select the folder (usually "/docs" or "/root")
6. Click "Save"

## Customization Options

### Custom Domain

To use a custom domain:

1. Add your domain in the GitHub Pages settings
2. Create a CNAME file in the `website/public` folder with your domain
3. Update DNS settings as directed by GitHub

### Base Path Configuration

If you're deploying to a subdirectory (like `username.github.io/repo-name`), you need to update:

1. Edit `website/next.config.ts`:
   ```typescript
   // Uncomment and set this for subdirectory deployments
   basePath: '/airqo-icon-library-min',
   ```

## Troubleshooting

### Common Issues

1. **Build failures**:

   - Check that all dependencies are installed
   - Verify the Next.js configuration is correct
   - Look for syntax errors in components

2. **Deployment issues**:

   - Ensure GitHub Pages is enabled
   - Verify the workflow has appropriate permissions
   - Check that the workflow is using the correct environment

3. **404 errors after deployment**:
   - Make sure the `basePath` is correctly set in `next.config.ts`
   - Check that all assets use relative paths

### Getting Help

If you encounter issues with deployment:

1. Check the workflow logs for error messages
2. Refer to the Next.js documentation for export-related issues
3. Review GitHub Pages documentation for deployment-specific problems
