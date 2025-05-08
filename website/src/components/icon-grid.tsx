'use client';

import * as React from 'react';
import { IconSheet } from './icon-sheet';
import { motion } from 'framer-motion';
import { ClientIcon } from '@airqo-icons-min/react/client';
import { ArrowRight, XCircle } from 'lucide-react';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '@/lib/utils';
import { IconRenderer } from './icon-renderer';

interface IconGridProps {
  icons: IconMeta[];
  searchQuery?: string;
  selectedCategory?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function IconGrid({
  icons,
  searchQuery = '',
  selectedCategory = 'all',
}: IconGridProps) {
  const [selectedIcon, setSelectedIcon] = React.useState<IconMeta | null>(null);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [hoveredIcon, setHoveredIcon] = React.useState<string | null>(null);
  const [displayCount, setDisplayCount] = React.useState(80); // Initially show 80 icons

  const handleIconClick = (icon: IconMeta) => {
    setSelectedIcon(icon);
    setIsSheetOpen(true);
  };

  const loadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 80, icons.length));
  };

  const displayedIcons = icons.slice(0, displayCount);
  const hasMore = displayCount < icons.length;

  if (icons.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[400px] flex-col items-center justify-center text-center"
      >
        <div className="flex flex-col items-center rounded-xl border bg-background/60 p-12 shadow-sm backdrop-blur-sm">
          <ClientIcon
            icon={XCircle}
            className="mb-4 h-12 w-12 text-muted-foreground"
          />
          <h3 className="mb-2 text-xl font-medium">No icons found</h3>
          <p className="max-w-md text-muted-foreground">
            We couldn&apos;t find any icons matching your search criteria. Try
            adjusting your search terms or filters.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      {/* Stats bar */}
      <div className="mb-8 flex items-center justify-between rounded-lg border bg-muted/20 px-4 py-3">
        <div className="text-sm text-muted-foreground">
          Showing{' '}
          <span className="font-medium text-foreground">
            {Math.min(displayCount, icons.length)}
          </span>{' '}
          of <span className="font-medium text-foreground">{icons.length}</span>{' '}
          icons
          {searchQuery && (
            <span>
              {' '}
              matching &quot;
              <span className="font-medium text-primary">{searchQuery}</span>
              &quot;
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span>
              {' '}
              in{' '}
              <span className="font-medium text-primary">
                {selectedCategory.replace(/_/g, ' ')}
              </span>
            </span>
          )}
        </div>
        <div className="text-sm font-medium">
          {selectedCategory === 'all'
            ? 'All categories'
            : `${selectedCategory.replace(/_/g, ' ')}`}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
      >
        {displayedIcons.map((icon) => {
          return (
            <motion.button
              key={icon.name}
              variants={itemVariants}
              onClick={() => handleIconClick(icon)}
              onMouseEnter={() => setHoveredIcon(icon.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={cn(
                'group relative flex flex-col items-center justify-center rounded-xl border bg-background p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-background/50 hover:shadow-lg',
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

                {/* Icon */}
                <div
                  className={cn(
                    'relative flex h-14 w-14 transform-gpu items-center justify-center rounded-lg p-2 transition-all duration-200 group-hover:scale-110',
                    hoveredIcon === icon.name && 'scale-110',
                  )}
                >
                  <IconRenderer icon={icon} size={32} />
                </div>
              </div>

              {/* Icon name - show only the name without transforming */}
              <span className="mt-3 text-center text-xs font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                {icon.name}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Load more button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={loadMore}
            className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted/50"
          >
            Load more icons
            <ClientIcon icon={ArrowRight} className="h-4 w-4" />
          </motion.button>
        </div>
      )}

      <IconSheet
        icon={selectedIcon}
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </>
  );
}
