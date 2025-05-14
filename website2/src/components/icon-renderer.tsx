'use client';

import React, { SVGProps } from 'react';
import { IconMeta } from '@airqo-icons-min/core';
import { cn } from '../libs/utils';
import * as AirQoIcons from '@airqo-icons-min/react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

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
  // Get the actual icon component
  const IconComponent = React.useMemo(() => {
    // Get the icon component from the imported icons
    if (!icon || !icon.name) {
      return null;
    }

    const Component = AirQoIcons[
      icon.name as keyof typeof AirQoIcons
    ] as React.ComponentType<SVGProps<SVGSVGElement> & SVGRProps>;

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
  }, [icon?.name, className, color, onClick, size, strokeWidth]);
  // Primary SVG props that will be applied directly
  const svgProps: Omit<SVGProps<SVGSVGElement> & SVGRProps, 'ref'> = {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: Number(strokeWidth), // Ensure strokeWidth is a number
    fill: 'none',
    className: cn(className),
    onClick,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      color, // Sets the CSS color property for SVG elements that use currentColor
      minWidth: size,
      minHeight: size,
      // Force stroke width in style as well to ensure it's applied
      strokeWidth: `${strokeWidth}px`,
    },
    'aria-label': icon?.name,
  };
  if (!IconComponent) {
    return null;
  }

  // Use type assertion to ensure TypeScript knows IconComponent is a valid React component
  return React.createElement(
    IconComponent as React.ComponentType<any>,
    svgProps,
  );
}
