import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AirqoIconsVue',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', '@airqo-icons/core'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@airqo-icons/core': 'AirqoIconsCore',
        },
      },
    },
    minify: false,
  },
});
