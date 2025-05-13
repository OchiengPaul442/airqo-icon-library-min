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
   git clone https://github.com/yourusername/airqo-icon-library-min.git
   cd airqo-icon-library-min
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Generate the icons:
   ```bash
   pnpm generate
   ```
5. Build all packages:
   ```bash
   pnpm build
   ```

## Development Workflow

### Adding New Icons

1. **Prepare your SVG file**:

   - Optimize it with a tool like SVGO
   - Ensure it's a clean, single-color SVG (stroked or filled)
   - Ensure viewBox is properly set (typically 0 0 24 24)

2. **Add to the SVG directory**:

   - Place your SVG in the appropriate category folder in `svgs/`
   - If creating a new category, add a new folder with a clear descriptive name

3. **Regenerate the icons**:

   ```bash
   pnpm generate
   ```

4. **Verify the generated code**:
   - Check that components were created in all packages
   - Ensure TypeScript types are correct

### Making Changes

1. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes.

3. Run linting and type checks:

   ```bash
   pnpm lint
   pnpm type-check
   ```

4. Fix any issues that arise.

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

   Or use the documentation website:

   ```bash
   cd website
   pnpm dev
   ```

## Submitting Changes

### Pull Request Process

1. Commit your changes using semantic commit messages.
2. Push to your fork.
3. Submit a pull request to the main repository.
4. Address any feedback from reviewers.

### Commit Message Guidelines

We follow conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `perf:` for performance improvements
- `test:` for adding or updating tests
- `chore:` for routine tasks, dependency updates, etc.

Examples:

- `feat: add new chart icons`
- `fix: correct stroke width in alert icons`
- `docs: update React component usage examples`

## Icon Design Guidelines

When creating or modifying icons:

1. **Consistency**: Maintain visual consistency with existing icons
2. **Simplicity**: Keep icons clean and easily recognizable
3. **Dimensions**: Use a 24x24 viewBox unless there's a specific reason not to
4. **Optimization**: Optimize SVGs to remove redundant code
5. **Naming**: Use kebab-case for filenames (e.g., `alert-circle.svg`)
6. **Categorization**: Place icons in appropriate category folders

## Release Process

Releases are managed by repository maintainers:

1. Releases are manually triggered through GitHub Actions
2. Only users with write permissions can trigger releases
3. The version number is automatically incremented based on conventional commits
4. Packages are automatically published to npm

## Getting Help

If you need help, please:

1. Check existing documentation
2. Look through existing issues and pull requests
3. Create a new issue with your question
