"use client";

import { useEffect, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CopyButton } from "@/components/ui/copy-button";

function toDate(input: string): Date | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (/^\d+$/.test(trimmed)) {
    // Treat 10-digit as seconds, 13-digit as milliseconds.
    const num = Number(trimmed);
    const ms = trimmed.length <= 10 ? num * 1000 : num;
    const d = new Date(ms);
    return isNaN(d.getTime()) ? null : d;
  }
  const d = new Date(trimmed);
  return isNaN(d.getTime()) ? null : d;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-3 py-2">
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate font-mono text-sm">{value}</p>
      </div>
      <CopyButton value={value} />
    </div>
  );
}

export default function TimestampConverterTool() {
  const [input, setInput] = useState("");
  // Loaded via dynamic(ssr:false), so reading the clock at init is safe.
  const [now, setNow] = useState(() => Math.floor(Date.now() / 1000));

  useEffect(() => {
    const id = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(id);
  }, []);

  const date = useMemo(() => toDate(input), [input]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground">Current Unix timestamp</p>
          <p className="font-mono text-lg tabular-nums">{now || "—"}</p>
        </div>
        <CopyButton value={String(now)} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ts-input">Unix timestamp or date</Label>
        <Input
          id="ts-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 1700000000 or 2026-06-24 15:30"
          className="font-mono"
        />
        <p className="text-xs text-muted-foreground">
          Enter seconds or milliseconds, or a date like 2026-06-24. Conversion is instant.
        </p>
      </div>

      {input && !date && <p className="text-sm text-destructive">Could not parse that value.</p>}

      {date && (
        <div className="space-y-2">
          <Row label="Unix (seconds)" value={String(Math.floor(date.getTime() / 1000))} />
          <Row label="Unix (milliseconds)" value={String(date.getTime())} />
          <Row label="ISO 8601 (UTC)" value={date.toISOString()} />
          <Row label="UTC" value={date.toUTCString()} />
          <Row label="Local time" value={date.toString()} />
        </div>
      )}
    </div>
  );
}
