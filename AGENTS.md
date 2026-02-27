# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 16 landing page with no backend, database, or environment variables.

### Running the app

Standard npm scripts are documented in `README.md` and `package.json`:

- `npm run dev` — starts the dev server on port 3000
- `npm run build` — production build (static export)
- `npm run lint` — ESLint (flat config, v9)

### Notes

- No `.env` files or secrets are required.
- All page content is hardcoded in `lib/home-content.ts` and `lib/constants.ts`.
- The only external link is to `cal.com/datalynlabs/30min` (booking CTA); configured in `lib/site.ts`.
- Tailwind CSS v4 is used via `@tailwindcss/postcss` (see `postcss.config.mjs`).
- ESLint uses the flat config format (`eslint.config.mjs`) with `eslint-config-next` v16.
