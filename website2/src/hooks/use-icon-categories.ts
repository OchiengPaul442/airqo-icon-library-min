import { useMemo } from 'react';
import { IconMeta } from '@airqo-icons-min/core';

// Try to import icons from the package, but fall back to our local manifest if needed
let icons: Array<IconMeta> = [];

// We use dynamic imports to maintain the same behavior as before
const importIcons = async () => {
  try {
    // First try to import from the core package
    const coreModule = await import('@airqo-icons-min/core');
    if (coreModule && coreModule.icons) {
      // Convert IconsMap to array of IconMeta
      icons = Object.values(coreModule.icons);
    } else {
      // Fall back to our local manifest
      const localManifest = await import('../libs/icon-manifest');
      icons = Array.isArray(localManifest.icons)
        ? localManifest.icons
        : Object.values(localManifest.icons || {});
    }
  } catch (error) {
    // Use our local fallback if package import fails
    const localManifest = await import('../libs/icon-manifest');
    icons = Array.isArray(localManifest.icons)
      ? localManifest.icons
      : Object.values(localManifest.icons || {});
  }
};

// Initialize icons
importIcons();

type IconsGroupedByCategory = Record<
  string,
  {
    name: string;
    formattedName: string;
    icons: IconMeta[];
  }
>;

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
 * Get all icon categories from the icon manifest
 */
function getIconCategories(): string[] {
  const categories = new Set<string>();
  icons.forEach((icon: IconMeta) => categories.add(icon.category));
  return Array.from(categories);
}

/**
 * Get icons for a specific category
 */
function getIconsForCategory(category: string): IconMeta[] {
  return icons.filter((icon: IconMeta) => icon.category === category);
}

/**
 * Group icons by their categories
 */
function getIconsByCategory(): Record<string, IconMeta[]> {
  const categorizedIcons: Record<string, IconMeta[]> = {};

  icons.forEach((icon: IconMeta) => {
    if (!categorizedIcons[icon.category]) {
      categorizedIcons[icon.category] = [];
    }
    categorizedIcons[icon.category].push(icon);
  });

  return categorizedIcons;
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
    return icons.map((icon: IconMeta) => ({ ...icon }));
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
   */ const searchIcons = (query: string, category?: string): IconMeta[] => {
    const searchString = query.toLowerCase();
    const iconsToSearch =
      category && category !== 'all' ? getIconsForCategory(category) : allIcons;

    return iconsToSearch.filter((icon: IconMeta) => {
      const nameMatch = icon.name.toLowerCase().includes(searchString);
      const categoryMatch = formatCategoryName(icon.category)
        .toLowerCase()
        .includes(searchString);
      const rawCategoryMatch = icon.category
        .toLowerCase()
        .includes(searchString);

      return nameMatch || categoryMatch || rawCategoryMatch;
    });
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
