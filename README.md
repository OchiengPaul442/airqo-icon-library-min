# AirQo Icon Library

A comprehensive SVG icon library for AirQo applications, providing consistent icons for React, React Native, Vue, and Flutter projects.

[![NPM Version](https://img.shields.io/npm/v/@airqo-icons/react)](https://www.npmjs.com/package/@airqo-icons/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

AirQo Icon Library is a meticulously crafted collection of SVG icons optimized for use across multiple frontend frameworks. It provides a unified set of icons that can be easily integrated into different application types while maintaining visual consistency.

## Features

- ✨ **Framework Agnostic** - Use the same icons in React, React Native, Vue, and Flutter
- 🎨 **Customizable** - Change sizes, colors, and other properties as needed
- 🚀 **Optimized SVGs** - Minified and optimized for web and mobile performance
- 📦 **Categorized Icons** - Well-organized icon sets for different use cases
- 📱 **Native Support** - First-class support for React Native with react-native-svg

## Available Packages

| Package                   | Description              | Link                                                           |
| ------------------------- | ------------------------ | -------------------------------------------------------------- |
| @airqo-icons/core         | Core types and utilities | [NPM](https://www.npmjs.com/package/@airqo-icons/core)         |
| @airqo-icons/react        | React components         | [NPM](https://www.npmjs.com/package/@airqo-icons/react)        |
| @airqo-icons/react-native | React Native components  | [NPM](https://www.npmjs.com/package/@airqo-icons/react-native) |
| @airqo-icons/vue          | Vue components           | [NPM](https://www.npmjs.com/package/@airqo-icons/vue)          |
| airqo_icons_flutter       | Flutter package          | [Pub.dev](https://pub.dev)                                     |

## Installation

### React

```bash
# npm
npm install @airqo-icons/react

# yarn
yarn add @airqo-icons/react

# pnpm
pnpm add @airqo-icons/react
```

### React Native

```bash
# npm
npm install @airqo-icons/react-native react-native-svg

# yarn
yarn add @airqo-icons/react-native react-native-svg

# pnpm
pnpm add @airqo-icons/react-native react-native-svg
```

Note: React Native icons require `react-native-svg` as a peer dependency.

### Vue

```bash
# npm
npm install @airqo-icons/vue

# yarn
yarn add @airqo-icons/vue

# pnpm
pnpm add @airqo-icons/vue
```

### Flutter

Add to your `pubspec.yaml`:

```yaml
dependencies:
  airqo_icons_flutter: ^1.0.0
```

Then run:

```bash
flutter pub get
```

## Usage

### React

```jsx
import { AlertCircle, BellRinging01 } from '@airqo-icons/react';

function MyComponent() {
  return (
    <div>
      <AlertCircle size={24} color="red" />
      <BellRinging01 size={32} color="#3366FF" />
    </div>
  );
}
```

### React Native

```jsx
import { AlertTriangle, Bell03 } from '@airqo-icons/react-native';

function MyComponent() {
  return (
    <View>
      <AlertTriangle width={24} height={24} fill="red" />
      <Bell03 width={32} height={32} fill="#3366FF" />
    </View>
  );
}
```

### Vue

```vue
<template>
  <div>
    <AlertSquare :size="24" color="red" />
    <Bell04 :size="32" color="#3366FF" />
  </div>
</template>

<script>
import { AlertSquare, Bell04 } from '@airqo-icons/vue';

export default {
  components: {
    AlertSquare,
    Bell04,
  },
};
</script>
```

### Flutter

```dart
import 'package:airqo_icons_flutter/airqo_icons_flutter.dart';

Widget build(BuildContext context) {
  return Column(
    children: [
      AirqoIcons.alertCircle(
        size: 24,
        color: Colors.red,
      ),
      AirqoIcons.bell01(
        size: 32,
        color: Color(0xFF3366FF),
      ),
    ],
  );
}
```

## Available Icon Categories

The library includes several categories of icons:

- **Alerts & Feedback**: Notification bells, alerts, and user feedback icons
- **Arrows**: Directional icons in various styles (circle, narrow, block)
- **Charts**: Data visualization and chart related icons
- And more...

## Icon Properties

### React & Vue

| Prop     | Type   | Default        | Description                |
| -------- | ------ | -------------- | -------------------------- |
| `size`   | number | 24             | Sets both width and height |
| `color`  | string | 'currentColor' | Sets the fill color        |
| `width`  | number | -              | Overrides the width        |
| `height` | number | -              | Overrides the height       |

Plus all standard SVG attributes.

### React Native

| Prop     | Type   | Default        | Description    |
| -------- | ------ | -------------- | -------------- |
| `width`  | number | 24             | Width of icon  |
| `height` | number | 24             | Height of icon |
| `fill`   | string | 'currentColor' | Fill color     |

Plus all props from `react-native-svg`.

### Flutter

| Parameter | Type   | Default      | Description                |
| --------- | ------ | ------------ | -------------------------- |
| `size`    | double | 24.0         | Sets both width and height |
| `color`   | Color  | Colors.black | Icon color                 |
| `width`   | double | -            | Overrides the width        |
| `height`  | double | -            | Overrides the height       |

## Development

### Prerequisites

- Node.js (v14 or higher)
- PNPM package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/airqo-icon-library.git
cd airqo-icon-library

# Install dependencies
pnpm install
```

### Building

```bash
# Build all packages
pnpm build

# Build specific packages
pnpm build:core
pnpm build:packages
```

### Development Workflow

1. Add SVG files to the appropriate category in the `svgs/` directory
2. Run `pnpm optimize` to optimize SVGs
3. Run `pnpm generate` to generate components for all frameworks
4. Build and test with `pnpm build`

### SVG Guidelines

For best results:

- Use 24x24 viewBox
- Consistent stroke width (preferably 2px)
- Use simple paths without unnecessary complexity
- Avoid embedded styles, fonts, or images
- Name files in kebab-case: `icon-name.svg`

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -am 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [SVGR](https://react-svgr.com/) - Transforms SVGs into React components
- [SVGO](https://github.com/svg/svgo) - SVG optimization tool

---

© 2025 AirQo. All rights reserved.
