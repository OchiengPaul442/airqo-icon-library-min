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
  if (!iconImports[name]) {
    throw new Error(`Icon "${name}" not found. Did you register it first?`);
  }
  return iconImports[name]();
}

/**
 * List all icon names in a given category.
 * @param category - category folder name
 */
export function listIconsByCategory(category: string): ReadonlyArray<IconMeta> {
  return icons.filter(icon => icon.category === category);
}

/**
 * Get all available icon categories
 * @returns Array of unique category names
 */
export function getAllCategories(): string[] {
  const categories = new Set(icons.map(icon => icon.category));
  return Array.from(categories);
}

/**
 * Search for icons by name, category, or tags
 * @param query - Search query string
 * @returns Array of matching icon metadata
 */
export function searchIcons(query: string): ReadonlyArray<IconMeta> {
  if (!query || query.trim() === '') {
    return icons;
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return icons.filter(icon => {
    // Check if query matches name
    if (icon.name.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Check if query matches category
    if (icon.category.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Check if query matches any tags
    if (icon.tags && icon.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
      return true;
    }
    
    // Check if query matches full name
    if (icon.fullName.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    return false;
  });
}

/**
 * Get popular/commonly used icons
 * @param limit - Maximum number of icons to return
 * @returns Array of popular icon metadata
 */
export function getPopularIcons(limit: number = 20): IconMeta[] {
  // Get icons from popular categories
  const popularCategories = ['alerts', 'arrows', 'charts'];
  const iconsByCategory = [...icons].filter(icon => 
    popularCategories.includes(icon.category)
  );
  
  // Create a balanced selection with diversity from each category
  return balanceIconSelection(iconsByCategory, limit);
}

/**
 * Helper function to create a balanced selection of icons from different categories
 * @private
 */
function balanceIconSelection(sourceIcons: ReadonlyArray<IconMeta>, limit: number): IconMeta[] {
  const selection: IconMeta[] = [];
  const categoryCounts: Record<string, number> = {};
  
  // First pass: add max 3 icons per category
  for (const icon of sourceIcons) {
    const category = icon.category;
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    
    if (categoryCounts[category] <= 3) {
      selection.push(icon);
    }
    
    if (selection.length >= limit) {
      return selection;
    }
  }
  
  // If we need more icons, continue adding until we reach the limit
  for (const icon of sourceIcons) {
    if (!selection.includes(icon)) {
      selection.push(icon);
    }
    
    if (selection.length >= limit) {
      return selection;
    }
  }
  
  return selection;
}

/**
 * Generate tags for an icon based on its name and category
 * @param icon - Icon metadata
 * @returns Array of tags
 */
export function generateIconTags(icon: IconMeta): string[] {
  const tags: Set<string> = new Set();
  
  // Add name parts as tags
  const nameParts = icon.name
    .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(part => part.toLowerCase());
  
  // Add category parts as tags  
  const categoryParts = icon.category
    .split('_')
    .filter(Boolean)
    .map(part => part.toLowerCase());
  
  // Add all parts as tags
  [...nameParts, ...categoryParts].forEach(tag => tags.add(tag));
  
  return Array.from(tags);
}
