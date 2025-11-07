<!--
Guidance for AI coding agents working on this repository.
Keep this file short, concrete, and tied to discoverable patterns in the codebase.
--> 

# Copilot instructions (short & specific)

- Project type: Next.js (app router) + TypeScript. Entry folder: `app/` (app-router, layouts + page.tsx files).
- Main build/dev commands: `npm run dev` (starts Next dev on :3000), `npm run build`, `npm start`, `npm run lint` (see `package.json`).

## Big-picture architecture

- Uses the Next.js app router pattern (file-system routing inside `app/`).
  - Layouts live at `app/layout.tsx` and wrap pages; see `app/layout.tsx` for how `children` are typed (React.ReactNode).
  - Pages use `page.tsx` inside folders (e.g. `app/about/page.tsx`, `app/page.tsx`).
  - Dynamic routes use bracket folders: `app/courses/[slug]/page.tsx` and `app/teachers/[id]/page.tsx`.
- TypeScript config includes an alias `@/*` -> `./*` (see `tsconfig.json`). Use this when adding imports.
- Styling: `app/globals.css` is the global stylesheet; the project includes Tailwind/PostCSS deps and `postcss.config.mjs` (so prefer Tailwind utility classes for new UI work).

## Code patterns & conventions (explicit)

- Always add pages under `app/`. Do not add pages in a legacy `pages/` directory (there is none here).
- File and export patterns:
  - Page: `export default function Page() { return <div/> }` in `page.tsx`.
  - Dynamic page params: expect `params` from the route. Example scaffold:
    - `app/teachers/[id]/page.tsx`
      ```ts
      export default function TeacherPage({ params }: { params: { id: string } }) {
        // params.id is the route value
      }
      ```
  - Layout typing example: `export default function RootLayout({ children }: { children: React.ReactNode }) { ... }` (see `app/layout.tsx`).
- Use `next/link` for navigation (see `app/layout.tsx` where `Link` is used for top nav/footer links).

## Important files to reference

- `app/layout.tsx` — shows header/footer, navigation, layout typing, and usage of `metadata` export.
- `app/page.tsx` — main home page.
- `app/courses/[slug]/page.tsx` and `app/teachers/[id]/page.tsx` — examples of dynamic routing.
- `app/globals.css`, `postcss.config.mjs` and `tailwind` deps — styling integration.
- `tsconfig.json` — TypeScript options and path alias `@/*`.
- `next.config.ts` — project-level Next config (empty now; add flags here when necessary).

## Build, test, and debugging quick notes

- Start dev server: `npm run dev` (localhost:3000). This is the default fast feedback loop.
- Build for production: `npm run build` then `npm start` to serve the produced build.
- Lint: `npm run lint` (eslint is installed as dev dependency). There is no test runner configured by default.

## Integration & external dependencies

- Uses Next.js (v16), React 19 and TypeScript. Tailwind/PostCSS are present; if adding global styles, update `app/globals.css`.
- No `api/` routes are present (no separate serverless functions detected). If adding server logic, prefer Next App Router patterns (server components / route handlers) and document where you add them.

## When editing or adding code — concrete rules

- Keep TypeScript enabled (project is strict). Add types for `params`, `children`, and component props.
- Follow app-router structure: create a folder + `page.tsx` and `layout.tsx` when nesting shared UI.
- Prefer Tailwind utilities for new CSS; remove inline styles only if replacing with classes consistently.

If anything here is unclear or you want a different level of detail (examples for component structure, tests, or CI), tell me which area to expand.
