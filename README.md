# Barbearia Pedro Paulo (Next.js + Supabase)

Projeto completo do site da **Barbearia Pedro Paulo**, com Home moderna e área administrativa em `/admin`.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Supabase (Auth, Database e Storage)

## Funcionalidades entregues
- Home com hero, sobre, serviços, galeria, depoimentos e botão flutuante de WhatsApp.
- Animações com Framer Motion: fade-up, hover 3D nos cards e pulsação no botão.
- Área `/admin` com fluxo de primeira senha:
  1. Primeiro acesso: cria senha.
  2. Próximos acessos: login normal.
- Base pronta para gerenciar:
  - serviços e preços
  - disponibilidade de agenda
  - agendamentos
  - galeria
  - textos e cores do site

## Configuração de ambiente
Crie `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Rodando localmente
```bash
npm install
npm run dev
```

Acesse:
- `http://localhost:3000/`
- `http://localhost:3000/admin`

## Supabase recomendado
1. Execute `supabase/schema.sql` no SQL Editor.
2. Crie bucket `gallery` no Storage.
3. (Opcional) Ative RLS e políticas para acesso administrativo.

## Observações
- Os serviços iniciais e depoimentos já estão no código para renderização rápida.
- A galeria usa imagens em `public/gallery/*.jpg`. Substitua pelas fotos reais.
- O fluxo de senha no exemplo usa cookie HTTP-only para simplicidade. Em produção, recomenda-se usar **Supabase Auth** com usuário admin.
