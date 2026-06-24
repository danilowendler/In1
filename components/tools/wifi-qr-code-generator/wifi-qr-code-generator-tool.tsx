"use client";

import { useRef, useState } from "react";
import * as QRCode from "qrcode";
import { Download } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { downloadBlob } from "@/lib/download";

const SIZE = 256;

// Escape special characters per the WIFI: QR payload spec.
function esc(s: string): string {
  return s.replace(/([\\;,:"])/g, "\\$1");
}

function buildPayload(ssid: string, password: string, enc: string, hidden: boolean): string {
  const t = enc === "nopass" ? "nopass" : enc;
  const pass = enc === "nopass" ? "" : `P:${esc(password)};`;
  return `WIFI:T:${t};S:${esc(ssid)};${pass}H:${hidden ? "true" : "false"};;`;
}

const ENC = [
  { key: "WPA", label: "WPA/WPA2" },
  { key: "WEP", label: "WEP" },
  { key: "nopass", label: "No password" },
] as const;

export default function WifiQrCodeGeneratorTool() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [enc, setEnc] = useState<string>("WPA");
  const [hidden, setHidden] = useState(false);
  const [hasCode, setHasCode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function render(next: { ssid?: string; password?: string; enc?: string; hidden?: boolean }) {
    const s = next.ssid ?? ssid;
    const p = next.password ?? password;
    const e = next.enc ?? enc;
    const h = next.hidden ?? hidden;
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!s.trim()) {
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      setHasCode(false);
      return;
    }
    QRCode.toCanvas(canvas, buildPayload(s, p, e, h), { width: SIZE, margin: 2 })
      .then(() => setHasCode(true))
      .catch(() => setHasCode(false));
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas || !hasCode) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, "wifi-qr.png", "image/png");
    }, "image/png");
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="wifi-ssid">Network name (SSID)</Label>
          <Input id="wifi-ssid" value={ssid} onChange={(e) => { setSsid(e.target.value); render({ ssid: e.target.value }); }} placeholder="MyWiFi" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wifi-pass">Password</Label>
          <Input
            id="wifi-pass"
            type="text"
            value={password}
            onChange={(e) => { setPassword(e.target.value); render({ password: e.target.value }); }}
            placeholder={enc === "nopass" ? "Not required" : "Password"}
            disabled={enc === "nopass"}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Label className="mr-1">Security</Label>
        {ENC.map((x) => (
          <Button key={x.key} type="button" size="sm" variant={enc === x.key ? "default" : "outline"} onClick={() => { setEnc(x.key); render({ enc: x.key }); }}>
            {x.label}
          </Button>
        ))}
        <span className="mx-1 h-4 w-px bg-border" />
        <Button type="button" size="sm" variant={hidden ? "default" : "outline"} onClick={() => { setHidden((v) => !v); render({ hidden: !hidden }); }}>
          Hidden network
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/30 p-6">
        <canvas ref={canvasRef} width={SIZE} height={SIZE} className={hasCode ? "rounded-lg bg-white" : "hidden"} />
        {!hasCode && <p className="py-10 text-sm text-muted-foreground">Enter your network name to generate a QR code.</p>}
        <Button type="button" size="lg" onClick={download} disabled={!hasCode}>
          <Download />
          Download PNG
        </Button>
      </div>
    </div>
  );
}
