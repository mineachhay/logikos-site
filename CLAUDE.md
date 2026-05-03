# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

There is no test suite configured yet.

## Architecture

This is a **Next.js 16** App Router project with **React 19** and **TypeScript** (strict mode).

- `app/` — all routes and layouts live here. Files named `page.tsx` define routes; `layout.tsx` wraps them. Components are Server Components by default; add `"use client"` to opt into client-side rendering.
- `public/` — static assets served at the root path.
- Path alias: `@/` resolves to the repo root (e.g. `@/app/globals.css`).

### Styling

Tailwind CSS v4 is used. v4 imports differ from v3:

```css
/* correct (v4) */
@import "tailwindcss";

/* wrong (v3-style, do not use) */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

CSS custom properties for colors and fonts are declared under `@theme inline {}` in `app/globals.css`. The Geist Sans and Geist Mono fonts are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).

### Before writing any Next.js code

Read the relevant guide in `node_modules/next/dist/docs/` — this version has breaking API changes from older releases. Heed any deprecation notices you encounter.
