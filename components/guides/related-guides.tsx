import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGuidesForTool } from "@/lib/guides";

/** Compact "Related guides" block for a tool page. Renders nothing when the tool
 *  has no related guides. */
export function RelatedGuides({ toolSlug }: { toolSlug: string }) {
  const guides = getGuidesForTool(toolSlug);
  if (guides.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-border bg-secondary/50 p-6">
      <h2 className="text-lg font-semibold tracking-tight">Related guides</h2>
      <ul className="mt-4 space-y-4">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="group flex items-start gap-2">
              <ArrowRight className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                  {g.title}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {g.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
