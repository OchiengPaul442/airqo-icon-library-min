# AirQo Flutter Icons

Flutter SVG icon package for AirQo projects, providing optimized SVG icons that can be easily used in Flutter applications.

## Installation

Add this to your `pubspec.yaml` file:

```yaml
dependencies:
  airqo_icons:
    path: path/to/packages/flutter # Use path for local development
    # OR when published:
    # airqo_icons: ^1.0.0
```

Then run:

```bash
flutter pub get
```

## Usage

### Basic Usage

```dart
import 'package:airqo_icons/airqo_icons.dart';
import 'package:flutter/material.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Use the icon as an SVG
        AirqoIcon(
          AirqoIcons.alertCircle,
          size: 24.0,
          color: Colors.red,
        ),

        // Use another icon with different properties
        AirqoIcon(
          AirqoIcons.chevronDown,
          size: 32.0,
          color: Colors.blue,
        ),
      ],
    );
  }
}
```

### Customizing Icons

All icons accept Flutter standard SVG properties:

- `size`: Sets both width and height
- `width`: Explicitly sets the width (overrides size)
- `height`: Explicitly sets the height (overrides size)
- `color`: Sets the color of the icon
- `semanticsLabel`: Accessibility label for the icon

```dart
AirqoIcon(
  AirqoIcons.alertTriangle,
  size: 24.0,
  color: Colors.orange,
  semanticsLabel: 'Warning',
);

// Custom width and height
AirqoIcon(
  AirqoIcons.bell03,
  width: 32.0,
  height: 24.0,
  color: Colors.purple,
);
```

### Available Icons

The library includes hundreds of icons organized by category. Here are some examples:

#### Alerts & Feedback

- `AirqoIcons.alertCircle`
- `AirqoIcons.alertTriangle`
- `AirqoIcons.bellRinging01`
- `AirqoIcons.notificationBox`
- `AirqoIcons.thumbsUp`

#### Arrows

- `AirqoIcons.arrowCircleDown`
- `AirqoIcons.arrowNarrowLeft`
- `AirqoIcons.arrowBlockRight`

#### Charts

- `AirqoIcons.barChart01`
- `AirqoIcons.lineChartUp01`
- `AirqoIcons.pieChart01`

For a complete list of icons, refer to the [main documentation](https://github.com/airqo-platform/airqo-icon-library-min).

## API Reference

### AirqoIcon

The main component to display icons:

```dart
const AirqoIcon(
  String iconPath, {
  Key? key,
  double? size,
  double? width,
  double? height,
  Color? color,
  String? semanticsLabel,
  BoxFit fit = BoxFit.contain,
})
```

### AirqoIcons

A class containing constants for all available icon paths:

```dart
class AirqoIcons {
  static const String alertCircle = 'packages/airqo_icons/assets/alerts_feedback/alert-circle.svg';
  static const String alertTriangle = 'packages/airqo_icons/assets/alerts_feedback/alert-triangle.svg';
  // ... more icons
}
```

## Contributing

See the [CONTRIBUTING.md](../../CONTRIBUTING.md) file in the root of the repository for information on contributing to this package.

## License

MIT © AirQo
