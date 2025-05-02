#!/usr/bin/env node
/**
 * generate-icons.js
 *
 * Automates SVG optimization, component generation, asset copying, and manifest/index creation.
 */
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const { transform: svgrTransform } = require('@svgr/core');

// --- Configuration ---

// Paths
const ROOT_DIR = path.resolve(__dirname, '..');
const SVGS_DIR = path.join(ROOT_DIR, 'svgs');
const REACT_PKG_DIR = path.join(ROOT_DIR, 'packages/react/src');
const RN_PKG_DIR = path.join(ROOT_DIR, 'packages/react-native/src');
const FLUTTER_PKG_DIR = path.join(ROOT_DIR, 'packages/flutter');
const VUE_PKG_DIR = path.join(ROOT_DIR, 'packages/vue/src');
const CORE_PKG_DIR = path.join(ROOT_DIR, 'packages/core/src');

const REACT_OUT_DIR = path.join(REACT_PKG_DIR, 'icons');
const RN_OUT_DIR = path.join(RN_PKG_DIR, 'icons');
const FLUTTER_ASSETS_DIR = path.join(FLUTTER_PKG_DIR, 'assets');
const VUE_ICONS_DIR = path.join(VUE_PKG_DIR, 'icons');
const MANIFEST_FILE = path.join(CORE_PKG_DIR, 'icon-manifest.ts');
const REACT_INDEX_FILE = path.join(REACT_PKG_DIR, 'index.ts');
const RN_INDEX_FILE = path.join(RN_PKG_DIR, 'index.ts');

// --- SVGO Configuration ---
// FIX: Use a properly formatted SVGO config that doesn't have cleanupIDs plugin
const svgoConfig = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
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
        attrs: ['data-name', 'class', 'xmlns'],
      },
    },
    {
      name: 'sortAttrs',
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ role: 'img' }],
      },
    },
  ],
};

// SVGR configuration with the fixed SVGO config
const getSvgrConfig = (isNative, componentName) => ({
  plugins: ['@svgr/plugin-jsx'], // FIX: Remove '@svgr/plugin-svgo' to handle SVGO separately
  typescript: true,
  native: isNative,
  icon: !isNative,
  ref: !isNative,
  titleProp: true,
  svgProps: {
    fill: 'currentColor',
    ...(!isNative && { role: 'img' }),
  },
  // FIX: Don't pass svgoConfig to SVGR as we'll handle optimization separately
  state: { componentName },
});

// --- Helper Functions ---

/**
 * Cleans up and recreates a directory.
 */
function cleanupDirectory(dir) {
  console.log(`🧹 Cleaning directory: ${dir}`);
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

/**
 * Optimizes SVG content using SVGO directly.
 */
async function optimizeSvg(svgContent, iconName) {
  try {
    if (
      !svgContent ||
      typeof svgContent !== 'string' ||
      !svgContent.includes('<svg')
    ) {
      console.warn(
        `⚠️ Invalid SVG content for ${iconName}. Skipping optimization.`,
      );
      return svgContent;
    }

    const result = optimize(svgContent, svgoConfig);

    if (result.error) {
      throw new Error(result.error);
    }
    if (!result.data || !result.data.includes('<svg')) {
      console.warn(
        `⚠️ SVGO produced invalid output for ${iconName}. Using original.`,
      );
      return svgContent;
    }
    return result.data;
  } catch (error) {
    console.error(`❌ Error optimizing SVG for ${iconName}:`, error.message);
    return svgContent;
  }
}

/**
 * Converts a string to PascalCase.
 */
function pascalCase(input) {
  return input
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/ (.)/g, (m, w) => w.toUpperCase())
    .replace(/^(.)/, (m, w) => w.toUpperCase())
    .replace(/\s+/g, '');
}

/**
 * Ensures directory exists and writes file content.
 */
function ensureWrite(filePath, content) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.error(`❌ Failed to write file: ${filePath}`, error);
    throw error;
  }
}

/**
 * Generates a React or React Native component from SVG content using SVGR.
 */
async function generateComponent(svgContent, componentName, isNative) {
  try {
    if (!svgContent || !svgContent.trim().startsWith('<svg')) {
      throw new Error(`Invalid SVG structure provided for ${componentName}`);
    }

    // FIX: Use our improved SVGR config
    const svgrConfig = getSvgrConfig(isNative, componentName);

    const transformPromise = svgrTransform(svgContent, svgrConfig, {
      componentName,
    });

    const result = await Promise.race([
      transformPromise,
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error(`SVGR transform timed out for ${componentName} (10s)`),
            ),
          10000,
        ),
      ),
    ]);

    if (
      !result ||
      typeof result !== 'string' ||
      result.length < 50 ||
      !result.includes(componentName)
    ) {
      throw new Error(
        `SVGR generated empty or invalid output for ${componentName}`,
      );
    }

    return result;
  } catch (error) {
    console.error(
      `❌ Error in SVGR transformation for ${componentName} (${
        isNative ? 'Native' : 'Web'
      }):`,
      error.message,
    );
    throw error;
  }
}

/**
 * Generates a basic fallback component string.
 */
function generateFallbackComponent(componentName, isNative) {
  console.warn(
    `⚠️ Generating fallback component for ${componentName} (${
      isNative ? 'Native' : 'Web'
    })`,
  );
  const propsType = isNative ? 'SvgProps' : 'React.SVGProps<SVGSVGElement>';
  const SvgComponent = isNative ? 'Svg' : 'svg';
  const PathComponent = isNative ? 'Path' : 'path';

  const importStatement = isNative
    ? `import * as React from 'react';\nimport Svg, { SvgProps, Path } from 'react-native-svg';`
    : `import * as React from 'react';`;

  return `
${importStatement}

// Fallback component due to generation error for ${componentName}
const ${componentName} = (props: ${propsType}) => {
  console.warn('Rendering fallback icon component: ${componentName}');
  return (
    <${SvgComponent} width={props.width ?? 24} height={props.height ?? 24} viewBox="0 0 24 24" fill="currentColor" {...props}>
      {/* Error/Warning Icon Path */}
      <${PathComponent} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </${SvgComponent}>
  );
};

${componentName}.displayName = '${componentName}Fallback';
export default ${componentName};`;
}

/**
 * Process a single SVG file
 */
async function processSvgFile(
  categoryDir,
  category,
  file,
  processedSvgs,
  manifest,
  reactExports,
  rnExports,
  allErrors,
) {
  const baseName = path.basename(file, '.svg');
  const svgKey = `${category}-${baseName}`;

  // Skip duplicates
  if (processedSvgs.has(svgKey)) {
    console.log(`    ⏩ Skipping duplicate key: ${svgKey}`);
    return;
  }

  const rawSvgPath = path.join(categoryDir, file);
  const componentName = pascalCase(svgKey);

  try {
    // Read Raw SVG
    const rawSvg = fs.readFileSync(rawSvgPath, 'utf8');
    if (!rawSvg) throw new Error(`File is empty.`);

    // Optimize SVG - FIX: Use our improved optimization function
    const optimizedSvg = await optimizeSvg(rawSvg, componentName);

    // --- Generate React Component ---
    let reactComponentCode;
    try {
      reactComponentCode = await generateComponent(
        optimizedSvg,
        componentName,
        false,
      );
    } catch (reactGenError) {
      allErrors.push(
        `React component generation for ${componentName}: ${reactGenError.message}`,
      );
      reactComponentCode = generateFallbackComponent(componentName, false);
    }
    const reactFilePath = path.join(
      REACT_OUT_DIR,
      category,
      `${componentName}.tsx`,
    );
    ensureWrite(reactFilePath, reactComponentCode);
    reactExports.push(
      `export { default as ${componentName} } from './icons/${category}/${componentName}';`,
    );

    // --- Generate React Native Component ---
    let rnComponentCode;
    try {
      rnComponentCode = await generateComponent(
        optimizedSvg,
        componentName,
        true,
      );
    } catch (rnGenError) {
      allErrors.push(
        `React Native component generation for ${componentName}: ${rnGenError.message}`,
      );
      rnComponentCode = generateFallbackComponent(componentName, true);
    }
    const rnFilePath = path.join(RN_OUT_DIR, category, `${componentName}.tsx`);
    ensureWrite(rnFilePath, rnComponentCode);
    rnExports.push(
      `export { default as ${componentName} } from './icons/${category}/${componentName}';`,
    );

    // --- Copy Optimized SVG Assets ---
    const assetDestinations = [
      path.join(FLUTTER_ASSETS_DIR, category, file),
      path.join(VUE_ICONS_DIR, category, file),
    ];
    for (const destPath of assetDestinations) {
      ensureWrite(destPath, optimizedSvg);
    }

    // Add to manifest and mark svgKey as processed
    manifest.push({ name: componentName, category });
    processedSvgs.add(svgKey);
    process.stdout.write(
      `    ✅ Processed: ${componentName} (${category})          \r`,
    );

    return true;
  } catch (error) {
    console.error(`\n❌ Failed processing ${category}/${file}:`, error.message);
    allErrors.push(`Processing ${category}/${file}: ${error.message}`);

    // Generate fallbacks for failures
    const fallbackComponentName = pascalCase(svgKey);
    try {
      const reactFallback = generateFallbackComponent(
        fallbackComponentName,
        false,
      );
      ensureWrite(
        path.join(REACT_OUT_DIR, category, `${fallbackComponentName}.tsx`),
        reactFallback,
      );
      reactExports.push(
        `export { default as ${fallbackComponentName} } from './icons/${category}/${fallbackComponentName}';`,
      );
    } catch (fbError) {
      /* ignore fallback write error */
    }
    try {
      const rnFallback = generateFallbackComponent(fallbackComponentName, true);
      ensureWrite(
        path.join(RN_OUT_DIR, category, `${fallbackComponentName}.tsx`),
        rnFallback,
      );
      rnExports.push(
        `export { default as ${fallbackComponentName} } from './icons/${category}/${fallbackComponentName}';`,
      );
    } catch (fbError) {
      /* ignore fallback write error */
    }

    return false;
  }
}

/**
 * Main execution function with proper error handling
 */
async function main() {
  console.log('🚀 Starting icon generation process...');
  const startTime = Date.now();

  const allErrors = [];
  const manifest = [];
  const reactExports = [];
  const rnExports = [];
  const processedSvgs = new Set();
  let totalProcessed = 0;

  try {
    // 1. Check Source Directory
    if (!fs.existsSync(SVGS_DIR) || !fs.lstatSync(SVGS_DIR).isDirectory()) {
      throw new Error(
        `❌ Source SVGs directory not found or is not a directory: ${SVGS_DIR}`,
      );
    }

    // 2. Clean Output Directories
    cleanupDirectory(REACT_OUT_DIR);
    cleanupDirectory(RN_OUT_DIR);
    cleanupDirectory(FLUTTER_ASSETS_DIR);
    cleanupDirectory(VUE_ICONS_DIR);

    // 3. Read Categories and Process SVGs
    const categories = fs
      .readdirSync(SVGS_DIR, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    console.log(`🔍 Found ${categories.length} icon categories.`);

    // Process each category
    for (const category of categories) {
      const categoryDir = path.join(SVGS_DIR, category);
      let categoryFiles;

      try {
        categoryFiles = fs
          .readdirSync(categoryDir)
          .filter((f) => f.toLowerCase().endsWith('.svg'));
      } catch (readErr) {
        console.warn(
          `⚠️ Could not read directory: ${categoryDir}. Skipping. Error: ${readErr.message}`,
        );
        continue;
      }

      console.log(
        `\nProcessing category: ${category} (${categoryFiles.length} SVGs)`,
      );

      // Process files sequentially to avoid overwhelming system resources
      let categorySuccessCount = 0;
      for (const file of categoryFiles) {
        const success = await processSvgFile(
          categoryDir,
          category,
          file,
          processedSvgs,
          manifest,
          reactExports,
          rnExports,
          allErrors,
        );
        if (success) categorySuccessCount++;
      }

      totalProcessed += categorySuccessCount;
      console.log(
        `    🏁 Finished category: ${category} - ${categorySuccessCount}/${categoryFiles.length} successful`,
      );
    }

    // 4. Write Manifest
    console.log('\n✍️ Writing icon manifest...');
    const manifestTs = `// Auto-generated by generate-icons.js script @ ${new Date().toISOString()}
export interface IconMeta {
  name: string; // PascalCase component name
  category: string; // Original category folder name
}

export const icons: ReadonlyArray<IconMeta> = ${JSON.stringify(
      manifest.sort((a, b) => a.name.localeCompare(b.name)),
      null,
      2,
    )} as const;
`;
    ensureWrite(MANIFEST_FILE, manifestTs);
    console.log('    ✅ Manifest written successfully.');

    // 5. Write Barrel Index Files
    console.log('✍️ Writing barrel index files...');
    // Filter unique exports before joining
    const uniqueReactExports = [...new Set(reactExports)];
    const uniqueRnExports = [...new Set(rnExports)];

    const reactIndexContent = `// Auto-generated by generate-icons.js script @ ${new Date().toISOString()}\n${uniqueReactExports
      .sort()
      .join('\n')}\n`;
    ensureWrite(REACT_INDEX_FILE, reactIndexContent);
    console.log('    ✅ React index written successfully.');

    const rnIndexContent = `// Auto-generated by generate-icons.js script @ ${new Date().toISOString()}\n${uniqueRnExports
      .sort()
      .join('\n')}\n`;
    ensureWrite(RN_INDEX_FILE, rnIndexContent);
    console.log('    ✅ React Native index written successfully.');

    // 6. Final Report
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n--- Generation Summary ---');
    console.log(`⏱️ Total time: ${duration} seconds`);
    console.log(`✔️ Icons processed attempted: ${processedSvgs.size}`);
    console.log(`📦 Manifest entries created: ${manifest.length}`);
    console.log(
      `⚛️ React components generated (incl. fallbacks): ${uniqueReactExports.length}`,
    );
    console.log(
      `📱 React Native components generated (incl. fallbacks): ${uniqueRnExports.length}`,
    );

    if (allErrors.length > 0) {
      console.warn(
        `\n⚠️ Generation completed with ${allErrors.length} errors:`,
      );
      // Only show first 10 unique errors to avoid overwhelming the console
      const uniqueErrors = [...new Set(allErrors)];
      uniqueErrors
        .slice(0, 10)
        .forEach((err, index) =>
          console.warn(`   ${index + 1}. ${err.split('\n')[0]}`),
        );
      if (uniqueErrors.length > 10) {
        console.warn(`   ... and ${uniqueErrors.length - 10} more errors`);
      }
      console.warn(
        '\nCheck the logs above for details. Some components were replaced with fallbacks.',
      );
      process.exitCode = 1; // Indicate failure
    } else {
      console.log('\n🎉 Icon generation completed successfully!');
    }
  } catch (error) {
    console.error('\n❌ Fatal error during icon generation process:', error);
    process.exit(1); // Exit with error code
  }
}

// Run the main function
main().catch((error) => {
  console.error('\n❌ Unhandled error during script execution:', error);
  process.exit(1);
});
