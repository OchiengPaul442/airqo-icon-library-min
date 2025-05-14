import * as CSS from 'csstype';

/**
 * Common icon properties
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
 * Extended icon properties with width and height
 */
export interface IconProps extends IconBaseProps {
  /**
   * Additional width property (overrides size)
   */
  width?: string | number;

  /**
   * Additional height property (overrides size)
   */
  height?: string | number;
}

/**
 * Icon manifest entry type
 */
export interface IconManifestEntry {
  path: string;
  category: string;
  componentName: string;
}

/**
 * Icon manifest type
 */
export interface IconManifest {
  [key: string]: IconManifestEntry;
}

export type { CSS };
