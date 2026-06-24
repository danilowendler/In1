"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";
import { downloadBlob } from "@/lib/download";

function escapeCsv(value: unknown): string {
  if (value === null || value === undefined) return "";
  const s = typeof value === "object" ? JSON.stringify(value) : String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function jsonToCsv(raw: string): { csv: string; error: string | null } {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    return { csv: "", error: e instanceof Error ? e.message : "Invalid JSON" };
  }
  const rows = Array.isArray(data) ? data : [data];
  if (rows.length === 0) return { csv: "", error: "The JSON array is empty." };

  const keys: string[] = [];
  for (const row of rows) {
    if (row && typeof row === "object" && !Array.isArray(row)) {
      for (const k of Object.keys(row)) if (!keys.includes(k)) keys.push(k);
    }
  }
  if (keys.length === 0) {
    return { csv: "", error: "Provide an array of objects, e.g. [{\"name\":\"Ada\"}]." };
  }

  const lines = [keys.map(escapeCsv).join(",")];
  for (const row of rows) {
    const obj = (row ?? {}) as Record<string, unknown>;
    lines.push(keys.map((k) => escapeCsv(obj[k])).join(","));
  }
  return { csv: lines.join("\r\n"), error: null };
}

export default function JsonToCsvTool() {
  const [text, setText] = useState("");
  const { csv, error } = useMemo(() => (text.trim() ? jsonToCsv(text) : { csv: "", error: null }), [text]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="j2c-input">JSON (array of objects)</Label>
        <Textarea
          id="j2c-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={'[{"name":"Ada","role":"Engineer"},{"name":"Linus","role":"Maintainer"}]'}
          className="min-h-40 font-mono text-sm"
        />
      </div>

      {error && text.trim() && <p className="text-sm text-destructive">{error}</p>}

      {csv && (
        <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <Label>CSV</Label>
            <div className="flex gap-2">
              <CopyButton value={csv} />
              <Button type="button" size="sm" onClick={() => downloadBlob(csv, "data.csv", "text/csv")}>
                Download
              </Button>
            </div>
          </div>
          <Textarea readOnly value={csv} className="min-h-40 bg-background font-mono text-sm" />
        </div>
      )}
    </div>
  );
}
