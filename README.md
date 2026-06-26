# Finanssitaito — Landing Page

A premium, production-ready landing page for **Finanssitaito**, an independent
financial advisory firm. Built to feel at home next to McKinsey, EY, Stripe,
Ramp, Vercel and Linear: editorial layout, generous whitespace, large
typography, restrained motion.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom token system
- **shadcn/ui** primitives (Button, Accordion)
- **Framer Motion** for subtle reveal / stagger / hover-lift animations
- **Geist Sans + Geist Mono** typography
- **Lucide** icons

## Design system

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | navy near-black | primary text |
| `--brand` | deep blue | brand, links, key chart line |
| `--canvas` | light gray | alternating section background |
| `--accent` | editorial gold | sparing premium accent only |

The signature element is a **mono "ledger" treatment**: eyebrows, labels and
all statistics are set in Geist Mono, paired with hairline grid backdrops and an
animated SVG growth chart in the hero.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm start   # production build
```

## Project structure

```
app/
  layout.tsx        # fonts, SEO metadata, JSON-LD, skip link
  page.tsx          # server component composing the sections
  globals.css       # tokens, base type, ledger-grid utilities
components/
  ui/               # shadcn primitives (button, accordion)
  primitives/       # Container, Section, Eyebrow, Reveal, AnimatedNumber
  visuals/          # GrowthChart, GridBackdrop (hero signature)
  layout/           # Navbar, Footer, Logo
  sections/         # Hero, ClientLogos, Services, WhyChooseUs,
                    # Process, CaseStudies, Testimonials, FAQ, CTABanner
data/
  content.ts        # all copy + structured data in one place
lib/
  utils.ts          # cn() helper
```

## Notes

- Server Components by default; only animated/interactive pieces are `"use client"`.
- Respects `prefers-reduced-motion` globally and in every animated component.
- Keyboard focus is visible; there is a skip link and semantic landmarks.
- All copy is editable placeholder content in `data/content.ts`.
