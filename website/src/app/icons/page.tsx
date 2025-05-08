'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconGrid } from '@/components/icon-grid';
import { SearchBar } from '@/components/search-bar';
import { CategoryTabs } from '@/components/category-tabs';
import { useIconCategories } from '@/hooks/use-icon-categories';
import { IconMeta } from '@airqo-icons-min/core';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const { allIcons, formattedCategories, getIconsByCategoryName, searchIcons } =
    useIconCategories();

  // Handle search with loading state
  const handleSearch = (query: string) => {
    setIsLoading(true);
    // Short timeout to show loading state for better UX
    setTimeout(() => {
      setSearchQuery(query);
      setIsLoading(false);
    }, 100);
  };

  // Get filtered icons based on search and category
  const filteredIcons: IconMeta[] = searchQuery.trim()
    ? searchIcons(searchQuery, selectedCategory)
    : getIconsByCategoryName(selectedCategory);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container py-8 md:py-12"
    >
      <motion.div variants={item} className="flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <motion.h1
              variants={item}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Icon Library
            </motion.h1>
            <motion.p variants={item} className="text-lg text-muted-foreground">
              Browse and search through our collection of {allIcons.length}{' '}
              professionally designed icons.
            </motion.p>
          </div>
        </div>{' '}
        <motion.div variants={item}>
          <SearchBar onSearch={handleSearch} />
        </motion.div>
        <motion.div variants={item}>
          <CategoryTabs
            categories={formattedCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>{' '}
        <motion.div variants={item}>
          {isLoading ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-muted-foreground">Searching icons...</p>
              </div>
            </div>
          ) : (
            <IconGrid
              icons={filteredIcons}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onResetSearch={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
