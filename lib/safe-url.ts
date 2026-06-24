/**
 * Single source of truth for "is this URL safe to store/redirect to".
 *
 * Used both when creating a short link (app/api/shorten) and when redirecting
 * one (app/s/[code]) so a row that somehow holds a dangerous scheme — e.g.
 * `javascript:` or `data:` — can never be turned into an open redirect.
 */
export function isSafeRedirectUrl(value: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  return parsed.protocol === "http:" || parsed.protocol === "https:";
}
