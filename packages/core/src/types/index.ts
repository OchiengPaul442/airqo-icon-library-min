import * as CSS from 'csstype';

/**
 * Base props for all icons
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
 * Extended icon props including width and height
 */
export interface IconProps extends IconBaseProps {
  /**
   * Icon width (overrides size)
   */
  width?: string | number;

  /**
   * Icon height (overrides size)
   */
  height?: string | number;
}

/**
 * Metadata for an icon
 */
export interface IconMeta {
  /**
   * Icon name
   */
  name: string;

  /**
   * Icon category
   */
  category: string;

  /**
   * Raw SVG content
   */
  svg?: string;

  /**
   * Component name in PascalCase
   */
  componentName?: string;
}

/**
 * Map of icon names to their metadata
 */
export type IconsMap = Record<string, IconMeta>;
