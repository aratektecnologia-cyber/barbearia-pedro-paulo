import { NextResponse } from 'next/server';
import { login } from '@/lib/admin-auth';

export async function POST(req: Request) {
  const { password } = await req.json();
  const ok = await login(password);
  if (!ok) return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  return NextResponse.json({ ok: true });
}
