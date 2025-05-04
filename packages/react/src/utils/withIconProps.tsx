import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../types/icon';

/**
 * Higher Order Component that wraps SVG components with standardized icon props
 * This helps ensure consistent behavior across all icons
 */
function withIconProps<Props extends {}>(
  Component: React.ComponentType<Props>,
): React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
> {
  const WrappedComponent = forwardRef<SVGSVGElement, IconProps>(
    (props, ref) => {
      const {
        size = 24,
        color = 'currentColor',
        title,
        titleId,
        ...rest
      } = props;

      return (
        <Component
          width={size}
          height={size}
          stroke={color}
          ref={ref}
          aria-labelledby={titleId}
          role="img"
          {...(rest as any)}
        />
      );
    },
  );

  WrappedComponent.displayName = `withIconProps(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
}

export default withIconProps;
