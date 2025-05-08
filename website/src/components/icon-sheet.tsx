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
  const [showColorPicker, setShowColorPicker] = React.useState(false); // Renamed from showExtendedColors
  const [iconKey, setIconKey] = React.useState(0);
  const [generatedSvgCode, setGeneratedSvgCode] = React.useState('');

  // Reset state when icon changes
  React.useEffect(() => {
    if (icon) {
      setColor('#0174DF');
      setSize(24);
      setStrokeWidth(1.5);
      setActiveTab('preview');
      setShowColorPicker(false);
      // iconKey will be updated by the effect below, which depends on icon
    }
  }, [icon]);

  // This useEffect is crucial for live updates of the icon preview (via IconRenderer)
  // and for regenerating SVG code for the 'Code' tab.
  React.useEffect(() => {
    setIconKey((prev) => prev + 1); // Force re-render of IconRenderer by changing its key
    if (icon) {
      generateAndUpdateSvgCode(); // Update SVG code for the 'Code' tab
    }
  }, [size, strokeWidth, color, icon, activeTab]); // Dependencies that trigger preview/code update

  // Get the actual icon component to extract SVG path data
  const IconComponent = icon
    ? AirQoIcons[icon.name as keyof typeof AirQoIcons]
    : null;

  // Improve the SVG generation mechanism for more reliable downloads and copies
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

          // Make sure the SVG has proper viewBox for correct rendering
          if (!clonedSvg.hasAttribute('viewBox')) {
            clonedSvg.setAttribute('viewBox', '0 0 24 24');
          }

          // Add/update necessary attributes
          clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          clonedSvg.setAttribute('width', size.toString());
          clonedSvg.setAttribute('height', size.toString());
          clonedSvg.setAttribute('fill', 'none');
          clonedSvg.setAttribute('stroke', color);
          clonedSvg.setAttribute('stroke-width', strokeWidth.toString());
          clonedSvg.setAttribute('stroke-linecap', 'round');
          clonedSvg.setAttribute('stroke-linejoin', 'round');

          // Ensure all child elements have correct attributes
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
        }, 100); // Increased timeout for better reliability
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
      try {
        const svgCode = await generateSvgString();
        setGeneratedSvgCode(svgCode);
      } catch (error) {
        console.error('Error updating SVG code:', error);
        setGeneratedSvgCode(createSvgFallback());
      }
    } else {
      setGeneratedSvgCode(''); // Clear if no icon
    }
  };

  // Generate SVG string with accurate path data
  const generateSvgString = async () => {
    if (!icon || !IconComponent) return '';

    try {
      // Use our renderIconToCanvas method to get the SVG element
      const svgElement = await renderIconToCanvas();

      if (!svgElement) {
        console.error('Failed to render SVG element');
        return createSvgFallback();
      }

      // Convert to string
      const serializer = new XMLSerializer();
      let svgString = serializer.serializeToString(svgElement);

      // Ensure proper formatting and indentation
      svgString = svgString
        .replace(/></g, '>\n  <')
        .replace(/<svg/, '\n<svg')
        .replace('</svg>', '\n</svg>')
        .replace(/ {2,}/g, '  ');

      return svgString;
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

  // Improved download SVG function
  const downloadSVG = async () => {
    if (!icon) return;

    try {
      // Generate SVG code right before download to ensure it's up to date
      const svgContent = await generateSvgString();
      if (!svgContent) {
        throw new Error('Failed to generate SVG content');
      }

      // Create a Blob with the SVG content
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      // Create an anchor element to download the file
      const a = document.createElement('a');
      a.href = url;
      a.download = `${icon.name}.svg`;
      document.body.appendChild(a);
      a.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);

      toast.success('Icon downloaded successfully');
    } catch (error) {
      console.error('Error downloading icon:', error);
      toast.error('Failed to download icon');
    }
  };

  // Improved copy SVG function
  const copySVG = async () => {
    if (!icon) return;

    try {
      // Generate SVG code right before copying to ensure it's up to date
      const svgContent = await generateSvgString();
      if (!svgContent) {
        throw new Error('Failed to generate SVG content');
      }

      // Use clipboard API to copy text
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
          />

          {/* Sheet - right drawer */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }} // Slightly adjusted animation
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto border-l border-border bg-background/90 shadow-xl dark:bg-zinc-900/90 backdrop-blur-lg" // Removed rounded-l-2xl, adjusted blur & opacity
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md p-4 border-b border-border">
              {' '}
              {/* Adjusted padding */}
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {icon.name}
              </h2>
              <button
                onClick={onClose}
                className="rounded-md p-2 text-muted-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" // Adjusted focus ring
                aria-label="Close icon sheet"
              >
                <ClientIcon icon={X} className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="sticky top-[68px] z-20 flex bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-border">
              {' '}
              {/* Adjusted top value */}
              {['preview', 'code', 'usage'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as TabType)}
                  className={cn(
                    'flex-1 border-b-2 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary', // Adjusted padding, text size, focus
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/40',
                  )}
                  aria-current={activeTab === tab ? 'page' : undefined}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-6">
              {' '}
              {/* Reduced padding and space-y */}
              {activeTab === 'preview' && (
                <div className="space-y-6">
                  {' '}
                  {/* Reduced space-y */}
                  {/* Icon Preview Card */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-lg border border-border bg-gradient-to-br from-white via-zinc-50 to-zinc-100 shadow-md dark:from-zinc-800 dark:via-zinc-700/50 dark:to-zinc-800">
                      {' '}
                      {/* Adjusted size, shadow, gradient */}
                      <div className="absolute inset-0 rounded-lg bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%),linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%)] bg-[length:16px_16px] [background-position:0_0,8px_8px] opacity-40 dark:bg-[linear-gradient(45deg,#333_25%,transparent_25%,transparent_75%,#333_75%),linear-gradient(45deg,#333_25%,transparent_25%,transparent_75%,#333_75%)] pointer-events-none" />
                      <div
                        className="relative transition-transform duration-150 hover:scale-105"
                        style={{
                          width: `${Math.max(size, 32)}px`, // Adjusted min size
                          height: `${Math.max(size, 32)}px`,
                        }}
                      >
                        <IconRenderer
                          key={iconKey} // This key is crucial for re-rendering
                          icon={icon}
                          size={size}
                          color={color}
                          strokeWidth={strokeWidth}
                          className="drop-shadow-sm" // Adjusted shadow
                        />
                      </div>
                    </div>
                  </div>
                  {/* Customization Controls */}
                  <div className="space-y-6">
                    {' '}
                    {/* Reduced space-y */}
                    {/* Color Selection */}
                    <section
                      aria-labelledby="color-label"
                      className="space-y-3"
                    >
                      {' '}
                      {/* Reduced space-y */}
                      <div className="flex items-center justify-between">
                        <label
                          id="color-label"
                          className="text-sm font-medium text-foreground"
                        >
                          Color
                        </label>{' '}
                        {/* Adjusted font size */}
                        <button
                          onClick={() => setShowColorPicker(!showColorPicker)}
                          className="flex items-center gap-1 text-xs text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm"
                          aria-expanded={showColorPicker}
                        >
                          {showColorPicker ? (
                            <>
                              Hide Picker{' '}
                              <ClientIcon
                                icon={ChevronUp}
                                className="h-3 w-3"
                              />
                            </>
                          ) : (
                            <>
                              Custom Color{' '}
                              <ClientIcon
                                icon={ChevronDown}
                                className="h-3 w-3"
                              />
                            </>
                          )}
                        </button>
                      </div>
                      {/* Preset Colors */}
                      <div className="grid grid-cols-4 gap-2">
                        {' '}
                        {/* Adjusted gap */}
                        {presetColors.map((presetColor) => (
                          <button
                            key={presetColor}
                            type="button"
                            className={cn(
                              'relative flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background', // Adjusted size & focus
                              color === presetColor
                                ? 'border-primary ring-1 ring-primary' // Simplified active state
                                : 'border-border hover:border-primary/60',
                            )}
                            style={{ backgroundColor: presetColor }}
                            onClick={() => setColor(presetColor)}
                            aria-label={`Select color ${presetColor}`}
                          >
                            {color === presetColor && (
                              <span className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full">
                                <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-zinc-900 border border-primary/50" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      {/* Color Picker */}
                      <AnimatePresence>
                        {showColorPicker && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2.5 rounded-md border border-border bg-muted/20 p-2.5 dark:bg-zinc-800/40" // Adjusted styling
                          >
                            <HexColorPicker
                              color={color}
                              onChange={setColor} // Directly pass setColor
                              className="!w-full !h-auto"
                            />
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-xs text-muted-foreground">
                                Hex:
                              </div>
                              <div className="flex h-5 items-center rounded bg-background px-1.5 font-mono text-xs border border-border text-foreground">
                                {color}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </section>
                    {/* Size Control */}
                    <section
                      aria-labelledby="size-label"
                      className="space-y-2.5"
                    >
                      {' '}
                      {/* Adjusted space-y */}
                      <div className="flex items-center justify-between">
                        <label
                          id="size-label"
                          className="text-sm font-medium text-foreground"
                        >
                          Size
                        </label>
                        <span className="rounded bg-muted/50 px-1.5 py-0.5 text-xs font-mono text-muted-foreground border border-border">
                          {size}px
                        </span>
                      </div>
                      <input
                        type="range"
                        min="12"
                        max="80" // Adjusted max
                        step="1"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full h-2 accent-primary bg-slate-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-primary" // Improved light mode visibility
                        aria-valuenow={size}
                        aria-valuemin={12}
                        aria-valuemax={80}
                        aria-label="Icon size"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>12px</span>
                        <span>80px</span>
                      </div>
                    </section>
                    {/* Stroke Width Control */}
                    <section
                      aria-labelledby="stroke-label"
                      className="space-y-2.5"
                    >
                      {' '}
                      {/* Adjusted space-y */}
                      <div className="flex items-center justify-between">
                        <label
                          id="stroke-label"
                          className="text-sm font-medium text-foreground"
                        >
                          Stroke Width
                        </label>
                        <span className="rounded bg-muted/50 px-1.5 py-0.5 text-xs font-mono text-muted-foreground border border-border">
                          {strokeWidth.toFixed(1)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        value={strokeWidth}
                        onChange={(e) => setStrokeWidth(Number(e.target.value))}
                        className="w-full h-2 accent-primary bg-slate-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-primary" // Improved light mode visibility
                        aria-valuenow={strokeWidth}
                        aria-valuemin={0.5}
                        aria-valuemax={3}
                        aria-label="Stroke width"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0.5</span>
                        <span>3.0</span>
                      </div>
                    </section>
                  </div>
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {' '}
                    {/* Adjusted gap & padding */}
                    <button
                      onClick={downloadSVG}
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" // Adjusted size & focus
                    >
                      <ClientIcon icon={Download} className="h-4 w-4" />{' '}
                      {/* Adjusted size */}
                      Download
                    </button>
                    <button
                      onClick={copySVG}
                      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" // Adjusted size & focus
                    >
                      {isCopied ? (
                        <ClientIcon
                          icon={Check}
                          className="h-4 w-4 text-green-600 dark:text-green-500"
                        /> // Adjusted size & color
                      ) : (
                        <ClientIcon icon={Copy} className="h-4 w-4" /> // Adjusted size
                      )}
                      {isCopied ? 'Copied!' : 'Copy SVG'}
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'code' && (
                <div className="space-y-5">
                  {' '}
                  {/* Adjusted space-y */}
                  <div className="space-y-1.5">
                    {' '}
                    {/* Adjusted space-y */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        React
                      </h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-3.5 w-3.5 text-muted-foreground" // Adjusted size
                      />
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`import { ${
                        icon.name
                      } } from '@airqo-icons-min/react';

export default function MyComponent() {
  return (
    <${icon.name}
      color="${color}"
      size={${size}}
      strokeWidth={${strokeWidth.toFixed(1)}}
    />
  );
}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        React (Next.js)
                      </h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-3.5 w-3.5 text-muted-foreground"
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
      strokeWidth={${strokeWidth.toFixed(1)}}
      onClick={() => {/* handle click */}}
    />
  );
}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        Vue
                      </h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-3.5 w-3.5 text-muted-foreground"
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
    :stroke-width="${strokeWidth.toFixed(1)}"
  />
</template>`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        React Native
                      </h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-3.5 w-3.5 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock
                      language="tsx"
                      code={`import { ${
                        icon.name
                      } } from '@airqo-icons-min/react-native';

export default function MyComponent() {
  return (
    <${icon.name}
      color="${color}"
      size={${size}}
      strokeWidth={${strokeWidth.toFixed(1)}}
    />
  );
}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        HTML
                      </h4>
                      <ClientIcon
                        icon={ChevronRight}
                        className="h-3.5 w-3.5 text-muted-foreground"
                      />
                    </div>
                    <CodeBlock language="html" code={generatedSvgCode} />
                  </div>
                </div>
              )}
              {activeTab === 'usage' && (
                <div className="space-y-5">
                  {' '}
                  {/* Adjusted space-y */}
                  <div className="space-y-1.5">
                    {' '}
                    {/* Adjusted space-y */}
                    <h3 className="text-base font-medium text-foreground">
                      Installation
                    </h3>{' '}
                    {/* Adjusted heading size */}
                    <p className="text-xs text-muted-foreground">
                      {' '}
                      {/* Adjusted text size */}
                      Choose your preferred package manager to install AirQo
                      Icons.
                    </p>
                    <div className="mt-2.5 space-y-2.5">
                      {' '}
                      {/* Adjusted spacing */}
                      <div className="space-y-1">
                        {' '}
                        {/* Adjusted spacing */}
                        <h4 className="text-xs font-medium text-foreground">
                          npm
                        </h4>{' '}
                        {/* Adjusted text size */}
                        <CodeBlock
                          language="bash"
                          code="npm install @airqo-icons-min/react"
                        />
                      </div>
                      <div className="space-y-1">
                        {' '}
                        {/* Adjusted spacing */}
                        <h4 className="text-xs font-medium text-foreground">
                          yarn
                        </h4>{' '}
                        {/* Adjusted text size */}
                        <CodeBlock
                          language="bash"
                          code="yarn add @airqo-icons-min/react"
                        />
                      </div>
                      <div className="space-y-1">
                        {' '}
                        {/* Adjusted spacing */}
                        <h4 className="text-xs font-medium text-foreground">
                          pnpm
                        </h4>{' '}
                        {/* Adjusted text size */}
                        <CodeBlock
                          language="bash"
                          code="pnpm add @airqo-icons-min/react"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {' '}
                    {/* Adjusted space-y */}
                    <h3 className="text-base font-medium text-foreground">
                      Usage Examples
                    </h3>{' '}
                    {/* Adjusted heading size */}
                    <p className="text-xs text-muted-foreground">
                      {' '}
                      {/* Adjusted text size */}
                      Common usage examples for AirQo Icons.
                    </p>
                    <div className="mt-2.5 space-y-2.5">
                      {' '}
                      {/* Adjusted spacing */}
                      <div className="space-y-1">
                        {' '}
                        {/* Adjusted spacing */}
                        <h4 className="text-xs font-medium text-foreground">
                          Basic Usage
                        </h4>{' '}
                        {/* Adjusted text size */}
                        <CodeBlock
                          language="tsx"
                          code={`import { ${icon.name} } from '@airqo-icons-min/react';

function MyComponent() {
  return <${icon.name} />;
}`}
                        />
                      </div>
                      <div className="space-y-1">
                        {' '}
                        {/* Adjusted spacing */}
                        <h4 className="text-xs font-medium text-foreground">
                          {' '}
                          {/* Adjusted text size */}
                          With Custom Props
                        </h4>
                        <CodeBlock
                          language="tsx"
                          code={`import { ${
                            icon.name
                          } } from '@airqo-icons-min/react';

function MyComponent() {
  return (
    <${icon.name} 
      size={${size}} 
      color="${color}" 
      strokeWidth={${strokeWidth.toFixed(1)}}
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
