'use client';

import React from 'react';
import { ClientIcon } from '@airqo-icons-min/react/client';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '../lib/utils';
import * as AirQoIcons from '@airqo-icons-min/react';

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
  const IconComponent = React.useMemo(() => {
    // Get the icon component from the imported icons
    const Component = AirQoIcons[icon.name as keyof typeof AirQoIcons];

    if (!Component) {
      console.error(`Icon ${icon.name} not found in @airqo-icons-min/react`);
      // Return a fallback component
      return function FallbackIcon() {
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            className={className}
            onClick={onClick}
            aria-label={icon.name}
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
              {icon.name.substring(0, 2).toUpperCase()}
            </text>
          </svg>
        );
      };
    }
    return Component;
  }, [icon.name]);

  return (
    <ClientIcon
      icon={IconComponent}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={cn(className)}
      onClick={onClick}
      aria-label={icon.name}
    />
  );
}
