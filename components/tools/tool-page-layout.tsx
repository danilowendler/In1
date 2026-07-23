import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";
import { AdSlot } from "@/components/ads/ad-slot";
import { PremiumCta } from "@/components/layout/premium-cta";
import { ToolProcessor } from "@/components/tools/tool-processor";
import { ToolSchema } from "@/components/seo/json-ld";
import { Reveal } from "@/components/reveal";
import { RelatedGuides } from "@/components/guides/related-guides";
import { getCategory, getToolsByCategory } from "@/lib/tools/registry";
import type { Tool } from "@/lib/tools/types";

export function ToolPageLayout({ tool }: { tool: Tool }) {
  const category = getCategory(tool.category);
  const related = getToolsByCategory(tool.category).filter((t) => t.slug !== tool.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-12">
      <ToolSchema tool={tool} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-foreground">
              {category.label}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </>
        )}
        <span className="text-foreground">{tool.name}</span>
      </nav>

      {/* Hero */}
      <header className="mb-6">
        <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon name={tool.icon} className="size-6" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{tool.h1}</h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{tool.intro}</p>
      </header>

      {/* The tool itself */}
      <Card className="mb-6 p-4 sm:p-6">
        <ToolProcessor tool={tool} />
      </Card>

      {/* Back to the category — predictable navigation + internal linking */}
      {category && (
        <Link
          href={`/category/${category.slug}`}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mb-8 rounded-full")}
        >
          <ArrowLeft className="size-4" />
          All {category.label} tools
        </Link>
      )}

      <AdSlot className="mb-10" />

      {/* How-to */}
      <Reveal>
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">How to use {tool.name}</h2>
          <ol className="space-y-4">
            {tool.howTo.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium">{step.name}</p>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* Long-form content — each section reveals as it scrolls into view */}
      <section className="mb-10 space-y-8">
        {tool.sections.map((section, i) => (
          <Reveal key={i}>
            <div>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <p className="leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <PremiumCta source={tool.slug} />
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
          <Accordion multiple={false}>
            {tool.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </Reveal>

      {/* Related guides — editorial cross-links (renders only when the tool has any) */}
      <RelatedGuides toolSlug={tool.slug} />

      {/* Related tools — internal linking for SEO */}
      {related.length > 0 && (
        <Reveal>
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="mb-4 text-lg font-semibold">More {category?.label} tools</h2>
            <ul className="flex flex-wrap gap-2">
              {related.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/${t.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-muted"
                  >
                    <Icon name={t.icon} className="size-4 text-muted-foreground" />
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}
    </article>
  );
}
