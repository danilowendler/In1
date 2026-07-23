import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, ShieldCheck, Handshake, Bug } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Get in touch with In1 — support, privacy requests, partnerships, feedback and bug reports. We read every message.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

const EMAIL = "contactin1services@gmail.com";

const REASONS = [
  {
    icon: MessageCircle,
    title: "Support & questions",
    text: "Stuck on a tool or not sure how something works? We're happy to help.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & your data",
    text: "Requests about your personal data or anything in our Privacy Policy.",
  },
  {
    icon: Handshake,
    title: "Partnerships & advertising",
    text: "Interested in working with us or advertising on In1? Let's talk.",
  },
  {
    icon: Bug,
    title: "Feedback & bugs",
    text: "Found something broken, or have an idea for a new tool? Tell us.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Have a question, found a bug, or want to work with us? Email us — we read
          every message.
        </p>
      </header>

      {/* Email card */}
      <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="size-5" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">Email us at</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-lg font-semibold tracking-tight text-primary underline underline-offset-2"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* What to reach out about */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">What to reach out about</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-3 text-sm font-semibold tracking-tight">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Response time */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Response time</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          We read every message and aim to reply within a few business days. For data
          or privacy requests, we respond within the time required by applicable law.
        </p>
      </section>

      <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
        See also our{" "}
        <Link
          href="/privacy"
          className="font-medium text-primary underline underline-offset-2"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/terms-of-service"
          className="font-medium text-primary underline underline-offset-2"
        >
          Terms of Service
        </Link>
        .
      </p>
    </div>
  );
}
