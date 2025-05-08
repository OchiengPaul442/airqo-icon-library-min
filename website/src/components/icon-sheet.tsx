'use client';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import { ClientIcon } from '@airqo-icons-min/react/client';
import {
  Download,
  X,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import { CodeBlock } from './code-block';
import { toast } from 'sonner';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '@/lib/utils';
import { IconRenderer } from './icon-renderer';
import * as AirQoIcons from '@airqo-icons-min/react';

interface IconSheetProps {
  icon: IconMeta | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'preview' | 'code' | 'usage';

// Main preset colors with AirQo brand color first
const presetColors = [
  '#0174DF', // AirQo Blue
  '#000000',
  '#374151',
  '#EF4444',
];

// Extended colors for the expanded palette
const extendedColors = [
  '#1C1D20',
  '#4B5563',
  '#6B7280',
  '#9CA3AF',
  '#3B82F6',
  '#10B981',
  '#84CC16',
  '#EAB308',
  '#F97316',
  '#EC4899',
  '#8B5CF6',
];

export function IconSheet({ icon, isOpen, onClose }: IconSheetProps) {
  const [color, setColor] = React.useState('#0174DF'); // Default to AirQo blue
  const [size, setSize] = React.useState(24);
  const [strokeWidth, setStrokeWidth] = React.useState(1.5);
  const [activeTab, setActiveTab] = React.useState<TabType>('preview');
  const [isCopied, setIsCopied] = React.useState(false);
  const [showExtendedColors, setShowExtendedColors] = React.useState(false);
  const [iconKey, setIconKey] = React.useState(0); // Add a key to force re-render
  const [generatedSvgCode, setGeneratedSvgCode] = React.useState(''); // Store the generated SVG code

  // Reset state when icon changes
  React.useEffect(() => {
    if (icon) {
      setColor('#0174DF');
      setSize(24);
      setStrokeWidth(1.5);
      setActiveTab('preview');
      setShowExtendedColors(false);
      setIconKey((prev) => prev + 1); // Force re-render when icon changes

      // Generate initial SVG code
      if (activeTab === 'code') {
        generateAndUpdateSvgCode();
      }
    }
  }, [icon]);

  // Force re-render when size or stroke width changes
  React.useEffect(() => {
    setIconKey((prev) => prev + 1);
  }, [size, strokeWidth]);

  // Update SVG code when tab changes to 'code' or when properties change while on 'code' tab
  React.useEffect(() => {
    if (activeTab === 'code' && icon) {
      generateAndUpdateSvgCode();
    }
  }, [activeTab, color, size, strokeWidth]);

  // Get the actual icon component to extract SVG path data
  const IconComponent = icon
    ? AirQoIcons[icon.name as keyof typeof AirQoIcons]
    : null;

  // Create a rendered SVG element to use for extraction
  const renderIconToCanvas = React.useCallback(() => {
    if (!icon || !IconComponent) return null;

    // Create a temporary div to render the icon
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '-9999px';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);

    try {
      // Use React DOM to render the icon to our temporary div
      const root = ReactDOM.createRoot(tempDiv);
      root.render(
        <IconComponent
          width={size}
          height={size}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />,
      );

      // Wait for the component to render
      return new Promise<SVGSVGElement | null>((resolve) => {
        // Small delay to ensure the SVG has been rendered
        setTimeout(() => {
          // Get the SVG element from the rendered component
          const svgElement = tempDiv.querySelector('svg');
          if (!svgElement) {
            console.error('No SVG element found in rendered icon');
            resolve(null);
            return;
          }

          // Clone the SVG element
          const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;

          // Add/update necessary attributes
          clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          clonedSvg.setAttribute('width', size.toString());
          clonedSvg.setAttribute('height', size.toString());
          clonedSvg.setAttribute('fill', 'none');
          clonedSvg.setAttribute('stroke', color);
          clonedSvg.setAttribute('stroke-width', strokeWidth.toString());
          clonedSvg.setAttribute('stroke-linecap', 'round');
          clonedSvg.setAttribute('stroke-linejoin', 'round');

          // Update paths and other elements to have correct stroke width
          const pathElements = clonedSvg.querySelectorAll(
            'path, circle, rect, line, polyline, polygon',
          );
          pathElements.forEach((el) => {
            // Only set stroke if it doesn't have a fill attribute or if fill="none"
            const fill = el.getAttribute('fill');
            if (!fill || fill === 'none') {
              el.setAttribute('stroke', color);
              el.setAttribute('stroke-width', strokeWidth.toString());
            }
          });

          resolve(clonedSvg);

          // Clean up the temporary div after we've cloned the SVG
          document.body.removeChild(tempDiv);
        }, 50);
      });
    } catch (error) {
      console.error('Error rendering icon:', error);
      document.body.removeChild(tempDiv);
      return null;
    }
  }, [icon?.name, IconComponent, size, color, strokeWidth]);

  // Helper function to generate SVG code and update state
  const generateAndUpdateSvgCode = async () => {
    if (icon) {
      const svgCode = await generateSvgString();
      setGeneratedSvgCode(svgCode);
    }
  };

  // Generate SVG string with accurate path data
  const generateSvgString = async () => {
    if (!icon || !IconComponent) return '';

    try {
      // Use our renderIconToCanvas method to get the SVG element
      const svgElement = await renderIconToCanvas();

      if (!svgElement) {
        throw new Error('Failed to render SVG');
      }

      // Convert to string
      const serializer = new XMLSerializer();
      return serializer.serializeToString(svgElement);
    } catch (error) {
      console.error('Error generating SVG:', error);
      return createSvgFallback();
    }
  };

  // Create a fallback SVG string
  const createSvgFallback = () => {
    if (!icon) return '';

    const svgString = `<svg 
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
      <!-- ${icon.name} icon paths -->
      <!-- This is a fallback representation -->
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <text
        x="12"
        y="13.5"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="${color}"
        font-size="6"
        font-family="sans-serif"
        stroke="none"
      >
        ${icon.name}
      </text>
    </svg>`;

    return svgString;
  };

  const downloadSVG = async () => {
    if (!icon) return;

    try {
      // Get SVG content
      const svgContent = await generateSvgString();

      // Download
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${icon.name}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Icon downloaded successfully');
    } catch (error) {
      console.error('Error downloading icon:', error);
      toast.error('Failed to download icon');
    }
  };

  const copySVG = async () => {
    if (!icon) return;

    try {
      const svgContent = await generateSvgString();
      await navigator.clipboard.writeText(svgContent);
      setIsCopied(true);
      toast.success('SVG copied to clipboard');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Error copying SVG:', error);
      toast.error('Failed to copy SVG');
    }
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

          {/* Sheet - now a drawer from the right side */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto rounded-l-xl border-l bg-background p-6 shadow-lg"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-background pb-4">
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
            <div className="sticky top-[60px] z-10 flex bg-background border-b">
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

            <div className="p-6 space-y-8">
              {activeTab === 'preview' && (
                <div className="space-y-8">
                  {/* Icon Preview */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex h-48 w-48 items-center justify-center rounded-lg border bg-white p-4 shadow-sm dark:bg-zinc-900">
                      <div
                        className="transition-all duration-200 hover:scale-110"
                        style={{
                          width: `${Math.max(size, 32)}px`,
                          height: `${Math.max(size, 32)}px`,
                        }}
                      >
                        <IconRenderer
                          key={iconKey}
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
                    {/* Color Selection */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Color</label>
                        <button
                          onClick={() =>
                            setShowExtendedColors(!showExtendedColors)
                          }
                          className="flex items-center gap-1 text-xs text-primary"
                        >
                          {showExtendedColors ? (
                            <>
                              Show less{' '}
                              <ClientIcon
                                icon={ChevronUp}
                                className="h-3 w-3"
                              />
                            </>
                          ) : (
                            <>
                              Show more{' '}
                              <ClientIcon
                                icon={ChevronDown}
                                className="h-3 w-3"
                              />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Initial 4 colors - enhanced design */}
                      <div className="grid grid-cols-4 gap-3">
                        {presetColors.map((presetColor) => (
                          <button
                            key={presetColor}
                            type="button"
                            className={cn(
                              'relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 shadow transition-all hover:shadow-md',
                              color === presetColor
                                ? 'border-primary ring-2 ring-primary ring-offset-2'
                                : 'border-border hover:border-primary/50',
                            )}
                            style={{ backgroundColor: presetColor }}
                            onClick={() => setColor(presetColor)}
                          >
                            <span className="sr-only">
                              Select color {presetColor}
                            </span>
                            {color === presetColor && (
                              <span className="absolute inset-0 flex items-center justify-center bg-black/5">
                                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Extended color palette */}
                      <AnimatePresence>
                        {showExtendedColors && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="grid grid-cols-5 gap-3 pt-2"
                          >
                            {extendedColors.map((extendedColor) => (
                              <button
                                key={extendedColor}
                                type="button"
                                className={cn(
                                  'relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 shadow transition-all hover:shadow-md',
                                  color === extendedColor
                                    ? 'border-primary ring-2 ring-primary ring-offset-1'
                                    : 'border-border hover:border-primary/50',
                                )}
                                style={{ backgroundColor: extendedColor }}
                                onClick={() => setColor(extendedColor)}
                              >
                                <span className="sr-only">
                                  Select color {extendedColor}
                                </span>
                                {color === extendedColor && (
                                  <span className="absolute inset-0 flex items-center justify-center bg-black/5">
                                    <div className="h-1 w-1 rounded-full bg-white" />
                                  </span>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Color picker is shown based on expanded state */}
                      {showExtendedColors && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 rounded-lg border p-4"
                        >
                          <HexColorPicker
                            color={color}
                            onChange={(newColor) => {
                              setColor(newColor);
                              setIconKey((prev) => prev + 1); // Force re-render
                            }}
                          />
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">
                              Hex value:
                            </div>
                            <div className="flex h-6 items-center rounded bg-muted px-2 font-mono text-xs">
                              {color}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Size Control */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Size</label>
                        <span className="rounded bg-muted px-2 py-0.5 text-sm font-mono text-muted-foreground">
                          {size}px
                        </span>
                      </div>
                      <input
                        type="range"
                        min="16"
                        max="64"
                        step="1"
                        value={size}
                        onChange={(e) => {
                          setSize(Number(e.target.value));
                          setIconKey((prev) => prev + 1); // Force re-render
                        }}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>16px</span>
                        <span>40px</span>
                        <span>64px</span>
                      </div>
                    </div>

                    {/* Stroke Width Control */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">
                          Stroke Width
                        </label>
                        <span className="rounded bg-muted px-2 py-0.5 text-sm font-mono text-muted-foreground">
                          {strokeWidth}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        value={strokeWidth}
                        onChange={(e) => {
                          setStrokeWidth(Number(e.target.value));
                          setIconKey((prev) => prev + 1); // Force re-render
                        }}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Thin (0.5)</span>
                        <span>Default (1.5)</span>
                        <span>Thick (3)</span>
                      </div>
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
                    <CodeBlock language="html" code={generatedSvgCode} />
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
