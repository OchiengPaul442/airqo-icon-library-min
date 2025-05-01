#!/usr/bin/env node
/**
 * generate-icons.js
 *
 * Automates SVG optimization, component generation, asset copying, and manifest/index creation.
 */
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const svgr = require('@svgr/core').transform;

// Paths
const SVGS_DIR = path.resolve(__dirname, '../svgs');
const REACT_OUT = path.resolve(__dirname, '../packages/react/src/icons');
const RN_OUT = path.resolve(__dirname, '../packages/react-native/src/icons');
const FLUTTER_ASSETS = path.resolve(__dirname, '../packages/flutter/assets');
const VUE_ICONS = path.resolve(__dirname, '../packages/vue/src/icons');
const MANIFEST_FILE = path.resolve(
  __dirname,
  '../packages/core/src/icon-manifest.ts',
);
const REACT_INDEX = path.resolve(__dirname, '../packages/react/src/index.ts');
const RN_INDEX = path.resolve(
  __dirname,
  '../packages/react-native/src/index.ts',
);

// Optimize SVG content
async function optimizeSvg(svgContent) {
  return optimize(svgContent, {
    multipass: true,
    plugins: [
      'preset-default',
      { name: 'removeDimensions' },
      { name: 'removeAttrs', params: { attrs: '(data-name|xmlns)' } },
      { name: 'convertStyleToAttrs' },
    ],
  }).data;
}

// PascalCase converter
function pascalCase(input) {
  return input
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

// Ensure directory and write file
function ensureWrite(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

(async () => {
  const manifest = [];
  const reactExports = [];
  const rnExports = [];

  // Read categories
  const categories = fs
    .readdirSync(SVGS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const category of categories) {
    const categoryDir = path.join(SVGS_DIR, category);
    const svgFiles = fs
      .readdirSync(categoryDir)
      .filter((f) => f.endsWith('.svg'));

    for (const file of svgFiles) {
      const rawPath = path.join(categoryDir, file);
      const baseName = path.basename(file, '.svg');
      const compName = pascalCase(`${category}-${baseName}`);
      const rawSvg = fs.readFileSync(rawPath, 'utf8');
      const optimized = await optimizeSvg(rawSvg);

      // React
      const reactTsx = await svgr(
        optimized,
        {
          icon: true,
          typescript: true,
          expandProps: 'end',
          jsxRuntime: 'automatic',
          prettier: true,
          memo: true,
          exportType: 'named',
          namedExport: compName,
        },
        { componentName: compName },
      );
      ensureWrite(path.join(REACT_OUT, category, `${compName}.tsx`), reactTsx);
      reactExports.push(
        `export { ${compName} } from './icons/${category}/${compName}';`,
      );

      // React Native
      const rnTsx = await svgr(
        optimized,
        {
          native: true,
          typescript: true,
          expandProps: 'end',
          prettier: true,
          memo: true,
          exportType: 'named',
          namedExport: compName,
        },
        { componentName: compName },
      );
      ensureWrite(path.join(RN_OUT, category, `${compName}.tsx`), rnTsx);
      rnExports.push(
        `export { ${compName} } from './icons/${category}/${compName}';`,
      );

      // Copy SVG assets
      const frameworks = [FLUTTER_ASSETS, VUE_ICONS];
      for (const base of frameworks) {
        const destDir = path.join(base, category);
        ensureWrite(path.join(destDir, file), fs.readFileSync(rawPath));
      }

      manifest.push({ name: compName, category });
      console.log(`Processed ${compName}`);
    }
  }

  // Write manifest
  const manifestTs = `export interface IconMeta { name: string; category: string; }\n\nexport const icons: IconMeta[] = ${JSON.stringify(
    manifest,
    null,
    2,
  )};\n`;
  ensureWrite(MANIFEST_FILE, manifestTs);
  console.log('Manifest written');

  // Write React index
  const reactIndex = `// Auto-generated\n${reactExports.join('\n')}\n`;
  ensureWrite(REACT_INDEX, reactIndex);
  console.log('React barrel index written');

  // Write React Native index
  const rnIndex = `// Auto-generated\n${rnExports.join('\n')}\n`;
  ensureWrite(RN_INDEX, rnIndex);
  console.log('React Native barrel index written');
})();
