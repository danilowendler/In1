import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideLayout } from "@/components/guides/guide-layout";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

// Guides are statically known; no unknown slugs.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  const url = absoluteUrl(`/guides/${guide.slug}`);
  return {
    title: `${guide.title} | ${siteConfig.name}`,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      title: guide.title,
      description: guide.description,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideLayout guide={guide} />;
}
