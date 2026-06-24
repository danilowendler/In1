"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, Crosshair, X } from "lucide-react";
import { Icon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { Tool } from "@/lib/tools/types";

interface ToolPoolProps {
  tools: Tool[];
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

/** Phyllotaxis (sunflower) layout: an organically packed cluster around (0,0). */
function spiralPos(i: number, spacing: number) {
  const r = spacing * Math.sqrt(i + 0.5);
  const a = i * GOLDEN_ANGLE;
  return { x: r * Math.cos(a), y: r * Math.sin(a) };
}

function matchesQuery(tool: Tool, q: string) {
  if (!q) return true;
  const hay = [
    tool.name,
    tool.shortDescription,
    tool.category,
    ...(tool.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

/** Euclidean distance between two points (used for pinch-zoom). */
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function ToolPool({ tools }: ToolPoolProps) {
  const [query, setQuery] = useState("");
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [dragging, setDragging] = useState(false);

  // Gesture bookkeeping (refs so move handlers never read stale state).
  const canvasRef = useRef<HTMLElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragStart = useRef({ px: 0, py: 0, panX: 0, panY: 0 });
  const pinchStart = useRef<{ dist: number; scale: number } | null>(null);
  const moved = useRef(false);
  // Mirror pan/scale into refs so gesture handlers always read fresh values.
  const panRef = useRef(pan);
  const scaleRef = useRef(scale);

  const applyPan = useCallback((p: { x: number; y: number }) => {
    panRef.current = p;
    setPan(p);
  }, []);
  const applyScale = useCallback((s: number) => {
    const clamped = Math.min(1.6, Math.max(0.35, s));
    scaleRef.current = clamped;
    setScale(clamped);
  }, []);

  // Stable "all tools" positions, keyed by the tool's original index.
  const fullPos = useMemo(
    () => tools.map((_, i) => spiralPos(i, 150)),
    [tools],
  );

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const matchIndex = useMemo(() => {
    const map = new Map<string, number>();
    if (!searching) return map;
    let k = 0;
    for (const t of tools) {
      if (matchesQuery(t, q)) map.set(t.slug, k++);
    }
    return map;
  }, [tools, q, searching]);

  const matchCount = searching ? matchIndex.size : tools.length;

  // Wheel = zoom (Maps-style). Native non-passive listener so we can stop the
  // page from scrolling while the cursor is over the canvas.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 0.9 : 1.1; // scroll out → zoom out
      applyScale(scaleRef.current * factor);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [applyScale]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      // Second finger down → start a pinch (this is never a tap).
      const [a, b] = [...pointers.current.values()];
      pinchStart.current = { dist: distance(a, b), scale: scaleRef.current };
      moved.current = true;
      setDragging(false);
    } else if (pointers.current.size === 1) {
      // One pointer: potential tap or drag. Don't capture yet so a tap can
      // still reach the tool card's <Link>.
      moved.current = false;
      dragStart.current = {
        px: e.clientX,
        py: e.clientY,
        panX: panRef.current.x,
        panY: panRef.current.y,
      };
    }
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const p = pointers.current.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      // Two fingers → pinch-zoom the canvas (mirrors the desktop wheel zoom).
      if (pointers.current.size >= 2 && pinchStart.current) {
        const [a, b] = [...pointers.current.values()];
        const ratio = distance(a, b) / (pinchStart.current.dist || 1);
        applyScale(pinchStart.current.scale * ratio);
        return;
      }

      // One pointer → pan (after a small threshold so taps still register).
      const dx = e.clientX - dragStart.current.px;
      const dy = e.clientY - dragStart.current.py;
      if (!moved.current && Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
      if (!moved.current) {
        moved.current = true;
        setDragging(true);
        (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      }
      applyPan({ x: dragStart.current.panX + dx, y: dragStart.current.panY + dy });
    },
    [applyPan, applyScale],
  );

  const endDrag = useCallback((e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    const el = e.currentTarget as HTMLElement;
    if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 1) {
      // One finger remains after a pinch → rebase the pan origin so it doesn't jump.
      const [only] = [...pointers.current.values()];
      dragStart.current = { px: only.x, py: only.y, panX: panRef.current.x, panY: panRef.current.y };
      moved.current = true;
    }
    if (pointers.current.size === 0) setDragging(false);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    applyPan({ x: 0, y: 0 }); // re-center so matches gather in view
  };

  return (
    <section
      ref={canvasRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative h-[calc(100dvh-3rem)] w-full touch-none select-none overflow-hidden bg-secondary"
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      {/* Dotted "map" backdrop that drifts with the pan. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: `${26 * scale}px ${26 * scale}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      />

      {/* Pan layer — translated as a whole; nodes animate relative to it. */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          transformOrigin: "center",
          transition: dragging ? "none" : "transform 650ms cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        {tools.map((tool, i) => {
          const isMatch = !searching || matchIndex.has(tool.slug);
          const pos =
            searching && isMatch
              ? spiralPos(matchIndex.get(tool.slug)!, 165)
              : fullPos[i];

          return (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              onClick={(e) => {
                if (moved.current) e.preventDefault(); // it was a drag, not a click
              }}
              draggable={false}
              tabIndex={isMatch ? 0 : -1}
              aria-hidden={!isMatch}
              className="group absolute left-1/2 top-1/2 w-[200px]"
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${isMatch ? 1 : 0.55})`,
                opacity: isMatch ? 1 : 0,
                pointerEvents: isMatch ? "auto" : "none",
                transition:
                  "transform 700ms cubic-bezier(0.22,0.61,0.36,1), opacity 450ms ease",
                zIndex: isMatch ? 1 : 0,
              }}
            >
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all group-hover:border-primary/50 group-hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={tool.icon} className="size-5" />
                  </span>
                  {tool.processing === "client" && (
                    <Badge variant="secondary" className="text-[10px]">
                      No upload
                    </Badge>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">{tool.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {tool.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Floating search — Maps-style, centered at the top. */}
      <div className="pointer-events-none absolute inset-x-0 top-6 z-20 flex flex-col items-center px-4">
        <div className="pointer-events-auto flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2.5 shadow-lg backdrop-blur-xl">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search all tools…"
            aria-label="Search all tools"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {searching && (
            <button
              type="button"
              onClick={() => handleSearch("")}
              aria-label="Clear search"
              className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
        <p className="pointer-events-none mt-2 text-xs text-muted-foreground">
          {searching
            ? `${matchCount} ${matchCount === 1 ? "tool" : "tools"} found`
            : "Drag to explore · search to filter"}
        </p>
      </div>

      {/* Recenter — brings the cluster back into view and resets zoom. */}
      {(pan.x !== 0 || pan.y !== 0 || scale !== 1) && (
        <button
          type="button"
          onClick={() => {
            applyPan({ x: 0, y: 0 });
            applyScale(1);
          }}
          aria-label="Recenter"
          className="absolute bottom-6 right-6 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-muted"
        >
          <Crosshair className="size-5" />
        </button>
      )}
    </section>
  );
}
