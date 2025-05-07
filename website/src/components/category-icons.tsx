'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIconCategories } from '@/hooks';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '@/lib/utils';

interface CategoryIconsProps {
  categoryId?: string;
  searchQuery?: string;
  onIconClick?: (icon: IconMeta) => void;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/**
 * Component that displays icons grouped by categories or filtered by search
 */
export function CategoryIcons({
  categoryId = 'all',
  searchQuery = '',
  onIconClick,
  className,
}: CategoryIconsProps) {
  const {
    iconsByCategory,
    getIconsByCategoryName,
    searchIcons,
    formatCategoryName,
  } = useIconCategories();

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Determine which icons to display based on category and search
  const getDisplayedIcons = (): Array<{
    category: string;
    icons: IconMeta[];
  }> => {
    // When there's a search query, return matching icons (potentially across categories)
    if (searchQuery) {
      const results = searchIcons(searchQuery, categoryId);
      if (categoryId !== 'all') {
        return [
          {
            category: categoryId,
            icons: results,
          },
        ];
      }

      // Group search results by category
      const groupedResults: Record<string, IconMeta[]> = {};
      results.forEach((icon) => {
        if (!groupedResults[icon.category]) {
          groupedResults[icon.category] = [];
        }
        groupedResults[icon.category].push(icon);
      });

      return Object.keys(groupedResults)
        .map((cat) => ({
          category: cat,
          icons: groupedResults[cat],
        }))
        .sort((a, b) => a.category.localeCompare(b.category));
    }

    // Without search, display all icons from the selected category
    if (categoryId === 'all') {
      return Object.keys(iconsByCategory)
        .map((cat) => ({
          category: cat,
          icons: iconsByCategory[cat].icons,
        }))
        .sort((a, b) => a.category.localeCompare(b.category));
    } else {
      return [
        {
          category: categoryId,
          icons: getIconsByCategoryName(categoryId),
        },
      ];
    }
  };

  const displayedIconGroups = getDisplayedIcons();

  if (
    displayedIconGroups.length === 0 ||
    displayedIconGroups.every((group) => group.icons.length === 0)
  ) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border p-6">
        <p className="text-muted-foreground">
          No icons found for the current search or category.
        </p>
      </div>
    );
  }

  return (
    <div className={cn('space-y-10', className)}>
      {displayedIconGroups.map((group) => (
        <div key={group.category} className="space-y-4">
          <h3 className="text-xl font-medium">
            {formatCategoryName(group.category)}
            <span className="ml-2 text-sm text-muted-foreground">
              ({group.icons.length}{' '}
              {group.icons.length === 1 ? 'icon' : 'icons'})
            </span>
          </h3>

          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {group.icons.map((icon) => (
              <motion.button
                key={icon.name}
                variants={iconItem}
                onClick={() => onIconClick?.(icon)}
                onMouseEnter={() => setHoveredIcon(icon.name)}
                onMouseLeave={() => setHoveredIcon(null)}
                className={cn(
                  'group flex flex-col items-center justify-center rounded-xl border bg-background p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-background/50 hover:shadow-lg',
                  hoveredIcon === icon.name &&
                    'border-primary/50 bg-background/50 shadow-lg',
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div
                    className={cn(
                      'absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-xl transition-all duration-300',
                      hoveredIcon === icon.name ? 'opacity-100' : 'opacity-0',
                    )}
                  />

                  {/* Icon placeholder - in a real implementation, render the actual icon */}
                  <div className="relative h-14 w-14 rounded-lg border p-2">
                    {/* This would be replaced with the actual icon component */}
                    <div className="h-full w-full rounded-md bg-muted/50"></div>
                  </div>
                </div>

                <div className="mt-2 truncate text-sm font-medium">
                  {icon.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatCategoryName(icon.category)}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
