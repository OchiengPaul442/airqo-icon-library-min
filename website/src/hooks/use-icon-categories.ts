import { useMemo } from 'react';
import { icons, IconMeta } from '@airqo-icons-min/core';

type IconsGroupedByCategory = Record<
  string,
  {
    name: string;
    formattedName: string;
    icons: IconMeta[];
  }
>;

/**
 * Utility function to get all icon categories
 */
function getIconCategories(): string[] {
  // Extract unique categories from icons
  const categoriesSet = new Set<string>();
  icons.forEach((icon) => {
    categoriesSet.add(icon.category);
  });
  return Array.from(categoriesSet);
}

/**
 * Utility function to format a category name for display
 */
function formatCategoryName(category: string): string {
  return category
    .replace(/_/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Utility function to get icons grouped by category
 */
function getIconsByCategory(): Record<string, IconMeta[]> {
  const categorized: Record<string, IconMeta[]> = {};

  icons.forEach((icon) => {
    if (!categorized[icon.category]) {
      categorized[icon.category] = [];
    }
    categorized[icon.category].push({ ...icon });
  });

  return categorized;
}

/**
 * Utility function to get icons for a specific category
 */
function getIconsForCategory(category: string): IconMeta[] {
  return icons
    .filter((icon) => icon.category === category)
    .map((icon) => ({ ...icon }));
}

/**
 * React hook that provides categorized icons and helper functions
 * for displaying and filtering icons in the AirQo icon library
 */
export function useIconCategories() {
  // Get all available categories
  const categories = useMemo(() => getIconCategories(), []);

  // Get formatted category names for display
  const formattedCategories = useMemo(() => {
    return categories.map((category) => ({
      id: category,
      name: formatCategoryName(category),
    }));
  }, [categories]);

  // Group all icons by their categories with formatted category names
  const iconsByCategory = useMemo<IconsGroupedByCategory>(() => {
    const categorized = getIconsByCategory();
    const result: IconsGroupedByCategory = {};

    Object.keys(categorized).forEach((category) => {
      result[category] = {
        name: category,
        formattedName: formatCategoryName(category),
        icons: categorized[category],
      };
    });

    return result;
  }, []);

  // Get all icons across all categories
  const allIcons = useMemo<IconMeta[]>(() => {
    // Create a new array with copies of the icons to make it mutable
    return icons.map((icon) => ({ ...icon }));
  }, []);

  /**
   * Get icons for a specific category
   * @param category The category to filter by
   * @returns Array of IconMeta objects for the requested category
   */
  const getIconsByCategoryName = (category: string): IconMeta[] => {
    if (category === 'all') {
      return allIcons;
    }
    return getIconsForCategory(category);
  };

  /**
   * Search for icons by name
   * @param query The search query
   * @param category Optional category to filter within
   * @returns Array of matching IconMeta objects
   */
  const searchIcons = (query: string, category?: string): IconMeta[] => {
    const searchString = query.toLowerCase();
    const iconsToSearch =
      category && category !== 'all' ? getIconsForCategory(category) : allIcons;

    return iconsToSearch.filter((icon) =>
      icon.name.toLowerCase().includes(searchString),
    );
  };

  return {
    categories,
    formattedCategories,
    iconsByCategory,
    allIcons,
    getIconsByCategoryName,
    searchIcons,
    formatCategoryName,
  };
}
