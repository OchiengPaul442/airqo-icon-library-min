import * as React from 'react';
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconProps, IconComponent } from './types/icon';

/**
 * Simplified HOC that adds size prop support to SVG icons
 * Automatically sets width and height based on size prop if provided
 */
export function withIconProps<P extends SvgProps>(
  WrappedComponent: ComponentType<P>,
): IconComponent {
  const WithIconProps = React.forwardRef<SVGElement, P & IconProps>(
    (props, ref) => {
      // Extract size and other props safely
      const { size, ...otherProps } = props;

      // Prepare the props for the wrapped component
      const componentProps = {
        ...otherProps,
        width:
          props.width !== undefined
            ? props.width
            : size !== undefined
            ? size
            : 24,
        height:
          props.height !== undefined
            ? props.height
            : size !== undefined
            ? size
            : 24,
      } as unknown as P;

      return <WrappedComponent ref={ref} {...componentProps} />;
    },
  );

  WithIconProps.displayName = `WithIconProps(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithIconProps as IconComponent;
}
