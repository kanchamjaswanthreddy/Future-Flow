# FutureFlow

FutureFlow is a pre-launch personal finance marketing site for an AI-powered platform that unifies spending, budgeting, subscriptions, debt payoff, tax tracking, and wealth-building tools.

## Stack

- React 19 + TypeScript
- Vite
- React Router
- React Helmet Async
- Framer Motion
- Tailwind CSS
- Azure Static Web Apps deployment

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

`npm run build` type-checks the project, builds the client bundle, builds the SSR entry, then prerenders the public routes into `dist/`.

## Routes

- `/`
- `/features`
- `/pricing`
- `/about`
- `/blog`
- `/blog/:slug`
- `/contact`
- `/advisors`
- `/terms`
- `/privacy`

When adding or removing prerendered routes, update both `src/App.tsx` and `prerender.mjs`. Public SEO metadata should also stay aligned with `public/sitemap.xml` and `public/llms.txt`.

## Pricing Source Of Truth

The live pricing page is the source of truth:

- Free: `$0/month`
- Pro: `$14.99/month`
- Household: `$19.99/month`

## Contact Form

The contact form posts to Formspree at `https://formspree.io/f/xgoqedqv`. It can be overridden with `VITE_FORMSPREE_ENDPOINT` or `VITE_FORMSPREE_ID` at build time. If the Formspree request fails, it opens a prefilled email draft to `help@joinfutureflow.com`.

## Deployment

The GitHub Actions workflow builds and deploys `dist/` to Azure Static Web Apps on pushes to `main`.
