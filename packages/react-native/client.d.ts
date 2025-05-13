// Type definitions for @airqo-icons-min/react-native/client
import React from 'react';
import { ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

// Define IconNativeProps directly here to avoid dependency issues
export interface IconBaseProps {
  size?: string | number;
  color?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
}

export type IconNativeProps = IconBaseProps & SvgProps & ViewProps;

// Export all icons
export * from './dist/index';

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
