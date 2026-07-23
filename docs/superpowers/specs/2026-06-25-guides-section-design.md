# Design — Guides section (original articles)

**Date:** 2026-06-25
**Status:** Approved (design), implementing
**Why:** Google flagged in1.services as "low value content." About/Contact/home
prose raised legitimacy; **original in-depth articles** are the substantive
editorial content that most moves that needle. This is the phase that precedes
requesting an AdSense re-review.

## Decisions

- **Authorship / architecture:** dev-authored **typed JSX** (chosen), consistent
  with the legal/About pages — no MDX/markdown tooling.
- **Attribution:** "By the In1 team" + a published date (no person named until the
  CNPJ issues).
- **Initial set:** 6 original articles (~900–1300 words each), expandable later.
- **Commits:** trailer-free (Vercel Hobby deploy constraint).

## Architecture

### Data (`lib/guides/`)
```ts
interface Guide {
  slug: string;
  title: string;
  description: string;    // meta description + index card subtitle
  datePublished: string;  // ISO, e.g. "2026-06-20"
  dateLabel: string;      // human, e.g. "June 20, 2026"
  readingMinutes: number; // author-set (body is JSX, not word-counted)
  relatedTools: string[]; // tool slugs to cross-link
  body: ReactNode;        // JSX article content (h2/p/ul + inline tool links)
}
```
- `lib/guides/types.ts` — the `Guide` interface.
- `lib/guides/articles/<slug>.tsx` — one file per article, each exports a `Guide`.
- `lib/guides/index.ts` — aggregates them; exports `getAllGuides()` (sorted by
  date desc), `getGuideBySlug(slug)`, `getGuidesForTool(toolSlug)`.

### Routes (SSG, mirror the tools' `[slug]` pattern)
- `app/guides/page.tsx` — index: heading + grid of guide cards (title, description,
  date, reading time). Metadata + canonical `/guides`.
- `app/guides/[slug]/page.tsx` — article: `generateStaticParams` +
  `generateMetadata` + `dynamicParams = false`, renders `<GuideLayout>`.

### Components (`components/guides/`)
- `guide-layout.tsx` — breadcrumb (Home › Guides › title), title, byline
  ("By the In1 team · {dateLabel} · {readingMinutes} min read"), the prose body in
  the shared prose container, then a "Try these tools" block from `relatedTools`.
- `guide-card.tsx` — index card (also reused if needed).
- `related-guides.tsx` — a compact "Related guides" block for tool pages, given a
  tool slug (uses `getGuidesForTool`).

### SEO
- Add `GuideSchema` to `components/seo/json-ld.tsx`: **Article** (headline,
  description, datePublished, author = Organization "In1", publisher) +
  **BreadcrumbList** (Home › Guides › article).

## Initial articles (6)

| slug | title | relatedTools |
|---|---|---|
| `compress-pdf-without-losing-quality` | How to compress a PDF without losing quality | compress-pdf |
| `png-vs-jpg-vs-webp` | PNG vs JPG vs WebP: which image format should you use? | image-converter, png-to-jpg, webp-to-png |
| `remove-image-background-free` | How to remove an image background for free, in your browser | background-remover |
| `convert-video-to-gif` | How to convert a video to GIF (and keep it small) | video-to-gif |
| `merge-split-organize-pdf-pages` | Merge, split and organize PDF pages: the complete guide | merge-pdf, split-pdf, organize-pdf |
| `remove-exif-metadata-from-photos` | How to remove EXIF metadata from photos before sharing | exif-remover |

Each is original prose in the same tone as the site: a real explanation + a
practical how-to that naturally links to the relevant In1 tool(s). No spun/
templated filler.

## Wiring

**Create:** the files above.
**Edit:**
- `components/layout/header.tsx` — add a **Guides** nav item (`/guides`) to
  `navItems` (flows to desktop + mobile nav).
- `components/layout/footer.tsx` — add a **Guides** link in the bottom nav.
- `app/sitemap.ts` — add `/guides` (priority ~0.6) and each `/guides/<slug>`
  (priority ~0.6).
- `components/tools/tool-page-layout.tsx` — render `<RelatedGuides toolSlug=… />`
  when the tool has related guides (distributes editorial signal to the templated
  tool pages — helps the "low value" case). This is the only edit that touches the
  tool page layout.

**Do not touch:** the tool engine internals, the registry, legal/About/Contact.

## Verification

- `npm run build` — `/guides` + each `/guides/<slug>` prerendered as static/SSG;
  no errors. `npm run lint` clean.
- Article JSON-LD present; breadcrumbs correct; canonical per page.
- Browser: index lists all 6; articles render with byline + related tools;
  header/footer Guides links work; a tool with a guide (e.g. `/compress-pdf`)
  shows "Related guides".

## Follow-ups

- Write more articles over time (drop a new file in `lib/guides/articles/`).
- **Then request the AdSense re-review.**
- Swap "In1 team" wording if a named author/company is desired once the CNPJ issues.
