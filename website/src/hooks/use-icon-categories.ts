import { useMemo } from 'react';
import {
  getIconCategories,
  getIconsByCategory as getIconsByCategoryUtil,
  getIconsForCategory,
  formatCategoryName,
  IconMeta,
} from '@airqo-icons-min/core';

type IconsGroupedByCategory = Record<
  string,
  {
    name: string;
    formattedName: string;
    icons: IconMeta[];
  }
>;

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
    const categorized = getIconsByCategoryUtil();
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
  const allIcons = useMemo(() => {
    return Object.values(iconsByCategory).flatMap((category) => category.icons);
  }, [iconsByCategory]);

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
