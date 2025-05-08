// Type definitions for @airqo-icons-min/react-native/client
import React from 'react';
import type { IconNativeProps } from '@airqo-icons-min/core';

// Export all icons
export * from './dist';

// Client-specific exports
export declare const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconNativeProps>;
  } & IconNativeProps
>;

export declare const icons: Record<string, React.FC<IconNativeProps>>;

// Default export for convenience
declare const EnhancedIcons: Record<string, React.FC<IconNativeProps>>;
export default EnhancedIcons;
