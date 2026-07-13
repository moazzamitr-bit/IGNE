# IGNE Website

Official bilingual website for **اندیشکده حکمرانی و اقتصاد نوین / Institute for New Governance and Economy**.

## Tech Stack

Next.js App Router, TypeScript strict mode, React Server Components by default, Tailwind CSS v4, CSS design tokens, `next/image`, `next/font`, Lucide React, Vitest, React Testing Library, Playwright, ESLint, and Prettier.

## Development

```bash
npm install
npm run dev
```

Open `/fa` for Persian and `/en` for English.

## Verification

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

## Content

Content is stored in `src/data` and accessed through `src/lib/content/repository.ts`. This adapter is intentionally shaped so it can later be replaced by Strapi, Directus, Sanity, or another CMS.

To add a publication, add a `Publication` record to `src/data/publications.ts`. Use `demo: true` only for temporary content and remove it for verified official content.

To add an event, add an `Event` record to `src/data/events.ts`. Future and past events are separated by date.

To add a locale, update `src/lib/i18n/config.ts`, dictionaries, route generation, and all localized data records.

Social links live in `src/data/settings.ts`; leave them blank until real URLs are available.

## Structure

- `src/app/[locale]`: localized routes
- `src/components`: layout, navigation, home, research, publications, events, news, forms, and shared UI
- `src/data`: seed/demo content and settings
- `src/lib`: i18n, content repository, dates, search, validation, and SEO helpers
- `src/styles/tokens.css`: design tokens
- `docs`: design system, content model, missing assets, deployment notes

## Deployment

The project is ready for a standard Next.js deployment. Configure the canonical domain in metadata, sitemap, and robots when the production domain is final.
