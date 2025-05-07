import * as React from 'react';
import type { ViewProps } from 'react-native';

declare module 'react-native-svg' {
  export interface SvgProps extends ViewProps {
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: string;
    title?: string;
    fill?: string;
    fillOpacity?: number | string;
    fillRule?: 'nonzero' | 'evenodd';
    stroke?: string;
    strokeWidth?: number | string;
    strokeOpacity?: number | string;
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'miter' | 'round' | 'bevel';
    strokeDasharray?: number[] | string;
    strokeDashoffset?: number | string;
    role?: string;
    'aria-labelledby'?: string;
  }

  export interface PathProps extends ViewProps {
    d?: string;
    fill?: string;
    fillOpacity?: number | string;
    fillRule?: 'nonzero' | 'evenodd';
    stroke?: string;
    strokeWidth?: number | string;
    strokeOpacity?: number | string;
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'miter' | 'round' | 'bevel';
    strokeDasharray?: number[] | string;
    strokeDashoffset?: number | string;
  }

  export interface GProps extends ViewProps {
    fill?: string;
    stroke?: string;
    children?: React.ReactNode;
  }

  export interface DefsProps {
    children?: React.ReactNode;
  }

  export interface ClipPathProps {
    id?: string;
    children?: React.ReactNode;
  }

  export interface TitleProps {
    id?: string;
    children?: React.ReactNode;
  }

  export interface TextProps extends ViewProps {
    x?: number | string;
    y?: number | string;
    dx?: number | string;
    dy?: number | string;
    rotate?: number | string;
    textAnchor?: 'start' | 'middle' | 'end';
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    children?: React.ReactNode;
  }

  export interface CircleProps extends ViewProps {
    cx?: number | string;
    cy?: number | string;
    r?: number | string;
    fill?: string;
    stroke?: string;
  }

  export interface RectProps extends ViewProps {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    rx?: number | string;
    ry?: number | string;
    fill?: string;
    stroke?: string;
  }

  export interface LineProps extends ViewProps {
    x1?: number | string;
    y1?: number | string;
    x2?: number | string;
    y2?: number | string;
    stroke?: string;
    strokeWidth?: number | string;
  }

  // Define components as React.ComponentType which can be used directly in JSX
  export const Svg: React.ComponentType<SvgProps>;
  export const Path: React.ComponentType<PathProps>;
  export const G: React.ComponentType<GProps>;
  export const Defs: React.ComponentType<DefsProps>;
  export const ClipPath: React.ComponentType<ClipPathProps>;
  export const Title: React.ComponentType<TitleProps>;
  export const Text: React.ComponentType<TextProps>;
  export const Circle: React.ComponentType<CircleProps>;
  export const Rect: React.ComponentType<RectProps>;
  export const Line: React.ComponentType<LineProps>;

  // Default export
  export default Svg;
}
