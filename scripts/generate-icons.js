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
          removeViewBox: false, // Maintain viewBox for proper scaling
        },
      },
    },
    'removeDimensions', // Remove width/height to make icons resizable
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name', 'class', 'xmlns'], // Remove unnecessary attributes
      },
    },
    {
      name: 'sortAttrs', // Sort attributes for consistent output
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ role: 'img' }], // Add role for accessibility
      },
    },
  ],
};

// SVGR configuration
const getSvgrConfig = (isNative, componentName) => ({
  plugins: ['@svgr/plugin-jsx'],
  typescript: true,
  native: isNative,
  icon: !isNative,
  ref: !isNative,
  titleProp: true,
  svgProps: isNative
    ? { width: '24', height: '24' } // Default size for React Native
    : { role: 'img' }, // Default props for React
});

// --- Helper Functions ---

/**
 * Recursively create a directory if it doesn't exist
 */
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Recursively delete a directory and recreate it
 */
function cleanupDirectory(dir) {
  ensureDirectoryExists(path.dirname(dir));

  if (fs.existsSync(dir)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch (error) {
      console.warn(`⚠️ Could not remove ${dir}: ${error.message}`);
    }
  }

  ensureDirectoryExists(dir);
  console.log(`🧹 Cleaned directory: ${dir}`);
}

/**
 * Optimizes SVG content using SVGO directly.
 * @param {string} svgContent - The raw SVG content
 * @param {string} iconName - Name of the icon for logging
 * @returns {Promise<string>} Optimized SVG content
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
 * @param {string} input - Input string to convert
 * @returns {string} PascalCase string
 */
function pascalCase(input) {
  return input
    .toLowerCase()
    .replace(/[-_]+/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/[^\w\s]/g, '') // Remove non-word characters
    .replace(/ (.)/g, (m, w) => w.toUpperCase()) // Capitalize first letter of each word
    .replace(/^(.)/, (m, w) => w.toUpperCase()) // Capitalize first letter of string
    .replace(/\s+/g, ''); // Remove spaces
}

/**
 * Ensures directory exists and writes file content.
 * @param {string} filePath - Path to write file to
 * @param {string} content - Content to write
 * @returns {boolean} Whether write was successful
 */
function ensureWrite(filePath, content) {
  try {
    ensureDirectoryExists(path.dirname(filePath));
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Failed to write file: ${filePath}`, error);
    return false;
  }
}

/**
 * Generates a React or React Native component from SVG content using SVGR.
 * @param {string} svgContent - Optimized SVG content
 * @param {string} componentName - PascalCase component name
 * @param {boolean} isNative - Whether to generate a React Native component
 * @returns {Promise<string>} Component code
 */
async function generateComponent(svgContent, componentName, isNative) {
  try {
    if (!svgContent || !svgContent.trim().startsWith('<svg')) {
      throw new Error(`Invalid SVG structure provided for ${componentName}`);
    }

    const svgrConfig = getSvgrConfig(isNative, componentName);

    // Add a timeout to prevent hanging on problematic SVGs
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
 * Generates a basic fallback component string when normal generation fails.
 * @param {string} componentName - Component name
 * @param {boolean} isNative - Whether to generate a React Native fallback
 * @returns {string} Fallback component code
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
 * @param {string} categoryDir - Directory path for the category
 * @param {string} category - Category name
 * @param {string} file - SVG filename
 * @param {Set<string>} processedSvgs - Set of processed SVG keys
 * @param {Array} manifest - Array to store manifest entries
 * @param {Array<string>} reactExports - Array to store React export statements
 * @param {Array<string>} rnExports - Array to store React Native export statements
 * @param {Array<string>} allErrors - Array to store error messages
 * @returns {Promise<boolean>} Whether processing was successful
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
    return false;
  }

  const rawSvgPath = path.join(categoryDir, file);
  // Generate PascalCase component name by combining category and baseName
  const componentName = pascalCase(`${category}-${baseName}`);

  try {
    // Read Raw SVG
    const rawSvg = fs.readFileSync(rawSvgPath, 'utf8');
    if (!rawSvg) throw new Error(`File is empty.`);

    // Optimize SVG
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

    const reactOutDir = path.join(REACT_OUT_DIR, category);
    ensureDirectoryExists(reactOutDir);
    const reactFilePath = path.join(reactOutDir, `${componentName}.tsx`);

    if (ensureWrite(reactFilePath, reactComponentCode)) {
      reactExports.push(
        `export { default as ${componentName} } from './icons/${category}/${componentName}';`,
      );
    }

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

    const rnOutDir = path.join(RN_OUT_DIR, category);
    ensureDirectoryExists(rnOutDir);
    const rnFilePath = path.join(rnOutDir, `${componentName}.tsx`);

    if (ensureWrite(rnFilePath, rnComponentCode)) {
      // Ensure the path uses the PascalCase componentName for the file segment
      rnExports.push(
        `export { default as ${componentName} } from './icons/${category}/${componentName}';`,
      );
    }

    // --- Copy Optimized SVG Assets ---
    const flutterAssetDir = path.join(FLUTTER_ASSETS_DIR, category);
    const vueIconDir = path.join(VUE_ICONS_DIR, category);

    ensureDirectoryExists(flutterAssetDir);
    ensureDirectoryExists(vueIconDir);

    ensureWrite(path.join(flutterAssetDir, file), optimizedSvg);
    ensureWrite(path.join(vueIconDir, file), optimizedSvg);

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
    const fallbackComponentName = componentName;
    try {
      const reactFallback = generateFallbackComponent(
        fallbackComponentName,
        false,
      );
      const reactOutDir = path.join(REACT_OUT_DIR, category);
      ensureDirectoryExists(reactOutDir);
      ensureWrite(
        path.join(reactOutDir, `${fallbackComponentName}.tsx`),
        reactFallback,
      );
      reactExports.push(
        `export { default as ${fallbackComponentName} } from './icons/${category}/${fallbackComponentName}';`,
      );
    } catch (fbError) {
      console.error(
        `❌ Could not create React fallback for ${fallbackComponentName}:`,
        fbError.message,
      );
    }

    try {
      const rnFallback = generateFallbackComponent(fallbackComponentName, true);
      const rnOutDir = path.join(RN_OUT_DIR, category);
      ensureDirectoryExists(rnOutDir);
      ensureWrite(
        path.join(rnOutDir, `${fallbackComponentName}.tsx`),
        rnFallback,
      );
      rnExports.push(
        `export { default as ${fallbackComponentName} } from './icons/${category}/${fallbackComponentName}';`,
      );
    } catch (fbError) {
      console.error(
        `❌ Could not create React Native fallback for ${fallbackComponentName}:`,
        fbError.message,
      );
    }

    return false;
  }
}

/**
 * Process all SVGs in a category in parallel with concurrency control
 * @param {string} category - Category name
 * @param {Array<string>} files - Array of filenames
 * @param {Set<string>} processedSvgs - Set of processed SVG keys
 * @param {Array} manifest - Array to store manifest entries
 * @param {Array<string>} reactExports - Array to store React export statements
 * @param {Array<string>} rnExports - Array to store React Native export statements
 * @param {Array<string>} allErrors - Array to store error messages
 * @param {number} concurrency - Max number of parallel processes
 * @returns {Promise<number>} Number of successfully processed files
 */
async function processCategoryFiles(
  category,
  files,
  processedSvgs,
  manifest,
  reactExports,
  rnExports,
  allErrors,
  concurrency = 4,
) {
  const categoryDir = path.join(SVGS_DIR, category);
  let successCount = 0;

  // Create output directories for this category once
  const categoryDirs = [
    path.join(REACT_OUT_DIR, category),
    path.join(RN_OUT_DIR, category),
    path.join(FLUTTER_ASSETS_DIR, category),
    path.join(VUE_ICONS_DIR, category),
  ];

  categoryDirs.forEach((dir) => ensureDirectoryExists(dir));

  // Process files in batches to control concurrency
  for (let i = 0; i < files.length; i += concurrency) {
    const batch = files.slice(i, i + concurrency);
    const results = await Promise.all(
      batch.map((file) =>
        processSvgFile(
          categoryDir,
          category,
          file,
          processedSvgs,
          manifest,
          reactExports,
          rnExports,
          allErrors,
        ),
      ),
    );

    successCount += results.filter(Boolean).length;

    // Show progress every batch
    console.log(
      `    Progress: ${Math.min(i + concurrency, files.length)}/${
        files.length
      }`,
    );
  }

  return successCount;
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

    // 2. Create Output Directories
    console.log('Creating output directories...');
    [REACT_OUT_DIR, RN_OUT_DIR, FLUTTER_ASSETS_DIR, VUE_ICONS_DIR].forEach(
      (dir) => {
        ensureDirectoryExists(dir);
        console.log(`✅ Created directory: ${dir}`);
      },
    );

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

      // Use the new helper function for concurrent processing
      const categorySuccessCount = await processCategoryFiles(
        category,
        categoryFiles,
        processedSvgs,
        manifest,
        reactExports,
        rnExports,
        allErrors,
        4, // Concurrency level - adjust based on system capabilities
      );

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

    // Filter unique exports and sort them
    const uniqueReactExports = [...new Set(reactExports)].sort();
    const uniqueRnExports = [...new Set(rnExports)].sort();

    const reactIndexContent = `// Auto-generated by generate-icons.js script @ ${new Date().toISOString()}\n${uniqueReactExports.join(
      '\n',
    )}\n`;
    ensureWrite(REACT_INDEX_FILE, reactIndexContent);
    console.log('    ✅ React index written successfully.');

    const rnIndexContent = `// Auto-generated by generate-icons.js script @ ${new Date().toISOString()}\n${uniqueRnExports.join(
      '\n',
    )}\n`;
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
