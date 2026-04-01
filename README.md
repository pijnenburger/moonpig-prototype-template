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
npx tiged YOUR_ORG/moonpig-prototype-template my-prototype
cd my-prototype
npm install
npm run dev
```

`tiged` does **not** create a `.git` directory. Initialise version control when you are ready:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR_ORG/my-prototype.git
git push -u origin main
```

### Pin a version

```bash
npx tiged YOUR_ORG/moonpig-prototype-template#v1.0.0 my-prototype
```

### Private repositories

Public repos work with the default tarball mode. For private templates, use Git over SSH:

```bash
npx tiged --mode=git git@github.com:YOUR_ORG/moonpig-prototype-template my-prototype
```

## After scaffolding

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

## Maintainer: publish as a GitHub template

1. Push this repository to GitHub (default branch e.g. `main`).
2. **Settings → General → Template repository** — enable **Template repository**.
3. Optional: add topics such as `vite`, `react`, `typescript`, `tailwindcss`, `template`.

Replace `YOUR_ORG/moonpig-prototype-template` in the snippets above with your real `owner/repo` slug.
