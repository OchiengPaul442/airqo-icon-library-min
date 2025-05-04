const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

const iconsFolderPath = path.join(__dirname, '../packages/react/src/icons');

/**
 * Recursively gets all files in a directory
 */
async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(async (dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    }),
  );
  return Array.prototype.concat(...files);
}

/**
 * Updates the content of an icon component to use the new IconProps interface
 */
function updateIconComponent(content) {
  // Replace the imports
  let updatedContent = content.replace(
    /import \* as React from "react";\s*import type { SVGProps } from "react";\s*import { Ref, forwardRef } from "react";(\s*interface SVGRProps {\s*title\?: string;\s*titleId\?: string;\s*})?/,
    `import * as React from "react";\nimport { Ref, forwardRef } from "react";\nimport { SVGRProps, IconProps } from "../../types/icon";`,
  );

  // Replace the component props type
  updatedContent = updatedContent.replace(
    /(const \w+) = \(\{(\s*title,\s*titleId,)(\s*\.\.\.props\s*)\}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>\) =>/,
    '$1 = ({$2\n  size = "1em",\n  color = "currentColor",$3}: IconProps & SVGRProps, ref: Ref<SVGSVGElement>) =>',
  );

  // Replace the svg attributes to use the size and color props
  updatedContent = updatedContent.replace(
    /<svg fill="(currentColor|[^"]*)" viewBox="([^"]*)" role="([^"]*)" width="([^"]*)" height="([^"]*)" ref={ref} aria-labelledby={titleId} \{\.\.\.props\}>/,
    `<svg 
    fill="none" 
    viewBox="$2" 
    role="$3" 
    width={size} 
    height={size} 
    ref={ref} 
    aria-labelledby={titleId} 
    {...props}
  >`,
  );

  // Replace stroke color in path
  updatedContent = updatedContent.replace(
    /stroke="#[0-9A-Fa-f]{3,6}"/g,
    'stroke={color}',
  );

  return updatedContent;
}

/**
 * Main function to update all icon components
 */
async function updateAllIconComponents() {
  try {
    const files = await getFiles(iconsFolderPath);
    const tsxFiles = files.filter((file) => file.endsWith('.tsx'));

    console.log(`Found ${tsxFiles.length} icon components to update...`);

    await Promise.all(
      tsxFiles.map(async (file) => {
        const content = await readFile(file, 'utf8');
        const updatedContent = updateIconComponent(content);
        await writeFile(file, updatedContent);
        console.log(`Updated ${path.basename(file)}`);
      }),
    );

    console.log('All icon components updated successfully!');
  } catch (error) {
    console.error('Error updating icon components:', error);
    process.exit(1);
  }
}

updateAllIconComponents();
