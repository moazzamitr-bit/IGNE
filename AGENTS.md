# IGNE Project Rules

- Build with Next.js App Router, TypeScript strict mode, Tailwind/CSS variables, and server components by default.
- Keep content out of JSX where practical; use `src/data` and the `ContentRepository` adapter as the current content layer.
- Persian is the default locale at `/fa`; English lives at `/en`. Persian pages must use RTL, Persian date formatting, and Persian text normalization in search.
- Do not invent official logos, real experts, institutional statistics, social URLs, reports, or partner claims. Demo records must remain explicitly marked as demo content.
- Use the deep green, ivory, restrained gold, limited burgundy palette from `src/styles/tokens.css`.
- Avoid glassmorphism, neon, heavy shadows, over-rounded controls, decorative clutter, generic templates, and dashboard-like layouts.
- Keep components focused; page files compose sections rather than becoming monolithic.
- Interactive features must be real: search filters actual content, newsletter validates and mocks submission, carousel controls scroll the rail, mobile navigation opens and closes.
- Run `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, and `npm run test:e2e` before delivery when time and browser dependencies allow.
