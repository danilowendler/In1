# HANDOFF — in1-astrosience

Passagem de bastão para o CTO. Resume o que foi feito nesta rodada (segurança +
design), o estado do repositório e o que falta configurar antes de produção.
Para o contexto de arquitetura do produto, ler também o `CLAUDE.md` e o `README.md`.

> **Origem deste repo:** `in1-astrosience` começou como uma cópia do In1 para testar
> mudanças de design isoladamente. As mudanças ficaram boas o suficiente para subir,
> então o projeto inteiro (segurança + design) foi promovido para a `main` de
> `github.com/vmismael/in1testing`.

---

## 1. O que é o produto (resumo de 30s)

In1 é um SaaS gratuito de ferramentas utilitárias (PDF, imagem, vídeo/áudio, texto,
web, calculadoras), monetizado por **AdSense + captura de lead**, com **SEO
programático** como motor de crescimento. ~83 ferramentas no catálogo. Quase tudo roda
**100% client-side** (sem custo de servidor, escala infinita, privacidade "No upload").
Só usam backend: URL Shortener + leads (Supabase) e o AI Text Rewriter (Vercel AI Gateway).

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4 ·
Base UI (não Radix) · Supabase · Vercel AI Gateway. Deploy: Vercel.

**O motor:** tudo é config-driven a partir de `lib/tools/registry.ts`. Para adicionar
uma ferramenta, ver a seção "how to add a tool" no `CLAUDE.md` (1 objeto no registry +
1 processor + wire no switch + ícone). Páginas, metadata, sitemap, robots, JSON-LD e
"related tools" são gerados automaticamente.

---

## 2. O que foi feito nesta rodada

### 2A. Endurecimento de segurança (4 commits)

| Área | Onde | O que faz |
|---|---|---|
| HTTP headers + CSP | `next.config.ts` | Security headers + **CSP em Report-Only** (não bloqueia ainda — só reporta). CSP entra em enforce depois de validar que não quebra AdSense/ffmpeg.wasm/background-removal. |
| Edge proxy | `proxy.ts` (middleware) | Bloqueia paths de scan (`/.env`, `/wp-admin`, etc.) e aplica **CSRF guard** (POST com Origin ≠ Host → 403). |
| Rate limiting | `lib/rate-limit.ts` | Rate-limit por IP nas rotas de API (leads, shorten, rewrite). Usa **Upstash Redis** se configurado; sem ele, o limite é simplesmente pulado (rotas continuam funcionando). |
| Guards nas APIs | `app/api/{leads,shorten,rewrite}/route.ts` | Content-type guard, body-size guard e validação. |
| Open redirect fix | `lib/safe-url.ts`, `app/s/[code]/route.ts` | Resolver de short-link não redireciona para URLs externas maliciosas. |
| Plano de referência | `PLANO-CYBERSEGURANCA.md` | Adaptado do plano do Lab Paulista; documenta cobertura e verificação pós-deploy. |

⚠️ **Crítico (não regredir):** nunca adicionar headers **COOP/COEP** /
cross-origin-isolation. Eles quebram AdSense, ffmpeg.wasm (single-thread) e o
background-removal. Está documentado no `CLAUDE.md`.

### 2B. Rodada de design

| Feature | Arquivo(s) | O que mudou |
|---|---|---|
| Ícones de categoria | `components/category-showcase.tsx` | Trocou as ilustrações PNG por ícones **lucide** dentro do mesmo estilo das páginas de categoria. Sem `next/image` aqui agora; os PNGs continuam em `images/` caso queira reverter. |
| Hero marquee | `components/hero-marquee.tsx`, `app/page.tsx`, `app/globals.css` | Fundo do hero com **várias linhas de chips de ferramentas** flutuando (sutil, lento, direções alternadas). `aria-hidden`, pausa em `prefers-reduced-motion`. Keyframes em `globals.css` (`hero-marquee-left/right`). |
| Tool Pool `/all` | `components/tool-pool.tsx`, `app/all/page.tsx` | Página nova: canvas **arrastável + zoom no scroll** (estilo Google Maps). Layout em espiral phyllotaxis (cluster orgânico). **Busca reorganiza**: itens que não batem somem (fade) e os que batem convergem pro centro. Clique abre a ferramenta. Botão "See all" no hero leva pra cá. |
| Mobile nav | `components/layout/mobile-nav.tsx`, `components/layout/header.tsx` | Dropdown hambúrguer no mobile (`sm:hidden`) compartilhando os mesmos links da nav desktop. |
| Popular chips | `components/popular-tools.tsx` | "Word Counter" → **AI Text Rewriter**. Linha única no desktop, quebra no mobile. |
| AdSense configurável | `components/ads/ad-slot.tsx`, `.env.example`, `public/ads.txt` | Slot do anúncio agora vem de `NEXT_PUBLIC_ADSENSE_SLOT_TOOL`. `ads.txt` adicionado (trocar o pub id). |

**Knobs de design (ajuste rápido):**
- Densidade do cluster `/all`: `spiralPos(i, 150)` (cheio) e `spiralPos(..., 165)` (filtrado) em `tool-pool.tsx`.
- Largura dos boxes do pool: `w-[200px]`.
- Nº de linhas do marquee: prop `rows` em `<HeroMarquee rows={5} />` (`app/page.tsx`).
- Velocidade do marquee: `const duration = 70 + i * 12` em `hero-marquee.tsx`.

---

## 3. Estado do Git

- **Branch de produção:** `main` (em `github.com/vmismael/in1testing`) — contém **tudo**:
  base do In1 → 4 commits de segurança → merge do design (`211a88f`).
- Branches auxiliares ainda no remote (redundantes, já mergeadas):
  `feature/security-hardening`, `feature/design-experiments`. Podem ser apagadas.
- Convenção: conventional commits; branches `feature/x`/`fix/y`, **nunca** experimentar
  direto na `main`. Terminar mensagens de commit com o trailer `Co-Authored-By` do Claude.

---

## 4. O que falta configurar (antes/depois do deploy)

Tudo abaixo é **opcional para rodar local** — as ferramentas client-side funcionam sem
nenhuma env. Copiar `.env.example` → `.env.local` e preencher só o que for usar.

| Serviço | Envs | Notas |
|---|---|---|
| **AdSense** | `NEXT_PUBLIC_ADSENSE_CLIENT` (`ca-pub-…`), `NEXT_PUBLIC_ADSENSE_SLOT_TOOL` (id da ad unit) | Sem isso o `<AdSlot>` mostra placeholder em dev e nada em prod. **Também:** editar `public/ads.txt` com o pub id real. Anúncios só preenchem no domínio aprovado em prod (nunca em localhost). |
| **Upstash Redis** | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Liga o rate limiting real nas APIs. Sem isso, rate-limit é pulado. |
| **Supabase** | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | URL Shortener + captura de lead. Rodar `supabase/schema.sql`. |
| **AI Gateway** | `AI_GATEWAY_API_KEY` | AI Text Rewriter. Na Vercel, OIDC (`VERCEL_OIDC_TOKEN` via `vercel env pull`) funciona sem chave estática. |
| **Site** | `NEXT_PUBLIC_SITE_URL` | Base para canonical/sitemap/OG/short-link. Sem trailing slash. |
| **Analytics** | `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID` | Scripts só carregam se setados. |

Na Vercel, setar as mesmas envs (Production + Preview) e redeploy.

---

## 5. Como rodar e verificar

```bash
npm install
cp .env.example .env.local   # preencher o necessário (tudo opcional em dev)
npm run dev                  # http://localhost:3000

npm run build                # cada página de tool deve sair SSG/prerendered
npm run lint                 # tem que ficar limpo
```

**Sempre** rodar `npm run build` + `npm run lint` antes de push. Smoke-test no browser,
principalmente as ferramentas WASM (ffmpeg, background remover) e qualquer coisa com
preview ao vivo.

---

## 6. Próximos passos sugeridos

1. **CSP: Report-Only → enforce.** Validar no console/relatórios que nada quebra
   (AdSense, ffmpeg, bg-removal) e então mudar a CSP de `Content-Security-Policy-Report-Only`
   para `Content-Security-Policy` no `next.config.ts`.
2. **AdSense ao vivo.** Conta aprovada → setar as 2 envs + `ads.txt` → passar o `slot`
   nas posições desejadas.
3. **Backlog de ferramentas** (do roadmap, mesmo padrão + SEO ≥800 palavras): UUID generator,
   timestamp converter, Markdown→HTML, Lorem Ipsum, text diff, EXIF remover, favicon
   generator, image↔Base64.
4. **Limpeza de branches** redundantes no remote (`feature/*` já mergeadas).
5. **Decisão de produto:** as ilustrações PNG de categoria foram aposentadas em favor de
   ícones lucide. Se quiser voltar, os arquivos seguem em `images/`.

---

## 7. Gotchas técnicos (aprendidos na marra — ver `CLAUDE.md` para a lista completa)

- `Button` (Base UI) usa a prop **`render`**, não `asChild`. Link-como-botão = `buttonVariants()` num `<Link>`.
- eslint bloqueia `setState` síncrono dentro de `useEffect` e chamadas impuras no corpo do componente (ex.: `performance.now()` → extrair pra helper de módulo).
- ffmpeg: **single-thread only** (`@ffmpeg/core`, nunca `-mt`). Sem headers COOP/COEP.
- Scripts helper na raiz são lintados — apagar antes de `npm run lint`.
- `Uint8Array` de `TextEncoder`/pdf-lib/ffmpeg: envolver com `new Uint8Array(data)` para satisfazer `BlobPart`/`BufferSource`.
</content>
