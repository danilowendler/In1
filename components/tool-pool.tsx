"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { Search, Crosshair, X } from "lucide-react";
import { Icon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { Tool } from "@/lib/tools/types";

interface ToolPoolProps {
  tools: Tool[];
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const MIN_SCALE = 0.35;
const MAX_SCALE = 1.6;
const PAN_TRANSITION = "transform 650ms cubic-bezier(0.22,0.61,0.36,1)";

// useLayoutEffect on the client, useEffect on the server (avoids the SSR warning
// while still syncing the DOM before paint in the browser).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const clampScale = (s: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));

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
  // Committed view — the source of truth for the recenter button + animated
  // (search / recenter) moves. During a gesture the view is driven imperatively
  // (see applyView) and only committed back to state when the gesture ends, so
  // panning/zooming never re-renders the 77 cards per frame.
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  // DOM nodes we transform imperatively.
  const canvasRef = useRef<HTMLElement>(null);
  const panLayerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Live view values (lead the React state during a gesture).
  const panRef = useRef(pan);
  const scaleRef = useRef(scale);

  // Gesture bookkeeping.
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragStart = useRef({ px: 0, py: 0, panX: 0, panY: 0 });
  const pinchStart = useRef<{ dist: number; scale: number } | null>(null);
  const moved = useRef(false);
  const gesturing = useRef(false);
  const rafId = useRef<number | null>(null);
  const wheelCommit = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Write the current pan/scale straight to the DOM (no React render).
  const applyView = useCallback((animate: boolean) => {
    const x = panRef.current.x;
    const y = panRef.current.y;
    const s = scaleRef.current;
    const layer = panLayerRef.current;
    if (layer) {
      layer.style.transition = animate ? PAN_TRANSITION : "none";
      layer.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    }
    const bg = backdropRef.current;
    if (bg) {
      bg.style.backgroundSize = `${26 * s}px ${26 * s}px`;
      bg.style.backgroundPosition = `${x}px ${y}px`;
    }
  }, []);

  // Coalesce gesture updates to at most one DOM write per frame.
  const scheduleApply = useCallback(() => {
    if (rafId.current != null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      applyView(false);
    });
  }, [applyView]);

  // Push the live view back into React state (recenter button + base for the
  // next animated move). Called when a gesture finishes.
  const commitView = useCallback(() => {
    setPan({ x: panRef.current.x, y: panRef.current.y });
    setScale(scaleRef.current);
  }, []);

  const setGrabbing = useCallback((on: boolean) => {
    const el = canvasRef.current;
    if (el) el.style.cursor = on ? "grabbing" : "";
  }, []);

  // Sync the DOM from committed state for discrete, animated moves (mount,
  // search re-center, recenter button). Gestures bypass this entirely.
  useIsoLayoutEffect(() => {
    panRef.current = pan;
    scaleRef.current = scale;
    applyView(true);
  }, [pan, scale, applyView]);

  // Stable "all tools" positions, keyed by the tool's original index.
  const fullPos = useMemo(() => tools.map((_, i) => spiralPos(i, 150)), [tools]);

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
  // page from scrolling while the cursor is over the canvas. Applied imperatively
  // and committed to state shortly after the wheel goes quiet.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 0.9 : 1.1; // scroll out → zoom out
      scaleRef.current = clampScale(scaleRef.current * factor);
      scheduleApply();
      if (wheelCommit.current) clearTimeout(wheelCommit.current);
      wheelCommit.current = setTimeout(commitView, 140);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [scheduleApply, commitView]);

  // Cleanup any pending frame/timer on unmount.
  useEffect(() => {
    return () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
      if (wheelCommit.current) clearTimeout(wheelCommit.current);
    };
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.current.size === 2) {
        // Second finger down → start a pinch (this is never a tap).
        const [a, b] = [...pointers.current.values()];
        pinchStart.current = { dist: distance(a, b), scale: scaleRef.current };
        moved.current = true;
        gesturing.current = true;
        setGrabbing(true);
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
    },
    [setGrabbing],
  );

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
        scaleRef.current = clampScale(pinchStart.current.scale * ratio);
        scheduleApply();
        return;
      }

      // One pointer → pan (after a small threshold so taps still register).
      const dx = e.clientX - dragStart.current.px;
      const dy = e.clientY - dragStart.current.py;
      if (!moved.current && Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
      if (!moved.current) {
        moved.current = true;
        gesturing.current = true;
        setGrabbing(true);
        (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      }
      panRef.current = {
        x: dragStart.current.panX + dx,
        y: dragStart.current.panY + dy,
      };
      scheduleApply();
    },
    [scheduleApply, setGrabbing],
  );

  const endDrag = useCallback(
    (e: React.PointerEvent) => {
      pointers.current.delete(e.pointerId);
      const el = e.currentTarget as HTMLElement;
      if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
      if (pointers.current.size < 2) pinchStart.current = null;
      if (pointers.current.size === 1) {
        // One finger remains after a pinch → rebase the pan origin so it doesn't jump.
        const [only] = [...pointers.current.values()];
        dragStart.current = {
          px: only.x,
          py: only.y,
          panX: panRef.current.x,
          panY: panRef.current.y,
        };
        moved.current = true;
      }
      if (pointers.current.size === 0 && gesturing.current) {
        gesturing.current = false;
        setGrabbing(false);
        if (rafId.current != null) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
        commitView(); // sync React state with where the gesture left the view
      }
    },
    [commitView, setGrabbing],
  );

  const handleSearch = (value: string) => {
    setQuery(value);
    setPan({ x: 0, y: 0 }); // re-center so matches gather in view (animated)
  };

  const recenter = () => {
    setPan({ x: 0, y: 0 });
    setScale(1);
  };

  return (
    <section
      ref={canvasRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative h-[calc(100dvh-3rem)] w-full cursor-grab touch-none select-none overflow-hidden bg-secondary"
    >
      {/* Dotted "map" backdrop that drifts with the pan (updated imperatively). */}
      <div
        ref={backdropRef}
        className="pointer-events-none absolute inset-0 will-change-[background-position]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "0px 0px",
        }}
      />

      {/* Pan layer — translated/scaled as a whole (imperatively during gestures);
          nodes animate relative to it. */}
      <div
        ref={panLayerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "center" }}
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
            : "Drag to explore · pinch or scroll to zoom"}
        </p>
      </div>

      {/* Recenter — brings the cluster back into view and resets zoom. */}
      {(pan.x !== 0 || pan.y !== 0 || scale !== 1) && (
        <button
          type="button"
          onClick={recenter}
          aria-label="Recenter"
          className="absolute bottom-6 right-6 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-muted"
        >
          <Crosshair className="size-5" />
        </button>
      )}
    </section>
  );
}
