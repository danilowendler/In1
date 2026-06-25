import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description:
    "The terms for using In1's free online tools: acceptable use, your content, disclaimers, and limitation of liability.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 25, 2026";

// Authored as a typed array (same shape as the Privacy Policy page) so the prose
// stays readable and the pattern can be reused for future legal pages.
const SECTIONS: { id: string; heading: string; body: ReactNode }[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of these terms",
    body: (
      <p>
        {`By accessing or using In1 (`}
        <a href="https://www.in1.services">www.in1.services</a>
        {`, the "Site"), you agree to these Terms of Service (the "Terms"). If you do not agree, please do not use the Site. These Terms work together with our `}
        <Link href="/privacy">Privacy Policy</Link>
        {`.`}
      </p>
    ),
  },
  {
    id: "what-in1-is",
    heading: "2. What In1 is",
    body: (
      <p>
        {`In1 is a free collection of online tools for PDF, images, video and audio, text, and the web. Most tools run entirely in your browser. The Site is provided free of charge and is supported by advertising. We may add, change, or remove tools at any time.`}
      </p>
    ),
  },
  {
    id: "eligibility",
    heading: "3. Eligibility",
    body: (
      <p>
        {`You must be at least 13 years old (16 in the European Economic Area) to use the Site. By using it, you confirm that you meet this requirement and that your use complies with the laws that apply to you.`}
      </p>
    ),
  },
  {
    id: "acceptable-use",
    heading: "4. Acceptable use",
    body: (
      <>
        <p>{`You agree not to:`}</p>
        <ul>
          <li>{`use the Site for any unlawful purpose, or to process or distribute content you don't have the right to;`}</li>
          <li>{`attempt to disrupt, overload, or gain unauthorized access to the Site or its infrastructure;`}</li>
          <li>{`bypass or interfere with the Site's security measures or rate limits;`}</li>
          <li>{`use automated means to abuse the service or extract data at scale.`}</li>
        </ul>
        <p>{`We apply rate limits to keep the Site available and fast for everyone.`}</p>
      </>
    ),
  },
  {
    id: "your-content",
    heading: "5. Your content & files",
    body: (
      <p>
        {`You keep all rights to the files and text you process with our tools, and you are solely responsible for them. Most tools process your content locally in your browser. Two tools send data off your device — the URL Shortener and the AI Text Rewriter — as described in our `}
        <Link href="/privacy">Privacy Policy</Link>
        {`. You are responsible for ensuring you have the right to process any content you submit.`}
      </p>
    ),
  },
  {
    id: "url-shortener",
    heading: "6. URL Shortener",
    body: (
      <p>
        {`When you create a short link, you must not point it to content that is illegal, malicious, deceptive, infringing, or otherwise harmful — for example malware, phishing, or spam. We may disable or remove any short link that violates these Terms or that we reasonably believe is abusive, without notice.`}
      </p>
    ),
  },
  {
    id: "ai-rewriter",
    heading: "7. AI Text Rewriter",
    body: (
      <p>
        {`The AI Text Rewriter produces automated output that may be inaccurate, incomplete, or unsuitable for your purpose. You are responsible for reviewing and verifying any output before relying on it, and you must not submit content that is illegal or that you are not permitted to share.`}
      </p>
    ),
  },
  {
    id: "intellectual-property",
    heading: "8. Intellectual property",
    body: (
      <p>
        {`In1 — including its name, logo, design, and the Site's code — is owned by us and protected by applicable laws. These Terms do not grant you any right to our branding. Your files and content remain yours; we claim no ownership over them.`}
      </p>
    ),
  },
  {
    id: "third-parties",
    heading: "9. Third-party services & ads",
    body: (
      <p>
        {`The Site relies on third-party services, including Google AdSense for advertising and the providers listed in our `}
        <Link href="/privacy">Privacy Policy</Link>
        {`. Your use of those services may be subject to their own terms. The Site may also contain links to third-party websites; we are not responsible for their content or practices, and a link is not an endorsement.`}
      </p>
    ),
  },
  {
    id: "disclaimers",
    heading: "10. Disclaimers",
    body: (
      <p>
        {`The Site and all tools are provided "as is" and "as available", without warranties of any kind, whether express or implied, including fitness for a particular purpose, accuracy, or uninterrupted availability. We do not guarantee that the tools will be error-free or that the results will meet your needs.`}
      </p>
    ),
  },
  {
    id: "liability",
    heading: "11. Limitation of liability",
    body: (
      <p>
        {`To the maximum extent permitted by law, In1 and its operators will not be liable for any indirect, incidental, special, or consequential damages, or for any loss of data, profits, or goodwill, arising from your use of (or inability to use) the Site. Because the Site is provided free of charge, our total liability for any claim is limited to the maximum extent the law allows.`}
      </p>
    ),
  },
  {
    id: "changes",
    heading: "12. Changes to the Site and these terms",
    body: (
      <p>
        {`We may modify the Site or these Terms at any time. When we change these Terms, we'll update the "Last updated" date above. Your continued use of the Site after a change means you accept the revised Terms.`}
      </p>
    ),
  },
  {
    id: "termination",
    heading: "13. Termination & suspension",
    body: (
      <p>
        {`We may suspend or restrict access to the Site, in whole or in part, at any time — for example, to address abuse or to protect the Site and its users.`}
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "14. Governing law & contact",
    body: (
      <p>
        {`These Terms are governed by the laws of Brazil, without regard to its conflict-of-law rules. Questions about these Terms? Email us at `}
        <a href="mailto:privacy@in1.services">privacy@in1.services</a>
        {`.`}
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Terms of Service
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
