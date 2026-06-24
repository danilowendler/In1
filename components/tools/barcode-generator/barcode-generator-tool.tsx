"use client";

import { useRef, useState } from "react";
import JsBarcode from "jsbarcode";
import { Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { downloadBlob } from "@/lib/download";

const FORMATS = [
  { key: "CODE128", label: "Code 128", placeholder: "Any text or numbers" },
  { key: "CODE39", label: "Code 39", placeholder: "ABC-123" },
  { key: "EAN13", label: "EAN-13", placeholder: "12 or 13 digits" },
  { key: "EAN8", label: "EAN-8", placeholder: "7 or 8 digits" },
  { key: "UPC", label: "UPC-A", placeholder: "11 or 12 digits" },
  { key: "ITF14", label: "ITF-14", placeholder: "13 or 14 digits" },
  { key: "codabar", label: "Codabar", placeholder: "A123456A" },
] as const;

export default function BarcodeGeneratorTool() {
  const [value, setValue] = useState("");
  const [format, setFormat] = useState<string>("CODE128");
  const [valid, setValid] = useState<boolean | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function render(text: string, fmt: string) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!text.trim()) {
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      setValid(null);
      return;
    }
    let ok = true;
    try {
      JsBarcode(canvas, text, {
        format: fmt,
        displayValue: true,
        margin: 12,
        background: "#ffffff",
        valid: (isValid: boolean) => {
          ok = isValid;
        },
      });
    } catch {
      ok = false;
    }
    setValid(ok);
  }

  function changeValue(next: string) {
    setValue(next);
    render(next, format);
  }

  function changeFormat(next: string) {
    setFormat(next);
    render(value, next);
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas || !valid) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, "barcode.png", "image/png");
    }, "image/png");
  }

  const current = FORMATS.find((f) => f.key === format)!;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Barcode format</Label>
        <div className="flex flex-wrap gap-2">
          {FORMATS.map((f) => (
            <Button key={f.key} type="button" size="sm" variant={format === f.key ? "default" : "outline"} onClick={() => changeFormat(f.key)}>
              {f.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="barcode-input">Value</Label>
        <Input id="barcode-input" value={value} onChange={(e) => changeValue(e.target.value)} placeholder={current.placeholder} className="font-mono" />
      </div>

      {valid === false && value.trim() && (
        <p className="text-sm text-destructive">That value isn&apos;t valid for {current.label}. Check the format&apos;s length and character rules.</p>
      )}

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/30 p-6">
        <canvas ref={canvasRef} className={valid ? "max-w-full rounded-lg bg-white" : "hidden"} />
        {!valid && <p className="py-8 text-sm text-muted-foreground">Your barcode will appear here.</p>}
        <Button type="button" size="lg" onClick={download} disabled={!valid}>
          <Download />
          Download PNG
        </Button>
      </div>
    </div>
  );
}
