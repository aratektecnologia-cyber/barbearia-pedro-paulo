import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const key = 'admin_hash';
const session = 'admin_session';

export async function hasPassword() {
  return Boolean(cookies().get(key)?.value);
}

export async function setPassword(password: string) {
  const hash = await bcrypt.hash(password, 10);
  cookies().set(key, hash, { httpOnly: true, secure: true });
  cookies().set(session, '1', { httpOnly: true, secure: true });
}

export async function login(password: string) {
  const hash = cookies().get(key)?.value;
  if (!hash) return false;
  const ok = await bcrypt.compare(password, hash);
  if (ok) cookies().set(session, '1', { httpOnly: true, secure: true });
  return ok;
}

export function isAuthenticated() {
  return cookies().get(session)?.value === '1';
}
