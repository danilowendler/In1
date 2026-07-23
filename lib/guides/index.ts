import type { Guide } from "@/lib/guides/types";
import { guide as compressPdf } from "@/lib/guides/articles/compress-pdf-without-losing-quality";
import { guide as pngJpgWebp } from "@/lib/guides/articles/png-vs-jpg-vs-webp";
import { guide as removeBackground } from "@/lib/guides/articles/remove-image-background-free";
import { guide as videoToGif } from "@/lib/guides/articles/convert-video-to-gif";
import { guide as pdfPages } from "@/lib/guides/articles/merge-split-organize-pdf-pages";
import { guide as removeExif } from "@/lib/guides/articles/remove-exif-metadata-from-photos";

const guides: Guide[] = [
  compressPdf,
  pngJpgWebp,
  removeBackground,
  videoToGif,
  pdfPages,
  removeExif,
];

// Newest first (by ISO datePublished).
const sorted = [...guides].sort((a, b) =>
  a.datePublished < b.datePublished ? 1 : -1,
);

export function getAllGuides(): Guide[] {
  return sorted;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** Guides that reference the given tool slug (for tool-page cross-links). */
export function getGuidesForTool(toolSlug: string): Guide[] {
  return sorted.filter((g) => g.relatedTools.includes(toolSlug));
}
