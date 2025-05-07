# AirQo React Native Icons

React Native SVG icon components for AirQo projects, with TypeScript support for customizing size, color, fill, and stroke properties.

## Installation

```bash
# Install the package
npm install @airqo-icons-min/react-native

# Make sure you have react-native-svg installed
npm install react-native-svg
```

## Usage

### Basic Usage

```jsx
import { AlertCircle, ChevronDown } from '@airqo-icons-min/react-native';

function MyComponent() {
  return (
    <View>
      <AlertCircle />
      <ChevronDown />
    </View>
  );
}
```

### Customizing Icons

All icons accept standard React Native SVG properties along with:

- `size`: Sets both width and height (number)
- `width`: Explicitly sets the width (overrides size)
- `height`: Explicitly sets the height (overrides size)
- `color`: Sets both fill and stroke if not otherwise specified
- `fill`: Sets the fill color
- `stroke`: Sets the stroke color
- `strokeWidth`: Sets the stroke width

```jsx
import { AlertCircle } from '@airqo-icons-min/react-native';

// Size and color
<AlertCircle size={24} color="red" />

// Different fill and stroke
<AlertCircle fill="blue" stroke="black" />

// Custom width/height
<AlertCircle width={32} height={24} />

// With style props
<AlertCircle style={{ margin: 8 }} />
```

### Enhanced Icons with Consistent Props

For projects that need consistent prop handling for all icons, you can use the enhanced icons:

```jsx
import { icons } from '@airqo-icons-min/react-native/main';

function MyComponent() {
  return (
    <View>
      <icons.AlertCircle size={24} color="red" />
      <icons.ChevronDown stroke="#0088FF" strokeWidth={2} />
    </View>
  );
}
```

### TypeScript Support

All icons have complete TypeScript definitions for their props:

```tsx
import {
  AlertCircle,
  IconNativeComponentProps,
} from '@airqo-icons-min/react-native/main';

// You can extend the icon props for your components
interface CustomIconProps extends IconNativeComponentProps {
  label?: string;
}

function CustomIcon({ label, ...iconProps }: CustomIconProps) {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <AlertCircle {...iconProps} />
    </View>
  );
}
```

## API Reference

### Icon Components

All icons follow the same naming convention from the original SVG files, but without the category prefix (e.g., `alert-circle.svg` becomes `AlertCircle`).

### Props

All icons accept the following props:

| Prop          | Type                   | Description                                          |
| ------------- | ---------------------- | ---------------------------------------------------- |
| `size`        | `number \| string`     | Sets both width and height                           |
| `width`       | `number \| string`     | Sets the width (overrides size)                      |
| `height`      | `number \| string`     | Sets the height (overrides size)                     |
| `color`       | `string`               | Sets both fill and stroke if not otherwise specified |
| `fill`        | `string`               | Sets the fill color                                  |
| `stroke`      | `string`               | Sets the stroke color                                |
| `strokeWidth` | `number \| string`     | Sets the stroke width                                |
| `style`       | `StyleProp<ViewStyle>` | React Native style object                            |

Plus all standard props from `react-native-svg`.

## Creating Custom Icon Components

You can use the `withIconProps` HOC to add consistent icon prop handling to your own components:

```tsx
import { withIconProps } from '@airqo-icons-min/react-native/main';
import MyCustomSvgIcon from './MyCustomIcon';

const EnhancedIcon = withIconProps(MyCustomSvgIcon);

// Now your custom icon supports the same props as the library's icons
<EnhancedIcon size={24} color="blue" />;
```

## Troubleshooting

### Icons not visible on Android

Make sure you have properly set up `react-native-svg` in your project according to their installation instructions.

### Size Issues

If you're having issues with icon sizes, try using explicit width and height props rather than the size prop:

```jsx
<AlertCircle width={24} height={24} />
```
