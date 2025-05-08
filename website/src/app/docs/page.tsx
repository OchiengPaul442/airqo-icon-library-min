'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ClientIcon } from '@airqo-icons-min/react/client';
import { Package, Code, Boxes } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { cn } from '@/lib/utils';

type Framework = 'react' | 'vue' | 'flutter';

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

export default function DocsPage() {
  const [activeFramework, setActiveFramework] = useState<Framework>('react');

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
            <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn how to use AirQo Icons in your projects
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Installation Section */}
          <section id="installation" className="scroll-mt-16 space-y-6">
            <div className="flex items-center gap-2">
              <ClientIcon icon={Package} className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-semibold">Installation</h2>
            </div>
            <p className="text-muted-foreground">
              Install AirQo Icons for your favorite framework using a package
              manager:
            </p>

            <div className="rounded-lg border">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveFramework('react')}
                  className={cn(
                    'flex-1 border-r px-4 py-2 text-sm font-medium',
                    activeFramework === 'react'
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted/30',
                  )}
                >
                  React
                </button>
                <button
                  onClick={() => setActiveFramework('vue')}
                  className={cn(
                    'flex-1 border-r px-4 py-2 text-sm font-medium',
                    activeFramework === 'vue'
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted/30',
                  )}
                >
                  Vue
                </button>
                <button
                  onClick={() => setActiveFramework('flutter')}
                  className={cn(
                    'flex-1 px-4 py-2 text-sm font-medium',
                    activeFramework === 'flutter'
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted/30',
                  )}
                >
                  Flutter
                </button>
              </div>

              <div className="p-4">
                {activeFramework === 'react' && (
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>npm</span>
                      </div>
                      <CodeBlock code="npm install @airqo-icons-min/react" />
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>yarn</span>
                      </div>
                      <CodeBlock code="yarn add @airqo-icons-min/react" />
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>pnpm</span>
                      </div>
                      <CodeBlock code="pnpm add @airqo-icons-min/react" />
                    </div>
                  </div>
                )}

                {activeFramework === 'vue' && (
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>npm</span>
                      </div>
                      <CodeBlock code="npm install @airqo-icons-min/vue" />
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>yarn</span>
                      </div>
                      <CodeBlock code="yarn add @airqo-icons-min/vue" />
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>pnpm</span>
                      </div>
                      <CodeBlock code="pnpm add @airqo-icons-min/vue" />
                    </div>
                  </div>
                )}

                {activeFramework === 'flutter' && (
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>pubspec.yaml</span>
                      </div>
                      <CodeBlock
                        code={`dependencies:
  airqo_icons_min_flutter:
    version: ^1.8.0`}
                      />
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span>Command Line</span>
                      </div>
                      <CodeBlock code="flutter pub get" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Usage Section */}
          <section id="usage" className="scroll-mt-16 space-y-6">
            <div className="flex items-center gap-2">
              <ClientIcon icon={Code} className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-semibold">Usage</h2>
            </div>
            <p className="text-muted-foreground">
              Import and use icons in your components:
            </p>
            <div className="rounded-lg border">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveFramework('react')}
                  className={cn(
                    'flex-1 border-r px-4 py-2 text-sm font-medium',
                    activeFramework === 'react'
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted/30',
                  )}
                >
                  React
                </button>
                <button
                  onClick={() => setActiveFramework('vue')}
                  className={cn(
                    'flex-1 border-r px-4 py-2 text-sm font-medium',
                    activeFramework === 'vue'
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted/30',
                  )}
                >
                  Vue
                </button>
                <button
                  onClick={() => setActiveFramework('flutter')}
                  className={cn(
                    'flex-1 px-4 py-2 text-sm font-medium',
                    activeFramework === 'flutter'
                      ? 'bg-muted/50 text-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted/30',
                  )}
                >
                  Flutter
                </button>
              </div>

              <div className="p-4">
                {activeFramework === 'react' && (
                  <div className="rounded-md bg-muted p-4">
                    <CodeBlock
                      code={`import { AlertCircle } from '@airqo-icons-min/react';

function MyComponent() {
  return (
    <AlertCircle
      size={24} // optional
      color="#0174DF" // optional
      strokeWidth={1.5} // optional
    />
  );
}`}
                    />
                  </div>
                )}

                {activeFramework === 'vue' && (
                  <div className="rounded-md bg-muted p-4">
                    <CodeBlock
                      code={`<template>
  <AlertCircle
    :size="24"
    color="#0174DF"
    :stroke-width="1.5"
  />
</template>

<script setup>
import { AlertCircle } from '@airqo-icons-min/vue'
</script>`}
                    />
                  </div>
                )}

                {activeFramework === 'flutter' && (
                  <div className="rounded-md bg-muted p-4">
                    <CodeBlock
                      code={`import 'package:airqo_icons_min_flutter/airqo_icons_min_flutter.dart';

// In your widget
AirqoIcon(
  iconData: AirqoIcons.alertCircle,
  size: 24,
  color: Color(0xFF0174DF),
  strokeWidth: 1.5,
)`}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Props & Customization */}
          <section id="props" className="scroll-mt-16 space-y-6">
            <div className="flex items-center gap-2">
              <ClientIcon icon={Boxes} className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-semibold">Props</h2>
            </div>
            <p className="text-muted-foreground">
              All icons accept the following props for customization:
            </p>

            <div className="rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm [&_tr:last-child]:border-0">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-4 font-medium">Prop</th>
                      <th className="p-4 font-medium">Type</th>
                      <th className="p-4 font-medium">Default</th>
                      <th className="p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-mono text-sm">size</td>
                      <td className="p-4 font-mono text-sm">number | string</td>
                      <td className="p-4 font-mono text-sm">24</td>
                      <td className="p-4">Sets both width and height</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="p-4 font-mono text-sm">color</td>
                      <td className="p-4 font-mono text-sm">string</td>
                      <td className="p-4 font-mono text-sm">currentColor</td>
                      <td className="p-4">Sets both fill and stroke</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-mono text-sm">stroke</td>
                      <td className="p-4 font-mono text-sm">string</td>
                      <td className="p-4 font-mono text-sm">currentColor</td>
                      <td className="p-4">Sets the stroke color</td>
                    </tr>
                    <tr className="border-b bg-muted/20">
                      <td className="p-4 font-mono text-sm">fill</td>
                      <td className="p-4 font-mono text-sm">string</td>
                      <td className="p-4 font-mono text-sm">none</td>
                      <td className="p-4">Sets the fill color</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-mono text-sm">strokeWidth</td>
                      <td className="p-4 font-mono text-sm">number | string</td>
                      <td className="p-4 font-mono text-sm">1.5</td>
                      <td className="p-4">Width of the icon&apos;s stroke</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="p-4 font-mono text-sm">className</td>
                      <td className="p-4 font-mono text-sm">string</td>
                      <td className="p-4 font-mono text-sm">undefined</td>
                      <td className="p-4">CSS class name for styling</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl border bg-muted/30 p-6">
                <h3 className="mb-3 text-lg font-medium">TypeScript Support</h3>
                <p className="mb-4 text-muted-foreground">
                  All icons include TypeScript definitions out of the box. You
                  can import the IconProps type for use in your components:
                </p>
                <div className="rounded-md bg-muted p-4">
                  <CodeBlock
                    code={`import { IconProps } from '@airqo-icons-min/react';

interface MyComponentProps {
  iconProps?: IconProps;
}`}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
