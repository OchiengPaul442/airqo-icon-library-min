'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  const categories = [
    { id: 'all', label: 'All Icons' },
    { id: 'alerts_feedback', label: 'Alerts & Feedback' },
    { id: 'arrows', label: 'Arrows' },
    { id: 'charts', label: 'Charts' },
    // Add any other categories here
  ];

  return (
    <div className="relative">
      <div className="scrollbar-hide mb-2 flex w-full items-center gap-2 overflow-x-auto pb-2">
        {categories.map(({ id, label }) => (
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
            {label}
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
