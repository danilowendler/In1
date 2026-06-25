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
 * - 'wasm-unsafe-eval' + 'unsafe-eval'  WASM compilation + the emscripten glue's
 *                       runtime eval() (both ffmpeg.wasm and the ONNX runtime)
 * - blob:               ffmpeg/ONNX load their JS+wasm engine from blob: URLs
 *                       (so blob: is needed on script-src-elem AND connect-src),
 *                       plus tool previews/downloads and worker creation
 *
 * NOT included on purpose: require-trusted-types-for (breaks the markdown /
 * JSON-LD dangerouslySetInnerHTML) and a bare frame-src 'self' (breaks ads).
 *
 * ENFORCING (Phase B). Rolled out as Report-Only first; a real prod deploy
 * showed the ONLY violations were the WASM tools' blob: engine load + emscripten
 * eval (both now explicitly allowed above). See PLANO-CYBERSEGURANCA.md.
 */
const adOrigins = [
  "https://pagead2.googlesyndication.com",
  "https://googleads.g.doubleclick.net",
  "https://tpc.googlesyndication.com",
  "https://www.googletagmanager.com",
  "https://www.clarity.ms",
  // Google's certified CMP (Funding Choices / "Privacy & messaging") consent banner.
  "https://fundingchoicesmessages.google.com",
];

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob: https://unpkg.com ${adOrigins.join(" ")}`,
  `script-src-elem 'self' 'unsafe-inline' blob: https://unpkg.com ${adOrigins.join(" ")}`,
  `style-src 'self' 'unsafe-inline'`,
  `font-src 'self' data:`,
  `img-src 'self' data: blob: https://*.googlesyndication.com https://*.doubleclick.net https://*.google.com https://*.google-analytics.com https://*.clarity.ms`,
  `connect-src 'self' blob: ${supabaseOrigin} ${supabaseWs} https://unpkg.com https://staticimgly.com https://*.googlesyndication.com https://*.doubleclick.net https://*.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com https://fundingchoicesmessages.google.com`,
  `frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://*.googlesyndication.com https://www.google.com https://fundingchoicesmessages.google.com`,
  `worker-src 'self' blob:`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `upgrade-insecure-requests`,
]
  .map((d) => d.replace(/\s+/g, " ").trim())
  .join("; ");

// Phase B: ENFORCING. Validated on prod via Report-Only first; the WASM tools'
// blob: engine load + emscripten eval are now explicitly allowed in the policy.
// To go back to observe-only, switch this to "Content-Security-Policy-Report-Only".
const cspHeaderKey = "Content-Security-Policy";

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
