import * as React from 'react';
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconProps, IconComponent } from './types/icon';

/**
 * Enhanced HOC that adds support for size, fill and stroke props for SVG icons
 * Automatically sets width, height, fill and stroke based on provided props
 * This improves dark mode support and customization options
 */
export function withIconProps<P extends SvgProps>(
  WrappedComponent: ComponentType<P>,
): IconComponent {
  const WithIconProps = React.forwardRef<SVGElement, P & IconProps>(
    (props, ref) => {
      // Extract props safely
      const { size, color, fill, stroke, strokeWidth, ...otherProps } = props;

      // Prepare the props for the wrapped component
      const componentProps = {
        ...otherProps,
        // Size handling - apply size to width/height if not explicitly set
        width: props.width !== undefined ? props.width : size !== undefined ? size : 24,
        height: props.height !== undefined ? props.height : size !== undefined ? size : 24,
        
        // Color handling with priority:
        // 1. Explicit fill/stroke props
        // 2. color prop (for backward compatibility)
        // 3. Default values
        fill: fill !== undefined ? fill : color !== undefined ? color : props.fill,
        stroke: stroke !== undefined ? stroke : color !== undefined ? color : props.stroke || 'currentColor',
        strokeWidth: strokeWidth !== undefined ? strokeWidth : props.strokeWidth || 2,
      } as unknown as P;

      return <WrappedComponent ref={ref} {...componentProps} />;
    },
  );

  WithIconProps.displayName = `WithIconProps(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithIconProps as IconComponent;
}
