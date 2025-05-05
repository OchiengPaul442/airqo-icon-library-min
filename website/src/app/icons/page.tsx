'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconGrid } from '@/components/icon-grid';
import { SearchBar } from '@/components/search-bar';
import { CategoryTabs } from '@/components/category-tabs';
import { fetchApi } from '@/lib/api';
import { toast } from 'sonner';

interface IconMetadata {
  category: string;
  name: string;
  svg: string;
}

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
  const [icons, setIcons] = useState<IconMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchApi<IconMetadata[]>('/api/icons')
      .then((data) => {
        setIcons(data);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((icon) => icon.category)),
        );
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error('Error loading icons:', error);
        toast.error('Failed to load icons. Please try refreshing the page.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
              Browse and search through our collection of {icons.length}{' '}
              professionally designed icons.
            </motion.p>
          </div>
        </div>

        <motion.div variants={item}>
          <SearchBar onSearch={setSearchQuery} />
        </motion.div>

        <motion.div variants={item}>
          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>

        {loading ? (
          <motion.div
            variants={item}
            className="flex h-[400px] items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
              <p className="text-sm text-muted-foreground">Loading icons...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div variants={item}>
            <IconGrid
              initialIcons={icons}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
