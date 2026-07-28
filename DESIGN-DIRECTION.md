# Lex Bridge — Design Direction

Derived from five references, measured directly from their computed styles rather than eyeballed. Companion to [PLAN.md](PLAN.md), which locks structure and content.

---

## 1. What the references actually contain

| | Ref 1 Clause | Ref 2 Advocacy | Ref 3 Lawtide | Ref 4 Conex | Ref 5 Law Sphere |
|---|---|---|---|---|---|
| Engine | Framer | Framer | Webflow + jQuery | Webflow + jQuery | Framer |
| Theme | Dark burgundy | Dark | Dark charcoal | Light | **Light** |
| Display face | **Ancizar Serif 300** | Geist 300 | Figtree 400–500 | **Erode 300–400** | DM Sans 500 |
| Text face | Switzer 300 | Geist 300 | Figtree 500 | **General Sans 400** | DM Sans 300 |
| Hero size | 70 / lh 1.05 / −0.02em | 60–70 / lh 1.1 / −0.035em | 32–36 / lh 1.1 | 38 / lh 1.0 | 44 / lh 1.2 |
| Body | 19 / lh 1.4 | 18 / lh 1.5 | 14 / lh 1.5 | 14 / lh 1.71 | 16 / lh 1.5 |
| Accent | Magenta #FF0073 | Green #16322C | Terracotta #F2926F | Navy #0B273B | **Navy #213753** |
| Section tint | — | — | — | #F3F5FB | **#DDEBF9** |
| Container | 1272px | 1570px | 1440px | — | 1500px |
| Section padding | 128px | 150px | — | — | — |
| Radii | **12px** cards, ~square buttons | 50px pills | 8/10/12/14/100px | 40/50px + circles | 300px pills, 8px |
| Shadows | Effectively none | Effectively none | **Heavy** — 0 4px 40px ×16, 0 0 60px | One, light | Effectively none |
| Easing | `.4s cubic-bezier(.44,0,.56,1)` | `.4s` same curve | 5 different: .2/.3/.35/.4/.5 ease | .3s ease | `.3s` same curve |
| Smooth scroll | **None** | **None** | **None** | **None** | **None** |

### Finding 1 — none of the five uses Lenis, GSAP, or Locomotive

I probed for all three plus Locomotive and SplitType on every site. Nothing. Refs 1, 2 and 5 are Framer using its built-in scroll-appear animations; refs 3 and 4 are Webflow IX2 on jQuery.

So the quality you're responding to in refs 1/2/5 is not smooth-scroll. It is four cheap things:

1. **One easing curve, everywhere** — `cubic-bezier(0.44, 0, 0.56, 1)` at 0.3–0.4s. All three Framer sites use the identical curve. Ref 3 uses five different easings and reads visibly cheaper.
2. **Tight display leading with negative tracking** — lh 1.05, ls −0.02em.
3. **Generous section rhythm** — 128–150px vertical padding.
4. **Near-total absence of shadows.** The two most expensive-looking references have effectively none; the cheapest-looking has sixteen instances of `0 4px 40px`.

Lenis is therefore *our* addition, not something inherited from the references. Which is fine — but it earns its place only if wired correctly, and on this site it has real hazards. See §5.

### Finding 2 — four of the five are sans-only

Only ref 1 (Ancizar Serif) and ref 4 (Erode) use a serif for display. Refs 2, 3 and 5 are pure sans.

This matters because **our logo is a serif wordmark.** On a sans-only site the mark sits as a foreign object in the header — it stops being the same voice as the page. Ref 1's model — light-weight serif display over a sans text face — is the one that makes a serif logo feel native. That points to a synthesis:

> **Ref 1's type model × Ref 5's light-theme palette.**

Ref 5 is already within a few degrees of our brand: navy #213753 against a pale blue #DDEBF9 tint on white. Our navy is deeper (#001E4C) and we have gold, which ref 5 lacks entirely.

### Finding 3 — what to reject

**Ref 3 (Lawtide)** fails our bar: five easing curves, five radius values, three heavy shadow recipes, body text at 14px weight 500. Take its *section ideas* — the numbered consultation-to-outcome journey, the FAQ accordion, the resources grid — and none of its execution.

**Ref 4 (Conex)** is the font source, but its typography is undersized: h1 is 38px on desktop *and* 38px on mobile, body is 14px, and **17 of 39 tap targets are under 44px.** Take Erode. Leave the scale.

**Ref 5** has a live bug worth learning from: at 1280px the wordmark collides with the h1. Its nav is also a hamburger *on desktop* — viable with 7 links, not with our six-item nav plus a mega-menu.

### Finding 4 — a copy hazard, not a design one

Refs 2, 3 and 5 are saturated with the exact vocabulary our QA gate prohibits: *"We advocate for change"*, *"we don't just represent our clients"*, *"Representation and true advocacy"*, *"the attention and representation you deserve"*, *"Dedicated representation"*, *"attorney-client relationship"*, *"we are here to defend them"*.

They are law-firm sites. We are explicitly not a law firm. When a design references a site, section labels and headline patterns migrate across with the layout — that is the normal failure mode. **Take layout and motion from these. Take zero copy.** The approved vocabulary is PLAN.md §4.

---

## 2. Colour — light theme

Sampled from the supplied logo, extended into a working system.

| Token | Hex | Contrast on white | Use |
|---|---|---|---|
| `navy-900` | **#001E4C** | **16.3:1** | Headlines, header, footer, primary buttons |
| `navy-800` | #002750 | 15.4:1 | Large navy fills, bands |
| `navy-700` | #0B2545 | 14.8:1 | Secondary fills, hover states |
| `gold-500` | **#B08A41** | **3.2:1** | Rules, arc motif, model-band node, large numerals — **never body text** |
| `gold-100` | #F3EBDC | — | Subtle accent fills |
| `ink` | #1C2733 | 13.9:1 | Body copy — navy-tinted, not neutral charcoal |
| `ink-60` | #5A6675 | 5.1:1 | Captions, meta, form hints |
| `paper` | #FFFFFF | — | Cards, elevated surfaces |
| `base` | #FAF9F6 | — | Page background (warm white) |
| `tint` | #E8EEF5 | — | Section backgrounds, information panels |
| `hairline` | rgba(0,30,76,0.12) | — | Borders — replaces shadows |

**Gold is a graphics-only colour.** At 3.2:1 it passes WCAG AA for graphical objects and large text (needs 3:1) and **fails for normal body text (needs 4.5:1)**. So: rules, the bridge arc, the model-band centre node, large display numerals — yes. Eyebrows at 12–13px, links, body — no, those go navy. This is the single easiest accessibility mistake to make with this palette, because gold-on-white looks fine to the eye at large sizes and then gets reused at 13px.

**Recommend dropping Advisory blue #2E74B5.** It appears nowhere in the logo, and the references show a single accent is enough — refs 1, 2, 3, 5 each run one. Two accents plus navy will read unresolved. Links go navy-900 with a gold underline on hover; focus rings go navy. Ink and tint cover every remaining need.

Body text is `ink` #1C2733 rather than the draft's neutral #1A1A1A — a navy-tinted near-black keeps the whole page in one temperature family, which is what makes ref 1 and ref 5 feel deliberate.

---

## 3. Typography

**Display: Erode 300/400. Body: Inter 400/500/600.** Locked — see §8.

Proportions matter more than the family choice. These are ref 1's ratios, which is where the editorial quality actually comes from:

| Role | Desktop | Mobile | Line-height | Tracking | Weight |
|---|---|---|---|---|---|
| Display XL — hero h1 | 68px | 42px | **1.05** | **−0.02em** | 300 |
| Display L — section h2 | 44px | 30px | 1.10 | −0.015em | 300 |
| Display M — card h3 | 28px | 24px | 1.15 | −0.01em | 400 |
| **Lead** — hero sub-headline | **21px** | 18px | 1.50 | 0 | Inter 400 |
| Body | 17px | 16px | **1.60** | 0 | Inter 400 |
| Body small | 15px | 15px | 1.55 | 0 | Inter 400 |
| Eyebrow | 12.5px | 12.5px | 1.20 | **+0.10em** | Inter 600, UC, navy |
| Legal / footnote | 13px | 13px | 1.60 | 0 | Inter 400 |

Two deliberate departures from the references:

**Body line-height 1.6, not their 1.4–1.5.** The references are marketing pages with short paragraphs. Our service pages are 5–8 bullet stacks and the legal pages run to 13 sections. 1.4 is punishing at that length.

**Eyebrow tracking +0.10em.** Ref 1 uses +0.04em; ref 2 uses *negative* tracking on uppercase, which hurts legibility at 14px. Our logo's "ADVISORY GROUP" is set very wide — systematising that into the eyebrow layer is the one place the wordmark's own typographic character can propagate into the page. It also gives the ten service pages' `Services` eyebrow a distinct brand signature.

The v2.0 spec requires the hero sub-headline at 20–22px and explicitly *not* caption size, because it carries the "we are a consultancy, not a law firm" statement. That's the `Lead` token at 21px — a named token so it can't quietly shrink during build.

Fluid scaling via `clamp()` between 375px and 1440px, not breakpoint jumps.

---

## 4. Space, shape, elevation

**Container.** 1200px content, 1320px shell, gutters 24 / 40 / 64px. The references run 1272–1570px; 1570 is too wide to read comfortably, and we are a reading site. Legal pages hold a 720px measure per spec T9.

**Section rhythm.** 128px major / 96px standard / 64px tight on desktop; 72 / 56 / 40 on mobile. Ref 1 drops 128→64 at 375px — a clean halving, and worth copying exactly.

**8px spacing base.** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.

**Radii — 2px buttons, 8px cards, 0 on full-bleed bands. Locked.** Deliberately against refs 2, 4 and 5, which use 40–300px pills. Pills read consumer-friendly; our audience is a General Counsel evaluating whether this outfit is credible, and the brief asks for Kroll/Teneo, not retail. Ref 1 — the most expensive-looking of the five — uses 12px cards and near-square buttons.

Consequence to hold to: with no pills and no shadows, **all separation is carried by hairlines, tint blocks and space.** That is a less forgiving system — sloppy alignment has nothing to hide behind. Grid discipline stops being cosmetic.

**No shadows.** Separation comes from `hairline` borders and `tint` backgrounds. Reserve one soft shadow for genuinely floating UI only: the mega-menu panel, the mobile drawer, the cookie banner. Evidence is in §1: the two references with no shadows read best, the one with sixteen heavy shadows reads worst.

---

## 5. Motion and polish

**One easing curve.** `cubic-bezier(0.44, 0, 0.56, 1)` — adopted directly from refs 1, 2 and 5, which independently share it. Durations: 200ms micro (hover, focus), 350ms default, 600ms reveals.

**Reveals.** opacity 0→1 with translateY 16px→0, 60–80ms stagger, fires once, ~15% threshold.

**The hero and the model band never animate in.** This is a hard rule, not a preference. PLAN.md §1 sets a three-second comprehension standard that rests entirely on those two sections. If they fade in on scroll or on hydration, then a fast scroller, a slow connection, or a JS failure produces a visitor who has seen a navy serif brand and nothing that says "not a law firm" — which is the exact failure the whole structure exists to prevent. Both render statically. Reveals begin below the fold.

**Lenis — use it, with these constraints.** It's our addition, not the references'. Hazards specific to this site:

- **Anchor navigation must route through `lenis.scrollTo`.** We have in-page anchors on `/services` (the Group A/B/C jumps, including homepage card 4 → `#matter-coordination`), the FAQ accordion, and the long legal pages' section nav. Native `#hash` jumps fight a hijacked scroller and land in the wrong place — this is the most common way Lenis ships broken.
- **Disable on touch.** Native iOS momentum beats emulated inertia; keep `syncTouch` off.
- **`prefers-reduced-motion`** kills Lenis and all reveals; opacity-only transitions remain.
- **Keyboard focus.** Tabbing to an off-screen element must still scroll it into view — verify against the header offset so focused targets don't land under the sticky bar.
- Settings: `lerp: 0.1`, `wheelMultiplier: 1`. No exaggerated inertia — this is a consultancy, and a heavy scroll feel reads as a portfolio site.

**One signature moment.** The model band (C1) is where scroll-linked motion is worth spending: the bridge arc from the logo drawing left to right, You → Lex Bridge → Counsel, as the band enters. It's the logo's own motif, it visually *is* the business model, and it's one moment rather than a site full of them. Everything else is a quiet fade-and-rise.

*Considered and set aside:* a second round of hands-on testing found ref 3 has a genuine scroll-linked pinned section (image + stat + checklist cross-fading against a dot-rail progress indicator as you scroll) — a real candidate for the How We Work six-stage process. Noting it here rather than building it: it would be a second signature moment, and §5's whole argument is that the references earn their polish by having exactly one. Revisit only if How We Work tests flat once the rest of the site is built.

**Desktop mega-menu mechanics.** Hover-triggered (not click), fade transition, must tolerate the cursor crossing diagonally from the nav item toward the panel without closing early — implement with a short close-delay or a "safe triangle" hover-intent check, not an immediate `mouseleave` close. Ref 2's panel does this correctly across a genuine 3-column layout; ref 4 and ref 5 use click-to-open, which feels heavier for a menu a visitor may want to skim more than once per visit.

**Header never disappears.** Confirmed failure mode in ref 4: the header does not persist on scroll and simply vanishes past the hero on every page, on both desktop and mobile — it reads as broken, not minimal. Ours stays sticky and persistent per spec §3.1 ("condenses to a single row on scroll"); ref 1's pattern of injecting the primary CTA into the condensed bar once scrolled past the hero is worth taking directly.

---

## 6. Mobile

Handled alongside desktop, not after. Baseline 375px, verified at 320px.

- **Tap targets ≥44px.** Ref 4 fails 17 of 39; ref 1 fails 13 of 31. Both are template-quality misses we should not inherit.
- **No horizontal overflow.** Ref 1 has 10 elements wider than the viewport at 375px. Ref 4 has zero — it's achievable.
- **Body never below 16px.** Refs 3 and 4 both ship 14px.
- **Header:** wordmark + `Discuss a Mandate` persist in the bar; hamburger holds the rest. **Revised from a nested collapsible accordion to a static grouped list** — see §7. The mega-menu's three group labels (Core Coordination / Matter Coordination / Programme Services) stay as non-interactive headers above their items; nothing collapses. This keeps the grouping that makes ten services legible without §3.2's flat-list problem, and without building an interaction pattern that has no working precedent in any reference tested.
- **Model band (C1) is the highest-risk responsive component.** Three nodes stack vertically with connectors rotated; it must still read as You → Lex Bridge → Counsel when stacked, because on mobile it is doing the entire three-second job alone. Design the stacked state first, then the horizontal one.
- **Responsibility table (C6)** becomes two labelled stacked groups, never a horizontally scrolling table.
- **Sector grid** must tolerate 4, 6 or 8 cards — 2-up at mobile, 2/3-up at tablet, per spec T7.

---

## 7. Behavioural findings from hands-on testing

§1–6 above came from computed styles on a hidden pane — accurate on tokens, blind on behaviour, since a hidden `visibilityState` pauses paint and stops scroll-triggered animations from firing. A second pass, driven interactively (hover, click, resize, tab, submit) rather than just measured, filled that gap. Findings that change or sharpen the plan above:

**Mobile mega-menu — reversed from the original recommendation.** §6 originally called for a nested collapsible accordion. None of the five references implement a working nested/collapsible submenu in the mobile drawer — all five flatten to a single list; the only variation is whether group structure survives as static (non-collapsible) headers (ref 3) or gets lost entirely (refs 1, 2, 4, 5). A collapsible accordion is therefore an unproven pattern with real build risk for no demonstrated benefit. Ref 3's static-group approach is now the plan (edited into §6 above): keep the three group labels as fixed headers, drop the accordion mechanic.

**Credibility strip (C2) — a concrete overlap treatment.** Ref 5's navy stat band sits overlapping the bottom edge of the hero photo on desktop; at mobile width it collapses to a clean 2×2 grid, still overlapping the hero, white text on navy staying legible with no clipping. This is a stronger treatment than a plain full-width strip and is now the recommended execution of C2 on the homepage: overlap the hero image bottom edge on desktop, 2×2 grid on mobile (C2 has exactly four proof points, so the grid divides evenly).

**Service pages (T5) — two low-cost fixes against repetitiveness.** This is the single most relevant finding given ten near-identical service pages: one reference (Conex) reuses verbatim body copy across service pages with only the H1 swapped — confirmed by direct text comparison — and it is exactly the failure PLAN.md §2.1 already avoids, since all ten of our service pages have genuinely distinct copy in hand. Two things worth adding on top of that copy, both cheap and neither a structural change to the locked T5 section order:
- A **sticky sidebar card** on desktop carrying the CTA (C4) or a condensed role-boundary reminder (C3), so the page's one interactive element stays in view while a long bullet list scrolls past it. De-stickies naturally under the existing mobile rules.
- A **visible breadcrumb** ("← All Services" or similar). `BreadcrumbList` schema is already planned per PLAN.md §8 but was markup-only; give it an on-page UI treatment on every T5 page, not just structured data.

**FAQ accordion (T9 `/faq`).** Adopt single-open behaviour (opening one answer closes the previous) and a clean expand/collapse transition — both confirmed working well in ref 3. Do **not** copy its icon convention: ref 3 shows "−" when closed and "+" when open, which is backwards from what a visitor expects and was flagged as an actual usability miss, not a stylistic choice. Use the conventional direction: "+" closed, "×" or "−" open. Separately, ref 2's accordion toggles visually but the answer content is empty in the DOM — a build bug to test against explicitly, since a passing visual check would miss it.

**Forms (Contact + For Local Counsel).** Ref 5 had the clearest focus state of the five tested — filled fields on a light tint background with a visible border/colour change on focus — which maps directly onto our `tint` (#E8EEF5) token; use it as the field background with a `navy-900` focus border, rather than a bare underline (ref 2's underline-only fields had the weakest focus visibility of the set). For the 17-field firm-introduction form specifically, ref 3's approach of grouping a long form into logical sections (identity fields together, a category dropdown, a location/segmented-control block, free text last) is the right shape — break the 17 fields into named groups (firm details / jurisdictions & practice areas / contacts / attachment) rather than one continuous stack.

**Imagery.** No change to the brief's existing ban on gavels, scales, courtrooms and handshakes — confirmed as a real discriminator in practice, not just a paper rule: the two references that ignored it (a literal Lady Justice statuette in one hero, a literal handshake photo plus a scales-of-justice icon in the other) read as the two least distinctive sites of the five. The two credible alternatives seen working: a plain black-and-white skyline/architecture photo paired with restrained copy, and classical-library-style imagery (books, columns) rather than any figure of justice. Both fit the v2.0 §15 photography brief's "city architecture, abstract geographic connections" direction already in place — this just confirms it holds up against real alternatives, it doesn't change it.

**Reconfirms §5 as written.** A second, independently-run pass again found no Lenis, GSAP, or Locomotive on any of the five sites — strengthens rather than changes the original conclusion that smooth-scroll is our addition, not something to imitate from these particular references.

---

## 8. Type stack — locked

**Display — Erode** (Fontshare, free commercial use). Weights 300 and 400. Taken from ref 4, chosen over the logo's Didone because it holds up in long sentence-case headlines — and our headlines are long: *"Local legal capability, managed through one international relationship."* A high-contrast Didone gets fragile at card-title sizes and on mobile; Erode's moderate contrast reads institutional-editorial, which is the Kroll/Teneo register the brief asks for.

**Text and UI — Inter.** Weights 400, 500, 600. Eyebrows are Inter 600 uppercase at +0.10em, not Erode — Erode has no true small caps, and Inter's uppercase holds wide tracking cleanly at 12.5px.

**Loading.** Self-host both as woff2, Latin subset. Erode has no Google CDN URL, so both come from our own origin — which is better anyway: one connection, no third-party dependency, and no consent question about Google's CDN on a site whose privacy notice is going through HK counsel. Preload exactly the two faces used above the fold — Erode 300 and Inter 400 — and let the rest load with `font-display: swap`.

**Fallbacks.** Display: `Erode, 'Iowan Old Style', Georgia, serif`. Text: `Inter, system-ui, -apple-system, sans-serif`. Size-adjust the fallbacks so a swap doesn't shift the hero — the hero is the one place layout shift is genuinely costly, because it's carrying the three-second test.

**The wordmark stays as supplied artwork (SVG), never re-set in Erode.** Two serifs meet in the header — the logo's Didone and Erode in the nav-adjacent type. They coexist as long as they aren't adjacent at similar sizes, so give the mark clear space and keep header links in Inter, not Erode. Ref 5 shows the failure mode: at 1280px its wordmark collides with the h1.

Verified availability while checking: Ancizar Serif is on Google Fonts (v8, weight 300 present); Inter, Playfair Display and Prata are on Google Fonts; Erode and General Sans are Fontshare only. General Sans is not used — Inter replaces it per your instruction.
