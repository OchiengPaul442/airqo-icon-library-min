# AirQo Icons Core

Core utilities, types, and shared functionality for AirQo icon packages.

## Overview

This package provides the foundation for other AirQo icon packages, including:

- TypeScript interfaces and types
- Icon metadata
- Shared utilities
- Common configuration

## Usage

This package is primarily intended to be used as a dependency for other AirQo icon packages. However, you can also use it directly if you need access to icon metadata or types.

### Accessing Icon Metadata

```typescript
import { icons, IconMeta } from '@airqo-icons-min/core';

// Get all available icons
console.log(`Total icons available: ${icons.length}`);

// Filter icons by category
const alertIcons = icons.filter((icon) => icon.category === 'alerts_feedback');
console.log(`Alert icons available: ${alertIcons.length}`);
```

### Using Types

```typescript
import { IconBaseProps } from '@airqo-icons-min/core';

// Create your own icon component with consistent props
interface MyCustomIconProps extends IconBaseProps {
  customProp?: string;
}

function MyCustomIcon({
  size,
  color,
  stroke,
  fill,
  customProp,
  ...props
}: MyCustomIconProps) {
  // Implementation
}
```

## API Reference

### Types

#### `IconMeta`

```typescript
interface IconMeta {
  name: string; // PascalCase component name
  category: string; // Original category folder name
}
```

#### `IconBaseProps`

```typescript
interface IconBaseProps {
  size?: string | number; // Sets both width and height
  color?: string; // Sets both fill and stroke if not specified individually
  stroke?: string; // Sets the stroke color
  fill?: string; // Sets the fill color
  strokeWidth?: string | number; // Sets the stroke width
  style?: CSS.Properties; // CSS style object
  className?: string; // CSS class name
  title?: string; // Accessible title
}
```

#### `IconNativeProps`

```typescript
interface IconNativeProps extends IconBaseProps {
  width?: string | number; // Explicit width (overrides size)
  height?: string | number; // Explicit height (overrides size)
}
```

### Constants

#### `icons`

An array of all available icons with their metadata:

```typescript
const icons: ReadonlyArray<IconMeta>;
```

## For Developers

If you're developing with the AirQo icon library and need to extend functionality, this package is where you should add:

1. Shared types and interfaces
2. Utility functions used by multiple packages
3. Common configurations

When adding new features, ensure they are properly exported from the main entry point (`index.ts`).
