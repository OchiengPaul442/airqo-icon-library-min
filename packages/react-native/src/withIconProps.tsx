import * as React from 'react';
import { SvgProps } from 'react-native-svg';

// Define the IconNativeProps interface directly to avoid import issues
export interface IconNativeProps {
  size?: number | string;
  color?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
}

/**
 * Props for React Native SVG icon components with proper TypeScript support
 */
export type IconNativeComponentProps = IconNativeProps & SvgProps;

/**
 * Higher-order component that enhances React Native SVG icons with proper size, fill, and stroke handling
 * @param IconComponent The original icon component to enhance
 */
export function withIconProps<P extends object>(
  IconComponent: React.ComponentType<P>,
): React.FC<P & IconNativeComponentProps> {
  const WithIconProps: React.FC<P & IconNativeComponentProps> = (props) => {
    const {
      size,
      width,
      height,
      color,
      stroke = color,
      fill = color,
      strokeWidth,
      ...restProps
    } = props as IconNativeComponentProps & P;

    // Calculate dimensions based on size, with width/height taking precedence
    const dimensions = {
      width: width !== undefined ? width : size,
      height: height !== undefined ? height : size,
    };

    // Apply stroke color and fill color if provided
    const colorProps: Record<string, string | number | undefined> = {};
    if (stroke) colorProps.stroke = stroke;
    if (fill) colorProps.fill = fill;
    if (strokeWidth) colorProps.strokeWidth = strokeWidth;

    return (
      <IconComponent
        {...dimensions}
        {...colorProps}
        {...(restProps as unknown as P)}
      />
    );
  };

  WithIconProps.displayName = `WithIconProps(${
    IconComponent.displayName || 'IconComponent'
  })`;

  return WithIconProps;
}

export default withIconProps;
