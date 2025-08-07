// app/api/debug-env/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    EMAIL_USERNAME: process.env.EMAIL_USERNAME || 'undefined',
  });
}
