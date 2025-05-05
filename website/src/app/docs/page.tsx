'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Book, Package, Code, Zap } from 'lucide-react';
import { useState } from 'react';

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

type FrameworkType = 'react' | 'vue' | 'flutter';

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="absolute right-3 top-3">
        <button
          onClick={copyToClipboard}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <pre className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-muted/50 p-4 text-sm">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-foreground">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default function DocsPage() {
  const [activeFramework, setActiveFramework] =
    useState<FrameworkType>('react');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="container py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Sidebar Navigation */}
        <motion.aside variants={fadeIn} className="lg:w-64">
          <div className="sticky top-24">
            <nav className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Getting Started</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#installation"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-4 w-4" />
                      Installation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#usage"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <Code className="h-4 w-4" />
                      Usage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#props"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <Zap className="h-4 w-4" />
                      Props & Customization
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Frameworks</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => setActiveFramework('react')}
                      className={`flex w-full items-center gap-2 text-left ${
                        activeFramework === 'react'
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          fill={
                            activeFramework === 'react'
                              ? 'currentColor'
                              : 'none'
                          }
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26Z"
                        />
                      </svg>
                      React
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveFramework('vue')}
                      className={`flex w-full items-center gap-2 text-left ${
                        activeFramework === 'vue'
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          fill={
                            activeFramework === 'vue' ? 'currentColor' : 'none'
                          }
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M19.197,3.406l-2.385,4.119L14.426,3.406H0.661l16.151,27.767L32.963,3.406H19.197z M5.076,6.375h3.905l7.831,13.516L24.642,6.375h3.906L16.812,27.238L5.076,6.375z"
                        />
                      </svg>
                      Vue
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveFramework('flutter')}
                      className={`flex w-full items-center gap-2 text-left ${
                        activeFramework === 'flutter'
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          fill={
                            activeFramework === 'flutter'
                              ? 'currentColor'
                              : 'none'
                          }
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M14.314 0L2.3 12 6 15.7 21.684.0h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468L21.686 11h-7.358v.072z"
                        />
                      </svg>
                      Flutter
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.div variants={fadeIn} className="flex-1">
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn how to use AirQo Icons in your projects
              </p>
            </div>

            <div className="space-y-16">
              {/* Installation Section */}
              <section id="installation" className="scroll-mt-16 space-y-6">
                <div className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-semibold">Installation</h2>
                </div>
                <p className="text-muted-foreground">
                  Install AirQo Icons for your favorite framework using a
                  package manager:
                </p>

                <div className="rounded-lg border">
                  <div className="flex border-b">
                    <button
                      onClick={() => setActiveFramework('react')}
                      className={`flex-1 border-r px-4 py-2 text-sm font-medium ${
                        activeFramework === 'react'
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-background text-muted-foreground hover:bg-muted/30'
                      }`}
                    >
                      React
                    </button>
                    <button
                      onClick={() => setActiveFramework('vue')}
                      className={`flex-1 border-r px-4 py-2 text-sm font-medium ${
                        activeFramework === 'vue'
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-background text-muted-foreground hover:bg-muted/30'
                      }`}
                    >
                      Vue
                    </button>
                    <button
                      onClick={() => setActiveFramework('flutter')}
                      className={`flex-1 px-4 py-2 text-sm font-medium ${
                        activeFramework === 'flutter'
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-background text-muted-foreground hover:bg-muted/30'
                      }`}
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
                          <CodeBlock
                            language="bash"
                            code="npm install @airqo-icons-min/react"
                          />
                        </div>
                        <div className="rounded-md bg-muted p-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span>yarn</span>
                          </div>
                          <CodeBlock
                            language="bash"
                            code="yarn add @airqo-icons-min/react"
                          />
                        </div>
                        <div className="rounded-md bg-muted p-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span>pnpm</span>
                          </div>
                          <CodeBlock
                            language="bash"
                            code="pnpm add @airqo-icons-min/react"
                          />
                        </div>
                      </div>
                    )}

                    {activeFramework === 'vue' && (
                      <div className="space-y-4">
                        <div className="rounded-md bg-muted p-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span>npm</span>
                          </div>
                          <CodeBlock
                            language="bash"
                            code="npm install @airqo-icons-min/vue"
                          />
                        </div>
                        <div className="rounded-md bg-muted p-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span>yarn</span>
                          </div>
                          <CodeBlock
                            language="bash"
                            code="yarn add @airqo-icons-min/vue"
                          />
                        </div>
                        <div className="rounded-md bg-muted p-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span>pnpm</span>
                          </div>
                          <CodeBlock
                            language="bash"
                            code="pnpm add @airqo-icons-min/vue"
                          />
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
                            language="yaml"
                            code={`dependencies:
  airqo_icons_min_flutter: ^latest_version`}
                          />
                        </div>
                        <div className="rounded-md bg-muted p-4">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span>flutter cli</span>
                          </div>
                          <CodeBlock language="bash" code="flutter pub get" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Usage Section */}
              <section id="usage" className="scroll-mt-16 space-y-6">
                <div className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-semibold">Usage</h2>
                </div>
                <p className="text-muted-foreground">
                  Import and use icons in your components:
                </p>
                <div className="rounded-lg border">
                  <div className="flex border-b">
                    <button
                      onClick={() => setActiveFramework('react')}
                      className={`flex-1 border-r px-4 py-2 text-sm font-medium ${
                        activeFramework === 'react'
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-background text-muted-foreground hover:bg-muted/30'
                      }`}
                    >
                      React
                    </button>
                    <button
                      onClick={() => setActiveFramework('vue')}
                      className={`flex-1 border-r px-4 py-2 text-sm font-medium ${
                        activeFramework === 'vue'
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-background text-muted-foreground hover:bg-muted/30'
                      }`}
                    >
                      Vue
                    </button>
                    <button
                      onClick={() => setActiveFramework('flutter')}
                      className={`flex-1 px-4 py-2 text-sm font-medium ${
                        activeFramework === 'flutter'
                          ? 'bg-muted/50 text-foreground'
                          : 'bg-background text-muted-foreground hover:bg-muted/30'
                      }`}
                    >
                      Flutter
                    </button>
                  </div>

                  <div className="p-4">
                    {activeFramework === 'react' && (
                      <div className="rounded-md bg-muted p-4">
                        <CodeBlock
                          language="tsx"
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
                          language="vue"
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
                          language="dart"
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
                  <Zap className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-semibold">
                    Props & Customization
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  All icons accept the following props for customization:
                </p>

                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="p-4 text-left font-medium">Prop</th>
                        <th className="p-4 text-left font-medium">Type</th>
                        <th className="p-4 text-left font-medium">Default</th>
                        <th className="p-4 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 font-mono text-sm">size</td>
                        <td className="p-4 font-mono text-sm">
                          number | string
                        </td>
                        <td className="p-4 font-mono text-sm">24</td>
                        <td className="p-4">Width and height of the icon</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="p-4 font-mono text-sm">color</td>
                        <td className="p-4 font-mono text-sm">string</td>
                        <td className="p-4 font-mono text-sm">currentColor</td>
                        <td className="p-4">Icon color (CSS colors or hex)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-sm">strokeWidth</td>
                        <td className="p-4 font-mono text-sm">number</td>
                        <td className="p-4 font-mono text-sm">1.5</td>
                        <td className="p-4">Width of the icon's stroke</td>
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
                  <h3 className="mb-3 text-lg font-medium">
                    TypeScript Support
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    All icons include TypeScript definitions out of the box. You
                    can import the IconProps type for use in your components:
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <CodeBlock
                      language="typescript"
                      code={`import { IconProps } from '@airqo-icons-min/react';

interface MyComponentProps {
  iconProps?: IconProps;
}`}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
