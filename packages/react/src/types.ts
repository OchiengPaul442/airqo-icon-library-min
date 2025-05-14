import * as React from 'react';

export interface IconBaseProps {
  size?: string | number;
  color?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export interface IconProps extends IconBaseProps {
  width?: string | number;
  height?: string | number;
}

export type AirqoIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

export type IconSet = {
  [key: string]: AirqoIcon;
};
