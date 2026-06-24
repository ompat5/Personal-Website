# Personal Website

Personal portfolio website for Om Patel — built with [Astro](https://astro.build) and styled with Tailwind CSS v4. Showcases data science, ML, and software projects, with a blog-ready content collection.

Live at [omrpatel.ca](https://omrpatel.ca).

## Development

Requires Node >= 22.12.0.

```sh
npm install        # install dependencies
npm run dev        # start dev server (localhost:4321)
npm run build      # build to ./dist
npm run preview    # preview the production build
```

## Structure

- `src/pages/` — routes (`index.astro` homepage, `blog.astro`, `blog/[slug].astro`)
- `src/components/` — section and UI components
- `src/content/posts/projects/` — project write-ups (Markdown)
- `src/data/nav.ts` — navigation links
- `public/` — static assets (images under `public/projects/`)

## Deployment

Deployed on Cloudflare. Pushes to `main` trigger an automatic build and deploy.
