"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import type { Tool } from "@/lib/tools/types";

function ProcessorSkeleton() {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border py-16 text-sm text-muted-foreground">
      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      Loading tool…
    </div>
  );
}

// Heavy / WASM-backed processors are loaded on the client only and kept out of
// the initial bundle so tool pages stay fast and SEO-friendly.
const loading = () => <ProcessorSkeleton />;

const MergePdfTool = dynamic(() => import("./merge-pdf/merge-pdf-tool"), { ssr: false, loading });
const ImageCompressorTool = dynamic(
  () => import("./image-compressor/image-compressor-tool"),
  { ssr: false, loading },
);
const UrlShortenerTool = dynamic(
  () => import("./url-shortener/url-shortener-tool"),
  { ssr: false, loading },
);
const TextRewriterTool = dynamic(
  () => import("./text-rewriter/text-rewriter-tool"),
  { ssr: false, loading },
);
const WordCounterTool = dynamic(
  () => import("./word-counter/word-counter-tool"),
  { ssr: false, loading },
);
const PasswordGeneratorTool = dynamic(
  () => import("./password-generator/password-generator-tool"),
  { ssr: false, loading },
);
const JsonFormatterTool = dynamic(
  () => import("./json-formatter/json-formatter-tool"),
  { ssr: false, loading },
);
const Base64Tool = dynamic(() => import("./base64/base64-tool"), { ssr: false, loading });
const QrCodeGeneratorTool = dynamic(
  () => import("./qr-code-generator/qr-code-generator-tool"),
  { ssr: false, loading },
);
const ImageConverterTool = dynamic(
  () => import("./image-converter/image-converter-tool"),
  { ssr: false, loading },
);
const ImageResizerTool = dynamic(
  () => import("./image-resizer/image-resizer-tool"),
  { ssr: false, loading },
);
const ImageToPdfTool = dynamic(
  () => import("./image-to-pdf/image-to-pdf-tool"),
  { ssr: false, loading },
);
const SplitPdfTool = dynamic(() => import("./split-pdf/split-pdf-tool"), { ssr: false, loading });
const PdfToJpgTool = dynamic(() => import("./pdf-to-jpg/pdf-to-jpg-tool"), { ssr: false, loading });
const CropImageTool = dynamic(() => import("./crop-image/crop-image-tool"), { ssr: false, loading });
const CompressPdfTool = dynamic(() => import("./compress-pdf/compress-pdf-tool"), { ssr: false, loading });
const BackgroundRemoverTool = dynamic(
  () => import("./background-remover/background-remover-tool"),
  { ssr: false, loading },
);
const Mp4ToMp3Tool = dynamic(() => import("./mp4-to-mp3/mp4-to-mp3-tool"), { ssr: false, loading });
const AudioConverterTool = dynamic(
  () => import("./audio-converter/audio-converter-tool"),
  { ssr: false, loading },
);
const CaseConverterTool = dynamic(
  () => import("./case-converter/case-converter-tool"),
  { ssr: false, loading },
);
const ColorConverterTool = dynamic(
  () => import("./color-converter/color-converter-tool"),
  { ssr: false, loading },
);
const HashGeneratorTool = dynamic(
  () => import("./hash-generator/hash-generator-tool"),
  { ssr: false, loading },
);
const RotatePdfTool = dynamic(() => import("./rotate-pdf/rotate-pdf-tool"), { ssr: false, loading });
const WatermarkPdfTool = dynamic(
  () => import("./watermark-pdf/watermark-pdf-tool"),
  { ssr: false, loading },
);
const OrganizePdfTool = dynamic(
  () => import("./organize-pdf/organize-pdf-tool"),
  { ssr: false, loading },
);
const TrimVideoTool = dynamic(() => import("./trim-video/trim-video-tool"), { ssr: false, loading });
const VideoConverterTool = dynamic(
  () => import("./video-converter/video-converter-tool"),
  { ssr: false, loading },
);
const VideoToGifTool = dynamic(() => import("./video-to-gif/video-to-gif-tool"), { ssr: false, loading });
const CharacterCounterTool = dynamic(
  () => import("./character-counter/character-counter-tool"),
  { ssr: false, loading },
);
const RemoveLineBreaksTool = dynamic(
  () => import("./remove-line-breaks/remove-line-breaks-tool"),
  { ssr: false, loading },
);
const RemoveDuplicateLinesTool = dynamic(
  () => import("./remove-duplicate-lines/remove-duplicate-lines-tool"),
  { ssr: false, loading },
);
const ReverseTextTool = dynamic(
  () => import("./reverse-text/reverse-text-tool"),
  { ssr: false, loading },
);
const TextRepeaterTool = dynamic(
  () => import("./text-repeater/text-repeater-tool"),
  { ssr: false, loading },
);
const FindAndReplaceTool = dynamic(
  () => import("./find-and-replace/find-and-replace-tool"),
  { ssr: false, loading },
);
const SlugifyTool = dynamic(() => import("./slugify/slugify-tool"), { ssr: false, loading });
const LoremIpsumTool = dynamic(
  () => import("./lorem-ipsum/lorem-ipsum-tool"),
  { ssr: false, loading },
);
const TextDiffTool = dynamic(() => import("./text-diff/text-diff-tool"), { ssr: false, loading });
const MarkdownToHtmlTool = dynamic(
  () => import("./markdown-to-html/markdown-to-html-tool"),
  { ssr: false, loading },
);
const MarkdownEditorTool = dynamic(
  () => import("./markdown-editor/markdown-editor-tool"),
  { ssr: false, loading },
);
const UuidGeneratorTool = dynamic(
  () => import("./uuid-generator/uuid-generator-tool"),
  { ssr: false, loading },
);
const TimestampConverterTool = dynamic(
  () => import("./timestamp-converter/timestamp-converter-tool"),
  { ssr: false, loading },
);
const UrlEncoderDecoderTool = dynamic(
  () => import("./url-encoder-decoder/url-encoder-decoder-tool"),
  { ssr: false, loading },
);
const HtmlEntityEncoderTool = dynamic(
  () => import("./html-entity-encoder/html-entity-encoder-tool"),
  { ssr: false, loading },
);
const JwtDecoderTool = dynamic(() => import("./jwt-decoder/jwt-decoder-tool"), { ssr: false, loading });
const RegexTesterTool = dynamic(() => import("./regex-tester/regex-tester-tool"), { ssr: false, loading });
const NumberBaseConverterTool = dynamic(
  () => import("./number-base-converter/number-base-converter-tool"),
  { ssr: false, loading },
);
const JsonToCsvTool = dynamic(() => import("./json-to-csv/json-to-csv-tool"), { ssr: false, loading });
const CsvToJsonTool = dynamic(() => import("./csv-to-json/csv-to-json-tool"), { ssr: false, loading });

export function ToolProcessor({ tool }: { tool: Tool }) {
  if (tool.comingSoon) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-muted/30 py-16 text-center text-sm text-muted-foreground">
        This tool is coming soon.
      </div>
    );
  }

  switch (tool.slug) {
    case "merge-pdf":
      return <MergePdfTool tool={tool} />;
    case "image-compressor":
      return <ImageCompressorTool tool={tool} />;
    case "url-shortener":
      return <UrlShortenerTool />;
    case "text-rewriter":
      return <TextRewriterTool />;
    case "word-counter":
      return <WordCounterTool />;
    case "password-generator":
      return <PasswordGeneratorTool />;
    case "json-formatter":
      return <JsonFormatterTool />;
    case "base64":
      return <Base64Tool />;
    case "qr-code-generator":
      return <QrCodeGeneratorTool />;
    case "image-converter":
      return <ImageConverterTool tool={tool} />;
    case "image-resizer":
      return <ImageResizerTool tool={tool} />;
    case "image-to-pdf":
      return <ImageToPdfTool tool={tool} />;
    case "split-pdf":
      return <SplitPdfTool tool={tool} />;
    case "pdf-to-jpg":
      return <PdfToJpgTool tool={tool} />;
    case "crop-image":
      return <CropImageTool tool={tool} />;
    case "compress-pdf":
      return <CompressPdfTool tool={tool} />;
    case "background-remover":
      return <BackgroundRemoverTool tool={tool} />;
    case "mp4-to-mp3":
      return <Mp4ToMp3Tool tool={tool} />;
    case "audio-converter":
      return <AudioConverterTool tool={tool} />;
    case "case-converter":
      return <CaseConverterTool />;
    case "color-converter":
      return <ColorConverterTool />;
    case "hash-generator":
      return <HashGeneratorTool />;
    case "rotate-pdf":
      return <RotatePdfTool tool={tool} />;
    case "watermark-pdf":
      return <WatermarkPdfTool tool={tool} />;
    case "organize-pdf":
      return <OrganizePdfTool tool={tool} />;
    case "trim-video":
      return <TrimVideoTool tool={tool} />;
    case "video-converter":
      return <VideoConverterTool tool={tool} />;
    case "video-to-gif":
      return <VideoToGifTool tool={tool} />;
    case "character-counter":
      return <CharacterCounterTool />;
    case "remove-line-breaks":
      return <RemoveLineBreaksTool />;
    case "remove-duplicate-lines":
      return <RemoveDuplicateLinesTool />;
    case "reverse-text":
      return <ReverseTextTool />;
    case "text-repeater":
      return <TextRepeaterTool />;
    case "find-and-replace":
      return <FindAndReplaceTool />;
    case "slugify":
      return <SlugifyTool />;
    case "lorem-ipsum":
      return <LoremIpsumTool />;
    case "text-diff":
      return <TextDiffTool />;
    case "markdown-to-html":
      return <MarkdownToHtmlTool />;
    case "markdown-editor":
      return <MarkdownEditorTool />;
    case "uuid-generator":
      return <UuidGeneratorTool />;
    case "timestamp-converter":
      return <TimestampConverterTool />;
    case "url-encoder-decoder":
      return <UrlEncoderDecoderTool />;
    case "html-entity-encoder":
      return <HtmlEntityEncoderTool />;
    case "jwt-decoder":
      return <JwtDecoderTool />;
    case "regex-tester":
      return <RegexTesterTool />;
    case "number-base-converter":
      return <NumberBaseConverterTool />;
    case "json-to-csv":
      return <JsonToCsvTool />;
    case "csv-to-json":
      return <CsvToJsonTool />;
    default:
      return (
        <div className="rounded-xl border border-dashed border-border bg-muted/30 py-16 text-center text-sm text-muted-foreground">
          This tool is coming soon.
        </div>
      );
  }
}
