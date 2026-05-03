import { NextResponse } from 'next/server';
import { hasPassword, isAuthenticated } from '@/lib/admin-auth';

export async function GET() {
  return NextResponse.json({ hasPassword: await hasPassword(), authenticated: isAuthenticated() });
}
