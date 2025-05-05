import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ error: 'Failed to load icons' }, { status: 500 });
}
