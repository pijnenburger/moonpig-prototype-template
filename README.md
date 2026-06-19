# Moonpig prototype template

Starter for **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4** (via `@tailwindcss/vite`), with Moonpig brand fonts and assets wired in [src/index.css](src/index.css) and [src/assets/](src/assets/). Optional [Launchpad](https://docs.launchpad.moonpig.io) components are available via GitHub Packages.

## Use this template (GitHub)

1. Open the repository on GitHub and click **Use this template** → **Create a new repository**.
2. Clone your new repository (not the template).
3. Set up GitHub Packages auth and install (see [Launchpad packages](#launchpad-packages) below).
4. Run:

```bash
npm run dev
```

You get a normal Git repository with its own history.

## Launchpad packages

Launchpad (`@moonpig/launchpad-*`) is hosted on **GitHub Packages**. Before `npm install`, create a classic GitHub PAT with `read:packages` scope, authorized for the Moonpig org, then export:

```bash
export MNPG_NPM_REGISTRY_API_KEY="ghp_..."
npm install
```

The project [`.npmrc`](.npmrc) routes `@moonpig` scope to GitHub Packages using that env var (no token is committed).

### Using Launchpad components

- **Tailwind** in [`src/index.css`](src/index.css) remains the styling source for prototype layout and custom UI.
- **Launchpad** supplies design-system components (buttons, typography, modals, etc.).
- The app is wrapped in [`src/components/LaunchpadShell.tsx`](src/components/LaunchpadShell.tsx), which provides `ThemeProvider` and `LocaleTextProvider`. Do **not** add `GlobalStyle` — it conflicts with the template's Tailwind base styles and fonts.

```tsx
import { PrimaryButton, Text } from '@moonpig/launchpad-components'

<section className="flex flex-col gap-6 p-6">
  <Text typography="typeDisplay02">Prototype section</Text>
  <PrimaryButton onClick={...}>Continue</PrimaryButton>
</section>
```

Keep all `@moonpig/launchpad-*` packages on the **same major version** (e.g. `^86`). Add `@moonpig/launchpad-forms` only when you need form fields. Browse components at https://docs.launchpad.moonpig.io.

For Greetz prototypes, swap `@moonpig/launchpad-theme` for `@moonpig/launchpad-theme-greetz` in `LaunchpadShell.tsx`.

### CI

GitHub Actions needs a repository secret `MNPG_NPM_REGISTRY_API_KEY` (same PAT) so `npm ci` can fetch private packages.

## Use with tiged (CLI)

Scaffolds the latest commit on the repository **default branch** (unless you pin a branch, tag, or commit — see below).

```bash
npx tiged pijnenburger/moonpig-prototype-template my-prototype
cd my-prototype
export MNPG_NPM_REGISTRY_API_KEY="ghp_..."
npm install
npm run dev
```

`tiged` does **not** create a `.git` directory. Initialise version control when you are ready:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR_USER_OR_ORG/my-prototype.git
git push -u origin main
```

### Pin a version

```bash
npx tiged pijnenburger/moonpig-prototype-template#v1.0.0 my-prototype
```

### Private repositories

Public repos work with the default tarball mode. For private templates, use Git over SSH:

```bash
npx tiged --mode=git git@github.com:pijnenburger/moonpig-prototype-template my-prototype
```

## After scaffolding

- **AI-assisted development**: If you use Cursor, Codex, Claude, or similar tools, read [AGENTS.md](AGENTS.md) for project-specific coding conventions (Tailwind tokens, components, images). Launchpad component guidance for agents lives in [docs/LAUNCHPAD.md](docs/LAUNCHPAD.md).

- **Package name**: This template uses the npm package name `my-moonpig-prototype`. Rename if you like:

  ```bash
  npm pkg set name=your-prototype-name
  ```

- **HTML title**: Update the `<title>` in [index.html](index.html) to match your prototype.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Typecheck + production build |
| `npm run lint` | ESLint                   |
| `npm run preview` | Preview production build locally |
| `npm run launchpad:docs` | Regenerate Launchpad component index in `docs/LAUNCHPAD.md` after upgrading `@moonpig/launchpad-*` |

## Maintainer notes

This repository is published as [pijnenburger/moonpig-prototype-template](https://github.com/pijnenburger/moonpig-prototype-template) with **Template repository** enabled and topics set. If you **transfer or fork** the repo under another `owner/repo`, update the tiged and `git remote` examples in this README to match.
