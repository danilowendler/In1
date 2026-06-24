"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";

const BASES = [
  { base: 2, label: "Binary", placeholder: "1010" },
  { base: 8, label: "Octal", placeholder: "12" },
  { base: 10, label: "Decimal", placeholder: "10" },
  { base: 16, label: "Hex", placeholder: "a" },
] as const;

const PATTERNS: Record<number, RegExp> = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^[0-9]+$/,
  16: /^[0-9a-fA-F]+$/,
};

export default function NumberBaseConverterTool() {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState(10);

  const { results, error } = useMemo(() => {
    const v = value.trim();
    if (!v) return { results: null, error: null };
    if (!PATTERNS[fromBase].test(v)) {
      return { results: null, error: `Not a valid base-${fromBase} number.` };
    }
    const n = parseInt(v, fromBase);
    if (!Number.isSafeInteger(n)) {
      return { results: null, error: "Number is too large to convert safely." };
    }
    return {
      results: BASES.map((b) => ({
        ...b,
        out: b.base === 16 ? n.toString(16).toUpperCase() : n.toString(b.base),
      })),
      error: null,
    };
  }, [value, fromBase]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Input base</Label>
        <div className="flex flex-wrap gap-2">
          {BASES.map((b) => (
            <Button key={b.base} type="button" size="sm" variant={fromBase === b.base ? "default" : "outline"} onClick={() => setFromBase(b.base)}>
              {b.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="nbc-input">Value</Label>
        <Input
          id="nbc-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={BASES.find((b) => b.base === fromBase)!.placeholder}
          className="font-mono"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {results && (
        <div className="space-y-2">
          {results.map((r) => (
            <div key={r.base} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/30 px-3 py-2">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{r.label} (base {r.base})</p>
                <p className="truncate font-mono text-sm">{r.out}</p>
              </div>
              <CopyButton value={r.out} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
