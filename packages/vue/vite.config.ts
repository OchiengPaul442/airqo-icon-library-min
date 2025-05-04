import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AirqoIconsVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@airqo-icons/core'],
      output: {
        globals: {
          vue: 'Vue',
          '@airqo-icons/core': 'AirqoIconsCore',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@airqo-icons/core': path.resolve(__dirname, '../core/src'),
    },
  },
});
