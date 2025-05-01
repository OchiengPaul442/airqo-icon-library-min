import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), {
    name: 'svg-transform',
    enforce: 'pre',
    transform(src, id) {
      if (id.endsWith('.svg')) {
        return require('vue-svg-loader').call(this, src, id);
      }
    }
  }],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      name: 'AirqoIcons'
    },
    rollupOptions: {
      external: ['vue', '@airqo-icons/core']
    }
  }
});