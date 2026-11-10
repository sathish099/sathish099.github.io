# Sathish P Portfolio

Production-focused personal portfolio for Sathish P, a full-stack web developer working with Nuxt, Vue, NestJS, TypeScript, MySQL, LMS platforms, automated monitoring, and AI API integration.

Live site: https://sathish099.github.io

## Public Pages

- `index.html` - portfolio landing page with production project highlights, LMS work, development workflow, tools, and contact links.
- `resume.html` - web resume with SEO metadata and Clarity tracking.
- `contact.html` - EmailJS-powered contact form.
- `sitemap.xml` and `robots.txt` - crawler configuration for the public production pages.

## Production Notes

- Static GitHub Pages deployment through `.github/workflows`.
- Microsoft Clarity tracking is installed on public pages.
- EmailJS is used client-side with a public key only. No private API secrets are stored in this repository.
- Practice demos are archived under `projects/`, removed from sitemap discovery, and marked `noindex, nofollow`.

## Local Preview

```bash
pnpm install
pnpm start
```

Then open `http://localhost:8000`.

## Maintenance Checklist

- Keep production copy focused on confirmed LMS, foundation platform, registration monitoring, NestJS, Nuxt/Vue, and TypeScript experience.
- Do not add private service credentials to the repo.
- After changing public routes, update `sitemap.xml` and `robots.txt`.
- After changing analytics or contact behavior, verify the live site in the browser network panel.
