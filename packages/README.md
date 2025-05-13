# AirQo Icon Library Package Guide

This directory contains the packages that make up the AirQo Icon Library. Each package provides icon components for a specific framework.

## Available Packages

| Package                         | Description                                     | Documentation                      |
| ------------------------------- | ----------------------------------------------- | ---------------------------------- |
| `@airqo-icons-min/core`         | Core utilities and types shared across packages | [README](./core/README.md)         |
| `@airqo-icons-min/react`        | React components for web applications           | [README](./react/README.md)        |
| `@airqo-icons-min/react-native` | React Native components                         | [README](./react-native/README.md) |
| `@airqo-icons-min/vue`          | Vue components                                  | [README](./vue/README.md)          |
| `@airqo-icons-min/flutter`      | Flutter assets and utilities                    | [README](./flutter/README.md)      |

## Integration Guide

### Selecting the Right Package

Choose the package that corresponds to your framework:

- For web applications using React: `@airqo-icons-min/react`
- For React Native mobile apps: `@airqo-icons-min/react-native`
- For Vue applications: `@airqo-icons-min/vue`
- For Flutter applications: `airqo_icons` (Flutter package)

### Installation

Follow the installation instructions in each package's README.

### Shared Features

All packages share these common features:

- Consistent naming conventions for icons across frameworks
- Standardized props/attributes for customization
- TypeScript definitions (where applicable)
- SVG optimization for performance
- Tree-shaking support for bundle size optimization

## Development

When developing across packages:

1. Make changes to the source SVGs in the root `/svgs` directory
2. Run `pnpm generate` from the root to regenerate all icon components
3. Run `pnpm build` to build all packages
4. Test changes in each framework as needed

For more detailed information, refer to the [Contributing Guide](../docs/CONTRIBUTING.md).
