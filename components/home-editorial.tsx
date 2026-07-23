import {
  MousePointerClick,
  Cpu,
  Download,
  ShieldCheck,
  Zap,
  Gift,
  UserX,
  Stamp,
  MonitorSmartphone,
} from "lucide-react";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Pick a tool",
    text: "Search or browse by category to find the right tool for the job.",
  },
  {
    icon: Cpu,
    title: "It runs in your browser",
    text: "Your files are processed on your device — they're never uploaded.",
  },
  {
    icon: Download,
    title: "Get your result",
    text: "Download instantly. No sign-up, no waiting, no watermark.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Private by design",
    text: "Files are processed locally and never leave your device.",
  },
  {
    icon: Zap,
    title: "Fast, no queues",
    text: "No upload waits and no server-side processing limits.",
  },
  {
    icon: Gift,
    title: "Free, always",
    text: "Every tool is free and unlimited, supported by ads.",
  },
  {
    icon: UserX,
    title: "No sign-up",
    text: "Nothing to register — no email needed to use a tool.",
  },
  {
    icon: Stamp,
    title: "No watermarks",
    text: "Your results come out clean, with nothing stamped on top.",
  },
  {
    icon: MonitorSmartphone,
    title: "Works anywhere",
    text: "Any modern browser, on desktop or mobile.",
  },
];

/**
 * Editorial section for the home page (below the tools): a short intro, a
 * three-step "how it works", and a grid of what In1 stands for. Original prose
 * that gives the most-crawled page real content beyond the tool tiles.
 */
export function HomeEditorial() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20">
      {/* Intro */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Free tools that respect your time — and your privacy
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          In1 brings dozens of everyday utilities into one place — for PDFs, images,
          video and audio, text, the web, and quick calculations. No installs, no
          accounts, no watermarks. Open a tool and get it done.
        </p>
      </div>

      {/* How it works */}
      <div className="mt-16">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          How it works
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm font-semibold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-base font-semibold tracking-tight">{title}</h4>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why In1 */}
      <div className="mt-16">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Why In1
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <h4 className="text-base font-semibold tracking-tight">{title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
