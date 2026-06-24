"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";

const NAMED: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function encodeEntities(text: string, nonAscii: boolean): string {
  let out = text.replace(/[&<>"']/g, (c) => NAMED[c]);
  if (nonAscii) {
    out = out.replace(/[^\x00-\x7F]/g, (c) => `&#${c.codePointAt(0)};`);
  }
  return out;
}

function decodeEntities(text: string): string {
  // Decode using the browser's own parser so named and numeric entities both work.
  const el = document.createElement("textarea");
  el.innerHTML = text;
  return el.value;
}

export default function HtmlEntityEncoderTool() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [nonAscii, setNonAscii] = useState(false);

  const output = useMemo(() => {
    if (!text) return "";
    return mode === "encode" ? encodeEntities(text, nonAscii) : decodeEntities(text);
  }, [text, mode, nonAscii]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" size="sm" variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>
          Encode
        </Button>
        <Button type="button" size="sm" variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>
          Decode
        </Button>
        {mode === "encode" && (
          <>
            <span className="mx-1 h-4 w-px bg-border" />
            <Button type="button" size="sm" variant={nonAscii ? "default" : "outline"} onClick={() => setNonAscii((v) => !v)}>
              Also encode non-ASCII
            </Button>
          </>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="html-input">{mode === "encode" ? "Text to encode" : "Entities to decode"}</Label>
        <Textarea
          id="html-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={mode === "encode" ? '<a href="x">Tom & Jerry</a>' : "&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&lt;/a&gt;"}
          className="min-h-32 font-mono text-sm"
        />
      </div>

      {output && (
        <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <Label>Result</Label>
            <CopyButton value={output} />
          </div>
          <p className="whitespace-pre-wrap break-all font-mono text-sm leading-relaxed">{output}</p>
        </div>
      )}
    </div>
  );
}
