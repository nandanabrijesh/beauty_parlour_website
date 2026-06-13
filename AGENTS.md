# AI Agent Rules

## Next.js version note

This project uses **Next.js 16.2.7** — a newer version that may differ from your training data.
Before writing any Next.js code, check `node_modules/next/dist/docs/` for the current API.
Follow deprecation notices strictly.

## Tailwind CSS v4

This project uses **Tailwind CSS v4**, which has breaking changes from v3:
- There is NO `tailwind.config.js` file — do not create one
- The import in `globals.css` is `@import "tailwindcss"`, not `@tailwind base/components/utilities`
- Custom theme values go inside `@theme {}` blocks in CSS, not in a JS config

## React 19

This project uses **React 19**. Key rules:
- Any component that uses `useState`, `useEffect`, event handlers, or browser APIs needs `"use client"` at the top of the file
- Server components (no `"use client"`) cannot use hooks or event handlers
- Forms with `onChange`/`onSubmit` must be client components

## Images

- Always use Next.js `<Image>` from `"next/image"` instead of `<img>`
- Images in `/public` are referenced as `/filename.png` (no `/public` prefix)
- Always provide `width`, `height`, and `alt` props

## TypeScript

- Strict mode is enabled — do not use `any`
- Define types or interfaces for all data structures (e.g. service categories)
- Use the `@/` alias for imports rather than long relative paths like `../../`
