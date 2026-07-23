import Link from "next/link";
import type { Guide } from "@/lib/guides/types";

export const guide: Guide = {
  slug: "png-vs-jpg-vs-webp",
  title: "PNG vs JPG vs WebP: which image format should you use?",
  description:
    "A plain-English guide to the three formats that cover almost every image on the web — what each is good at, when to use it, and how to convert between them.",
  datePublished: "2026-06-19",
  dateLabel: "June 19, 2026",
  readingMinutes: 7,
  relatedTools: ["image-converter", "png-to-jpg", "webp-to-png"],
  body: (
    <>
      <p>
        {`Almost every image you'll ever save is a JPG, a PNG, or a WebP. They look
        similar when you open them, but under the hood they make very different
        trade-offs — and picking the wrong one means a blurry logo or a photo that's
        five times bigger than it needs to be. Here's how to choose with confidence.`}
      </p>

      <h2>JPG — for photographs</h2>
      <p>
        {`JPG (also written JPEG) uses lossy compression tuned for photos. It's
        brilliant at squeezing down images with lots of gradual color changes — skies,
        skin, landscapes — into small files, and for that job nothing beats it on
        compatibility. Every device and app made in the last 30 years opens a JPG.`}
      </p>
      <p>
        {`Its weaknesses: it can't store transparency, and it adds faint "artifacts"
        around hard edges and text. Save a screenshot or a logo as JPG and you'll see
        a smudgy halo around the letters. And because it's lossy, every time you
        re-save a JPG it loses a little more quality.`}
      </p>

      <h2>PNG — for graphics and transparency</h2>
      <p>
        {`PNG is lossless, so it keeps every pixel exactly as it was — perfect for
        anything with crisp edges: logos, icons, screenshots, diagrams, and text. It
        also supports transparency, which is why a logo you want to place on top of a
        colored background almost always needs to be a PNG.`}
      </p>
      <p>
        {`The catch is file size. Save a photograph as PNG and it can be several times
        larger than the equivalent JPG, with no visible benefit. PNG shines on flat
        colors and sharp lines, not on photographic detail.`}
      </p>

      <h2>WebP — the modern all-rounder</h2>
      <p>
        {`WebP is Google's newer format, and it's designed to do both jobs. It offers
        lossy compression that beats JPG at the same quality, lossless compression
        that beats PNG, and it supports transparency and even animation. In practice a
        WebP is often 25-35% smaller than the JPG or PNG it replaces, which is why so
        many websites now serve it.`}
      </p>
      <p>
        {`The only real downside is reach: while every current browser supports WebP,
        some older software and a few messaging apps still don't, so it's not always
        the right choice for a file you need to hand to someone else.`}
      </p>

      <h2>Which one should you use?</h2>
      <ul>
        <li>{`A photo for the web, or an email attachment → JPG (universal) or WebP (smaller).`}</li>
        <li>{`A logo, icon, screenshot, or anything with text or transparency → PNG, or WebP if you control where it's used.`}</li>
        <li>{`Your own website, where you want the smallest files and modern browsers → WebP.`}</li>
        <li>{`A file you're sending to someone and can't be sure what they'll open it with → JPG for photos, PNG for graphics.`}</li>
      </ul>

      <h2>How to convert between them</h2>
      <p>
        {`Switching formats takes seconds and happens entirely in your browser — your
        images are never uploaded. Use the `}
        <Link href="/image-converter">Image Converter</Link>
        {` to move freely between PNG, JPG and WebP, or a focused tool when you know
        exactly what you want, like `}
        <Link href="/png-to-jpg">PNG to JPG</Link>
        {` to shrink a graphic-heavy export, or `}
        <Link href="/webp-to-png">WebP to PNG</Link>
        {` when an app won't accept WebP.`}
      </p>
      <p>
        {`One rule to remember: converting from a lossy format doesn't restore lost
        detail. Turning a JPG into a PNG makes the file bigger but won't make it
        sharper — always convert from the best original you have.`}
      </p>
    </>
  ),
};
