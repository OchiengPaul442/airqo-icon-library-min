# AirQo React Icons

React SVG icon components for AirQo projects, with full TypeScript support for customizing size, color, fill, and stroke properties.

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

### Basic Usage

```jsx
import { AlertCircle, ChevronDown } from '@airqo-icons-min/react';

function MyComponent() {
  return (
    <div>
      <AlertCircle />
      <ChevronDown />
    </div>
  );
}
```

### Customizing Icons

All icons accept standard SVG properties along with:

- `size`: Sets both width and height (string or number)
- `color`: Sets both fill and stroke if not otherwise specified
- `fill`: Sets the fill color
- `stroke`: Sets the stroke color
- `strokeWidth`: Sets the stroke width

```jsx
import { AlertCircle } from '@airqo-icons-min/react';

// Size and color
<AlertCircle size={24} color="red" />

// Different fill and stroke
<AlertCircle fill="blue" stroke="black" />

// Using standard SVG props
<AlertCircle width={32} height={32} className="my-icon" onClick={handleClick} />

// With style props
<AlertCircle style={{ margin: '8px' }} />
```

### Enhanced Icons with Consistent Props

For projects that need consistent prop handling for all icons, you can use the enhanced icons:

```jsx
import { icons } from '@airqo-icons-min/react/main';

function MyComponent() {
  return (
    <div>
      <icons.AlertCircle size={24} color="red" />
      <icons.ChevronDown size="2rem" stroke="#0088FF" strokeWidth={2} />
    </div>
  );
}
```

### Using with Next.js

For Next.js applications with Server Components, use the client import for interactive icons:

```jsx
// app/my-component.jsx
'use client';

import { ClientIcon } from '@airqo-icons-min/react/client';
import { AlertCircle } from '@airqo-icons-min/react';

function MyComponent() {
  return (
    <div>
      {/* For interactive events in client components */}
      <ClientIcon
        icon={AlertCircle}
        size={24}
        color="red"
        onClick={handleClick}
      />
    </div>
  );
}
```

### TypeScript Support

All icons have complete TypeScript definitions for their props:

```tsx
import { AlertCircle, IconProps } from '@airqo-icons-min/react/main';

// You can extend the icon props for your components
interface CustomIconProps extends IconProps {
  label?: string;
}

function CustomIcon({ label, ...iconProps }: CustomIconProps) {
  return (
    <div>
      {label && <span>{label}</span>}
      <AlertCircle {...iconProps} />
    </div>
  );
}
```

## API Reference

### Icon Components

All icons follow the same naming convention from the original SVG files, but without the category prefix (e.g., `alert-circle.svg` becomes `AlertCircle`).

### Props

All icons accept the following props:

| Prop          | Type                  | Description                                          |
| ------------- | --------------------- | ---------------------------------------------------- |
| `size`        | `number \| string`    | Sets both width and height                           |
| `color`       | `string`              | Sets both fill and stroke if not otherwise specified |
| `fill`        | `string`              | Sets the fill color                                  |
| `stroke`      | `string`              | Sets the stroke color                                |
| `strokeWidth` | `number \| string`    | Sets the stroke width                                |
| `className`   | `string`              | CSS class name                                       |
| `style`       | `React.CSSProperties` | Inline styles                                        |
| `title`       | `string`              | Accessible title for the icon                        |

Plus all standard SVG attributes and event handlers.

## Creating Custom Icon Components

You can use the `withIconProps` HOC to add consistent icon prop handling to your own components:

```tsx
import { withIconProps } from '@airqo-icons-min/react/main';
import MyCustomSvgIcon from './MyCustomIcon';

const EnhancedIcon = withIconProps(MyCustomSvgIcon);

// Now your custom icon supports the same props as the library's icons
<EnhancedIcon size={24} color="blue" />;
```
