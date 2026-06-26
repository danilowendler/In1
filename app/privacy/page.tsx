import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "How In1 handles your data: most tools run in your browser and files are never uploaded. Learn about cookieless analytics, advertising, and your privacy rights.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 25, 2026";

// Authored as a typed array so the long prose stays readable and the same
// shape can be cloned for a Terms of Service / Cookie Policy page later.
const SECTIONS: { id: string; heading: string; body: ReactNode }[] = [
  {
    id: "who-we-are",
    heading: "1. Who we are",
    body: (
      <>
        <p>
          {`In1 ("In1", "we", "us", or "our") is a free collection of online tools — for PDF, images, video and audio, text, and the web — operated from Brazil. This Privacy Policy explains what information we collect when you use `}
          <a href="https://www.in1.services">www.in1.services</a>
          {` (the "Site"), how we use it, and the choices you have.`}
        </p>
        <p>
          {`Most of our tools run entirely inside your browser, so for the majority of what you do here, your files never reach our servers.`}
        </p>
      </>
    ),
  },
  {
    id: "short-version",
    heading: "2. The short version",
    body: (
      <ul>
        <li>{`Most tools process your files locally in your browser — they are never uploaded.`}</li>
        <li>{`You don't need an account to use the tools.`}</li>
        <li>{`We collect an email address only if you choose to give us one (for example, our newsletter).`}</li>
        <li>{`We use privacy-friendly, cookieless analytics to understand aggregate traffic.`}</li>
        <li>{`We show ads through Google AdSense, which uses cookies (see "Advertising" below).`}</li>
        <li>{`The only tools that send data off your device are the AI Text Rewriter and the URL Shortener, described below.`}</li>
      </ul>
    ),
  },
  {
    id: "information-we-collect",
    heading: "3. Information we collect",
    body: (
      <>
        <p>
          <strong>Information you provide.</strong>
        </p>
        <ul>
          <li>{`Email address — if you subscribe to our newsletter or submit a contact or lead form.`}</li>
          <li>{`Links you shorten — when you use the URL Shortener, we store the destination URL you submit so the short link can redirect to it.`}</li>
        </ul>
        <p>
          <strong>Content you process.</strong>
          {` Files and text you process with our tools are handled in your browser and are not uploaded to us — with two exceptions:`}
        </p>
        <ul>
          <li>{`AI Text Rewriter — the text you submit is sent to our AI provider (via Vercel AI Gateway) to generate the rewritten result.`}</li>
          <li>{`URL Shortener — as noted above, the destination URL you submit is stored.`}</li>
        </ul>
        <p>
          <strong>Collected automatically.</strong>
        </p>
        <ul>
          <li>{`Usage analytics — we use Vercel Web Analytics, which is privacy-friendly, does not use cookies, and does not collect personally identifiable information. It gives us aggregate metrics such as page views.`}</li>
          <li>{`Server logs — like most websites, our servers record technical data such as your IP address, browser type, and a request identifier. We use this to keep the Site secure and to apply rate limits that prevent abuse.`}</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "4. Cookies & similar technologies",
    body: (
      <p>
        {`Our own analytics do not use cookies. The cookies you may encounter on the Site come primarily from advertising (see below). You can control or delete cookies through your browser settings. To learn how Google uses cookies in advertising, see `}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&rsquo;s advertising policies
        </a>
        {`.`}
      </p>
    ),
  },
  {
    id: "advertising",
    heading: "5. Advertising — Google AdSense",
    body: (
      <>
        <p>{`We use Google AdSense to display ads, which is what keeps In1 free to use.`}</p>
        <ul>
          <li>{`Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.`}</li>
          <li>{`Google's use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve ads to you based on those visits.`}</li>
          <li>
            {`You can opt out of personalized advertising by visiting `}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            {`, or opt out of third-party vendors' use of cookies at `}
            <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>
            {` and `}
            <a
              href="https://www.youronlinechoices.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              youronlinechoices.eu
            </a>
            {`.`}
          </li>
          <li>{`If you are in the European Economic Area, the UK, or Switzerland, we will ask for your consent before using advertising cookies, through a consent prompt.`}</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-parties",
    heading: "6. Third-party services",
    body: (
      <>
        <p>{`We rely on a few trusted providers to run In1:`}</p>
        <ul>
          <li>{`Google AdSense — serves the ads that keep In1 free.`}</li>
          <li>{`Supabase — database hosting for shortened links and any email you submit.`}</li>
          <li>{`Vercel — hosting, the cookieless analytics, and the AI Gateway used by the AI Text Rewriter.`}</li>
          <li>{`AI model provider — processes the text you submit to the AI Text Rewriter, via Vercel AI Gateway.`}</li>
          <li>{`Content delivery networks (unpkg, staticimgly) — deliver the in-browser processing engines, such as the video/audio converter and the background remover. When your browser downloads these engines, the CDN receives your IP address, but not your file content.`}</li>
        </ul>
        <p>{`Each provider processes data only as needed to provide its part of the service.`}</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "7. How we use information",
    body: (
      <ul>
        <li>{`Provide, operate, and improve the tools.`}</li>
        <li>{`Keep the Site secure and prevent abuse, including rate limiting.`}</li>
        <li>{`Send you our newsletter, if you subscribed — you can unsubscribe at any time.`}</li>
        <li>{`Display advertising.`}</li>
        <li>{`Understand aggregate, anonymous usage.`}</li>
      </ul>
    ),
  },
  {
    id: "retention",
    heading: "8. Data retention",
    body: (
      <p>
        {`We keep shortened links and any email you submit until you ask us to delete them, or until they are no longer needed for the purpose for which they were collected. Server logs are kept only for a short period for security and troubleshooting.`}
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "9. Your rights",
    body: (
      <>
        <p>{`Depending on where you live, you may have rights over your personal data:`}</p>
        <ul>
          <li>{`EEA & UK (GDPR) — access, rectification, erasure, restriction, portability, and objection.`}</li>
          <li>{`California (CCPA/CPRA) — to know, delete, and correct your information, and to opt out of the "sale" or "sharing" of personal information. We do not sell your personal information.`}</li>
          <li>{`Brazil (LGPD) — confirmation, access, correction, anonymization, portability, and deletion.`}</li>
        </ul>
        <p>
          {`To exercise any of these rights, email us at `}
          <a href="mailto:contactin1services@gmail.com">contactin1services@gmail.com</a>
          {` and we'll respond within the time required by applicable law.`}
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "10. Data security",
    body: (
      <p>
        {`We protect the Site with HTTPS, a strict Content-Security-Policy, HTTP security headers, and rate limiting. No method of transmission or storage is ever completely secure, but we work to protect your information and review our safeguards regularly.`}
      </p>
    ),
  },
  {
    id: "children",
    heading: "11. Children's privacy",
    body: (
      <p>
        {`In1 is not directed to children under 13 (or under 16 in the EEA), and we do not knowingly collect personal data from them. If you believe a child has provided us personal data, contact us and we will delete it.`}
      </p>
    ),
  },
  {
    id: "international",
    heading: "12. International data transfers",
    body: (
      <p>
        {`In1 is operated from Brazil and uses providers that may process data on servers in other countries, including the United States. Where required, we rely on appropriate safeguards for these transfers.`}
      </p>
    ),
  },
  {
    id: "changes",
    heading: "13. Changes to this policy",
    body: (
      <p>
        {`We may update this Privacy Policy from time to time. When we do, we'll revise the "Last updated" date above and highlight material changes where appropriate. Your continued use of the Site after an update means you accept the revised policy.`}
      </p>
    ),
  },
  {
    id: "contact",
    heading: "14. Contact",
    body: (
      <p>
        {`Questions about this policy or your data? Email us at `}
        <a href="mailto:contactin1services@gmail.com">contactin1services@gmail.com</a>
        {`.`}
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="mt-10 space-y-10">
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
            <div className="mt-3 space-y-4 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
