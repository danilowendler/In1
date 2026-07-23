import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Tool } from "@/lib/tools/types";
import type { Guide } from "@/lib/guides/types";

/** Renders a JSON-LD <script> tag. Safe to use inside Server Components. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      }}
    />
  );
}

export function ToolSchema({ tool }: { tool: Tool }) {
  const url = absoluteUrl(`/${tool.slug}`);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: tool.name,
          url,
          description: tool.metaDescription,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any (web-based)",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tool.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: `How to use ${tool.name}`,
          step: tool.howTo.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: tool.name, item: url },
          ],
        }}
      />
    </>
  );
}

export function GuideSchema({ guide }: { guide: Guide }) {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const publisher = {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          datePublished: guide.datePublished,
          author: publisher,
          publisher,
          mainEntityOfPage: url,
          url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
            { "@type": "ListItem", position: 3, name: guide.title, item: url },
          ],
        }}
      />
    </>
  );
}
