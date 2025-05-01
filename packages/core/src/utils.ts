import type { IconMeta } from './icon-manifest';

// Lazy-import map for React components
const iconComponents: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {};

// Build iconComponents entries at runtime based on manifest
import { icons } from './icon-manifest';
icons.forEach(({ name, category }) => {
  iconComponents[name] = () =>
    import(`../react/dist/icons/${category}/${name}.js`);
});

/**
 * Dynamically load a React icon component by its name.
 * @param name - PascalCase icon component name
 */
export async function getIcon(name: string) {
  const loader = iconComponents[name];
  if (!loader) {
    throw new Error(`Icon not found: ${name}`);
  }
  const mod = await loader();
  return mod.default;
}

/**
 * List all icon names in a given category.
 * @param category - category folder name
 */
export function listIconsByCategory(category: string): string[] {
  return icons.filter(icon => icon.category === category).map(icon => icon.name);
}