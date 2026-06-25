# Design — Privacy Policy page (`/privacy`)

**Date:** 2026-06-25
**Status:** Approved (design), pending implementation plan
**Why:** Google AdSense (and a future EEA CMP) requires a published privacy policy.
A real, stack-accurate policy also builds user trust for a privacy-first tools site.

## Decisions (from brainstorming)

- **Operator / jurisdiction:** In1 is presented as operated **from Brazil**; governing
  law **Brazil (LGPD)**, with dedicated sections for **EU/EEA (GDPR)** and
  **California (CCPA/CPRA)** visitors because the audience is international. A company
  (CNPJ) is being formed but is not ready, so we **do not name a person or company** yet —
  the document refers to the service as **"In1"**. When the CNPJ is issued, swap in the
  legal entity name + address in one place (the "Who we are" section).
- **Contact email:** **privacy@in1.services** (a dedicated alias). External dependency:
  the operator must set up forwarding from `privacy@in1.services` to a real inbox.
- **Scope:** Privacy Policy only. Terms of Service and a Cookie Policy are **out of scope**
  here (the page is structured so they can be cloned later).
- **Build approach (A):** a standalone SSG route `app/privacy/page.tsx`, content authored
  as a structured array of sections rendered in a slim prose container with the existing
  design tokens. No new dependencies, no changes to `lib/tools/registry.ts`.

## Out of scope (explicit)

- **Cookie consent / CMP banner.** This page satisfies AdSense's "must have a privacy
  policy" requirement, but it is **not** EEA cookie consent. Serving personalized ads in
  the EEA requires a **Google-certified CMP** (consent banner) — a separate follow-up.
- Terms of Service, Cookie Policy, a contact form, and any backend for handling rights
  requests (handled manually via the email for now).

## Architecture

A single Server Component page, prerendered to static HTML (SSG). No client JS, no data
fetching, no registry entry (legal pages are standalone routes, like `app/all/page.tsx`,
not Tools).

### Files

**Create:**
- `app/privacy/page.tsx` — the page. Exports `metadata` and a default Server Component.
  The policy is authored inline as a typed `sections` array (`{ id, heading, body }`,
  where `body` is an array of paragraph strings / list blocks) and mapped to markup. This
  keeps the long prose readable and makes it trivial to clone for Terms later.

**Edit:**
- `components/layout/footer.tsx` — add a **Privacy** link to the bottom legal row
  (lines ~64-69), next to the copyright. Structured so Terms/Cookies links can be added
  beside it later.
- `app/sitemap.ts` — the sitemap is **registry-driven** (home + all tools only), so
  `/privacy` is not picked up automatically. Add a static entry for `/privacy`
  (priority ~0.3, `changeFrequency: "monthly"`) so it is indexable.

**Do not touch:** `lib/tools/registry.ts`, the tool engine, `app/robots.ts`.

### Route / metadata

- **Slug:** `/privacy`.
- **Render:** static (no `dynamic`, no `cookies()`/`headers()` usage).
- **Metadata:** page-level `export const metadata`:
  - `title: "Privacy Policy — In1"` (or via the site title pattern)
  - `description`: one line summarizing the privacy-first stance.
  - `alternates: { canonical: "/privacy" }`
  - `robots: { index: true, follow: true }`

### Layout / styling

- Centered single column, `max-w-3xl mx-auto px-6 py-16`.
- `<h1>` "Privacy Policy" + a muted "Last updated: June 25, 2026" line.
- Each section: `<h2>` heading + paragraphs / bulleted lists.
- Apple-minimalist tokens: Inter, `text-foreground`/`text-muted-foreground`, hairline
  dividers, links in Action Blue (`text-primary` with underline on hover). Comfortable
  reading measure and vertical rhythm. No marketing chrome.

## Content outline (authored in English)

The body must be accurate to the actual stack — every claim maps to something real:

1. **Who we are & what this is** — In1, a free collection of online tools operated from
   Brazil; most tools run entirely in the browser. (Entity name placeholder until CNPJ.)
2. **The short version** — privacy-first summary: most tools process files **locally**;
   files are not uploaded; the few exceptions are named below.
3. **Information we collect**
   - **You provide:** email address (newsletter / lead capture from the footer form),
     and the destination URLs you submit to the URL Shortener.
   - **Content you process:** handled **in your browser and not uploaded**, *except*:
     (a) the **AI Text Rewriter** — your text is sent to our AI provider via **Vercel AI
     Gateway** to generate the result; (b) the **URL Shortener** — the destination URL is
     stored so the short link can redirect.
   - **Collected automatically:** privacy-friendly, **cookieless** usage analytics
     (**Vercel Web Analytics**, aggregated); and standard server logs incl. IP address and
     a request id, used for security and **rate limiting** (Upstash).
4. **Cookies & similar technologies** — Vercel Analytics uses **no cookies**. Advertising
   (below) does. Link to Google's "How Google uses cookies."
5. **Advertising — Google AdSense** — third-party vendors, including Google, use cookies
   to serve ads based on prior visits; mention the DoubleClick/DART cookie; users can opt
   out of personalized advertising via **Google Ads Settings** and
   **aboutads.info / youronlinechoices.eu**; EEA users see a consent prompt (CMP).
   (Section is written so it is accurate even before AdSense is switched on.)
6. **Third-party services (processors)** — list with purpose: **Google AdSense** (ads),
   **Supabase** (database hosting for short links + leads), **Vercel** (hosting, analytics,
   AI Gateway), the **AI model provider** behind the rewriter, and **CDNs (unpkg,
   staticimgly)** that serve the WASM engines/models — these receive your IP when your
   browser downloads the engine, but **not** your file content.
7. **How we use information** — operate and improve the tools, prevent abuse/secure the
   service, send the newsletter (if subscribed), display ads, measure aggregate traffic.
8. **Data retention** — short links and submitted emails are kept until you ask us to
   delete them; server logs are short-lived.
9. **Your rights** — GDPR (access, rectification, erasure, portability, objection), CCPA/
   CPRA (we **do not sell** personal information; right to know/delete/opt out of targeted
   ads), LGPD; how to exercise them (email privacy@in1.services).
10. **Data security** — HTTPS everywhere, security headers (CSP, HSTS, etc.), rate
    limiting; caveat that no method is 100% secure.
11. **Children's privacy** — not directed to children under 13 (16 in the EEA); we do not
    knowingly collect their data.
12. **International data transfers** — data may be processed on servers outside your
    country (e.g., the US); appropriate safeguards apply.
13. **Changes to this policy** — we may update it; the "last updated" date reflects the
    latest revision; material changes will be highlighted.
14. **Contact** — privacy@in1.services for any privacy question or rights request.

## Dependencies

- Operator sets up **privacy@in1.services** forwarding before/at launch.

## Verification

- `npm run build` — `/privacy` appears as **static (○)** / prerendered, no errors.
- `npm run lint` — clean.
- Browser: `/privacy` renders the full policy, footer **Privacy** link navigates to it,
  links (Google opt-out, etc.) open correctly, layout matches the design system on
  mobile + desktop.
- The page is reachable from the footer on every page.

## Follow-ups (not this task)

- EEA cookie-consent **CMP** (Google-certified) before serving personalized ads in the EEA.
- Terms of Service + Cookie Policy pages (clone this page's pattern).
- Swap the entity placeholder for the registered company name once the CNPJ is issued.
