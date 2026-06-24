"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copy-button";

function base64UrlDecode(part: string): string {
  const b64 = part.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(part.length / 4) * 4, "=");
  const binary = atob(b64);
  // Handle UTF-8 payloads.
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function prettyJson(raw: string): string {
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}

function describeTime(obj: Record<string, unknown>, key: string): string | null {
  const v = obj[key];
  if (typeof v !== "number") return null;
  return new Date(v * 1000).toUTCString();
}

interface Decoded {
  header: string;
  payload: string;
  claims: string[];
  error: string | null;
}

function decode(token: string): Decoded | null {
  const t = token.trim();
  if (!t) return null;
  const parts = t.split(".");
  if (parts.length < 2) {
    return { header: "", payload: "", claims: [], error: "A JWT has three parts separated by dots." };
  }
  try {
    const header = prettyJson(base64UrlDecode(parts[0]));
    const payloadRaw = base64UrlDecode(parts[1]);
    const payload = prettyJson(payloadRaw);
    const claims: string[] = [];
    try {
      const obj = JSON.parse(payloadRaw) as Record<string, unknown>;
      const exp = describeTime(obj, "exp");
      const iat = describeTime(obj, "iat");
      const nbf = describeTime(obj, "nbf");
      if (iat) claims.push(`Issued at: ${iat}`);
      if (nbf) claims.push(`Not before: ${nbf}`);
      if (exp) {
        const expired = typeof obj.exp === "number" && obj.exp * 1000 < Date.now();
        claims.push(`Expires: ${exp}${expired ? " (expired)" : ""}`);
      }
    } catch {
      /* payload not an object; skip claim hints */
    }
    return { header, payload, claims, error: null };
  } catch {
    return { header: "", payload: "", claims: [], error: "Could not decode this token. Check that it is a valid JWT." };
  }
}

export default function JwtDecoderTool() {
  const [token, setToken] = useState("");
  const decoded = useMemo(() => decode(token), [token]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="jwt-input">JSON Web Token</Label>
        <Textarea
          id="jwt-input"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste a JWT (eyJhbGciOi…)"
          className="min-h-28 font-mono text-sm"
        />
        <p className="text-xs text-muted-foreground">
          This decoder reads the header and payload only. It does not verify the signature.
        </p>
      </div>

      {decoded?.error && <p className="text-sm text-destructive">{decoded.error}</p>}

      {decoded && !decoded.error && (
        <div className="space-y-4">
          <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <Label>Header</Label>
              <CopyButton value={decoded.header} />
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap break-all font-mono text-sm">{decoded.header}</pre>
          </div>

          <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
              <Label>Payload</Label>
              <CopyButton value={decoded.payload} />
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap break-all font-mono text-sm">{decoded.payload}</pre>
            {decoded.claims.length > 0 && (
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {decoded.claims.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
