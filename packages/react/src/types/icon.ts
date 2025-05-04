import { SVGProps, RefAttributes, ForwardRefExoticComponent } from 'react';

export interface SVGRProps {
  title?: string;
  titleId?: string;
}

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: number | string;
  color?: string;
  title?: string;
}

export type IconType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
