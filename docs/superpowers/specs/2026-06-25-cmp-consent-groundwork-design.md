# Design — CMP / cookie-consent groundwork (Google Consent Mode + CSP)

**Date:** 2026-06-25
**Status:** Approved (design), implementing
**Why:** Serving Google AdSense ads in the EEA/UK requires a Google-certified CMP.
We chose **Google's own CMP** ("Privacy & messaging" / Funding Choices), which is
free, certified, and served via the AdSense tag — so it activates together with
AdSense. This task lays the **code groundwork** so the consent flow is correct the
moment AdSense is switched on.

## Decision (from brainstorming)

- Use **Google's own certified CMP** (not a third-party CMP, not a custom banner).
- In1 currently sets **no cookies** (Vercel Analytics is cookieless; GA / Clarity /
  AdSense are all env-gated and off), so **no banner is shown today** — this is
  groundwork only. The banner appears at AdSense activation.

## Scope

### In code now (dormant until a Google tag is enabled)
1. **Google Consent Mode v2 defaults** — in `components/analytics.tsx`, an inline
   script that runs **before** the Google tags and sets, for the **EEA + UK + CH**
   region only:
   - `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` =
     `denied`, with `wait_for_update: 500`;
   - `ads_data_redaction: true` and `url_passthrough: true`.
   Gated on `NEXT_PUBLIC_ADSENSE_CLIENT || NEXT_PUBLIC_GA_ID`, so it ships only
   once a Google tag is active. Outside the listed regions, defaults stay granted
   (ads run normally, no banner). Google's CMP then updates the consent state from
   the user's choice.
2. **CSP allowlist** — in `next.config.ts`, add
   `https://fundingchoicesmessages.google.com` to `script-src`, `script-src-elem`
   (via the shared `adOrigins` list) and to `frame-src`, so Google's consent
   banner renders under the enforcing CSP.

### Dashboard step at AdSense activation (documented, no code)
- AdSense → **Privacy & messaging** → create a **GDPR message** (optionally a US
  states / CCPA message) → publish. Google serves it via the AdSense tag in the
  EEA/UK, respecting Consent Mode.

## Files

**Edit:**
- `components/analytics.tsx` — add the Consent Mode v2 default initializer
  (inline `next/script`, `strategy="beforeInteractive"`) rendered before the GA /
  AdSense scripts, gated on `ADSENSE_CLIENT || GA_ID`. Add a `CONSENT_REGIONS`
  constant (EEA + GB + CH).
- `next.config.ts` — add `https://fundingchoicesmessages.google.com` to
  `adOrigins` (covers script-src + script-src-elem) and to the `frame-src`
  directive.

**Do not touch:** the tool engine, registry, legal pages.

## Out of scope

- Third-party CMP and any custom banner UI.
- A separate Cookie Policy page (the Privacy Policy already covers cookies).
- Microsoft Clarity consent (Clarity is off; it uses its own API, not Consent
  Mode) — revisit only if Clarity is enabled.

## Verification

- `npm run build` + `npm run lint` green.
- The prod CSP header includes `fundingchoicesmessages.google.com` in script-src /
  script-src-elem / frame-src.
- With Google envs unset (current prod), the consent script is **not** emitted —
  confirming the groundwork is dormant until AdSense is enabled.
- Functional consent banner is validated later, as part of AdSense activation
  (create the GDPR message, then load the site from an EEA IP / the AdSense
  preview).

## Follow-ups

- Activate AdSense (set `NEXT_PUBLIC_ADSENSE_CLIENT` + slot) and create the GDPR
  message — that's when the banner goes live.
- Optional: a dedicated Cookie Policy page if desired later.
