import type { NextConfig } from "next";

/**
 * Security headers applied to every route.
 *
 * Deliberately excludes COOP/COEP (cross-origin isolation): the single-thread
 * ffmpeg.wasm core and the on-device background-removal model both run WITHOUT
 * SharedArrayBuffer, and adding those headers would break Google AdSense and
 * analytics. See lib/ffmpeg.ts and CLAUDE.md.
 */

// Origin of the Supabase project (URL shortener + lead capture), derived from
// the public env var so connect-src stays correct per deployment.
const supabaseOrigin = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").origin;
  } catch {
    return "";
  }
})();
const supabaseWs = supabaseOrigin.replace(/^https:/, "wss:");

/**
 * Content-Security-Policy for In1.
 *
 * Calibrated against every external origin the tools actually use. Each entry
 * maps to a real dependency — removing one breaks that feature:
 * - unpkg.com           ffmpeg.wasm core (loaded via toBlobURL = fetch)
 * - staticimgly.com     background-removal ONNX model (default CDN)
 * - googlesyndication / doubleclick / google.com   AdSense (scripts + ad iframes)
 * - googletagmanager / google-analytics            Google Analytics
 * - clarity.ms / c.bing.com                         Microsoft Clarity
 * - 'wasm-unsafe-eval'  WASM compilation (ffmpeg + ONNX)
 * - blob:               tool previews/downloads and worker creation
 *
 * NOT included on purpose: require-trusted-types-for (breaks the markdown /
 * JSON-LD dangerouslySetInnerHTML) and a bare frame-src 'self' (breaks ads).
 *
 * Rolled out as Report-Only first (see headerKey below); flip to the enforcing
 * header once a real deploy shows the reports are clean. See
 * PLANO-CYBERSEGURANCA.md.
 */
const adOrigins = [
  "https://pagead2.googlesyndication.com",
  "https://googleads.g.doubleclick.net",
  "https://tpc.googlesyndication.com",
  "https://www.googletagmanager.com",
  "https://www.clarity.ms",
];

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://unpkg.com ${adOrigins.join(" ")}`,
  `script-src-elem 'self' 'unsafe-inline' https://unpkg.com ${adOrigins.join(" ")}`,
  `style-src 'self' 'unsafe-inline'`,
  `font-src 'self' data:`,
  `img-src 'self' data: blob: https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.google-analytics.com https://*.clarity.ms`,
  `connect-src 'self' ${supabaseOrigin} ${supabaseWs} https://unpkg.com https://staticimgly.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com`,
  `frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://*.googlesyndication.com https://www.google.com`,
  `worker-src 'self' blob:`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `upgrade-insecure-requests`,
]
  .map((d) => d.replace(/\s+/g, " ").trim())
  .join("; ");

// Phase A: Report-Only (observe, don't block). Switch to
// "Content-Security-Policy" to enforce once validated on a real deploy.
const cspHeaderKey = "Content-Security-Policy-Report-Only";

const securityHeaders = [
  { key: cspHeaderKey, value: csp },
  // Block this site from being framed by third parties (does not affect the
  // AdSense ad iframes, where In1 is the parent frame).
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // No tool uses camera/mic/geolocation (only clipboard-write); deny them.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
