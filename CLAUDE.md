# CLAUDE.md — In1

Project context for Claude Code. Read this first. Keep it updated when conventions change.

## What this is

**In1** is a free SaaS of utility tools (PDF, image, video/audio, text, web), monetized by
ads (AdSense) + lead capture, with **programmatic SEO** as the growth engine. The product —
UI, content and slugs — is in **English** (US/international ad market). Maintainers may chat
in Portuguese, but everything shipped is English.

Almost every tool runs **100% client-side** (in the browser), so there's no server cost,
infinite scale and strong privacy ("No upload"). Two tools use a backend: URL Shortener and
lead capture (Supabase), and the AI Text Rewriter (Vercel AI Gateway).

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind v4** + **Base UI** (shadcn-style components in `components/ui/`) — NOT Radix
- **Supabase** (URL shortener + leads) · **Vercel AI Gateway** (`ai` SDK, text rewriter)
- Catalog status: **28 tools** across 5 categories (build + lint green, all SSG). History and
  rationale live in `docs/superpowers/specs/` (designs) and `docs/superpowers/plans/` (waves).

## The engine — how to add a tool (the core pattern)

Everything is config-driven from **`lib/tools/registry.ts`**. To add a tool:

1. **Add one `Tool` object** to `lib/tools/registry.ts` (copy an existing one). Fields: `slug`
   (English), `category`, `name`, `shortDescription`, `icon`, `processing` (`"client"` |
   `"server"`), optional `accept`/`multiple` (file tools), `keywords`, `metaTitle`,
   `metaDescription`, `h1`, `intro`, `sections`, `howTo`, `faq`.
2. **Add a processor** `components/tools/<slug>/<slug>-tool.tsx` (`"use client"`).
3. **Wire it** in `components/tools/tool-processor.tsx`: a `dynamic(() => import(...), { ssr:
   false, loading })` + a `case "<slug>":` in the switch.
4. **Add the icon** to the `iconMap` in `components/icons.tsx` (verify the lucide name exists
   first: `node -e "console.log(typeof require('lucide-react').IconName)"`).

The page (`app/[slug]/page.tsx` → `tool-page-layout.tsx`), `<head>`/metadata, `sitemap.xml`,
`robots.ts`, breadcrumbs, HowTo list, FAQ accordion, JSON-LD (FAQPage/HowTo/WebApplication/
Breadcrumb) and "related tools" are **all generated automatically** from the registry. A tool
also shows up in the home category showcase, header nav and footer with no extra wiring.

## SEO content standard (the real cost per tool)

Each tool needs, in **English**, in the same tone as existing tools:
- **5 `sections`** whose **`body` text totals ≥ 800 words** (this is a hard requirement),
- **4 `howTo`** steps, **5–6 `faq`** items.

Tip: write ~165–175 words per section up front to clear 800 on the first try. Quick check:
extract the `body:` strings of a tool's `sections` and count words (the original 4 tools are
shorter ~370–430; new tools must hit ≥800).

## Design system (Apple-minimalist — see `DESIGN-apple.md`)

- Single accent **Action Blue `#0066cc`** (`--primary`) for interactive elements on light
  surfaces. On **dark** surfaces use **Sky Link Blue `#2997ff`** (Action Blue disappears on
  dark). Font: **Inter**. CTAs are **pills** (`rounded-full`). Dark product tiles `#1d1d1f`/
  `#26262a`; no decorative gradients; shadows reserved for product imagery.
- The logo is a **text wordmark** `components/layout/logo.tsx` → `<Logo />` renders `In1.`
  (letters inherit color; the dot is Sky Link Blue). It's the single source of truth for the
  brand mark (header, footer, and it completes the hero headline). There is no logo image.

## Base UI / React / build gotchas (learned the hard way)

- `Button` uses the **`render`** prop, not `asChild`. `Accordion` uses a `multiple` prop.
- For a link styled as a button, use `buttonVariants(...)` on a `<Link>`.
- `Slider` `onValueChange` value is `number | readonly number[]` — handle both.
- **eslint blocks `setState` called synchronously inside `useEffect`** (`react-hooks/
  set-state-in-effect`): set state in event handlers, a lazy `useState` initializer, or in an
  async callback *after* an `await` — not directly in the effect body.
- eslint also flags **impure calls in the component body** (e.g. `performance.now()`): extract
  them to a module-scope helper.
- TS quirk: `Uint8Array` from `TextEncoder`/pdf-lib/ffmpeg is `Uint8Array<ArrayBufferLike>`,
  which doesn't satisfy `BlobPart`/`BufferSource`. Wrap with `new Uint8Array(data)` (or type a
  param as `BufferSource`).
- Helper scripts left in the repo root (e.g. a word-count `.cjs`) are linted — **delete them
  before `npm run lint`** (eslint forbids `require()`).

## Client-processing libraries & shared helpers

- **PDF:** `pdf-lib` (merge/split/rotate/watermark/build) and `pdfjs-dist` via
  **`lib/pdfjs.ts`** (worker pre-configured; Turbopack emits it as a static asset). pdf.js v6
  API: `page.render({ canvas, viewport })` and `loadingTask.destroy()` (NOT `doc.destroy()`).
- **Video/Audio:** `ffmpeg.wasm` via **`lib/ffmpeg.ts`** (`loadFFmpeg`, `runConversion`).
  🔴 **CRITICAL: single-thread core only** (`@ffmpeg/core`, never `@ffmpeg/core-mt`) and
  **never add COOP/COEP / cross-origin-isolation headers** — they break Google AdSense and
  analytics. Single-thread is slower; we accept it. The core loads from a pinned CDN via
  `toBlobURL`.
- **Background removal:** `@imgly/background-removal` (on-device ONNX; also runs single-thread
  without isolation — do not add headers). First run downloads a model; show progress.
- **Images/canvas:** `lib/image.ts` (`loadImage`, `drawToCanvas`, `canvasToBlob`);
  `react-easy-crop` (crop). **QR:** `qrcode`. **Hash:** `spark-md5` (MD5) + `crypto.subtle`
  (SHA). **Zip:** `jszip`.
- **WASM/AI tools have file-size guards** (video ~150 MB, audio ~50 MB, image ~25 MB) +
  progress + a "first run downloads the engine" note.
- **Reusable UI:** `components/tools/file-dropzone.tsx`, `components/ui/copy-button.tsx`,
  `components/ui/progress.tsx`, `components/tools/pdf-preview.tsx` (multi-page carousel preview
  of a result PDF — reuse it for any PDF-output tool), `lib/download.ts`, `lib/format.ts`.

## Home page

`app/page.tsx`: dark hero (the `<Logo>` completes the headline) → `HomeTools` (search). With no
query it shows **popular chips** (`components/popular-tools.tsx`, curated `FEATURED_SLUGS`) then
the **category showcase** (`components/category-showcase.tsx` — hand-curated cards with PNG
icons from `images/`, animated in via `components/reveal.tsx` scroll-reveal). The header lists
categories inline; both header and footer use `<Logo>`.

## Environment

Copy `.env.example` → `.env.local` and fill in. Client-side tools need **no** env; only the
URL Shortener + lead capture (Supabase: `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) and the AI Text Rewriter
(`AI_GATEWAY_API_KEY`) do. Run `supabase/schema.sql` to set up the DB. **Never commit
`.env.local`** (gitignored).

## Workflow

- Verify after each change: **`npm run build`** (each tool page must be **SSG/prerendered**) +
  **`npm run lint`** (clean). Smoke-test in the browser, especially WASM tools (ffmpeg, bg
  remover) and anything with a live preview.
- Conventional commits; end commit messages with:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`

## What's next (backlog from the roadmap spec)

UUID generator, timestamp converter, Markdown→HTML, Lorem Ipsum, text diff, EXIF remover,
favicon generator, image↔Base64. Same engine pattern + the ≥800-word SEO standard.
