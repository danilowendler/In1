import Link from "next/link";
import { HomeTools } from "@/components/home-tools";
import { HeroMarquee } from "@/components/hero-marquee";
import { HomeEditorial } from "@/components/home-editorial";
import { ExploreToolsButton } from "@/components/explore-tools-button";
import { Logo } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllTools } from "@/lib/tools/registry";

export default function Home() {
  const tools = getAllTools();

  return (
    <>
      {/* Hero — full-bleed dark tile (DESIGN-apple: product-tile-dark) */}
      <section className="relative overflow-hidden bg-[#1d1d1f] text-white">
        <HeroMarquee tools={tools} rows={5} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Every tool you need,{" "}
            <Logo className="text-5xl sm:text-6xl lg:text-7xl" /> place
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 text-pretty">
            Process PDFs, images, videos and text right in your browser. No uploads,
            no waiting, no hassle.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ExploreToolsButton />
            <Link
              href="/all"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 px-6 text-[15px]",
              )}
            >
              See all
            </Link>
          </div>
        </div>
      </section>

      {/* Tools — light section */}
      <div
        id="tools"
        className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16 sm:py-20"
      >
        <HomeTools tools={tools} />
      </div>

      {/* Editorial — what In1 is, how it works, why (original prose) */}
      <HomeEditorial />
    </>
  );
}
