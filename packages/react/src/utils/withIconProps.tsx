import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../types/icon';

/**
 * Higher Order Component that wraps SVG components with standardized icon props
 * This helps ensure consistent behavior across all icons
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
        color = 'currentColor',
        // Keep title for future use
        title, // eslint-disable-line @typescript-eslint/no-unused-vars
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
          {...(rest as Props)}
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
