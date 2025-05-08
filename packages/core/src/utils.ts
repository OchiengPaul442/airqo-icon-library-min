import type { IconMeta } from './icon-manifest';
import { icons } from './icon-manifest';
import * as React from 'react';

// Define a type for icon module imports with a more specific type
type IconModule = {
  default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  // We still need to allow for other properties that might exist on the imported module
  // but we'll make it as specific as possible
  displayName?: string;
  id?: string;
};

// Define interface for dynamic imports with a more specific return type
interface DynamicImport {
  [iconName: string]: () => Promise<IconModule>;
}

// Base map for dynamic imports - frameworks should extend this
const iconImports: DynamicImport = {};

/**
 * Register a dynamic import function for an icon
 * @param name - Icon name
 * @param importFn - Function that returns a promise resolving to the icon
 */
export function registerIconImport(
  name: string,
  importFn: () => Promise<IconModule>,
) {
  iconImports[name] = importFn;
}

/**
 * Dynamically load an icon by its name
 * @param name - PascalCase icon name
 */
export async function getIcon(name: string): Promise<IconModule> {
  const loader = iconImports[name];
  if (!loader) {
    throw new Error(`Icon not found: ${name}`);
  }
  return await loader();
}

/**
 * List all icon names in a given category.
 * @param category - category folder name
 */
export function listIconsByCategory(category: string): string[] {
  return icons
    .filter((icon: IconMeta) => icon.category === category)
    .map((icon: IconMeta) => icon.name);
}

/**
 * Get the raw SVG content for an icon
 * This is useful for downloading or copying SVG content directly
 * @param iconName - PascalCase icon name (e.g., "AlertCircle")
 * @returns Raw SVG content as string or null if not found
 */
export function getSvgContent(iconName: string): string | null {
  // Find the icon metadata
  const iconMeta = icons.find((icon) => icon.name === iconName);
  if (!iconMeta) {
    console.error(`Icon not found: ${iconName}`);
    return null;
  }

  // Create the filename based on category and convention
  // Convert PascalCase to kebab-case
  const kebabName = iconName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();

  try {
    // Use built-in raw SVG data mapping
    // This will be populated during the build process
    return SVG_DATA[iconMeta.name] || null;
  } catch (error) {
    console.error(`Error retrieving SVG content for ${iconName}:`, error);
    return null;
  }
}

// This will be populated during build with all SVG data
// Map of icon name to raw SVG content
export const SVG_DATA: Record<string, string> = {};

// Helper function to register SVG content
export function registerSvgContent(iconName: string, svgContent: string): void {
  SVG_DATA[iconName] = svgContent;
}
