import * as CSS from 'csstype';

/**
 * Base props for all icons
 */
export interface IconBaseProps {
  size?: string | number;
  color?: string;
  stroke?: string;
  fill?: string;
  strokeWidth?: string | number;
  style?: CSS.Properties;
  className?: string;
  title?: string;
}

/**
 * Extended icon props including width and height
 */
export interface IconProps extends IconBaseProps {
  width?: string | number;
  height?: string | number;
}

/**
 * Metadata for an icon
 */
/**
 * Metadata for an icon
 */
export interface IconMeta {
  name: string;
  category: string;
  svg?: string;
  componentName?: string;
}

/**
 * Map of icon names to their metadata
 */
export interface IconsMap {
  [key: string]: IconMeta;
}
