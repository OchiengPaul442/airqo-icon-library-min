const esbuild = require('esbuild');
const { execSync } = require('child_process');

async function build() {
  // Clean dist directory
  execSync('rimraf dist', { stdio: 'inherit' });

  // Build CJS and ESM bundles
  await Promise.all([
    esbuild.build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/index.js',
      format: 'cjs',
      bundle: true,
      platform: 'node',
      external: ['react'],
      sourcemap: true,
      loader: { '.svg': 'text' },
    }),
    esbuild.build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/index.esm.js',
      format: 'esm',
      bundle: true,
      platform: 'neutral',
      external: ['react'],
      sourcemap: true,
      loader: { '.svg': 'text' },
    }),
  ]);

  // Generate type declarations
  execSync('tsc --declaration --emitDeclarationOnly --outDir dist', {
    stdio: 'inherit',
  });
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
