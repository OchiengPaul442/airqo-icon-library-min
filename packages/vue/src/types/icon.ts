import { DefineComponent } from 'vue';

/**
 * Props for AirQo icon components in Vue
 */
export interface IconProps {
  /** Icon size (width and height) */
  size?: number | string;

  /** Icon color - defaults to 'currentColor' */
  color?: string;

  /** Icon width (overrides size) */
  width?: number | string;

  /** Icon height (overrides size) */
  height?: number | string;

  /** Stroke width for outlined icons */
  strokeWidth?: number | string;

  /** Fill color for the icon */
  fill?: string;

  /** Stroke color for the icon */
  stroke?: string;
}

/**
 * Type for a Vue icon component
 */
export type IconComponent = DefineComponent<IconProps>;
