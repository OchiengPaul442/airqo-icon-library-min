import * as React from 'react';
// Define IconBaseProps directly here instead of importing from core to avoid declaration file issues
export interface IconBaseProps {
  size?: string | number;
  color?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
}

/**
 * Props for SVG icon components with proper TypeScript support
 */
export type IconProps = IconBaseProps & React.SVGProps<SVGSVGElement>;

/**
 * Higher-order component that enhances SVG icons with proper size, fill, and stroke handling
 * @param IconComponent The original icon component to enhance
 */
export function withIconProps<P extends object>(
  IconComponent: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<SVGSVGElement>
  >,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P & IconProps> & React.RefAttributes<SVGSVGElement>
> {
  const WithIconProps = React.forwardRef<SVGSVGElement, P & IconProps>(
    (props, ref) => {
      const {
        size,
        color,
        stroke = color,
        fill = color,
        strokeWidth,
        width: propWidth,
        height: propHeight,
        ...restProps
      } = props as P & IconProps & { size?: string | number };

      // Calculate dimensions - prioritize explicit width/height props over size
      const width = propWidth !== undefined ? propWidth : size;
      const height = propHeight !== undefined ? propHeight : size;

      // Create merged props
      const mergedProps = {
        ...restProps,
        ref,
        // Only include width/height if they are defined
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
        // Apply stroke color and fill color if provided
        ...(stroke ? { stroke } : {}),
        ...(fill ? { fill } : {}),
        ...(strokeWidth !== undefined ? { strokeWidth } : {}),
      } as React.PropsWithoutRef<P> & React.RefAttributes<SVGSVGElement>;

      return <IconComponent {...mergedProps} />;
    },
  );

  WithIconProps.displayName = IconComponent.displayName
    ? `WithIconProps(${IconComponent.displayName})`
    : 'WithIconProps';

  return WithIconProps as React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P & IconProps> & React.RefAttributes<SVGSVGElement>
  >;
}

export default withIconProps;
