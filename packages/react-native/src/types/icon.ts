import { SvgProps } from 'react-native-svg';
import React from 'react';

/**
 * Props for AirQo icon components in React Native
 * @interface IconProps
 * @extends {SvgProps}
 */
export interface IconProps extends SvgProps {
  /** Icon size (width and height) */
  size?: number;

  /** Icon color - defaults to 'currentColor' (deprecated, use fill or stroke instead) */
  color?: string;
  
  /** Fill color for the icon - defaults to 'none' or inherits from color */
  fill?: string;
  
  /** Stroke color for the icon - defaults to 'currentColor' or inherits from color */
  stroke?: string;
  
  /** Stroke width for the icon - defaults to 2 */
  strokeWidth?: number | string;
}

/**
 * Type for a forwardRef'd SVG icon component for React Native
 */
export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGElement>
>;
