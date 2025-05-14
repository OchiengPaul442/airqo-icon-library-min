import * as React from 'react';

export interface IconProps {
  size?: string | number;
  color?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export type AirqoIconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

// Include all icon exports
export const AlertCircle: AirqoIconComponent;
export const BarChartCircle03: AirqoIconComponent;
// ... other icons

// Also allow dynamic imports
declare const icons: { [key: string]: AirqoIconComponent };
export { icons };
export default icons;
