import type { CategoryMeta, Tool, ToolCategory } from "./types";

/**
 * Category metadata, used for navigation and the homepage groupings.
 * Adding a category here makes it available everywhere automatically.
 */
export const categories: CategoryMeta[] = [
  { slug: "pdf", label: "PDF", icon: "file-text", description: "Merge, split, compress and convert PDF documents." },
  { slug: "image", label: "Image", icon: "image", description: "Compress, resize and clean up images." },
  { slug: "video", label: "Video & Audio", icon: "film", description: "Convert and extract audio from video files." },
  { slug: "text", label: "Text & AI", icon: "type", description: "Rewrite, summarize and transform text." },
  { slug: "web", label: "Web", icon: "globe", description: "Links, QR codes and everyday web utilities." },
];

/**
 * The single source of truth for every tool on In1.
 *
 * Adding a new tool = adding one object here + (for interactive tools) a
 * processor component wired into `components/tools/tool-processor.tsx`.
 * Pages, metadata, sitemap entries and JSON-LD schema are all derived from this.
 */
export const tools: Tool[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "merge-pdf",
    category: "pdf",
    name: "Merge PDF",
    shortDescription: "Combine several PDF files into one ordered document.",
    icon: "combine",
    processing: "client",
    accept: ["application/pdf"],
    multiple: true,
    keywords: ["merge pdf", "combine pdf", "join pdf files", "pdf merger online", "merge pdf free"],
    metaTitle: "Merge PDF — Combine PDF Files Online Free | In1",
    metaDescription:
      "Merge multiple PDF files into a single document for free. Fast and private — files are combined in your browser, with no uploads, watermarks or sign-up.",
    h1: "Merge PDF files online",
    intro:
      "Combine two or more PDFs into one tidy document in seconds. Drag your files in, drag them into the order you want, and download a single merged PDF. Everything happens locally in your browser, so your documents never leave your device.",
    sections: [
      {
        heading: "Combine PDFs without uploading them anywhere",
        body: "Most online PDF mergers upload your files to a server, process them there, and send the result back. That is slow, it puts your private documents on someone else's machine, and it often comes with file-size caps or watermarks. In1 takes a different approach: the merge runs entirely inside your browser using WebAssembly. Your contracts, invoices, scanned IDs and reports are never transmitted over the network, which makes this one of the most private ways to combine PDFs online. It is also fast, because there is no upload-and-wait round trip — small files are typically merged in well under a second.",
      },
      {
        heading: "Reorder pages and files before you merge",
        body: "Merging is rarely just 'glue file A to file B'. You usually need the cover letter first, then the report, then the appendix. In1 lets you add as many PDFs as you like and rearrange them into exactly the sequence you want before producing the final document. Add a file you didn't mean to include? Remove it with a single click. The order you see on screen is the order in the downloaded file, so there are no surprises.",
      },
      {
        heading: "Free, unlimited and watermark-free",
        body: "There is no account to create, no email to hand over and no premium upsell standing between you and your merged PDF. You can combine as many documents as you want, as often as you want, and the output is a clean PDF with no watermark stamped across the pages. Because the heavy lifting happens on your own computer, there are no per-file fees and no daily limits to worry about.",
      },
      {
        heading: "Works on any device with a modern browser",
        body: "In1 is built mobile-first, so merging PDFs works just as well on a phone or tablet as it does on a laptop. There is nothing to install — no desktop app, no browser extension, no plugin. As long as you have a recent version of Chrome, Edge, Firefox or Safari, you can merge PDFs on the spot, whether you are putting together an application packet at home or assembling a report on the go.",
      },
      {
        heading: "Common ways people use Merge PDF",
        body: "People combine PDFs for all sorts of reasons: stitching together scanned pages into a single file, bundling a resume with a cover letter and portfolio, joining monthly statements into one annual archive, combining signed contract pages, or assembling chapters of an ebook. Because the tool keeps the original quality of each page and simply concatenates them, the result looks exactly like the source documents — just in one convenient file.",
      },
    ],
    howTo: [
      { name: "Add your PDFs", text: "Drag your PDF files into the drop area, or click to browse and select them from your device." },
      { name: "Put them in order", text: "Move files up or down so they appear in the sequence you want in the final document." },
      { name: "Merge", text: "Click 'Merge PDFs' and the files are combined locally in your browser within seconds." },
      { name: "Download", text: "Download the single merged PDF. No watermark, no sign-up, no upload." },
    ],
    faq: [
      { q: "Is it really free to merge PDF files?", a: "Yes. Merging PDFs on In1 is completely free with no limits, no account and no watermark on the output." },
      { q: "Are my files uploaded to a server?", a: "No. The merge happens entirely in your browser using WebAssembly, so your PDFs never leave your device." },
      { q: "How many PDFs can I combine at once?", a: "There is no fixed limit. The practical ceiling depends on your device's memory, but combining dozens of typical documents works fine." },
      { q: "Can I change the order of the files?", a: "Yes. After adding your files you can move each one up or down, and the final PDF follows the order shown on screen." },
      { q: "Will the quality of my pages change?", a: "No. Pages are copied as-is into the new document, so text stays selectable and images keep their original resolution." },
      { q: "Does it work on mobile?", a: "Yes. The tool is mobile-first and runs in any modern phone or tablet browser without installing anything." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "image-compressor",
    category: "image",
    name: "Image Compressor",
    shortDescription: "Shrink JPG, PNG and WebP images while keeping them sharp.",
    icon: "image-down",
    processing: "client",
    accept: ["image/jpeg", "image/png", "image/webp"],
    multiple: false,
    keywords: ["image compressor", "compress image online", "reduce image size", "compress jpg", "compress png"],
    metaTitle: "Image Compressor — Compress JPG, PNG & WebP Free | In1",
    metaDescription:
      "Compress images online for free without losing quality. Reduce JPG, PNG and WebP file size right in your browser — no uploads, no watermark, no sign-up.",
    h1: "Compress images online",
    intro:
      "Make your photos and graphics dramatically smaller without an obvious drop in quality. Choose a target quality, and In1 re-encodes the image in your browser and shows you exactly how much space you saved. Your images are never uploaded.",
    sections: [
      {
        heading: "Smaller files, faster everything",
        body: "Large images are the number-one cause of slow web pages, sluggish email attachments and full phone storage. A single photo straight from a modern camera can weigh several megabytes — far more than it needs to for screen use. Compressing it can cut the size by 70–90% while keeping it visually crisp. Smaller images load faster, improve your site's Core Web Vitals, send more reliably over email, and let you fit far more on a device or in cloud storage.",
      },
      {
        heading: "Control quality with a single slider",
        body: "Compression is always a trade-off between file size and visual fidelity, so In1 puts that trade-off directly in your hands. A quality slider lets you dial in exactly how aggressive the compression should be, and the tool reports the original size, the compressed size and the percentage saved so you can find the sweet spot. For most photos a mid-range setting removes the bulk of the weight with no perceptible difference; for thumbnails or background images you can push it further.",
      },
      {
        heading: "Private by design — nothing leaves your browser",
        body: "Family photos, product shots, screenshots of sensitive information — images can be just as private as documents. That is why In1 compresses them locally using the browser's own image pipeline. The file you pick is read into memory, re-encoded and offered back to you as a download, all without a single byte being sent to a server. There is no upload progress bar because there is no upload.",
      },
      {
        heading: "Supports JPG, PNG and WebP",
        body: "The compressor handles the three formats that cover the vast majority of images on the web. JPGs (great for photographs) are re-encoded at your chosen quality; PNGs (great for graphics and screenshots with sharp edges) are optimized; and WebP — the modern format that often beats both — is supported as well. The output keeps the format that makes the most sense for your image, so you get the best balance of size and quality.",
      },
      {
        heading: "Who uses an image compressor?",
        body: "Bloggers and site owners compress images so their pages score well on PageSpeed and rank better. Online sellers shrink product photos so listings load instantly. Students and office workers compress scans and screenshots to slip under email attachment limits. Designers create lightweight previews to share for feedback. Whatever the reason, the goal is the same: keep the picture looking good while making the file small — and do it in seconds, for free.",
      },
    ],
    howTo: [
      { name: "Choose an image", text: "Drag a JPG, PNG or WebP file into the drop area, or click to select one from your device." },
      { name: "Set the quality", text: "Use the quality slider to balance file size against visual fidelity." },
      { name: "Compress", text: "In1 re-encodes the image in your browser and shows the original vs. compressed size." },
      { name: "Download", text: "Save the smaller image. The original file is never uploaded anywhere." },
    ],
    faq: [
      { q: "Does compressing reduce image quality?", a: "Some quality is traded for size, but at typical settings the difference is hard to notice. You control exactly how aggressive the compression is with the quality slider." },
      { q: "Are my images uploaded?", a: "No. Compression runs entirely in your browser, so your images stay on your device." },
      { q: "Which formats are supported?", a: "JPG/JPEG, PNG and WebP. The tool keeps the format that best fits your image." },
      { q: "Is there a file size limit?", a: "There is no hard limit set by In1; very large images are limited only by your device's available memory." },
      { q: "How much smaller will my image be?", a: "It depends on the image and your quality setting, but reductions of 60–90% are common for photos." },
      { q: "Is it free?", a: "Yes, completely free with no watermark and no account required." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "url-shortener",
    category: "web",
    name: "URL Shortener",
    shortDescription: "Turn long links into short, shareable URLs with click tracking.",
    icon: "link",
    processing: "server",
    keywords: ["url shortener", "shorten url", "short link generator", "link shortener free", "make short url"],
    metaTitle: "URL Shortener — Create Short Links Free | In1",
    metaDescription:
      "Shorten long URLs into clean, shareable short links for free. Create tidy links for social media, messages and print — with built-in click counting.",
    h1: "Shorten your URLs",
    intro:
      "Paste a long, messy link and get a short, tidy one you can share anywhere. Short links are easier to read, look more trustworthy, fit inside character-limited posts, and let you see how many times they were clicked.",
    sections: [
      {
        heading: "Why short links matter",
        body: "Long URLs are ugly and fragile. They wrap awkwardly in emails, get truncated in chat apps, eat into character limits on social media, and are nearly impossible to type from a printed page or a slide. A short link solves all of that: it is compact, it looks clean and intentional, and it survives copy-paste without breaking. Whether you are sharing a campaign landing page, a document, or a product listing, a short link makes the destination feel more trustworthy and easier to act on.",
      },
      {
        heading: "Track how your links perform",
        body: "Every short link you create on In1 counts how many times it has been opened. That simple number tells you a lot: which post drove the most traffic, whether your newsletter link is getting clicks, or how a printed link is performing. Because the redirect happens through our server, the count stays accurate even when the link is shared and re-shared across different platforms.",
      },
      {
        heading: "Clean links for social, print and messaging",
        body: "Short links shine wherever space or readability is tight. On social media they leave more room for your message. In SMS and chat they avoid the dreaded line-wrap. On flyers, business cards and slides they are short enough to read aloud or type by hand. And in emails they keep your call-to-action looking polished instead of dumping a wall of query parameters in front of the reader.",
      },
      {
        heading: "Fast, free and no account needed",
        body: "Creating a short link takes one paste and one click — there is no sign-up wall, no credit card and no daily quota to think about. In1 generates a unique short code, stores the mapping to your original URL, and hands you a link you can copy immediately. The redirect is near-instant, sending visitors to the original destination the moment they click.",
      },
      {
        heading: "How URL shortening works",
        body: "When you submit a long URL, In1 generates a short, unique code and saves the pair (code → original link) in a secure database. The short link points at our redirect endpoint; when someone opens it, the server looks up the code, increments the click counter, and forwards the visitor to the original address. From the visitor's point of view it is seamless — they click a short link and land exactly where you intended, while you get a tidy URL and a running tally of clicks.",
      },
    ],
    howTo: [
      { name: "Paste your long URL", text: "Drop the full link you want to shorten into the input field." },
      { name: "Create the short link", text: "Click 'Shorten' and In1 generates a unique short URL instantly." },
      { name: "Copy and share", text: "Copy your new short link and use it anywhere — social, email, print or chat." },
      { name: "Watch the clicks", text: "The link tracks how many times it has been opened so you can measure interest." },
    ],
    faq: [
      { q: "Is the URL shortener free?", a: "Yes. You can create short links for free with no account required." },
      { q: "Do short links expire?", a: "Links stay active so long as they remain in our system. We may remove links flagged as abusive or unsafe." },
      { q: "Can I see how many clicks my link gets?", a: "Yes. Every link counts the number of times it has been opened." },
      { q: "Can I shorten any URL?", a: "You can shorten standard http and https links. Links pointing to malware, phishing or other abuse are not allowed." },
      { q: "Will the short link work on every device?", a: "Yes. A short link is just a normal web address, so it works in any browser or app on any device." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "text-rewriter",
    category: "text",
    name: "AI Text Rewriter",
    shortDescription: "Rewrite, improve, summarize or change the tone of any text with AI.",
    icon: "sparkles",
    processing: "server",
    keywords: ["text rewriter", "ai rewriter", "paraphrasing tool", "rewrite text online", "paraphrase text"],
    metaTitle: "AI Text Rewriter — Rewrite & Improve Text Free | In1",
    metaDescription:
      "Rewrite, improve, summarize or change the tone of any text with AI, for free. Paste your text, pick a style and get the new version instantly.",
    h1: "Rewrite text with AI",
    intro:
      "Paste any text and let AI rewrite it the way you need: clearer, more formal, more casual, shorter, corrected or expanded. Choose a style, hit rewrite, and watch the new version appear in real time.",
    sections: [
      {
        heading: "Several rewriting styles in one place",
        body: "Not every piece of text needs the same treatment. Sometimes you just want the wording to be clearer and smoother; other times you need a formal tone for a professional email, or a casual tone for social media. In1's AI Text Rewriter brings the most useful modes together in one click: improve the writing, make it formal, make it casual, summarize, fix the grammar, or expand with more detail. Instead of agonizing over how to rephrase each sentence, you pick the goal and let the AI do the heavy lifting.",
      },
      {
        heading: "Real-time results, in your text's language",
        body: "The response streams in word by word, so you are not staring at a blank screen waiting for processing to finish. The AI also respects the language of the original text — paste something in English and you get the rewrite in English; paste Portuguese and you get Portuguese. The focus is on delivering just the rewritten text, with no explanations or extra commentary, ready to copy and use.",
      },
      {
        heading: "What a text rewriter is for",
        body: "The uses are endless. Students paraphrase passages and improve the clarity of essays. Professionals adjust the tone of emails and messages to sound more formal or more friendly. Content creators generate variations of captions and descriptions. People writing in a second language use the grammar fix to gain confidence. And anyone stuck on a clumsy sentence can ask for a better version in seconds.",
      },
      {
        heading: "Free and frictionless",
        body: "Rewriting text on In1 is free and requires no account. There is no long form, no credit card and no watermark on the result. You paste your text, choose a style and get the new version — that simple. The tool is built to be fast on both phone and desktop, with a clean interface that stays out of your way.",
      },
      {
        heading: "Tips for better rewrites",
        body: "For the best result, start with text that makes sense — the AI improves the form, but it won't invent the content that's missing. If the text is very long, break it into parts and rewrite each one; that way you keep control of the tone in every passage. Try different modes on the same text: sometimes 'improve' is enough, but 'summarize' or 'expand' can reveal an even better version. And remember to review the result: the AI is a great writing assistant, but the final word is always yours.",
      },
    ],
    howTo: [
      { name: "Paste your text", text: "Type or paste the content you want to rewrite into the text field." },
      { name: "Choose a style", text: "Select the mode you want: improve, formal, casual, summarize, fix grammar or expand." },
      { name: "Rewrite", text: "Click 'Rewrite' and watch the new version appear in real time." },
      { name: "Copy and use", text: "Copy the rewritten text with one click and use it wherever you need it." },
    ],
    faq: [
      { q: "Is the text rewriter free?", a: "Yes. You can rewrite text for free, with no account required." },
      { q: "Which rewriting styles are available?", a: "Improve the writing, make it formal, make it casual, summarize, fix grammar, and expand the text with more detail." },
      { q: "Does the AI keep my text's language?", a: "Yes. The rewrite is delivered in the same language as the text you paste in." },
      { q: "Is there a length limit?", a: "To keep responses fast, there is a per-rewrite limit. For long texts, split them into parts and rewrite one at a time." },
      { q: "Is my text stored?", a: "Your text is sent to the AI provider only to generate the rewrite and is not shown publicly. Avoid pasting sensitive data." },
      { q: "Is the result always perfect?", a: "The AI is an excellent writing assistant, but we recommend reviewing the result before using it, especially in important contexts." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "word-counter",
    category: "text",
    name: "Word Counter",
    shortDescription: "Count words, characters, sentences and reading time as you type.",
    icon: "align-left",
    processing: "client",
    keywords: ["word counter", "character counter", "count words", "words to time", "reading time calculator"],
    metaTitle: "Word Counter — Count Words & Characters Online Free | In1",
    metaDescription:
      "Free online word counter. Count words, characters, sentences, paragraphs and estimated reading time live as you type — private, in your browser, no sign-up.",
    h1: "Word and character counter",
    intro:
      "Paste or type your text and instantly see the word count, character count, sentences, paragraphs and estimated reading time. Everything updates live as you write, and your text never leaves your browser.",
    sections: [
      {
        heading: "Every count you need, updated live",
        body: "A good word counter does more than count words. As you type or paste, In1 tracks the metrics that actually matter for writing: the number of words, the number of characters with spaces, the number of characters without spaces, the number of sentences and the number of paragraphs. Each figure refreshes instantly with every keystroke, so you always know exactly where you stand against a target without clicking a button or reloading anything. Whether you are trimming a paragraph down to size or padding an essay up to a minimum, the live feedback turns guesswork into a precise, real-time gauge of your progress. Having every statistic visible at once also helps you understand the shape of your writing, not just its length: a high word count spread across very few sentences hints at long, run-on constructions, while many short paragraphs can signal choppy pacing. Instead of switching between separate tools or pasting your text into a spreadsheet, you get the full picture in a single glance and can keep editing in the same place.",
      },
      {
        heading: "Hit word and character limits with confidence",
        body: "So much writing comes with a hard limit. Meta descriptions and title tags are capped by characters, tweets and social posts have strict ceilings, college essays demand a minimum word count, and academic abstracts must fit inside a tight range. Guessing leads to rejected forms and truncated posts. With a precise character counter and word counter side by side, you can write right up to the edge of any limit and stop with confidence. It is especially handy for SEO work, where a title that runs a few characters too long simply gets cut off in search results, and a meta description that overflows loses the very words meant to earn the click. The same applies to job applications with strict word caps, grant proposals, product descriptions on marketplaces, and bios for social profiles. Because both character totals are shown — with and without spaces — you can match whichever rule a given platform uses, since some count spaces toward the limit and others do not.",
      },
      {
        heading: "Estimated reading time at a glance",
        body: "Reading time is one of the most useful signals you can put in front of an audience, and it is calculated here automatically. In1 estimates how long your text takes to read using an average adult reading speed of roughly 200 words per minute, a widely used benchmark for general prose. The result helps bloggers add an honest 'X min read' label to articles, helps speakers gauge whether a script fits a time slot, and helps students sense how long a passage really is. Because the estimate updates live, you can watch the reading time grow or shrink as you edit, which makes it easy to trim a talk down to fit a five-minute slot or expand an article toward a target length. Readers increasingly expect that little time estimate at the top of a post, and providing an accurate one sets honest expectations and tends to improve how many people start and finish the piece.",
      },
      {
        heading: "Private by design — nothing is uploaded",
        body: "Your words can be sensitive: an unpublished article, a confidential report, a personal cover letter or a draft you are not ready to share. In1 counts everything locally in your browser using plain JavaScript, so not a single character is sent to a server. There is no upload, no storage and no account. You can paste an entire manuscript and the counting still happens instantly on your own device. When you close the tab, the text is gone — which makes this one of the safest ways to analyze writing you would rather keep to yourself. This local-only approach is not just about privacy; it is also what makes the tool so fast and reliable. There is no waiting for a request to travel to a server and back, no spinner, and no failure if your connection drops. The counting works exactly the same whether you are online or offline, and a very long document is handled just as smoothly as a single sentence.",
      },
      {
        heading: "Who uses a word counter?",
        body: "The audience is huge because almost everyone writes to a constraint. Students check essays against assignment minimums and maximums. Content writers and bloggers optimize article length and reading time for both readers and search engines. Marketers craft ad copy, captions and email subject lines that must fit inside platform limits. Authors and journalists track daily word counts and section lengths to keep a steady pace toward a deadline. Translators and editors measure text volume to estimate effort and pricing, since work is often quoted per word or per thousand words. Even casual users lean on it to keep a message concise or to confirm a forum post fits a length rule. Non-native speakers use it to monitor how long their sentences run, a simple proxy for clarity. Whatever you are writing, seeing the numbers live helps you shape it to exactly the right size, so the final piece reads the way you intended and meets whatever requirement it has to satisfy.",
      },
    ],
    howTo: [
      { name: "Add your text", text: "Type directly into the box, or paste text you have copied from anywhere." },
      { name: "Read the live counts", text: "Words, characters, sentences, paragraphs and reading time update instantly as you write." },
      { name: "Edit to fit your target", text: "Trim or expand your text while watching the counts move toward your goal." },
      { name: "Copy when you're done", text: "Copy the finished text with one click and paste it wherever you need it." },
    ],
    faq: [
      { q: "Is the word counter free?", a: "Yes. Counting words and characters on In1 is completely free, with no account and no limits." },
      { q: "Is my text uploaded anywhere?", a: "No. All counting happens locally in your browser, so your text never leaves your device." },
      { q: "How is reading time calculated?", a: "Reading time is estimated from your word count using an average speed of about 200 words per minute, a common benchmark for general reading." },
      { q: "How do you count words?", a: "Words are counted by splitting the text on spaces and line breaks and ignoring empty gaps, so multiple spaces between words don't inflate the total." },
      { q: "Does it count characters with and without spaces?", a: "Yes. You get both totals, which is useful for limits that include spaces (like meta tags) and ones that don't." },
      { q: "Is there a length limit?", a: "There is no fixed limit. Because counting runs on your own device, you can analyze anything from a sentence to a full manuscript." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "password-generator",
    category: "web",
    name: "Password Generator",
    shortDescription: "Create strong, random passwords with cryptographic security.",
    icon: "key-round",
    processing: "client",
    keywords: ["password generator", "strong password generator", "random password", "secure password generator", "create password"],
    metaTitle: "Password Generator — Create Strong Random Passwords | In1",
    metaDescription:
      "Generate strong, random and secure passwords for free. Choose length and character types — built with cryptographic randomness, fully in your browser, no sign-up.",
    h1: "Strong password generator",
    intro:
      "Create a strong, truly random password in one click. Pick the length and the character types you want, and In1 builds a secure password using your browser's cryptographic random generator. Nothing is sent anywhere — the password is created and shown only on your device.",
    sections: [
      {
        heading: "Why random passwords matter",
        body: "The passwords people invent themselves are far weaker than they feel. Names, dates, favorite teams and predictable substitutions like 'P@ssw0rd' are exactly what attackers try first, and reused passwords mean a single leak can unlock dozens of accounts. A randomly generated password has no pattern to guess: every character is independent, so the only way to break it is brute force, which becomes astronomically slow as length grows. Generating a fresh random password for each account — and storing it in a password manager — is the single most effective habit for keeping your online life secure. Most large-scale account takeovers don't involve some clever hack at all; they happen because a password leaked from one breached site is quietly tried against email, banking and social accounts elsewhere. A unique random password per account breaks that chain completely, so even if one service is compromised, the damage stops there instead of spreading across your whole digital life.",
      },
      {
        heading: "Built on real cryptographic randomness",
        body: "Not all randomness is equal. Many simple tools rely on JavaScript's Math.random(), which is fast but predictable and never meant for security. In1 instead uses the Web Crypto API — specifically crypto.getRandomValues() — the same cryptographically secure random source browsers use for sensitive operations. That means the characters in your password are drawn from a high-quality, unpredictable entropy source, not a guessable sequence. The generator also makes sure every character type you enable actually appears in the result, so a password meant to include numbers and symbols never comes out missing them by chance. After guaranteeing one character from each selected set, it fills the rest from the combined pool and then shuffles everything, so the required characters aren't predictably parked at the front. The difference between a secure random source and a predictable one is not academic: a password built from a weak generator can sometimes be reproduced by an attacker who knows the algorithm, while one built from real entropy cannot.",
      },
      {
        heading: "You control length and character types",
        body: "Strength comes from two levers, and both are in your hands. Length is the most powerful: each extra character multiplies the number of possible combinations, so a longer password is exponentially harder to crack. Variety is the second: mixing uppercase letters, lowercase letters, numbers and symbols expands the pool each character is chosen from. With In1 you set the exact length with a slider and toggle the four character groups on or off to satisfy whatever rules a particular site enforces. Want a long passphrase-length secret or a short PIN-style code? Both are a couple of clicks away. The live preview regenerates as soon as you change an option, so you can immediately see the effect of adding symbols or stretching the length. Some sites stubbornly reject certain symbols or cap the length, and being able to dial the exact mix means you can always produce a password that is both as strong as possible and actually accepted by the form in front of you.",
      },
      {
        heading: "Generated privately in your browser",
        body: "A password is only secret if no one else ever sees it. That is why In1 generates yours entirely on your own device. The random characters are assembled in your browser and displayed only to you; nothing is transmitted over the network, logged on a server or saved anywhere. There is no account to create and no history to leak. When you copy the password and close the tab, no trace of it remains here. This local-only approach removes the biggest risk of online generators — the possibility that the very tool creating your password could be recording it. It is worth being skeptical of any generator that sends your password to a server, because there is simply no good reason for it to do so; everything needed to create a strong password already exists in your browser. Because the work is local, generation is also instant and keeps working even with no internet connection, so you can create credentials anywhere, anytime.",
      },
      {
        heading: "Tips for using your new password",
        body: "A strong password works best as part of good habits. Use a unique one for every account so a breach on one site can't cascade to others. Store them in a reputable password manager rather than a notebook or a text file, and let the manager autofill them so you never have to type or remember the random string. Turn on two-factor authentication wherever it is offered for a second layer of defense, ideally with an authenticator app rather than SMS. For the accounts that matter most — email, banking, work — favor longer passwords with all character types enabled, since your email in particular is the master key that can reset many of your other logins. Avoid emailing or texting passwords to yourself, and never reuse a password just because it is convenient. Finally, change a password immediately if a service you use reports a data breach, and take the opportunity to replace any other account that shared it.",
      },
    ],
    howTo: [
      { name: "Set the length", text: "Drag the slider to choose how many characters your password should have — longer is stronger." },
      { name: "Pick character types", text: "Toggle uppercase, lowercase, numbers and symbols to match the rules of the site you're using." },
      { name: "Generate", text: "Click 'Generate' to create a fresh random password using your browser's secure random source." },
      { name: "Copy and store it", text: "Copy the password and save it in your password manager. It's never sent anywhere." },
    ],
    faq: [
      { q: "Is the password generator free?", a: "Yes. You can generate as many secure passwords as you like for free, with no account required." },
      { q: "Are the passwords really random and secure?", a: "Yes. Passwords are built with the Web Crypto API (crypto.getRandomValues), a cryptographically secure random source, not the predictable Math.random()." },
      { q: "Are my passwords sent or stored anywhere?", a: "No. Every password is generated locally in your browser and displayed only to you. Nothing is transmitted or saved." },
      { q: "How long should my password be?", a: "For most accounts 16 characters or more is a good target; for critical accounts, go longer and enable all character types." },
      { q: "Can I choose which characters to include?", a: "Yes. You can toggle uppercase letters, lowercase letters, numbers and symbols, and the generator guarantees each enabled type appears." },
      { q: "How should I store the generated password?", a: "Use a reputable password manager so you don't have to remember it, and enable two-factor authentication where possible." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "json-formatter",
    category: "web",
    name: "JSON Formatter",
    shortDescription: "Beautify, validate and minify JSON instantly in your browser.",
    icon: "braces",
    processing: "client",
    keywords: ["json formatter", "json beautifier", "format json", "json validator", "minify json"],
    metaTitle: "JSON Formatter — Beautify, Validate & Minify JSON | In1",
    metaDescription:
      "Free online JSON formatter. Beautify, validate and minify JSON with clear error messages — runs entirely in your browser, no uploads, no sign-up.",
    h1: "JSON formatter and validator",
    intro:
      "Paste messy or minified JSON and get it cleanly formatted with proper indentation, or compress it down to a single line. Invalid JSON is caught with a clear, friendly error so you can fix it fast. Everything runs locally in your browser.",
    sections: [
      {
        heading: "Beautify JSON for readability",
        body: "Raw JSON from an API or a log file is often a single dense line with no spacing, which is almost impossible to read or debug by eye. The formatter re-indents your JSON with consistent two-space nesting so the structure becomes obvious at a glance: objects, arrays and nested values line up exactly where you expect them. Pretty-printing makes it far easier to spot a missing field, trace a nested path, or compare two responses. Paste in whatever you have — compact, half-formatted or pasted from a terminal — and get back a tidy, properly indented document you can actually read. Once the structure is visible, problems that were hidden in a wall of text jump out: an array where you expected an object, a value that is a string when it should be a number, or a branch that is nested one level deeper than the rest of the payload. Good indentation is the difference between staring at a blob and immediately understanding the shape of your data.",
      },
      {
        heading: "Validate JSON with friendly errors",
        body: "A single misplaced comma or unquoted key can break an entire JSON document, and the default parser messages can be cryptic. This tool validates your input as it formats it: if the JSON is well-formed, you get the clean result; if it isn't, you get a clear, human-readable message describing what went wrong instead of a silent failure or a blank screen. That instant feedback turns 'why won't this parse?' into a quick fix. It is the fastest way to confirm that a payload, config file or copied snippet is valid before you ship it. Common culprits include trailing commas after the last item, single quotes instead of double quotes, missing quotation marks around keys, and unescaped characters inside strings — all of which strict JSON forbids even though they look harmless. Catching these before the data reaches your application saves you from chasing a confusing runtime error later, when the real problem was a typo in the input all along.",
      },
      {
        heading: "Minify JSON to shrink payloads",
        body: "When JSON is destined for a network request, a config value or storage, every byte counts. Minifying strips out all the whitespace, indentation and line breaks that make JSON readable for humans but waste space for machines, collapsing the document to the smallest valid single-line form. Smaller payloads mean faster transfers and lower bandwidth — useful for API responses, embedding JSON inside another file, or pasting it into a field with a length limit. With one click you can switch between a readable, beautified version and a compact, production-ready one. The two operations are perfect complements in a normal workflow: minify a configuration blob before you paste it into an environment variable or a URL, then beautify it again later when you need to read or edit it. Because both run instantly on the same input, you never have to commit to one form — you can move freely between the human-friendly and the machine-friendly version of the very same data.",
      },
      {
        heading: "Private and instant — nothing is uploaded",
        body: "JSON often carries sensitive material: API keys, tokens, user records, internal configuration. Sending that to a remote server just to format it is an unnecessary risk. In1 parses and formats everything locally using the browser's built-in JSON engine, so your data never leaves your device. There is no upload step and nothing is stored, which also makes the tool instant — even large documents are formatted in the blink of an eye because there is no network round trip. You can safely paste a real production payload and know it stays on your machine. This matters because the JSON you most want to inspect is frequently the JSON you least want to leak: a webhook body containing customer details, a token you are decoding to debug an auth issue, or a database export. Doing the work in your own browser means you get the convenience of an online formatter without handing your data to a third party you have to trust.",
      },
      {
        heading: "Who uses a JSON formatter?",
        body: "Developers are the core audience: they format API responses while debugging, tidy up configuration files, and validate request bodies before sending them. QA engineers inspect payloads to confirm a service returns the right shape. Data analysts clean up exported JSON before importing it elsewhere. Technical writers format examples for documentation so readers can follow the structure. Students learning web development use it to understand how nested JSON is organized, since seeing real data laid out cleanly is one of the fastest ways to grasp how objects and arrays nest. No-code and low-code builders increasingly bump into JSON too, when configuring integrations, mapping fields, or pasting settings between tools. Anyone who works with APIs, webhooks, configuration or data exchange eventually needs to read or compress JSON — and doing it in the browser, privately and instantly, fits right into that workflow without a single install or sign-up. Keeping a reliable formatter one tab away quietly removes a small but constant source of friction from a developer's day.",
      },
    ],
    howTo: [
      { name: "Paste your JSON", text: "Drop your JSON — minified, messy or copied from anywhere — into the input box." },
      { name: "Format or minify", text: "Click 'Format' to beautify it with clean indentation, or 'Minify' to compress it to one line." },
      { name: "Fix any errors", text: "If the JSON is invalid, a clear message tells you what went wrong so you can correct it." },
      { name: "Copy the result", text: "Copy the formatted or minified output with one click and use it wherever you need it." },
    ],
    faq: [
      { q: "Is the JSON formatter free?", a: "Yes. Formatting, validating and minifying JSON on In1 is completely free with no account required." },
      { q: "Is my JSON uploaded to a server?", a: "No. All parsing and formatting happens locally in your browser, so your data never leaves your device." },
      { q: "What does 'minify' do?", a: "Minifying removes all whitespace and line breaks, collapsing your JSON to the smallest valid single-line form to save space." },
      { q: "What happens if my JSON is invalid?", a: "You get a clear, friendly error message describing the problem instead of a silent failure, so you can fix it quickly." },
      { q: "How is the JSON indented when formatted?", a: "Formatted output uses standard two-space indentation, which is the most common and readable convention." },
      { q: "Is there a size limit?", a: "There is no fixed limit. Because everything runs on your device, large documents are formatted instantly without an upload." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "base64",
    category: "web",
    name: "Base64 Encoder / Decoder",
    shortDescription: "Encode text to Base64 or decode it back, with full UTF-8 support.",
    icon: "binary",
    processing: "client",
    keywords: ["base64 encode", "base64 decode", "base64 converter", "encode base64 online", "base64 to text"],
    metaTitle: "Base64 Encoder & Decoder — Encode / Decode Online Free | In1",
    metaDescription:
      "Free online Base64 encoder and decoder with full UTF-8 support. Convert text to Base64 and back instantly in your browser — no uploads, no sign-up.",
    h1: "Base64 encoder and decoder",
    intro:
      "Convert text to Base64 or decode Base64 back to readable text in one click. Accents, emoji and any other Unicode characters are handled correctly thanks to proper UTF-8 encoding. Everything runs locally in your browser.",
    sections: [
      {
        heading: "What Base64 is and why it exists",
        body: "Base64 is a way of representing binary or text data using only 64 safe, printable ASCII characters. It exists because many systems were built to move plain text reliably but can corrupt or misinterpret raw bytes — think email bodies, URLs, JSON fields, HTML attributes and HTTP headers. By translating data into a compact, text-only alphabet, Base64 lets you embed images, fonts, tokens or arbitrary text inside those text-only channels without anything getting mangled in transit. It does not encrypt or compress — the goal is safe, lossless transport — but it is one of the most common encodings you will meet when working with the web. The name comes from the size of its alphabet: the uppercase and lowercase letters, the digits zero through nine, and two extra symbols, plus a padding character. Every three bytes of input become four Base64 characters, which is why an encoded string is always a bit larger than the original — a deliberate trade of size for safety and compatibility.",
      },
      {
        heading: "Encode and decode in one place",
        body: "This tool handles both directions. Switch to encode mode and your text is converted into its Base64 representation, ready to paste into a data URI, a config file or an API field. Switch to decode mode and a Base64 string is turned back into the original readable text. A single toggle moves between the two, so you do not need separate tools for each direction. The result appears instantly and can be copied with one click, making it quick to round-trip a value, inspect an encoded token, or prepare data for a system that expects Base64 input. Because the output updates as you type and as you flip modes, it is easy to experiment: paste a suspicious-looking string, switch to decode, and immediately see whether it was Base64 at all. The same convenience helps when you are building a request by hand and need to encode a credential or a small payload without leaving the page.",
      },
      {
        heading: "Full UTF-8 support — accents and emoji included",
        body: "A surprising number of Base64 tools break the moment you feed them anything beyond plain English, because the naive browser functions only handle a narrow byte range. In1 encodes through the TextEncoder and decodes through the TextDecoder APIs, which means your text is first converted to proper UTF-8 bytes before encoding and reconstructed faithfully on the way back. Accented characters, non-Latin scripts, symbols and emoji all survive the round trip intact. Whether you are encoding Portuguese, Japanese, mathematical symbols or a string full of emoji, what you decode is exactly what you put in. This is more than a nice-to-have: the classic browser shortcut for Base64 throws an error or silently corrupts data when it meets a character outside the basic Latin range, which is exactly the kind of subtle bug that surfaces only in production with real user input. By handling Unicode correctly from the start, this tool gives you results you can trust regardless of the language or symbols involved.",
      },
      {
        heading: "Private by design — nothing leaves your browser",
        body: "Encoded data often contains things you would rather keep private: access tokens, credentials, snippets of personal information or internal configuration. Because Base64 is trivial to reverse, sending such values to a remote server just to encode or decode them would be careless. In1 performs every conversion locally in your browser, so your text never travels over the network and nothing is stored. There is no account and no logging. You can safely decode a token to inspect its contents or encode a sensitive value, confident that the data stays on your own device the whole time. This point deserves emphasis because Base64 is sometimes mistaken for a security measure, when in reality anyone can decode it in seconds. The only real protection for the data inside an encoded string is to never expose it in the first place — and a local-only tool that keeps your input on your machine is exactly the right way to handle anything sensitive.",
      },
      {
        heading: "Common uses for Base64",
        body: "Developers run into Base64 constantly. Data URIs embed small images, icons or fonts directly in CSS and HTML as Base64 so they load without a separate request. JSON Web Tokens (JWTs) are made of Base64url-encoded segments that you often want to decode and inspect while debugging an authentication flow. Basic authentication headers, email attachments (MIME), and many API parameters all rely on Base64. It is also handy for safely passing arbitrary text through URLs and query strings, or for storing binary-ish data in places that only accept text, such as certain database columns or environment variables. Whenever you need data to travel through a text-only channel intact, Base64 is the standard answer. Knowing how to quickly encode and decode it by hand is a small but genuinely useful skill — it turns an opaque string in a log or a config file into something you can actually read and reason about. Once you start noticing Base64, you will spot it in dozens of everyday places you previously scrolled right past.",
      },
    ],
    howTo: [
      { name: "Choose a mode", text: "Pick Encode to turn text into Base64, or Decode to turn Base64 back into text." },
      { name: "Enter your text", text: "Type or paste the text or Base64 string you want to convert." },
      { name: "Get the result instantly", text: "The converted output appears right away, with full UTF-8 support for accents and emoji." },
      { name: "Copy the output", text: "Copy the result with one click and use it wherever you need it." },
    ],
    faq: [
      { q: "Is the Base64 tool free?", a: "Yes. Encoding and decoding Base64 on In1 is completely free with no account required." },
      { q: "Does it handle accents and emoji?", a: "Yes. Conversion uses UTF-8 (TextEncoder/TextDecoder), so accented characters, non-Latin scripts and emoji round-trip correctly." },
      { q: "Is my data uploaded anywhere?", a: "No. All encoding and decoding happens locally in your browser, so your text never leaves your device." },
      { q: "Is Base64 a form of encryption?", a: "No. Base64 is an encoding, not encryption — it is easily reversible and offers no security. Never use it to protect secrets." },
      { q: "Why does my Base64 fail to decode?", a: "Decoding fails if the input isn't valid Base64 — for example if characters are missing, altered, or padding is incorrect. Check the string and try again." },
      { q: "Is there a size limit?", a: "There is no fixed limit. Because everything runs on your device, conversions are instant with no upload." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "qr-code-generator",
    category: "web",
    name: "QR Code Generator",
    shortDescription: "Turn any text or link into a QR code and download it as a PNG.",
    icon: "qr-code",
    processing: "client",
    keywords: ["qr code generator", "create qr code", "url to qr code", "free qr code", "qr code maker"],
    metaTitle: "QR Code Generator — Create & Download QR Codes Free | In1",
    metaDescription:
      "Free online QR code generator. Turn any text or URL into a QR code and download it as a PNG — generated in your browser, no uploads, no watermark, no sign-up.",
    h1: "QR code generator",
    intro:
      "Type a link or any text and instantly see a scannable QR code, then download it as a crisp PNG. The code is generated entirely in your browser, with no watermark and no sign-up.",
    sections: [
      {
        heading: "Turn links and text into scannable codes",
        body: "A QR code is a fast bridge from the physical world to a digital destination. Instead of asking someone to type a long URL, you give them a square they can scan with a phone camera to open it instantly. This generator turns any text or link into that square in real time: paste a website address, a chunk of text, a Wi-Fi password, contact details or a message, and a scannable QR code appears immediately. Because modern phones read QR codes natively through the camera app, there is nothing for your audience to install — they point, tap the notification, and they are there. The live preview means you can see the code take shape as you type and confirm it before you ever download it. Removing the friction of typing a link is the whole point: every extra character a person has to enter by hand is a chance to mistype it and give up, and a code that opens in one tap eliminates that drop-off entirely.",
      },
      {
        heading: "Download a high-quality PNG",
        body: "The QR code you create is rendered to a clean, high-resolution PNG that you can download with one click. A PNG works everywhere: drop it into a poster, a flyer, a business card, a slide deck, a product label, an email signature or a web page. Because it is a crisp raster image with generous quiet-space margins, it stays sharp and reliably scannable whether it is shown on a screen or printed at size. There is no watermark stamped across it and no branding added, so the code looks professional and is entirely yours to use. That quiet margin around the code is not decorative — scanners rely on the clear border to lock onto the pattern, which is why codes crammed right up against other elements often fail to read. Starting from a clean, well-margined PNG gives you the best chance of a reliable scan no matter where you ultimately place it.",
      },
      {
        heading: "Generated privately in your browser",
        body: "Everything happens on your own device. The QR code is computed locally in your browser, so the link or text you encode is never uploaded to a server, logged or stored anywhere. That matters more than people realize: a QR code can encode private information like an internal URL, a Wi-Fi password or personal contact details, and many online generators quietly route that data through their own systems — sometimes even creating redirect links that can expire or be tracked. Here the code points straight at exactly what you typed, and your data stays with you. The privacy benefit goes hand in hand with reliability, because a code that depends on someone else's server inherits all of that server's risks: outages, rate limits, and policy changes that could one day break a code you have already printed. A locally generated, direct code sidesteps every one of those problems.",
      },
      {
        heading: "Static codes that never expire",
        body: "The QR codes this tool creates are static, meaning the destination is baked directly into the code itself. That has a big advantage: there is no third-party redirect in the middle that could go down, start charging, or stop working, so your code keeps functioning for as long as the destination exists. Print it once and it will scan years later. The trade-off is that a static code cannot be edited after the fact — if the link changes you generate a new code — but for the vast majority of uses, the reliability and independence of a static code is exactly what you want. Many commercial 'dynamic' QR services hide this distinction, offering editable codes that secretly route through their servers and can be locked behind a subscription you must keep paying to keep your code alive. A static code asks nothing of you after it is made, which for a printed flyer, a label, or a sign is almost always the safer choice.",
      },
      {
        heading: "Where QR codes are useful",
        body: "QR codes show up everywhere because they remove friction. Restaurants link to digital menus, shops link to product pages and reviews, and event organizers link to tickets or schedules. Businesses put them on packaging, receipts and signage to point customers to support or promotions. Presenters add one to a final slide so the audience can grab resources without scribbling down a URL. Individuals share Wi-Fi access, contact cards, payment links or a portfolio with a single scan. Anywhere you would otherwise ask someone to type a link, a QR code does the job faster — and creating one here takes just a few seconds. Before you commit a code to print, it is always worth a quick test scan with your own phone to confirm it opens the right destination, since fixing a typo is free on screen but expensive once a thousand flyers are already printed. It also pays to keep the code reasonably large and high-contrast in its final placement, because a tiny code printed on a busy background is the most common reason a scan fails in the real world. A few seconds of testing now saves a reprint later.",
      },
    ],
    howTo: [
      { name: "Enter text or a URL", text: "Type or paste the link or text you want to encode into the input field." },
      { name: "See the QR code", text: "A scannable QR code is generated instantly in your browser as you type." },
      { name: "Download the PNG", text: "Click 'Download PNG' to save a crisp, watermark-free image of your QR code." },
      { name: "Use it anywhere", text: "Add the PNG to posters, slides, packaging, business cards or web pages." },
    ],
    faq: [
      { q: "Is the QR code generator free?", a: "Yes. You can create and download as many QR codes as you like for free, with no account and no watermark." },
      { q: "Do the QR codes expire?", a: "No. The codes are static, meaning the destination is encoded directly in the code, so they never expire and rely on no third-party redirect." },
      { q: "Is my data uploaded anywhere?", a: "No. The QR code is generated locally in your browser, so the text or link you encode never leaves your device." },
      { q: "What format is the download?", a: "QR codes are downloaded as a high-resolution PNG image that works in print and on screens." },
      { q: "Can I edit a QR code after creating it?", a: "Static QR codes can't be edited after the fact. If your link changes, simply generate a new code — it only takes seconds." },
      { q: "How do people scan it?", a: "Most modern phones scan QR codes directly from the built-in camera app — no separate scanner app is needed." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "image-converter",
    category: "image",
    name: "Image Converter",
    shortDescription: "Convert images between PNG, JPG and WebP right in your browser.",
    icon: "replace",
    processing: "client",
    accept: ["image/jpeg", "image/png", "image/webp"],
    multiple: false,
    keywords: ["image converter", "png to jpg", "jpg to webp", "webp to png", "convert image online"],
    metaTitle: "Image Converter — PNG, JPG & WebP Converter Free | In1",
    metaDescription:
      "Free online image converter. Convert between PNG, JPG and WebP with an optional quality slider — all in your browser, no uploads, no watermark, no sign-up.",
    h1: "Convert images online",
    intro:
      "Change an image from one format to another in seconds. Drop in a PNG, JPG or WebP, choose the output format, fine-tune the quality for lossy formats, and download the converted file. Everything happens in your browser, so your images are never uploaded.",
    sections: [
      {
        heading: "Convert between the formats that matter",
        body: "PNG, JPG and WebP cover almost every image you will meet on the web, and each one is good at something different. JPG is the long-standing choice for photographs, where its compression keeps files small at the cost of some invisible detail. PNG is built for graphics, screenshots, logos and anything that needs crisp edges or a transparent background. WebP is the modern all-rounder that often beats both, producing smaller files at similar quality and supporting transparency too. This converter moves your image freely between all three, so you can take a screenshot saved as a heavy PNG and turn it into a lightweight JPG, modernize an old photo into WebP, or convert a WebP someone sent you into a PNG that every program can open. Picking the right format for the job is one of the simplest ways to make images load faster and behave the way you expect, and doing the conversion takes only a couple of clicks here.",
      },
      {
        heading: "Control quality when converting to JPG or WebP",
        body: "JPG and WebP are lossy formats, which means they trade a little visual fidelity for a much smaller file. How much they trade is up to you. When you convert to either format, a quality slider lets you choose the balance that fits your needs: keep it high for photos you want to look pristine, or lower it to squeeze the file down for a fast-loading web page or an email attachment. PNG, by contrast, is lossless, so converting to PNG always preserves every pixel exactly and the quality control simply does not apply. Being able to see and set the quality yourself means you are never stuck with a one-size-fits-all result — you decide whether file size or maximum sharpness matters more for this particular image, and you can try a different setting in seconds if the first one is not quite right.",
      },
      {
        heading: "Transparency handled correctly",
        body: "Transparency is where a lot of converters quietly get things wrong. PNG and WebP can store transparent areas, but JPG cannot — it has no concept of an alpha channel. So when you convert a transparent PNG to JPG, those see-through regions have to become something solid. This converter fills them with a clean white background rather than leaving them black or producing strange fringing, which is what you almost always want for a logo or graphic that will sit on a page. Going the other way, converting to PNG or WebP keeps any transparency intact, so a graphic stays usable over any background. Understanding this one detail saves a lot of frustration, and the tool applies the sensible default automatically so your converted image looks right without any manual fixing. If you specifically need transparency in your final file, convert to PNG or WebP rather than JPG, and your see-through areas will be preserved exactly. Choosing the destination format with transparency in mind is the single most important decision when converting logos, icons and other graphics that need to float cleanly over a coloured background.",
      },
      {
        heading: "Private and instant — no uploads",
        body: "Your images can be personal or confidential: family photos, screenshots that contain private information, unreleased product shots, client work under NDA. Sending them to a server just to change the file format is an unnecessary risk, and it is slow because you have to wait for the upload and the download. In1 converts everything locally using your browser's own image pipeline, so not a single byte leaves your device. There is no upload bar, no queue and no storage — the conversion happens the moment you click, even on a large image, and the result is ready to download immediately. Because there is no server doing the work, there is also no file-size cap imposed by a plan, no watermark stamped on the output, and no account to create. It is the convenience of an online tool with the privacy and speed of a desktop app.",
      },
      {
        heading: "Who converts images and why",
        body: "The reasons are everywhere once you start looking. Web developers and site owners convert PNG screenshots to JPG or WebP to shrink page weight and improve loading scores. Online sellers convert product photos into the format a marketplace requires. People convert WebP images — which some older programs still refuse to open — into universally supported PNG or JPG so they can edit or print them. Designers export transparent assets as PNG for layering, then to WebP for the web. Office workers convert screenshots to slip under an email attachment limit, and students convert images to meet the format rules of an upload form. Whatever the destination, the need is the same: get the picture into the right format, at the right size, without losing control of quality — and do it quickly, privately and for free. A good rule of thumb is to reach for JPG when the image is a photograph, PNG when it has sharp edges or transparency, and WebP when you want the smallest file for the web without giving up much quality. Keeping those three habits in mind turns format conversion from a chore into a quick, deliberate choice that makes your images behave exactly the way each situation demands.",
      },
    ],
    howTo: [
      { name: "Add an image", text: "Drag a PNG, JPG or WebP file into the drop area, or click to choose one from your device." },
      { name: "Choose the output format", text: "Pick PNG, JPG or WebP as the format you want to convert to." },
      { name: "Set the quality", text: "For JPG or WebP, use the quality slider to balance file size against sharpness. PNG is always lossless." },
      { name: "Convert and download", text: "Click convert and save the new file. Your image is never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the image converter free?", a: "Yes. Converting images on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Are my images uploaded to a server?", a: "No. Conversion happens entirely in your browser, so your images never leave your device." },
      { q: "Which formats can I convert between?", a: "You can convert freely between PNG, JPG/JPEG and WebP in any direction." },
      { q: "What happens to transparency when I convert to JPG?", a: "JPG doesn't support transparency, so transparent areas are filled with a white background, which is the usual expectation for logos and graphics." },
      { q: "Does converting reduce quality?", a: "Converting to PNG is lossless and keeps every pixel. Converting to JPG or WebP is lossy, but you control the trade-off with the quality slider." },
      { q: "Is there a file size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "image-resizer",
    category: "image",
    name: "Image Resizer",
    shortDescription: "Resize images to exact pixel dimensions, with aspect-ratio lock.",
    icon: "scaling",
    processing: "client",
    accept: ["image/jpeg", "image/png", "image/webp"],
    multiple: false,
    keywords: ["image resizer", "resize image", "resize photo", "change image dimensions", "resize image online"],
    metaTitle: "Image Resizer — Resize Photos by Pixels Free | In1",
    metaDescription:
      "Free online image resizer. Resize JPG, PNG and WebP to exact pixel dimensions with optional aspect-ratio lock — in your browser, no uploads, no watermark.",
    h1: "Resize images online",
    intro:
      "Set the exact width and height you need and download a perfectly resized image. Lock the aspect ratio to keep your image from stretching, or set custom dimensions freely. Everything runs in your browser, so your photos are never uploaded.",
    sections: [
      {
        heading: "Resize to the exact dimensions you need",
        body: "Sometimes you do not want to merely compress an image — you need it to be a specific size in pixels. A profile picture must fit a square avatar slot, a banner has to match a template's dimensions, a forum or marketplace caps the maximum width, and a printed layout needs an image at a precise resolution. This resizer lets you type the exact width and height you want and produces an image at those dimensions, no guessing involved. Because the work is done on a canvas at full precision, the output lands on the numbers you asked for. Whether you are scaling a huge camera photo down to something a web page can use or nudging an image to fit a strict upload requirement, you stay in complete control of the final pixel size rather than being handed an approximation.",
      },
      {
        heading: "Keep proportions with aspect-ratio lock",
        body: "The fastest way to ruin an image is to stretch it, leaving faces squashed or logos distorted. To prevent that, the resizer keeps the aspect-ratio lock switched on by default: change the width and the height updates automatically to match the original proportions, and vice versa. This way your image is scaled cleanly without any squishing, and you only have to think about one dimension. When you genuinely need a non-proportional size — fitting an image into a fixed box where some distortion is acceptable, or deliberately changing the shape — you can simply turn the lock off and set width and height independently. Having both modes one click apart means you get safe, proportional resizing by default but never lose the flexibility to do something custom when the situation calls for it.",
      },
      {
        heading: "Shrink file size as a bonus",
        body: "Resizing is one of the most effective ways to make an image lighter, because file size is driven far more by pixel dimensions than people expect. A photo straight from a modern phone can be four or five thousand pixels wide — vastly more than any web page or email needs. Scaling it down to a sensible display size like 1200 or 1920 pixels wide can cut the file from several megabytes to a few hundred kilobytes while looking identical on screen, since the extra pixels were never visible at normal viewing sizes anyway. That makes resizing a quick win for faster-loading pages, smoother email attachments and more free space on your device. If you need to squeeze the file even further afterward, you can pair the resizer with a dedicated compressor, but very often resizing alone does the job. As a practical guide, most images shown on a typical screen never need to be wider than about 1920 pixels, and thumbnails or avatars need far less than that. Matching the pixel dimensions to how the image will actually be displayed is the smartest first step, because every pixel you remove that nobody would ever see is pure saved weight with no visible downside at all.",
      },
      {
        heading: "Private and instant — no uploads",
        body: "Photos are personal. Screenshots can contain sensitive details, and work images may be confidential. Uploading them to a server just to change their dimensions is both a privacy risk and a waste of time spent waiting for transfers. In1 resizes everything locally using your browser's canvas, so your image never leaves your device — there is no upload, no queue and no storage. The resize happens the instant you click, even for a large photo, and the result is ready to download right away. Because no server is involved there is no file-size cap from a pricing plan, no watermark added to the output and no account to create. The original format is preserved too, so a PNG stays a PNG and a JPG stays a JPG, keeping transparency where it exists and giving you exactly the kind of file you started with, just at a new size.",
      },
      {
        heading: "Who resizes images and why",
        body: "Almost everyone who works with images online eventually needs to resize one. Social media users size profile photos, cover images and posts to each platform's preferred dimensions so nothing gets awkwardly cropped. Sellers resize product photos to meet a marketplace's required width and height. Bloggers and site owners scale hero images and thumbnails down to keep pages fast and tidy. Job seekers shrink a photo to fit an application form's limit, and students resize images to satisfy an assignment's upload rules. Designers prepare assets at multiple sizes for different screens. Even printing has its own needs, where dimensions and resolution have to line up with a layout. In every one of these cases the goal is the same: get the image to a precise size without distortion or fuss — and to do it quickly, privately and for free. A handy habit is to note the exact dimensions a destination asks for before you start, then enter them here with the ratio lock set the way that situation needs. With the target size in hand, resizing becomes a ten-second task rather than a round of trial and error, and you end up with an image that drops perfectly into whatever slot it was meant for.",
      },
    ],
    howTo: [
      { name: "Add an image", text: "Drag a JPG, PNG or WebP file into the drop area, or click to choose one from your device." },
      { name: "Enter dimensions", text: "Type the width and height you want in pixels. The current size is filled in to start from." },
      { name: "Lock or unlock the ratio", text: "Keep aspect-ratio lock on to scale proportionally, or turn it off to set width and height freely." },
      { name: "Resize and download", text: "Click resize and save the new image. Your file is never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the image resizer free?", a: "Yes. Resizing images on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Are my images uploaded to a server?", a: "No. Resizing happens entirely in your browser, so your images never leave your device." },
      { q: "Will resizing stretch my image?", a: "Not if aspect-ratio lock is on — the other dimension updates automatically to keep proportions. Turn the lock off only when you want a custom, non-proportional size." },
      { q: "Does the format change when I resize?", a: "No. The output keeps the original format, so a PNG stays a PNG (with transparency) and a JPG stays a JPG." },
      { q: "Can I make an image larger?", a: "Yes, you can enter larger dimensions, but enlarging beyond the original size can look soft, since the tool can't invent detail that isn't there." },
      { q: "Is there a file size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "image-to-pdf",
    category: "pdf",
    name: "Image to PDF",
    shortDescription: "Combine JPG, PNG and WebP images into a single PDF document.",
    icon: "file-image",
    processing: "client",
    accept: ["image/jpeg", "image/png", "image/webp"],
    multiple: true,
    keywords: ["image to pdf", "jpg to pdf", "png to pdf", "convert images to pdf", "photos to pdf"],
    metaTitle: "Image to PDF — Convert JPG & PNG to PDF Free | In1",
    metaDescription:
      "Free online image to PDF converter. Combine JPG, PNG and WebP images into a single PDF, in your chosen order — all in your browser, no uploads, no watermark.",
    h1: "Convert images to PDF",
    intro:
      "Turn one or many images into a clean PDF document. Add your JPG, PNG or WebP files, arrange them in the order you want, and download a single PDF with one image per page. Everything happens in your browser, so your images are never uploaded.",
    sections: [
      {
        heading: "Bundle many images into one tidy PDF",
        body: "Sharing a stack of loose image files is awkward. They arrive out of order, recipients have to open them one by one, and a folder of photos is far less convenient than a single document you can scroll through, email or print in one go. Converting images to PDF solves all of that by wrapping them into one portable file that looks the same on every device and in every PDF reader. This tool lets you add as many images as you like and turns each one into its own page, producing a single, self-contained document. It is the natural way to package scanned pages, a set of receipts, a batch of photos, screenshots of a conversation, or pictures of a handwritten form — anything that makes more sense as one ordered file than as a pile of separate images scattered across a folder. A PDF also travels far better than raw images: it keeps your pages in a fixed order, prints predictably, and opens the same way whether the recipient is on a phone, a laptop or a library computer. Image files, by contrast, can be reordered by a file manager, stripped of their sequence by an email client, or opened in a viewer that only shows one at a time, which is exactly the kind of friction a single PDF removes.",
      },
      {
        heading: "Put your pages in the right order",
        body: "Order matters in a document, and a converter that just dumps your images in whatever sequence the browser picked is frustrating to use. In1 lets you arrange your images before you build the PDF: add them in any order, then move each one up or down until the sequence is exactly right, and remove any you added by mistake. The order you see on screen is the order of the pages in the finished PDF, so there are no surprises when you open the result. That control is essential for things like multi-page scans, where page two must follow page one, or a photo story that needs to read in a particular sequence. Getting the arrangement right before you export saves you from having to reshuffle pages in a separate PDF editor afterward.",
      },
      {
        heading: "Handles JPG, PNG and WebP correctly",
        body: "The converter accepts the three most common web image formats and embeds each one appropriately. JPG and PNG images are placed directly into the PDF, preserving their quality, while WebP images — which the PDF format does not support natively — are converted to PNG in your browser first so they embed cleanly without any loss you would notice. Each page is sized to match its image, so pictures are never awkwardly cropped or forced into a shape that distorts them; a tall portrait photo produces a tall page and a wide screenshot produces a wide one. This means the PDF faithfully represents your originals, whether they are crisp graphics with transparency, detailed photographs, or a mix of both in the same document.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "The images people turn into PDFs are often sensitive: scanned identity documents, signed forms, receipts for an expense claim, medical paperwork, or private photos. Uploading those to a stranger's server just to bundle them is exactly the kind of risk worth avoiding. In1 builds the PDF entirely in your browser, so your images never leave your device — there is no upload, no queue, no storage and no account. Because the work is local, it is also fast and unlimited: there is no per-file size cap imposed by a pricing plan, no daily quota, and no watermark stamped across your pages. You get a clean, professional PDF made from your own images, created on your own computer, with the privacy of a desktop app and the convenience of a tool that needs nothing installed.",
      },
      {
        heading: "Common reasons to convert images to PDF",
        body: "The uses are everywhere. Students photograph or scan handwritten assignments and submit them as a single PDF because that is what the upload form requires. Freelancers and employees combine receipts into one document for an expense report. People turn scanned contracts, IDs or application forms into a tidy PDF to email to an office. Sellers package product photos into a lookbook. Travelers bundle booking confirmations and tickets into one file for a trip. Even everyday situations — saving a set of screenshots, archiving a child's drawings, or keeping a visual record of something — are easier when the images live in one ordered document. Whatever the reason, the goal is the same: take a collection of pictures and turn it into a single, shareable, printable PDF quickly, privately and for free. It is worth getting into the habit of converting before you send, because most forms, portals and email systems treat a single PDF as the standard, expected format for documents, while a scattering of image attachments can look unprofessional and is easy to lose track of. One clean file is simply easier to name, store, find again later and hand off to someone else without explanation.",
      },
    ],
    howTo: [
      { name: "Add your images", text: "Drag your JPG, PNG or WebP files into the drop area, or click to select them from your device." },
      { name: "Arrange the order", text: "Move images up or down so they appear in the sequence you want, and remove any you don't need." },
      { name: "Create the PDF", text: "Click convert and In1 builds a PDF with one image per page, locally in your browser." },
      { name: "Download", text: "Download the single PDF. No watermark, no sign-up and no upload." },
    ],
    faq: [
      { q: "Is the image to PDF converter free?", a: "Yes. Converting images to PDF on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Are my images uploaded to a server?", a: "No. The PDF is built entirely in your browser, so your images never leave your device." },
      { q: "Which image formats are supported?", a: "JPG/JPEG, PNG and WebP. WebP images are converted to PNG in your browser before being embedded." },
      { q: "Can I control the order of the pages?", a: "Yes. You can reorder the images before converting, and the PDF follows the order shown on screen." },
      { q: "How is each page sized?", a: "Each page is sized to match its image, so pictures keep their proportions and aren't cropped or stretched." },
      { q: "Is there a limit on the number of images?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "split-pdf",
    category: "pdf",
    name: "Split PDF",
    shortDescription: "Extract a page range or split a PDF into separate one-page files.",
    icon: "scissors",
    processing: "client",
    accept: ["application/pdf"],
    multiple: false,
    keywords: ["split pdf", "extract pdf pages", "separate pdf pages", "pdf splitter", "split pdf online"],
    metaTitle: "Split PDF — Extract or Separate PDF Pages Free | In1",
    metaDescription:
      "Free online PDF splitter. Extract a page range into a new PDF, or split a PDF into separate one-page files in a ZIP — all in your browser, no uploads, no watermark.",
    h1: "Split PDF files online",
    intro:
      "Pull a specific range of pages out of a PDF, or break a whole document into individual one-page files. Choose a mode, set your pages, and download the result. Everything happens in your browser, so your documents are never uploaded.",
    sections: [
      {
        heading: "Two ways to split, for two different jobs",
        body: "Splitting a PDF can mean two quite different things, so this tool does both. The first mode extracts a range of pages — say pages 3 to 8 — into a brand-new PDF, which is perfect when you only need one chapter, a single section, or a handful of pages from a much larger file. The second mode breaks the entire document apart, turning every page into its own separate one-page PDF and bundling them together in a single ZIP archive for easy downloading. Between them these two modes cover almost every reason you would ever need to split a PDF, whether you want to keep just a slice of a document or fully explode it into its individual pages. You pick the mode that matches the task and the tool handles the rest in a couple of clicks. Thinking about it as a choice between 'keep a slice' and 'separate everything' makes the decision easy: if you want a smaller document that holds only the pages you care about, extract a range; if you want each page to stand alone as its own file, split them all. Both produce ready-to-use files immediately, with no need to open a separate PDF editor or reassemble anything by hand afterward.",
      },
      {
        heading: "Extract exactly the pages you need",
        body: "Large PDFs are often mostly noise when you only care about a few pages. A 90-page report might contain a single summary you want to share; a scanned bundle might hold one form you need to send on; a contract might have just one appendix worth keeping. Rather than forwarding the whole heavy file and asking people to scroll to the right place, you can extract precisely the range you want into a clean, compact PDF that contains nothing else. The tool reads how many pages your document has and lets you enter a start and end page, then produces a new file with just that span. The original is left untouched, so you always keep your full document while sharing only the part that matters.",
      },
      {
        heading: "Burst a document into single pages",
        body: "Sometimes you need every page as its own file. Splitting a document into single pages is invaluable when each page is really a separate item — individual certificates, tickets, invoices, or scanned pages that need to be filed, renamed or routed separately. Instead of doing this by hand, the split-all mode creates one PDF per page in a single pass and packages them into a ZIP archive so you can download everything at once and unzip it into a tidy folder. The files are numbered in order with zero-padded names, so they sort correctly and stay in the original sequence. What would be a tedious, error-prone manual chore becomes a single click, no matter whether the document has five pages or five hundred. The ZIP keeps everything together so nothing gets lost between the download and your folder.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "PDFs are where the most sensitive documents tend to live: contracts, bank statements, medical records, identity documents, legal filings and confidential reports. Uploading those to an online service just to split them means handing your private data to someone else's server, often with no real guarantee about what happens to it afterward. In1 avoids that entirely by doing all the work in your browser. Your file is read into memory, split locally, and offered straight back to you as a download — not a single byte is transmitted, stored or logged anywhere, and there is no account to create. Because the processing is local there is also no file-size cap from a pricing tier and no watermark added to your pages. It is the privacy of a desktop application with nothing to install.",
      },
      {
        heading: "Who needs to split PDFs?",
        body: "The need shows up constantly in everyday document work. Office workers extract a single section from a long report to circulate to a team. Accountants and freelancers separate a combined scan of receipts or invoices into individual files for bookkeeping. Teachers and students pull specific pages out of a textbook scan or a handout. HR teams split a batch of signed forms into one file per employee. People dealing with applications extract just the pages a form asks for, rather than submitting an entire document. Anyone who has ever scanned a stack of paper into one giant PDF eventually needs to break it back apart. Whatever the situation, the goal is the same: get exactly the pages you want, as either one trimmed PDF or a set of single-page files — quickly, privately and for free. Splitting is also a natural companion to merging: you might break a big scan into single pages, drop the ones you don't need, and recombine the rest into a fresh document. Because the whole process runs locally and leaves your original untouched, you can experiment freely — try a range, check the result, and split a different way if it isn't quite what you wanted, all without ever risking the source file.",
      },
    ],
    howTo: [
      { name: "Add your PDF", text: "Drag a PDF into the drop area, or click to choose one from your device. The tool reads its page count." },
      { name: "Choose a mode", text: "Pick 'Extract a range' to keep specific pages, or 'Split all pages' to separate every page." },
      { name: "Set your pages", text: "For a range, enter the start and end page. For split-all, there's nothing else to set." },
      { name: "Download", text: "Download the new PDF, or a ZIP of single-page PDFs. No watermark, no sign-up and no upload." },
    ],
    faq: [
      { q: "Is the PDF splitter free?", a: "Yes. Splitting PDFs on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my PDF uploaded to a server?", a: "No. The split happens entirely in your browser, so your document never leaves your device." },
      { q: "What's the difference between the two modes?", a: "'Extract a range' makes one new PDF from a span of pages you choose. 'Split all pages' turns every page into its own PDF, delivered together in a ZIP file." },
      { q: "What do I get when I split all pages?", a: "A ZIP archive containing one PDF per page, numbered in order so the files stay in sequence." },
      { q: "Will the original file be changed?", a: "No. Your original PDF is never modified; the tool only creates new files from it." },
      { q: "Is there a page or size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "pdf-to-jpg",
    category: "pdf",
    name: "PDF to JPG",
    shortDescription: "Convert each page of a PDF into a high-quality JPG image.",
    icon: "images",
    processing: "client",
    accept: ["application/pdf"],
    multiple: false,
    keywords: ["pdf to jpg", "pdf to image", "convert pdf to jpg", "pdf to jpeg", "pdf pages to images"],
    metaTitle: "PDF to JPG — Convert PDF Pages to Images Free | In1",
    metaDescription:
      "Free online PDF to JPG converter. Turn every page of a PDF into a high-quality JPG image — all in your browser, no uploads, no watermark, no sign-up.",
    h1: "Convert PDF to JPG",
    intro:
      "Turn the pages of a PDF into sharp JPG images. Drop in a PDF and In1 renders each page to a high-quality JPG — a single image for a one-page file, or a ZIP of images for a multi-page document. Everything happens in your browser, so your files are never uploaded.",
    sections: [
      {
        heading: "Every page becomes a sharp image",
        body: "Sometimes a PDF is not the format you actually need. You might want to drop a page into a slideshow, post it on social media, paste it into a document that only accepts images, or preview it as a thumbnail. Converting a PDF to JPG solves this by rendering each page as a standalone picture you can use anywhere an image is accepted. In1 draws every page at a high resolution so text stays crisp and details remain legible rather than coming out blurry or pixelated. A one-page PDF gives you a single JPG, while a multi-page document produces one image per page, neatly numbered. Because JPG is universally supported, the result opens instantly on any phone, computer or app, with no special reader required — which is exactly what makes images so much more convenient than PDFs in these situations. An image is also far easier to embed and preview: messaging apps and social platforms show it inline automatically, content editors place it like any other picture, and a thumbnail can be generated from it without extra tooling. A PDF, by contrast, usually shows up as a file attachment that the viewer has to deliberately open, which adds a step that a plain image simply does not have.",
      },
      {
        heading: "One image or a whole ZIP of pages",
        body: "The tool adapts to the size of your document. When your PDF has a single page, you get that page back as one JPG, ready to download immediately. When it has many pages, In1 renders each one and bundles them all into a single ZIP archive so you can download everything in one click instead of saving images one at a time. The files inside are numbered in order with zero-padded names, so they sort correctly and you never lose track of which page is which. Whether you are turning a single certificate into an image or exploding a fifty-page report into fifty pictures, the workflow is the same: add the file, click convert, and get back exactly the images you need in the most convenient package for the job.",
      },
      {
        heading: "Rendered with pdf.js for accuracy",
        body: "Faithfully turning a PDF page into an image is harder than it sounds, because PDFs can contain vector graphics, embedded fonts, layered elements and precise typography that all have to be drawn correctly. In1 uses pdf.js, the same mature, open-source rendering engine that powers PDF viewing in major web browsers, to draw each page onto a canvas before exporting it as a JPG. That means what you see in the image closely matches how the page looks in a real PDF viewer — fonts render properly, layouts stay intact, and graphics come through cleanly. Pages are rendered at an increased scale for extra sharpness, so the resulting JPGs look good both on screen and when dropped into a printed document, presentation or web page. Rendering on a high-resolution canvas keeps fine print and thin lines readable rather than fuzzy.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "PDFs frequently hold confidential material — contracts, statements, reports, scanned identity documents and other private paperwork — so sending them to an online server just to convert them is a real privacy concern. In1 sidesteps that completely by doing all the rendering in your browser. Your file is read into memory, each page is drawn locally, and the images are handed straight back to you as a download. Not a single byte is uploaded, stored or logged, and there is no account to create. Because the conversion runs on your own device, there is also no file-size cap from a pricing plan and no watermark stamped onto the images. It delivers the convenience of an online converter while keeping the privacy of an offline, desktop-grade tool that happens to need nothing installed.",
      },
      {
        heading: "Who converts PDFs to JPG and why",
        body: "The reasons are surprisingly varied. Social media users turn a PDF flyer or infographic into an image so it can be posted, since most platforms accept pictures but not PDFs. People extract a single page as a JPG to insert into a report, an email or a chat where attaching a whole PDF would be clumsy. Designers and marketers grab page images to use as previews, thumbnails or mockups. Teachers turn worksheet pages into images for slides. Anyone building a website might convert PDF pages to images to display them inline without forcing visitors to download a file. And sometimes you simply need a quick visual of a document to share at a glance. In every case the aim is the same: get clean, ready-to-use images out of a PDF — quickly, privately and for free. It is the natural counterpart to the image-to-PDF workflow: where one bundles pictures into a document, this one unpacks a document back into pictures, so together they let you move freely between the two formats depending on what a given platform or person expects. Keeping both within reach means you are never stuck because something only accepts one format and you happen to have the other.",
      },
    ],
    howTo: [
      { name: "Add your PDF", text: "Drag a PDF into the drop area, or click to choose one from your device. The tool reads its page count." },
      { name: "Convert", text: "Click convert and In1 renders each page to a high-quality JPG, locally in your browser." },
      { name: "Get your images", text: "A one-page PDF downloads as a single JPG; a multi-page PDF downloads as a ZIP of numbered images." },
      { name: "Use them anywhere", text: "Drop the JPGs into slides, posts, documents or web pages. No watermark, no sign-up and no upload." },
    ],
    faq: [
      { q: "Is the PDF to JPG converter free?", a: "Yes. Converting PDFs to JPG on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my PDF uploaded to a server?", a: "No. Every page is rendered entirely in your browser, so your document never leaves your device." },
      { q: "What do I get for a multi-page PDF?", a: "A ZIP archive containing one JPG per page, numbered in order so the images stay in sequence." },
      { q: "Will the images be good quality?", a: "Yes. Pages are rendered at an increased scale using pdf.js, so text stays sharp and the JPGs look good on screen and in print." },
      { q: "Can it convert to PNG instead?", a: "This tool outputs JPG, which is ideal for pages with photos and gives small files. For transparency needs, a PNG-based workflow is better suited." },
      { q: "Is there a page or size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "crop-image",
    category: "image",
    name: "Image Cropper",
    shortDescription: "Crop JPG, PNG and WebP images with free or fixed aspect ratios.",
    icon: "crop",
    processing: "client",
    accept: ["image/jpeg", "image/png", "image/webp"],
    multiple: false,
    keywords: ["crop image", "image cropper", "crop photo online", "crop picture", "cut image"],
    metaTitle: "Crop Image — Free Online Image & Photo Cropper | In1",
    metaDescription:
      "Free online image cropper. Crop JPG, PNG and WebP photos with free or fixed aspect ratios (1:1, 4:3, 16:9, 9:16) — in your browser, no uploads, no watermark.",
    h1: "Crop images online",
    intro:
      "Drag to frame exactly the part of your photo you want to keep, then download the cropped image. Choose a free crop or a fixed aspect ratio, zoom to fine-tune, and save — all in your browser, with no uploads.",
    sections: [
      {
        heading: "Crop to exactly what matters",
        body: "Most photos contain more than you actually want to show. There is dead space around the subject, a distracting edge, a stray object in the corner, or simply the wrong framing for where the image needs to go. Cropping fixes all of that by letting you keep only the part that matters and cut away the rest. With In1 you drag a frame over your image and move or resize it until it sits exactly where you want, with a live preview of what the final picture will look like. A good crop can completely change an image: it tightens the focus on the subject, removes clutter, straightens a lopsided composition, and turns an average snapshot into something that looks deliberate. Whether you are trimming a few pixels off an edge or pulling a tight portrait out of a wide shot, cropping is the single most useful edit there is, and it takes only a few seconds here. It is also non-destructive in spirit: your original file stays exactly as it was on your device, and you download a separate cropped copy, so you can always come back and crop the same photo a different way. That freedom to try a tight square now and a wide banner later, from the very same source image, is what makes cropping such a low-risk, high-impact edit to reach for.",
      },
      {
        heading: "Free crop or fixed aspect ratios",
        body: "Different destinations demand different shapes, so the cropper gives you both freedom and precision. Leave the aspect ratio free to draw any rectangle you like, or lock it to a fixed proportion when you need the result to match a specific slot. Common presets are one tap away: a perfect 1:1 square for profile pictures and many social posts, 4:3 and 16:9 for classic photo and widescreen framing, and 9:16 for vertical stories and reels. Locking the ratio guarantees the crop comes out at exactly the proportion the target expects, so your image is never rejected or awkwardly stretched by the platform afterward. Switching between free and fixed modes is instant, which means you can experiment — try a square, then a widescreen version of the same shot — and pick whichever framing works best without starting over.",
      },
      {
        heading: "Zoom and reposition for the perfect frame",
        body: "Cropping is not just about the outer boundary; it is about composition. That is why the tool lets you zoom into the image and drag it around behind the crop frame, so you can fill the frame precisely with the part of the picture you want. Zooming in is perfect for pulling a tight detail out of a larger photo or for centering a face in a square avatar, while repositioning lets you nudge the subject into exactly the right spot. The live preview updates as you move and zoom, so what you see is exactly what you will download — there is no guesswork and no surprises. This fine control is the difference between a crop that merely cuts the image and one that genuinely improves it.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "Photos are personal, and many of them are not meant for anyone else's server. Family pictures, screenshots that contain private details, unreleased work, ID photos — all of these can be cropped here without ever leaving your device. In1 does the cropping entirely in your browser using a canvas, so the image is read into memory, trimmed locally, and handed straight back to you as a download. There is no upload, no queue, no storage and no account to create. Because the work is local, it is also instant and unlimited: there is no file-size cap imposed by a pricing plan and no watermark stamped onto the result. The output keeps the original format, so a PNG stays a PNG with its transparency intact and a JPG stays a JPG — you simply get the same kind of file you started with, framed exactly the way you wanted.",
      },
      {
        heading: "Who crops images and why",
        body: "Almost everyone who shares pictures online ends up cropping them. Social media users square up profile photos, frame posts to a platform's preferred ratio, and cut vertical clips for stories and reels. Online sellers crop product shots so the item fills the frame cleanly. Bloggers and site owners crop hero images and thumbnails to fit their layout. Job seekers tidy up a headshot for a CV or profile. People crop screenshots to show just the relevant part, remove a distracting background element from a photo, or straighten a crooked scan. Designers pull specific regions out of a larger image to use as assets. In every case the goal is the same: keep the part of the picture that works, drop the part that doesn't, and get a clean result at the right proportions — quickly, privately and for free. Cropping also pairs naturally with the other image tools: crop first to get the framing right, then resize the result to exact pixel dimensions or convert it to a lighter format for the web. Reaching for the right combination — crop, resize, convert — turns a raw photo into a polished, purpose-built image in just a few quick steps, all without installing anything or handing your pictures to a server.",
      },
    ],
    howTo: [
      { name: "Add an image", text: "Drag a JPG, PNG or WebP file into the drop area, or click to choose one from your device." },
      { name: "Frame your crop", text: "Drag and resize the crop area, and pick a free crop or a fixed ratio like 1:1, 4:3, 16:9 or 9:16." },
      { name: "Zoom to fine-tune", text: "Zoom in and reposition the image so the frame holds exactly what you want." },
      { name: "Crop and download", text: "Click crop and save the result. Your image is never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the image cropper free?", a: "Yes. Cropping images on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Are my images uploaded to a server?", a: "No. Cropping happens entirely in your browser, so your images never leave your device." },
      { q: "Which aspect ratios can I use?", a: "You can crop freely to any shape, or lock to fixed ratios such as 1:1 (square), 4:3, 16:9 and 9:16 (vertical)." },
      { q: "Does cropping change the image format?", a: "No. The output keeps the original format, so a PNG stays a PNG (with transparency) and a JPG stays a JPG." },
      { q: "Will cropping reduce quality?", a: "Cropping itself doesn't re-compress the kept pixels noticeably; you simply get the selected region at its original resolution." },
      { q: "Is there a file size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "compress-pdf",
    category: "pdf",
    name: "Compress PDF",
    shortDescription: "Reduce the file size of image-heavy and scanned PDFs in your browser.",
    icon: "shrink",
    processing: "client",
    accept: ["application/pdf"],
    multiple: false,
    keywords: ["compress pdf", "reduce pdf size", "shrink pdf", "make pdf smaller", "compress pdf online"],
    metaTitle: "Compress PDF — Reduce PDF File Size Online Free | In1",
    metaDescription:
      "Free online PDF compressor. Shrink large, scanned and image-heavy PDFs right in your browser — choose a quality level, no uploads, no watermark, no sign-up.",
    h1: "Compress PDF files online",
    intro:
      "Make a heavy PDF smaller so it is easier to email, upload and store. Pick a quality level and In1 re-renders the pages to shrink the file, showing you exactly how much space you saved. Everything happens in your browser — your document is never uploaded.",
    sections: [
      {
        heading: "Shrink PDFs that are too big to share",
        body: "Oversized PDFs are a constant nuisance. Email providers bounce attachments over a size limit, upload forms reject files that are too large, and cloud storage fills up faster than it should. The biggest offenders are usually scanned documents and image-heavy files, where every page is essentially a high-resolution photo. Compressing the PDF brings the size down so it actually fits where you need it to go. In1 works by re-rendering each page at a sensible resolution and re-encoding it, which is especially effective on scans and PDFs built from photos — exactly the files that tend to be too big in the first place. After compressing, you see the original size, the new size and the percentage saved, so you know immediately whether the result is small enough for that email, portal or storage limit you were fighting with. The savings on a chunky scan can be dramatic — it is common to see a bloated multi-megabyte document drop to a fraction of its original weight — which is often the difference between an attachment that bounces and one that sends on the first try. And because the comparison is shown every time, you are never guessing: you can immediately tell whether one more pass at a lower quality is worth it or whether you are already comfortably under the limit.",
      },
      {
        heading: "Choose the quality that fits",
        body: "Compression is always a balance between file size and visual quality, and In1 puts that choice in your hands with a simple quality control. A higher setting keeps pages looking crisp while still trimming weight, which is ideal when the document needs to be read closely or printed. A lower setting squeezes the file much harder, which is perfect for a quick preview, an archive copy, or any time getting under a size limit matters more than pixel-perfect sharpness. Because the tool reports the before-and-after sizes every time, you can try a setting, see the result, and adjust until you hit the sweet spot for your particular file. There is no single 'right' level — it depends on the document and what you need it for — so being able to dial it in yourself is what makes the result genuinely useful.",
      },
      {
        heading: "Honest about what 'basic compression' means",
        body: "It is worth being clear about how browser-based PDF compression works, because not every PDF will shrink. This tool reduces size by rendering each page to an image and rebuilding the document from those images, which is why it is so effective on scans and photo-heavy PDFs. The trade-off is that the rebuilt pages become images, so text in them is no longer selectable or searchable, and a PDF that is already mostly plain text or vector graphics — which are extremely compact to begin with — may not get smaller, or could even grow. To protect you from that, In1 only hands back the compressed file when it is actually smaller than the original; if your PDF is already well optimized, it tells you so and keeps your original untouched. That honesty means you never end up with a larger, lower-quality file by accident.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "PDFs are where some of the most sensitive documents live: contracts, bank statements, medical records, scanned IDs and confidential reports. Sending those to an online server just to make them smaller is a real privacy risk, and many compression sites do exactly that. In1 takes a different approach and compresses everything locally in your browser. Your file is read into memory, re-rendered on your own device and offered straight back to you as a download — not a single byte is uploaded, stored or logged, and there is no account to create. Because the work is local there is no file-size cap imposed by a pricing plan and no watermark added to your pages. You get the convenience of an online compressor with the privacy of an offline tool, which matters a great deal when the document you are shrinking is something you would never want sitting on someone else's server.",
      },
      {
        heading: "Who compresses PDFs and why",
        body: "The need comes up everywhere. Job seekers shrink a scanned CV or portfolio to fit an application form's upload limit. Students compress scanned assignments and readings so they can be submitted or shared. Office workers reduce reports and presentations to slip under an email attachment cap. Accountants and freelancers compress scanned receipts and invoices for bookkeeping and submission. People applying for visas, loans or benefits squeeze scanned paperwork down to a portal's strict size requirement. Anyone who has scanned a stack of paper into one enormous PDF eventually needs to make it smaller before it can go anywhere. In all of these cases the aim is the same: take a file that is too big, bring it down to a workable size at an acceptable quality, and do it quickly, privately and for free — without installing software or trusting a server with a private document.",
      },
    ],
    howTo: [
      { name: "Add your PDF", text: "Drag a PDF into the drop area, or click to choose one from your device." },
      { name: "Pick a quality level", text: "Use the quality slider to balance file size against how sharp the pages look." },
      { name: "Compress", text: "In1 re-renders the pages locally and shows the original vs. compressed size." },
      { name: "Download", text: "Save the smaller PDF. If it can't be reduced, your original is kept untouched." },
    ],
    faq: [
      { q: "Is the PDF compressor free?", a: "Yes. Compressing PDFs on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my PDF uploaded to a server?", a: "No. Compression happens entirely in your browser, so your document never leaves your device." },
      { q: "Why didn't my PDF get smaller?", a: "PDFs that are already mostly text or vector graphics are very compact, so image-based compression can't shrink them. In that case the tool keeps your original instead of returning a larger file." },
      { q: "Will the text stay selectable?", a: "No. This is basic compression that rebuilds pages as images, so text becomes part of the image and is no longer selectable or searchable. It works best on scans and image-heavy PDFs." },
      { q: "How much smaller will my PDF be?", a: "It depends on the document and the quality you choose, but scanned and photo-heavy PDFs often shrink substantially. The tool shows the exact before-and-after sizes." },
      { q: "Is there a file size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "background-remover",
    category: "image",
    name: "Background Remover",
    shortDescription: "Erase the background from any image automatically with on-device AI.",
    icon: "eraser",
    processing: "client",
    accept: ["image/jpeg", "image/png", "image/webp"],
    multiple: false,
    keywords: ["background remover", "remove background", "remove background from image", "transparent background", "background eraser"],
    metaTitle: "Background Remover — Erase Image Backgrounds Free | In1",
    metaDescription:
      "Free online background remover. Automatically erase the background from any photo with on-device AI and download a transparent PNG — no uploads, no watermark.",
    h1: "Remove image backgrounds",
    intro:
      "Drop in a photo and let AI erase the background automatically, leaving a clean cut-out on a transparent background. The model runs entirely on your device, so your images are never uploaded. Download the result as a transparent PNG.",
    sections: [
      {
        heading: "Automatic background removal with AI",
        body: "Cutting a subject out of its background used to mean tedious manual work with selection tools, careful tracing around edges, and a lot of patience. In1's background remover does it automatically. It uses an AI segmentation model to figure out what the main subject is — a person, a product, an animal, an object — and erases everything around it in one step, leaving a clean cut-out on a transparent background. There is nothing to trace and no tools to learn: you add an image and the AI handles the separation for you in seconds. The result is a PNG with real transparency, so the subject can be dropped onto any background, color or layout without an ugly rectangle around it. For the vast majority of photos — especially clear shots of people and products against a reasonably distinct background — the automatic result is genuinely good, and it turns a job that once took minutes of fiddly editing into a single click.",
      },
      {
        heading: "Runs entirely on your device — private by design",
        body: "This is the part that makes In1 different from most background removers online. The AI model runs in your browser, on your own device, not on a remote server. Your photo is never uploaded, never stored and never seen by anyone else — the entire process happens locally. That matters enormously for the kinds of images people remove backgrounds from: portraits and headshots, pictures of children, product shots that are not public yet, ID photos, and personal pictures of all kinds. With a typical online tool, every one of those images would be sent to and processed on someone else's servers. Here, nothing leaves your machine. You get the convenience of automatic, AI-powered cut-outs with the privacy of an offline app, and there is no account to create and no data trail left behind.",
      },
      {
        heading: "The first run downloads the AI model",
        body: "Because the AI runs locally, the model that powers it has to be downloaded to your browser the first time you use the tool. That download is a few megabytes and happens once — after it is cached, subsequent images process faster and even work offline. We show a progress indicator during that initial download so you know what is happening and that the tool has not stalled. The processing itself is computational work done on your device, so it leans on your CPU; a powerful laptop will be quicker than an older phone, and very large images take longer than small ones. None of this requires any setup from you — it is simply the trade-off that makes on-device, private AI possible. The upside is that once the model is loaded, you can remove backgrounds from as many images as you like, for free, with no per-image wait for an upload or a server queue.",
      },
      {
        heading: "Transparent PNGs ready to use anywhere",
        body: "The output is a PNG with a transparent background, which is the format you want for a cut-out. A transparent PNG drops cleanly onto a colored slide, a different photo, a product page, a logo layout or a thumbnail without any visible box around the subject. That makes the background remover a natural first step for all sorts of creative and practical tasks: placing a product on a clean white or branded background for a store listing, building a marketing graphic around a person, creating a profile picture that sits on any color, making stickers and memes, or compositing a subject into a new scene. Once you have the transparent cut-out, you can pair it with the other In1 image tools — for example resize it to the exact dimensions a platform needs, or convert it to WebP for a lighter web file — to take it the rest of the way.",
      },
      {
        heading: "Tips and realistic expectations",
        body: "Automatic background removal is powerful, but it is not magic, so a few tips help you get the best result. Images where the subject stands out clearly from the background — good lighting, decent contrast, a not-too-busy backdrop — produce the cleanest cut-outs. Very fine details like flyaway hair, fur, transparent glass or thin wires are the hardest things for any automatic tool to handle perfectly, and you may see slightly soft edges in those areas. Busy backgrounds that share colors with the subject can also confuse the model. For most everyday photos none of this is an issue, but if a particular image comes out imperfect, trying a clearer photo of the same subject usually helps. Think of it as an excellent, instant first pass that nails the great majority of images — and does it privately, on your device, for free. If you plan to place the cut-out on a busy scene, small soft edges often disappear against the new background anyway, so a result that looks slightly imperfect on the checkerboard can look perfectly clean once it is composited. And because re-running costs you nothing, it is always worth a quick second attempt with a cleaner source photo before reaching for manual editing.",
      },
    ],
    howTo: [
      { name: "Add an image", text: "Drag a JPG, PNG or WebP photo into the drop area, or click to choose one from your device." },
      { name: "Remove the background", text: "Click remove and the on-device AI erases the background automatically. The first run downloads the model." },
      { name: "Check the cut-out", text: "Preview the result on a checkerboard so you can see the transparent areas clearly." },
      { name: "Download the PNG", text: "Save the transparent PNG. Your image was never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the background remover free?", a: "Yes. Removing backgrounds on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Are my images uploaded to a server?", a: "No. The AI model runs entirely in your browser, so your images never leave your device." },
      { q: "Why is the first use slower?", a: "The AI model (a few MB) downloads to your browser the first time you use the tool. After that it's cached, so later images process faster and even work offline." },
      { q: "What format is the result?", a: "A PNG with a transparent background, ready to drop onto any color, photo or layout." },
      { q: "Is the result always perfect?", a: "It's excellent for most photos, especially clear shots of people and products. Very fine details like loose hair or glass can have softer edges, as with any automatic tool." },
      { q: "Does it work on my phone?", a: "Yes, in a modern mobile browser. Processing uses your device's CPU, so it may be slower on older phones or with very large images." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "mp4-to-mp3",
    category: "video",
    name: "MP4 to MP3",
    shortDescription: "Extract the audio from a video and save it as an MP3 file.",
    icon: "file-audio",
    processing: "client",
    accept: ["video/*"],
    multiple: false,
    keywords: ["mp4 to mp3", "video to mp3", "extract audio from video", "convert mp4 to mp3", "mp4 to audio"],
    metaTitle: "MP4 to MP3 — Extract Audio from Video Free | In1",
    metaDescription:
      "Free online MP4 to MP3 converter. Extract the audio track from a video and download it as an MP3 — all in your browser, no uploads, no watermark, no sign-up.",
    h1: "Convert MP4 to MP3",
    intro:
      "Pull the audio out of a video and save it as an MP3. Drop in an MP4 (or most other video formats), pick a bitrate, and In1 extracts the soundtrack right in your browser. Your video is never uploaded — the whole conversion runs on your device.",
    sections: [
      {
        heading: "Get just the audio from any video",
        body: "Often the part of a video you actually want is the sound: a song, a podcast or interview recorded as video, a lecture, a sermon, a voice memo someone filmed, or the audio from a clip you want to listen to on the go. Converting MP4 to MP3 strips away the picture and keeps the soundtrack as a compact audio file you can play anywhere — in a music app, on a phone during a commute, in the car, or on a smart speaker. In1 reads the video, extracts its audio track and re-encodes it as an MP3 in a single step. There is nothing to configure beyond the quality you want, and because MP3 is the most universally supported audio format on the planet, the result will play on essentially any device or app without compatibility headaches. Stripping the video also shrinks the file dramatically — audio is a small fraction of a video's size — which makes the MP3 far easier to store on a phone, attach to a message, or sync to a player. And once it is audio-only, you can listen with the screen off, something a video file will not let you do, which is exactly what you want for a podcast or a long lecture you plan to play in the background.",
      },
      {
        heading: "Choose the audio quality you need",
        body: "MP3 lets you trade file size against audio fidelity, and In1 puts that choice in your hands with a bitrate selector. A higher bitrate like 256 or 320 kbps keeps the audio crisp and is the right pick for music or anything where sound quality matters. A lower bitrate like 128 kbps produces a much smaller file that is perfect for spoken-word content such as podcasts, lectures and interviews, where ultra-high fidelity is unnecessary and a small file is more convenient to store and share. The default sits in the middle at a balanced setting that sounds good for almost everything. Being able to pick the bitrate means you are never stuck with a needlessly huge file for a simple voice recording, or a low-quality file for your favorite track.",
      },
      {
        heading: "Runs in your browser — private and free",
        body: "This conversion happens entirely on your own device. The video is processed in your browser using ffmpeg compiled to WebAssembly, so your file is never uploaded to a server, never stored and never seen by anyone else. That privacy matters: home videos, recordings of family and friends, confidential meetings and unreleased footage are exactly the kind of thing you should not be handing to a random website. With In1 there is no upload, no account, no watermark on the output and no daily limit. The trade-off for keeping everything local is that the work uses your device's processor, so very long videos take longer to convert — but for the typical clip, song or talk, extraction finishes in a reasonable time, and you never have to wait on an upload or a server queue.",
      },
      {
        heading: "The first conversion loads the engine",
        body: "Because the conversion engine runs locally, the ffmpeg core has to be downloaded to your browser the first time you use a video or audio tool on In1. That download happens once and is then cached, so subsequent conversions start much faster. While it loads and while your file is processing, a progress indicator keeps you informed so you know the tool is working and has not stalled. To keep things responsive and avoid running out of memory, there is a sensible size limit on the video you can convert — browser-based processing holds the file in memory, so extremely large videos are best trimmed or handled by a desktop application. For everyday clips, songs and recordings, though, the in-browser approach is fast, private and completely free.",
      },
      {
        heading: "Who converts MP4 to MP3 and why",
        body: "The reasons are everywhere. Music lovers pull the audio from a music video to listen offline. Students and professionals turn recorded video lectures, webinars and meetings into MP3s they can replay on the move. Podcasters and content creators who recorded on video extract the audio track to publish or edit as a podcast. People save the sound from a clip — a speech, a comedy bit, a guided meditation — to keep just the part they care about. Others convert videos to MP3 simply to save space, since an audio file is a fraction of the size of the video. Whatever the motivation, the goal is the same: separate the sound from the picture and get a clean, portable MP3 — quickly, privately and for free, without installing any software. It pairs naturally with the audio converter too: extract an MP3 here, then convert it to WAV, OGG or M4A if a particular device or app prefers a different format. Having both tools side by side means you can go from a raw video to exactly the audio file you need in a couple of quick, private steps on your own machine.",
      },
    ],
    howTo: [
      { name: "Add your video", text: "Drag an MP4 or other video file into the drop area, or click to choose one from your device." },
      { name: "Pick a bitrate", text: "Choose the MP3 quality — higher for music, lower for spoken word and smaller files." },
      { name: "Convert", text: "Click convert and In1 extracts the audio locally in your browser. The first run loads the engine." },
      { name: "Download the MP3", text: "Save the extracted audio. Your video was never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the MP4 to MP3 converter free?", a: "Yes. Extracting audio on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my video uploaded to a server?", a: "No. The conversion runs entirely in your browser, so your video never leaves your device." },
      { q: "Which video formats are supported?", a: "MP4 and most common video formats are accepted; the tool extracts and re-encodes the audio track to MP3." },
      { q: "Why is the first conversion slower?", a: "The ffmpeg engine (single-threaded, to keep the site fast and ad-supported) downloads to your browser on first use, then is cached so later conversions start faster." },
      { q: "Is there a size limit?", a: "Yes. Because processing happens in memory on your device, very large videos are limited; for typical clips and recordings there's no issue." },
      { q: "What bitrate should I choose?", a: "Use 256–320 kbps for music and 128 kbps for podcasts, lectures or interviews where a smaller file is more convenient." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "audio-converter",
    category: "video",
    name: "Audio Converter",
    shortDescription: "Convert audio between MP3, WAV, OGG and M4A right in your browser.",
    icon: "audio-lines",
    processing: "client",
    accept: ["audio/*"],
    multiple: false,
    keywords: ["audio converter", "convert audio", "mp3 converter", "wav to mp3", "m4a to mp3"],
    metaTitle: "Audio Converter — MP3, WAV, OGG & M4A Free | In1",
    metaDescription:
      "Free online audio converter. Convert between MP3, WAV, OGG and M4A right in your browser — no uploads, no watermark, no sign-up. Private and fast.",
    h1: "Convert audio files online",
    intro:
      "Convert an audio file from one format to another in a few clicks. Drop in an MP3, WAV, OGG or M4A, choose the output format, and In1 re-encodes it in your browser. Your audio is never uploaded — the whole conversion happens on your device.",
    sections: [
      {
        heading: "Convert between the formats that matter",
        body: "Audio comes in many formats, and the one you have is not always the one you need. MP3 is the universal standard that plays everywhere and keeps files small. WAV is uncompressed, lossless audio — large, but perfect when you need maximum quality or a format that audio editors and many devices accept without fuss. OGG (Vorbis) is a free, open format that often sounds better than MP3 at the same size and is common in games and on the web. M4A (AAC) is the format favored across the Apple ecosystem and many modern devices, offering great quality at small sizes. In1 converts freely between all four, so whether a website only accepts MP3, an editor wants WAV, or a device prefers M4A, you can get your audio into exactly the right format in seconds — without hunting for a desktop program or trusting an upload site. Understanding the difference helps you choose well: the lossy formats (MP3, OGG, M4A) discard inaudible detail to stay small, while WAV keeps every sample. Converting a lossy file to WAV will not restore quality that was already removed — it just makes a bigger file — so the best results come from starting with the highest-quality source you have and converting outward to whatever each destination needs.",
      },
      {
        heading: "Pick the right format for the job",
        body: "Choosing a format is really about matching the destination. Reach for MP3 when you want something that plays on absolutely anything and stays small — it is the safest default for sharing and for portable players. Choose WAV when quality is paramount or when a tool specifically asks for uncompressed audio, such as some editing software, voice-processing pipelines or certain instruments and samplers; just expect a much larger file. Pick OGG when you want strong quality at a small size and the target supports it, which is typical for web apps and game engines. Go with M4A when you are working in the Apple world or want efficient, high-quality compression on modern hardware. Because the conversion is instant and free, you can always try a format, check that it plays where you need it, and convert again if something prefers a different one.",
      },
      {
        heading: "Runs in your browser — private and free",
        body: "Every conversion happens entirely on your own device using ffmpeg compiled to WebAssembly. Your audio file is read into memory, re-encoded locally and handed straight back to you — it is never uploaded to a server, stored or logged, and there is no account to create. That privacy matters more than people assume: voice memos, interview recordings, demos of unreleased music, confidential meeting audio and personal messages are exactly the kind of files you should not be sending to an unknown website just to change their format. With In1 there is no upload, no watermark and no daily limit. Because the work is local it leans on your device's processor, so a very long recording takes longer to convert, but for typical songs, clips and voice recordings the conversion finishes quickly and there is no waiting on an upload or a server queue.",
      },
      {
        heading: "The first conversion loads the engine",
        body: "Since the conversion engine runs locally, the ffmpeg core downloads to your browser the first time you use an audio or video tool here. It happens once and is then cached, so later conversions start much faster and even work offline. While the engine loads and while your file is processing, a progress indicator shows that the tool is working. To stay responsive and avoid running out of memory, there is a sensible size limit on the file you can convert, because browser-based processing keeps the audio in memory; for the occasional very long recording a desktop application may be a better fit. For everyday audio, though, the in-browser approach gives you the convenience of an online converter with the privacy of an offline one — no install, no sign-up and nothing leaving your machine.",
      },
      {
        heading: "Who converts audio and why",
        body: "The need turns up constantly. Musicians and producers convert WAV masters to MP3 for sharing, or MP3s to WAV to drop into an editor. People with voice memos or recordings in M4A convert them to MP3 so they play on a device or platform that is fussy about formats. Podcasters convert between formats to meet a host's requirements. Gamers and developers turn audio into OGG for engines that expect it. Students convert recorded lectures to a smaller format to save space, and transcription users convert audio into a format their software accepts. Anyone who has ever been told 'this format isn't supported' has needed an audio converter. In every case the goal is the same: take the audio you have, turn it into the format you need at a sensible quality, and do it quickly, privately and for free. It works hand in hand with the MP4 to MP3 tool as well: extract a soundtrack from a video there, then convert it here to WAV for editing or M4A for an Apple device. With both tools running locally in the same place, moving audio between formats stops being a chore that needs special software and becomes a quick, private step you can do anytime, on any modern browser.",
      },
    ],
    howTo: [
      { name: "Add your audio", text: "Drag an MP3, WAV, OGG or M4A file into the drop area, or click to choose one from your device." },
      { name: "Choose the output format", text: "Pick MP3, WAV, OGG or M4A as the format you want to convert to." },
      { name: "Convert", text: "Click convert and In1 re-encodes the audio locally in your browser. The first run loads the engine." },
      { name: "Download", text: "Save the converted file. Your audio was never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the audio converter free?", a: "Yes. Converting audio on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my audio uploaded to a server?", a: "No. The conversion runs entirely in your browser, so your audio never leaves your device." },
      { q: "Which formats are supported?", a: "You can convert between MP3, WAV, OGG (Vorbis) and M4A (AAC) in any direction." },
      { q: "Which format should I choose?", a: "MP3 for universal playback and small size, WAV for lossless quality, OGG for small high-quality web/game audio, and M4A for the Apple ecosystem and efficient compression." },
      { q: "Why is the first conversion slower?", a: "The ffmpeg engine (single-threaded, to keep the site fast and ad-supported) downloads to your browser on first use, then is cached so later conversions start faster." },
      { q: "Is there a size limit?", a: "Yes. Because processing happens in memory on your device, very large files are limited; for typical songs and recordings there's no issue." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "case-converter",
    category: "text",
    name: "Case Converter",
    shortDescription: "Convert text between UPPERCASE, lowercase, Title Case and more.",
    icon: "case-sensitive",
    processing: "client",
    keywords: ["case converter", "uppercase to lowercase", "title case converter", "text case changer", "capitalize text"],
    metaTitle: "Case Converter — Change Text Case Online Free | In1",
    metaDescription:
      "Free online case converter. Change text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and kebab-case instantly — private, in your browser.",
    h1: "Convert text case",
    intro:
      "Paste your text and switch it to UPPERCASE, lowercase, Title Case, Sentence case or programming styles like camelCase, snake_case and kebab-case in one click. Everything runs in your browser, and you can copy the result instantly.",
    sections: [
      {
        heading: "Every case style in one place",
        body: "Changing the capitalization of text by hand is slow and error-prone, especially for anything longer than a sentence. A case converter does it instantly. In1 brings the most useful styles together so you never have to retype a word: UPPERCASE for emphasis and headings, lowercase for normalizing messy input, Title Case for headlines and titles, and Sentence case for turning a shouty block of text back into something readable. On top of those everyday styles it also handles the conventions programmers rely on — camelCase, snake_case and kebab-case — which are tedious to produce manually. You paste your text once and switch between styles with a single click, seeing the result immediately. Whether you accidentally left Caps Lock on, pasted a heading that came through in all capitals, or need to reformat a list of labels, the right transformation is one tap away instead of a frustrating manual rewrite.",
      },
      {
        heading: "Fix text that came out wrong",
        body: "So much text arrives in the wrong case. You paste a title from a PDF and it is in ALL CAPS. You copy a sentence and the formatting mangles the capitalization. Someone sends a message typed entirely in lowercase that needs tidying before you forward it. Retyping is a waste of time, and manual editing introduces typos. A case converter fixes all of this in seconds: drop the text in, choose the case you want, and copy the corrected version straight back out. Sentence case is particularly handy for rescuing a wall of capitals into normal prose, while Title Case instantly smartens up a heading that came through flat. Because the conversion is deterministic and instant, you can clean up anything from a single label to a long document without touching the keyboard, and the original meaning is preserved — only the capitalization changes. That makes it a reliable cleanup step you can trust before publishing or sharing.",
      },
      {
        heading: "Built for writers and developers alike",
        body: "The tool serves two audiences at once. Writers, editors, students and marketers lean on UPPERCASE, lowercase, Title Case and Sentence case to format headlines, clean up pasted text, normalize data and follow a style guide consistently. Developers and technical users reach for camelCase, snake_case and kebab-case constantly: variable and function names, database columns, JSON keys, CSS classes, file names, URL slugs and environment variables all follow one of these conventions. Producing them by hand — capitalizing the right letters, swapping spaces for underscores or hyphens — is fiddly and easy to get wrong. Here you type or paste a phrase in plain words and instantly get the exact identifier style you need. Having both the human styles and the code styles side by side means the same tool works whether you are polishing a blog headline or renaming a batch of variables to match your project's conventions — no context-switching to a second utility just to change capitalization.",
      },
      {
        heading: "Private and instant — nothing is uploaded",
        body: "Your text can be sensitive: an unpublished draft, internal naming, a private message, or data you would rather not share. In1 converts everything locally in your browser using plain JavaScript, so not a single character is sent to a server. There is no upload, no storage and no account to create. The conversion happens the instant you click, even on a long document, because there is no network round trip — and it works exactly the same whether you are online or offline. This local-only approach is both a privacy feature and a speed feature: you can safely paste real content, transform it however you like, and copy the result, confident that the text never left your device. When you close the tab, nothing remains, which makes it a safe place to reformat anything from a confidential paragraph to a list of internal identifiers.",
      },
      {
        heading: "How the case styles work",
        body: "Each style follows a clear rule. UPPERCASE makes every letter capital; lowercase makes every letter small. Title Case capitalizes the first letter of each word, which suits headings and names. Sentence case capitalizes only the first letter of each sentence and lowercases the rest, turning shouted text back into normal prose. The programming styles remove the spaces between words and join them: camelCase lowercases the first word and capitalizes each following word with no separators (myVariableName); snake_case lowercases everything and joins words with underscores (my_variable_name); and kebab-case does the same but joins with hyphens (my-variable-name), which is the standard for URL slugs and CSS classes. Because you can flip between all of them on the same input, it is easy to compare and grab exactly the format a particular destination expects — a headline, a sentence, or a code identifier — without memorizing any of the rules yourself. A handy workflow is to type a name in plain words once and then sample each style in turn: the same phrase can become a Title Case heading, a snake_case database column and a kebab-case URL slug in a few clicks, with no risk of a mistyped capital or a missed separator along the way.",
      },
    ],
    howTo: [
      { name: "Paste your text", text: "Type or paste the text you want to reformat into the input box." },
      { name: "Choose a case", text: "Click UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case or kebab-case." },
      { name: "See the result", text: "The converted text appears instantly, with your original meaning preserved." },
      { name: "Copy it", text: "Copy the result with one click and paste it wherever you need it." },
    ],
    faq: [
      { q: "Is the case converter free?", a: "Yes. Converting text case on In1 is completely free with no account and no limits." },
      { q: "Is my text uploaded anywhere?", a: "No. All conversion happens locally in your browser, so your text never leaves your device." },
      { q: "What's the difference between Title Case and Sentence case?", a: "Title Case capitalizes the first letter of every word (good for headings); Sentence case capitalizes only the first letter of each sentence (good for normal prose)." },
      { q: "Can it produce camelCase, snake_case and kebab-case?", a: "Yes. These programming styles join words without spaces, using capitalization (camelCase), underscores (snake_case) or hyphens (kebab-case)." },
      { q: "Does it change my words or just the capitalization?", a: "Only the capitalization and word separators change. The words themselves and their order stay the same." },
      { q: "Is there a length limit?", a: "There is no fixed limit. Because everything runs on your device, you can convert anything from a label to a long document instantly." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "color-converter",
    category: "web",
    name: "Color Converter",
    shortDescription: "Convert colors between HEX, RGB and HSL with a live preview.",
    icon: "palette",
    processing: "client",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "hex to hsl", "color code converter"],
    metaTitle: "Color Converter — HEX, RGB & HSL Converter Free | In1",
    metaDescription:
      "Free online color converter. Convert between HEX, RGB and HSL instantly with a live color preview and a picker — private, in your browser, no sign-up.",
    h1: "Convert colors between HEX, RGB and HSL",
    intro:
      "Type a color in any common format — HEX, RGB or HSL — or pick one visually, and instantly get all three values with a live preview. Copy whichever format you need. Everything runs in your browser.",
    sections: [
      {
        heading: "One color, every format you need",
        body: "Colors on the web are written in several different notations, and the one you have is rarely the one a particular tool wants. A designer hands you a HEX code, but your CSS variable is defined in HSL. A screenshot gives you RGB values, but the design system uses hex. Converting by hand means looking up conversion math or juggling another app. In1's color converter removes that friction: enter a color in HEX, RGB or HSL and it instantly shows you all three equivalents at once, each ready to copy with a single click. There is no calculation to do and no formula to remember. You can also pick a color visually with the built-in color picker and read off its values, or paste a value and see exactly what it looks like. Whether you are translating a brand color into the format your code expects or just checking what a hex string actually is, every representation is right there in front of you.",
      },
      {
        heading: "See the color, not just the numbers",
        body: "Color codes are abstract — '#3a7bd5' tells you very little until you actually see it. That is why the converter shows a live swatch of your color alongside the values, updating the moment you change the input. Seeing the real color matters: it lets you confirm you pasted the right code, compare a value against a design, or simply sanity-check that the color is what you expected before you drop it into a stylesheet or a document. The preview also makes the picker genuinely useful — nudge the color visually until it looks right, then copy the exact HEX, RGB or HSL value it produces. This tight loop between the numbers and the visual is what turns a dry conversion utility into something you actually enjoy using, because you are always working with the color itself, not just a string of characters that could be anything.",
      },
      {
        heading: "Understand HEX, RGB and HSL",
        body: "Each format describes the same color in a different way, and each is good at something. HEX (like #3a7bd5) is the compact six-digit code most common in design tools and CSS; it is really just RGB written in hexadecimal. RGB (like rgb(58, 123, 213)) lists the red, green and blue channels from 0 to 255, which maps directly to how screens emit light and is easy to tweak channel by channel. HSL (like hsl(214, 64%, 53%)) describes the color as hue, saturation and lightness, which is far more intuitive for humans: you can make a color lighter, more muted or shift its hue just by changing one number, without guessing at red-green-blue combinations. Being able to move between all three means you can work in whichever model fits the task — HEX to paste into a design file, RGB to fine-tune a channel, or HSL to create a lighter or darker variant of the same hue.",
      },
      {
        heading: "Private and instant — nothing is uploaded",
        body: "Color conversion is pure math, so there is no reason for it to involve a server — and In1 does it all locally in your browser. Nothing you type is uploaded, stored or logged, and there is no account to create. The conversions happen the instant you type, with no network round trip, so the values and the preview update in real time as you adjust the input or drag the picker. This local-only approach also means the tool works offline and stays fast no matter how many colors you convert. For most people privacy is not the main concern with a color, but the same architecture that keeps your data on your device is what makes the experience immediate and reliable: there is never a spinner, a queue or a failed request between you and the answer. You paste or pick a color and the results are simply there.",
      },
      {
        heading: "Who uses a color converter?",
        body: "The audience is wide. Front-end developers convert HEX codes from a design into the RGB or HSL values their CSS, Tailwind config or theme variables expect, and back again. Designers translate colors between the formats their various tools prefer, or grab the exact code for a color they picked by eye. Digital artists and illustrators read off values to reproduce a color precisely across apps. Marketers and brand managers confirm that a brand color is being used consistently by checking its codes. Students learning web development use it to understand how the three color models relate to one another. Even hobbyists building a website, theming an app or tweaking a chart reach for it to nail down a color. In every case the goal is the same: take a color in whatever format you have, see it, and get the exact value you need in the format you want — instantly, privately and for free. It also pairs well with picking palettes by hand: drop in a base color, switch to HSL, and nudge the lightness up or down to build a consistent set of tints and shades from a single starting point.",
      },
    ],
    howTo: [
      { name: "Enter a color", text: "Type a HEX, RGB or HSL value, or use the color picker to choose one visually." },
      { name: "See all formats", text: "The HEX, RGB and HSL equivalents appear instantly, with a live preview swatch." },
      { name: "Check the preview", text: "Confirm the color looks right in the swatch before you use it." },
      { name: "Copy what you need", text: "Copy any of the three formats with one click and paste it into your code or design." },
    ],
    faq: [
      { q: "Is the color converter free?", a: "Yes. Converting colors on In1 is completely free with no account and no limits." },
      { q: "Which formats can I convert between?", a: "HEX, RGB and HSL, in any direction. Enter any one and you instantly get the other two." },
      { q: "Is my input uploaded anywhere?", a: "No. All conversion happens locally in your browser, so nothing you type leaves your device." },
      { q: "What input formats are accepted?", a: "HEX (#rgb or #rrggbb), rgb(r, g, b) and hsl(h, s%, l%). You can also pick a color with the picker." },
      { q: "What's the difference between RGB and HSL?", a: "RGB lists red, green and blue channels (0–255), matching how screens work. HSL uses hue, saturation and lightness, which is more intuitive for making a color lighter, darker or more muted." },
      { q: "Does it support transparency (alpha)?", a: "This tool focuses on solid colors in HEX, RGB and HSL. For most design and CSS work those three cover what you need." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "hash-generator",
    category: "web",
    name: "Hash Generator",
    shortDescription: "Generate MD5, SHA-1, SHA-256 and SHA-512 hashes from any text.",
    icon: "hash",
    processing: "client",
    keywords: ["hash generator", "md5 generator", "sha256 generator", "sha512 hash", "generate hash online"],
    metaTitle: "Hash Generator — MD5, SHA-1, SHA-256 & SHA-512 | In1",
    metaDescription:
      "Free online hash generator. Create MD5, SHA-1, SHA-256 and SHA-512 hashes from any text instantly — private, in your browser, no uploads, no sign-up.",
    h1: "Generate hashes from text",
    intro:
      "Type or paste any text and instantly get its MD5, SHA-1, SHA-256 and SHA-512 hashes. Everything is computed in your browser, so nothing you enter is ever uploaded. Copy any hash with a click.",
    sections: [
      {
        heading: "Four hash algorithms, computed instantly",
        body: "A hash is a fixed-length fingerprint of some data: feed in any text and a hashing algorithm produces a short string that is practically unique to that exact input. Change a single character and the hash changes completely. In1 computes the four hashes you are most likely to need — MD5, SHA-1, SHA-256 and SHA-512 — all at once, the moment you type, so you can grab whichever one a particular system expects. Each result appears in standard hexadecimal and can be copied with a single click. Generating hashes by hand is impossible, and command-line tools are not always at hand, so having all four in one place in the browser is genuinely convenient. Whether you need a quick checksum to compare two pieces of text, a SHA-256 digest to paste into a config or a verification field, or just want to see how hashing works, the values are right there as fast as you can type the input.",
      },
      {
        heading: "Built on the browser's native crypto",
        body: "The SHA family of hashes here is produced by the Web Crypto API — the browser's own built-in cryptographic implementation, the same one used for secure operations across the web. That means the SHA-1, SHA-256 and SHA-512 digests are computed by trusted, well-tested native code rather than a hand-rolled script, so you can rely on the output being correct and standards-compliant. MD5, which the Web Crypto API deliberately does not include because it is considered cryptographically broken, is computed by a dedicated, widely-used library. The result is that all four algorithms produce exactly the hashes you would get from standard command-line tools or server-side libraries, letting you verify checksums and digests with confidence. Because it leans on the platform's own crypto, hashing is also extremely fast, handling everything from a short string to a large block of text in an instant. The text is always treated as UTF-8 before hashing, which is what makes the results match other standard tools exactly — the same string produces the same hash here as it would from a shell command or a server library, including for accented characters, non-Latin scripts and emoji.",
      },
      {
        heading: "Private by design — nothing is uploaded",
        body: "Hashing is often done on things you would never want to send anywhere: passwords you are checking, API payloads, tokens, configuration values, or sensitive identifiers. Sending that text to a server just to hash it would defeat the purpose and create a real risk. In1 computes every hash locally in your browser, so the text you enter is never uploaded, stored or logged, and there is no account to create. The hashes are generated the instant you type, with no network round trip, which also means the tool works offline and stays fast no matter how much text you hash. This local-only approach is exactly what you want from a hashing tool: you get the convenience of an online utility without the danger of handing potentially sensitive input to a third party. When you close the tab, nothing remains on this end.",
      },
      {
        heading: "What hashes are used for",
        body: "Hashes show up all over computing. The most common use is integrity checking: a file or message is hashed, and anyone can re-hash it later to confirm it has not changed, since even a tiny edit produces a completely different hash. Developers compare hashes to detect duplicate or modified content, generate cache keys and ETags, and create deterministic identifiers from input. SHA-256 in particular underpins countless systems, from software release checksums to blockchains and digital signatures. Hashes are also used to index data and to fingerprint values without storing the original. It is worth knowing what hashing is not: it is one-way, so you cannot reverse a hash back into the original text, and on its own it is not encryption. MD5 and SHA-1 in particular should be treated as checksums for non-security uses, since both are considered weak for cryptographic purposes today.",
      },
      {
        heading: "Who uses a hash generator?",
        body: "The audience is mostly technical but broad. Developers generate hashes constantly — to verify file integrity, build cache keys, create test fixtures, compare strings quickly, or check that a value matches an expected digest. QA and DevOps engineers confirm that a downloaded artifact's checksum matches the one published by its author. Security-minded users hash values to compare them without exposing the originals. Students learning about cryptography and data structures use it to see hashing in action and understand how a small input change cascades into a totally different output. Even non-developers occasionally need a quick MD5 or SHA-256 to paste into a form, a tool or a verification field. Whatever the reason, the need is the same: turn some text into a standard MD5, SHA-1, SHA-256 or SHA-512 hash, and do it quickly, privately and for free, without installing anything or trusting a server with the input. Having all four algorithms generated side by side is part of the appeal: you do not need to remember a command's flags or switch tools to compare, say, an MD5 checksum against a SHA-256 digest — you paste once and read off whichever the task in front of you happens to require.",
      },
    ],
    howTo: [
      { name: "Enter your text", text: "Type or paste the text you want to hash into the input box." },
      { name: "Get all four hashes", text: "MD5, SHA-1, SHA-256 and SHA-512 are computed instantly as you type." },
      { name: "Pick the one you need", text: "Each hash is shown in standard hexadecimal, ready to use." },
      { name: "Copy it", text: "Copy any hash with a single click and paste it wherever you need it." },
    ],
    faq: [
      { q: "Is the hash generator free?", a: "Yes. Generating hashes on In1 is completely free with no account and no limits." },
      { q: "Is my text uploaded anywhere?", a: "No. All hashes are computed locally in your browser, so the text you enter never leaves your device." },
      { q: "Which algorithms are supported?", a: "MD5, SHA-1, SHA-256 and SHA-512. The SHA hashes use the browser's native Web Crypto API." },
      { q: "Can I reverse a hash back to the text?", a: "No. Hashing is one-way by design — you can't recover the original input from a hash. It is not encryption." },
      { q: "Are MD5 and SHA-1 safe to use?", a: "They're fine as checksums for non-security uses, but both are considered cryptographically weak. Prefer SHA-256 or SHA-512 for security-sensitive purposes." },
      { q: "Does it handle accents and emoji?", a: "Yes. Text is hashed as UTF-8, so accented characters, non-Latin scripts and emoji produce correct, consistent hashes." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "rotate-pdf",
    category: "pdf",
    name: "Rotate PDF",
    shortDescription: "Rotate the pages of a PDF by 90, 180 or 270 degrees.",
    icon: "rotate-cw",
    processing: "client",
    accept: ["application/pdf"],
    multiple: false,
    keywords: ["rotate pdf", "rotate pdf pages", "turn pdf", "fix pdf orientation", "rotate pdf online"],
    metaTitle: "Rotate PDF — Turn PDF Pages Online Free | In1",
    metaDescription:
      "Free online PDF rotator. Rotate every page of a PDF by 90, 180 or 270 degrees and download the fixed file — all in your browser, no uploads, no watermark.",
    h1: "Rotate PDF pages",
    intro:
      "Fix a sideways or upside-down PDF in seconds. Drop in your file, choose how far to rotate — 90, 180 or 270 degrees — and download a corrected PDF. Everything happens in your browser, so your document is never uploaded.",
    sections: [
      {
        heading: "Fix sideways and upside-down PDFs",
        body: "Scanned documents and photographed pages have a habit of coming out in the wrong orientation. You open a PDF and the text is lying on its side, or a page that was fed in the wrong way is upside down, forcing you to tilt your head or your phone just to read it. Rotating the PDF fixes this permanently so the file looks right everywhere — on screen, when shared, and when printed. In1 lets you turn the pages by a quarter (90°), a half (180°) or three-quarters (270°) of a full turn, which covers every orientation problem a scan or export can produce. Instead of living with a document that is annoying to read or re-scanning the whole thing, you correct it in a couple of clicks and download a clean version. The rotation is baked into the file itself, so the corrected orientation sticks no matter what app or device opens it next. This is different from simply turning the view in a reader, which only affects how you see it on screen and reverts the moment someone else opens the file — here the change travels with the document, so the person you send it to, and the printer you send it to, both get it the right way up.",
      },
      {
        heading: "Rotate the whole document at once",
        body: "When a scan comes out rotated, usually every page is rotated the same way, so the fastest fix is to turn the entire document in one go. That is exactly what this tool does: pick an angle and it applies the rotation to all pages at once, saving you from correcting them one by one. The rotation is also relative to each page's current orientation, so it does the sensible thing even on files where pages already carry some rotation. For the common case — a batch scan that all came in sideways — you simply choose 90° or 270° depending on which way it needs to turn, click rotate, and the whole file is fixed instantly. Because the operation just updates each page's orientation flag rather than re-rendering the content, it is fast and completely lossless: text stays selectable and images keep their original quality.",
      },
      {
        heading: "Lossless and quality-preserving",
        body: "Rotating a PDF here does not degrade it in any way. Unlike approaches that turn pages into images, In1 changes only the orientation metadata of each page, leaving the underlying content untouched. That means selectable text stays selectable, embedded fonts stay intact, and images keep their exact original resolution — the page simply displays at the new angle. The file size barely changes, and there is no generation loss from re-encoding. This matters when the PDF is something you will keep working with: a contract you still need to search, a report you will print, or a document you will combine with others later. You get the orientation fixed without sacrificing any of the qualities that made it a proper PDF in the first place, which is exactly what you want from a tool that is supposed to repair a file rather than rebuild it.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "The documents that most often need rotating are scans, and scans are frequently sensitive: contracts, identity documents, financial paperwork, medical records and signed forms. Uploading those to an online service just to turn them the right way up is an unnecessary risk. In1 rotates everything locally in your browser, so your file is read into memory, adjusted on your own device, and handed straight back to you as a download — nothing is uploaded, stored or logged, and there is no account to create. Because the work is local there is also no file-size cap from a pricing plan and no watermark stamped onto your pages. It gives you the convenience of an online rotator with the privacy of a desktop tool, which is reassuring when the file you are fixing is a private document you would never want sitting on someone else's server.",
      },
      {
        heading: "Who needs to rotate PDFs?",
        body: "The need is extremely common wherever paper meets digital. People who scan documents at home or in the office constantly end up with pages that came out sideways and need straightening before sending. Students rotate scanned notes, worksheets and readings so they are comfortable to study. Office workers fix the orientation of contracts, invoices and reports before sharing or filing them. Anyone who photographs a document with a phone to turn it into a PDF often finds the orientation is off. Even files exported from other software sometimes carry the wrong rotation. In all of these cases the goal is the same and the fix is trivial: turn the pages the right way up and get a clean, correctly oriented PDF — quickly, privately and for free, without re-scanning anything or installing software just to perform one simple correction. It is also a natural step to pair with the other PDF tools: rotate a scan the right way up, then split out the pages you need or compress it before sending, all without the file ever leaving your device.",
      },
    ],
    howTo: [
      { name: "Add your PDF", text: "Drag a PDF into the drop area, or click to choose one from your device." },
      { name: "Choose an angle", text: "Pick how far to rotate the pages: 90°, 180° or 270°." },
      { name: "Rotate", text: "In1 applies the rotation to every page locally in your browser." },
      { name: "Download", text: "Save the corrected PDF. No watermark, no sign-up and no upload." },
    ],
    faq: [
      { q: "Is the PDF rotator free?", a: "Yes. Rotating PDFs on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my PDF uploaded to a server?", a: "No. The rotation happens entirely in your browser, so your document never leaves your device." },
      { q: "Does rotating reduce quality?", a: "No. Only each page's orientation is changed; text stays selectable and images keep their original resolution, so it's completely lossless." },
      { q: "Does it rotate all pages or just one?", a: "It rotates every page by the angle you choose, which is the usual fix for a scan that all came in sideways." },
      { q: "Which angles are available?", a: "You can rotate by 90, 180 or 270 degrees, which covers every common orientation problem." },
      { q: "Is there a file size limit?", a: "There is no fixed limit. Because everything runs on your device, the practical ceiling is your available memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "watermark-pdf",
    category: "pdf",
    name: "Watermark PDF",
    shortDescription: "Stamp a diagonal text watermark across every page of a PDF.",
    icon: "stamp",
    processing: "client",
    accept: ["application/pdf"],
    multiple: false,
    keywords: ["watermark pdf", "add watermark to pdf", "pdf watermark", "stamp pdf", "confidential watermark pdf"],
    metaTitle: "Watermark PDF — Add a Text Watermark Online Free | In1",
    metaDescription:
      "Free online PDF watermark tool. Stamp custom diagonal text like CONFIDENTIAL or DRAFT across every page with adjustable opacity — in your browser, no uploads.",
    h1: "Add a watermark to a PDF",
    intro:
      "Stamp your own text — like CONFIDENTIAL, DRAFT or a name — diagonally across every page of a PDF. Choose the wording and how strong the watermark looks, then download. Everything runs in your browser, so your document is never uploaded.",
    sections: [
      {
        heading: "Mark a document as yours or as a draft",
        body: "A watermark is a simple, powerful way to communicate something about a document at a glance: that it is confidential, that it is only a draft, that it belongs to you, or that it is a sample not meant for distribution. By laying semi-transparent text diagonally across every page, a watermark stays visible no matter how the document is viewed, shared or printed, without obscuring the underlying content. In1 lets you type whatever text you want — CONFIDENTIAL, DRAFT, COPY, a company name, a person's name, a date — and stamps it across the entire PDF in one step. It is the fastest way to signal intent before you send a file out: a draft contract that should not be acted on yet, an internal report that must not circulate, or a proof you are sharing for review. The message rides along with the document, so anyone who opens it understands its status immediately. Because the watermark sits over the content rather than replacing it, the document remains fully usable — readable, printable and shareable — while carrying its label everywhere it goes. That combination of clear signalling and untouched content is exactly why a diagonal text watermark has become the standard way to mark drafts, copies and confidential material.",
      },
      {
        heading: "Control the text and how strong it looks",
        body: "A watermark has to strike a balance: visible enough to register, but faint enough that the document underneath stays readable. In1 puts that balance in your hands. You choose the exact text, and an opacity control lets you set how bold or subtle the stamp appears — a heavier setting for an unmistakable CONFIDENTIAL warning, or a lighter one for a gentle DRAFT or ownership mark that does not get in the way of reading. The watermark is sized and angled to span each page diagonally, which is the classic, professional look and the hardest to crop out or ignore. Because you can adjust the wording and strength and re-run instantly, it is easy to preview different options and land on a watermark that does its job without overwhelming the content beneath it.",
      },
      {
        heading: "Applied to every page automatically",
        body: "A watermark is only effective if it is on every page — a confidential notice that appears on page one but not page five is easy to miss or misuse. That is why In1 applies your watermark to all pages of the document at once, consistently, so the message is unmissable throughout. There is no need to place it page by page or worry that some pages slipped through. The text is drawn directly into the PDF as part of each page, so it travels with the file: it shows up when the document is opened in any reader, when it is shared, and when it is printed. Whether the PDF has a single page or hundreds, the watermark is stamped uniformly across all of them in one quick operation, giving the whole document the same clear status from the first page to the last.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "The documents people watermark are very often the sensitive ones — confidential reports, draft contracts, proprietary designs, paperwork being shared for limited review. Uploading such a file to an online service to stamp it would undercut the very confidentiality the watermark is meant to assert. In1 adds the watermark entirely in your browser, so your document is read into memory, stamped on your own device, and handed straight back to you as a download — nothing is uploaded, stored or logged, and there is no account to create. Because the work is local there is no file-size cap from a pricing plan and, of course, no unwanted watermark of ours added on top of yours. You get the convenience of an online tool with the privacy of an offline one, which is exactly what you want when the whole point is to control how a private document is handled.",
      },
      {
        heading: "Who adds watermarks to PDFs?",
        body: "The use cases span work and personal life. Businesses stamp CONFIDENTIAL or INTERNAL on reports and plans before circulating them, and DRAFT on documents that are not final. Freelancers and agencies watermark proofs and samples — designs, photos compiled into a PDF, written deliverables — so previews cannot be used without payment. Legal and finance teams mark copies, drafts and privileged documents. Photographers and creators protect portfolios shared as PDFs with their name. Students and researchers sometimes mark drafts of a thesis or paper. Anyone sending a document for review who wants to make its status unmistakable reaches for a watermark. In every case the goal is the same: lay a clear, consistent message across the pages of a PDF to signal ownership or status — quickly, privately and for free, without installing specialized software or exposing the file to a server. It also slots neatly into a wider PDF workflow: watermark a draft before circulating it for review, then later remove the draft version and share a clean final, or combine watermarking with compressing and splitting depending on what each recipient needs — all handled locally in the browser.",
      },
    ],
    howTo: [
      { name: "Add your PDF", text: "Drag a PDF into the drop area, or click to choose one from your device." },
      { name: "Type your watermark", text: "Enter the text you want — for example CONFIDENTIAL, DRAFT or your name." },
      { name: "Set the opacity", text: "Adjust how strong or subtle the watermark appears with the opacity control." },
      { name: "Apply and download", text: "Click apply and save the watermarked PDF. Your file is never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the PDF watermark tool free?", a: "Yes. Watermarking PDFs on In1 is completely free, and it never adds a watermark of its own — only your text." },
      { q: "Is my PDF uploaded to a server?", a: "No. The watermark is applied entirely in your browser, so your document never leaves your device." },
      { q: "Can I choose the watermark text?", a: "Yes. You type any text you want, such as CONFIDENTIAL, DRAFT, COPY, a name or a date." },
      { q: "Is the watermark added to every page?", a: "Yes. Your text is stamped diagonally across all pages of the document for consistent coverage." },
      { q: "Can I control how visible it is?", a: "Yes. An opacity control lets you make the watermark bold and unmistakable or light and subtle." },
      { q: "Can I add an image or logo watermark?", a: "This tool focuses on text watermarks, which cover the most common needs. An image watermark may be added in the future." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "organize-pdf",
    category: "pdf",
    name: "Organize PDF",
    shortDescription: "Reorder and delete PDF pages visually, then rebuild the document.",
    icon: "list-ordered",
    processing: "client",
    accept: ["application/pdf"],
    multiple: false,
    keywords: ["organize pdf", "reorder pdf pages", "delete pdf pages", "rearrange pdf", "remove pages from pdf"],
    metaTitle: "Organize PDF — Reorder & Delete Pages Online Free | In1",
    metaDescription:
      "Free online tool to organize PDF pages. Reorder and delete pages with visual thumbnails, then download the rebuilt PDF — in your browser, no uploads, no watermark.",
    h1: "Organize PDF pages",
    intro:
      "Rearrange and remove pages from a PDF with a visual page-by-page view. Drop in your file, move pages into the order you want, delete the ones you don't need, and download the rebuilt document. Everything happens in your browser.",
    sections: [
      {
        heading: "See your pages and rearrange them",
        body: "Editing the structure of a PDF blind — by typing page numbers and hoping for the best — is frustrating and error-prone. In1 shows you a thumbnail of every page so you can see exactly what you are working with. From there, reordering is simple: move any page earlier or later until the document flows the way you want. This visual approach makes it easy to fix a scan that came out in the wrong order, move an appendix to the end, bring a summary to the front, or interleave pages that were captured separately. Because you can see each page as you move it, there is no guesswork and no need to open the file repeatedly to check whether you got the order right. When the arrangement on screen matches what you want, that is exactly what the downloaded PDF will contain — what you see is what you get. Working visually also helps you catch problems you would never spot from page numbers alone: a page that is out of place, a near-duplicate, or a blank sheet hiding in the middle of a long scan. Seeing the document as a grid of pages turns reorganizing from a tedious, abstract task into something closer to rearranging cards on a table.",
      },
      {
        heading: "Delete the pages you don't need",
        body: "Often a PDF contains pages that simply should not be there: a blank sheet from a scanner, a cover page you don't want to share, duplicated pages, or sections that are irrelevant to the recipient. With In1 you can remove any page with a single click, watching the document shrink to just the pages that matter. This is perfect for trimming a long report down to the relevant section before sending, cleaning up the stray blank pages that scanners love to insert, or removing sensitive pages from a copy you need to share. The original file is never touched — you are building a new version — so you can delete freely without any risk to your source document. Combined with reordering, deleting pages lets you reshape almost any PDF into exactly the document you need, all from the same visual view.",
      },
      {
        heading: "Rebuilt cleanly, without quality loss",
        body: "When you are done arranging and deleting, In1 rebuilds the PDF by copying the pages you kept, in the order you chose, into a fresh document. Crucially, the pages are copied as-is rather than re-rendered into images, so nothing is degraded: text stays selectable and searchable, embedded fonts remain intact, and images keep their original resolution. The result is a genuine PDF, just with a new page structure — not a flattened, lower-quality imitation. This matters when the document needs to stay functional: a contract you will still search, a report you will print, or a file you will combine with others later. The thumbnails you used to arrange everything are only a visual guide; the actual rebuild works from the original high-quality pages, so the document you download is every bit as crisp and usable as the one you started with.",
      },
      {
        heading: "Private and free — nothing is uploaded",
        body: "Reorganizing a PDF often means handling exactly the documents you would least want to expose: contracts, financial records, scanned identity papers, medical files and confidential reports. Uploading such a file to an online service just to drop a page or change the order is an unnecessary risk. In1 does all the work in your browser — it reads the file into memory, renders the thumbnails locally, and rebuilds the document on your own device, then hands it back as a download. Nothing is uploaded, stored or logged, and there is no account to create. Because the processing is local there is no file-size cap from a pricing plan and no watermark added to your pages. You get the convenience and visual ease of an online page organizer with the privacy of an offline tool, which is exactly what you want when the file you are reshaping is something private that should never sit on someone else's server.",
      },
      {
        heading: "Who organizes PDF pages?",
        body: "The need is everywhere documents are assembled or scanned. Office workers reorder and trim reports, proposals and contracts before circulating them. Students rearrange scanned notes and remove blank or irrelevant pages from readings and assignments. People who scan stacks of paper fix the page order and delete the inevitable blank sheets. Anyone combining material from different sources needs to put the pages into a sensible sequence and cut what does not belong. Administrators prepare clean, correctly ordered packets from messy source files. Job seekers assemble a portfolio in the right order and drop pages they don't want a particular employer to see. In all of these cases the goal is the same: take a PDF whose pages are in the wrong order or include pages you don't want, and shape it into a clean, correctly ordered document — quickly, visually, privately and for free, without installing dedicated PDF software.",
      },
    ],
    howTo: [
      { name: "Add your PDF", text: "Drag a PDF into the drop area, or click to choose one. Page thumbnails are generated in your browser." },
      { name: "Reorder pages", text: "Move pages earlier or later until the document is in the order you want." },
      { name: "Delete pages", text: "Remove any pages you don't need with a single click." },
      { name: "Rebuild and download", text: "Click apply to rebuild the PDF from the pages you kept, then download it. Nothing is uploaded." },
    ],
    faq: [
      { q: "Is the organize PDF tool free?", a: "Yes. Reordering and deleting PDF pages on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my PDF uploaded to a server?", a: "No. Thumbnails are rendered and the document is rebuilt entirely in your browser, so your file never leaves your device." },
      { q: "Can I both reorder and delete pages?", a: "Yes. You can move pages into any order and remove the ones you don't need, then download the rebuilt PDF." },
      { q: "Does it reduce quality?", a: "No. Kept pages are copied as-is, not re-rendered, so text stays selectable and images keep their original resolution." },
      { q: "Will my original file change?", a: "No. The tool builds a new PDF from your selections; your original file is never modified." },
      { q: "Is there a page or size limit?", a: "There is no fixed limit, though generating thumbnails for a very large PDF takes longer. Everything is bounded by your device's memory." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "trim-video",
    category: "video",
    name: "Trim Video",
    shortDescription: "Cut a clip from a video by setting a start and end time.",
    icon: "scissors-line-dashed",
    processing: "client",
    accept: ["video/*"],
    multiple: false,
    keywords: ["trim video", "cut video", "video cutter", "clip video", "shorten video online"],
    metaTitle: "Trim Video — Cut Video Clips Online Free | In1",
    metaDescription:
      "Free online video trimmer. Cut a clip from any video by start and end time and download it — fast and private, in your browser, no uploads, no watermark.",
    h1: "Trim a video",
    intro:
      "Keep just the part of a video you want. Drop in your file, set a start and end time, and download the trimmed clip. The cut is done in your browser, so your video is never uploaded.",
    sections: [
      {
        heading: "Cut a clip down to what matters",
        body: "Most videos contain more than you need. There is dead air at the start while the camera settles, a long tail after the action is over, or a single moment in the middle that is the only part worth keeping. Trimming lets you cut the video down to just that span, so you can share a tight clip instead of asking people to scrub through minutes of filler. In1 makes this simple: you set a start time and an end time, and the tool produces a new video containing only that section. It is perfect for grabbing a highlight from a longer recording, removing the boring beginning and end of a screen capture, or isolating the exact few seconds you want to send. Because you keep only the portion you choose, the resulting file is also smaller and quicker to upload or message — you are sending the moment, not the whole reel. Setting a precise start and end also means you do not have to rely on whoever watches it to skip ahead; the clip simply begins where the interesting part begins and ends where it ends, which is exactly what a viewer expects from something shared deliberately rather than a raw recording dumped in full.",
      },
      {
        heading: "Fast, because it doesn't re-encode",
        body: "Trimming on In1 is built for speed. Instead of re-encoding the whole video — which is slow, especially in the browser — it copies the existing audio and video streams directly into the new clip, simply discarding everything outside your chosen range. That means trimming is dramatically faster than a full conversion and there is no loss of quality at all, since the original frames and audio are passed through untouched. The trade-off worth knowing about is that, to keep this speed and quality, the cut snaps to the nearest keyframe near your start point, so the clip may begin a fraction of a second from the exact time you typed. For the vast majority of uses that is imperceptible, and in return you get a near-instant, lossless trim instead of a long wait while every frame is rebuilt.",
      },
      {
        heading: "Runs in your browser — private and free",
        body: "The cut happens entirely on your own device using ffmpeg compiled to WebAssembly, so your video is never uploaded to a server, stored or logged. That privacy is important, because the videos people trim are often personal: family recordings, clips of friends, screen captures that may show private information, or footage that simply is not meant to be public. With In1 there is no upload, no account, no watermark on the output and no daily limit. Because the processing is local it leans on your device's resources rather than a server, so there is a sensible size limit on the video you can load, and very long files are best handled by a desktop application. For the typical clip you want to shorten, though, trimming in the browser is fast, completely private, and free, with nothing leaving your machine and no waiting on an upload or a queue.",
      },
      {
        heading: "The first trim loads the engine",
        body: "Because the trimming engine runs locally, the ffmpeg core downloads to your browser the first time you use a video or audio tool here. It happens once and is then cached, so later operations start much faster and even work offline. While the engine loads and while your clip is being produced, a progress indicator shows that the tool is working and has not stalled. Trimming itself is quick since it copies streams rather than re-encoding them, so the bulk of any wait on the very first use is simply that one-time engine download. None of this requires any setup from you — it is the trade-off that makes private, on-device video editing possible without installing anything. Once the engine is cached, trimming feels close to instant for typical clips, and you can cut as many videos as you like for free.",
      },
      {
        heading: "Who trims videos and why",
        body: "The need shows up constantly. People cut a highlight out of a long phone recording to share on a chat or social feed. Creators trim the dead space off the start and end of a screen recording before posting a tutorial. Someone preparing a clip for a presentation isolates the exact segment they want to show. Players trim a gameplay moment worth keeping. Anyone sending a video by message cuts it down to fit a size limit or to respect the recipient's time. Teachers and students clip the relevant portion out of a recorded lecture. In every case the goal is the same: take a longer video and keep only the part that matters, producing a smaller, sharper clip — and do it quickly, privately and for free, without uploading personal footage to a server or installing video-editing software for one simple cut. It also pairs naturally with the other media tools: trim a clip down first, then convert it to a different format or turn it into a GIF, all locally and in a few seconds.",
      },
    ],
    howTo: [
      { name: "Add your video", text: "Drag a video file into the drop area, or click to choose one from your device." },
      { name: "Set start and end", text: "Enter the start and end time, in seconds, of the section you want to keep." },
      { name: "Trim", text: "Click trim and In1 cuts the clip locally in your browser. The first run loads the engine." },
      { name: "Download", text: "Save the trimmed clip. Your video was never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the video trimmer free?", a: "Yes. Trimming videos on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my video uploaded to a server?", a: "No. The trim happens entirely in your browser, so your video never leaves your device." },
      { q: "Why is trimming so fast?", a: "It copies the existing video and audio streams instead of re-encoding them, which is much faster and completely lossless." },
      { q: "Why doesn't the clip start at the exact time I set?", a: "To stay fast and lossless, the cut snaps to the nearest keyframe near your start point, so it may begin a fraction of a second off. For most clips this is imperceptible." },
      { q: "Does the output keep the original quality?", a: "Yes. Because the streams are copied rather than re-encoded, the trimmed clip keeps the original video and audio quality." },
      { q: "Is there a size limit?", a: "Yes. Because processing happens in memory on your device, very large videos are limited; for typical clips there's no issue." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "video-converter",
    category: "video",
    name: "Video Converter",
    shortDescription: "Convert videos between MP4 and WebM right in your browser.",
    icon: "video",
    processing: "client",
    accept: ["video/*"],
    multiple: false,
    keywords: ["video converter", "convert video", "mov to mp4", "webm to mp4", "mp4 to webm"],
    metaTitle: "Video Converter — MP4 & WebM Converter Free | In1",
    metaDescription:
      "Free online video converter. Convert videos between MP4 (H.264) and WebM right in your browser — no uploads, no watermark, no sign-up. Private and free.",
    h1: "Convert video files",
    intro:
      "Convert a video from one format to another without uploading it anywhere. Drop in your file, choose MP4 or WebM, and In1 re-encodes it in your browser. Best for short clips, since conversion runs on your device.",
    sections: [
      {
        heading: "Convert between MP4 and WebM",
        body: "Video formats are not interchangeable, and the one you have is not always the one a particular site, app or editor will accept. MP4 (with H.264 video) is the universal standard that plays virtually everywhere — phones, browsers, editors, social platforms and TVs — which makes it the safest choice for sharing and compatibility. WebM is a free, open format designed for the web that often produces smaller files and is preferred by some web apps and platforms. In1 converts between the two so you can take a WebM that will not open in your editor and turn it into an MP4, or convert an MP4 into a lighter WebM for embedding on a page. You simply pick the output format and the tool re-encodes the video for you. Because both formats are widely supported, having a quick way to move between them means you are never blocked by a file that is technically fine but in the wrong container.",
      },
      {
        heading: "Runs in your browser — private and free",
        body: "The conversion happens entirely on your own device using ffmpeg compiled to WebAssembly, so your video is never uploaded to a server, stored or logged. That matters because video is often deeply personal — recordings of family and friends, screen captures that may contain private details, or footage that simply is not meant to be public. Most online converters send your file to their servers to process it; In1 does not, which removes that privacy risk entirely. There is no account, no watermark on the output and no daily limit. The trade-off for keeping everything local is that re-encoding video is computationally heavy and runs on your device, so this is best suited to short clips rather than feature-length files. For the typical clip you want to convert, though, it gives you the convenience of an online tool with the privacy of an offline one, and nothing ever leaves your machine.",
      },
      {
        heading: "Honest about performance",
        body: "It is worth being upfront: re-encoding a video is fundamentally more demanding than converting an image or extracting audio, and In1 runs the encoder in a single thread to keep the site fast and compatible with the ads that keep it free. The practical effect is that conversion speed depends on your device and the length of the clip — a few seconds of video convert quickly, while a long recording can take a while. To keep things responsive and avoid running out of memory, there is a sensible size limit on the file you can load, and very large or long videos are better handled by a desktop application. We use a fast encoder preset so the wait stays reasonable, and a progress bar keeps you informed throughout. Setting expectations here means you can decide when the in-browser convenience is the right call and when a heavier file belongs in dedicated software. For most short clips, the local approach is more than fast enough and well worth the privacy it buys.",
      },
      {
        heading: "The first conversion loads the engine",
        body: "Because the encoder runs locally, the ffmpeg core downloads to your browser the first time you use a video or audio tool here. It happens once and is then cached, so later conversions start much faster and even work offline. While the engine loads and while your video is being re-encoded, a progress indicator shows that the tool is working and has not stalled. None of this requires any setup from you — it is simply what makes private, on-device video conversion possible without installing anything. Once the core is cached, the only time cost is the encoding itself, which depends on the clip. This one-time download is also why the very first conversion feels slower than the ones that follow: after it, the engine is ready and waiting, so you can convert several clips in a row without paying that cost again.",
      },
      {
        heading: "Who converts video and why",
        body: "The need is common. People convert a WebM downloaded from the web into MP4 so it opens in their phone's gallery or a video editor that does not support WebM. Others convert an MP4 into WebM to embed it on a website with a smaller file size. Someone whose camera or screen recorder produced a format an upload form rejects converts it into a widely accepted one. Developers convert clips into the format a platform or player expects. Anyone who has hit 'this video format is not supported' has needed a converter. In every case the goal is the same: take the video you have and turn it into a format that works where you need it, at a reasonable quality — and, with In1, do it privately on your own device and for free, without sending personal footage to a server or installing heavy software for an occasional conversion. As a rule of thumb, reach for MP4 when you need something that will play anywhere without question, and choose WebM when a smaller, web-optimized file is the priority and you know the destination supports it.",
      },
    ],
    howTo: [
      { name: "Add your video", text: "Drag a video file into the drop area, or click to choose one from your device." },
      { name: "Choose a format", text: "Pick MP4 (H.264) for maximum compatibility, or WebM for a smaller web-friendly file." },
      { name: "Convert", text: "Click convert and In1 re-encodes the video locally. The first run loads the engine." },
      { name: "Download", text: "Save the converted video. Your file was never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the video converter free?", a: "Yes. Converting videos on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my video uploaded to a server?", a: "No. The conversion runs entirely in your browser, so your video never leaves your device." },
      { q: "Which formats are supported?", a: "You can convert between MP4 (H.264 video) and WebM (VP8 video), in either direction." },
      { q: "Why is conversion slower than other tools?", a: "Re-encoding video is computationally heavy and runs single-threaded (to keep the site ad-supported and fast), so it's best for short clips." },
      { q: "Is there a size limit?", a: "Yes. Because processing happens in memory on your device, large or long videos are limited; short clips work best." },
      { q: "Why is the first conversion slower?", a: "The ffmpeg engine downloads to your browser on first use, then is cached so later conversions start faster." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "video-to-gif",
    category: "video",
    name: "Video to GIF",
    shortDescription: "Turn a short video clip into an animated GIF.",
    icon: "clapperboard",
    processing: "client",
    accept: ["video/*"],
    multiple: false,
    keywords: ["video to gif", "mp4 to gif", "make a gif", "convert video to gif", "gif maker"],
    metaTitle: "Video to GIF — Make Animated GIFs Online Free | In1",
    metaDescription:
      "Free online video to GIF maker. Turn a short clip into an animated GIF with adjustable frame rate, size and length — in your browser, no uploads, no watermark.",
    h1: "Convert video to GIF",
    intro:
      "Turn a short video clip into an animated GIF. Drop in your file, choose the frame rate, size and how many seconds to capture, and download the GIF. Everything happens in your browser, so your video is never uploaded.",
    sections: [
      {
        heading: "Make a GIF from any short clip",
        body: "Animated GIFs are the universal language of reactions, demos and short loops. They autoplay silently, work in chat apps, documents, issue trackers and web pages without a video player, and loop endlessly to drive a point home. In1 turns a short video clip into a GIF so you can capture a funny moment, a reaction, a quick product demo, or a how-to loop and drop it anywhere a GIF is welcome. You pick the part of the clip to capture and a few quality settings, and the tool produces a ready-to-use animated GIF. Because a GIF needs no audio track and no player controls, it is often the friendliest way to share a brief moving image — it just plays, everywhere, the instant it loads. For short, silent, looping moments, a GIF communicates faster than asking someone to click play on a video. And because GIFs are treated as images rather than media, they slip into places a video file often cannot go — an issue comment, a wiki page, a chat that does not embed players, or an email — and start moving the instant they appear, with no thumbnail to tap and no controls to fumble with.",
      },
      {
        heading: "Control frame rate, size and length",
        body: "A GIF is a trade-off between smoothness, sharpness and file size, and In1 hands you the controls that matter. The frame rate sets how smooth the motion looks — higher is smoother but heavier, while a lower rate keeps the file small and is perfectly fine for simple loops. The width sets the dimensions of the GIF; a smaller size keeps it light for chat and email, while a larger one shows more detail. And because GIFs balloon in size with every extra second, you choose a start point and a short duration to capture, keeping the result manageable. Together these three settings let you dial in exactly the GIF you want: a tiny, snappy reaction loop, or a slightly larger, smoother demo. Seeing how the choices affect the output helps you find the sweet spot between looking good and staying small enough to share.",
      },
      {
        heading: "Why GIFs are kept short and small",
        body: "It helps to understand why this tool nudges you toward short clips. The GIF format is old and inefficient compared to modern video: it stores many full frames rather than cleverly compressing motion, so file size grows quickly with length, frame rate and dimensions. A few seconds at a modest size produces a shareable file; a long, high-frame-rate, full-size GIF can be enormous — far larger than the original video — and slow to load. That is why In1 focuses on short captures with adjustable quality, so you get a GIF that is actually practical to send and embed. If you need a long clip with sound, a video format is the right tool; but for a brief, silent, looping moment that needs to play instantly and everywhere, a compact GIF is exactly right, and keeping it short is what keeps it usable.",
      },
      {
        heading: "Runs in your browser — private and free",
        body: "The GIF is created entirely on your own device using ffmpeg compiled to WebAssembly, so your video is never uploaded to a server, stored or logged. That privacy matters because the clips people turn into GIFs are often personal — moments with family and friends, screen recordings that may show private details, or footage not meant to be public. Most online GIF makers send your file to their servers; In1 does not. There is no account, no watermark stamped on the GIF and no daily limit. Because the work is local it uses your device's resources, so this is designed for short clips rather than long videos, and there is a sensible size limit on what you can load. For the brief moments a GIF is meant to capture, though, you get the convenience of an online maker with the privacy of an offline tool, and nothing ever leaves your machine.",
      },
      {
        heading: "Who makes GIFs and why",
        body: "The audience is broad. Social media users and chatters create reaction GIFs and shareable loops from clips they love. Product teams and developers turn short screen recordings into GIFs to demonstrate a feature in a README, an issue, a pull request or release notes, where an autoplaying loop is far more convenient than a video file. Marketers make eye-catching looping snippets for emails and landing pages. Support teams capture a quick how-to as a GIF that plays inline. Educators and writers embed small animated examples in documents. Anyone who wants to show a brief moving moment without the friction of a video player reaches for a GIF. In every case the goal is the same: take a short clip and turn it into a compact, autoplaying, universally supported animation — quickly, privately and for free, without uploading personal footage or installing GIF-making software. It also pairs well with the trimmer: cut the exact moment you want first, then turn that tight clip into a GIF, so the animation contains only the part worth looping.",
      },
    ],
    howTo: [
      { name: "Add your video", text: "Drag a short video clip into the drop area, or click to choose one from your device." },
      { name: "Set the options", text: "Choose the frame rate, the width, and the start time and duration to capture." },
      { name: "Create the GIF", text: "Click create and In1 builds the GIF locally in your browser. The first run loads the engine." },
      { name: "Download", text: "Save the animated GIF. Your video was never uploaded anywhere." },
    ],
    faq: [
      { q: "Is the video to GIF maker free?", a: "Yes. Making GIFs on In1 is completely free with no watermark, no limits and no account required." },
      { q: "Is my video uploaded to a server?", a: "No. The GIF is created entirely in your browser, so your video never leaves your device." },
      { q: "Why should I keep the GIF short?", a: "The GIF format is inefficient, so file size grows fast with length, frame rate and size. Short captures stay small enough to share and load quickly." },
      { q: "Can I choose the part of the video to capture?", a: "Yes. You set a start time and a duration, plus the frame rate and width, to control exactly what the GIF contains." },
      { q: "Does the GIF have sound?", a: "No. GIFs cannot contain audio — they are silent animations. If you need sound, keep it as a video." },
      { q: "Is there a size limit?", a: "Yes. Because processing happens in memory on your device, large videos are limited; short clips work best for GIFs anyway." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "character-counter",
    category: "text",
    name: "Character Counter",
    shortDescription: "Count characters, words and lines live, with and without spaces.",
    icon: "letter-text",
    processing: "client",
    keywords: ["character counter", "count characters", "letter counter", "character count online", "characters with spaces"],
    metaTitle: "Character Counter — Count Characters Online Free | In1",
    metaDescription:
      "Free online character counter. Count characters with and without spaces, plus words, lines and sentences, live as you type. Private, in your browser, no sign-up.",
    h1: "Character counter",
    intro:
      "Paste or type your text and instantly see the exact character count — both with and without spaces — alongside words, lines and sentences. Every figure updates live as you write, and nothing is ever uploaded.",
    sections: [
      {
        heading: "Count characters with and without spaces",
        body: "Different platforms count length in different ways, and getting it wrong means rejected forms or cut-off posts. In1 shows you both totals at once: the full character count, which includes every space, tab and line break, and the character count without spaces, which many academic and pricing rules use instead. As you type or paste, both numbers refresh on every keystroke, so you never have to guess which definition a given limit follows. This matters because a tweet, an SMS, a meta description and a college essay can all measure the same paragraph differently. Seeing the two figures side by side lets you match whichever rule applies without recounting by hand or pasting your text into another program. It also helps when you are translating a length requirement between tools that disagree, since you can read off the exact number each one expects rather than estimating and hoping it fits inside the cap.",
      },
      {
        heading: "Stay inside strict character limits",
        body: "So much of modern writing is governed by hard character ceilings. Search engine title tags get truncated past roughly sixty characters, meta descriptions past about one hundred and sixty, and social platforms each enforce their own caps on posts, captions and bios. Text messages split into multiple parts once they cross a threshold, and marketplace listings often reject titles that run too long. With a precise character counter visible as you write, you can compose right up to the edge of any limit and stop with confidence instead of submitting and discovering the platform chopped off your final words. This is especially valuable for SEO and ad copy, where every character is a paid or hard-won opportunity and an overflow silently loses the words meant to earn the click. The live total turns a frustrating cycle of write, submit, get rejected, and trim into a single confident pass.",
      },
      {
        heading: "More than characters — words, lines and sentences too",
        body: "A character counter is most useful when it gives you the surrounding context, so In1 reports words, lines and sentences along with the two character totals. The word count helps with essays, articles and anything billed or limited per word. The line count is handy for code snippets, address blocks, lists and poetry, where the number of lines matters as much as the number of characters. The sentence count offers a quick readability signal: a long passage made of very few sentences hints at run-on constructions, while a flurry of short sentences can read as choppy. Because all of these figures update together in real time, you get a complete picture of your text's shape in a single glance, without switching between separate counters or doing any math yourself. It is the difference between knowing only how long your text is and understanding how it is actually built.",
      },
      {
        heading: "Private by design — nothing is uploaded",
        body: "Your text can be confidential: an unpublished draft, a client's brief, a password hint or a personal message you would rather not share. In1 counts everything locally in your browser using plain JavaScript, so not a single character is sent to a server. There is no upload, no account and no stored history. You can paste an entire document and the counting still happens instantly on your own device, then disappears the moment you close the tab. This local-only design is not only safer, it is also what makes the tool so fast: there is no request travelling to a server and back, no spinner and no failure if your connection drops. Counting works exactly the same offline as online, and a long report is handled just as smoothly as a single line, which makes it a dependable tool whether you are on a train, behind a firewall or simply value your privacy.",
      },
      {
        heading: "Who uses a character counter?",
        body: "The audience is broad because almost everyone writes to a constraint. SEO specialists and marketers check titles, descriptions and ad copy against platform limits. Social media managers fit captions, bios and posts inside strict ceilings across networks that each count differently. Students confirm essays and abstracts meet exact character or word requirements. Developers measure code, identifiers and database fields that have length restrictions. UX writers keep button labels and microcopy short enough to display cleanly. Translators and editors estimate workload, which is frequently quoted per character or per word. Even casual users lean on it to keep a message concise or to make sure a forum post fits a length rule. Whatever you are writing, watching the character count move as you edit lets you shape the text to exactly the right size, so the finished piece reads the way you intended and satisfies whatever requirement it has to meet. The same tool serves a quick proofreading pass, a final length check before publishing, and the everyday habit of trimming a message until it is as tight as it can be. Because it asks nothing of you beyond pasting your text, it slots into any workflow without friction, and the instant feedback means you spend your attention on the words themselves rather than on counting them.",
      },
    ],
    howTo: [
      { name: "Add your text", text: "Type directly into the box, or paste text copied from anywhere." },
      { name: "Read the live counts", text: "Characters with and without spaces, words, lines and sentences update instantly." },
      { name: "Edit toward your limit", text: "Trim or expand the text while watching the character count approach your target." },
      { name: "Copy when you're done", text: "Copy the finished text with one click and paste it wherever you need it." },
    ],
    faq: [
      { q: "Does it count characters with and without spaces?", a: "Yes. Both totals are shown at once, so you can match limits that include spaces and ones that don't." },
      { q: "Is the character counter free?", a: "Yes. Counting characters on In1 is completely free, with no account and no limits." },
      { q: "Is my text uploaded anywhere?", a: "No. All counting happens locally in your browser, so your text never leaves your device." },
      { q: "Do spaces and line breaks count as characters?", a: "In the full total, yes — every space, tab and line break is one character. The second total excludes all whitespace." },
      { q: "Is there a length limit?", a: "There is no fixed limit. Because counting runs on your own device, you can analyze anything from a sentence to a full document." },
      { q: "Does it work on mobile?", a: "Yes. The tool runs in any modern phone or tablet browser with nothing to install." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "remove-line-breaks",
    category: "text",
    name: "Remove Line Breaks",
    shortDescription: "Strip or normalize line breaks while keeping paragraphs intact.",
    icon: "wrap-text",
    processing: "client",
    keywords: ["remove line breaks", "delete line breaks", "remove paragraph breaks", "strip newlines", "remove hard returns"],
    metaTitle: "Remove Line Breaks — Strip Newlines Online Free | In1",
    metaDescription:
      "Remove line breaks from text online for free. Replace newlines with spaces, delete them entirely, or flatten paragraphs while keeping them separate. Private, in your browser.",
    h1: "Remove line breaks from text",
    intro:
      "Paste text that is broken across many lines and turn it back into clean, flowing paragraphs. Replace line breaks with spaces, remove them completely, or flatten each paragraph to a single line while keeping paragraphs apart — all in your browser.",
    sections: [
      {
        heading: "Fix text that copied with broken lines",
        body: "Copying text from a PDF, an email, a code block or a column of justified text often drags along a hard line break at the end of every visible row. The result is a paragraph chopped into dozens of short, ragged lines that will not reflow when you paste it elsewhere. Remove Line Breaks fixes this in one step. It detects the newline characters that were baked into the text and removes them, joining the fragments back into continuous prose. Instead of pressing delete at the end of each line by hand — a tedious, error-prone chore on a long passage — you paste the text once and get clean output instantly. This is one of the most common text-cleanup tasks there is, and doing it manually on anything longer than a few lines is exactly the kind of repetitive work a tool should handle for you in a fraction of a second.",
      },
      {
        heading: "Three ways to handle your breaks",
        body: "Not every job wants the same treatment, so the tool gives you three clear modes. 'Replace with spaces' swaps each line break for a single space, which is what you usually want when reflowing a broken paragraph into one continuous block of text. 'Remove completely' deletes the breaks with nothing in their place, useful for stitching together fragments like a long URL, a serial number or a string that was wrapped across lines and should have no gaps at all. 'Keep paragraphs' is the smart option for documents: it flattens the lines inside each paragraph but preserves the blank line between paragraphs, so a multi-section article stays readable instead of collapsing into one giant wall of text. You can switch between the modes and watch the result update immediately, picking whichever output matches what you are pasting the text into next.",
      },
      {
        heading: "Clean spacing, not just line breaks",
        body: "Removing line breaks alone can leave behind a different mess: double spaces, stray tabs and leading or trailing whitespace where the broken lines used to meet. In1 tidies that up as part of the same pass. When it joins lines, it collapses the runs of extra spaces and tabs that tend to accumulate at the seams down to single spaces, and it trims whitespace from the ends, so the output reads as if it had been typed cleanly in the first place. In the 'Keep paragraphs' mode it also drops empty stretches so you do not end up with three or four blank lines between sections. The goal is text you can paste straight into a document, a form, a chat message or a content management system without a second round of find-and-replace to fix the spacing the line breaks left behind. That single combined pass — breaks handled and spacing normalized together — is what separates a genuinely useful cleanup from one that simply trades one formatting problem for another.",
      },
      {
        heading: "Private and instant — nothing leaves your browser",
        body: "The text you are cleaning up might be a draft contract, a private email thread, internal notes or research you have not published. In1 processes everything locally in your browser with plain JavaScript, so your content is never uploaded to a server. There is no account to create, no file to transfer and no stored copy left behind — when you close the tab, the text is gone. This local approach also makes the tool genuinely instant: there is no waiting for a request to travel to a server and return, no progress bar and no failure if your connection is slow or offline. Whether you paste a single sentence or a long report, the line breaks are removed the moment you make a change. It is a fast, dependable way to reformat text without trusting it to a third-party service or worrying about where it ends up.",
      },
      {
        heading: "Common uses for removing line breaks",
        body: "People reach for this tool constantly once they know it exists. Writers and editors paste text out of PDFs and ebooks, where every line ends with a hard return, and convert it back into flowing paragraphs they can actually edit. Developers and analysts flatten data and log lines into a single string, or clean up text that wrapped awkwardly when it was copied. Office workers fix email signatures, addresses and quotes that arrived broken across lines before dropping them into a document or spreadsheet. Marketers and social media managers turn formatted blurbs into single-line text that fits a field that does not accept line breaks. Students reflow quotations and notes copied from sources. Anyone who has ever pasted a paragraph and watched it arrive as a jagged staircase of short lines has a use for a fast, private way to put it back together. Customer support agents reformat pasted ticket text before replying, translators clean source material so it flows in their editor, and researchers tidy quotations pulled from articles and reports. The task is small but relentless, surfacing any time text crosses from one program to another, and having a dependable one-click fix means you stop treating broken line breaks as an unavoidable annoyance and start handling them in a single instant pass.",
      },
    ],
    howTo: [
      { name: "Paste your text", text: "Drop in the text whose line breaks you want to remove or change." },
      { name: "Choose a mode", text: "Pick replace-with-spaces, remove-completely, or keep-paragraphs depending on your goal." },
      { name: "Review the result", text: "The cleaned text updates instantly, with extra spaces collapsed and ends trimmed." },
      { name: "Copy it out", text: "Copy the result with one click and paste it wherever you need clean text." },
    ],
    faq: [
      { q: "Can I keep my paragraphs separate?", a: "Yes. The 'Keep paragraphs' mode flattens the lines inside each paragraph but preserves the blank line between paragraphs." },
      { q: "Does it remove double spaces too?", a: "Yes. When joining lines it collapses runs of extra spaces and tabs into single spaces and trims the ends." },
      { q: "Is my text uploaded anywhere?", a: "No. Everything runs locally in your browser, so your text never leaves your device." },
      { q: "What's the difference between the modes?", a: "Replace-with-spaces inserts a space where each break was, remove-completely deletes breaks with nothing in their place, and keep-paragraphs preserves paragraph gaps." },
      { q: "Is it free?", a: "Yes. The tool is completely free, with no sign-up and no limits on how much text you can clean." },
      { q: "Will it work on a long document?", a: "Yes. Because processing is local and instant, it handles anything from a sentence to a full document." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "remove-duplicate-lines",
    category: "text",
    name: "Remove Duplicate Lines",
    shortDescription: "Delete repeated lines from a list, with optional sorting and case rules.",
    icon: "copy-minus",
    processing: "client",
    keywords: ["remove duplicate lines", "delete duplicate lines", "dedupe list", "remove duplicates text", "unique lines"],
    metaTitle: "Remove Duplicate Lines — Dedupe a List Online Free | In1",
    metaDescription:
      "Remove duplicate lines from any list online for free. Keep only unique lines, ignore case, trim whitespace and sort A→Z. Private, runs in your browser, no sign-up.",
    h1: "Remove duplicate lines",
    intro:
      "Paste a list and instantly get back only the unique lines, with the duplicates removed. Choose whether to ignore case, trim whitespace and sort the result alphabetically — and see exactly how many duplicates were dropped.",
    sections: [
      {
        heading: "Turn a messy list into a clean, unique one",
        body: "Lists pile up duplicates almost as fast as you build them: email addresses merged from several sources, keywords gathered from different tools, log lines, URLs, product codes or names compiled by more than one person. Scanning a long list by eye to find and delete the repeats is slow and unreliable, and a single missed duplicate can throw off a count, a mail merge or an import. Remove Duplicate Lines does it in one pass. It reads your list line by line, keeps the first occurrence of each unique line and discards every later repeat, then shows you the cleaned result along with a count of how many duplicates it removed. What would take many minutes of careful manual checking on a few hundred lines happens the instant you paste, so you can trust that the list you carry forward genuinely contains each item only once.",
      },
      {
        heading: "Control how duplicates are matched",
        body: "Whether two lines count as 'the same' depends on the job, so the tool gives you switches to define it. 'Ignore case' treats Apple, apple and APPLE as one entry, which is what you usually want for things like email addresses and tags where capitalization is not meaningful. 'Trim whitespace' removes leading and trailing spaces before comparing, so a line that picked up a stray space when it was copied is still recognized as a duplicate rather than slipping through as unique. Leaving these switches off gives you a strict, exact match where even a difference in capitalization or a trailing space keeps both lines. Because the result updates the moment you toggle a switch, you can see immediately how many more or fewer duplicates each rule catches and choose the combination that fits your data, instead of committing to one interpretation and hoping it was right.",
      },
      {
        heading: "Sort and tidy in the same step",
        body: "Deduplicating is often only half of what you actually want. In1 lets you sort the unique lines alphabetically from A to Z in the same operation, which turns a chaotic pile into an ordered reference you can scan, compare or hand off. It can also trim whitespace from each line as it goes, so the output is not just unique but clean. If you prefer to preserve the original sequence — for example when the order carries meaning, like a ranked list or a sequence of events — simply leave sorting off and the tool keeps your lines in the order they first appeared. Either way you get a count of removed duplicates, which is a useful sanity check: it confirms the tool did something, and it can reveal just how much repetition was hiding in a list that looked fine at a glance. Sorting and trimming in the same step also means the output is ready to use immediately, with no follow-up pass to alphabetize or strip stray spaces before you import or share it.",
      },
      {
        heading: "Private by design — your list stays on your device",
        body: "The lists people deduplicate are frequently sensitive: customer emails, subscriber exports, internal inventories, gathered leads or research data. In1 processes everything locally in your browser using plain JavaScript, so your list is never uploaded to a server, stored or logged. There is no account, no file transfer and nothing left behind once you close the tab. This matters for privacy and compliance — a list of personal email addresses should not be pasted into a random website that ships it off to who-knows-where — and it also makes the tool fast and reliable. There is no upload step, no waiting and no failure if your connection drops; the deduplication happens instantly on your own machine. You get the convenience of an online tool with the privacy of a local one, which is exactly what handling other people's data responsibly calls for.",
      },
      {
        heading: "Who removes duplicate lines, and why",
        body: "The use cases span far beyond programmers. Marketers and salespeople clean merged contact lists before importing them, so the same person is not emailed twice and the count is accurate. SEO specialists dedupe keyword lists gathered from several research tools. Developers and data analysts strip repeats out of log files, query results, configuration lists and seed data. Office workers tidy up inventories, attendee lists and survey responses pasted together from multiple spreadsheets. Writers and researchers compile references and citations from different documents and remove the inevitable overlaps. Even casual users clean up a list of links, names or to-dos that grew duplicates over time. Any time information from more than one source gets combined, repeats creep in — and a fast, private tool that keeps only the unique lines, optionally sorted and trimmed, saves the tedium of hunting them down by hand. Teachers consolidate class rosters, event organizers merge sign-up sheets, and community managers clean lists of usernames before running a giveaway. The count of removed duplicates doubles as a quick audit, telling you at a glance how much overlap two sources actually had. Once you have used a deduplicator, going back to scrolling a list and deleting repeats by eye feels needlessly slow and risky.",
      },
    ],
    howTo: [
      { name: "Paste your list", text: "Drop in your list with one item per line." },
      { name: "Set the matching rules", text: "Toggle ignore-case and trim-whitespace to control when two lines count as duplicates." },
      { name: "Sort if you want", text: "Turn on A→Z sorting, or leave it off to keep the original order." },
      { name: "Copy the unique lines", text: "Copy the deduplicated result, with the count of removed duplicates shown above it." },
    ],
    faq: [
      { q: "Does it keep the original order?", a: "By default, yes — it keeps the first occurrence of each line in order. Turn on sorting if you want the result alphabetized instead." },
      { q: "Can it ignore capitalization?", a: "Yes. Turn on 'Ignore case' to treat lines that differ only in capitalization as duplicates." },
      { q: "How are duplicates counted?", a: "The tool shows how many lines it removed — the difference between your input line count and the number of unique lines kept." },
      { q: "Is my list uploaded anywhere?", a: "No. Everything runs locally in your browser, so your list never leaves your device." },
      { q: "Can it handle whitespace differences?", a: "Yes. Turn on 'Trim whitespace' so lines that differ only by leading or trailing spaces are matched as duplicates." },
      { q: "Is there a limit on list size?", a: "There is no fixed limit. Because processing is local, large lists are handled quickly on your own device." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "reverse-text",
    category: "text",
    name: "Reverse Text",
    shortDescription: "Reverse characters, flip word order, or flip the order of lines.",
    icon: "flip-horizontal-2",
    processing: "client",
    keywords: ["reverse text", "backwards text", "reverse string", "flip text", "reverse words"],
    metaTitle: "Reverse Text — Flip Text Backwards Online Free | In1",
    metaDescription:
      "Reverse text online for free. Flip characters to write backwards, reverse the order of words, or reverse the order of lines. Instant, private, runs in your browser.",
    h1: "Reverse text",
    intro:
      "Paste any text and flip it instantly. Reverse the characters to write backwards, reverse the order of the words in a sentence, or reverse the order of the lines in a list — three modes, updated live, all in your browser.",
    sections: [
      {
        heading: "Three kinds of reversal in one tool",
        body: "'Reverse text' can mean three different things, and In1 handles all of them so you do not have to find a separate tool for each. 'Reverse characters' turns the whole string back to front, so the last character becomes the first — this is the classic backwards text that reads from right to left. 'Reverse word order' keeps each word spelled normally but flips their sequence, so 'the quick brown fox' becomes 'fox brown quick the', which is handy for reordering lists or experimenting with sentence structure. 'Reverse line order' leaves every line untouched but flips the top-to-bottom sequence, turning a list that runs first-to-last into one that runs last-to-first. You pick the mode with a single click and the output updates immediately, so it is easy to try each one against the same text and see exactly which kind of reversal you actually need.",
      },
      {
        heading: "Reverse a list without retyping it",
        body: "One of the most practical uses is flipping the order of lines in a list. Maybe you have a chronological log that you want to read newest-first, a ranked list you want to see from the bottom up, or steps you want to walk through in reverse. Retyping or cut-and-pasting each line by hand to reverse the order is slow and easy to get wrong, especially on a long list. The line-reversal mode does it in an instant: every line keeps its exact content, only the sequence flips. Combined with the word-order mode, you can also restructure sentences and short phrases quickly — useful when you are reformatting data that was entered in the wrong direction, or simply exploring how a line reads when its parts are rearranged. It is a small task that comes up surprisingly often, and doing it by hand is exactly the kind of busywork worth skipping.",
      },
      {
        heading: "Backwards text for fun and for puzzles",
        body: "Reversing characters has a playful side too. People write backwards text for social media bios and usernames to stand out, create simple puzzles and riddles where the answer reads in reverse, test how a palindrome holds up, or generate mirror-style text for a bit of fun. Designers occasionally need reversed strings as a starting point for mirrored or flipped typographic effects. Teachers and parents use backwards words in spelling and reading games. Because the reversal is exact and instant, you can paste a word or a whole sentence and immediately see it flipped, then copy it straight into wherever you are using it. It is a lightweight, no-friction way to produce backwards text on demand without installing anything or wading through ads and pop-ups, and it works the same on a phone as it does on a computer.",
      },
      {
        heading: "Instant, private and free",
        body: "Whatever you are reversing — a private note, a list of data or just a word you are playing with — In1 does it entirely in your browser using plain JavaScript. Nothing is uploaded, nothing is stored and there is no account to create. The reversal happens the moment you type or change the mode, with no request travelling to a server and no waiting, so it works just as well offline as online. Unicode text is handled with care, so characters made of multiple code points are not garbled when the string is flipped. There are no limits on how much text you can reverse and no watermark or sign-up wall between you and the result. When you are done, one click copies the output so you can paste it wherever you need. It is a fast, free utility that respects your privacy and gets out of your way.",
      },
      {
        heading: "Who uses a text reverser?",
        body: "The audience is a mix of the practical and the playful. Social media users create eye-catching backwards bios, captions and handles. Puzzle makers and teachers build reverse-reading games and spelling exercises. Writers and editors flip word order to experiment with phrasing or to fix text that was entered in the wrong sequence. Data wranglers reverse the order of lines to read logs newest-first or to flip a list without retyping it. Developers reach for it to quickly check a reversal by hand instead of writing throwaway code. Language learners reverse words and sentences as a study aid. And plenty of people simply land here out of curiosity to see their name or a phrase written backwards. Because the tool covers character, word and line reversal in one place and runs instantly in the browser, it serves all of these needs without anyone having to hunt for a more specific utility. Musicians and poets flip lines to hear a verse from a new angle, and brand designers reverse a wordmark as a starting point for a mirrored logo treatment. Even debugging benefits: reversing a string by hand is a quick way to sanity-check an algorithm or confirm how a value is stored. Three distinct reversals, one field and an instant result keep all of that in a single place.",
      },
    ],
    howTo: [
      { name: "Paste your text", text: "Type or paste the text you want to reverse." },
      { name: "Pick a reversal mode", text: "Choose to reverse characters, reverse the word order, or reverse the line order." },
      { name: "See it flip instantly", text: "The reversed text appears immediately and updates as you switch modes or edit." },
      { name: "Copy the result", text: "Copy the reversed text with one click and use it wherever you need." },
    ],
    faq: [
      { q: "What's the difference between the modes?", a: "Reverse characters flips the whole string back to front, reverse word order flips the sequence of words, and reverse line order flips the sequence of lines." },
      { q: "Does it handle emoji and accented characters?", a: "Yes. Reversal is done by Unicode code points grouped sensibly, so most emoji and accented letters are not garbled." },
      { q: "Is my text uploaded anywhere?", a: "No. Everything runs locally in your browser, so your text never leaves your device." },
      { q: "Can it reverse the order of a list?", a: "Yes. Use the reverse-line-order mode to flip a list from first-to-last into last-to-first without retyping it." },
      { q: "Is it free?", a: "Yes. Reversing text on In1 is completely free, with no account and no limits." },
      { q: "Does it work on mobile?", a: "Yes. It runs in any modern phone or tablet browser with nothing to install." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "text-repeater",
    category: "text",
    name: "Text Repeater",
    shortDescription: "Repeat any text a set number of times, with a separator you choose.",
    icon: "repeat",
    processing: "client",
    keywords: ["text repeater", "repeat text", "repeat text generator", "copy text multiple times", "duplicate text"],
    metaTitle: "Text Repeater — Repeat Text Multiple Times Online Free | In1",
    metaDescription:
      "Repeat any text as many times as you want online for free. Choose the number of repeats and a separator — new line, space, comma or none. Instant, private, in your browser.",
    h1: "Text repeater",
    intro:
      "Type a word, phrase or block of text, choose how many times to repeat it and how to separate the copies, and get the full result instantly. Everything runs in your browser, with no limits and nothing uploaded.",
    sections: [
      {
        heading: "Repeat text exactly as many times as you need",
        body: "Sometimes you need the same text over and over: a placeholder repeated to fill a layout, a line duplicated dozens of times for a test, or a phrase multiplied for an effect. Doing it by hand means copying and pasting again and again, losing count and ending up with one too few or one too many. Text Repeater removes the guesswork. You enter your text, set the exact number of repetitions and the tool builds the full output in a single step, so you get precisely the count you asked for every time. Whether you need a handful of copies or several thousand, the result is generated instantly and is ready to copy in one click. It turns a tedious, easy-to-miscount manual chore into a reliable operation you can trust to produce exactly the right number of repeats without you having to check.",
      },
      {
        heading: "Choose how the copies are separated",
        body: "How the repeated copies should be joined depends entirely on what you are doing with them, so the tool lets you pick a separator. 'New line' puts each copy on its own line, which is ideal for building lists, test data or anything that should stack vertically. 'Space' keeps everything on one line with a gap between copies, good for filler text and inline repetition. 'Comma' joins the copies into a comma-separated sequence, handy when you need a quick CSV-style row or a delimited string. 'None' glues the copies together with nothing in between, useful for repeating a single character or symbol into a solid run. Because you can switch the separator and watch the output change immediately, it is easy to match the exact format the next step expects, instead of generating the repeats and then reformatting them by hand afterward.",
      },
      {
        heading: "Generate placeholder and test data fast",
        body: "Repeated text is a quick way to produce the filler and test data that development and design constantly need. Front-end developers repeat a line to see how a container handles overflow, how a list scrolls, or how a layout copes with far more content than usual. Designers drop in repeated placeholder text to mock up how a component looks when it is full. QA testers paste a string repeated hundreds of times to probe length limits, wrapping behavior and performance. Writers and marketers use repetition for stylistic effect in posts and messages. Because the tool can produce a large number of copies at once with the separator already correct, you skip the fiddly cycle of copy, paste, copy, paste and instead generate the whole block in one go. A sensible upper limit keeps the output manageable and the browser responsive even when you ask for a very large number of repeats, so you can lean on it for serious load and length testing without freezing the tab or losing the result you just generated.",
      },
      {
        heading: "Instant, private and free",
        body: "Text Repeater runs entirely in your browser using plain JavaScript, so whatever you repeat — a harmless placeholder or something you would rather keep private — never leaves your device. There is no upload, no account and no stored history. The output is built the moment you change the text, the count or the separator, with no server round trip, so it works the same offline as online and there is no waiting or progress bar. There is no watermark and no sign-up wall, and you can generate as many repeats as the limit allows as often as you like. When the result is ready, a single click copies the whole thing so you can paste it straight into your editor, your test, your design tool or your message. It is a small utility, but a fast and dependable one that respects your privacy and does exactly what it says.",
      },
      {
        heading: "Common uses for a text repeater",
        body: "People reach for a text repeater more often than you might expect. Developers and testers generate repeated strings and lines to stress-test inputs, fill containers and check how layouts handle overflow. Designers build quick placeholder content to preview full states. Social media users and gamers repeat words, emoji or symbols for emphasis or effect in posts and chats. Teachers and students create repeated practice lines or patterned text for exercises. Office workers duplicate a template line a set number of times to seed a document or spreadsheet. Anyone who has ever needed the same text multiplied — and tried to do it by holding down paste while counting in their head — benefits from a tool that produces the exact number of copies, in the exact format, in a single instant click. Database and spreadsheet users seed columns with a repeated value before editing individual rows, and localizers generate repeated keys to scaffold a translation file. Even simple pranks and chat effects rely on it. The combination of an exact count, a chosen separator and an instant copy is what turns a fiddly manual loop into a one-step action you never have to think about twice.",
      },
    ],
    howTo: [
      { name: "Enter your text", text: "Type or paste the word, phrase or block you want to repeat." },
      { name: "Set the count", text: "Choose how many times to repeat it, up to the maximum allowed." },
      { name: "Pick a separator", text: "Separate the copies with a new line, a space, a comma, or nothing at all." },
      { name: "Copy the result", text: "The full repeated text is generated instantly — copy it with one click." },
    ],
    faq: [
      { q: "How many times can I repeat the text?", a: "You can repeat text up to a generous maximum that keeps the output manageable and your browser responsive." },
      { q: "Can I put each copy on its own line?", a: "Yes. Choose the new-line separator and every repeat appears on a separate line." },
      { q: "Is my text uploaded anywhere?", a: "No. Everything runs locally in your browser, so your text never leaves your device." },
      { q: "Can I repeat a whole paragraph, not just a word?", a: "Yes. You can repeat anything from a single character to a multi-line block of text." },
      { q: "Is it free?", a: "Yes. The text repeater is completely free, with no account and no sign-up." },
      { q: "Does it work on mobile?", a: "Yes. It runs in any modern phone or tablet browser with nothing to install." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "find-and-replace",
    category: "text",
    name: "Find and Replace",
    shortDescription: "Find and replace text online, with case-insensitive and regex options.",
    icon: "replace",
    processing: "client",
    keywords: ["find and replace", "find and replace online", "replace text", "search and replace", "regex replace"],
    metaTitle: "Find and Replace — Search and Replace Text Online Free | In1",
    metaDescription:
      "Find and replace text online for free. Replace every match at once, ignore case, or use regular expressions. Private, instant and runs entirely in your browser.",
    h1: "Find and replace text",
    intro:
      "Paste your text, type what to find and what to replace it with, and every match is swapped instantly. Turn on case-insensitive matching or full regular expressions, and see how many replacements were made — all without leaving your browser.",
    sections: [
      {
        heading: "Replace every match in one pass",
        body: "Editing the same word or phrase by hand throughout a long document is slow and easy to get wrong: miss one occurrence and the inconsistency slips through, or accidentally change the wrong thing and you have a new bug to chase. Find and Replace does the whole job in a single pass. You enter the text to find and the text to replace it with, and every match is swapped at once, with a count showing exactly how many replacements were made. That count is a quick confidence check — it confirms the tool found what you expected and tells you the scope of the change before you copy the result out. Whether you are renaming a term across an article, fixing a repeated typo, swapping a placeholder for a real value, or standardizing wording, doing it in one instant operation is far faster and more reliable than scrolling through and editing each instance yourself.",
      },
      {
        heading: "Case-insensitive matching when you need it",
        body: "By default the search is case-sensitive, so 'Apple' and 'apple' are treated as different words — exactly what you want when capitalization matters, such as replacing a proper noun without touching the same letters elsewhere. But often you need the opposite: catching a word no matter how it was capitalized. Turn on the 'Ignore case' option and the tool matches every variation at once, so 'Color', 'color' and 'COLOR' are all found and replaced in a single step. This is invaluable when text has been written by several people, pasted from different sources, or simply typed inconsistently. You can toggle the option and watch the replacement count change immediately, which makes it easy to see how many extra matches case-insensitive mode catches and decide whether that is the behavior you actually want for this particular edit.",
      },
      {
        heading: "Full regular expressions for power users",
        body: "When a plain word search is not enough, switch on regular expression mode and the 'find' field becomes a full regex pattern. That unlocks edits that would be impossible or painfully tedious by hand: collapse runs of multiple spaces into one, strip trailing whitespace from every line, reformat dates or phone numbers, wrap or unwrap text, or match a family of words with a single pattern. The replacement field supports capture group references too, so you can rearrange the pieces a pattern matched rather than just deleting them. If a pattern is invalid, the tool tells you instead of failing silently or mangling your text, so you can fix it and try again. Regex mode turns Find and Replace from a simple word swapper into a genuinely powerful text-transformation tool, while staying out of the way when you only need a basic replacement. Because the same panel handles both, you can start with a plain swap and reach for a pattern only when the job actually calls for one, without switching tools or learning a new interface.",
      },
      {
        heading: "Private by design — nothing is uploaded",
        body: "The text you are editing might be a confidential draft, client work, source code or personal notes, so it should not be sent to a stranger's server just to change a word. In1 runs the entire find-and-replace operation locally in your browser using plain JavaScript. Nothing is uploaded, nothing is stored and there is no account to create. The replacement happens the instant you type, with no request travelling to a server and back, which also means it works the same offline as online and never fails because of a slow connection. You can paste an entire document and the swap is still immediate. When you are done, one click copies the result so you can paste it straight back into your editor. It is the convenience of an online tool with the privacy of doing the edit on your own machine, which is exactly what sensitive text deserves.",
      },
      {
        heading: "Who uses find and replace?",
        body: "Almost everyone who works with text has a use for it. Writers and editors standardize terminology, fix a repeated misspelling, or change a character's name throughout a draft. Developers and data analysts reformat values, clean up exported data, and transform strings with regex patterns that would take ages to apply by hand. Translators and localizers swap placeholders and adjust wording consistently across a file. Office workers update names, dates and figures that appear many times in a document before sharing it. Marketers tweak a campaign phrase everywhere it appears. Students reformat references and citations. Because the tool covers everything from a one-word swap to a sophisticated pattern-based transformation, and does it instantly and privately in the browser, it serves quick everyday edits and serious bulk cleanups equally well, without anyone needing to open a heavyweight editor or trust their text to an online service. Customer support teams normalize canned responses, researchers clean transcripts before analysis, and bloggers update an outdated link or brand name across an entire post in one move. The replacement count is reassuring on every one of these jobs, because it confirms the change reached exactly as many places as you expected and no more, turning a nervous bulk edit into one you can verify at a glance.",
      },
    ],
    howTo: [
      { name: "Paste your text", text: "Drop in the text you want to edit." },
      { name: "Enter find and replace", text: "Type the text to find and the text to replace it with." },
      { name: "Choose your options", text: "Optionally ignore case, or turn on regular expressions for advanced patterns." },
      { name: "Copy the result", text: "Every match is replaced instantly, with a count shown — copy the result with one click." },
    ],
    faq: [
      { q: "Does it replace all matches at once?", a: "Yes. Every occurrence is replaced in a single pass, and the tool shows how many replacements it made." },
      { q: "Can it ignore capitalization?", a: "Yes. Turn on 'Ignore case' to match a word regardless of how it is capitalized." },
      { q: "Does it support regular expressions?", a: "Yes. Switch on regex mode to use full patterns, including capture group references in the replacement." },
      { q: "Is my text uploaded anywhere?", a: "No. Everything runs locally in your browser, so your text never leaves your device." },
      { q: "What happens if my regex is invalid?", a: "The tool shows an error message and leaves your text unchanged, so nothing is mangled by a broken pattern." },
      { q: "Is it free?", a: "Yes. Find and replace on In1 is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "slugify",
    category: "web",
    name: "Slug Generator",
    shortDescription: "Turn any title into a clean, URL-friendly slug instantly.",
    icon: "link",
    processing: "client",
    keywords: ["slugify", "slug generator", "url slug", "url slug generator", "make url friendly"],
    metaTitle: "Slug Generator — Make URL-Friendly Slugs Online Free | In1",
    metaDescription:
      "Turn titles into clean URL slugs online for free. Lowercase, hyphen-separated, accent-free and safe for links. Process many lines at once, private in your browser.",
    h1: "URL slug generator",
    intro:
      "Type a title or paste a whole list and instantly get clean, URL-friendly slugs. Accents are stripped, spaces become separators and unsafe characters are removed, so every result is safe to drop straight into a link.",
    sections: [
      {
        heading: "What a slug is and why it matters",
        body: "A slug is the human-readable part of a URL that identifies a specific page — the 'best-running-shoes' in '/blog/best-running-shoes'. A good slug is lowercase, uses hyphens instead of spaces, contains only safe characters and reads clearly to both people and search engines. Getting it right matters more than it first appears. Clean, descriptive slugs are easier to read, share and remember, they look trustworthy when pasted into a message, and they give search engines another clear signal about what a page is about, which can help with ranking and click-through. Messy slugs full of spaces, capital letters, accents or punctuation get percent-encoded into unreadable strings, break in some systems, and look unprofessional. This tool takes any title and produces a slug that follows all the conventions automatically, so you do not have to remember the rules or clean each one up by hand.",
      },
      {
        heading: "Handles accents, symbols and spacing for you",
        body: "Turning a title into a safe slug involves several steps that are tedious to do manually and easy to get wrong. In1 does them all at once. Accented and special letters are converted to their plain ASCII base, so 'Café au Lait' becomes 'cafe-au-lait' rather than a string of encoded characters. Punctuation and symbols that have no place in a clean URL are removed. Runs of spaces, hyphens and underscores are collapsed into a single separator, and any separators left dangling at the start or end are trimmed away. The result is a tidy slug with no surprises. Because every transformation happens as you type, you can watch a title turn into its slug in real time and immediately see the effect of your wording, which makes it easy to tweak a title until the slug reads exactly the way you want it to.",
      },
      {
        heading: "Choose your separator and casing",
        body: "Different platforms and personal preferences call for slightly different slug styles, so the tool gives you control over the two choices that matter most. You can separate words with a hyphen, which is the web standard and what search engines recommend, or with an underscore if a particular system or convention you follow uses them. You can also choose whether to force everything to lowercase — the safest and most common option, since URLs are often case-sensitive and mixed casing can lead to duplicate-looking links — or preserve the original capitalization when you specifically need it. The options update the output instantly, so you can compare styles at a glance and pick the one that fits where the slug is going. Sensible defaults mean that for most people the tool produces exactly the right result without touching any settings at all, while the options are there the moment a specific platform or house style needs something different.",
      },
      {
        heading: "Slugify a whole list at once",
        body: "Slugs rarely come one at a time. When you are planning a content calendar, importing posts, building a sitemap or naming a batch of files, you need many slugs in one go. In1 handles that by processing each line of your input separately: paste a list of titles, one per line, and you get back the matching list of slugs in the same order, ready to copy as a block. This turns what could be dozens of individual conversions into a single instant operation, which is a real time-saver for bloggers, developers and anyone migrating or bulk-creating content. The order is preserved so you can line the slugs up against your original titles, and because everything runs locally there is no limit on how many lines you can convert at once beyond what your own device handles, which in practice means very long lists are no problem.",
      },
      {
        heading: "Private, instant and free",
        body: "The titles you are slugifying might belong to unpublished articles, internal projects or products you have not announced, so they should not be sent off to a server. In1 generates every slug locally in your browser with plain JavaScript. Nothing is uploaded, nothing is stored and there is no account or sign-up. The slug appears the moment you type, with no waiting and no network request, so it works the same offline as online. There are no limits and no watermark, and a single click copies the result so you can paste it straight into your CMS, your code or your spreadsheet. It is a small utility that quietly enforces all the slug conventions for you, saving you from both the busywork of cleaning titles by hand and the risk of shipping a broken or ugly URL — and it does it while keeping your unpublished titles entirely on your own machine. Developers wire slugs into routing and file names, e-commerce teams generate product handles in bulk, and documentation authors keep anchor links tidy and predictable. Because the same rules are applied every time, your slugs stay consistent across a whole site instead of drifting as different people create pages, which is exactly the kind of quiet consistency that keeps URLs clean and links from breaking down the line.",
      },
    ],
    howTo: [
      { name: "Enter a title", text: "Type a single title, or paste many titles with one per line." },
      { name: "Pick separator and casing", text: "Choose hyphen or underscore, and whether to force lowercase." },
      { name: "Get clean slugs", text: "Each title is converted to a URL-safe slug instantly as you type." },
      { name: "Copy them out", text: "Copy the slug or the whole list with one click and paste it where you need it." },
    ],
    faq: [
      { q: "What does this slug generator do?", a: "It turns a title into a clean, URL-friendly slug — lowercase, hyphen-separated, accent-free and stripped of unsafe characters." },
      { q: "Does it remove accents and special characters?", a: "Yes. Accented letters are converted to their plain base letters and punctuation or symbols are removed." },
      { q: "Can I slugify several titles at once?", a: "Yes. Paste a list with one title per line and you get the matching slugs back in the same order." },
      { q: "Can I use underscores instead of hyphens?", a: "Yes. You can choose a hyphen or an underscore as the word separator." },
      { q: "Is my text uploaded anywhere?", a: "No. Slugs are generated locally in your browser, so your titles never leave your device." },
      { q: "Is it free?", a: "Yes. The slug generator is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "lorem-ipsum",
    category: "text",
    name: "Lorem Ipsum Generator",
    shortDescription: "Generate placeholder text by paragraphs, sentences or words.",
    icon: "pilcrow",
    processing: "client",
    keywords: ["lorem ipsum", "lorem ipsum generator", "placeholder text", "dummy text generator", "filler text"],
    metaTitle: "Lorem Ipsum Generator — Placeholder Text Online Free | In1",
    metaDescription:
      "Generate Lorem Ipsum placeholder text online for free. Choose paragraphs, sentences or words, with the classic opening line. Instant, private and runs in your browser.",
    h1: "Lorem Ipsum generator",
    intro:
      "Generate as much placeholder text as you need in an instant. Choose paragraphs, sentences or words, decide whether to start with the classic 'Lorem ipsum dolor sit amet', and copy the result straight into your design or document.",
    sections: [
      {
        heading: "Placeholder text, generated to fit your layout",
        body: "Lorem Ipsum is the dummy text the design and publishing world has leaned on for decades, and the reason it endures is simple: it lets you see how a layout looks with content in it without the distraction of real words. When you drop in meaningful text, people start reading and reacting to the message; when you use Lorem Ipsum, attention stays on the typography, spacing and structure, which is exactly what you want while a design is still taking shape. In1 generates as much or as little of it as you need on demand. Instead of copying the same tired paragraph from somewhere and pasting it over and over to fill a space, you choose the amount you want and get a fresh block instantly, sized to your layout. It is the fast, no-friction way to fill a mockup, a template or a draft with realistic-looking filler.",
      },
      {
        heading: "Choose paragraphs, sentences or words",
        body: "Different placeholders call for different amounts of text, so the generator lets you pick the unit that matches what you are filling. Choose paragraphs when you are mocking up an article body, a blog post or a long content area and need several blocks separated by blank lines. Choose sentences when you want a specific run of prose — a card description, an intro, a caption — without the structure of full paragraphs. Choose words when you need to fill a precise, short space such as a headline, a button label, a menu item or a meta field, where the exact length matters more than the shape. You set how many of the chosen unit to generate, up to a sensible maximum, and the tool builds the text immediately. This flexibility means the same generator works for everything from a single placeholder label to a multi-section page of dummy content.",
      },
      {
        heading: "The classic opening, on or off",
        body: "There is a small convention around Lorem Ipsum: it traditionally begins with the familiar line 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'. Sometimes you want that recognizable opening, because it instantly signals to everyone looking at the mockup that the text is placeholder and not real copy that needs reviewing. Other times you would rather the filler start with varied text so it does not always look identical, especially when you are generating several separate blocks on the same page. In1 lets you toggle the classic opening on or off to suit the situation. When it is on, your text leads with the canonical phrase; when it is off, you get freshly assembled filler from the first word. It is a small touch, but it is the kind of control that keeps mockups looking intentional rather than copy-pasted from the same source every time.",
      },
      {
        heading: "Instant, private and free",
        body: "The Lorem Ipsum generator runs entirely in your browser using plain JavaScript, assembling the text on your own device the moment you click generate. Nothing is uploaded, there is no account to create and there are no limits beyond a sensible maximum that keeps the output manageable. Because it works locally, it is instant and reliable: there is no waiting for a server, no network request and no failure if you are offline. The generated text is plain and clean, with paragraphs separated by blank lines so it pastes neatly into any editor, design tool or content management system, and a single click copies the whole block. There is no watermark and no sign-up wall. It is a deliberately simple utility, but one that designers, developers and writers reach for constantly, and having it produce exactly the amount and shape of filler you asked for — privately and instantly — is what makes it pleasant to use.",
      },
      {
        heading: "Who uses a Lorem Ipsum generator?",
        body: "The audience is mostly people who build things that hold text. Web designers and UI designers fill mockups and prototypes so they can judge layout, hierarchy and spacing before real content exists. Front-end developers drop placeholder text into components and templates to see how they behave when populated, including how they handle short and long content. Print and graphic designers flow dummy text into brochures, posters and layouts to evaluate typography. Writers and editors use it to block out the structure of a document before the words are ready. Marketers and product teams populate wireframes for reviews and presentations. Students learning design or development use it while practicing layouts. Anyone who has ever needed 'some text, any text' to see how a design looks when it is not empty benefits from a generator that produces the right amount on demand, in the unit they need, without hunting for a paragraph to copy. Agencies fill client mockups before the copywriting is signed off, app developers seed demo screens for screenshots, and teachers create sample passages for typography and reading exercises. Generating fresh filler each time also avoids the oddly distracting effect of seeing the exact same placeholder paragraph repeated across every block of a page, which keeps a mockup feeling like a real, varied design rather than a template stuffed with one cloned sentence.",
      },
    ],
    howTo: [
      { name: "Choose a unit", text: "Pick paragraphs, sentences or words depending on what you are filling." },
      { name: "Set the amount", text: "Enter how many of that unit you want, up to the maximum." },
      { name: "Toggle the classic opening", text: "Decide whether to start with the familiar 'Lorem ipsum dolor sit amet' line." },
      { name: "Generate and copy", text: "Click generate, then copy the placeholder text with one click." },
    ],
    faq: [
      { q: "What is Lorem Ipsum?", a: "It is standard placeholder text used in design and publishing to fill a layout so you can judge its look without the distraction of real words." },
      { q: "Can I generate paragraphs, sentences or words?", a: "Yes. You choose the unit and how many to generate, so you can fill anything from a single label to a full page." },
      { q: "Can I start with the classic opening line?", a: "Yes. You can toggle the familiar 'Lorem ipsum dolor sit amet…' opening on or off." },
      { q: "Is it uploaded anywhere?", a: "No. The text is generated locally in your browser, so nothing is sent to a server." },
      { q: "Is there a limit?", a: "There is a sensible maximum that keeps the output manageable, which is more than enough for typical placeholder needs." },
      { q: "Is it free?", a: "Yes. The Lorem Ipsum generator is completely free, with no account and no sign-up." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "text-diff",
    category: "text",
    name: "Text Diff Checker",
    shortDescription: "Compare two texts and highlight what was added and removed.",
    icon: "git-compare",
    processing: "client",
    keywords: ["text diff", "diff checker", "compare text", "text comparison", "diff tool online"],
    metaTitle: "Text Diff Checker — Compare Two Texts Online Free | In1",
    metaDescription:
      "Compare two blocks of text online for free and see exactly what changed. Highlights additions and removals by line or by word. Private, instant, runs in your browser.",
    h1: "Text diff checker",
    intro:
      "Paste an original and a changed version and instantly see what is different. Additions and removals are highlighted in color, line by line or word by word, with a count of each — all without uploading your text.",
    sections: [
      {
        heading: "See exactly what changed between two versions",
        body: "Comparing two versions of text by eye is genuinely hard. A single changed word in a long paragraph, a moved line, or an extra space can be almost invisible when you are reading two blocks side by side and trying to hold both in your head. A diff checker removes the guesswork by computing the differences for you and showing them in color: text that was added appears one way, text that was removed appears another, and everything that stayed the same is dimmed so the changes stand out. In1 also shows a count of additions and removals, giving you an instant sense of how big the change really is. Instead of squinting back and forth and hoping you have spotted everything, you get a clear, reliable map of every difference between the two versions, which is exactly what you need when accuracy matters and a missed change has consequences.",
      },
      {
        heading: "Compare by line or by word",
        body: "Different comparisons call for different granularity, so the tool offers two modes. Line-by-line comparison treats each line as a unit and is ideal for structured text like lists, configuration, code, addresses or anything where the line is the meaningful chunk — it tells you which whole lines were added, removed or left alone. Word-by-word comparison drills deeper, highlighting the specific words that changed within otherwise similar text, which is what you want when two paragraphs are mostly the same and you need to pinpoint the exact edits inside them. You can switch between the modes instantly and watch the highlighting change, so it is easy to start with a line-level overview to see the shape of the change and then drop to word level to examine a particular passage in detail. Having both in one tool means you do not have to choose the right granularity up front or open a separate utility.",
      },
      {
        heading: "Proofread edits and catch unintended changes",
        body: "One of the most valuable uses of a diff is confirming that a change did only what you intended. When you edit a contract, a piece of copy, a configuration file or a block of code, it is easy to alter something by accident — a deleted word, a number that got changed, a line that moved. Comparing the before and after versions surfaces every difference, so you can verify that the edits are exactly the ones you meant to make and nothing slipped in unnoticed. It is equally useful in the other direction: when someone hands you a revised document, a diff shows you precisely what they touched instead of forcing you to re-read the whole thing looking for changes. This makes review faster and far more trustworthy, whether you are checking your own work, reviewing a collaborator's edits, or auditing how a piece of text evolved between two points in time.",
      },
      {
        heading: "Private by design — your text stays local",
        body: "The documents people compare are frequently sensitive: contract drafts, unpublished writing, source code, configuration or confidential records. In1 computes the diff entirely in your browser using plain JavaScript, so both versions of your text stay on your own device. Nothing is uploaded, nothing is stored and there is no account to create. The comparison runs the moment you paste or edit either side, with no server round trip, which means it is instant and works exactly the same offline as online. You can compare long documents without waiting for an upload or worrying about where your text ends up. This local-only approach is what makes a diff checker safe to use on material you would never paste into an unknown online service — you get the convenience of an instant visual comparison with the assurance that the content never leaves your machine.",
      },
      {
        heading: "Who uses a diff checker?",
        body: "Diff tools started with programmers but are useful to far more people now. Developers compare versions of code, config and data to see what changed before committing or after a merge. Writers and editors check revisions, compare drafts and confirm that requested edits were applied correctly. Lawyers and contract managers compare versions of agreements to spot exactly which clauses were altered. Translators and localizers check what changed in source text so they only re-translate what is necessary. Students and academics compare drafts of essays and papers. Office workers diff two versions of a policy, a spreadsheet export or a list to find discrepancies. Anyone who has ever needed to answer the question 'what is different between these two pieces of text?' — and wanted a trustworthy answer rather than a hopeful manual scan — benefits from a fast, private diff that highlights every addition and removal at a glance, in whichever granularity the job needs. Support engineers compare a working configuration against a broken one to isolate the change that caused an outage, and editors confirm a publisher applied their corrections and nothing else. The added and removed counts give an instant sense of scale, telling you at a glance whether two versions differ by a single word or by whole paragraphs before you even start reading the highlights.",
      },
    ],
    howTo: [
      { name: "Paste the original", text: "Put the first version of your text in the left box." },
      { name: "Paste the changed version", text: "Put the second version in the right box." },
      { name: "Choose line or word mode", text: "Compare by whole lines for structured text, or by word to pinpoint edits within similar text." },
      { name: "Read the highlighted diff", text: "Additions and removals are color-coded, with a count of each shown above the result." },
    ],
    faq: [
      { q: "What does the diff checker show?", a: "It highlights what was added and removed between two texts, with everything unchanged dimmed, plus a count of additions and removals." },
      { q: "Can I compare by word instead of by line?", a: "Yes. Switch between line-by-line and word-by-word comparison depending on how detailed you need to be." },
      { q: "Is my text uploaded anywhere?", a: "No. The comparison runs locally in your browser, so both versions of your text stay on your device." },
      { q: "Can it handle long documents?", a: "Yes. Because the diff is computed locally and instantly, you can compare long blocks of text without uploading anything." },
      { q: "Does it work for code?", a: "Yes. Line-by-line mode is well suited to code, configuration and other structured text." },
      { q: "Is it free?", a: "Yes. The text diff checker is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "markdown-to-html",
    category: "text",
    name: "Markdown to HTML",
    shortDescription: "Convert Markdown to clean HTML, with a live preview.",
    icon: "file-code",
    processing: "client",
    keywords: ["markdown to html", "md to html", "convert markdown", "markdown converter", "markdown html"],
    metaTitle: "Markdown to HTML — Convert Markdown Online Free | In1",
    metaDescription:
      "Convert Markdown to HTML online for free. Paste Markdown and get clean HTML plus a live preview, with GitHub-flavored syntax. Private, instant, runs in your browser.",
    h1: "Markdown to HTML converter",
    intro:
      "Paste your Markdown and instantly get clean HTML you can copy, plus a live preview of how it will look. GitHub-flavored Markdown is supported, and everything is converted right in your browser.",
    sections: [
      {
        heading: "From Markdown to ready-to-use HTML",
        body: "Markdown is a wonderfully simple way to write formatted text: a few hashes make headings, asterisks make things bold or italic, and dashes make lists, all in plain text that stays readable as you type. But to publish that content on the web, in an email template or inside an app, you usually need it as HTML. Converting by hand is tedious and error-prone, especially for anything with nested lists, links, code blocks or tables. This tool does it in an instant. You paste your Markdown and it produces clean, correct HTML that you can copy straight into a page, a template or a content management system. There is no need to remember the exact tags or worry about closing them properly — the converter handles the translation faithfully, so you can keep writing in comfortable Markdown and get production-ready HTML whenever you need it, without switching tools or doing the markup yourself.",
      },
      {
        heading: "See a live preview as you go",
        body: "Converting blindly is risky — you cannot be sure the output is right until you see it rendered. In1 gives you both the HTML source and a live preview, so you can check your work without leaving the tool. The preview shows your Markdown rendered the way a browser would display it: headings sized correctly, lists indented, links styled, code blocks set in a monospace box, and tables drawn with borders. As you adjust your Markdown, the preview keeps up, so you can catch a malformed list or a missing blank line immediately and fix it on the spot. This tight feedback loop turns writing Markdown into a confident, visual process rather than a guess-and-check one. When the preview looks right, you know the HTML is right too, and you can switch to the source view and copy it knowing exactly what it will produce wherever you paste it.",
      },
      {
        heading: "GitHub-flavored Markdown supported",
        body: "Not all Markdown is the same, and most people who write it day to day are actually using GitHub-flavored Markdown (GFM), the popular extended dialect. In1 supports it, so the features you rely on work as expected: fenced code blocks with triple backticks, tables built from pipes and dashes, automatic linking, and the other conveniences GFM adds on top of the original specification. That means the Markdown you already write in README files, issues, notes apps and documentation converts cleanly here without surprises or stripped-out features. Supporting the dialect people genuinely use — rather than a stricter, more limited base version — is what makes the converter practical for real work. Whether you are turning a README into a web page, converting documentation, or moving notes into a CMS, the output reflects the full set of formatting you put in, including the tables and code blocks that simpler converters often mishandle.",
      },
      {
        heading: "Private by design — converted in your browser",
        body: "The content you convert might be documentation, draft articles, internal notes or anything else you would rather not hand to a third-party server. In1 performs the entire Markdown-to-HTML conversion locally in your browser using plain JavaScript, so your text never leaves your device. Nothing is uploaded, nothing is stored and there is no account to create. The conversion and the preview update the moment you type, with no network request, which makes the tool instant and fully functional offline. You can paste a long document and the HTML is produced immediately. When you are happy with it, a single click copies the HTML so you can paste it wherever it needs to go. This local-only approach gives you the ease of an online converter with none of the privacy trade-offs, which matters when the Markdown you are converting is unpublished, confidential, or simply yours to keep.",
      },
      {
        heading: "Who converts Markdown to HTML?",
        body: "The audience is wide because Markdown is everywhere. Developers convert README files and documentation into HTML for websites, wikis and help centers. Technical writers draft in Markdown for its speed and then need HTML for the publishing platform. Bloggers and content creators write posts in Markdown and paste the resulting HTML into a CMS that expects markup. Email marketers turn Markdown into the HTML their templates require. Note-takers and students export their Markdown notes to HTML for sharing or archiving. Anyone who prefers writing in plain, readable Markdown but has to deliver HTML — which is a very common situation — benefits from a converter that is accurate, supports the GitHub-flavored features they actually use, shows a live preview so they can trust the result, and does the whole thing instantly and privately in the browser. It removes the friction between a comfortable writing format and the markup the web runs on. Support teams convert help-article drafts for their knowledge base, newsletter writers turn Markdown into the HTML their sending tool expects, and educators publish lesson notes written in Markdown to a class website. Seeing the live preview before copying means there is never a surprise when the HTML lands on the page, because the rendered result you approved in the tool is the same structure that gets pasted, which removes the usual round of fixing markup after the fact.",
      },
    ],
    howTo: [
      { name: "Paste your Markdown", text: "Type or paste Markdown into the input box." },
      { name: "Watch it convert", text: "Clean HTML is generated instantly as you type." },
      { name: "Check the preview", text: "Switch to the preview to see exactly how the rendered output looks." },
      { name: "Copy the HTML", text: "Switch to the HTML view and copy the result with one click." },
    ],
    faq: [
      { q: "Does it support GitHub-flavored Markdown?", a: "Yes. Tables, fenced code blocks, automatic links and other GFM features are supported." },
      { q: "Can I preview the result?", a: "Yes. You can toggle between the raw HTML and a live rendered preview of how it will look." },
      { q: "Is my Markdown uploaded anywhere?", a: "No. The conversion runs locally in your browser, so your content never leaves your device." },
      { q: "Is the HTML clean?", a: "Yes. The converter produces standard, clean HTML you can paste directly into a page or template." },
      { q: "Does it work offline?", a: "Yes. Because everything runs in your browser, the converter works the same with or without a connection." },
      { q: "Is it free?", a: "Yes. Converting Markdown to HTML on In1 is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "markdown-editor",
    category: "text",
    name: "Markdown Editor",
    shortDescription: "Write Markdown with an instant live preview side by side.",
    icon: "square-pen",
    processing: "client",
    keywords: ["markdown editor", "online markdown editor", "markdown preview", "markdown live preview", "write markdown online"],
    metaTitle: "Markdown Editor — Live Preview Online Free | In1",
    metaDescription:
      "Write Markdown online for free with an instant live preview side by side. GitHub-flavored Markdown, copy the text or the HTML. Private and runs entirely in your browser.",
    h1: "Markdown editor with live preview",
    intro:
      "Write on the left and see your Markdown rendered on the right, instantly. Use GitHub-flavored syntax, copy either the Markdown or the generated HTML, and work entirely in your browser with nothing uploaded.",
    sections: [
      {
        heading: "Write and preview, side by side",
        body: "The best way to write Markdown is to see it taking shape as you go, and that is exactly what a split-screen editor gives you. You type in the panel on the left and the panel on the right shows your text rendered the way it will actually appear, updating with every keystroke. There is no separate 'preview' button to click and no mental translation required between the symbols you type and the formatting they produce. Add a heading and it appears, styled, the instant you type the hash; start a list and watch it indent; paste a link and see it become clickable. This immediate feedback makes writing Markdown faster and far more pleasant, especially for longer documents where small formatting mistakes are easy to miss in raw text. Instead of writing, switching context to check, and switching back, you stay in a single flow with the finished look always visible beside your words.",
      },
      {
        heading: "GitHub-flavored Markdown, fully rendered",
        body: "The editor supports GitHub-flavored Markdown, the dialect most people actually write, so the preview reflects the full range of formatting you use rather than a stripped-down subset. Headings, bold and italic, ordered and unordered lists, links, images, blockquotes, horizontal rules, inline code and fenced code blocks all render the way you expect, and tables built from pipes and dashes are drawn with proper borders. Line breaks behave sensibly, so the text you write reads the same in the preview as it does in your head. Because the rendering matches the conventions used in README files, documentation and notes apps, what you compose here will look the same when you take it elsewhere. That consistency is the whole point of a preview: it is only useful if you can trust that the rendered result you see is the result you will get when the Markdown is published or pasted into another GFM-aware system.",
      },
      {
        heading: "Copy the Markdown or the HTML",
        body: "When your document is ready, you need to get it out of the editor, and how you want it depends on where it is going. Sometimes you want the Markdown itself — to commit a README, paste into an issue, save a note, or hand to another Markdown-aware system. Other times you need the rendered HTML — to drop into a web page, an email template or a CMS that expects markup. In1 lets you copy either with a single click: grab the raw Markdown from the editor side, or copy the generated HTML from the preview side. You are never locked into one format or forced to run the text through a second tool to get the other. This dual output makes the editor useful both as a comfortable place to write Markdown and as a quick way to turn that Markdown into publishable HTML, covering the two things people most often need to do with it.",
      },
      {
        heading: "Private by design — nothing leaves your browser",
        body: "Whatever you are writing — documentation, a draft post, private notes, a README for an unreleased project — it stays on your own device. In1's Markdown editor runs entirely in your browser using plain JavaScript, so neither your Markdown nor the rendered HTML is ever uploaded to a server. There is no account to create, no document stored in the cloud and nothing left behind when you close the tab. The preview and both copy actions work with no network request, which means the editor is instant and fully functional offline — you can write on a plane or behind a firewall and it behaves exactly the same. This local-only design is what makes it safe to draft sensitive or unpublished content here, and it is also what keeps the experience fast and reliable: there is no syncing, no loading and no failure mode tied to your connection. You just write, and the preview keeps up.",
      },
      {
        heading: "Who uses an online Markdown editor?",
        body: "Plenty of people write Markdown but do not always have their preferred editor open. Developers draft README files, documentation and issue descriptions and want to see them rendered before committing or posting. Technical writers compose docs in Markdown for its speed and clarity. Bloggers and content creators write posts in Markdown and need to preview them and grab the HTML for their platform. Students and researchers take structured notes in Markdown and like seeing them formatted. Open-source maintainers polish project pages. Anyone jotting something down who wants clean formatting without wrestling with a word processor reaches for Markdown, and a browser-based editor with a live preview means they can do it anywhere, on any device, without installing anything. Being able to copy either the Markdown or the HTML at the end makes it a practical one-stop tool: a comfortable place to write and an instant way to publish what you wrote. It is equally handy for quick one-off tasks — formatting a comment, drafting release notes, or cleaning up a snippet someone sent you — where opening a full application would be overkill. Because the preview is always visible beside the text, even people who do not write Markdown often can experiment, see what each symbol does, and learn the syntax by watching it render in real time rather than memorizing rules.",
      },
    ],
    howTo: [
      { name: "Start writing", text: "Type Markdown in the left panel — a sample is there to get you started." },
      { name: "Watch the live preview", text: "The right panel renders your Markdown instantly as you type." },
      { name: "Use GitHub-flavored syntax", text: "Headings, lists, links, tables and code blocks all render as expected." },
      { name: "Copy what you need", text: "Copy the raw Markdown or the generated HTML with one click." },
    ],
    faq: [
      { q: "Is the preview really live?", a: "Yes. The rendered preview updates with every keystroke, so you always see the current result." },
      { q: "Can I copy the HTML, not just the Markdown?", a: "Yes. You can copy the raw Markdown from the editor or the generated HTML from the preview." },
      { q: "Does it support tables and code blocks?", a: "Yes. GitHub-flavored Markdown is supported, including tables, fenced code blocks and more." },
      { q: "Is my writing uploaded anywhere?", a: "No. Everything runs locally in your browser, so your Markdown and HTML never leave your device." },
      { q: "Does it work offline?", a: "Yes. Because it runs entirely in the browser, the editor works the same with or without a connection." },
      { q: "Is it free?", a: "Yes. The Markdown editor is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "uuid-generator",
    category: "web",
    name: "UUID Generator",
    shortDescription: "Generate random UUID v4 identifiers in bulk, instantly.",
    icon: "fingerprint",
    processing: "client",
    keywords: ["uuid generator", "guid generator", "uuid v4", "generate uuid", "random uuid"],
    metaTitle: "UUID Generator — Random UUID v4 Online Free | In1",
    metaDescription:
      "Generate random UUID v4 identifiers online for free. Create one or many at once, with or without hyphens, upper or lower case. Cryptographically random, in your browser.",
    h1: "UUID generator",
    intro:
      "Generate cryptographically random UUID version 4 identifiers, one at a time or hundreds at once. Choose hyphens and casing, then copy the whole batch with a click — all produced securely in your browser.",
    sections: [
      {
        heading: "What a UUID is and why it is useful",
        body: "A UUID, or universally unique identifier, is a 128-bit value written as a string like 550e8400-e29b-41d4-a716-446655440000. Its purpose is to give something an identifier that is, for all practical purposes, guaranteed never to collide with another one — even if it was generated on a different machine, in a different system, with no coordination between them. That property makes UUIDs the default choice for primary keys in distributed databases, identifiers for files and records, correlation IDs in logs and traces, idempotency keys for API requests, and anywhere two systems need to agree on a name for something without asking a central authority for the next number. Because the space of possible version 4 UUIDs is astronomically large, the chance of two randomly generated ones matching is so small it can be safely ignored. This tool produces them on demand, so you can grab a fresh identifier whenever you need one without writing a line of code or running a script.",
      },
      {
        heading: "Cryptographically random version 4 UUIDs",
        body: "There are several UUID versions, and version 4 — the kind this tool generates — is the one built almost entirely from random data. That randomness is what gives it its uniqueness and also makes it unpredictable, which matters when an identifier should not be guessable. In1 generates each UUID using the browser's built-in cryptographically secure random number generator, the same source recommended for security-sensitive work, rather than a weak pseudo-random function that could produce predictable or repeating values. The result is a properly formed, standards-compliant version 4 UUID with the correct version and variant bits set, indistinguishable from one produced by a server library. Whether you need an identifier for a throwaway test, a database seed, a configuration file or a production system, you can trust that what comes out is both correctly formatted and genuinely random. And because the generation happens entirely on your own device, the values are never transmitted or logged anywhere before you use them.",
      },
      {
        heading: "Generate one or many at once",
        body: "Sometimes you need a single identifier, and sometimes you need a whole column of them. In1 lets you set exactly how many UUIDs to generate, up to a sensible maximum, and produces the entire batch instantly. This is a real time-saver when you are seeding a database table, building test fixtures, creating a list of identifiers for a spreadsheet, or populating mock data for development. Instead of generating them one at a time and pasting each into place, you create the whole set in one step and copy it as a block, ready to drop wherever it needs to go. Each identifier in the batch is independently random, so there is no pattern or sequence linking them. Need more later? Generate another batch with a single click. The combination of bulk generation and instant copying turns what could be a tedious, repetitive task into something you finish in seconds, no matter how many identifiers the job calls for.",
      },
      {
        heading: "Format to match your system",
        body: "Different systems expect UUIDs in slightly different shapes, so the tool gives you control over the format. The standard representation uses lowercase letters and four hyphens separating the five groups of digits, and that is the default because it is what most databases, languages and specifications use. But some contexts want the hyphens removed to save space or to fit a particular column, and some legacy systems or styles prefer uppercase hexadecimal. You can toggle hyphens on or off and switch between lower and upper case, and the whole batch updates to match. This means you do not have to run the output through a separate find-and-replace step to get the exact format your target expects — you choose it up front and copy a batch that is ready to use as-is. Small as these formatting options are, they remove a common source of friction when moving generated identifiers between tools that each have their own conventions. Picking the format once and copying a batch that already matches the destination is much faster than generating in the default shape and reformatting afterward, especially when you are producing dozens of identifiers at a time.",
      },
      {
        heading: "Private, instant and free",
        body: "Identifiers might seem harmless, but the context around them — the names of unreleased projects, internal systems or test scenarios — often is not, and there is simply no reason to involve a server in generating a random value your own browser can produce. In1 creates every UUID locally using the browser's secure random generator. Nothing is uploaded, nothing is stored and there is no account or sign-up. Generation is instant because there is no network request, and it works exactly the same offline as online, so you can create identifiers on a plane or behind a corporate firewall without a hitch. There are no limits beyond a sensible per-batch maximum, and a single click copies the whole batch to your clipboard. It is a small, focused utility, but one that developers, testers and data engineers reach for constantly, and having it generate properly random, correctly formatted UUIDs privately and instantly is exactly what that everyday need calls for.",
      },
    ],
    howTo: [
      { name: "Set the quantity", text: "Choose how many UUIDs you want, from one to the maximum." },
      { name: "Pick a format", text: "Toggle hyphens and choose lower or upper case to match your system." },
      { name: "Generate", text: "Click generate to create a fresh batch of cryptographically random version 4 UUIDs." },
      { name: "Copy them", text: "Copy the whole batch with one click and paste it wherever you need." },
    ],
    faq: [
      { q: "What version of UUID does this generate?", a: "It generates version 4 UUIDs, which are built from cryptographically secure random data." },
      { q: "Are the UUIDs really random?", a: "Yes. They are produced with the browser's cryptographically secure random number generator, not a weak pseudo-random function." },
      { q: "Can I generate many at once?", a: "Yes. You can create a whole batch up to a sensible maximum and copy them all with one click." },
      { q: "Can I remove the hyphens or use uppercase?", a: "Yes. You can toggle hyphens and switch between lowercase and uppercase to match your system." },
      { q: "Are the UUIDs sent anywhere?", a: "No. They are generated locally in your browser, so the values never leave your device." },
      { q: "Is it free?", a: "Yes. The UUID generator is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "timestamp-converter",
    category: "web",
    name: "Unix Timestamp Converter",
    shortDescription: "Convert between Unix timestamps and human-readable dates.",
    icon: "calendar-clock",
    processing: "client",
    keywords: ["unix timestamp converter", "epoch converter", "timestamp to date", "unix time", "epoch to date"],
    metaTitle: "Unix Timestamp Converter — Epoch to Date Online Free | In1",
    metaDescription:
      "Convert Unix timestamps to human-readable dates and back, online and free. Seconds or milliseconds, UTC and local time, with the current epoch shown live. In your browser.",
    h1: "Unix timestamp converter",
    intro:
      "Convert a Unix timestamp into a readable date, or a date into a timestamp, instantly. Supports seconds and milliseconds, shows both UTC and your local time, and displays the current epoch ticking live.",
    sections: [
      {
        heading: "Unix time, made readable",
        body: "Unix time — also called epoch time — counts the number of seconds that have elapsed since the first of January 1970 at midnight UTC. It is the way most computers, databases, APIs and log files store moments in time, because a single number is compact, unambiguous and easy to compare or do arithmetic on. The trouble is that a number like 1700000000 means nothing to a human reading it. This converter bridges that gap. Paste a timestamp and it instantly shows you the date and time it represents, in formats you can actually read, so you can make sense of a value pulled from a database row, an API response, a JWT, a cookie or a log line. Going the other way, you can enter a normal date and get back the timestamp a system expects. It removes the constant little friction of mentally translating between machine time and human time that anyone working with data runs into.",
      },
      {
        heading: "Seconds or milliseconds, handled automatically",
        body: "One of the most common sources of confusion with Unix time is the unit. Classic Unix timestamps are measured in seconds, but many systems — JavaScript, lots of APIs and plenty of databases — use milliseconds instead, which makes the number a thousand times larger and three digits longer. Paste the wrong assumption into a naive converter and you get a date thousands of years off. In1 detects the scale for you: a ten-digit value is treated as seconds and a thirteen-digit value as milliseconds, so you usually do not have to think about it at all. It then reports the result in both seconds and milliseconds, so whichever unit the next system expects, you have the right number ready to copy. This automatic handling means you spend less time second-guessing whether a timestamp is off by a factor of a thousand and more time actually using the value.",
      },
      {
        heading: "UTC and your local time, side by side",
        body: "A moment in time looks different depending on where you are standing, and that difference is a frequent source of bugs and misunderstandings. A timestamp stored in UTC might need to be read in your local zone, or a local date might need to be expressed in UTC for an API. In1 shows you both at once: the ISO 8601 form and the UTC string for the unambiguous, timezone-independent view that servers and standards use, alongside your browser's local time for the version that matches your own clock. Seeing them together makes it easy to reason about scheduling, expiry times, log correlation across regions, and any task where getting the timezone wrong has real consequences. You do not have to do the offset math in your head or open a separate world-clock tool — the converter lays out the same instant in the formats you are most likely to need, so you can copy whichever one fits.",
      },
      {
        heading: "The current timestamp, ticking live",
        body: "Often you do not have a timestamp to convert — you just need the current one, right now, to drop into a test, a query, a config value or a piece of code. In1 shows the current Unix timestamp at the top of the tool and updates it every second, so the value is always fresh and ready to grab. A single click copies it. This sounds minor, but for developers it replaces a small ritual of opening a console and typing a command just to get 'now' as an epoch value. It is also handy as a reference point while you are converting other timestamps, letting you see at a glance whether a value is in the past or the future relative to the present moment. Because the clock runs entirely in your browser, it reflects your own device's time and keeps ticking whether or not you have a network connection. Copying the current epoch is then a one-click action, which is exactly what you want when you are filling in a value mid-task and do not want to break your flow to look it up elsewhere.",
      },
      {
        heading: "Who uses a timestamp converter?",
        body: "The audience is anyone who works with time as data. Developers convert epoch values they see in databases, JSON responses, JWTs, cookies and HTTP headers into readable dates while debugging, and grab the current timestamp to use in code and tests. Site reliability and operations engineers correlate log entries across services by translating their timestamps and comparing them in a common timezone. Data analysts make sense of exported datasets where dates are stored as numbers. QA testers check that expiry and scheduling logic behaves correctly by reading the timestamps a system produces. API integrators line up their requests with the time formats a third-party service expects. Even non-developers occasionally need to decode a timestamp they have stumbled across in a file or a URL. For all of them, a converter that handles both directions, both units and both timezones — instantly and privately in the browser — turns an annoying mental conversion into a quick lookup.",
      },
    ],
    howTo: [
      { name: "Enter a value", text: "Paste a Unix timestamp in seconds or milliseconds, or type a normal date." },
      { name: "Read the conversion", text: "See the timestamp and the date in seconds, milliseconds, ISO, UTC and local time." },
      { name: "Grab the current epoch", text: "Copy the live current timestamp shown at the top whenever you need 'now'." },
      { name: "Copy what you need", text: "Copy any of the formatted values with one click." },
    ],
    faq: [
      { q: "What is a Unix timestamp?", a: "It is the number of seconds (or milliseconds) since 1 January 1970 UTC, the standard way computers store moments in time." },
      { q: "Does it handle seconds and milliseconds?", a: "Yes. It detects the scale automatically and shows the result in both seconds and milliseconds." },
      { q: "Does it show UTC and local time?", a: "Yes. You get ISO 8601 and UTC alongside your browser's local time for the same instant." },
      { q: "Can I get the current timestamp?", a: "Yes. The current Unix timestamp is shown live at the top and updates every second." },
      { q: "Is anything uploaded?", a: "No. All conversion happens locally in your browser, so your values never leave your device." },
      { q: "Is it free?", a: "Yes. The timestamp converter is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "url-encoder-decoder",
    category: "web",
    name: "URL Encoder / Decoder",
    shortDescription: "Percent-encode or decode URLs and query strings safely.",
    icon: "code-2",
    processing: "client",
    keywords: ["url encoder", "url decoder", "percent encoding", "encode url", "decode url"],
    metaTitle: "URL Encoder / Decoder — Percent-Encode Online Free | In1",
    metaDescription:
      "Encode or decode URLs and query strings online for free. Percent-encode special characters or decode them back, for full URLs or single components. Private, in your browser.",
    h1: "URL encoder and decoder",
    intro:
      "Percent-encode text so it is safe to put in a URL, or decode an encoded URL back into readable text. Choose between encoding a full URL or a single component, and process everything instantly in your browser.",
    sections: [
      {
        heading: "Why URLs need encoding",
        body: "URLs are only allowed to contain a limited set of characters. Spaces, accented letters, and many symbols — ampersands, question marks, slashes, plus signs, hash marks and more — have special meaning or are simply not permitted, so they have to be represented in a safe form when they appear in a link or a query string. That safe form is percent-encoding, where each disallowed character is replaced by a percent sign followed by its hexadecimal byte value: a space becomes %20, an ampersand becomes %26, and so on. Without it, a search term containing a space or a parameter value containing an ampersand would break the URL or be misread by the server. This tool does the encoding and decoding for you, so you can take any text and make it URL-safe, or take an encoded URL full of percent signs and turn it back into something a human can read. It removes the need to remember the codes or do the substitution by hand.",
      },
      {
        heading: "Encode a full URL or a single component",
        body: "Not all encoding is the same, and choosing the wrong kind is a classic mistake. When you encode an entire URL, the characters that structure it — the slashes between path segments, the colon after the scheme, the question mark before the query — must be left intact, or you destroy the URL's meaning. But when you encode a single value that will go inside a URL, such as a query parameter or a path segment, those very same characters need to be encoded so they are treated as data rather than structure. In1 gives you both modes. The component mode encodes everything that is not safe, which is what you want for an individual parameter value. The full-URL mode preserves the reserved structural characters, which is what you want when encoding a complete address. Being able to pick the right one means your encoded output behaves correctly whether you are building a whole link or just escaping a single piece to slot into one.",
      },
      {
        heading: "Decode encoded URLs back to readable text",
        body: "Encoded URLs are everywhere, and they are nearly impossible to read at a glance. A link copied from a search engine, an analytics tracking URL, a redirect parameter or an API request can be a dense string of percent signs and hex digits that hides what it actually contains. Decoding turns it back into plain text so you can see the real values: the actual search query, the destination of a redirect, the human-readable parameters behind the codes. This is invaluable when you are debugging, auditing where a link really points before you click it, or simply trying to understand a URL someone sent you. In1 decodes both full URLs and individual components, reversing the percent-encoding and restoring spaces, symbols and accented characters to their normal form. If the input is malformed and cannot be decoded cleanly, the tool tells you rather than producing garbage, so you know the string itself is the problem rather than the tool.",
      },
      {
        heading: "Private by design — handled in your browser",
        body: "The URLs and values people encode or decode are frequently sensitive: links with authentication tokens, tracking parameters, internal addresses, redirect targets or query data that reveals what someone is searching for. There is no reason to send any of that to a third-party server just to swap some characters. In1 performs all encoding and decoding locally in your browser using the platform's own built-in functions, so your URLs never leave your device. Nothing is uploaded, nothing is stored and there is no account to create. The conversion happens the instant you type or switch modes, with no network request, which makes it both immediate and fully functional offline. You can paste a long, parameter-heavy URL and read its decoded form right away, or encode a value and copy the result with a single click. It is the convenience of an online utility with the privacy of doing the work on your own machine — which is exactly what URLs carrying tokens or personal data deserve.",
      },
      {
        heading: "Who uses a URL encoder and decoder?",
        body: "It is a staple for anyone who builds or inspects links. Web and back-end developers encode query parameters when constructing URLs and decode them when debugging requests, redirects and API calls. SEO and marketing specialists decode tracking and campaign URLs to read the parameters, and encode values when assembling links by hand. QA testers and security researchers decode suspicious or complex URLs to understand exactly what they do before trusting them. Data analysts clean up exported URLs that arrive percent-encoded. Support staff make sense of links shared by users that have been mangled by encoding. Even casual users occasionally need to decode a URL to see where it really leads. Because the tool covers both directions and both the full-URL and single-component cases, and does it instantly and privately, it serves the quick 'what does this link actually say' lookup and the careful construction of a correct, safe URL equally well, without anyone reaching for code.",
      },
    ],
    howTo: [
      { name: "Choose encode or decode", text: "Pick whether you want to encode text or decode an encoded URL." },
      { name: "Pick the scope", text: "Choose component encoding for a single value, or full-URL encoding to preserve structure." },
      { name: "Enter your text", text: "Paste the text or URL you want to convert." },
      { name: "Copy the result", text: "The converted output appears instantly — copy it with one click." },
    ],
    faq: [
      { q: "What is URL encoding?", a: "It replaces characters that aren't allowed in a URL with a percent sign and their hexadecimal value, like %20 for a space." },
      { q: "What's the difference between the two modes?", a: "Component mode encodes everything unsafe for a single value; full-URL mode preserves structural characters like slashes and the question mark." },
      { q: "Can it decode as well as encode?", a: "Yes. You can switch between encoding text and decoding an already-encoded URL back to readable form." },
      { q: "Is my URL uploaded anywhere?", a: "No. Encoding and decoding run locally in your browser, so your URLs never leave your device." },
      { q: "What if the input can't be decoded?", a: "If a string is malformed, the tool shows an error instead of producing garbled output." },
      { q: "Is it free?", a: "Yes. The URL encoder and decoder is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "html-entity-encoder",
    category: "web",
    name: "HTML Entity Encoder / Decoder",
    shortDescription: "Encode characters to HTML entities or decode them back.",
    icon: "code-2",
    processing: "client",
    keywords: ["html entity encoder", "html entity decoder", "html escape", "encode html", "html entities"],
    metaTitle: "HTML Entity Encoder / Decoder — Escape HTML Online Free | In1",
    metaDescription:
      "Encode text to HTML entities or decode entities back to characters online for free. Escape <, >, &, quotes and optionally non-ASCII. Private, instant, in your browser.",
    h1: "HTML entity encoder and decoder",
    intro:
      "Escape characters that have special meaning in HTML — like the angle brackets, ampersand and quotes — into their entity form, or decode entities back into plain characters. Optionally encode all non-ASCII too.",
    sections: [
      {
        heading: "Why HTML needs entities",
        body: "A handful of characters carry special meaning in HTML, and using them literally where they are not meant as markup breaks the page or, worse, opens a security hole. The less-than and greater-than signs delimit tags, the ampersand begins an entity, and quotes delimit attribute values. If you want to show those characters as text — to display a snippet of code, a math expression, or a company name like 'Tom & Jerry' — you have to write them as HTML entities instead: &lt; for less-than, &gt; for greater-than, &amp; for the ampersand, and so on. Doing this is also the foundation of preventing cross-site scripting, because escaping user-supplied text before putting it into a page stops it from being interpreted as active markup. This tool encodes those characters into their safe entity form for you, so you can drop text into HTML without it being misread as tags, and without having to remember every entity by hand.",
      },
      {
        heading: "Decode entities back to plain text",
        body: "The reverse problem is just as common: you have HTML full of entities and you want to read or reuse the actual characters. Text scraped from a web page, pulled from an HTML email, or copied out of a database can be littered with &amp;, &lt;, &#39; and numeric codes that make it awkward to read and useless to paste somewhere that expects plain text. Decoding turns all of that back into the characters it represents, so &lt;a href=&quot;x&quot;&gt; becomes the readable tag again and &amp; becomes a simple ampersand. In1 decodes both the named entities and the numeric ones using the browser's own HTML parser, which means it understands the full range of entities a real browser does — not just a short hand-coded list — so even unusual or rare entities are decoded correctly. Whether you are cleaning up scraped content, reading an export, or preparing text for a non-HTML context, decoding restores it to its natural, usable form.",
      },
      {
        heading: "Optionally encode every non-ASCII character",
        body: "Sometimes escaping the core HTML characters is enough; other times you want to go further and encode every character outside the basic ASCII range as a numeric entity. This is useful when you need maximum compatibility with systems or encodings that might mishandle accented letters, symbols, emoji or characters from non-Latin scripts. With the non-ASCII option turned on, In1 converts each such character into its numeric HTML entity, guaranteeing that the output contains only plain ASCII while still rendering as the original text in any browser. This can prevent garbled characters when content passes through older email systems, certain databases, or templating setups with uncertain encoding. When you do not need that, you can leave the option off and encode only the characters that actually have special meaning in HTML, keeping the output compact and readable. Having the choice means the tool fits both the everyday case of escaping markup characters and the stricter case of forcing everything into a safe ASCII-only form.",
      },
      {
        heading: "Private by design — runs in your browser",
        body: "The text you are escaping or unescaping might be source code, user-generated content, scraped data, email templates or anything else you would rather not hand to an outside service. In1 performs all entity encoding and decoding locally in your browser. The encoding uses simple, transparent rules and the decoding leans on the browser's built-in HTML parser, so nothing is ever uploaded, stored or logged. There is no account and no sign-up. The conversion happens instantly as you type or switch modes, with no network request, which means it works the same offline as online and never stalls on a slow connection. You can paste a large block of HTML and read its decoded form immediately, or escape a snippet and copy the safe version with a single click. This local-only approach matters because escaping is so often tied to security and to handling untrusted input — doing it on your own machine keeps both the input and the result entirely under your control.",
      },
      {
        heading: "Who uses an HTML entity tool?",
        body: "It is a daily utility for people who work with web content and markup. Front-end and back-end developers escape text before injecting it into pages to display code samples safely and to guard against cross-site scripting, and decode entities when reading data that arrived HTML-encoded. Technical writers and bloggers encode code snippets so the angle brackets show up as text instead of vanishing as tags. Email developers escape content to keep templates valid and force non-ASCII into a portable form. Data engineers decode entities out of scraped or exported HTML to recover clean text. QA testers and security researchers encode and decode payloads while probing how an application handles special characters. Even support staff occasionally need to decode an entity-laden string a user pasted. Because the tool handles encoding, decoding, the core HTML characters and the optional full non-ASCII pass — all instantly and privately — it covers the whole range of everyday HTML-escaping needs in one place.",
      },
    ],
    howTo: [
      { name: "Choose encode or decode", text: "Pick whether to turn characters into entities or turn entities back into characters." },
      { name: "Paste your text", text: "Enter the text to escape, or the entity-laden text to decode." },
      { name: "Set the non-ASCII option", text: "When encoding, optionally also convert every non-ASCII character to a numeric entity." },
      { name: "Copy the result", text: "The converted output appears instantly — copy it with one click." },
    ],
    faq: [
      { q: "Which characters get encoded?", a: "By default the HTML-special characters: <, >, &, double quote and single quote. You can optionally encode all non-ASCII characters too." },
      { q: "Does it decode named and numeric entities?", a: "Yes. Decoding uses the browser's HTML parser, so both named entities like &amp; and numeric ones like &#39; are handled." },
      { q: "Does this help prevent XSS?", a: "Escaping text before putting it into HTML is a core defense against cross-site scripting, and this tool produces that escaped form." },
      { q: "Is my text uploaded anywhere?", a: "No. Encoding and decoding run locally in your browser, so your text never leaves your device." },
      { q: "What is the non-ASCII option for?", a: "It converts every character outside basic ASCII into a numeric entity, for maximum compatibility with systems that might mishandle them." },
      { q: "Is it free?", a: "Yes. The HTML entity encoder and decoder is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "jwt-decoder",
    category: "web",
    name: "JWT Decoder",
    shortDescription: "Decode a JWT to read its header and payload claims.",
    icon: "key-square",
    processing: "client",
    keywords: ["jwt decoder", "decode jwt", "json web token decoder", "jwt parser", "read jwt"],
    metaTitle: "JWT Decoder — Decode JSON Web Tokens Online Free | In1",
    metaDescription:
      "Decode a JSON Web Token online for free and read its header and payload. Pretty-printed claims with issued, expiry and not-before times. Private — decoded in your browser.",
    h1: "JWT decoder",
    intro:
      "Paste a JSON Web Token and instantly read its header and payload as formatted JSON, with the issued, not-before and expiry times shown in human-readable form. Everything is decoded locally — nothing is uploaded.",
    sections: [
      {
        heading: "See what is inside a JSON Web Token",
        body: "A JSON Web Token, or JWT, is a compact string used to carry claims between systems — most commonly to prove who a user is after they log in. It looks like one long run of characters separated by two dots, and at a glance it tells you nothing. But it is not encrypted: the header and payload are simply Base64URL-encoded JSON, which means anyone holding the token can read what is inside. This decoder does that for you, splitting the token into its parts and turning the encoded segments back into readable, pretty-printed JSON. You can immediately see the algorithm and token type in the header, and the claims in the payload: who the token is about, who issued it, what permissions or roles it carries, and when it is valid. Being able to inspect a token quickly is essential when you are building or debugging authentication, and this tool gives you that view without writing any code or pasting the token into a command line.",
      },
      {
        heading: "Readable expiry, issued and not-before times",
        body: "Some of the most important claims in a JWT are timestamps, and they are stored as raw Unix epoch numbers that are awkward to read. The 'exp' claim says when the token expires, 'iat' says when it was issued, and 'nbf' says the earliest time it is valid. Squinting at a ten-digit number to work out whether a token is still good is exactly the kind of friction that slows down debugging. In1 reads these claims and shows them as ordinary human-readable dates and times, and it flags an expired token directly, so you can tell at a glance whether the token you are looking at is current or stale. This is invaluable when you are chasing down an authentication problem: very often the answer is simply that the token has expired, and seeing that spelled out in plain language — rather than buried in an epoch integer — turns a confusing failure into an obvious one you can fix in seconds.",
      },
      {
        heading: "Decoding is not the same as verifying",
        body: "It is important to be clear about what a decoder does and does not do, because misunderstanding it can be dangerous. This tool decodes the token: it reads the header and payload so you can inspect them. It does not verify the signature, which is the cryptographic check that proves the token was issued by who it claims and has not been tampered with. Verification requires the secret or public key that signed the token, and it must always be done on the server, never trusted to the client. So this decoder is the right tool for reading and debugging — seeing the claims, checking the expiry, understanding what a token contains — but it is not, and cannot be, a security check. Anyone can craft a string that decodes to whatever claims they like; only signature verification with the proper key tells you whether to trust it. Keeping that distinction clear is part of using JWTs safely, and the tool states it plainly so no one mistakes a successful decode for a valid token.",
      },
      {
        heading: "Private by design — decoded in your browser",
        body: "JWTs are sensitive by their very nature. A token is often a bearer credential: whoever holds it can act as the user it represents until it expires. Pasting a live token into a website that sends it off to a server would mean handing your credential to a third party, which is precisely what you must never do. In1 decodes the token entirely in your browser using plain JavaScript. The token is never uploaded, never transmitted and never stored — it is split and Base64URL-decoded right on your own device, and it is gone when you close the tab. There is no account and no logging. This local-only design is not a nice-to-have for a JWT tool; it is the only responsible way to build one, because the whole point of inspecting a token is undermined if inspecting it leaks the token. You get the convenience of an instant decoder with the assurance that your credential stays exactly where it should: with you.",
      },
      {
        heading: "Who uses a JWT decoder?",
        body: "It is an everyday tool for anyone working with modern authentication. Back-end and front-end developers decode tokens constantly while building and debugging login flows, checking that the claims, roles and expiry they expect are actually present. API developers and integrators inspect the tokens a service issues to understand what data and permissions they carry. QA testers verify that authentication behaves correctly by reading the tokens an app produces under different scenarios. Security engineers examine token contents while assessing how an application handles authorization. Support and operations staff decode a token from a bug report to see whether it has simply expired. Even people learning how JWTs work paste one in to demystify the format and see that the payload really is just readable JSON. For all of them, a decoder that shows the header and payload clearly, translates the timestamps, is honest about not verifying signatures, and keeps the token on the device is exactly the right tool for the job.",
      },
    ],
    howTo: [
      { name: "Paste your JWT", text: "Drop the full token, including both dots, into the input box." },
      { name: "Read the header", text: "See the algorithm and token type as formatted JSON." },
      { name: "Read the payload", text: "Inspect the claims, with issued, not-before and expiry times shown in readable form." },
      { name: "Copy what you need", text: "Copy the decoded header or payload with one click." },
    ],
    faq: [
      { q: "Does the decoder verify the signature?", a: "No. It decodes the header and payload so you can read them, but it does not verify the signature — that must be done on a server with the signing key." },
      { q: "Is my token sent to a server?", a: "No. The token is decoded entirely in your browser and is never uploaded, transmitted or stored." },
      { q: "Can I see when the token expires?", a: "Yes. The expiry, issued-at and not-before claims are shown as readable dates, and an expired token is flagged." },
      { q: "Why can I read the payload — isn't it secret?", a: "A JWT is encoded, not encrypted. Anyone with the token can read the header and payload, which is why you must never put secrets in them." },
      { q: "What if my token is invalid?", a: "If the string isn't a well-formed token, the decoder shows an error instead of partial or garbled output." },
      { q: "Is it free?", a: "Yes. The JWT decoder is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "regex-tester",
    category: "web",
    name: "Regex Tester",
    shortDescription: "Test a regular expression against text and see live matches.",
    icon: "regex",
    processing: "client",
    keywords: ["regex tester", "regex online", "test regular expression", "regex match", "regexp tester"],
    metaTitle: "Regex Tester — Test Regular Expressions Online Free | In1",
    metaDescription:
      "Test regular expressions online for free. Highlight matches live, toggle flags, and inspect capture groups against your own text. Private — runs entirely in your browser.",
    h1: "Regex tester",
    intro:
      "Write a regular expression and see it match your text in real time. Matches are highlighted, capture groups are listed, and you can toggle flags — all instantly and privately in your browser.",
    sections: [
      {
        heading: "See your pattern match in real time",
        body: "Regular expressions are powerful but notoriously easy to get wrong, and the only reliable way to know whether one works is to run it against real text and look at what it catches. This tester gives you that feedback instantly. You type a pattern in one box and your sample text in another, and every match is highlighted directly in the text as you go, with a running count of how many were found. There is no run button to press and no waiting — the highlighting updates with each keystroke, so you can refine a pattern and watch the effect immediately. This tight loop is what makes building a regex manageable: instead of writing the whole thing and hoping, you grow it piece by piece, confirming at each step that it still matches what it should and nothing it shouldn't. Seeing the matches in context, rather than as an abstract list, also makes it obvious when a pattern is catching too much or missing an edge case.",
      },
      {
        heading: "Toggle flags to change how matching works",
        body: "Flags change the behavior of a regular expression in important ways, and the tester lets you switch them on and off with a click so you can see their effect immediately. The global flag finds every match rather than stopping at the first. The case-insensitive flag makes letters match regardless of capitalization. The multiline flag changes how the start-of-line and end-of-line anchors behave across multiple lines. The dotall flag lets the dot match newline characters, which matters when your text spans several lines. The unicode flag enables proper handling of characters beyond the basic range. Understanding which flag does what is half of mastering regular expressions, and being able to flip each one and instantly watch the matches change is the fastest way to build that intuition. It also saves real debugging time, because a pattern that 'isn't working' is very often just missing a flag, and the tester makes that easy to spot and fix.",
      },
      {
        heading: "Inspect capture groups, not just matches",
        body: "Matching is only part of what regular expressions do; capture groups let you pull specific pieces out of each match, and getting them right is essential when you are extracting or rearranging data. The tester shows the capture groups for each match, so you can confirm that your parentheses are grabbing exactly the parts you intend. This is invaluable when you are using a regex to extract fields from log lines, parse a structured string, or reformat text with group references in a replacement. Instead of guessing whether group one is the area code and group two is the number, you can see the captured values laid out for every match and verify your pattern before you rely on it elsewhere. Seeing the groups also helps you debug a pattern that matches the right overall text but captures the wrong pieces inside it — a subtle bug that is almost impossible to catch by looking at the matches alone, but obvious once the groups are spelled out.",
      },
      {
        heading: "Private by design — tested in your browser",
        body: "The text you test a pattern against is often real, sometimes sensitive: log files, user data, source code, exported records or anything else you happen to be parsing. There is no reason to send it to a server just to run a regex, and good reason not to. In1 evaluates your pattern entirely in your browser using the JavaScript regular expression engine, so both the pattern and the test text stay on your own device. Nothing is uploaded, nothing is stored and there is no account. Matching is instant because there is no network round trip, and it works exactly the same offline as online. If your pattern is invalid, the tester tells you what is wrong instead of failing silently, so you can fix it and carry on. You can paste a large block of text and test against all of it without worrying about where it goes. It is the convenience of an online regex tester with the privacy of running the pattern locally — which is what real, sensitive test data calls for.",
      },
      {
        heading: "Who uses a regex tester?",
        body: "Regular expressions show up far beyond programming, and so do the people who need to test them. Developers build and debug patterns for validation, search, parsing and text transformation in every language, and a tester is the quickest way to confirm a pattern before dropping it into code. Data analysts and engineers craft expressions to clean, extract and reshape messy data. QA testers write patterns to validate input formats and check output. SEO and marketing specialists build regex for analytics filters, redirect rules and search-and-replace operations. System administrators use them in log analysis and configuration. Writers and editors occasionally reach for regex to perform sophisticated find-and-replace. Students learning the syntax use a live tester to understand how each construct behaves. For all of them, being able to type a pattern, see it match real text instantly, flip flags, and inspect capture groups — privately, with no setup — turns the often-frustrating process of getting a regex right into something fast and almost interactive.",
      },
    ],
    howTo: [
      { name: "Write your pattern", text: "Type a regular expression in the pattern field." },
      { name: "Choose flags", text: "Toggle global, ignore-case, multiline, dotall and unicode flags as needed." },
      { name: "Add test text", text: "Paste the text you want to match against in the test box." },
      { name: "Read the results", text: "Matches are highlighted live, with a count and any capture groups listed." },
    ],
    faq: [
      { q: "Which regex syntax does it use?", a: "It uses the JavaScript regular expression engine, so the syntax matches what you'd use in JavaScript and many similar languages." },
      { q: "Can I see capture groups?", a: "Yes. For each match the tester lists the captured groups, so you can confirm your parentheses grab the right parts." },
      { q: "What flags are supported?", a: "Global, case-insensitive, multiline, dotall and unicode flags can each be toggled on or off." },
      { q: "Is my test text uploaded anywhere?", a: "No. The pattern runs locally in your browser, so both the regex and your text stay on your device." },
      { q: "What happens with an invalid pattern?", a: "The tester shows an error explaining the problem instead of failing silently or matching nothing." },
      { q: "Is it free?", a: "Yes. The regex tester is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "number-base-converter",
    category: "web",
    name: "Number Base Converter",
    shortDescription: "Convert numbers between binary, octal, decimal and hex.",
    icon: "binary",
    processing: "client",
    keywords: ["number base converter", "binary to decimal", "decimal to hex", "hex converter", "binary converter"],
    metaTitle: "Number Base Converter — Binary, Hex, Decimal Online Free | In1",
    metaDescription:
      "Convert numbers between binary, octal, decimal and hexadecimal online for free. Enter a value in any base and see all four at once. Instant, private, in your browser.",
    h1: "Number base converter",
    intro:
      "Enter a number in binary, octal, decimal or hexadecimal and instantly see it in all four bases at once. Each result is validated and ready to copy, with everything computed in your browser.",
    sections: [
      {
        heading: "Convert between all four common bases at once",
        body: "Numbers can be written in different bases, and converting between them by hand is fiddly and error-prone. Decimal, base ten, is what people use every day. Binary, base two, is the language of computers, built from only ones and zeros. Hexadecimal, base sixteen, is a compact way to write binary that programmers use constantly for colors, memory addresses, byte values and more. Octal, base eight, still shows up in places like file permissions. This converter takes a number in any one of these bases and shows you the equivalent in all four simultaneously, so you never have to do the conversion in your head or chain together several steps. Enter a hex color component and read its decimal value; type a decimal number and see its binary form; paste a binary string and get the hex. Because all four results appear together and update as you type, you get the full picture of a value at once, which is far quicker than converting one pair at a time.",
      },
      {
        heading: "Pick your input base and type away",
        body: "To convert a number correctly, the tool needs to know what base you are starting from, because the same digits can mean different things in different bases — '10' is ten in decimal but two in binary, eight in octal and sixteen in hex. In1 lets you choose the input base with a single tap, and then interprets whatever you type accordingly. As soon as you enter a value, the conversions to the other three bases appear instantly. This makes the tool comfortable for quick one-off lookups and for working through a series of values: set the base once and keep typing. The decimal result is always shown so you can anchor an unfamiliar binary or hex value to a number you intuitively understand, and the hexadecimal output is shown in a clean, consistent form. There is no submit button and no mode-switching beyond choosing the base — you select where you are starting from and the answers follow immediately.",
      },
      {
        heading: "Validation that catches bad input",
        body: "One of the easiest mistakes when working with bases is entering a digit that does not belong: a '2' in a binary number, an '8' in an octal one, or a stray letter in a decimal value. A naive converter might silently produce a wrong answer, which is worse than no answer because you might trust it. In1 validates your input against the base you have selected and tells you clearly when the value is not legal for that base, rather than guessing or returning garbage. It also guards against numbers too large to convert reliably, so you are warned instead of getting a silently truncated or inaccurate result. This validation turns the converter into something you can actually rely on: when it shows you a set of results, you know the input was well-formed and the conversions are correct. Catching the error at the moment you type it, with a plain message explaining the problem, saves you from chasing a bug that started as a single mistyped digit.",
      },
      {
        heading: "Private, instant and free",
        body: "Base conversion is pure arithmetic, and there is no reason it should involve a server. In1 computes every conversion locally in your browser using the platform's own number handling, so whatever values you are working with stay entirely on your device. Nothing is uploaded, nothing is stored and there is no account or sign-up. The results appear the instant you type, with no network request, so the converter is immediate and works exactly the same offline as online — handy when you are deep in a project without a reliable connection. Each result sits next to a copy button, so moving a converted value into your code, a config file, a calculator or a document takes a single click. There are no limits and no clutter. It is a small, focused utility, but base conversion is something developers and students reach for surprisingly often, and having it give you all four bases at once, validated and instant, is exactly what that recurring need calls for.",
      },
      {
        heading: "Who uses a number base converter?",
        body: "It is a constant companion for anyone close to how computers represent numbers. Programmers convert between decimal and hexadecimal for color codes, memory addresses, bitmasks, byte values and status codes, and read binary to reason about individual bits. Embedded and low-level developers live in hex and binary and convert to decimal to sanity-check values. Students learning computer science practice converting between bases as a core skill and use the tool to check their work. Network engineers convert values while working with addresses and subnet masks. System administrators decode octal file permissions. Electronics and hardware hobbyists translate register values between bases. Anyone working with hashes, encodings or low-level data formats occasionally needs to flip a number from one base to another. For all of them, a converter that takes any base as input and shows all four outputs at once — validated, instant and private — replaces both mental arithmetic and the risk of a quietly wrong conversion with a quick, trustworthy lookup.",
      },
    ],
    howTo: [
      { name: "Choose the input base", text: "Tap binary, octal, decimal or hexadecimal to set what you're starting from." },
      { name: "Enter your number", text: "Type the value in the selected base." },
      { name: "Read all four bases", text: "The equivalent in binary, octal, decimal and hex appears instantly." },
      { name: "Copy a result", text: "Copy any of the converted values with one click." },
    ],
    faq: [
      { q: "Which bases does it support?", a: "Binary (base 2), octal (base 8), decimal (base 10) and hexadecimal (base 16)." },
      { q: "Do I have to convert one pair at a time?", a: "No. You enter a number in one base and see the equivalent in all four bases at once." },
      { q: "What happens if I enter an invalid digit?", a: "The tool validates against the chosen base and shows a clear message instead of producing a wrong answer." },
      { q: "Is there a limit on the number size?", a: "Very large numbers that can't be converted reliably are flagged, so you never get a silently inaccurate result." },
      { q: "Is anything uploaded?", a: "No. All conversion happens locally in your browser, so your values never leave your device." },
      { q: "Is it free?", a: "Yes. The number base converter is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "json-to-csv",
    category: "web",
    name: "JSON to CSV",
    shortDescription: "Convert a JSON array of objects into downloadable CSV.",
    icon: "file-spreadsheet",
    processing: "client",
    keywords: ["json to csv", "convert json to csv", "json to csv converter", "json array to csv", "export json csv"],
    metaTitle: "JSON to CSV — Convert JSON to CSV Online Free | In1",
    metaDescription:
      "Convert a JSON array of objects to CSV online for free. Handles varied keys, quotes and commas safely, with copy and download. Private — runs entirely in your browser.",
    h1: "JSON to CSV converter",
    intro:
      "Paste a JSON array of objects and get clean CSV you can open in any spreadsheet. Keys become columns, values are escaped correctly, and you can copy the result or download it as a file — all in your browser.",
    sections: [
      {
        heading: "Turn JSON data into a spreadsheet",
        body: "JSON is how data travels between programs — APIs return it, configuration files use it, and exports produce it — but it is not how most people want to read or analyze that data. For browsing, filtering, sorting and sharing, a spreadsheet is far more natural, and spreadsheets speak CSV. This converter bridges the two. You paste a JSON array of objects and it produces CSV where each object becomes a row and each key becomes a column, ready to open in Excel, Google Sheets, Numbers or any tool that imports CSV. Instead of writing a script, wrangling a one-off parser, or manually retyping values into cells, you get a clean, correctly structured table in a single step. This is exactly what you need when an API hands you JSON but your colleague wants a spreadsheet, when you want to eyeball an export, or when the next tool in your workflow only accepts tabular data. The conversion preserves your data while changing its shape into something immediately usable.",
      },
      {
        heading: "Handles messy, real-world JSON",
        body: "Real data is rarely uniform, and a converter is only useful if it copes with that. In1 scans every object in your array and builds the column list from the union of all their keys, so if some records have fields that others lack, every field still gets a column and missing values are simply left blank rather than throwing the rows out of alignment. Values that are themselves objects or arrays are serialized so they still fit in a cell instead of breaking the output. This tolerance for irregular data means you can throw a real API response or database export at it without first cleaning everything into a perfectly rectangular shape. The result is a CSV whose header row reflects all the fields present across your data and whose rows line up correctly underneath, which is precisely what a spreadsheet needs to import the file cleanly. You spend your effort analyzing the data, not massaging it into a form the converter can handle.",
      },
      {
        heading: "Correct escaping so nothing breaks",
        body: "CSV looks simple but has sharp edges, and getting the escaping wrong silently corrupts the data. A value that contains a comma would split into two cells; a value with a line break would spill into a new row; a value with a quotation mark would confuse the parser. The CSV standard handles all of this by wrapping problematic values in quotes and doubling any quotes inside them, and In1 applies those rules correctly so your output imports cleanly no matter what the values contain. Names with commas, descriptions with line breaks, text with embedded quotes — all of it survives the round trip intact. This careful escaping is the difference between a CSV that opens perfectly in a spreadsheet and one that looks fine at a glance but has rows misaligned by a stray comma three hundred entries down. Because the tool gets the escaping right every time, you can trust that the table you download matches the data you put in.",
      },
      {
        heading: "Copy or download, privately",
        body: "Once your CSV is ready, you can use it whichever way suits you: copy it to the clipboard to paste straight into a sheet or another tool, or download it as a proper .csv file ready to open or share. Both options are a single click. And crucially, the entire conversion happens locally in your browser. The JSON you paste — which might be an API response with personal data, an internal export, or records you are not free to share — is never uploaded to a server. Nothing is stored and there is no account. The conversion is instant because there is no network round trip, and it works the same offline as online. This local-only design matters for data work, where pasting a customer export or a confidential dataset into an unknown online converter would be a real risk. With In1 you get the convenience of an instant JSON-to-CSV tool with the assurance that your data stays on your own machine from start to finish.",
      },
      {
        heading: "Who converts JSON to CSV?",
        body: "The need spans technical and non-technical work alike. Developers convert API responses and database exports into CSV to inspect them, share them with teammates, or feed them into tools that expect tabular input. Data analysts turn JSON datasets into spreadsheets where they can sort, filter, pivot and chart. Marketers and operations staff take JSON exports from various platforms and convert them so they can work in the spreadsheet they are comfortable with. QA testers turn structured test output into CSV for review. Researchers convert collected JSON data into a form their analysis tools accept. Anyone who has received data as JSON but needs it as a table — which happens constantly once you start moving data between systems — benefits from a converter that handles irregular keys, escapes values correctly, and offers both copy and download, all without uploading the data. It removes the small but recurring barrier between the format data arrives in and the format people actually want to use it in.",
      },
    ],
    howTo: [
      { name: "Paste your JSON", text: "Drop in a JSON array of objects, like an API response or export." },
      { name: "Let it convert", text: "Keys become columns and each object becomes a row, instantly." },
      { name: "Check the CSV", text: "Review the generated CSV, with values escaped correctly." },
      { name: "Copy or download", text: "Copy the CSV to your clipboard or download it as a .csv file." },
    ],
    faq: [
      { q: "What JSON shape does it expect?", a: "An array of objects, like [{\"name\":\"Ada\"},{\"name\":\"Linus\"}]. A single object works too and becomes one row." },
      { q: "What if my objects have different keys?", a: "The converter builds columns from the union of all keys, leaving cells blank where a record lacks a field." },
      { q: "Does it escape commas and quotes correctly?", a: "Yes. Values containing commas, quotes or line breaks are quoted and escaped per the CSV standard so nothing breaks." },
      { q: "Can I download the result?", a: "Yes. You can copy the CSV or download it as a .csv file ready to open in any spreadsheet." },
      { q: "Is my data uploaded anywhere?", a: "No. The conversion runs locally in your browser, so your JSON never leaves your device." },
      { q: "Is it free?", a: "Yes. The JSON to CSV converter is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "csv-to-json",
    category: "web",
    name: "CSV to JSON",
    shortDescription: "Convert CSV into a clean JSON array of objects.",
    icon: "file-json",
    processing: "client",
    keywords: ["csv to json", "convert csv to json", "csv to json converter", "csv parser", "csv to array"],
    metaTitle: "CSV to JSON — Convert CSV to JSON Online Free | In1",
    metaDescription:
      "Convert CSV to a JSON array of objects online for free. Uses the header row for keys, handles quoted fields and commas safely, with copy and download. Private, in your browser.",
    h1: "CSV to JSON converter",
    intro:
      "Paste CSV and get a clean JSON array of objects, using the header row as keys. Quoted fields, embedded commas and line breaks are parsed correctly, and you can copy or download the result — all in your browser.",
    sections: [
      {
        heading: "From spreadsheet rows to structured JSON",
        body: "CSV is how tabular data leaves a spreadsheet, but it is not a convenient format for programs to work with directly. Code wants structured objects with named fields, not rows of comma-separated text that have to be split and indexed by position. This converter does that transformation for you. You paste CSV and it produces a JSON array where each row becomes an object, with the values keyed by the column names from the header row. The result is exactly the shape most code, APIs and configuration expect, ready to drop into a project, send to an endpoint, or load into a tool that consumes JSON. Instead of writing a throwaway parser every time someone hands you a CSV, or wrestling with splitting strings and lining up columns, you get clean, correctly keyed JSON in a single step. It is the natural counterpart to exporting data as CSV: the bridge that takes spreadsheet-friendly data back into a developer-friendly form.",
      },
      {
        heading: "A real CSV parser, not a naive split",
        body: "Converting CSV correctly is harder than it looks, because CSV allows values that contain the very characters used to separate them. A field wrapped in quotes can include commas, line breaks and even quotation marks of its own, as long as those inner quotes are doubled. A naive converter that simply splits on commas falls apart the moment a value contains one, silently producing extra columns and misaligned data. In1 uses a proper parser that understands quoted fields, so a description with a comma, an address spanning multiple lines, or text with embedded quotes is read as a single value exactly as intended. This is what separates a converter you can trust on real exports from one that only works on the simplest, cleanest input. Because the parser follows the conventions real spreadsheets use when they write CSV, the JSON it produces faithfully reflects the original table, with every value landing in the right field no matter what characters it contains.",
      },
      {
        heading: "Headers become keys automatically",
        body: "The first row of a CSV almost always holds the column names, and those names are what make the data meaningful. In1 uses that header row to key every object it produces, so instead of anonymous arrays indexed by number you get objects whose fields are named the way the spreadsheet labeled them. A row under headers of name, email and role becomes an object with name, email and role properties, which is immediately readable and ready to use in code without any further mapping. This automatic keying is what turns a flat table into genuinely structured data: you can reference fields by their names, the JSON is self-documenting, and anyone reading it understands what each value represents. It also means the converter adapts to whatever columns your CSV has, however many there are and whatever they are called, without any configuration. You provide a CSV with a header row, and you get back JSON objects that mirror its structure exactly.",
      },
      {
        heading: "Copy or download, privately",
        body: "When the JSON is ready you can use it however you like: copy it to the clipboard to paste into your code or another tool, or download it as a .json file to save or share. Both take a single click, and the JSON is pretty-printed so it is easy to read and review before you use it. Just as importantly, the whole conversion runs locally in your browser. The CSV you paste — which might be a customer export, internal records, survey responses or any other data you are not free to send to a third party — is never uploaded. Nothing is stored and there is no account. The conversion is instant because there is no server involved, and it works the same offline as online. This local-only approach is essential for data work, where dropping a sensitive spreadsheet export into an unknown online converter would be a genuine risk. In1 gives you the convenience of an instant CSV-to-JSON tool while keeping your data firmly on your own device.",
      },
      {
        heading: "Who converts CSV to JSON?",
        body: "The need turns up wherever spreadsheet data meets code. Developers convert CSV exports into JSON to seed databases, drive tests, configure applications or send to APIs that expect structured input. Data engineers transform tabular files into JSON as a step in a pipeline. Analysts move data out of spreadsheets and into tools and scripts that work with JSON. Front-end developers turn a CSV of content into JSON to render in an app. QA testers convert test data maintained in a spreadsheet into the JSON their fixtures need. Researchers and students translate collected CSV data into JSON for processing. Even non-developers sometimes need to hand structured JSON to a developer or a system, starting from a spreadsheet they already have. For all of them, a converter that parses real CSV correctly, keys objects by the header row, and offers both copy and download without uploading the data removes the recurring friction of getting tabular data into the structured form that software actually wants.",
      },
    ],
    howTo: [
      { name: "Paste your CSV", text: "Drop in CSV text with the column names in the first row." },
      { name: "Let it parse", text: "Each row becomes an object keyed by the header columns, instantly." },
      { name: "Review the JSON", text: "Check the pretty-printed JSON array, with quoted fields parsed correctly." },
      { name: "Copy or download", text: "Copy the JSON or download it as a .json file." },
    ],
    faq: [
      { q: "Does the first row become the keys?", a: "Yes. The header row is used to name the fields of every object in the resulting JSON array." },
      { q: "Does it handle quoted fields with commas?", a: "Yes. A proper parser handles quoted values containing commas, line breaks and escaped quotes correctly." },
      { q: "What format is the output?", a: "A pretty-printed JSON array of objects, ready to copy or download as a .json file." },
      { q: "Is my CSV uploaded anywhere?", a: "No. Parsing runs locally in your browser, so your data never leaves your device." },
      { q: "Can I download the JSON?", a: "Yes. You can copy the JSON to your clipboard or download it as a file." },
      { q: "Is it free?", a: "Yes. The CSV to JSON converter is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "json-to-yaml",
    category: "web",
    name: "JSON to YAML",
    shortDescription: "Convert between JSON and YAML in both directions.",
    icon: "braces",
    processing: "client",
    keywords: ["json to yaml", "yaml to json", "convert json yaml", "json yaml converter", "yaml converter"],
    metaTitle: "JSON to YAML — Convert JSON and YAML Online Free | In1",
    metaDescription:
      "Convert JSON to YAML and YAML to JSON online for free. Clean two-space indentation, error messages for invalid input, copy in one click. Private, runs in your browser.",
    h1: "JSON to YAML converter",
    intro:
      "Paste JSON to get clean YAML, or paste YAML to get formatted JSON. The conversion runs both ways, validates your input and reports errors clearly — all instantly in your browser.",
    sections: [
      {
        heading: "Two formats for the same data",
        body: "JSON and YAML are two of the most common ways to represent structured data, and they describe exactly the same kinds of things — objects, lists, strings, numbers and booleans — just with different syntax. JSON, with its braces, brackets and quotes, is compact and universal, the lingua franca of APIs and JavaScript. YAML, with its indentation and minimal punctuation, is easier for humans to read and write, which is why it dominates configuration files for tools like Docker, Kubernetes, CI pipelines and countless others. Because both formats are everywhere, you constantly need to move data between them: turning an API's JSON response into readable YAML, or converting a YAML config into the JSON a program expects. This converter does that in either direction. You paste one format and get the other, faithfully preserving the structure and values, so you never have to translate the nesting and syntax by hand — a process that is tedious and remarkably easy to get wrong on anything but the smallest snippet.",
      },
      {
        heading: "Convert in both directions",
        body: "A one-way converter only solves half the problem, so In1 handles both directions with a single toggle. Switch it to JSON-to-YAML when you want to take compact, punctuation-heavy JSON and turn it into clean, indented YAML that is pleasant to read and edit — ideal when you are writing or reviewing configuration. Switch it to YAML-to-JSON when you need to feed YAML-authored data into something that only speaks JSON, such as an API, a JavaScript program or a tool that does not parse YAML. The output updates the moment you type or flip the direction, so you can paste into either side and immediately get the other. This bidirectional design means the same tool serves both the person who prefers writing YAML but has to deliver JSON, and the person who receives JSON but wants to read it as YAML. You are never stuck with the wrong format or forced to find a second tool to go back the other way.",
      },
      {
        heading: "Clean output and clear errors",
        body: "A conversion is only useful if the result is correct and the formatting is sensible, so In1 produces clean output you can use directly. YAML is generated with consistent two-space indentation, the widely accepted convention, and without arbitrary line wrapping that would mangle long string values. JSON is pretty-printed with proper indentation so it is easy to read and review rather than crammed onto one line. Just as important is what happens when the input is wrong. Both JSON and YAML have strict syntax, and a misplaced comma, a bad indent or an unclosed quote makes the input unparseable. Instead of failing silently or producing garbage, the converter validates your input and shows a clear error message describing what went wrong, so you can find and fix the problem quickly. That feedback turns the tool into a lightweight validator as well as a converter: if it produces output, your input was well-formed, and if it does not, it tells you why.",
      },
      {
        heading: "Private by design — converted in your browser",
        body: "Configuration and data files often hold sensitive details: hostnames, settings, structure that reveals how an internal system is built, sometimes even credentials that should never have been there. There is no reason to send any of that to a server just to reshape its syntax. In1 performs the entire JSON-and-YAML conversion locally in your browser using a well-established parsing library bundled into the page. Nothing is uploaded, nothing is stored and there is no account to create. The conversion happens instantly because there is no network round trip, and it works exactly the same offline as online, which is handy when you are deep in a project on a locked-down network. You can paste a large config and get the converted form immediately, then copy it with a single click. This local-only approach is the responsible default for developer tools that handle configuration, because the data you are converting is frequently something you would never paste into an unknown online service.",
      },
      {
        heading: "Who converts between JSON and YAML?",
        body: "The need is everywhere in modern software work. DevOps and platform engineers move constantly between the two formats while writing and debugging configuration for containers, orchestration, infrastructure-as-code and CI/CD pipelines, most of which use YAML, while the data and APIs around them use JSON. Back-end developers convert API responses to YAML to read them more easily, or YAML fixtures to JSON for their code. Front-end developers turn YAML content files into the JSON their apps consume. Site reliability engineers reshape configuration between formats while troubleshooting. Technical writers convert example data so documentation can show both forms. QA engineers translate test data between the format a tool emits and the format another expects. Even people new to YAML paste in some JSON to see the equivalent and learn the syntax by comparison. For all of them, a converter that goes both ways, formats the output cleanly, reports errors plainly and keeps the data on the device is exactly the quick, trustworthy tool the job calls for.",
      },
    ],
    howTo: [
      { name: "Choose a direction", text: "Pick JSON to YAML or YAML to JSON." },
      { name: "Paste your data", text: "Drop in the JSON or YAML you want to convert." },
      { name: "Read the result", text: "The converted format appears instantly, cleanly formatted, with errors flagged if the input is invalid." },
      { name: "Copy it out", text: "Copy the converted output with one click." },
    ],
    faq: [
      { q: "Does it convert both ways?", a: "Yes. You can convert JSON to YAML and YAML to JSON with a single toggle." },
      { q: "What indentation does the YAML use?", a: "Two-space indentation, the widely accepted convention, with no arbitrary line wrapping of long values." },
      { q: "What happens if my input is invalid?", a: "The converter validates the input and shows a clear error message instead of producing garbled output." },
      { q: "Is my data uploaded anywhere?", a: "No. The conversion runs locally in your browser, so your data never leaves your device." },
      { q: "Is the JSON output formatted?", a: "Yes. JSON is pretty-printed with proper indentation so it's easy to read and review." },
      { q: "Is it free?", a: "Yes. The JSON to YAML converter is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "cron-expression-parser",
    category: "web",
    name: "Cron Expression Parser",
    shortDescription: "Translate a cron expression into plain English.",
    icon: "clock",
    processing: "client",
    keywords: ["cron expression parser", "cron to english", "cron parser", "crontab generator", "explain cron"],
    metaTitle: "Cron Expression Parser — Cron to English Online Free | In1",
    metaDescription:
      "Translate a cron expression into plain English online for free. Understand exactly when a schedule runs, with examples and error messages. Private, runs in your browser.",
    h1: "Cron expression parser",
    intro:
      "Paste a cron expression and instantly read, in plain English, exactly when it runs. Tap an example to see the format, and get a clear error if the expression is invalid — all in your browser.",
    sections: [
      {
        heading: "Cron, finally in plain English",
        body: "Cron expressions are how scheduled tasks are defined across servers, build systems and countless tools, but their compact syntax is famously hard to read. A line like '0 9 * * 1-5' encodes a schedule in five terse fields, and unless you work with them daily, decoding what it actually means is slow and error-prone. This parser removes the guesswork by translating any cron expression into a clear, human-readable sentence. Paste the expression and it tells you, in plain English, exactly when the job runs — for that example, 'at 09:00, Monday through Friday'. Instead of mentally parsing each field and reconstructing the schedule in your head, you read it like a sentence. This is invaluable whether you are writing a new schedule and want to confirm it does what you intend, or reading someone else's cron line and trying to understand what it triggers. The translation turns an opaque string into something anyone can verify at a glance.",
      },
      {
        heading: "Understand each field with confidence",
        body: "A standard cron expression has five fields, in order: minute, hour, day of month, month, and day of week. Each can hold a specific value, a list, a range, a step like 'every fifteen', or a wildcard meaning 'every'. The combinations are powerful but subtle, and the interactions between the day-of-month and day-of-week fields in particular trip up even experienced engineers. By turning the whole expression into a sentence, the parser makes the combined meaning of all five fields obvious, so you do not have to reason about each one in isolation and then try to merge them correctly in your head. This is especially helpful for the edge cases where a small change has a surprising effect — adding a step value, narrowing a range, or switching a wildcard to a specific value can shift a schedule in ways that are not obvious from the raw text but are immediately clear once the expression is spelled out in words you can read and sanity-check.",
      },
      {
        heading: "Examples to learn the format",
        body: "If you do not write cron expressions often, remembering the field order and syntax is half the battle. To make the tool approachable, In1 includes a set of common examples you can tap to load instantly — a weekday morning schedule, an every-fifteen-minutes interval, a monthly run, a weekly off-hours job. Each one shows both the expression and a short note about what it does, so you can see the pattern and adapt it to your own needs rather than starting from a blank field and a half-remembered format. Loading an example also immediately shows its plain-English translation, which reinforces how each part of the syntax maps to a real schedule. This makes the parser a learning aid as much as a decoder: by tapping through a few examples and reading both the raw expression and its meaning side by side, you build an intuition for how cron works that sticks far better than reading a syntax table.",
      },
      {
        heading: "Clear errors for invalid expressions",
        body: "Cron syntax is unforgiving, and a small mistake — a field out of range, a stray character, the wrong number of fields — produces a schedule that does not mean what you think, or does not parse at all. The dangerous case is the one that looks plausible but is wrong, because a misread schedule might run a job at the wrong time or not at all, and you may not notice until something breaks. In1 validates the expression as you type and, when it cannot make sense of it, shows a clear error message instead of guessing or staying silent. That immediate feedback lets you catch a malformed expression the moment you write it, while you still have the context to fix it, rather than discovering the problem later when a scheduled task misbehaves. Treating a failed parse as useful information — a signal that the expression needs attention — is part of what makes the tool trustworthy: when it does give you a translation, you know the expression was well-formed.",
      },
      {
        heading: "Who uses a cron parser?",
        body: "Cron is a backbone of automation, so the audience is broad. Back-end and DevOps engineers write and review cron expressions for scheduled jobs, cron tables, container orchestration and CI pipelines, and use a parser to confirm a schedule before deploying it. Site reliability engineers decode existing cron lines while investigating why a job ran — or did not — at a particular time. System administrators manage crontabs across servers and check that each entry means what they intend. Developers setting up scheduled functions on serverless platforms verify their expressions. Data engineers schedule recurring pipelines and want to be sure of the timing. QA and support staff occasionally need to understand a schedule reported in a ticket. Even people new to cron use the parser to learn the syntax and avoid the classic mistakes. For all of them, instantly turning a cryptic five-field string into a sentence they can read — with examples to learn from and clear errors when something is wrong — makes working with schedules far less risky.",
      },
    ],
    howTo: [
      { name: "Enter an expression", text: "Type or paste a five-field cron expression." },
      { name: "Or tap an example", text: "Load a common example to see the format and its meaning." },
      { name: "Read the schedule", text: "The parser shows in plain English exactly when the job runs." },
      { name: "Fix any errors", text: "If the expression is invalid, a clear message tells you what's wrong." },
    ],
    faq: [
      { q: "What cron format does it use?", a: "The standard five-field format: minute, hour, day of month, month and day of week." },
      { q: "Does it tell me the next run time?", a: "It translates the expression into a plain-English description of when it runs; it focuses on explaining the schedule rather than computing future dates." },
      { q: "What if my expression is invalid?", a: "The parser validates the input and shows a clear error message instead of guessing." },
      { q: "Are there examples to start from?", a: "Yes. You can tap common examples to load them and see both the expression and its meaning." },
      { q: "Is anything uploaded?", a: "No. Parsing runs locally in your browser, so your expressions never leave your device." },
      { q: "Is it free?", a: "Yes. The cron expression parser is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "barcode-generator",
    category: "web",
    name: "Barcode Generator",
    shortDescription: "Create barcodes in Code 128, EAN, UPC and more, as PNG.",
    icon: "barcode",
    processing: "client",
    keywords: ["barcode generator", "create barcode", "code 128 generator", "ean barcode", "upc barcode generator"],
    metaTitle: "Barcode Generator — Create Barcodes Online Free | In1",
    metaDescription:
      "Generate barcodes online for free in Code 128, Code 39, EAN-13, EAN-8, UPC, ITF-14 and Codabar. Download as PNG. Validated input, private — runs in your browser.",
    h1: "Barcode generator",
    intro:
      "Type a value, pick a barcode format and get a clean, scannable barcode you can download as a PNG. Multiple symbologies are supported, input is validated, and everything is generated in your browser.",
    sections: [
      {
        heading: "Generate scannable barcodes in seconds",
        body: "Barcodes turn a string of characters into a pattern that a scanner can read instantly and reliably, and they remain the backbone of retail, inventory, logistics and asset tracking. Creating one used to mean specialized software or a paid service, but it is really just a matter of encoding your value into the right pattern of bars. This generator does exactly that in your browser: you type a value, choose a format, and a crisp barcode appears, ready to download. There is no account to create and no software to install. Whether you need a single label for a product, a code for an asset tag, or a batch of barcodes for an inventory system, you can produce them on demand. The output is a clean image at a resolution suitable for printing or embedding, with the human-readable value shown beneath the bars, so anyone can read the code even without a scanner. It is the fast, free way to get a usable barcode without the overhead of dedicated tools.",
      },
      {
        heading: "Choose the right symbology",
        body: "There is no single 'barcode' — there are many symbologies, each suited to different purposes, and using the right one matters because scanners and systems expect specific formats. In1 supports the most widely used ones. Code 128 is the flexible workhorse that encodes any text and numbers, ideal for shipping, packaging and internal labels. Code 39 is common in industrial and ID applications. EAN-13 and EAN-8 are the retail product codes used on consumer goods worldwide, while UPC-A is the equivalent standard in North America. ITF-14 is used on shipping cartons, and Codabar appears in libraries, blood banks and logistics. Being able to pick the symbology means you can generate exactly the kind of barcode your scanner, retailer or system requires, rather than being limited to one format that may not be accepted. Switching formats updates the barcode immediately, so you can see how the same value looks across symbologies and choose the one that fits your use case.",
      },
      {
        heading: "Validation so your barcode actually scans",
        body: "Different barcode formats have strict rules about what they can encode — EAN-13 needs the right number of digits, UPC has its own length requirement, and the numeric-only formats reject letters. A barcode that violates these rules either will not generate or, worse, produces something that looks like a barcode but fails to scan, which is the kind of error you only discover at the worst possible moment. In1 validates your input against the chosen format and tells you clearly when the value is not valid for it, explaining that the length or characters do not fit. This prevents you from printing a sheet of labels only to find they are unreadable. It also helps you learn each format's requirements, since the immediate feedback shows you exactly what a given symbology will and will not accept. When the tool does render a barcode, you can trust that it is well-formed for that format and stands a proper chance of scanning correctly on real hardware.",
      },
      {
        heading: "Private by design — generated in your browser",
        body: "The values behind barcodes can be meaningful business data: product identifiers, internal SKUs, asset tags, tracking numbers and codes that map to your systems. There is no reason to send that information to a third-party server to turn it into bars. In1 generates every barcode locally in your browser, rendering the pattern onto a canvas on your own device. Nothing is uploaded, nothing is stored and there is no account. Generation is instant because there is no network round trip, and it works the same offline as online, so you can produce labels even on a machine with no internet access. The result downloads as a standard PNG you can print, embed in a document, or drop into a label template. This local-only approach keeps your identifiers and codes private, which matters when the values encode something about your inventory, your products or your operations that you would not want exposed by pasting it into an unknown online tool.",
      },
      {
        heading: "Who uses a barcode generator?",
        body: "The need spans businesses large and small. Small retailers and online sellers generate product barcodes for labels and inventory. Warehouse and logistics teams create codes for cartons, shelves and shipments. Office and IT staff produce asset tags to track equipment. Event organizers make codes for tickets and passes. Makers and small manufacturers label their products for sale. Librarians and archivists generate Codabar codes for cataloguing. Developers building point-of-sale, inventory or tracking systems create test barcodes while building and debugging. Anyone setting up a system that relies on scanning needs a way to produce the codes themselves, and a generator that supports the common symbologies, validates the input, and exports a clean printable PNG — all without an account or upload — covers that need directly. Because it runs in the browser and is free, it suits both a quick one-off label and the repeated generation of codes for an ongoing operation, without committing to dedicated barcode software.",
      },
    ],
    howTo: [
      { name: "Pick a format", text: "Choose the barcode symbology you need, such as Code 128 or EAN-13." },
      { name: "Enter your value", text: "Type the text or number to encode, following the format's rules." },
      { name: "Check it's valid", text: "The barcode renders instantly, and invalid input is flagged with a clear message." },
      { name: "Download the PNG", text: "Download the barcode as a PNG ready to print or embed." },
    ],
    faq: [
      { q: "Which barcode formats are supported?", a: "Code 128, Code 39, EAN-13, EAN-8, UPC-A, ITF-14 and Codabar." },
      { q: "Why won't my value generate?", a: "Each format has rules about length and characters. If the value doesn't fit the chosen format, the tool flags it so you can correct it." },
      { q: "What format is the download?", a: "A PNG image, suitable for printing on labels or embedding in documents." },
      { q: "Is the value uploaded anywhere?", a: "No. The barcode is generated locally in your browser, so your value never leaves your device." },
      { q: "Does the barcode show the number?", a: "Yes. The human-readable value is shown beneath the bars on supported formats." },
      { q: "Is it free?", a: "Yes. The barcode generator is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "wifi-qr-code-generator",
    category: "web",
    name: "WiFi QR Code Generator",
    shortDescription: "Make a QR code that connects to your WiFi when scanned.",
    icon: "wifi",
    processing: "client",
    keywords: ["wifi qr code", "wifi qr code generator", "qr code for wifi", "wifi password qr", "guest wifi qr"],
    metaTitle: "WiFi QR Code Generator — Connect by Scanning Free | In1",
    metaDescription:
      "Generate a WiFi QR code online for free. Guests scan to connect instantly — no typing the password. Supports WPA, WEP and open networks. Private, runs in your browser.",
    h1: "WiFi QR code generator",
    intro:
      "Create a QR code that connects phones to your WiFi automatically when scanned — no spelling out the password. Enter your network details, choose the security type, and download a PNG to print or share.",
    sections: [
      {
        heading: "Let guests connect by scanning, not typing",
        body: "Sharing WiFi the usual way is a small but constant annoyance: you read out a long, cryptic password, your guest mistypes it, and you both try again. A WiFi QR code solves this completely. When someone points their phone's camera at the code, the device reads the network name and password and offers to connect with a single tap — no typing, no spelling out characters, no mistakes. This is the same standard built into modern phones, so it just works without any special app. You generate the code once and anyone can use it. It is perfect for a home where visitors come and go, and it transforms the experience from a fiddly exchange into an instant, effortless connection. Because the QR code encodes the credentials directly, even a complicated, secure password — exactly the kind you should be using — becomes trivial to share, which means you never have to weaken your WiFi security just to make it easier for guests to get online.",
      },
      {
        heading: "Perfect for cafes, offices and guest networks",
        body: "WiFi QR codes are especially valuable anywhere people regularly need to get online. Cafes and restaurants print the code on table cards or receipts so customers connect in seconds without bothering staff. Offices and co-working spaces put it in meeting rooms and reception areas for visitors. Holiday rentals and hotels include it in the welcome pack so every guest can join without a support call. Shops, clinics and waiting rooms offer it to customers. Even at home, a printed code by the door or on the fridge saves you from reciting the password to every visitor. Anywhere a guest network exists, a QR code is the cleanest way to share it: it works for everyone, it does not require handing out the raw password verbally, and it can be reprinted or replaced whenever the password changes. A single small printout removes a recurring point of friction for both the people offering the WiFi and the people trying to use it.",
      },
      {
        heading: "Supports WPA, WEP and open networks",
        body: "For the QR code to work, it has to describe your network's security correctly, so In1 lets you choose the encryption type. WPA and WPA2 cover virtually all modern secured networks and are the default. WEP is available for older equipment that still uses it. And for open networks with no password — common on genuinely public guest WiFi — you can select the no-password option, and the code is built accordingly without a password field. You can also mark the network as hidden if it does not broadcast its name, so the scanning device knows to look for it. Getting these details right matters, because a QR code that specifies the wrong security type may fail to connect even when the name and password are correct. By giving you the options explicitly and building the standard WiFi payload behind the scenes, the generator ensures the code matches how your network is actually configured, which is what makes it reliably connect across the wide range of phones people will scan it with.",
      },
      {
        heading: "Private by design — your password stays with you",
        body: "A WiFi QR code contains your network password in plain form, so where that password is handled matters enormously. In1 generates the code entirely in your browser. The network name and password you enter are used to build the QR code right on your own device and are never uploaded, transmitted or stored anywhere. There is no account, no logging and nothing left behind when you close the tab. This is the only safe way to build such a tool: a WiFi generator that sent your password to a server would be handing over the keys to your network, which is exactly what you must avoid. Because everything is local, generation is also instant and works offline, and the resulting PNG is yours alone to print or share as you see fit. You get the convenience of an instant, scannable code with the assurance that your actual WiFi password never travelled across the internet to a stranger's machine just to be turned into an image.",
      },
      {
        heading: "Download, print and share",
        body: "Once your code is ready, you download it as a standard PNG image, which you can use however suits your space. Print it on a card for the coffee table, add it to a framed sign for reception, include it in a digital welcome document, drop it into a poster, or simply stick it on the fridge. Because it is an ordinary image, it fits into any design or print workflow without special handling. If your password changes, you generate a fresh code in seconds and reprint it — far easier than re-explaining a new password to everyone. The code works with the built-in camera on modern phones, so guests need nothing beyond the device already in their pocket. This combination of an instant, private generator and a plain, printable output is what makes WiFi QR codes so practical: a one-time bit of setup that quietly removes the password hassle for everyone who visits, for as long as the code is up.",
      },
    ],
    howTo: [
      { name: "Enter your network name", text: "Type the exact SSID of your WiFi network." },
      { name: "Add the password and security", text: "Enter the password and choose WPA, WEP or no password; mark it hidden if needed." },
      { name: "Generate the code", text: "A scannable WiFi QR code appears instantly." },
      { name: "Download and print", text: "Download the PNG to print or share so guests can scan to connect." },
    ],
    faq: [
      { q: "How does a WiFi QR code work?", a: "It encodes the network name, password and security type. Modern phones read it with the camera and offer to connect with one tap." },
      { q: "Do guests need a special app?", a: "No. The built-in camera on modern iPhones and Android phones recognizes WiFi QR codes natively." },
      { q: "Which security types are supported?", a: "WPA/WPA2, WEP and open (no password) networks, with an option to mark the network hidden." },
      { q: "Is my WiFi password uploaded anywhere?", a: "No. The code is generated entirely in your browser, so your password never leaves your device." },
      { q: "Can I print the QR code?", a: "Yes. It downloads as a PNG you can print on a card, sign or poster, or share digitally." },
      { q: "Is it free?", a: "Yes. The WiFi QR code generator is completely free, with no account and no limits." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "vcard-qr-code",
    category: "web",
    name: "vCard QR Code Generator",
    shortDescription: "Create a QR code that saves your contact details when scanned.",
    icon: "contact",
    processing: "client",
    keywords: ["vcard qr code", "contact qr code", "qr code business card", "vcard generator", "qr code contact details"],
    metaTitle: "vCard QR Code Generator — Contact QR Code Free | In1",
    metaDescription:
      "Generate a vCard QR code online for free. Scanning saves your name, phone, email and more straight to contacts. Great for business cards. Private, runs in your browser.",
    h1: "vCard QR code generator",
    intro:
      "Create a QR code that adds your contact details to someone's phone when they scan it. Fill in your name, phone, email and more, and download a PNG for your business card, email signature or badge.",
    sections: [
      {
        heading: "Share your contact details with one scan",
        body: "Exchanging contact details is still surprisingly clumsy: you spell out an email address, dictate a phone number, or hope a paper business card does not get lost. A vCard QR code makes it effortless. It encodes your details in the standard vCard format that phones understand, so when someone scans it, their device offers to save a new contact with your name, number, email and everything else already filled in — no typing, no transcription errors, no missed digits. You create the code once and it works for everyone you meet. This is the modern, frictionless way to hand over your details, and because it uses the universal vCard standard rather than a proprietary system, it works across iPhones and Android phones alike with the built-in camera. Whether you are networking at an event, meeting a new client, or simply want people to be able to save your details reliably, a single scan replaces a whole awkward exchange and ensures your information lands in their contacts exactly as you intended.",
      },
      {
        heading: "Everything that belongs on a business card",
        body: "A good contact entry is more than a name and number, so the generator lets you include the full set of details that make up a professional identity. Add your first and last name, your mobile number, your email address, your organization, your job title and your website. Each field you fill in becomes part of the vCard, and the ones you leave blank are simply omitted, so the saved contact contains exactly what you choose to share and nothing extra. This means the same tool works for a complete professional profile and for a minimal name-and-number card, depending on what you want to give out. Because the details are encoded directly into the QR code, the recipient gets a properly structured contact — with the phone in the phone field and the email in the email field — rather than a blob of text they have to sort out themselves. It is the digital equivalent of a complete, correctly formatted business card that saves itself.",
      },
      {
        heading: "Put it anywhere people will see it",
        body: "Once generated, the QR code is a plain PNG image, which means you can place it wherever it is useful. Print it on your physical business card so a scan saves your details instantly alongside the printed version. Add it to your email signature so every message gives recipients a one-tap way to save your contact. Put it on a conference badge, a name tag, a slide at the end of a talk, a poster, or a storefront. Include it in a digital resume or a personal website. Because it is an ordinary image, it drops into any design or print workflow without special tools. And if your details change — a new number, a new role, a new company — you generate a fresh code in seconds and update wherever it appears. This flexibility is what makes a vCard QR code so practical: a single small graphic that turns any surface, physical or digital, into a way for people to capture your contact information correctly and instantly.",
      },
      {
        heading: "Private by design — your details stay on your device",
        body: "Your contact information is personal, and how a generator handles it matters. In1 builds the vCard QR code entirely in your browser. The name, number, email and other details you enter are assembled into the QR code on your own device and are never uploaded, transmitted or stored on any server. There is no account, no tracking and nothing retained after you close the tab. This local-only approach means you are not registering your personal details with a third-party service or trusting them to keep your information safe — the code is yours, generated privately, and the only people who ever receive your details are the ones you choose to show the code to. Because everything runs locally, generation is instant and works offline too. You get the convenience of a polished, scannable contact card with the assurance that creating it did not involve handing your personal information to anyone, which is exactly the standard a tool that handles your identity should meet.",
      },
      {
        heading: "Who uses a vCard QR code?",
        body: "It has become a staple of modern networking and professional presence. Salespeople, founders and freelancers add it to business cards and email signatures so prospects and contacts can save their details in a tap. Conference and event attendees wear it on badges to make exchanging contacts painless. Speakers put it on a closing slide so the audience can connect. Real estate agents, consultants and tradespeople include it on signage and marketing material. Job seekers add it to a resume or portfolio. Small businesses place it at the point of sale or on storefronts so customers can save their contact and find them again. Anyone who regularly hands out their details — and wants them saved accurately rather than mistyped — benefits from a code that encodes a full, standard contact and works with any modern phone's camera. Because the generator is free, private and produces a printable image, it fits a printed card, a digital signature and everything in between, without an account or any upload of personal data.",
      },
    ],
    howTo: [
      { name: "Fill in your details", text: "Enter your name, phone, email and any other contact fields you want to share." },
      { name: "Watch the code build", text: "The vCard QR code updates instantly as you type." },
      { name: "Download the PNG", text: "Download the image once your details are complete." },
      { name: "Add it anywhere", text: "Put it on a business card, email signature, badge or website." },
    ],
    faq: [
      { q: "What happens when someone scans it?", a: "Their phone reads the vCard and offers to save a new contact with your name, number, email and other details pre-filled." },
      { q: "Which details can I include?", a: "Name, phone, email, organization, job title and website. Blank fields are simply left out of the contact." },
      { q: "Do recipients need an app?", a: "No. The built-in camera on modern iPhones and Android phones recognizes vCard QR codes natively." },
      { q: "Are my details uploaded anywhere?", a: "No. The code is generated entirely in your browser, so your contact details never leave your device." },
      { q: "Can I print it on a business card?", a: "Yes. It downloads as a PNG you can print on cards, badges and signage or add to a digital signature." },
      { q: "Is it free?", a: "Yes. The vCard QR code generator is completely free, with no account and no limits." },
    ],
  },
];

// --- Helpers -----------------------------------------------------------------

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getCategory(slug: ToolCategory): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Categories that currently have at least one tool, in registry order. */
export function getActiveCategories(): CategoryMeta[] {
  return categories.filter((c) => tools.some((t) => t.category === c.slug));
}
