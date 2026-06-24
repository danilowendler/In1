"use client";

import { useRef, useState } from "react";
import * as QRCode from "qrcode";
import { Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { downloadBlob } from "@/lib/download";

const SIZE = 256;

interface Fields {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  org: string;
  title: string;
  url: string;
}

const EMPTY: Fields = { firstName: "", lastName: "", phone: "", email: "", org: "", title: "", url: "" };

function buildVCard(f: Fields): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${f.lastName};${f.firstName};;;`,
    `FN:${`${f.firstName} ${f.lastName}`.trim()}`,
  ];
  if (f.org) lines.push(`ORG:${f.org}`);
  if (f.title) lines.push(`TITLE:${f.title}`);
  if (f.phone) lines.push(`TEL;TYPE=CELL:${f.phone}`);
  if (f.email) lines.push(`EMAIL:${f.email}`);
  if (f.url) lines.push(`URL:${f.url}`);
  lines.push("END:VCARD");
  return lines.join("\n");
}

export default function VcardQrCodeTool() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [hasCode, setHasCode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function render(next: Fields) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hasAny = next.firstName.trim() || next.lastName.trim() || next.phone.trim() || next.email.trim();
    if (!hasAny) {
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      setHasCode(false);
      return;
    }
    QRCode.toCanvas(canvas, buildVCard(next), { width: SIZE, margin: 2 })
      .then(() => setHasCode(true))
      .catch(() => setHasCode(false));
  }

  function update(key: keyof Fields, value: string) {
    const next = { ...fields, [key]: value };
    setFields(next);
    render(next);
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas || !hasCode) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, "vcard-qr.png", "image/png");
    }, "image/png");
  }

  const inputs: { key: keyof Fields; label: string; placeholder: string; type?: string }[] = [
    { key: "firstName", label: "First name", placeholder: "Ada" },
    { key: "lastName", label: "Last name", placeholder: "Lovelace" },
    { key: "phone", label: "Phone", placeholder: "+1 555 123 4567", type: "tel" },
    { key: "email", label: "Email", placeholder: "ada@example.com", type: "email" },
    { key: "org", label: "Organization", placeholder: "Analytical Engines" },
    { key: "title", label: "Job title", placeholder: "Engineer" },
    { key: "url", label: "Website", placeholder: "https://example.com", type: "url" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {inputs.map((i) => (
          <div key={i.key} className="space-y-2">
            <Label htmlFor={`vc-${i.key}`}>{i.label}</Label>
            <Input id={`vc-${i.key}`} type={i.type ?? "text"} value={fields[i.key]} onChange={(e) => update(i.key, e.target.value)} placeholder={i.placeholder} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/30 p-6">
        <canvas ref={canvasRef} width={SIZE} height={SIZE} className={hasCode ? "rounded-lg bg-white" : "hidden"} />
        {!hasCode && <p className="py-10 text-sm text-muted-foreground">Fill in a name, phone or email to generate a contact QR code.</p>}
        <Button type="button" size="lg" onClick={download} disabled={!hasCode}>
          <Download />
          Download PNG
        </Button>
      </div>
    </div>
  );
}
