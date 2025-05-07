import * as CSS from 'csstype';

/**
 * Common icon properties that extend the standard SVG props
 */
export interface IconBaseProps {
  /**
   * Icon size (width and height)
   * @default "1em"
   */
  size?: string | number;

  /**
   * Icon color
   * @default "currentColor"
   */
  color?: string;

  /**
   * Line/stroke color
   */
  stroke?: string;

  /**
   * Fill color
   */
  fill?: string;

  /**
   * Stroke width
   */
  strokeWidth?: string | number;

  /**
   * CSS style object
   */
  style?: CSS.Properties;

  /**
   * CSS class name
   */
  className?: string;

  /**
   * Title for accessibility
   */
  title?: string;
}

/**
 * Type for React Native icons
 */
export interface IconNativeProps extends IconBaseProps {
  /**
   * Additional width property (overrides size)
   */
  width?: string | number;

  /**
   * Additional height property (overrides size)
   */
  height?: string | number;
}
