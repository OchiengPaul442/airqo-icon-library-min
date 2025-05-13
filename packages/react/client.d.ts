import React from 'react';

// Import IconProps from the local definition
interface IconBaseProps {
  size?: string | number;
  color?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
}

// Props for SVG icon components with proper TypeScript support
export type IconProps = IconBaseProps & React.SVGProps<SVGSVGElement>;

// Export the ClientIcon component
export declare const ClientIcon: React.FC<{
  icon: React.ComponentType<IconProps>;
  [key: string]: any;
}>;

// Re-export all icons
export * from './dist/index';
