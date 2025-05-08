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
  onResetSearch?: () => void;
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
  onResetSearch,
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
        transition={{ type: 'tween', duration: 0.4 }}
        className="flex min-h-[400px] flex-col items-center justify-center text-center"
      >
        <div className="flex flex-col items-center rounded-xl border bg-background/60 p-12 shadow-sm backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <ClientIcon
              icon={XCircle}
              className="mb-4 h-12 w-12 text-muted-foreground"
            />
          </motion.div>
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-2 text-xl font-medium"
          >
            No icons found
          </motion.h3>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-muted-foreground"
          >
            We couldn&apos;t find any icons matching &quot;{searchQuery}&quot;.
            Try adjusting your search terms or filters.
          </motion.p>{' '}
          {searchQuery && (
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => onResetSearch && onResetSearch()}
              className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              View all icons
            </motion.button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <>
      {' '}
      {/* Stats bar - enhanced with gradients and improved visibility */}
      <div className="mb-8 flex items-center justify-between rounded-lg border bg-gradient-to-r from-background/90 to-background via-muted/5 px-4 py-3 shadow-sm dark:from-zinc-900/80 dark:to-zinc-800/50">
        <div className="text-sm text-muted-foreground">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={`${searchQuery}-${selectedCategory}-${icons.length}`} // Key to trigger animation on changes
          >
            {icons.length > 0 ? (
              <>
                Showing{' '}
                <span className="font-medium text-foreground">
                  {Math.min(displayCount, icons.length)}
                </span>{' '}
                of{' '}
                <span className="font-medium text-foreground">
                  {icons.length}
                </span>{' '}
                icons
                {searchQuery && (
                  <span>
                    {' '}
                    matching &quot;
                    <span className="font-medium text-primary">
                      {searchQuery}
                    </span>
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
              </>
            ) : searchQuery ? (
              <>
                No icons found matching &quot;
                <span className="font-medium text-primary">{searchQuery}</span>
                &quot;
              </>
            ) : (
              <>No icons found in this category</>
            )}
          </motion.span>
        </div>
        <div className="rounded-full bg-background/80 px-3 py-1 text-sm font-medium shadow-sm dark:bg-zinc-800">
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
                'group relative flex flex-col items-center justify-center rounded-xl border transition-all',
                'hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg',
                'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm',
                'p-4 hover:bg-white dark:hover:bg-zinc-900',
                hoveredIcon === icon.name &&
                  'border-primary/50 bg-white dark:bg-zinc-900 shadow-lg',
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                {/* Improved glow effect with better visibility in both light/dark modes */}
                <div
                  className={cn(
                    'absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-xl transition-all duration-300',
                    hoveredIcon === icon.name ? 'opacity-80' : 'opacity-0',
                  )}
                />

                {/* Icon container with improved styling for better visibility */}
                <div
                  className={cn(
                    'relative flex h-14 w-14 transform-gpu items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110',
                    hoveredIcon === icon.name && 'scale-110',
                    'bg-gradient-to-br from-background/30 to-background/10 p-1.5',
                    'dark:from-zinc-800/50 dark:to-zinc-900/30',
                  )}
                >
                  <IconRenderer icon={icon} size={32} />
                </div>
              </div>

              {/* Icon name - improved text handling and visibility */}
              <div className="mt-3 w-full text-center px-1">
                <span
                  className="block overflow-hidden text-ellipsis text-xs font-medium tracking-wide transition-colors group-hover:text-foreground"
                  style={{
                    wordWrap: 'break-word',
                    maxWidth: '100%',
                    lineHeight: '1.2em',
                    maxHeight: '2.4em',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    color: 'inherit',
                  }}
                >
                  {icon.name}
                </span>
              </div>

              {/* Badge for category - only shown on hover */}
              <div
                className={cn(
                  'absolute -bottom-1 opacity-0 transition-all duration-200',
                  'group-hover:opacity-100 group-hover:bottom-1',
                )}
              >
                <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                  {icon.category}
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
      {/* Improved load more button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={loadMore}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/80 to-primary px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg hover:from-primary hover:to-primary/90 hover:-translate-y-0.5 active:translate-y-0"
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
