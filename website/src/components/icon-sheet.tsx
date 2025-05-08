'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClientIcon } from '@airqo-icons-min/react/client';
import { Download, X, Copy, Check, ChevronRight } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import { CodeBlock } from './code-block';
import { toast } from 'sonner';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '@/lib/utils';
import { IconRenderer } from './icon-renderer';

interface IconSheetProps {
  icon: IconMeta | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'preview' | 'code' | 'usage';

const presetColors = [
  '#0174DF', // AirQo Blue
  '#000000',
  '#1C1D20',
  '#374151',
  '#4B5563',
  '#6B7280',
  '#9CA3AF',
  '#3B82F6',
  '#10B981',
  '#84CC16',
  '#EAB308',
  '#F97316',
  '#EF4444',
  '#EC4899',
  '#8B5CF6',
];

export function IconSheet({ icon, isOpen, onClose }: IconSheetProps) {
  const [color, setColor] = React.useState('#0174DF'); // Default to AirQo blue
  const [size, setSize] = React.useState(24);
  const [strokeWidth, setStrokeWidth] = React.useState(1.5);
  const [activeTab, setActiveTab] = React.useState<TabType>('preview');
  const [isCopied, setIsCopied] = React.useState(false);

  // Reset state when icon changes
  React.useEffect(() => {
    if (icon) {
      setColor('#0174DF');
      setSize(24);
      setStrokeWidth(1.5);
      setActiveTab('preview');
    }
  }, [icon]);

  // Generate SVG string for download/copy
  const generateSvgString = () => {
    if (!icon) return '';
    return `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${size}"
  height="${size}"
  viewBox="0 0 24 24"
  fill="none"
  stroke="${color}"
  stroke-width="${strokeWidth}"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- Icon paths would go here -->
</svg>`;
  };

  const downloadSVG = () => {
    if (!icon) return;

    const svg = generateSvgString();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.name}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Icon downloaded successfully');
  };

  const copySVG = async () => {
    if (!icon) return;

    const svg = generateSvgString();
    await navigator.clipboard.writeText(svg);
    setIsCopied(true);
    toast.success('SVG copied to clipboard');
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!icon) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-2xl rounded-t-xl border bg-background p-6 shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{icon.name}</h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2.5 text-muted-foreground hover:bg-muted"
              >
                <ClientIcon icon={X} className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex border-b">
              <button
                onClick={() => setActiveTab('preview')}
                className={cn(
                  'flex-1 border-b-2 border-transparent py-2 text-sm font-medium',
                  activeTab === 'preview' && 'border-primary text-primary',
                )}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={cn(
                  'flex-1 border-b-2 border-transparent py-2 text-sm font-medium',
                  activeTab === 'code' && 'border-primary text-primary',
                )}
              >
                Code
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={cn(
                  'flex-1 border-b-2 border-transparent py-2 text-sm font-medium',
                  activeTab === 'usage' && 'border-primary text-primary',
                )}
              >
                Usage
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'preview' && (
                <div className="space-y-8">
                  {/* Icon Preview */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex h-48 w-48 items-center justify-center rounded-lg border bg-white p-4 shadow-sm dark:bg-zinc-900">
                      <div className="transition-transform duration-200 hover:scale-110">
                        <IconRenderer
                          icon={icon}
                          size={size}
                          color={color}
                          strokeWidth={strokeWidth}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Customization Controls */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <label className="text-sm font-medium">Color</label>
                      <div className="grid grid-cols-5 gap-2">
                        {presetColors.map((presetColor) => (
                          <button
                            key={presetColor}
                            className={cn(
                              'group relative h-8 w-8 overflow-hidden rounded-full border',
                              color === presetColor &&
                                'ring-2 ring-primary ring-offset-2',
                            )}
                            style={{ backgroundColor: presetColor }}
                            onClick={() => setColor(presetColor)}
                          >
                            <span className="sr-only">
                              Select color {presetColor}
                            </span>
                            <span
                              className="absolute inset-0 transition-opacity group-hover:opacity-10"
                              style={{ backgroundColor: 'white' }}
                            />
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 rounded-lg border p-3">
                        <HexColorPicker color={color} onChange={setColor} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Size</label>
                        <span className="text-sm text-muted-foreground">
                          {size}px
                        </span>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="64"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">
                          Stroke Width
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {strokeWidth}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        value={strokeWidth}
                        onChange={(e) => setStrokeWidth(Number(e.target.value))}
                        className="w-full accent-primary"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={downloadSVG}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <ClientIcon icon={Download} className="h-4 w-4" />
                      Download
                    </button>
                    <button
                      onClick={copySVG}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      {isCopied ? (
                        <ClientIcon icon={Check} className="h-4 w-4" />
                      ) : (
                        <ClientIcon icon={Copy} className="h-4 w-4" />
                      )}
                      {isCopied ? 'Copied' : 'Copy SVG'}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">React</h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`import { ${icon.name} } from '@airqo-icons-min/react';

export default function MyComponent() {
  return (
    <${icon.name}
      color="${color}"
      size={${size}}
      strokeWidth={${strokeWidth}}
    />
  );
}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">React (Next.js)</h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`'use client';

import { ClientIcon } from '@airqo-icons-min/react/client';
import { ${icon.name} } from '@airqo-icons-min/react';

export default function MyComponent() {
  return (
    <ClientIcon
      icon={${icon.name}}
      color="${color}"
      size={${size}}
      strokeWidth={${strokeWidth}}
      onClick={() => {/* handle click */}}
    />
  );
}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Vue</h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock
                      language="vue"
                      code={`<script setup>
import { ${icon.name} } from '@airqo-icons-min/vue';
</script>

<template>
  <${icon.name}
    :size="${size}"
    color="${color}"
    :stroke-width="${strokeWidth}"
  />
</template>`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">React Native</h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`import { ${icon.name} } from '@airqo-icons-min/react-native';

export default function MyComponent() {
  return (
    <${icon.name}
      color="${color}"
      size={${size}}
      strokeWidth={${strokeWidth}}
    />
  );
}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">HTML</h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-4 w-4 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock language="html" code={generateSvgString()} />
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Installation</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred package manager to install AirQo
                      Icons.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">npm</h4>
                        <CodeBlock
                          language="bash"
                          code="npm install @airqo-icons-min/react"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">yarn</h4>
                        <CodeBlock
                          language="bash"
                          code="yarn add @airqo-icons-min/react"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">pnpm</h4>
                        <CodeBlock
                          language="bash"
                          code="pnpm add @airqo-icons-min/react"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Usage Examples</h3>
                    <p className="text-sm text-muted-foreground">
                      Common usage examples for AirQo Icons.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Basic Usage</h4>
                        <CodeBlock
                          language="tsx"
                          code={`import { ${icon.name} } from '@airqo-icons-min/react';

function MyComponent() {
  return <${icon.name} />;
}`}
                        />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">
                          With Custom Props
                        </h4>
                        <CodeBlock
                          language="tsx"
                          code={`import { ${icon.name} } from '@airqo-icons-min/react';

function MyComponent() {
  return (
    <${icon.name} 
      size={${size}} 
      color="${color}" 
      strokeWidth={${strokeWidth}}
      className="my-icon"
      onClick={() => console.log('Icon clicked!')}
    />
  );
}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
