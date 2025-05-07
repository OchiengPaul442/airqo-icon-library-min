'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '../lib/utils';

// Define proper type for icon components
interface IconComponentProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

// Map of icon components that will be loaded dynamically
const iconComponents: Record<
  string,
  React.ComponentType<IconComponentProps>
> = {};

interface IconRendererProps {
  icon: IconMeta;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

// Fallback component when icon is not found
const IconFallback = ({
  name,
  size,
  color,
  strokeWidth,
  className,
  onClick,
}: {
  name: string;
  size: number;
  color: string;
  strokeWidth: number;
  className?: string;
  onClick?: () => void;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
    aria-label={name}
  >
    <circle cx="12" cy="12" r="10" />
    <text
      x="12"
      y="13"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={color}
      fontSize="8"
      fontFamily="sans-serif"
      stroke="none"
    >
      {name.substring(0, 2).toUpperCase()}
    </text>
  </svg>
);

// Loading placeholder component
const IconLoadingPlaceholder = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <div
    className={cn(
      'flex items-center justify-center rounded-md bg-muted/30',
      className,
    )}
    style={{ width: size, height: size }}
  />
);

/**
 * Dynamically renders an icon from the AirQo icon library
 */
export function IconRenderer({
  icon,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  onClick,
}: IconRendererProps) {
  // Dynamically import the icon component if it hasn't been loaded yet
  const IconComponent = React.useMemo(() => {
    const iconKey = icon.name;

    if (!iconComponents[iconKey]) {
      // Create a dynamic import for the icon
      const DynamicIconComponent = dynamic(
        () =>
          import('@airqo-icons-min/react').then((mod) => {
            // Use the icon name directly since it's already in PascalCase in the manifest
            const IconComp = mod[icon.name];
            if (!IconComp) {
              console.error(
                `Icon ${icon.name} not found in @airqo-icons-min/react`,
              );
              // Return a named function component as fallback
              const FallbackIcon = function FallbackIcon(
                props: IconComponentProps,
              ) {
                return (
                  <IconFallback
                    name={icon.name}
                    size={props.size || size}
                    color={props.color || color}
                    strokeWidth={props.strokeWidth || strokeWidth}
                    className={props.className}
                    onClick={props.onClick}
                  />
                );
              };
              FallbackIcon.displayName = `FallbackIcon(${icon.name})`;
              return FallbackIcon;
            }
            return IconComp;
          }),
        {
          ssr: false,
          loading: () => (
            <IconLoadingPlaceholder size={size} className={className} />
          ),
        },
      );

      // Add display name to fix ESLint warning
      DynamicIconComponent.displayName = `DynamicIcon(${icon.name})`;

      iconComponents[iconKey] = DynamicIconComponent;
    }

    return iconComponents[iconKey];
  }, [icon.name, size, className, color, strokeWidth, onClick]);

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      onClick={onClick}
      aria-label={icon.name}
    />
  );
}
