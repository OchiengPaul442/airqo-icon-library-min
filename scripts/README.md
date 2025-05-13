# Build & Utility Scripts

This directory contains various scripts used for building, generating, and managing the AirQo Icon Library.

## Key Scripts

| Script                       | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| `generate-icons.js`          | Generates icon components for all frameworks from SVG sources |
| `optimize-svgs.js`           | Optimizes SVG files to reduce file size                       |
| `enhance-rn-icons.js`        | Enhances React Native components with additional features     |
| `fix-component-types.js`     | Fixes TypeScript types for icon components                    |
| `update-versions.js`         | Updates package versions across the monorepo                  |
| `publish-packages.js`        | Handles npm package publishing                                |
| `generate-changelog.js`      | Generates the changelog from git commits                      |
| `setup-missing-files.js`     | Creates any missing required files in the packages            |
| `untrack-generated-files.js` | Removes generated files from git tracking                     |

## Usage

Most scripts are meant to be run via npm/pnpm scripts defined in the root `package.json`:

```bash
# Generate icon components
pnpm generate

# Build all packages
pnpm build

# Fix component types
pnpm fix-component-types
```

## Development

When modifying these scripts:

1. Ensure all scripts are properly documented
2. Test changes thoroughly before committing
3. Update the corresponding npm scripts in package.json if necessary

## Adding New Scripts

When adding a new script:

1. Use clear, descriptive naming
2. Add proper documentation within the script
3. Update this README if the script serves a major function
4. Add a corresponding npm script in package.json if appropriate

For more information on the build process, see the [Contributing Guide](../docs/CONTRIBUTING.md).
