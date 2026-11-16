# Palanivel M. — Developer Portfolio

A responsive personal portfolio for Palanivel M., a Full Stack & SaaS Developer
in Coimbatore, Tamil Nadu, India. It presents skills, projects, services, work
process, contact options, and social profiles.

## Technology

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4 (with the existing custom design system)
- React and Framer Motion
- Geist fonts through `next/font`

Animations use Framer Motion and CSS. GSAP and Lenis are not currently project
dependencies.

## Requirements

- Node.js compatible with Next.js 16
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

The project currently has no automated test script. Project screenshots and the
portrait use designed placeholders until actual image assets are added.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `SITE_URL` | Required for canonical metadata and sitemap on the public deployment | The absolute public site origin, for example `https://your-domain.example` |

No API keys or other secrets are required by the current application. Leave
`SITE_URL` blank for local development until a production domain is selected.
Do not commit `.env.local` or other populated environment files. A blank
`.env.example` is provided as a safe template.

## Deploy to Vercel

1. Push this project to a GitHub repository you own, or import an existing
   repository into Vercel. Review the selected repository and branch before
   authorizing Vercel.
2. In Vercel, create a project from that repository. Keep the detected Next.js
   framework and default build command (`npm run build`).
3. After choosing the production domain, add `SITE_URL` with that exact
   `https://` origin in the Vercel project's Production environment variables.
4. Deploy and verify the site, `/robots.txt`, and `/sitemap.xml` on the chosen
   domain.

If `SITE_URL` is unset, the site still builds, but no canonical URL or sitemap
entry is emitted; `robots.txt` remains available and permits crawling.
