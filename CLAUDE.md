@AGENTS.md

# DALIA Beauty Parlour Website

A static marketing website for a beauty parlour in Thalassery, Kerala.
Built by a student learning Next.js. Keep suggestions beginner-friendly.

## Stack

- Next.js 16.2.7 (App Router, Turbopack enabled by default)
- React 19.2.4
- Tailwind CSS v4
- TypeScript 5 (strict mode)

## Commands

- `npm run dev` — start dev server (runs on http://localhost:3000, falls back to 3001 if busy)
- `npm run build` — production build
- `npm run lint` — ESLint check

## Folder structure

- `app/` — all pages using the Next.js App Router
- `app/components/` — shared components like Navbar and Footer (to be created)
- `app/data/` — static data files e.g. services list (to be created)
- `app/globals.css` — global styles, Tailwind import
- `public/` — static images served at `/filename`

## Path alias

`@/` maps to the project root. Use `import { x } from "@/app/data/services"` etc.

## Design conventions

- Colour palette: `pink-500` (headings), `pink-300` (card subheadings), `pink-700` (nav links)
- Background images applied via inline `style={{ backgroundImage: "url('/filename')" }}`
- Inner pages use a blurred background image at `opacity-10` with glassmorphism cards (`bg-white/10 backdrop-blur-md`)
- No dark mode support needed

## Scope

This is a pure static site — no database, no authentication, no server actions.
Do not suggest backend features or external APIs unless explicitly asked.
