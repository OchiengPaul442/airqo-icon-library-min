declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '@airqo-icons/react-native/icons/*' {
  import { SvgProps } from 'react-native-svg';
  const component: React.ComponentType<SvgProps>;
  export default component;
}
