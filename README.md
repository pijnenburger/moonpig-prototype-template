# Moonpig prototype template

Starter for **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4** (via `@tailwindcss/vite`), with Moonpig brand fonts and assets wired in [src/index.css](src/index.css) and [src/assets/](src/assets/).

## Use this template (GitHub)

1. Open the repository on GitHub and click **Use this template** → **Create a new repository**.
2. Clone your new repository (not the template).
3. Install and run:

```bash
npm install
npm run dev
```

You get a normal Git repository with its own history.

## Use with tiged (CLI)

Scaffolds the latest commit on the repository **default branch** (unless you pin a branch, tag, or commit — see below).

```bash
npx tiged pijnenburger/moonpig-prototype-template my-prototype
cd my-prototype
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

- **AI-assisted development**: If you use Cursor, Codex, Claude, or similar tools, read [AGENTS.md](AGENTS.md) for project-specific coding conventions (Tailwind tokens, components, images).

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

## Maintainer notes

This repository is published as [pijnenburger/moonpig-prototype-template](https://github.com/pijnenburger/moonpig-prototype-template) with **Template repository** enabled and topics set. If you **transfer or fork** the repo under another `owner/repo`, update the tiged and `git remote` examples in this README to match.
