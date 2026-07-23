import Link from "next/link";
import type { Guide } from "@/lib/guides/types";

export const guide: Guide = {
  slug: "remove-exif-metadata-from-photos",
  title: "How to remove EXIF metadata from photos before sharing",
  description:
    "Every photo carries hidden data — often including the exact GPS location where it was taken. Here's what EXIF is, why it's a privacy risk, and how to strip it.",
  datePublished: "2026-06-23",
  dateLabel: "June 23, 2026",
  readingMinutes: 5,
  relatedTools: ["exif-remover"],
  body: (
    <>
      <p>
        {`When your phone takes a photo, it doesn't just save the image — it quietly
        tucks a block of data inside the file describing when and where the shot was
        taken and with what. That data is called EXIF, and most people share it every
        day without realizing. Here's what's in there, why it can matter, and how to
        remove it.`}
      </p>

      <h2>What EXIF metadata contains</h2>
      <p>{`A typical photo's EXIF block can include:`}</p>
      <ul>
        <li>{`GPS coordinates — the exact latitude and longitude where the photo was taken.`}</li>
        <li>{`The date and time, down to the second.`}</li>
        <li>{`The device — camera or phone make and model.`}</li>
        <li>{`Camera settings like exposure, aperture and whether the flash fired.`}</li>
      </ul>

      <h2>Why it’s a privacy risk</h2>
      <p>
        {`The GPS location is the part worth caring about. A photo posted from home,
        a school, or a workplace can reveal exactly where that is — and "where I am
        right now" is not something most people mean to publish. It's a real concern
        when selling items online, sharing pictures of children, meeting someone from
        the internet, or posting anything you'd rather not tie to a physical address.
        The timestamp and device details add a smaller but real trail of information.`}
      </p>

      <h2>Do social networks strip it for you?</h2>
      <p>
        {`Sometimes — but you can't rely on it. Most large social platforms remove
        EXIF when you upload, but many messaging apps, email attachments, cloud links
        and forums pass the original file through untouched. The only way to be sure is
        to strip the data yourself before the photo leaves your hands.`}
      </p>

      <h2>How to remove EXIF data</h2>
      <p>
        {`Our `}
        <Link href="/exif-remover">EXIF Remover</Link>
        {` cleans the metadata out of a photo entirely in your browser — fittingly for
        a privacy tool, the image is never uploaded anywhere.`}
      </p>
      <ol>
        <li>{`Open the EXIF Remover and drop in your photo.`}</li>
        <li>{`It strips the hidden metadata, including GPS.`}</li>
        <li>{`Download the clean copy and share that one instead.`}</li>
      </ol>

      <h2>Does removing EXIF change the image?</h2>
      <p>
        {`No. Stripping metadata only removes the hidden information block — the actual
        photo, its resolution and its visible quality are exactly the same. You're
        simply sending the picture without the invisible note about where and when it
        was taken. If you're also resizing or converting the photo, doing that will
        usually drop the metadata too, but a dedicated `}
        <Link href="/exif-remover">EXIF Remover</Link>
        {` is the reliable way to be certain it's gone.`}
      </p>
    </>
  ),
};
