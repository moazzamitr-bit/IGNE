# Deployment

1. Install dependencies with `npm install`.
2. Run `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`.
3. Set the production domain in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`.
4. Replace demo content and missing assets with official material.
5. Deploy with a Next.js-compatible host.

The app does not require runtime secrets in its current static/demo state. Newsletter and contact submissions are mocked until backend endpoints are connected.
