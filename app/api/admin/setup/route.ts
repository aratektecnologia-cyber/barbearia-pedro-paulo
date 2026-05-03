import { NextResponse } from 'next/server';
import { hasPassword, setPassword } from '@/lib/admin-auth';

export async function POST(req: Request) {
  if (await hasPassword()) return NextResponse.json({ error: 'Senha já existe' }, { status: 400 });
  const { password } = await req.json();
  await setPassword(password);
  return NextResponse.json({ ok: true });
}
