// Type definitions for @airqo-icons-min/react/client
import React from 'react';
import type { IconProps } from '@airqo-icons-min/core';

// Export all icons
export * from './dist';

// Client-specific exports
export declare const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconProps>;
  } & IconProps
>;

export declare const icons: Record<string, React.FC<IconProps>>;

// Default export for convenience
declare const EnhancedIcons: Record<string, React.FC<IconProps>>;
export default EnhancedIcons;
