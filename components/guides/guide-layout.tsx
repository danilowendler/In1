import Link from "next/link";
import { Icon } from "@/components/icons";
import { GuideSchema } from "@/components/seo/json-ld";
import { getToolBySlug } from "@/lib/tools/registry";
import type { Guide } from "@/lib/guides/types";
import type { Tool } from "@/lib/tools/types";

const PROSE =
  "mt-8 leading-relaxed text-muted-foreground " +
  "[&_p]:mt-5 " +
  "[&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground " +
  "[&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground " +
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 " +
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 " +
  "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 " +
  "[&_strong]:font-medium [&_strong]:text-foreground";

export function GuideLayout({ guide }: { guide: Guide }) {
  const tools = guide.relatedTools
    .map(getToolBySlug)
    .filter((t): t is Tool => Boolean(t));

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <GuideSchema guide={guide} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          Home
        </Link>
        <span className="px-1.5" aria-hidden="true">
          /
        </span>
        <Link href="/guides" className="transition-colors hover:text-foreground">
          Guides
        </Link>
      </nav>

      <header className="mt-4 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          By the In1 team · {guide.dateLabel} · {guide.readingMinutes} min read
        </p>
      </header>

      <div className={PROSE}>{guide.body}</div>

      {tools.length > 0 && (
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="text-lg font-semibold tracking-tight">Try these tools</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={tool.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">{tool.name}</h3>
                  <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                    {tool.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
