"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";
import { downloadBlob } from "@/lib/download";

// Minimal RFC-4180-ish CSV parser: handles quoted fields, escaped quotes and
// commas or newlines inside quotes.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      field = "";
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0] !== ""));
}

function csvToJson(text: string): { json: string; error: string | null } {
  const rows = parseCsv(text);
  if (rows.length < 1) return { json: "", error: "No data found." };
  const headers = rows[0];
  const out = rows.slice(1).map((r) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = r[i] ?? "";
    });
    return obj;
  });
  return { json: JSON.stringify(out, null, 2), error: null };
}

export default function CsvToJsonTool() {
  const [text, setText] = useState("");
  const { json, error } = useMemo(() => (text.trim() ? csvToJson(text) : { json: "", error: null }), [text]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="c2j-input">CSV (first row = headers)</Label>
        <Textarea
          id="c2j-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"name,role\nAda,Engineer\nLinus,Maintainer"}
          className="min-h-40 font-mono text-sm"
        />
      </div>

      {error && text.trim() && <p className="text-sm text-destructive">{error}</p>}

      {json && (
        <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <Label>JSON</Label>
            <div className="flex gap-2">
              <CopyButton value={json} />
              <Button type="button" size="sm" onClick={() => downloadBlob(json, "data.json", "application/json")}>
                Download
              </Button>
            </div>
          </div>
          <Textarea readOnly value={json} className="min-h-40 bg-background font-mono text-sm" />
        </div>
      )}
    </div>
  );
}
