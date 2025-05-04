# @airqo-icons-min/vue

Vue 3 optimized SVG icon components for AirQo applications.

[![NPM Version](https://img.shields.io/npm/v/@airqo-icons-min/vue)](https://www.npmjs.com/package/@airqo-icons-min/vue)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Installation

```bash
# npm
npm install @airqo-icons-min/vue

# yarn
yarn add @airqo-icons-min/vue

# pnpm
pnpm add @airqo-icons-min/vue
```

> **Note**: This package is compatible with Vue 3.x only.

## Usage

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

## Props

All icons accept the following props:

| Prop          | Type          | Default        | Description                |
| ------------- | ------------- | -------------- | -------------------------- |
| `size`        | number/string | 24             | Sets both width and height |
| `color`       | string        | 'currentColor' | Sets the stroke color      |
| `width`       | number/string | size or 24     | Width of icon              |
| `height`      | number/string | size or 24     | Height of icon             |
| `stroke`      | string        | 'currentColor' | Stroke color               |
| `fill`        | string        | 'none'         | Fill color                 |
| `strokeWidth` | number/string | 2              | Stroke width               |

All icons also support standard Vue events like `@click`, `@mouseenter`, etc.

## Available Icons

The library includes hundreds of icons organized by category. Here are some examples:

### Alerts & Feedback

- `AlertCircle`
- `AlertTriangle`
- `BellRinging01`
- `NotificationBox`
- `ThumbsUp`

### Arrows

- `ArrowCircleDown`
- `ArrowNarrowLeft`
- `ArrowBlockRight`

### Charts

- `BarChart01`
- `LineChartUp01`
- `PieChart01`

For a complete list, refer to the [main documentation](https://github.com/airqo-platform/airqo-icon-library-min).

## TypeScript Support

All icons include full TypeScript definitions:

```vue
<script setup lang="ts">
import { AlertCircle, type IconProps } from '@airqo-icons-min/vue';

// Using the IconProps type
const iconProps: IconProps = {
  size: 32,
  color: 'teal',
};
</script>

<template>
  <AlertCircle v-bind="iconProps" />
</template>
```

## License

MIT © AirQo
