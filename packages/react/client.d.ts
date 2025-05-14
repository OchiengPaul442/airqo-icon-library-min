import React from 'react';
import type { IconProps } from './dist/withIconProps';

// Export the ClientIcon component
export declare const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconProps>;
  } & IconProps
>;

// Re-export all icons
export * from './dist/index';

// Export enhanced icons with proper props support
export declare const icons: Record<string, React.ComponentType<IconProps>>;

// Export the HOC and types
export { withIconProps } from './dist/withIconProps';
export type { IconProps };

// Export a default object with all enhanced icons
declare const enhancedIcons: Record<string, React.ComponentType<IconProps>>;
export default enhancedIcons;
