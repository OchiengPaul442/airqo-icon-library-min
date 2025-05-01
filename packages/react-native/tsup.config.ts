import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  tsconfig: 'tsconfig.json',
  dts: true,
  external: ['react', 'react-native', 'react-native-svg'],
  clean: true,
  treeshake: {
    moduleSideEffects: false,
    preset: 'smallest',
  },
  splitting: true,
  sourcemap: true,
  minify: true,
});
