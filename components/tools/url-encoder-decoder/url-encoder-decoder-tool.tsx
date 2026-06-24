"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";

function convert(text: string, mode: "encode" | "decode", component: boolean): { output: string; error: string | null } {
  if (!text) return { output: "", error: null };
  try {
    if (mode === "encode") {
      return { output: component ? encodeURIComponent(text) : encodeURI(text), error: null };
    }
    return { output: component ? decodeURIComponent(text) : decodeURI(text), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Could not process the input" };
  }
}

export default function UrlEncoderDecoderTool() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [component, setComponent] = useState(true);

  const { output, error } = useMemo(() => convert(text, mode, component), [text, mode, component]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" size="sm" variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>
          Encode
        </Button>
        <Button type="button" size="sm" variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>
          Decode
        </Button>
        <span className="mx-1 h-4 w-px bg-border" />
        <Button type="button" size="sm" variant={component ? "default" : "outline"} onClick={() => setComponent((v) => !v)}>
          {component ? "Component (encodeURIComponent)" : "Full URL (encodeURI)"}
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="url-input">{mode === "encode" ? "Text to encode" : "Text to decode"}</Label>
        <Textarea
          id="url-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={mode === "encode" ? "https://example.com/search?q=hello world" : "https%3A%2F%2Fexample.com"}
          className="min-h-32 font-mono text-sm"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

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
