import { ComponentClass, Component } from 'react';

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

  export class Svg extends Component<SvgProps> {}
  export class Path extends Component<PathProps> {}
  export class G extends Component<GProps> {}
  export class Defs extends Component<DefsProps> {}
  export class ClipPath extends Component<ClipPathProps> {}
}
