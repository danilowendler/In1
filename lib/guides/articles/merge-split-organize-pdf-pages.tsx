import Link from "next/link";
import type { Guide } from "@/lib/guides/types";

export const guide: Guide = {
  slug: "merge-split-organize-pdf-pages",
  title: "Merge, split and organize PDF pages: the complete guide",
  description:
    "The three page operations that solve almost every PDF task — combining files, pulling pages out, and reordering them — and how to do them privately.",
  datePublished: "2026-06-22",
  dateLabel: "June 22, 2026",
  readingMinutes: 6,
  relatedTools: ["merge-pdf", "split-pdf", "organize-pdf"],
  body: (
    <>
      <p>
        {`Most everyday PDF work comes down to rearranging pages: joining a few files
        into one, pulling out the pages you actually need, or fixing the order after a
        scan. Once you know these three operations, you can handle almost any document
        task without expensive software — and without uploading sensitive files to a
        stranger's server.`}
      </p>

      <h2>Merging: combine several PDFs into one</h2>
      <p>
        {`Merging is for when related documents arrive separately and should travel
        together — a signed contract plus its appendix, a set of receipts for an
        expense report, or scans that came out one page per file. With `}
        <Link href="/merge-pdf">Merge PDF</Link>
        {` you add the files, drag them into the order you want, and download a single
        tidy document. The originals are untouched, so you always keep your source
        files.`}
      </p>

      <h2>Splitting: pull pages out of a PDF</h2>
      <p>
        {`Splitting is the opposite move: taking one big PDF and extracting just what
        matters. Maybe you need to send a single chapter, share only the invoice from
        a 50-page report, or break a bound document back into individual pages. The `}
        <Link href="/split-pdf">Split PDF</Link>
        {` tool lets you pick a page range to extract or break the file into separate
        one-page PDFs. Sending a focused 2-page extract is faster, smaller, and often
        more professional than forwarding the whole thing.`}
      </p>

      <h2>Organizing: reorder and delete pages</h2>
      <p>
        {`Scans come out upside down. A page lands in the wrong spot. A draft has three
        pages you no longer want. `}
        <Link href="/organize-pdf">Organize PDF</Link>
        {` shows every page as a thumbnail so you can drag them into the right order
        and delete the ones you don't need, then rebuild the document. It's the fastest
        way to turn a messy export into something you'd actually send.`}
      </p>

      <h2>Common workflows</h2>
      <ul>
        <li>{`Turn a stack of single-page scans into one document: merge them, then organize to fix any out-of-order pages.`}</li>
        <li>{`Share one section of a long report: split out the page range, then compress it if it's image-heavy.`}</li>
        <li>{`Clean up a contract before signing: delete blank or duplicate pages in Organize, then merge in the appendix.`}</li>
      </ul>

      <h2>Why doing it in the browser matters</h2>
      <p>
        {`PDFs are often the most sensitive files we handle — contracts, IDs, medical
        forms, bank statements. Every one of these tools runs entirely in your browser,
        so the document is never uploaded and never stored anywhere. You get the
        convenience of an online tool with the privacy of desktop software. When you're
        done rearranging pages, you can `}
        <Link href="/compress-pdf">compress the result</Link>
        {` to get it under an email limit.`}
      </p>
    </>
  ),
};
