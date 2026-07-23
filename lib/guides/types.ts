import type { ReactNode } from "react";

/** A published Guide article. Authored as typed data with a JSX body, like the
 *  tools registry — no markdown/MDX tooling. */
export interface Guide {
  slug: string;
  /** H1 + card title + JSON-LD headline. */
  title: string;
  /** Meta description + index card subtitle. */
  description: string;
  /** ISO date, e.g. "2026-06-18" (used for JSON-LD + sorting). */
  datePublished: string;
  /** Human date, e.g. "June 18, 2026" (shown in the byline). */
  dateLabel: string;
  /** Author-set reading estimate in minutes (the body is JSX, not word-counted). */
  readingMinutes: number;
  /** Tool slugs this guide relates to (cross-links both ways). */
  relatedTools: string[];
  /** The article content as JSX (rendered inside the prose container). */
  body: ReactNode;
}
