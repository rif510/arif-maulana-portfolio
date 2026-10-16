# Mohamad Arif Maulana — Portfolio

A responsive bilingual (Indonesian/English) portfolio built with Next.js 14, TypeScript, and Tailwind CSS. It uses static export, so it can be deployed without a server.

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build static site

```bash
npm run build
```

The generated website will be in the `out/` folder.

## Deploy without GitHub

### Option A — Vercel
1. Create a Vercel account.
2. Install dependencies and run `npm run build` locally.
3. Upload/deploy the project using Vercel CLI (`npx vercel`) from this folder, or import the project if you later choose to use a Git provider.
4. For a static export, the `out/` folder can also be hosted by any static hosting provider.

### Option B — Netlify Drop
1. Run `npm install` and `npm run build`.
2. Open Netlify Drop in your browser and upload the generated `out/` folder.
3. Netlify will provide a public URL.

## Before publishing
- Confirm the CV information and job dates are still current.
- Review whether you want your phone number and email to be public.
- The portfolio intentionally omits NIK and does not show confidential BRISPOT screenshots, code, or customer data.
- The project descriptions summarize responsibilities from the supplied CV and do not claim unverified metrics or outcomes.

## Customization
- Edit bilingual text and sections in `app/page.tsx`.
- Adjust visual styling in `app/globals.css` and `tailwind.config.ts`.
- Change metadata in `app/layout.tsx`.
