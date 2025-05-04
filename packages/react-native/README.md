# @airqo-icons-min/react-native

React Native optimized icon components for AirQo applications.

[![NPM Version](https://img.shields.io/npm/v/@airqo-icons-min/react-native)](https://www.npmjs.com/package/@airqo-icons-min/react-native)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Installation

```bash
# npm
npm install @airqo-icons-min/react-native react-native-svg

# yarn
yarn add @airqo-icons-min/react-native react-native-svg

# pnpm
pnpm add @airqo-icons-min/react-native react-native-svg
```

> **Note**: This package requires `react-native-svg` as a peer dependency.

## Usage

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

## Props

All icons accept the following props:

| Prop          | Type   | Default        | Description                                   |
| ------------- | ------ | -------------- | --------------------------------------------- |
| `size`        | number | 24             | Sets both width and height (convenience prop) |
| `width`       | number | size or 24     | Width of icon (overrides size)                |
| `height`      | number | size or 24     | Height of icon (overrides size)               |
| `fill`        | string | 'currentColor' | Fill color                                    |
| `stroke`      | string | 'currentColor' | Stroke color (if applicable)                  |
| `strokeWidth` | number | 2              | Stroke width (if applicable)                  |

Additionally, all icons accept any props from `react-native-svg` components, including touch event handlers like `onPress`.

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

```tsx
import React from 'react';
import { View } from 'react-native';
import { AlertCircle, IconProps } from '@airqo-icons-min/react-native';

// You can use the IconProps type for your icon props
interface Props {
  iconProps: IconProps;
}

const MyComponent = ({ iconProps }: Props) => {
  return (
    <View>
      <AlertCircle {...iconProps} />
    </View>
  );
};
```

## License

MIT © AirQo
