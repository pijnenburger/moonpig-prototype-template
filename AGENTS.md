# Guidance for AI-assisted coding

This file orients coding agents (Cursor, Codex, Claude, and similar) when working in this repository.

## Stack

- Build: Vite 8, TypeScript, ESLint.
- UI: React 19 (functional components, strict typing).
- Styling: Tailwind CSS v4 via `@tailwindcss/vite`, with `@import "tailwindcss"` in `src/index.css`.
- Design system: CSS custom properties on `:root`, optional market overrides (e.g. `.grtz`), and Tailwind integration through `@theme inline`. Prefer mapped utilities from that theme—for example `bg-brand-interaction`, `text-text`, `text-inverted`, `border-border`, `outline-brand-focus-ring`, `text-ds-*`, `shadow-ds-*`, and radius tokens under `--radius-*`—over raw hex colors and one-off pixel classes. Use `var(--token-name)` in CSS when a utility is not mapped yet.
- Launchpad (optional): `@moonpig/launchpad-*` components from GitHub Packages. Requires `MNPG_NPM_REGISTRY_API_KEY` for install (see README). Use for DS components only; keep prototype styling in Tailwind.

## Styling rules

- Prefer Tailwind utility classes directly in JSX for layout and component styling.
- Use Launchpad components (`@moonpig/launchpad-components`) for design-system primitives (buttons, text, modals, etc.) when they exist. Do not add `GlobalStyle` from Launchpad — it conflicts with `src/index.css` base styles and fonts.
- Do not introduce custom class names (for example BEM-style selectors) for ordinary component styling; reserve named classes for true globals or documented exceptions.
- Avoid custom CSS except for: global resets and `@layer base`, `@font-face`, third-party overrides, or cases Tailwind cannot express cleanly. Put shared global rules in `src/index.css`.
- Prefer design tokens for spacing, sizing, radius, typography, and color: use `@theme` keys and `:root` variables (`--color-black-*`, `--border-radius-*`, `text-ds-*`, `leading-ds-*`, brand colors, etc.) before reaching for arbitrary values.
- Avoid arbitrary pixel values and hardcoded hex in JSX where the token scale already covers the need. If a value repeats, add it to `@theme inline` in `index.css` instead of scattering `[]` utilities.
- Some starter markup in `src/App.tsx` still uses arbitrary values (e.g. `gap-[25px]`). New and refactored code should converge on tokens; treat those as legacy.

## Components, structure, and dependencies

- Add new React components under `src/components/` (one main file per component, or a small folder per component if it has colocated types, tests, or subparts).
- `LaunchpadShell` in `src/components/LaunchpadShell.tsx` wraps the app with Launchpad `ThemeProvider` and `LocaleTextProvider`. Any Launchpad component import requires this shell (already wired in `src/main.tsx`).
- Keep all `@moonpig/launchpad-*` package versions aligned on the same major release.
- Keep components small, readable, and composable.
- Avoid unnecessary dependencies; the template intentionally stays lean.
- Avoid premature abstraction: extract hooks or shared utilities only when there is clear reuse or complexity that warrants it.

## Images

- For dynamic, remote, or user-controlled images, handle failures so the layout does not collapse:
  - Use `onError` on `<img>` (or equivalent) to swap to a placeholder state.
  - Optionally set `loading` and `decoding` for performance and perceived quality.
  - Use a placeholder (neutral block, skeleton, or icon) when the image is missing or failed.
- This repo does not ship a shared image component by default; a small reusable helper under `src/components/` is appropriate if the same pattern is used more than once.

## TypeScript and React conventions

- Use strict, explicit types; avoid `any` unless there is a documented reason.
- Prefer functional components and hooks.
- Keep imports at the top of each file; avoid inline or dynamic imports used only to dodge ordering.

## Where to look

- `docs/LAUNCHPAD.md` — when to use Launchpad, component index, import patterns. **Check Launchpad before building custom buttons, text, modals, tabs, or alerts.** API reference: https://docs.launchpad.moonpig.io
- `src/components/` — shared UI components (including `LaunchpadShell`).
- `src/index.css` — Tailwind entry, tokens, `@theme`, base styles.
- `src/App.tsx` — example app shell.
- `vite.config.ts` — Vite and Tailwind plugin wiring.
- `src/assets/` — static assets.
