# Contributing to AirQo Icon Library

Thank you for your interest in contributing to the AirQo Icon Library! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Development Workflow](#development-workflow)
  - [Adding New Icons](#adding-new-icons)
  - [Making Changes](#making-changes)
  - [Testing Your Changes](#testing-your-changes)
- [Submitting Changes](#submitting-changes)
  - [Pull Request Process](#pull-request-process)
  - [Commit Message Guidelines](#commit-message-guidelines)
- [Icon Design Guidelines](#icon-design-guidelines)
- [Release Process](#release-process)
- [Getting Help](#getting-help)

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct, which is to treat all contributors with respect and foster an inclusive and welcoming environment.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PNPM package manager (v8.10.0 or higher)
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/airqo-icon-library-min.git
   cd airqo-icon-library-min
   ```
3. Add the original repository as a remote to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/airqo-platform/airqo-icon-library-min.git
   ```
4. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

### Adding New Icons

1. Create your SVG icon following our [Icon Design Guidelines](#icon-design-guidelines)
2. Add the SVG file to the appropriate category folder in `svgs/`
   - If your icon doesn't fit into an existing category, you can propose a new category
3. Run the optimization script:
   ```bash
   pnpm optimize
   ```
4. Generate component files:
   ```bash
   pnpm generate
   ```
5. Run the build process:
   ```bash
   pnpm build
   ```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes to the codebase
3. If you've modified scripts or added features, update relevant documentation

### Testing Your Changes

1. Build all packages:
   ```bash
   pnpm build
   ```
2. Test your changes with the sample apps (when available):
   ```bash
   cd examples/react-demo
   pnpm install
   pnpm start
   ```

## Submitting Changes

### Pull Request Process

1. Update your fork with the latest changes from upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Create a pull request through the GitHub UI
4. Fill in the PR template with details about your changes
5. Wait for maintainers to review your PR

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `perf:` for performance improvements
- `test:` for adding or modifying tests
- `chore:` for maintenance tasks

Example: `feat: add new notification bell icons`

## Icon Design Guidelines

For consistent icons, please follow these guidelines:

- Use a 24x24 SVG canvas with `viewBox="0 0 24 24"`
- Use a consistent stroke width (preferably 2px)
- Optimize your SVGs (remove unnecessary attributes, groups, etc.)
- Use meaningful, descriptive names in kebab-case format (`alert-circle.svg`)
- Avoid embedding raster images or external resources
- Test your icons with different sizes
- Ensure icons work well in both light and dark themes

## Release Process

The release process is manually triggered by authorized repository maintainers:

1. Only users with write permissions to the repository can trigger releases
2. Releases are initiated through the GitHub Actions workflow "Manual Release"
3. The process involves:
   - Selecting a version increment type (patch, minor, or major)
   - Optionally running a dry-run to validate the process
   - Generating a changelog based on conventional commit messages
   - Building and publishing packages to npm
   - Creating a Git tag and GitHub release
   - Updating documentation

### Triggering a Release

To trigger a release (requires repository administrator permissions):

1. Go to the GitHub repository's "Actions" tab
2. Select the "Manual Release" workflow
3. Click "Run workflow"
4. Configure your release:

   - **Release type**: Select patch (0.0.X), minor (0.X.0), or major (X.0.0)
   - **Reset version**: Option to reset to version 1.0.0 (rarely used)
   - **Dry run**: Option to test the release process without publishing

5. Click "Run workflow" to start the release process
6. The workflow will require approval from a repository administrator
7. Once approved, the workflow will run and you can monitor progress in the Actions tab

**Note**: Only repository administrators can trigger and approve releases. This is enforced through protected environments in GitHub.

## Website Deployment

The documentation website deployment is also manually triggered:

1. Only repository administrators can deploy the website
2. All website deployments require explicit approval through protected environments
2. The deployment is initiated through the GitHub Actions workflow "Deploy Documentation Website"
3. The process involves:
   - Building the icon library packages
   - Generating required file types and components
   - Building the Next.js website
   - Deploying to GitHub Pages

### Triggering a Website Deployment

To deploy the documentation website (requires repository write permissions):

1. Go to the GitHub repository's "Actions" tab
2. Select the "Deploy Documentation Website" workflow
3. Click "Run workflow"
4. Optionally add a deployment note
5. Click "Run workflow" to start the deployment process
6. Monitor the progress in the Actions tab

## Getting Help

If you need help with contributing:

- Open an issue with questions
- Contact the maintainers
- Join our community channels (when available)

Thank you for contributing to AirQo Icon Library! 🎨
