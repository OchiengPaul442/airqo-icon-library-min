# AirQo Icon Library

A comprehensive, optimized SVG icon library for AirQo projects with support for React, React Native, Vue, and Flutter.

[![Manual Release](https://github.com/OchiengPaul442/airqo-icon-library-min/actions/workflows/manual-release.yml/badge.svg)](https://github.com/OchiengPaul442/airqo-icon-library-min/actions/workflows/manual-release.yml)
[![CI Build Validation](https://github.com/OchiengPaul442/airqo-icon-library-min/actions/workflows/ci.yml/badge.svg)](https://github.com/OchiengPaul442/airqo-icon-library-min/actions/workflows/ci.yml)

## 📖 Documentation

- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [Security Policy](./docs/SECURITY.md)
- [Release Process](./docs/RELEASE_PROCESS.md)
- [Administrator Deployments](./docs/ADMIN_DEPLOYMENTS.md)

## Features

- **Multi-framework support**: Use the same icons across React, React Native, Vue, and Flutter projects
- **Fully typed**: Complete TypeScript support with proper prop types
- **Optimized SVGs**: Smaller file sizes without sacrificing quality
- **Customizable**: Control size, color, fill, stroke, and other properties
- **Easy to use**: Simple imports and consistent API across frameworks
- **Tree-shakeable**: Only include the icons you use

## Packages

This monorepo contains the following packages:

- **[@airqo-icons-min/core](./packages/core/README.md)**: Core utilities and types shared across packages
- **[@airqo-icons-min/react](./packages/react/README.md)**: React components for web applications
- **[@airqo-icons-min/react-native](./packages/react-native/README.md)**: React Native components
- **[@airqo-icons-min/flutter](./packages/flutter/README.md)**: Flutter assets and utilities
- **[@airqo-icons-min/vue](./packages/vue/README.md)**: Vue components

## Quick Start

### Install

```bash
# React
npm install @airqo-icons-min/react

# React Native
npm install @airqo-icons-min/react-native

# Vue
npm install @airqo-icons-min/vue

# Flutter
# Add to pubspec.yaml:
# dependencies:
#   airqo_icons:
#     path: ./path/to/packages/flutter
```

### Usage

#### React

```jsx
import { AlertCircle, ChevronDown } from '@airqo-icons-min/react';

function MyComponent() {
  return (
    <div>
      <AlertCircle size={24} color="red" />
      <ChevronDown size="2rem" stroke="#0088FF" strokeWidth={2} />
    </div>
  );
}
```

#### React Native

```jsx
import { AlertCircle, ChevronDown } from '@airqo-icons-min/react-native';

function MyComponent() {
  return (
    <View>
      <AlertCircle size={24} color="red" />
      <ChevronDown width={32} height={32} stroke="#0088FF" strokeWidth={2} />
    </View>
  );
}
```

## Development

### Prerequisites

- Node.js (>=16)
- pnpm (>=8)

### Setup

```bash
# Install dependencies
pnpm install

# Generate icons
pnpm generate

# Build all packages
pnpm build
```

### Project Structure

```
airqo-icon-library-min/
├── docs/                # Documentation files
├── svgs/                # Original SVG files organized by category
├── packages/
│   ├── core/            # Shared utilities and types
│   ├── react/           # React components
│   ├── react-native/    # React Native components
│   ├── vue/             # Vue components
│   └── flutter/         # Flutter assets and code
├── scripts/             # Build and generation scripts
└── website/             # Documentation website
```

## Deployment and Release Process

This project uses a manual release and deployment process:

### Package Releases

Package releases are manually triggered by repository maintainers through GitHub Actions. This ensures that only authorized individuals can publish new versions.

- Only users with write permissions can trigger releases
- Releases are managed via the "Manual Release" GitHub Action
- Versioning follows semantic versioning (major.minor.patch)

For more details on the release process, see [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md).

### Website Deployment

The documentation website is also manually deployed:

- **Only repository administrators** can deploy the website
- All deployments require explicit administrator approval through protected environments
- Deployments are triggered via the "Deploy Documentation Website" GitHub Action
- The website is hosted on GitHub Pages

For more information on secure deployment practices, see [docs/ADMIN_DEPLOYMENTS.md](./docs/ADMIN_DEPLOYMENTS.md)

## Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details on how to contribute.

## Security

For information about security practices and policies, see [SECURITY.md](./docs/SECURITY.md).

## License

MIT
