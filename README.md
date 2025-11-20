# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Package Manager: pnpm

This project has been migrated from `npm` to [`pnpm`](https://pnpm.io/) for faster, disk-efficient installs.

### Common Commands

```bash
# Install all dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Lint sources
pnpm lint

# Add a dependency
pnpm add <package>

# Add a dev dependency
pnpm add -D <package>
```

### Lockfile

`package-lock.json` has been removed and replaced with `pnpm-lock.yaml`.

### Why pnpm?

- Content-addressable store with deduped packages
- Faster installs & better disk usage
- Strict node_modules layout surfaces missing peer deps earlier

### CI Cache (GitHub Actions example)

You can speed up CI using the pnpm store cache:

```yaml
			- uses: pnpm/action-setup@v4
				with:
					version: 10
					run_install: false
			- name: Get pnpm store path
				run: echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_ENV
			- uses: actions/cache@v4
				with:
					path: ${{ env.STORE_PATH }}
					key: pnpm-store-${{ runner.os }}-${{ hashFiles('**/pnpm-lock.yaml') }}
					restore-keys: |
						pnpm-store-${{ runner.os }}-
			- run: pnpm install
```
