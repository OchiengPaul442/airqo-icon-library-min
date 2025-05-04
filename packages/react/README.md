# @airqo-icons-min/react

React optimized SVG icon components for AirQo applications.

[![NPM Version](https://img.shields.io/npm/v/@airqo-icons-min/react)](https://www.npmjs.com/package/@airqo-icons-min/react)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Installation

```bash
# npm
npm install @airqo-icons-min/react

# yarn
yarn add @airqo-icons-min/react

# pnpm
pnpm add @airqo-icons-min/react
```

## Usage

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

## Props

All icons accept the following props:

| Prop          | Type          | Default        | Description                   |
| ------------- | ------------- | -------------- | ----------------------------- |
| `size`        | number/string | 24             | Sets both width and height    |
| `color`       | string        | 'currentColor' | Sets the stroke color         |
| `width`       | number/string | size or 24     | Width of icon                 |
| `height`      | number/string | size or 24     | Height of icon                |
| `title`       | string        | undefined      | Accessible title for the icon |
| `titleId`     | string        | undefined      | ID for the title element      |
| `stroke`      | string        | 'currentColor' | Stroke color                  |
| `fill`        | string        | 'none'         | Fill color                    |
| `strokeWidth` | number/string | 2              | Stroke width                  |

Additionally, all icons accept any standard SVG attributes like `className`, `style`, `onClick`, etc.

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
import { AlertCircle, IconProps } from '@airqo-icons-min/react';

// You can use the IconProps type for your custom components
interface Props {
  iconProps: IconProps;
}

const MyComponent = ({ iconProps }: Props) => {
  return (
    <div>
      <AlertCircle {...iconProps} />
    </div>
  );
};
```

## Server-Side Rendering

This package is fully compatible with server-side rendering (SSR) frameworks like Next.js:

```jsx
// Next.js page example
import { AlertTriangle } from '@airqo-icons-min/react';

export default function WarningPage() {
  return (
    <div className="warning">
      <AlertTriangle size={48} color="orange" />
      <h1>Warning: Proceed with caution</h1>
    </div>
  );
}
```

## License

MIT © AirQo
