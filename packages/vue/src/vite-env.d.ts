/// <reference types="vite/client" />

interface ImportMetaGlob {
  [key: string]: () => Promise<any>;
}

interface ImportMeta {
  readonly glob: (
    pattern: string,
    options?: { eager?: boolean },
  ) => Record<string, any>;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
