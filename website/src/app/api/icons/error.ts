import { NextResponse } from 'next/server';

// Set this API route to be statically generated at build time
export const dynamic = 'force-static';
// Set revalidation to false for static export
export const revalidate = false;

export function GET() {
  return NextResponse.json({ error: 'Failed to load icons' }, { status: 500 });
}
