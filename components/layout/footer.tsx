import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { FooterNewsletter } from "@/components/layout/footer-newsletter";
import { getActiveCategories, getToolsByCategory } from "@/lib/tools/registry";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const categories = getActiveCategories();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand — echoes the hero headline (In1 = "all in one") */}
          <div className="lg:max-w-xs">
            <Link href="/" aria-label={siteConfig.name} className="block max-w-[18rem]">
              <span className="block text-2xl font-semibold leading-[1.15] tracking-tight text-balance">
                Every tool you need, <Logo className="text-2xl" /> place
              </span>
            </Link>
          </div>

          {/* Tool columns by category (registry-driven) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {categories.map((c) => (
              <div key={c.slug}>
                <p className="text-sm font-semibold whitespace-nowrap">{c.label}</p>
                <ul className="mt-3 space-y-2.5">
                  {getToolsByCategory(c.slug).map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/${t.slug}`}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {t.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:w-80">
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
