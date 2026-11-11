# Portfolio Website

Personal portfolio of Vaibhav Itauriya, live at https://portfolio-website-sandy-two-97.vercel.app/

Built with Vite, React, TypeScript and Tailwind. Deployed on Vercel from `main`.

## Editing content

All text lives in `src/data/content.ts`. Experience and project bullets can be written once (`all`) or once per view (`product`, `software`, `data`, `strategy`). A view without its own bullets falls back to `all`.

Resumes are in `public/resumes/` and the photo is `public/vaibhav.jpg`.

## Views

Visitors can switch between Product, Software, Data, Strategy and Everything. Each view can be shared as a link, for example `/?lens=product`.

## Run locally

```bash
npm install
npm run dev
```
