# AirQo Icon Library

A comprehensive SVG icon library for AirQo applications, providing consistent icons for React, React Native, Vue, and Flutter projects.

[![NPM Version](https://img.shields.io/npm/v/@airqo-icons-min/react)](https://www.npmjs.com/package/@airqo-icons-min/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

AirQo Icon Library is a meticulously crafted collection of SVG icons optimized for use across multiple frontend frameworks. It provides a unified set of icons that can be easily integrated into different application types while maintaining visual consistency across all AirQo products and services.

## Features

- ✨ **Framework Agnostic** - Use the same icons in React, React Native, Vue, and Flutter
- 🎨 **Customizable** - Change sizes, colors, and other properties as needed
- 🚀 **Optimized SVGs** - Minified and optimized for web and mobile performance
- 📦 **Categorized Icons** - Well-organized icon sets for different use cases
- 📱 **Native Support** - First-class support for React Native with react-native-svg
- 🧩 **TypeScript Support** - Full type definitions for all components

## Available Packages

| Package                       | Description              | Link                                                               |
| ----------------------------- | ------------------------ | ------------------------------------------------------------------ |
| @airqo-icons-min/core         | Core types and utilities | [NPM](https://www.npmjs.com/package/@airqo-icons-min/core)         |
| @airqo-icons-min/react        | React components         | [NPM](https://www.npmjs.com/package/@airqo-icons-min/react)        |
| @airqo-icons-min/react-native | React Native components  | [NPM](https://www.npmjs.com/package/@airqo-icons-min/react-native) |
| @airqo-icons-min/vue          | Vue 3 components         | [NPM](https://www.npmjs.com/package/@airqo-icons-min/vue)          |
| airqo_icons                   | Flutter package          | [Pub.dev](https://pub.dev)                                         |

## Installation

### React

```bash
# npm
npm install @airqo-icons-min/react

# yarn
yarn add @airqo-icons-min/react

# pnpm
pnpm add @airqo-icons-min/react
```

### React Native

```bash
# npm
npm install @airqo-icons-min/react-native react-native-svg

# yarn
yarn add @airqo-icons-min/react-native react-native-svg

# pnpm
pnpm add @airqo-icons-min/react-native react-native-svg
```

Note: React Native icons require `react-native-svg` as a peer dependency.

### Vue

```bash
# npm
npm install @airqo-icons-min/vue

# yarn
yarn add @airqo-icons-min/vue

# pnpm
pnpm add @airqo-icons-min/vue
```

Note: The Vue package is compatible with Vue 3.x.

### Flutter

Add to your `pubspec.yaml`:

```yaml
dependencies:
  airqo_icons: ^0.1.0
  flutter_svg: ^1.0.3
```

Then run:

```bash
flutter pub get
```

## Usage Examples

### React

Basic usage with customized size and color:

```jsx
import React from 'react';
import { AlertCircle, BellRinging01, ThumbsUp } from '@airqo-icons-min/react';

function IconsDemo() {
  return (
    <div className="icons-container">
      <AlertCircle size={24} color="red" />
      <BellRinging01 size={32} color="#3366FF" />

      {/* With custom width and height */}
      <ThumbsUp width={40} height={30} color="green" />

      {/* With additional SVG props */}
      <AlertCircle
        size={24}
        color="orange"
        strokeWidth={1.5}
        opacity={0.8}
        onClick={() => console.log('Icon clicked!')}
      />
    </div>
  );
}
```

### React Native

Basic usage within React Native components:

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  AlertTriangle,
  Bell03,
  NotificationBox,
} from '@airqo-icons-min/react-native';

function IconsDemo() {
  return (
    <View style={styles.container}>
      {/* Use the size prop for equal width/height */}
      <AlertTriangle size={24} fill="red" />

      {/* Size prop takes precedence unless width/height are explicitly set */}
      <Bell03 size={32} fill="#3366FF" />

      {/* Explicit width/height overrides size */}
      <NotificationBox
        width={40}
        height={40}
        fill="none"
        stroke="#222222"
        strokeWidth={1.5}
      />

      {/* Responding to touch events */}
      <AlertTriangle
        size={30}
        fill="orange"
        onPress={() => console.log('Icon pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
  },
});
```

### Vue

Basic usage in Vue 3 components:

```vue
<template>
  <div class="icons-demo">
    <AlertSquare :size="24" color="red" />
    <Bell04 :size="32" color="#3366FF" />

    <!-- With custom width and height -->
    <ThumbsDown :width="40" :height="30" color="tomato" />

    <!-- With event handling -->
    <AlertOctagon :size="28" color="purple" @click="handleIconClick" />
  </div>
</template>

<script setup>
import {
  AlertSquare,
  Bell04,
  ThumbsDown,
  AlertOctagon,
} from '@airqo-icons-min/vue';

const handleIconClick = () => {
  console.log('Icon clicked!');
};
</script>

<style>
.icons-demo {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
```

### Flutter

Basic usage in Flutter widgets:

```dart
import 'package:flutter/material.dart';
import 'package:airqo_icons/airqo_icons.dart';

class IconsDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        // Basic icon with default size
        AirqoIcons.alertCircle(
          color: Colors.red,
        ),

        // Custom size icon
        AirqoIcons.bell01(
          size: 32,
          color: Color(0xFF3366FF),
        ),

        // Custom width and height
        AirqoIcons.thumbsUp(
          width: 40,
          height: 30,
          color: Colors.green,
        ),

        // With gesture detection
        GestureDetector(
          onTap: () => print('Icon tapped!'),
          child: AirqoIcons.alertTriangle(
            size: 28,
            color: Colors.orange,
          ),
        ),
      ],
    );
  }
}
```

## Available Icon Categories

The library includes several categories of icons:

- **Alerts & Feedback**: Notification bells, alerts, and user feedback icons

  - Examples: `AlertCircle`, `BellRinging01`, `ThumbsUp`, `NotificationBox`

- **Arrows**: Directional icons in various styles

  - Examples: `ArrowCircleDown`, `ArrowNarrowLeft`, `ArrowBlockRight`

- **Charts**: Data visualization and chart related icons
  - Examples: `BarChart01`, `LineChart`, `PieChart`

A complete icon reference is available in each package's documentation.

## Icon Properties

### React & Vue

| Prop          | Type   | Default        | Description                   |
| ------------- | ------ | -------------- | ----------------------------- |
| `size`        | number | 24             | Sets both width and height    |
| `color`       | string | 'currentColor' | Sets the fill or stroke color |
| `width`       | number | -              | Overrides the width           |
| `height`      | number | -              | Overrides the height          |
| `stroke`      | string | 'currentColor' | Stroke color (if applicable)  |
| `fill`        | string | 'none'         | Fill color (if applicable)    |
| `strokeWidth` | number | 2              | Stroke width (if applicable)  |

Plus all standard SVG attributes like `className`, `style`, `onClick`, etc.

### React Native

| Prop          | Type   | Default        | Description                                   |
| ------------- | ------ | -------------- | --------------------------------------------- |
| `size`        | number | 24             | Sets both width and height (convenience prop) |
| `width`       | number | size or 24     | Width of icon (overrides size)                |
| `height`      | number | size or 24     | Height of icon (overrides size)               |
| `fill`        | string | 'currentColor' | Fill color                                    |
| `stroke`      | string | 'currentColor' | Stroke color (if applicable)                  |
| `strokeWidth` | number | 2              | Stroke width (if applicable)                  |

Plus all props from `react-native-svg` including touch event handlers.

### Flutter

| Parameter     | Type   | Default      | Description                  |
| ------------- | ------ | ------------ | ---------------------------- |
| `size`        | double | 24.0         | Sets both width and height   |
| `color`       | Color  | Colors.black | Icon color                   |
| `width`       | double | -            | Overrides the width          |
| `height`      | double | -            | Overrides the height         |
| `strokeWidth` | double | 2.0          | Stroke width (if applicable) |

## Development

### Prerequisites

- Node.js (v18 or higher)
- PNPM package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/airqo-platform/airqo-icon-library-min.git
cd airqo-icon-library-min

# Install dependencies
pnpm install
```

### Building

```bash
# Optimize SVGs and generate components
pnpm run optimize
pnpm run generate

# Build all packages
pnpm build

# Build specific packages
pnpm build:core
pnpm build:packages-no-vue  # Builds React and React Native
pnpm build:packages         # Builds React, React Native, and Vue
```

### Development Workflow

1. Add SVG files to the appropriate category in the `svgs/` directory
2. Run `pnpm optimize` to optimize the SVGs with SVGO
3. Run `pnpm generate` to generate components for all frameworks
4. Build the packages with `pnpm build`
5. Test your changes in each framework
6. Submit a PR with your changes

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
