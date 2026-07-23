import Link from "next/link";
import type { Guide } from "@/lib/guides/types";

export const guide: Guide = {
  slug: "compress-pdf-without-losing-quality",
  title: "How to compress a PDF without losing quality",
  description:
    "Why PDFs get so large, how lossy and lossless compression differ, and how to shrink a PDF in your browser while keeping it readable and sharp.",
  datePublished: "2026-06-18",
  dateLabel: "June 18, 2026",
  readingMinutes: 6,
  relatedTools: ["compress-pdf"],
  body: (
    <>
      <p>
        {`A 40 MB PDF that won't attach to an email is one of the most common file
        headaches there is. The good news: most oversized PDFs are big for a reason
        you can fix, and you can usually cut the size dramatically without the
        document looking any worse. This guide explains what actually makes a PDF
        heavy, the difference between the two kinds of compression, and how to shrink
        one safely.`}
      </p>

      <h2>Why PDFs get so large</h2>
      <p>
        {`Text is tiny. If your PDF is huge, the weight is almost always coming from
        somewhere else:`}
      </p>
      <ul>
        <li>{`Scanned pages — a scanner saves each page as a full-resolution image, so a 10-page scan can easily be 20-30 MB.`}</li>
        <li>{`High-resolution photos and screenshots embedded at far more detail than the page actually needs.`}</li>
        <li>{`Embedded fonts, especially when several typefaces are included in full.`}</li>
        <li>{`Leftover data — edit history, hidden layers, or thumbnails that some tools bundle in.`}</li>
      </ul>
      <p>
        {`Because images are the usual culprit, compressing a PDF mostly means
        re-compressing those images to a sensible resolution — which is exactly why
        a scanned or image-heavy PDF can shrink by 70% or more, while a plain text
        PDF barely changes.`}
      </p>

      <h2>Lossless vs. lossy compression</h2>
      <p>
        {`There are two ways to make a file smaller. `}
        <strong>Lossless</strong>
        {` compression rewrites the data more efficiently without throwing anything
        away — the result is byte-for-byte identical when opened. It's safe but
        modest, often only a few percent on a PDF. `}
        <strong>Lossy</strong>
        {` compression gets the big wins by permanently discarding detail your eyes
        are unlikely to miss, the same way a JPG works. For image-heavy PDFs, a
        little lossy compression is what turns 40 MB into 5 MB.`}
      </p>
      <p>
        {`The goal isn't "maximum compression" — it's the smallest size that still
        looks right for how the PDF will be used. A document that will only ever be
        read on screen can be compressed far more than one that needs to be printed.`}
      </p>

      <h2>How to compress a PDF in your browser</h2>
      <p>
        {`You don't need to install anything or hand your document to a website. Our `}
        <Link href="/compress-pdf">Compress PDF</Link>
        {` tool runs entirely in your browser, so the file never leaves your device —
        which matters when the PDF is a contract, a bank statement, or an ID scan.`}
      </p>
      <ol>
        <li>{`Open the Compress PDF tool and drop your file in.`}</li>
        <li>{`Let it process — the images inside are re-compressed to a web-friendly resolution.`}</li>
        <li>{`Download the smaller PDF and check that it still reads well.`}</li>
      </ol>

      <h2>How to keep the quality high</h2>
      <ul>
        <li>{`Start from the highest-quality original you have, not from a copy that's already been compressed — compressing twice stacks the damage.`}</li>
        <li>{`If the PDF is mostly text with a few images, expect a small reduction; that's normal, and the text stays perfectly crisp.`}</li>
        <li>{`For scans, a moderate compression usually looks identical on screen. Only push harder if you're sure it won't be printed.`}</li>
        <li>{`Zoom in on a compressed page before you send it. If the text is still sharp at 150%, you're safe.`}</li>
      </ul>

      <h2>When compression isn’t enough</h2>
      <p>
        {`Sometimes the fastest fix isn't compressing at all. If you only need part of
        a large document, `}
        <Link href="/split-pdf">split the PDF</Link>
        {` and send just the pages that matter, or `}
        <Link href="/organize-pdf">remove the pages you don’t need</Link>
        {` before sending. A 3-page extract will always beat a compressed 200-page
        file. Combined with compression, these are usually all you need to get any
        PDF comfortably under an email limit.`}
      </p>
    </>
  ),
};
