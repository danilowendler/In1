"use client";

import { useMemo, useState } from "react";
import { load, dump } from "js-yaml";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";

function convert(text: string, mode: "j2y" | "y2j"): { output: string; error: string | null } {
  if (!text.trim()) return { output: "", error: null };
  try {
    if (mode === "j2y") {
      const obj = JSON.parse(text);
      return { output: dump(obj, { indent: 2, lineWidth: -1 }), error: null };
    }
    const obj = load(text);
    return { output: JSON.stringify(obj, null, 2), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Could not convert the input" };
  }
}

export default function JsonToYamlTool() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"j2y" | "y2j">("j2y");

  const { output, error } = useMemo(() => convert(text, mode), [text, mode]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" size="sm" variant={mode === "j2y" ? "default" : "outline"} onClick={() => setMode("j2y")}>
          JSON → YAML
        </Button>
        <Button type="button" size="sm" variant={mode === "y2j" ? "default" : "outline"} onClick={() => setMode("y2j")}>
          YAML → JSON
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="j2y-input">{mode === "j2y" ? "JSON" : "YAML"}</Label>
        <Textarea
          id="j2y-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={mode === "j2y" ? '{"name":"Ada","roles":["dev","lead"]}' : "name: Ada\nroles:\n  - dev\n  - lead"}
          className="min-h-40 font-mono text-sm"
        />
      </div>

      {error && text.trim() && <p className="text-sm text-destructive">{error}</p>}

      {output && (
        <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <Label>{mode === "j2y" ? "YAML" : "JSON"}</Label>
            <CopyButton value={output} />
          </div>
          <Textarea readOnly value={output} className="min-h-40 bg-background font-mono text-sm" />
        </div>
      )}
    </div>
  );
}
