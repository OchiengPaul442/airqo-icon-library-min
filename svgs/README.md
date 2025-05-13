# SVG Icon Source Files

This directory contains the original SVG files used to generate the icon components for all framework implementations.

## Directory Structure

The SVG files are organized by category:

```
svgs/
├── alerts_feedback/    # Alert and notification related icons
├── arrows/             # Directional arrow icons
├── charts/             # Chart and graph icons
├── communication/      # Communication and messaging icons
├── ... (other categories)
```

## Adding New Icons

1. Create or obtain an SVG file
2. Optimize the SVG (remove unnecessary metadata, etc.)
3. Place it in the appropriate category folder
4. Follow the naming convention: kebab-case.svg (e.g., `alert-circle.svg`)
5. Run the generation script from the root directory: `pnpm generate`

## SVG Guidelines

For consistent icons, follow these guidelines:

- Use a 24x24 viewBox (typically `viewBox="0 0 24 24"`)
- Keep the SVG simple and clean
- Ensure paths use proper stroke and fill attributes
- Remove unnecessary metadata and attributes
- Test the icon appearance at different sizes

## Icon Optimization

The build process will automatically optimize the SVGs using SVGO, but it's good practice to start with clean files.

## Icon Categories

When adding a new icon, place it in one of the existing categories. If your icon doesn't fit any existing category, consider creating a new folder with a descriptive name.

For questions about icon organization or guidelines, please refer to the [Contributing Guide](../docs/CONTRIBUTING.md).
