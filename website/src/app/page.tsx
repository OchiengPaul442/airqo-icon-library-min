'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useIconCategories } from '@/hooks/use-icon-categories';
import { useState, useEffect, useRef } from 'react';
import { IconMeta } from '@airqo-icons-min/core';
import { ClientIcon } from '@airqo-icons-min/react/client';
import * as lucideIcons from 'lucide-react';
import { IconRenderer } from '@/components/icon-renderer';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
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
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 py-24 md:py-36"
      >
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Animated gradient blob */}
          <div className="absolute left-0 right-0 top-20 -z-10 m-auto h-[350px] w-[350px] animate-pulse rounded-full bg-primary/20 opacity-20 blur-[120px]"></div>

          {/* Secondary gradient blob */}
          <div className="absolute -left-20 bottom-0 -z-10 h-[250px] w-[250px] rounded-full bg-blue-400/10 opacity-20 blur-[100px]"></div>

          {/* Tertiary gradient blob */}
          <div className="absolute -right-20 bottom-40 -z-10 h-[250px] w-[250px] rounded-full bg-purple-400/10 opacity-20 blur-[100px]"></div>

          {/* Floating circles */}
          <motion.div
            className="absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-primary/30"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-blue-400/30"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[20%] h-5 w-5 rounded-full bg-purple-400/20"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </div>

        <div className="container relative px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center space-y-10 text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Main heading with animated gradient */}
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="relative">
                <motion.span
                  className="absolute -left-4 -top-8 text-5xl opacity-20 text-primary"
                  animate={{ rotate: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  &lt;
                </motion.span>
                <h1 className="relative bg-gradient-to-br from-primary via-foreground/90 to-foreground/70 bg-clip-text text-5xl font-extrabold tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
                  Beautiful Icons for <br className="hidden sm:block" /> Modern
                  Applications
                </h1>
                <motion.span
                  className="absolute -bottom-2 -right-6 text-5xl opacity-20 text-primary"
                  animate={{ rotate: [0, -5, 0], opacity: [0.2, 0.4, 0.2] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  /&gt;
                </motion.span>
              </div>
              <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
                A comprehensive collection of professionally designed icons for
                your next project. Optimized for React, Vue, Flutter, and React
                Native.
              </p>
            </motion.div>

            {/* CTA Buttons with hover effect */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center justify-center gap-5"
            >
              <Link
                href="/icons"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-primary/90 px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:shadow-xl"
              >
                Browse Icons
                <ClientIcon
                  icon={lucideIcons.ArrowRight}
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/docs"
                className="group inline-flex h-14 items-center justify-center rounded-lg border border-primary/20 bg-background/80 px-8 text-base font-medium backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary/40 hover:bg-background hover:shadow-lg"
              >
                <span>Documentation</span>
                <ClientIcon
                  icon={lucideIcons.BookOpen}
                  className="ml-2 h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </motion.div>

            {/* Featured icons showcase with parallax effect */}
            <motion.div
              variants={fadeIn}
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              className="mt-16 flex w-full justify-center"
            >
              <div className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border bg-background/30 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                    {featuredIcons.map((icon, i) => (
                      <motion.div
                        key={icon.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: i * 0.02,
                          duration: 0.4,
                          type: 'spring',
                          stiffness: 100,
                        }}
                        whileHover={{
                          scale: 1.15,
                          transition: { duration: 0.2 },
                        }}
                        className="flex aspect-square items-center justify-center rounded-xl border bg-background/80 p-2.5 shadow transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="text-primary/90">
                          <IconRenderer icon={icon} size={24} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Overlay gradients */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-background/80 opacity-40"></div>
              </div>
            </motion.div>

            {/* Stats counter */}
            <motion.div
              variants={fadeIn}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-xl border border-primary/10 bg-background/50 px-8 py-6 backdrop-blur-sm md:gap-16"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">
                  {allIcons.length}+
                </span>
                <span className="text-sm text-muted-foreground">
                  Total Icons
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">4</span>
                <span className="text-sm text-muted-foreground">
                  Frameworks
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Free</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider with icon */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-background shadow-lg">
            <ClientIcon
              icon={lucideIcons.ChevronDown}
              className="h-6 w-6 animate-bounce text-primary"
            />
          </div>
        </div>
      </section>

      {/* Features Section with improved cards and animations */}
      <section className="container py-28">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Everything you need for your{' '}
            <span className="text-primary">icons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-muted-foreground"
          >
            Our icon library is designed to make implementation as smooth as
            possible across all your projects.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeInLeft}
            className="group rounded-xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.LayoutGrid} className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Multiple Frameworks</h3>
            <p className="text-muted-foreground">
              Use the same icons across React, Vue, Flutter, and React Native
              projects with native support for each platform.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Repeat} className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Customizable</h3>
            <p className="text-muted-foreground">
              Easily customize size, color, and stroke width of any icon to
              match your design system with a consistent API.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="group rounded-xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Zap} className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Optimized SVGs</h3>
            <p className="text-muted-foreground">
              Professionally optimized SVGs for the best performance and
              smallest file size across all deployment targets.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            className="group rounded-xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Download} className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Easy Installation</h3>
            <p className="text-muted-foreground">
              Simple installation with NPM, Yarn, or PNPM. Start using icons in
              minutes with comprehensive documentation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="group rounded-xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Database} className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Tree Shakeable</h3>
            <p className="text-muted-foreground">
              Only include the icons you use in your final bundle for optimal
              performance and reduced bundle size.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="group rounded-xl border border-primary/10 bg-background p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClientIcon icon={lucideIcons.Settings} className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">TypeScript Ready</h3>
            <p className="text-muted-foreground">
              Full TypeScript support with proper type definitions for all icons
              and intuitive, strongly-typed props.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to action section */}
      <section className="w-full bg-gradient-to-b from-background to-primary/5 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-background/50 p-10 text-center backdrop-blur-sm lg:p-16"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
              Explore our collection of beautiful, customizable icons for your
              next project. Free to use in commercial and personal projects.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/icons"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                Browse Icons
                <ClientIcon
                  icon={lucideIcons.ArrowRight}
                  className="ml-2 h-4 w-4"
                />
              </Link>
              <Link
                href="https://github.com/OchiengPaul442/airqo-icon-library-min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border bg-background/80 px-8 text-base font-medium shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-background hover:shadow-md"
              >
                <ClientIcon
                  icon={lucideIcons.Github}
                  className="mr-2 h-4 w-4"
                />
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
