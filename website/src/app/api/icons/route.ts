import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Set this API route to be statically generated at build time
export const dynamic = 'force-static';
// Set revalidation to false for static export
export const revalidate = false;

export async function GET() {
  try {
    // Go up one level from /website to reach project root,
    // then into the svgs directory
    const svgDir = path.join(process.cwd(), '../svgs');
    const categories = fs
      .readdirSync(svgDir)
      .filter((item) => fs.statSync(path.join(svgDir, item)).isDirectory());

    const icons = [];

    for (const category of categories) {
      const categoryPath = path.join(svgDir, category);
      const files = fs
        .readdirSync(categoryPath)
        .filter((file) => file.endsWith('.svg'));

      for (const file of files) {
        const filePath = path.join(categoryPath, file);
        const svg = fs.readFileSync(filePath, 'utf8');
        const name = path
          .basename(file, '.svg')
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('');

        icons.push({
          category,
          name,
          svg,
        });
      }
    }

    return NextResponse.json(icons);
  } catch (error) {
    console.error('Error loading icons:', error);
    return new Response('Error loading icons', { status: 500 });
  }
}
