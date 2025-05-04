# @airqo-icons-min/core

Core utilities and type definitions for AirQo icon packages.

[![NPM Version](https://img.shields.io/npm/v/@airqo-icons-min/core)](https://www.npmjs.com/package/@airqo-icons-min/core)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## About

This package provides shared utilities and type definitions used by all AirQo icon packages. It includes:

- Icon metadata and manifest
- Common type definitions
- Shared utilities

## Installation

```bash
# npm
npm install @airqo-icons-min/core

# yarn
yarn add @airqo-icons-min/core

# pnpm
pnpm add @airqo-icons-min/core
```

## Usage

```typescript
import { icons, IconMeta } from '@airqo-icons-min/core';

// Use the icon manifest to get information about all available icons
console.log(`Total icons available: ${icons.length}`);

// Filter icons by category
const alertIcons = icons.filter((icon) => icon.category === 'alerts_feedback');
console.log(`Alert icons available: ${alertIcons.length}`);

// Find a specific icon
const alertCircle = icons.find((icon) => icon.name === 'AlertCircle');
```

## Icon Manifest

The icon manifest contains metadata for all available icons:

```typescript
interface IconMeta {
  name: string; // PascalCase component name (e.g., 'AlertCircle')
  category: string; // Original category folder name (e.g., 'alerts_feedback')
}
```

## Note for Package Authors

This package is primarily intended for internal use by other AirQo icon packages. End users should typically import from the framework-specific packages like:

- `@airqo-icons-min/react`
- `@airqo-icons-min/react-native`
- `@airqo-icons-min/vue`

## License

MIT © AirQo
