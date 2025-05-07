'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '@/lib/utils';

// Map of icon components that will be loaded dynamically
const iconComponents: Record<string, React.ComponentType<any>> = {};

interface IconRendererProps {
  icon: IconMeta;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
}

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
      iconComponents[iconKey] = dynamic(
        () => import('@airqo-icons-min/react').then((mod) => mod[icon.name]),
        {
          ssr: false,
          loading: () => (
            <div
              className={cn(
                'flex items-center justify-center rounded-md bg-muted/30',
                className,
              )}
              style={{ width: size, height: size }}
            ></div>
          ),
        },
      );
    }

    return iconComponents[iconKey];
  }, [icon.name, size, className]);

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
