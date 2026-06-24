import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { WebsiteSchema } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site";

// Inter is the open-source substitute for SF Pro (per DESIGN-apple.md).
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <WebsiteSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        {/* GA/Clarity/AdSense (loads only when their env vars are set) */}
        <Analytics />
        {/* Vercel Web Analytics — no env vars; enable it in the Vercel dashboard */}
        <VercelAnalytics />
      </body>
    </html>
  );
}
