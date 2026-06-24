import { Icon } from "@/components/icons";
import type { Tool } from "@/lib/tools/types";

interface HeroMarqueeProps {
  tools: Tool[];
  /** How many drifting rows to render. */
  rows?: number;
}

/**
 * Decorative background for the dark hero: several rows of tool chips drifting
 * sideways at different speeds and directions. Purely visual (aria-hidden) and
 * kept subtle via low opacity + a center vignette so the headline stays legible.
 * Animates continuously (the reduced-motion pause was removed by product decision).
 */
export function HeroMarquee({ tools, rows = 5 }: HeroMarqueeProps) {
  // Split the catalog across rows so each row shows a different slice.
  const perRow = Math.ceil(tools.length / rows);
  const lanes = Array.from({ length: rows }, (_, i) =>
    tools.slice(i * perRow, i * perRow + perRow),
  ).filter((lane) => lane.length > 0);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-3 opacity-[0.55] sm:gap-4">
        {lanes.map((lane, i) => {
          // Alternate direction; stagger the speed so rows never sync up.
          const toLeft = i % 2 === 0;
          const duration = 70 + i * 12; // 70s, 82s, 94s, ...
          const loop = [...lane, ...lane];
          return (
            <div key={i} className="flex w-max shrink-0">
              <div
                className="hero-marquee-row flex w-max shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
                style={{
                  animationName: toLeft ? "hero-marquee-left" : "hero-marquee-right",
                  animationDuration: `${duration}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                }}
              >
                {loop.map((tool, j) => (
                  <span
                    key={`${tool.slug}-${j}`}
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/40"
                  >
                    <Icon name={tool.icon} className="size-4 text-white/50" strokeWidth={1.75} />
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Center vignette: darkens the middle so the headline keeps its contrast. */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_50%,rgba(29,29,31,0.88)_0%,rgba(29,29,31,0.55)_45%,transparent_100%)]" />
    </div>
  );
}
