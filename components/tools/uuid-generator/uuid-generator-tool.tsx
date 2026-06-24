"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";

const MAX = 100;

function makeUuids(count: number, uppercase: boolean, hyphens: boolean): string[] {
  return Array.from({ length: count }, () => {
    let id = crypto.randomUUID();
    if (!hyphens) id = id.replace(/-/g, "");
    if (uppercase) id = id.toUpperCase();
    return id;
  });
}

export default function UuidGeneratorTool() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [uuids, setUuids] = useState<string[]>(() => makeUuids(5, false, true));

  const text = uuids.join("\n");

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="uuid-count">How many (max {MAX})</Label>
          <Input
            id="uuid-count"
            type="number"
            min={1}
            max={MAX}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(MAX, Number(e.target.value) || 1)))}
          />
        </div>
        <div className="flex items-end gap-2">
          <Button type="button" size="sm" variant={hyphens ? "default" : "outline"} onClick={() => setHyphens((v) => !v)}>
            Hyphens
          </Button>
          <Button type="button" size="sm" variant={uppercase ? "default" : "outline"} onClick={() => setUppercase((v) => !v)}>
            Uppercase
          </Button>
        </div>
      </div>

      <Button type="button" onClick={() => setUuids(makeUuids(count, uppercase, hyphens))}>
        Generate UUIDs
      </Button>

      <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
        <div className="flex items-center justify-between">
          <Label>UUID v4 (random)</Label>
          <CopyButton value={text} />
        </div>
        <Textarea readOnly value={text} className="min-h-40 bg-background font-mono text-sm" />
      </div>
    </div>
  );
}
