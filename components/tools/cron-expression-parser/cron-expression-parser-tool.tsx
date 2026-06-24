"use client";

import { useMemo, useState } from "react";
import cronstrue from "cronstrue";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EXAMPLES = [
  { expr: "0 9 * * 1-5", note: "Weekdays at 9am" },
  { expr: "*/15 * * * *", note: "Every 15 minutes" },
  { expr: "0 0 1 * *", note: "Monthly, 1st" },
  { expr: "30 2 * * 0", note: "Sundays 2:30am" },
];

function describe(expr: string): { text: string; error: string | null } {
  if (!expr.trim()) return { text: "", error: null };
  try {
    return { text: cronstrue.toString(expr.trim(), { throwExceptionOnParseError: true }), error: null };
  } catch (e) {
    return { text: "", error: e instanceof Error ? e.message : String(e) };
  }
}

export default function CronExpressionParserTool() {
  const [expr, setExpr] = useState("");
  const { text, error } = useMemo(() => describe(expr), [expr]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cron-input">Cron expression</Label>
        <Input
          id="cron-input"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          placeholder="0 9 * * 1-5"
          className="font-mono"
        />
        <p className="text-xs text-muted-foreground">
          Five fields: minute, hour, day of month, month, day of week.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {EXAMPLES.map((ex) => (
          <Button key={ex.expr} type="button" size="sm" variant="outline" onClick={() => setExpr(ex.expr)}>
            <span className="font-mono">{ex.expr}</span>
            <span className="ml-1 text-muted-foreground">· {ex.note}</span>
          </Button>
        ))}
      </div>

      {error && expr.trim() && <p className="text-sm text-destructive">{error}</p>}

      {text && (
        <div className="rounded-xl border border-border bg-muted/30 p-4">
          <p className="text-xs text-muted-foreground">This schedule runs</p>
          <p className="mt-1 text-lg font-medium">{text}</p>
        </div>
      )}
    </div>
  );
}
