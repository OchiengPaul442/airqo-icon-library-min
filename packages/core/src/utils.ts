import type { IconMeta } from './icon-manifest';
import { icons } from './icon-manifest';

// Define a type for icon module imports
type IconModule = {
  default: unknown;
  [key: string]: unknown;
};

// Define interface for dynamic imports
interface DynamicImport {
  [key: string]: () => Promise<IconModule>;
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
