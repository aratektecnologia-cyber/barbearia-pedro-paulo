-- Tabelas principais da Barbearia Pedro Paulo
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric(10,2) not null,
  active boolean default true
);

create table if not exists public.site_settings (
  id int primary key default 1,
  hero text,
  hero_subtitle text,
  about text,
  phone text,
  address text,
  instagram text,
  color_aqua text,
  color_coral text,
  color_gold text,
  color_cream text
);

create table if not exists public.availability (
  id uuid primary key default gen_random_uuid(),
  week_day int not null,
  start_time time not null,
  end_time time not null
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  phone text not null,
  service_id uuid references public.services(id),
  schedule_at timestamptz not null,
  notes text,
  status text default 'pendente'
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  text text not null
);
