import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../types/icon';

/**
 * Higher Order Component that wraps SVG components with standardized icon props
 * This helps ensure consistent behavior across all icons
 * With enhanced support for fill and stroke customization for better dark mode compatibility
 */
function withIconProps<Props extends Record<string, unknown>>(
  Component: React.ComponentType<Props>,
): React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
> {
  const WrappedComponent = forwardRef<SVGSVGElement, IconProps>(
    (props, ref) => {
      const {
        size = 24,
        color,
        fill,
        stroke,
        strokeWidth,
        title,
        titleId,
        ...rest
      } = props;

      // Create component props with consistent handling of size, fill, and stroke
      const componentProps = {
        width: props.width ?? size,
        height: props.height ?? size,
        
        // Color handling with priority:
        // 1. Explicit fill/stroke props
        // 2. color prop (for backward compatibility)
        // 3. Default values
        fill: fill !== undefined ? fill : color !== undefined ? color : 'none',
        stroke: stroke !== undefined ? stroke : color !== undefined ? color : 'currentColor',
        strokeWidth: strokeWidth !== undefined ? strokeWidth : 2,
        
        // Accessibility props
        ref,
        'aria-labelledby': titleId,
        role: 'img',
        ...(rest as Props),
      };

      return (
        <>
          {title ? <title id={titleId}>{title}</title> : null}
          <Component {...componentProps} />
        </>
      );
    },
  );

  WrappedComponent.displayName = `withIconProps(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
}

export default withIconProps;
