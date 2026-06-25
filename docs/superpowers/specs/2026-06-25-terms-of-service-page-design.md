# Design — Terms of Service page (`/terms-of-service`)

**Date:** 2026-06-25
**Status:** Approved (design), implementing
**Why:** A free, ad-supported tools site needs Terms of Service alongside the
Privacy Policy (sets acceptable use, disclaimers, and liability limits). Pairs
with the [Privacy Policy design](2026-06-25-privacy-policy-page-design.md).

## Decisions

- **Approach:** clone the Privacy Policy pattern — a standalone SSG route
  `app/terms-of-service/page.tsx` (same layout: centered `max-w-3xl` column,
  `<h1>` + "Last updated", sections authored as a typed array), a **Terms** link
  in the footer next to **Privacy**, and a `/terms-of-service` entry in
  `app/sitemap.ts`. No new dependencies, no registry changes.
- **Slug:** `/terms-of-service`.
- **Operator / jurisdiction:** reuse the Privacy Policy decision — In1, operated
  from Brazil, **governing law Brazil**; entity name omitted until the CNPJ is
  issued.
- **Contact:** reuse `privacy@in1.services` (the only published address); swap to
  a dedicated `legal@`/`support@` once the team sets one up.
- **Tone:** plain, readable English matching the Privacy Policy. This is a
  standard ToS for a free utility site — **not legal advice**; a lawyer should
  review it once the company is formed.

## Out of scope

- Cookie Policy and the EEA cookie-consent CMP (separate follow-ups).

## Files

**Create:** `app/terms-of-service/page.tsx` — Server Component, SSG. `metadata`
(`title`, `description`, `alternates.canonical: "/terms-of-service"`,
`robots: index,follow`) + a typed `SECTIONS` array rendered in the same prose
container as the Privacy page. Internal references to the Privacy Policy use a
Next `<Link href="/privacy">`.

**Edit:**
- `components/layout/footer.tsx` — add a **Terms** link beside **Privacy** in the
  bottom legal row.
- `app/sitemap.ts` — add a `/terms-of-service` entry (priority ~0.3,
  `changeFrequency: "monthly"`).

**Do not touch:** `lib/tools/registry.ts`, the tool engine, `app/robots.ts`.

## Content outline (authored in English, ~14 sections)

1. **Acceptance of the terms** — using the Site means you agree; works with the
   Privacy Policy.
2. **What In1 is** — free in-browser tools, ad-supported, provided "as is"; we may
   add/change/remove tools.
3. **Eligibility** — at least 13 (16 in the EEA); your use must comply with your
   local laws.
4. **Acceptable use** — no unlawful use, abuse/overload, unauthorized access,
   bypassing security or rate limits, or automated abuse.
5. **Your content & files** — you keep ownership and are responsible; most
   processing is local; URL Shortener + AI Rewriter send data as per the Privacy
   Policy.
6. **URL Shortener** — no illegal/malicious/deceptive/infringing links; we may
   disable abusive links without notice.
7. **AI Text Rewriter** — output may be inaccurate; you must review it; no
   prohibited content.
8. **Intellectual property** — the In1 brand/site/code are ours; your files stay
   yours.
9. **Third-party services & ads** — Google AdSense and the providers in the
   Privacy Policy; their terms apply; external links are not endorsements.
10. **Disclaimers** — "as is"/"as available", no warranties (fitness, accuracy,
    availability).
11. **Limitation of liability** — no indirect/consequential damages; liability
    limited to the maximum the law allows (the Site is free).
12. **Changes** — we may change the Site or these Terms; the "Last updated" date
    reflects the latest revision.
13. **Termination / suspension** — we may restrict access to address abuse or
    protect the Site.
14. **Governing law & contact** — governed by the laws of Brazil; contact
    privacy@in1.services.

## Verification

- `npm run build` — `/terms-of-service` prerendered as static (○), no errors.
- `npm run lint` — clean.
- Browser: page renders; footer **Terms** link works; the in-page link to the
  Privacy Policy works; layout matches the design system on mobile + desktop.

## Follow-ups

- Cookie Policy + EEA consent CMP.
- Swap the entity placeholder for the registered company name once the CNPJ is
  issued, and have a lawyer review.
