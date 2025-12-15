## Purpose
Quick, concrete instructions for AI coding agents working in this monorepo of small React apps (focused on `curso-react` and `receita`). Keep edits small, match existing style, and avoid adding unrelated features.

## Big picture
- Repo contains multiple independent Vite + React apps: `curso-react/` (feature-rich demo with a local chat server) and `receita/` (small news/menu demo).
- `curso-react` includes an Express-based chat endpoint that proxies to OpenAI (`curso-react/server/*`). The frontend talks to `http://localhost:3001/chat`.

## How to run / debug
- Install and run per-project from its folder. Example:
  - `cd curso-react && npm install && npm run dev` (frontend)
  - `cd curso-react && npm run server` (starts the Express/OpenAI proxy)
  - `cd receita && npm install && npm run dev`
- Environment: `curso-react/server` expects an `OPENAI_API_KEY` in `.env` (uses `dotenv`).

## Important patterns & conventions
- Routing: uses `react-router` with `createBrowserRouter` in `curso-react/src/main.jsx`.
- Path alias: `@/*` → `src/*` is configured in `curso-react/jsconfig.json`. Use it for imports in `curso-react`.
- Global context: `TaskContext` (`curso-react/src/context/TaskContext.jsx`) stores `tasks` and `completedTasks` in `localStorage` (keys: `tasks`, `completedCopy`) and mounts `ChatBox` globally.
- Chat integration: `ChatBox` posts `{ message, tasks }` to `http://localhost:3001/chat` and expects `{ reply }`.
- Styling: Tailwind utility classes are used across both apps. `curso-react` also uses Radix/shadcn-ui and small UI primitives under `src/components/ui/`.

## Code-style & component patterns
- Components are PascalCase files (e.g. `AddTask.jsx`, `Menu.jsx`). Small UI primitives sometimes use lowercase (e.g. `button.jsx`). Follow existing naming.
- Favor small, focused components: look at `curso-react/src/components/ui/*` for examples of composable primitives.
- Persisted state should use the established keys / shapes (see `TaskContext`).

## Files to inspect when making changes
- App entry and routes: `curso-react/src/main.jsx`, `curso-react/src/App.jsx`
- Global logic and storage: `curso-react/src/context/TaskContext.jsx`
- Chat UI and network: `curso-react/src/pages/ChatBox.jsx` and `curso-react/server/*`
- Example UI in the other app: `receita/src/components/Menu.jsx`, `receita/src/pages/HomePage.jsx`
- Config and scripts: `curso-react/package.json`, `receita/package.json`, `curso-react/jsconfig.json`

## Practical examples for PRs
- Adding a feature that needs AI: add server-side handling under `curso-react/server`, read `OPENAI_API_KEY` from `.env`, and expose a small endpoint; call it from the client like `ChatBox` does.
- Adding a new page: add route in `main.jsx` and create the component in `src/pages/`.

## Tests & linters
- There are no unit tests in the repo. Use `npm run lint` in each project to run ESLint.

## What NOT to change without asking
- Global conventions: localStorage keys, the chat endpoint shape, and the alias `@/*` config. Breaking these will require coordinated changes across files.

If anything in these notes is unclear or you'd like more specific examples (e.g., how the chat payload is composed, or component patterns), tell me which area to expand.
