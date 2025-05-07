import { icons, IconMeta } from '../icon-manifest';

/**
 * Returns all available icon categories
 * @returns Array of category names
 */
export function getIconCategories(): string[] {
  const categories = new Set<string>();

  icons.forEach((icon) => {
    categories.add(icon.category);
  });

  return Array.from(categories).sort();
}

/**
 * Groups all icons by their categories
 * @returns Record with categories as keys and arrays of IconMeta as values
 */
export function getIconsByCategory(): Record<string, IconMeta[]> {
  const categorizedIcons: Record<string, IconMeta[]> = {};

  icons.forEach((icon) => {
    const { category } = icon;

    if (!categorizedIcons[category]) {
      categorizedIcons[category] = [];
    }

    categorizedIcons[category].push(icon);
  });

  // Sort icons within each category by name
  Object.keys(categorizedIcons).forEach((category) => {
    categorizedIcons[category].sort((a, b) => a.name.localeCompare(b.name));
  });

  return categorizedIcons;
}

/**
 * Gets all icons from a specific category
 * @param category The category name to filter by
 * @returns Array of IconMeta objects for the requested category
 */
export function getIconsForCategory(category: string): IconMeta[] {
  return icons
    .filter((icon) => icon.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Formats a category name for display (converts snake_case to Title Case)
 * @param category The raw category name (e.g., "alerts_feedback")
 * @returns Formatted category name (e.g., "Alerts & Feedback")
 */
export function formatCategoryName(category: string): string {
  return category
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' & ');
}
