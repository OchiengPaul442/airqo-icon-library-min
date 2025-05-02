declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '@airqo-icons/react/icons/*' {
  const component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default component;
}
