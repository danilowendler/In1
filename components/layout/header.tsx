import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { MobileNav, type NavItem } from "@/components/layout/mobile-nav";
import { getActiveCategories } from "@/lib/tools/registry";
import { siteConfig } from "@/lib/site";

export function Header() {
  const categories = getActiveCategories();

  const navItems: NavItem[] = [
    { href: "/", label: "All tools" },
    ...categories.map((c) => ({ href: `/category/${c.slug}`, label: c.label })),
    { href: "/guides", label: "Guides" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/80 text-white backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-12 max-w-5xl items-center gap-6 px-4">
        <Link href="/" aria-label={siteConfig.name} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 text-sm sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
