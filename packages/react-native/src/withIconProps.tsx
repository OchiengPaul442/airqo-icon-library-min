import * as React from 'react';
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

/**
 * Interface for components with size prop
 */
export interface IconProps extends SvgProps {
  size?: number;
}

/**
 * Higher order component that adds size prop support to SVG icons
 * Will automatically set width and height to the size prop value if provided
 */
export function withIconProps<P extends SvgProps>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P & IconProps> {
  const WithIconProps = (props: P & IconProps) => {
    // If size prop is provided, use it for both width and height unless they're explicitly set
    const { size, ...otherProps } = props;

    const finalProps: P = {
      ...otherProps,
      // Only set width/height from size if they're not already explicitly provided
      ...(size !== undefined && props.width === undefined
        ? { width: size }
        : {}),
      ...(size !== undefined && props.height === undefined
        ? { height: size }
        : {}),
    } as P;

    return <WrappedComponent {...finalProps} />;
  };

  WithIconProps.displayName = `WithIconProps(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithIconProps;
}
