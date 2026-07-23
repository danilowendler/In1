# Design — About + Contact pages & home editorial content

**Date:** 2026-06-25
**Status:** Approved (design), implementing
**Why:** Google AdSense flagged in1.services as **"low value content"** on review.
About/Contact pages and richer home prose are standard legitimacy/E-E-A-T signals
that address the flag. (The bigger lever — an original Guides/articles section —
is a separate later phase.)

## Scope

Three cohesive pieces, all following the shipped legal-page pattern (SSG routes,
typed section arrays, footer links, sitemap). No new dependencies, no backend.

### 1. `/about` (new) — highest weight for the re-review
Original, mission-focused prose (no person/company named until the CNPJ issues),
authored as a typed `SECTIONS` array like the legal pages:
1. **What In1 is** — a free suite of ~77 browser-based tools (PDF, image, video/
   audio, text, web, calculators).
2. **How it works** — client-side processing ("no upload"), what that means for
   privacy + speed; the exceptions (URL Shortener, AI Text Rewriter) explained
   transparently, linking the Privacy Policy.
3. **Why it's free** — ad-supported, which keeps every tool free and unlimited.
4. **What we value** — privacy, no sign-up, no watermarks, no limits, accessible.
5. **Who we are** — In1, operated from Brazil; product in English for a global
   audience. Honest and light.
6. **Get in touch** — links to `/contact` and the tools.

### 2. `/contact` (new) — email-only (decided; no form/backend)
- The contact email in a prominent `mailto:` — `contactin1services@gmail.com`.
- **What to reach out about:** general/support, privacy & data requests,
  partnerships/advertising, feedback & bug reports.
- Response expectation (we read every message; reply within a few business days).
- Links to Privacy Policy + Terms of Service.

### 3. Home editorial (new prose, below the tools section, before the footer)
Rendered by a new server component `components/home-editorial.tsx`, placed in
`app/page.tsx` after the `<div id="tools">` block:
- **Intro** — one short paragraph on what In1 is.
- **How it works** — 3 steps (pick a tool → it runs in your browser, no upload →
  download the result). Icons: `MousePointerClick`, `Cpu`, `Download`.
- **Why In1** — a value grid (privacy/no upload, fast, free, no sign-up, no
  watermark, any device). Icons from lucide-react, imported directly (the
  established pattern in tool-pool.tsx).

## Files

**Create:**
- `app/about/page.tsx` — SSG server component, `metadata` (title/description/
  `canonical: /about`, robots index,follow) + `SECTIONS` array, same prose
  container as the legal pages. Internal links via `next/link`.
- `app/contact/page.tsx` — SSG server component, `metadata` (`canonical:
  /contact`) + the email + reach-out list.
- `components/home-editorial.tsx` — server component with the intro / how-it-works
  / why-in1 sections, styled with the existing design tokens (Apple-minimalist).

**Edit:**
- `app/page.tsx` — render `<HomeEditorial />` after the tools section.
- `components/layout/footer.tsx` — add **About** and **Contact** links to the
  bottom legal nav (beside Privacy Policy / Terms of Service).
- `app/sitemap.ts` — add `/about` and `/contact` entries (priority ~0.5,
  `changeFrequency: "monthly"`).

**Do not touch:** the tool engine, registry, legal pages, ad wiring.

## Out of scope

- A Guides/blog section with original articles (next phase — the main "low value"
  remedy).
- A contact form / backend (decided: email-only).
- Reworking the 77 tool pages (possible later pass for uniqueness).

## Verification

- `npm run build` — `/about` + `/contact` prerendered as static (○); home still
  static; no errors. `npm run lint` clean.
- Icons resolve (verify each lucide name before use).
- Browser: pages render, footer links work, home shows the new editorial section
  on mobile + desktop.

## Follow-ups

- **Guides/articles section** (the substantive content that most moves the
  "low value" needle) — separate spec.
- Then request an AdSense re-review.
- Swap "In1" for the legal entity name once the CNPJ issues; lawyer review.
