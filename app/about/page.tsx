import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    "In1 is a free collection of browser-based tools for PDFs, images, video, audio, text and the web — private by design, no sign-up, no watermarks.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
};

const SECTIONS: { id: string; heading: string; body: ReactNode }[] = [
  {
    id: "what-is-in1",
    heading: "1. What is In1?",
    body: (
      <>
        <p>
          {`In1 is a free collection of online tools that handle the small, everyday jobs you shouldn't have to pay for or install an app to do. We cover PDFs, images, video and audio, text, the web, and everyday calculators — dozens of focused tools in one place, all reachable from a single search box.`}
        </p>
        <p>
          {`There's nothing to install and no account to create. Open a tool, use it, and you're done. Every tool does one job and does it well, so you're never hunting through menus or fighting a bloated interface.`}
        </p>
      </>
    ),
  },
  {
    id: "how-it-works",
    heading: "2. How it works: your files stay on your device",
    body: (
      <>
        <p>
          {`Almost every In1 tool runs entirely inside your browser. When you compress an image or merge a PDF, the work happens on your own device — your files are never uploaded to a server. That means three things at once: your documents stay private, there's no waiting for uploads and downloads, and the tools handle large files without hitting a server limit.`}
        </p>
        <p>
          {`Two tools are the exception, and we're upfront about them: the URL Shortener stores the link you create so it can redirect, and the AI Text Rewriter sends your text to an AI provider to generate the result. Everything else stays on your device. The full details are in our `}
          <Link href="/privacy">Privacy Policy</Link>
          {`.`}
        </p>
      </>
    ),
  },
  {
    id: "why-free",
    heading: "3. Why In1 is free",
    body: (
      <p>
        {`In1 is supported by advertising. That's the whole business model — no paywalls, no "premium" tier that locks the useful features behind a subscription, and no per-file charges. Ads are what let us keep every tool free and unlimited for everyone, and they're why we can keep adding new tools without asking you to pay.`}
      </p>
    ),
  },
  {
    id: "what-we-value",
    heading: "4. What we stand for",
    body: (
      <>
        <p>{`We build In1 around a few simple principles:`}</p>
        <ul>
          <li>{`Privacy first — your files stay on your device wherever it's technically possible.`}</li>
          <li>{`No sign-up — nothing to register, and no email required to use a tool.`}</li>
          <li>{`No watermarks and no artificial limits on the free tools.`}</li>
          <li>{`Fast — no queues and no waiting on uploads.`}</li>
          <li>{`Works anywhere — any modern browser, on desktop or mobile.`}</li>
        </ul>
      </>
    ),
  },
  {
    id: "who-we-are",
    heading: "5. Who we are",
    body: (
      <p>
        {`In1 is built and operated from Brazil, with the product, content and tools in English for a global audience. We're a small team focused on doing a few things well: making everyday tasks quick, private and free. As the project grows we'll keep adding tools and improving the ones we already have — guided by what people actually find useful.`}
      </p>
    ),
  },
  {
    id: "get-in-touch",
    heading: "6. Get in touch",
    body: (
      <p>
        {`Have a question, some feedback, or a tool you wish existed? We'd love to hear from you — reach us on our `}
        <Link href="/contact">Contact page</Link>
        {`. Or jump straight in and `}
        <Link href="/all">browse all the tools</Link>
        {`.`}
      </p>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About In1
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Free, private, browser-based tools for the things you do every day.
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
