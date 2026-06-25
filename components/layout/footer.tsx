import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { FooterNewsletter } from "@/components/layout/footer-newsletter";
import { getActiveCategories, getToolsByCategory } from "@/lib/tools/registry";
import { siteConfig } from "@/lib/site";

const MAX_LINKS_PER_CATEGORY = 5;

export function Footer() {
  const categories = getActiveCategories();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Brand */}
        <Link href="/" aria-label={siteConfig.name} className="block max-w-[16rem] pb-10">
          <span className="block text-sm leading-relaxed text-white/80">
            Every tool you need, <Logo className="text-sm font-semibold text-white" /> place
          </span>
        </Link>

        {/* Category columns — capped, with a "See all" link to each category */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const tools = getToolsByCategory(c.slug);
            return (
              <div key={c.slug}>
                <p className="text-sm font-semibold">{c.label}</p>
                <ul className="mt-3 space-y-2.5">
                  {tools.slice(0, MAX_LINKS_PER_CATEGORY).map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/${t.slug}`}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {t.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/category/${c.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#2997ff] transition-opacity hover:opacity-80"
                    >
                      See all
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

        {/* Newsletter — below the columns */}
        <div className="mt-12 border-t border-white/10 pt-12">
          <div className="max-w-md">
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
