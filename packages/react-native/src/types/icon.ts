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

  /** Icon color - defaults to 'currentColor' */
  color?: string;
}

/**
 * Type for a forwardRef'd SVG icon component for React Native
 */
export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGElement>
>;
