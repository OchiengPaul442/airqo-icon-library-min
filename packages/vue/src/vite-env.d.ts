/// <reference types="vite/client" />

interface ImportMetaGlob {
  [key: string]: () => Promise<unknown>;
}

interface ImportMeta {
  readonly glob: (
    pattern: string,
    options?: { eager?: boolean },
  ) => Record<string, unknown>;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, never>,
    Record<string, never>,
    unknown
  >;
  export default component;
}
