# Pratyush Hirawat — AI Portfolio

A premium, animated portfolio built with React, TypeScript, Tailwind CSS v4, Framer Motion, and React Three Fiber. All content is sourced from the attached resume and lives in two typed data files — nothing else in the codebase needs to change to update your info.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Where your content lives

- `src/data/resume.ts` — name, contact info, summary, skills, projects, education, certifications, timeline, achievements, services.
- `src/data/products.ts` — the "AI Products & Full Stack Applications" section. **Add one object here to add a new project card** — filters update automatically.

## Placeholders to replace before you ship this

The resume didn't include these, so they're marked clearly in code and content:

1. **`public/resume.pdf`** — drop your actual resume PDF here. It's wired to every "Download Resume" button.
2. **GitHub / LinkedIn URLs** — `src/data/resume.ts` (`personal.github`, `personal.linkedin`) and `src/data/products.ts` currently point to placeholder URLs (`https://github.com/`, etc.) since the resume listed these as labels, not links. Replace with your real profile URLs.
3. **Project GitHub/demo links** — each project in `resume.ts` and `products.ts` has `github`/`demo` fields pointing at placeholders — swap in the real repo and live-demo URLs for SnapClass, AI Gym Coach, and fitTrack.
4. **Hero portrait** — the hero currently renders an SVG placeholder frame. Replace it with a real `<img>` pointing at `public/images/portrait.jpg` once you add your photo (see the comment in `src/components/Hero.tsx`).
5. **`public/images/og-cover.png`** — a 1200×630 social-preview image referenced in `index.html`'s Open Graph tags.
6. **Contact form** — currently opens the visitor's email client via a `mailto:` link (no backend). Wire it to a form service (Formspree, Resend, etc.) if you want submissions to land somewhere without the visitor's mail client opening.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Three Fiber / drei / three.js · lucide-react

## Notes on the design

The visual system treats the whole site as a "model card" for an AI system named after you — mono-spaced status tags, a model-card eyebrow in the hero, section numbering as a sequential document. Dark mode is the primary experience; light mode swaps the palette while keeping the same structure. Toggle state persists in `localStorage`.
