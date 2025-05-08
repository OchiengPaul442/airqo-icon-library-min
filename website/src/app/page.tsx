'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useIconCategories } from '@/hooks/use-icon-categories';
import { useState, useEffect } from 'react';
import { IconMeta } from '@airqo-icons-min/core';
import { ClientIcon } from '@airqo-icons-min/react/client';
import * as lucideIcons from 'lucide-react';
import { IconRenderer } from '@/components/icon-renderer';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { allIcons } = useIconCategories();
  const [featuredIcons, setFeaturedIcons] = useState<IconMeta[]>([]);

  // Prepare featured icons for the showcase grid
  useEffect(() => {
    if (allIcons.length === 0) return;

    // Select a subset of icons for the showcase grid (40 icons or fewer if not enough icons)
    const selectedIcons = [...allIcons]
      .sort(() => 0.5 - Math.random()) // Shuffle the icons
      .slice(0, Math.min(40, allIcons.length));

    setFeaturedIcons(selectedIcons);
  }, [allIcons]);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center space-y-8 text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                Beautiful Icons for Modern Applications
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                A comprehensive collection of professionally designed icons for
                your next project. Optimized for React, Vue, Flutter, and more.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/icons"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Browse Icons
                <ClientIcon
                  icon={lucideIcons.ArrowRight}
                  className="ml-2 h-4 w-4"
                />
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background/80 px-8 text-base font-medium shadow-sm backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Documentation
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-16 flex w-full justify-center"
            >
              <div className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-xl border bg-background/50 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                    {featuredIcons.map((icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.02, duration: 0.5 }}
                        className="flex aspect-square items-center justify-center rounded-lg border bg-background/80 p-2 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <div className="text-primary/80">
                          <IconRenderer icon={icon} size={24} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeIn}
            className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.LayoutGrid} className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Multiple Frameworks</h3>
            <p className="text-muted-foreground">
              Use the same icons across React, Vue, Flutter, and React Native
              projects with native support.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Repeat} className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Customizable</h3>
            <p className="text-muted-foreground">
              Easily customize size, color, and stroke width of any icon to
              match your design system.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Zap} className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Optimized SVGs</h3>
            <p className="text-muted-foreground">
              Professionally optimized SVGs for the best performance and
              smallest file size.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Download} className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Easy Installation</h3>
            <p className="text-muted-foreground">
              Simple installation with NPM, Yarn, or PNPM. Start using icons in
              minutes.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Database} className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Tree Shakeable</h3>
            <p className="text-muted-foreground">
              Only include the icons you use in your final bundle for optimal
              performance.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Settings} className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">TypeScript Ready</h3>
            <p className="text-muted-foreground">
              Full TypeScript support with proper type definitions for all icons
              and props.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
