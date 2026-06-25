import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

// EEA + UK + Switzerland — where GDPR-style consent is required. Outside these
// regions Consent Mode stays granted, so ads run without a banner.
const CONSENT_REGIONS = [
  // EU 27
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA (non-EU)
  "IS", "LI", "NO",
  // UK + Switzerland
  "GB", "CH",
];

// Google Consent Mode v2 defaults: deny ad/analytics storage in the consent
// regions until the user accepts via Google's CMP (served by the AdSense tag).
// Must run before any Google tag, hence beforeInteractive.
const consentDefault = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  wait_for_update:500,
  region:${JSON.stringify(CONSENT_REGIONS)}
});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);
`;

/**
 * Loads analytics + ad scripts only when their env vars are configured, so
 * local development and unconfigured deploys ship nothing extra. When a Google
 * tag (AdSense or GA) is enabled, Google Consent Mode v2 defaults are set first
 * so Google's certified CMP can manage EEA/UK consent.
 */
export function Analytics() {
  const googleTagEnabled = Boolean(ADSENSE_CLIENT || GA_ID);

  return (
    <>
      {/* Consent Mode v2 defaults — inline so they run on parse, before the
          afterInteractive Google tags below. (Avoids next/script's
          beforeInteractive, which is restricted in the App Router.) */}
      {googleTagEnabled && (
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{ __html: consentDefault }}
        />
      )}

      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      )}

      {ADSENSE_CLIENT && (
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        />
      )}
    </>
  );
}
