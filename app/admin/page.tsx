'use client';

import { useEffect, useState } from 'react';

type Mode = 'setup' | 'login' | 'panel';

export default function AdminPage() {
  const [mode, setMode] = useState<Mode>('login');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('/api/admin/session').then(r => r.json()).then(data => {
      if (!data.hasPassword) setMode('setup');
      if (data.authenticated) setMode('panel');
    });
  }, []);

  async function submit(path: string) {
    const res = await fetch(path, { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ password })});
    if (res.ok) setMode('panel');
    else alert('Senha inválida');
  }

  if (mode === 'panel') {
    return <main className="p-8 space-y-5"><h1 className="text-3xl font-bold">Painel Admin</h1><p>Use o Supabase para editar serviços, horários, agendamentos, galeria, cores e textos.</p></main>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">{mode === 'setup' ? 'Criar senha do admin' : 'Login do admin'}</h1>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="border rounded px-3 py-2 w-full" placeholder="Digite sua senha"/>
        <button onClick={()=>submit(mode === 'setup' ? '/api/admin/setup' : '/api/admin/login')} className="mt-4 w-full bg-brand-aqua text-white py-2 rounded">Continuar</button>
      </div>
    </main>
  );
}
