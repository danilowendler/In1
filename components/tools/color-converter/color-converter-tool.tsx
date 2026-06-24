"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/ui/copy-button";

interface Rgb {
  r: number;
  g: number;
  b: number;
}

function parseColor(input: string): Rgb | null {
  const s = input.trim().toLowerCase();
  if (!s) return null;

  // HEX (#rgb or #rrggbb)
  const hex = s.replace(/^#/, "");
  if (/^[0-9a-f]{3}$/.test(hex)) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
    };
  }
  if (/^[0-9a-f]{6}$/.test(hex)) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }

  const rgb = s.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (rgb) {
    const r = +rgb[1], g = +rgb[2], b = +rgb[3];
    if (r <= 255 && g <= 255 && b <= 255) return { r, g, b };
  }

  const hsl = s.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?/);
  if (hsl) return hslToRgb(+hsl[1], +hsl[2], +hsl[3]);

  return null;
}

function hslToRgb(h: number, s: number, l: number): Rgb {
  h = ((h % 360) + 360) % 360;
  s = Math.min(100, s) / 100;
  l = Math.min(100, l) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function rgbToHsl({ r, g, b }: Rgb): string {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h /= 6;
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function toHex({ r, g, b }: Rgb): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

export default function ColorConverterTool() {
  const [input, setInput] = useState("#3a7bd5");
  const rgb = useMemo(() => parseColor(input), [input]);

  const formats = rgb
    ? [
        { label: "HEX", value: toHex(rgb) },
        { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
        { label: "HSL", value: rgbToHsl(rgb) },
      ]
    : [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex-1 space-y-2">
          <Label htmlFor="color-input">Color (HEX, RGB or HSL)</Label>
          <Input
            id="color-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="#3a7bd5  ·  rgb(58, 123, 213)  ·  hsl(214, 64%, 53%)"
            className="h-11 font-mono"
          />
        </div>
        {/* The visible swatch is fully filled with the current color; the native
            color input sits on top, transparent, so clicking still opens the picker. */}
        <label
          className="relative block h-11 w-14 shrink-0 cursor-pointer overflow-hidden rounded-lg border border-border"
          style={{ backgroundColor: rgb ? toHex(rgb) : "transparent" }}
          aria-label="Pick a color"
        >
          <input
            type="color"
            value={rgb ? toHex(rgb) : "#000000"}
            onChange={(e) => setInput(e.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </label>
      </div>

      {rgb ? (
        <div className="space-y-3 rounded-xl border border-border bg-muted/30 p-4">
          <div
            className="h-20 w-full rounded-lg border border-border"
            style={{ backgroundColor: toHex(rgb) }}
          />
          {formats.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="w-10 shrink-0 text-xs font-semibold text-muted-foreground">
                {f.label}
              </span>
              <code className="flex-1 truncate text-sm">{f.value}</code>
              <CopyButton value={f.value} />
            </div>
          ))}
        </div>
      ) : (
        input.trim() && (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            That doesn&apos;t look like a valid HEX, RGB or HSL color.
          </p>
        )
      )}
    </div>
  );
}
