#!/usr/bin/env node
/**
 * generate-icons.js
 *
 * - Optimizes raw SVGs in svgs/
 * - Generates React and React Native components via SVGR
 * - Writes SVG assets to Flutter, Angular, and Vue packages
 * - Builds barrel index files for React and React Native
 * - Emits icon manifest in core package
 */
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const svgr = require('@svgr/core').transform;

// Directories
const SVGS_DIR = path.resolve(__dirname, '../svgs');
// React components output
const REACT_OUT = path.resolve(__dirname, '../packages/react/src/icons');
// React-Native components output
const RN_OUT = path.resolve(__dirname, '../packages/react-native/src/icons');
// Flutter assets base
const FLUTTER_ASSETS = path.resolve(__dirname, '../packages/flutter/assets');
// Angular assets base
const ANGULAR_ASSETS = path.resolve(__dirname, '../packages/angular/src/assets/icons');
// Vue icons dir
const VUE_ICONS = path.resolve(__dirname, '../packages/vue/src/icons');
// Core manifest
const MANIFEST_FILE = path.resolve(__dirname, '../packages/core/src/icon-manifest.ts');
// Barrel indices
const REACT_INDEX = path.resolve(__dirname, '../packages/react/src/index.ts');
const RN_INDEX = path.resolve(__dirname, '../packages/react-native/src/index.ts');

// SVGO configuration
async function optimizeSvg(svg) {
  const result = optimize(svg, {
    multipass: true,
    plugins: [
      'preset-default',
      { name: 'removeDimensions' },
      { name: 'removeAttrs', params: { attrs: '(data-name|xmlns)' } },
      { name: 'convertStyleToAttrs' }
    ]
  });
  return result.data;
}

// Convert "category-name" to "CategoryName"
function pascalCase(str) {
  return str
    .split(/[-_ ]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

async function generate() {
  const manifest = [];
  const reactExports = [];
  const rnExports = [];

  const categories = fs.readdirSync(SVGS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const category of categories) {
    const svgFiles = fs.readdirSync(path.join(SVGS_DIR, category))
      .filter(f => f.endsWith('.svg'));

    for (const file of svgFiles) {
      const rawPath = path.join(SVGS_DIR, category, file);
      const nameBase = path.basename(file, '.svg');
      const compName = pascalCase(`${category}-${nameBase}`);
      const svgContent = fs.readFileSync(rawPath, 'utf8');
      const optimizedSvg = await optimizeSvg(svgContent);

      // React component
      const reactTsx = await svgr(
        optimizedSvg,
        { icon: true, typescript: true, expandProps: 'end', jsxRuntime: 'automatic', prettier: true, memo: true },
        { componentName: compName }
      );
      const reactCatDir = path.join(REACT_OUT, category);
      fs.mkdirSync(reactCatDir, { recursive: true });
      fs.writeFileSync(path.join(reactCatDir, `${compName}.tsx`), reactTsx, 'utf8');
      reactExports.push(`export { default as ${compName} } from './icons/${category}/${compName}';`);

      // React Native component
      const rnTsx = await svgr(
        optimizedSvg,
        { native: true, typescript: true, expandProps: 'end', prettier: true, memo: true },
        { componentName: compName }
      );
      const rnCatDir = path.join(RN_OUT, category);
      fs.mkdirSync(rnCatDir, { recursive: true });
      fs.writeFileSync(path.join(rnCatDir, `${compName}.tsx`), rnTsx, 'utf8');
      rnExports.push(`export { default as ${compName} } from './icons/${category}/${compName}';`);

      // Copy SVG to Flutter
      const flDir = path.join(FLUTTER_ASSETS, category);
      fs.mkdirSync(flDir, { recursive: true });
      fs.copyFileSync(rawPath, path.join(flDir, file));

      // Copy to Angular
      const ngDir = path.join(ANGULAR_ASSETS, category);
      fs.mkdirSync(ngDir, { recursive: true });
      fs.copyFileSync(rawPath, path.join(ngDir, file));

      // Copy to Vue
      const vueDir = path.join(VUE_ICONS, category);
      fs.mkdirSync(vueDir, { recursive: true });
      fs.copyFileSync(rawPath, path.join(vueDir, file));

      // Add to manifest
      manifest.push({ name: compName, category });
      console.log(`Processed ${compName}`);
    }
  }

  // Write manifest
  const manifestTs = `export interface IconMeta { name: string; category: string; }
export const icons: IconMeta[] = ${JSON.stringify(manifest, null, 2)};
`;
  fs.mkdirSync(path.dirname(MANIFEST_FILE), { recursive: true });
  fs.writeFileSync(MANIFEST_FILE, manifestTs, 'utf8');
  console.log('Manifest written');

  // Write React index
  const reactIndexContent = `// Auto-generated
${reactExports.join('
')}
`;
  fs.writeFileSync(REACT_INDEX, reactIndexContent, 'utf8');
  console.log('React barrel index written');

  // Write RN index
  const rnIndexContent = `// Auto-generated
${rnExports.join('
')}
`;
  fs.writeFileSync(RN_INDEX, rnIndexContent, 'utf8');
  console.log('React Native barrel index written');
}

generate().catch(err => { console.error(err); process.exit(1); });
```.js
```js
#!/usr/bin/env node
/**
 * optimize-svgs.js
 *
 * Recursively walks the svgs/ directory and runs SVGO on each SVG file in-place.
 */
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// Root of raw SVGs
const SVGS_DIR = path.resolve(__dirname, '../svgs');

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile() && fullPath.endsWith('.svg')) {
      callback(fullPath);
    }
  }
}

function optimizeFile(filePath) {
  const svg = fs.readFileSync(filePath, 'utf8');
  const result = optimize(svg, {
    multipass: true,
    plugins: [
      'preset-default',
      { name: 'removeComments' },
      { name: 'removeMetadata' },
      { name: 'removeTitle' },
      { name: 'removeDesc' },
      { name: 'removeDimensions' }
    ]
  });
  fs.writeFileSync(filePath, result.data, 'utf8');
  console.log(`Optimized ${filePath}`);
}

// Run optimization
walkDir(SVGS_DIR, optimizeFile);
```js
#!/usr/bin/env node
// Script to optimize raw SVGs in ./svgs/ using SVGO
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

function optimizeSvgs(dir) {
  // TODO: recursively optimize each .svg file in `dir`
}

optimizeSvgs(path.join(__dirname, '../svgs'));