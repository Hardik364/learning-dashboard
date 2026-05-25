# LearnOS — Student Dashboard

A futuristic learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Setup

1. Clone the repo
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
4. Run the SQL below in your Supabase SQL editor
5. `npm run dev`

## Supabase table

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('PostgreSQL & Supabase', 40, 'Database'),
  ('Machine Learning Basics', 60, 'Brain'),
  ('UI/UX Fundamentals', 90, 'Palette');
```

## Architecture

**Server vs client split**

Data fetching lives entirely in `CoursesGrid` — a React Server Component. It calls Supabase directly on the server, no API routes needed. `CourseCard` is a client component only because Framer Motion requires it. Everything else that doesn't need interactivity stays as a server component.

**Why `@supabase/supabase-js` directly**

For read-only public data without user auth, the plain client is simpler. If you add auth later, swap to `createServerClient` from `@supabase/ssr` with the cookie store from `next/headers`.

**Animations**

All animations use `transform` and `opacity` exclusively — never width/height/top/left — so they stay on the GPU compositor thread and cause zero layout shifts. Spring physics (`stiffness: 300, damping: 20`) on hover states give a natural, non-linear feel.

**Responsive**

- `>1024px`: sidebar expanded + full bento grid
- `768–1024px`: sidebar auto-collapses to icon-only
- `<768px`: sidebar hidden, bottom tab bar takes over, grid stacks vertically
