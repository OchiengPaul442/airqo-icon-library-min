import * as React from 'react';

declare module 'react-native-svg' {
  import { ViewProps } from 'react-native';

  export interface SvgProps extends ViewProps {
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: string;
    title?: string;
  }

  export interface PathProps extends ViewProps {
    d?: string;
    fill?: string;
    fillRule?: 'nonzero' | 'evenodd';
    stroke?: string;
    strokeWidth?: number | string;
    strokeLinecap?: 'butt' | 'round' | 'square';
    strokeLinejoin?: 'miter' | 'round' | 'bevel';
  }

  export interface GProps extends ViewProps {
    fill?: string;
    stroke?: string;
  }

  export interface DefsProps {
    children?: React.ReactNode;
  }

  export interface ClipPathProps {
    id?: string;
    children?: React.ReactNode;
  }

  // Define components as React.ComponentType which can be used directly in JSX
  export const Svg: React.ComponentType<SvgProps>;
  export const Path: React.ComponentType<PathProps>;
  export const G: React.ComponentType<GProps>;
  export const Defs: React.ComponentType<DefsProps>;
  export const ClipPath: React.ComponentType<ClipPathProps>;

  // Default export
  export default Svg;
}
