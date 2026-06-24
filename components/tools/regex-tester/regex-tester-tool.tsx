"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FLAGS = [
  { key: "g", label: "g", title: "global" },
  { key: "i", label: "i", title: "ignore case" },
  { key: "m", label: "m", title: "multiline" },
  { key: "s", label: "s", title: "dotall" },
  { key: "u", label: "u", title: "unicode" },
] as const;

interface MatchInfo {
  text: string;
  index: number;
  groups: string[];
}

function runRegex(
  pattern: string,
  flags: string,
  subject: string,
): { matches: MatchInfo[]; error: string | null } {
  if (!pattern) return { matches: [], error: null };
  let re: RegExp;
  try {
    re = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
  } catch (e) {
    return { matches: [], error: e instanceof Error ? e.message : "Invalid pattern" };
  }
  const matches: MatchInfo[] = [];
  let m: RegExpExecArray | null;
  let guard = 0;
  while ((m = re.exec(subject)) !== null && guard < 10000) {
    matches.push({ text: m[0], index: m.index, groups: m.slice(1).map((g) => g ?? "") });
    if (m.index === re.lastIndex) re.lastIndex++;
    guard++;
  }
  return { matches, error: null };
}

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("gi");
  const [subject, setSubject] = useState("");

  const { matches, error } = useMemo(() => runRegex(pattern, flags, subject), [pattern, flags, subject]);

  function toggleFlag(f: string) {
    setFlags((cur) => (cur.includes(f) ? cur.replace(f, "") : cur + f));
  }

  const highlighted = useMemo(() => {
    if (!subject || matches.length === 0 || error) return null;
    const nodes: React.ReactNode[] = [];
    let last = 0;
    matches.forEach((mt, i) => {
      if (mt.index > last) nodes.push(subject.slice(last, mt.index));
      nodes.push(
        <mark key={i} className="rounded bg-primary/20 text-foreground">
          {subject.slice(mt.index, mt.index + mt.text.length)}
        </mark>,
      );
      last = mt.index + mt.text.length;
    });
    if (last < subject.length) nodes.push(subject.slice(last));
    return nodes;
  }, [subject, matches, error]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="regex-pattern">Regular expression</Label>
        <div className="flex items-center gap-2">
          <span className="font-mono text-muted-foreground">/</span>
          <Input id="regex-pattern" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="\\d{3}-\\d{4}" className="font-mono" />
          <span className="font-mono text-muted-foreground">/</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {FLAGS.map((f) => (
            <Button key={f.key} type="button" size="sm" variant={flags.includes(f.key) ? "default" : "outline"} onClick={() => toggleFlag(f.key)} title={f.title}>
              {f.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="regex-subject">Test string</Label>
        <Textarea id="regex-subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Paste the text to test your pattern against…" className="min-h-32 font-mono text-sm" />
      </div>

      {error && <p className="text-sm text-destructive">Invalid regular expression: {error}</p>}

      {!error && subject && (
        <div className="space-y-3">
          <Label>{matches.length} match{matches.length === 1 ? "" : "es"}</Label>
          {highlighted && (
            <div className="overflow-x-auto rounded-xl border border-border bg-muted/30 p-4 font-mono text-sm leading-relaxed">
              <pre className="whitespace-pre-wrap break-words">{highlighted}</pre>
            </div>
          )}
          {matches.some((m) => m.groups.length > 0) && (
            <div className="space-y-1 text-sm">
              {matches.map((m, i) => (
                <div key={i} className="rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs">
                  <span className="text-muted-foreground">match {i + 1}:</span> {m.text}
                  {m.groups.length > 0 && (
                    <span className="text-muted-foreground"> · groups: [{m.groups.join(", ")}]</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
