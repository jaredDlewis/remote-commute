# morning commute

A small, calming mindfulness timer set against an animated, parallax train
window — a quiet ride to clear your head. Start the timer and watch the
scenery scroll past while a progress ring counts down your session.

Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). All
visuals are CSS animations and inline SVG — no images or external assets at
runtime.

## Requirements

- **Node.js 18.18+** (the project targets the version pinned in
  [`.nvmrc`](.nvmrc) — currently Node 24). If you use [nvm](https://github.com/nvm-sh/nvm):

  ```bash
  nvm install   # installs the version from .nvmrc
  nvm use
  ```

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (Vite) with hot reload
```

Then open the URL Vite prints (default http://localhost:5173).

## Scripts

| Command                | What it does                                      |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR.               |
| `npm run build`        | Build the production bundle into `dist/`.         |
| `npm run preview`      | Serve the built `dist/` bundle locally.           |
| `npm run lint`         | Run ESLint over the project.                      |
| `npm run format`       | Format all files with Prettier (writes changes).  |
| `npm run format:check` | Check formatting without writing (useful in CI).  |

## Project structure

```
src/
  main.jsx                   App entry point (mounts React).
  App.jsx                    Layout: train scene + UI overlay + film grain.
  constants/
    timerConstants.js        Shared config (default session length).
  components/
    Timer.jsx                Countdown timer with progress ring + controls.
    TrainScene.jsx           The train window framing the scenery.
    Scenery.jsx              Parallax SVG bands (sky, hills, poles, …).
    *.css                    Component-scoped styles, imported per component.
  index.css                  Global resets and design tokens (CSS variables).
  App.css                    App-level overlay, grain, and vignette styles.
```

Each component owns its own CSS file. Shared colors live as CSS custom
properties in [`src/index.css`](src/index.css). All animations respect
`prefers-reduced-motion`.

## Code style

Formatting is handled by Prettier and linting by ESLint (flat config in
[`eslint.config.js`](eslint.config.js)). Run `npm run lint` and
`npm run format` before committing.
