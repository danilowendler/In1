import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Guides | ${siteConfig.name}`,
  description:
    "Practical guides on PDFs, images, video and privacy — how to get everyday tasks done, and how the tools actually work.",
  alternates: { canonical: "/guides" },
  robots: { index: true, follow: true },
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Guides</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Practical, no-nonsense guides for PDFs, images, video and your privacy —
          and how In1&rsquo;s tools help you get them done.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {guide.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {guide.description}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              {guide.dateLabel} · {guide.readingMinutes} min read
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
