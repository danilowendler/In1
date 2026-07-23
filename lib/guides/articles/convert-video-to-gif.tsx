import Link from "next/link";
import type { Guide } from "@/lib/guides/types";

export const guide: Guide = {
  slug: "convert-video-to-gif",
  title: "How to convert a video to GIF (and keep it small)",
  description:
    "Why GIFs balloon in size, how to turn a short clip into a GIF in your browser, and the four settings that actually control the final file size.",
  datePublished: "2026-06-21",
  dateLabel: "June 21, 2026",
  readingMinutes: 5,
  relatedTools: ["video-to-gif"],
  body: (
    <>
      <p>
        {`A GIF is the quickest way to share a short, silent, looping moment — a
        reaction, a UI demo, a highlight from a clip. The catch is that GIFs are an
        old format and get large fast, and a 20 MB GIF defeats the purpose. This guide
        shows how to make one from a video in your browser and, just as importantly,
        how to keep it small.`}
      </p>

      <h2>What makes a GIF large</h2>
      <p>
        {`A GIF stores a full frame for every moment of animation, so its size is
        driven by four things:`}
      </p>
      <ul>
        <li>{`Duration — every extra second adds more frames.`}</li>
        <li>{`Dimensions — a 1080p GIF has four times the pixels of a 540p one.`}</li>
        <li>{`Frame rate — more frames per second means smoother motion but a bigger file.`}</li>
        <li>{`Visual complexity — lots of movement and color compresses worse than a mostly-static shot.`}</li>
      </ul>
      <p>
        {`Understanding these is the whole game: shrinking a GIF is just dialing back
        whichever of the four you can afford to lose.`}
      </p>

      <h2>How to convert a video to GIF</h2>
      <p>
        {`Our `}
        <Link href="/video-to-gif">Video to GIF</Link>
        {` tool does the conversion entirely in your browser using WebAssembly, so
        your video is never uploaded to a server. That keeps private clips private and
        works on files that an upload-based site would reject.`}
      </p>
      <ol>
        <li>{`Open the tool and drop in your video clip.`}</li>
        <li>{`Trim it to just the seconds you want — this is the biggest size saver.`}</li>
        <li>{`Convert and download your GIF.`}</li>
      </ol>

      <h2>How to keep the file small</h2>
      <ul>
        <li>{`Keep it short. A GIF really wants to be 2-6 seconds. If you need more, it probably shouldn't be a GIF.`}</li>
        <li>{`Reduce the dimensions. Most GIFs are shared small; 480-600 px wide is plenty and can halve the size.`}</li>
        <li>{`Lower the frame rate. 10-15 fps looks fine for most content and is much lighter than 30.`}</li>
        <li>{`Crop out anything that isn't the point — fewer moving pixels compress better.`}</li>
      </ul>

      <h2>When a GIF is the wrong tool</h2>
      <p>
        {`GIFs are convenient but inefficient. For anything longer than a few seconds,
        or where quality matters, a short muted video (MP4 or WebP) is dramatically
        smaller and sharper — most social platforms and chat apps now autoplay them
        just like a GIF. Reach for a GIF when you specifically need the drop-anywhere,
        always-loops behavior; otherwise `}
        <Link href="/video-converter">converting the clip to a compact video</Link>
        {` is usually the better call.`}
      </p>
    </>
  ),
};
