"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Hero CTA that smooth-scrolls to the tools section. A button (not a hash link)
 * so it animates the scroll and never writes "#tools" to the URL — which, with a
 * Next <Link href="#tools">, would accumulate ("#tools#tools…") and persist on
 * reload. Relies on the target's `scroll-mt-16` to clear the header.
 */
export function ExploreToolsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })
      }
      className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-[15px]")}
    >
      Explore tools
    </button>
  );
}
