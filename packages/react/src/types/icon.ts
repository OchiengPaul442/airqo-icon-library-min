import { SVGProps, RefAttributes } from 'react';

/**
 * Props for AirQo icon components
 * @interface IconProps
 * @extends {SVGProps<SVGSVGElement>}
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size (width and height) */
  size?: number | string;

  /** Icon color - defaults to 'currentColor' (deprecated, use fill or stroke instead) */
  color?: string;
  
  /** Fill color for the icon - defaults to 'none' or inherits from color */
  fill?: string;
  
  /** Stroke color for the icon - defaults to 'currentColor' or inherits from color */
  stroke?: string;
  
  /** Stroke width for the icon - defaults to 2 */
  strokeWidth?: number | string;

  /** Title text for accessibility */
  title?: string;

  /** ID for the title element (for accessibility) */
  titleId?: string;
}

/**
 * Type for a forwardRef'd SVG icon component
 */
export type IconComponent = React.ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
