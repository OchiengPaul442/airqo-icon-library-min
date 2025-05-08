# Website and Package Deployment Guide

This document explains the different deployment workflows in this repository and how to deploy only the website without triggering package releases.

## Workflow Overview

This repository has three main GitHub Actions workflows:

1. **CI Workflow** (`ci.yml`)

   - Runs on pull requests to verify code quality
   - Performs linting, type checking, and builds

2. **Release Workflow** (`release.yml`)

   - Triggered on pushes to `main` that modify packages, SVGs, or scripts
   - Updates version numbers using semantic release
   - Publishes packages to NPM

3. **GitHub Pages Workflow** (`deploy-pages.yml`)
   - Deploys the website to GitHub Pages
   - Runs on all pushes to `main`

## How to Deploy Only the Website

There are two ways to deploy only the website without triggering package releases:

### Method 1: Using the Website-Only Script

1. Make your changes to the website files
2. Run the website-only deployment script:

```bash
pnpm deploy:website-only
```

3. Push the changes to GitHub:

```bash
git push origin main
```

The script will add a special tag `[website-only]` to your commit message, which prevents the release workflow from running.

### Method 2: Manual Commit with Skip Tag

1. Make your changes to the website files
2. Stage your changes:

```bash
git add .
```

3. Commit with a skip tag:

```bash
git commit -m "Update website content [website-only]"
# or
git commit -m "Update website content [skip-packages]"
```

4. Push the changes to GitHub:

```bash
git push origin main
```

### Method 3: Modifying Website Files Only

The release workflow is configured to ignore changes that only affect the `website/` directory. If you only modify files in this directory, the package release workflow won't be triggered.

## Deployment Behavior

| Files Changed                                      | Release Workflow | GitHub Pages Workflow |
| -------------------------------------------------- | ---------------- | --------------------- |
| Only website files                                 | ❌ No            | ✅ Yes                |
| Package files                                      | ✅ Yes           | ✅ Yes                |
| Both                                               | ✅ Yes           | ✅ Yes                |
| Any with `[website-only]` or `[skip-packages]` tag | ❌ No            | ✅ Yes                |

## Tips

- Always verify that your changes only affect the website if you don't want to trigger a package release.
- When working on major refactoring that touches both website and package files, consider separating the changes into multiple commits.
- Use `git status` to check which files will be committed before running the deployment scripts.
