import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site";
import { isSafeRedirectUrl } from "@/lib/safe-url";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;
  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { data } = await supabase
      .from("short_urls")
      .select("target_url, clicks")
      .eq("code", code)
      .maybeSingle();

    if (data?.target_url && isSafeRedirectUrl(data.target_url)) {
      // Best-effort click count; don't block the redirect on it.
      void supabase
        .from("short_urls")
        .update({ clicks: (data.clicks ?? 0) + 1 })
        .eq("code", code);
      return NextResponse.redirect(data.target_url, 302);
    }
  }

  // Unknown / unconfigured -> send the visitor home.
  return NextResponse.redirect(siteConfig.url, 302);
}
