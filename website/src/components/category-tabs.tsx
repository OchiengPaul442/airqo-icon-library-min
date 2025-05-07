'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface Category {
  id: string;
  name: string;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  // Add the 'All Icons' category at the beginning
  const allCategories = [{ id: 'all', name: 'All Icons' }, ...categories];

  return (
    <div className="relative">
      <div className="scrollbar-hide mb-2 flex w-full items-center gap-2 overflow-x-auto pb-2">
        {allCategories.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => onSelectCategory(id)}
            className={cn(
              'relative flex h-10 shrink-0 items-center justify-center rounded-md px-4 text-sm font-medium transition-all',
              selectedCategory === id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {name}
            {selectedCategory === id && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="h-px w-full bg-border" />
    </div>
  );
}
