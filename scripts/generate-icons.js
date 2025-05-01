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

// Cleanup function
function cleanupDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// Enhanced SVG optimization
async function optimizeSvg(svgContent) {
  try {
    const result = optimize(svgContent, {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: 'removeDimensions',
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: '(data-name|xmlns)',
          },
        },
        {
          name: 'removeEmptyAttrs',
        },
        {
          name: 'removeUselessDefs',
        },
        {
          name: 'mergePaths',
        },
        {
          name: 'collapseGroups',
        },
      ],
    });
    return result.data;
  } catch (error) {
    console.error('Error optimizing SVG:', error);
    // Return original content if optimization fails
    return svgContent;
  }
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

// Process component templates
async function generateComponent(svg, options, componentName) {
  try {
    const cleanedSvg = svg
      .replace(/<!--.*?-->/g, '')
      .replace(/\s+/g, ' ')
      .replace(/xmlns:xlink/g, 'xmlnsXlink')
      .replace(/xlink:href/g, 'xlinkHref')
      .trim();

    if (!cleanedSvg.startsWith('<svg') || !cleanedSvg.endsWith('</svg>')) {
      throw new Error(`Invalid SVG format for ${componentName}`);
    }

    const template = (variables) => {
      const { imports, interfaces, componentName, props, jsx } = variables;
      return `${imports}
${interfaces}

const ${componentName} = (${props}) => ${jsx};

${componentName}.displayName = '${componentName}';
export default ${componentName};`;
    };

    const svgrConfig = {
      ...options,
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      typescript: true,
      template,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          'removeDimensions',
          {
            name: 'removeAttrs',
            params: {
              attrs: ['class', 'data-name', 'fill', 'stroke'],
            },
          },
          'cleanupIds',
          'removeUselessDefs',
          'removeUnknownsAndDefaults',
          'removeNonInheritableGroupAttrs',
          'collapseGroups',
          'mergePaths',
        ],
      },
      svgProps: {
        width: '24',
        height: '24',
        fill: 'currentColor',
      },
      prettier: {
        parser: 'typescript',
        singleQuote: true,
        trailingComma: 'all',
      },
    };

    // Add stricter SVG validation and cleanup
    const cleanedSvg = cleanedSvg
      .replace(/<!--.*?-->/gs, '') // Remove comments
      .replace(/>\s+</g, '><')     // Remove whitespace between tags
      .replace(/\s{2,}/g, ' ')     // Normalize spaces
      .replace(/[\n\r\t]/g, '')    // Remove newlines and tabs
      .replace(/xmlns:xlink/g, 'xmlnsXlink')
      .replace(/xlink:href/g, 'xlinkHref')
      .trim();

    // Validate SVG structure
    if (!cleanedSvg.match(/<svg[^>]*>.*<\/svg>/s)) {
      throw new Error(`Invalid SVG structure for ${componentName}`);
    }

    try {
      const result = await svgr(cleanedSvg, svgrConfig, { componentName });
      return result;
    } catch (error) {
      console.error(`Error generating component for ${componentName}:`, error);
      // Return a fallback component that displays an error indicator
      return `import * as React from 'react';

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => {
  console.warn('Error loading icon component: ${componentName}');
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
  );
};

${componentName}.displayName = '${componentName}';
export default ${componentName};`;
    }
  } catch (error) {
    console.error(`Error generating component for ${componentName}:`, error);
    return `import * as React from 'react';

const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => {
  console.warn('Error loading icon component: ${componentName}');
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
  );
};

${componentName}.displayName = '${componentName}';
export default ${componentName};`;
  }
}

(async () => {
  try {
    // Clean up existing generated files
    cleanupDirectory(REACT_OUT);
    cleanupDirectory(RN_OUT);
    cleanupDirectory(FLUTTER_ASSETS);
    cleanupDirectory(VUE_ICONS);

    const manifest = [];
    const reactExports = [];
    const rnExports = [];
    const processedSvgs = new Set(); // Track processed SVGs to avoid duplicates

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
        try {
          const rawPath = path.join(categoryDir, file);
          const baseName = path.basename(file, '.svg');
          const svgKey = `${category}-${baseName}`;

          // Skip if we've already processed this SVG
          if (processedSvgs.has(svgKey)) {
            console.log(`Skipping duplicate: ${svgKey}`);
            continue;
          }
          processedSvgs.add(svgKey);

          const compName = pascalCase(svgKey);
          const rawSvg = fs.readFileSync(rawPath, 'utf8');
          const optimized = await optimizeSvg(rawSvg);

          // Generate React component
          const reactTsx = await generateComponent(
            optimized,
            { icon: true },
            compName,
          );
          ensureWrite(
            path.join(REACT_OUT, category, `${compName}.tsx`),
            reactTsx,
          );
          reactExports.push(
            `export { default as ${compName} } from './icons/${category}/${compName}';`,
          );

          // Generate React Native component
          const rnTsx = await generateComponent(
            optimized,
            { native: true },
            compName,
          );
          ensureWrite(path.join(RN_OUT, category, `${compName}.tsx`), rnTsx);
          rnExports.push(
            `export { default as ${compName} } from './icons/${category}/${compName}';`,
          );

          // Copy optimized SVG assets
          const frameworks = [FLUTTER_ASSETS, VUE_ICONS];
          for (const base of frameworks) {
            const destDir = path.join(base, category);
            fs.mkdirSync(destDir, { recursive: true });
            ensureWrite(path.join(destDir, file), optimized);
          }

          manifest.push({ name: compName, category });
          console.log(`Processed ${compName}`);
        } catch (error) {
          console.error(`Error processing ${file} in ${category}:`, error);
        }
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
    const reactIndex = `// Auto-generated, do not edit\n${reactExports.join(
      '\n',
    )}\n`;
    ensureWrite(REACT_INDEX, reactIndex);
    console.log('React barrel index written');

    // Write React Native index
    const rnIndex = `// Auto-generated, do not edit\n${rnExports.join('\n')}\n`;
    ensureWrite(RN_INDEX, rnIndex);
    console.log('React Native barrel index written');

    console.log('Icon generation completed successfully!');
  } catch (error) {
    console.error('Fatal error during icon generation:', error);
    process.exit(1);
  }
})();
