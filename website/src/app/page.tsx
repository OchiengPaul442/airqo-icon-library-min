'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, LayoutGrid, Repeat, Zap } from 'lucide-react';

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
                <ArrowRight className="ml-2 h-4 w-4" />
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
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.02, duration: 0.5 }}
                        className="flex aspect-square items-center justify-center rounded-lg border bg-background/80 p-2 shadow-sm"
                      >
                        <div className="h-6 w-6 rounded-md bg-primary/20"></div>
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
      <section className="w-full border-y bg-muted/40 py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Designed for developers and designers
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-4 max-w-[700px] text-muted-foreground"
            >
              Powerful features that help you build better products faster
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div
              variants={fadeIn}
              className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Multiple Frameworks</h3>
              <p className="text-muted-foreground">
                Supports React, Vue, Flutter, and more frameworks with dedicated
                packages and APIs.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Repeat className="h-6 w-6" />
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
                <Zap className="h-6 w-6" />
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
                <Download className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Easy Integration</h3>
              <p className="text-muted-foreground">
                Download individual icons or use our packages for seamless
                integration into your projects.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">TypeScript Support</h3>
              <p className="text-muted-foreground">
                Full TypeScript type definitions for a better developer
                experience and autocomplete.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="group rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Consistent Design</h3>
              <p className="text-muted-foreground">
                All icons follow a consistent design language for a cohesive
                look across your application.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="rounded-3xl bg-gradient-to-br from-primary/80 to-primary p-8 text-primary-foreground md:p-12 lg:p-16"
          >
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold sm:text-4xl"
              >
                Ready to elevate your next project?
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mx-auto mt-4 max-w-[700px] text-primary-foreground/90"
              >
                Browse our extensive collection of professionally designed icons
                and start using them in your project today.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/icons"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-primary shadow-lg transition-colors hover:bg-white/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
