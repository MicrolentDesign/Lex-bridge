# Build status & next pages

Companion to [PLAN.md](PLAN.md) (structure/content) and [DESIGN-DIRECTION.md](DESIGN-DIRECTION.md) (design system).

---

## 1. Stack

| | |
|---|---|
| Framework | Vite 8 + React 19 + TypeScript |
| Styling | Tailwind v4, CSS-first config (`src/styles/tokens.css`, no `tailwind.config.js`) |
| Fonts | Erode 300/400 (Fontshare) + Inter 400/500/600 (Google), via `<link>` in `index.html` |
| Smooth scroll | Lenis, `lerp 0.1`, touch left native, off under `prefers-reduced-motion` |
| Dev | `npm run dev` → :5173 · `npm run build` · `npx tsc -b --noEmit` · `npx oxlint src` |

---

## 2. Homepage — 11 of 12 sections built

Order per v2.0 T1. All copy from the client draft; no invented client-facing claims.

| # | Section | Component | Source |
|---|---|---|---|
| 2 | Hero | `Hero.tsx` | [REV §1.3 Fix 1] |
| 3 | Model band (C1) | `ModelBand.tsx` | [NEW §1.3 Fix 2] |
| 4 | Credibility strip (C2) | `CredibilityStrip.tsx` | CD §4 |
| 5 | The bridge | `TheBridge.tsx` | CD §4 [REV — "represent" fixed] |
| 6 | Core services | `CoreServices.tsx` | CD §4 |
| 7 | Why Lex Bridge | `WhyLexBridge.tsx` | CD §4 |
| 8 | In practice | `RepresentativeMandates.tsx` | **conditional framing — see §4** |
| 9 | How we work | `HowWeWorkSteps.tsx` | CD §4 |
| 10 | International reach | `GlobalReachBand.tsx` | CD §4 + §8 |
| 11 | Who we support | `WhoWeSupport.tsx` | CD §4 |
| 13 | Final CTA (C4) | `FinalCta.tsx` | CD §4 |
| 12 | Featured insight | **omitted** | v2.0 T1: drop if Insights isn't live. Articles unwritten. |

Shared: `Header`, `Footer` (C7), `SectionHeader`, `Reveal`, `ConcaveCorner`.
Data: `lib/nav.ts`, `lib/images.ts`.

Page height 8,093px desktop / 13,539px at 375px.

---

## 3. Hygiene check — current results

Measured on the live page, not assumed.

| Check | Result |
|---|---|
| TypeScript `tsc -b --noEmit` | clean |
| `oxlint src` | clean |
| `npm run build` | clean · CSS 30.8 kB (6.5 kB gz) · JS 246 kB (74 kB gz) |
| Horizontal overflow @375 / @1440 | 0 elements |
| Tap targets < 44px @375 | **0 of 30** |
| Tap targets @1440 | desktop nav links 41–43px (were 21–23px). Above the WCAG 2.5.8 pointer minimum of 24px; these elements are `lg`-only. |
| Image distortion (excluding `object-fit`) | none. An earlier flag on three images was a false positive — `object-cover` crops, it does not stretch. |
| Mobile drawer scroll | fixed — see §3.1. Verified by wheel event, not `scrollTop`: `defaultPrevented` false, `lenis-stopped` applied while open, removed on close |
| Logo size header vs drawer | 36px in both — no shrink on open |
| `<h1>` count | exactly 1 |
| Heading level skips | none |
| Images missing `alt` attribute | 0 |
| Broken images | 0 |
| Prohibited-language gate (PLAN.md §4) | **0 hits** on *our lawyers, our attorneys, we advise, legal opinion, our offices worldwide, global legal practice, international law firm* |
| "represent*" occurrences | 3, all legitimate — each attributes representation **to independent counsel** |
| Status statement present | yes, footer, at readable size (not 10px grey) |
| Office pins on any map | none — region list only, no map |

### 3.1 Mobile drawer scroll — root cause and fix

Two separate defects presented as one "frozen menu". The first fix addressed only the
first, which is why the symptom persisted.

**Defect 1 — flexbox (fixed earlier).** `flex-1` sets `flex-basis: 0`, but a column flex
item keeps `min-height: auto`, so the nav grew to full content height instead of shrinking
to the drawer. `overflow-y-auto` had nothing to scroll. Fixed with `min-h-0`.

**Defect 2 — Lenis swallowing the events (the actual cause).** Lenis calls
`preventDefault()` on wheel events and drives the window scroller itself, so a nested
scroll container never receives them. Measured directly:

| | before | after |
|---|---|---|
| `wheel` `defaultPrevented` inside drawer | `true` | **`false`** |
| `html` class while drawer open | `lenis lenis-scrolling lenis-smooth` | `lenis lenis-stopped` |
| `data-lenis-prevent` on scroll container | absent | present |
| Lenis stylesheet loaded | no | yes |

Fix, in `src/lib/lenis.ts` — the instance is now a shared singleton with
`suspendLenis()` / `resumeLenis()`:

1. `suspendLenis()` on drawer open (`lenis.stop()`) releases wheel/touch to the browser.
   This is the fix that matters; it also stops the page moving behind the overlay.
2. `data-lenis-prevent` on the nav, so Lenis skips events originating inside it — needed
   for any inner scroller that must work while Lenis is running.
3. `lenis/dist/lenis.css` imported, supplying `overscroll-behavior: contain` for that
   attribute and `.lenis-stopped { overflow: clip }`.
4. `body overflow: hidden` retained for the reduced-motion path, where no Lenis instance
   exists to suspend (suspend/resume are optional-chained no-ops there).

**Verification lesson:** the first attempt was "verified" by setting `nav.scrollTop`
directly, which bypasses the event system entirely and passes even when wheel and touch
are fully blocked. Nested-scroll fixes must be checked with a cancelable `wheel` event and
its `defaultPrevented` flag.

Escape-to-close was added at the same time, since the drawer is a full-screen overlay.

### Known gaps (not yet done)

- **No SSG.** Client-rendered SPA: one HTML shell. Blocks PLAN.md §8 (29 indexed URLs with per-page metadata + schema) and conflicts with DESIGN-DIRECTION.md §5 (hero must paint without JS). **Decide before building more pages** — see §5.
- **No router.** Every nav/footer link is a real `href` but resolves to nothing yet.
- **Logo is a 139 kB PNG** on every page. Needs tracing to SVG.
- **Images are Unsplash hotlinks** (`lib/images.ts`) — placeholders, must become licensed local assets.
- **Reveal animations can't be verified in this harness.** The preview pane reports `visibilityState: hidden`, which suspends IntersectionObserver callbacks. Verified instead by reading inline style state (`opacity: 1`, `translateY(0px)`). A mount-time geometry check covers in-view-at-load content.
- Analytics/cookie consent (C8) not built.

---

## 4. Content integrity notes

**Section 8 is written in the conditional.** Its source block [v1.0 §6.2] is not in hand. PLAN.md §10 permits "confirmed as accurate, edited to match reality, or reframed in the conditional" — the third option is used. The cards describe how the model *would* apply to a situation type and carry an explicit footnote that they are not descriptions of specific engagements. This is deliberate: CD §16 requires every claimed mandate to be verified, so inventing past engagements would be a fabricated credential on a professional-status-sensitive site. Replace with real anonymised mandates when the client provides them, and drop the conditional framing.

**Footer contact details and BR number are visible placeholders** (`[Registered address — to confirm]`). Not invented. Blocked on PLAN.md §10.

**Hero imagery contradicts the brief as currently requested.** CD §15 bans scales of justice; the supplied statue image is that exact motif, sitting beside the "not a law firm" line. The hero renders a swappable figure slot: set `heroFigure` in `src/lib/images.ts` to an imported asset and it appears bottom-right, desktop and mobile. Currently `null`, so only the skyline backdrop shows.

---

## 5. Decision needed before the next page

Adopt **`vite-react-ssg`** (prerenders every route to static HTML, keeps all existing components) or migrate to Next.js/Astro.

Why it can't wait: the moment there are 29 routes, retrofitting means touching every page file. Doing it now costs one afternoon and nothing else changes. It is also what makes per-page `<title>`, meta description, `BreadcrumbList`/`Article`/`FAQPage` schema and OG tags actually work — all required by PLAN.md §6/§8 — and if the client's hosting turns out to be static-only (still unknown), SSG is mandatory regardless.

---

## 6. Next pages — build order

**Phase A — routing + SSG foundation.** Resolve §5, add the router, wire `<head>` metadata per route, `sitemap.xml`, `robots.txt`, `noindex` on `/404` and both thank-you pages. Locale-prefix-ready for `/tc/`.

**Phase B — T5 service detail × 10.** The biggest single win: all ten pages' copy is already written (CD §7.1–7.10). Build the template once, then drive ten routes from `content/services.ts`. Carries the role-boundary strip (C3), related-services trio (PLAN.md §5.1), CTA variant per PLAN.md T5 mapping, sticky sidebar CTA and visible breadcrumb (DESIGN-DIRECTION.md §7). Move the disputes-page boundary line into C3 on that page specifically.

**Phase C — T4 Services overview.** Groups A/B/C with the `#matter-coordination` anchor that homepage card 4 targets. Needs anchor scrolling routed through `lenis.scrollTo`.

**Phase D — T2 About, T3 How We Work, T6 Global Reach, T7 Sectors.** About reuses C1; How We Work needs the responsibility table (C6, blocked on v1.0 §6.11); Global Reach must stay pin-free; Sectors must tolerate 4/6/8 cards.

**Phase E — T12 Contact + T8 For Local Counsel.** Both forms. **Blocked on the hosting decision** — server-side validation, reCAPTCHA v3, rate limiting, DB logging and a virus-scanned 10 MB upload can't run on static hosting; if hosting is static-only these go to an external endpoint.

**Phase F — T9 legal/utility + T10/T11 Insights.** Blocked on PLAN.md §2.2 content and HK counsel review.

**Phase G — QA gate.** Full v2.0 Part 7 checklist, plus the §3 table above re-run per page.

---

## 7. Immediate next actions

1. Decide SSG (§5).
2. `git init` in this folder — currently untracked inside the home-directory repo, so there is no safety net for parallel work.
3. Trace logo → SVG.
4. Confirm hero imagery direction (§4).
5. Then Phase A → Phase B.
