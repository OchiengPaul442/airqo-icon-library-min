import type { IconMeta } from './icon-manifest';
import type { ComponentType } from 'react';

// Define interface for the icon components map
interface IconComponentMap {
  [key: string]: () => Promise<{ [key: string]: ComponentType<any> }>;
}

// Lazy-import map for React components
const iconComponents: IconComponentMap = {};

// Build iconComponents entries at runtime based on manifest
import { icons } from './icon-manifest';
icons.forEach((icon: IconMeta) => {
  const { name, category } = icon;
  iconComponents[name] = () =>
    import(`../react/dist/icons/${category}/${name}.js`);
});

/**
 * Dynamically load a React icon component by its name.
 * @param name - PascalCase icon component name
 */
export async function getIcon(name: string): Promise<ComponentType<any>> {
  const loader = iconComponents[name];
  if (!loader) {
    throw new Error(`Icon not found: ${name}`);
  }
  const mod = await loader();
  return mod[name]; // Use named export instead of default
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
