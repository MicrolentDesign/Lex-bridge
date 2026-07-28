# Lex Bridge

Marketing site for **Lex Bridge Advisory Group** — a Hong Kong-based international legal
management and coordination consultancy. Built by Microlent Systems.

> **The rule that governs every page:** Lex Bridge coordinates. Independent qualified local
> counsel advises. The client decides.
>
> Lex Bridge is **not a law firm**. That distinction is the point of the site's structure,
> not a footnote — see [PLAN.md](PLAN.md) §1.

## Documentation

| Document | Covers |
|---|---|
| [PLAN.md](PLAN.md) | Locked structure, content inventory, resolved source conflicts, prohibited-language rules |
| [DESIGN-DIRECTION.md](DESIGN-DIRECTION.md) | Design system: colour, type, spacing, motion, mobile, plus the reference analysis behind it |
| [BUILD-STATUS.md](BUILD-STATUS.md) | What's built, hygiene results, known gaps, next-page order |

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

```bash
npm run build
npx tsc -b --noEmit
npx oxlint src
```

## Stack

- **Vite 8 + React 19 + TypeScript**
- **Tailwind v4**, CSS-first config — tokens live in `src/styles/tokens.css`, there is no
  `tailwind.config.js`
- **Erode** (display, Fontshare) + **Inter** (text, Google), loaded via `<link>` in
  `index.html` — not CSS `@import`, which Tailwind's own import silently invalidates
- **Lenis** smooth scroll, as a shared singleton in `src/lib/lenis.ts` with explicit
  suspend/resume for overlays

## Conventions worth knowing before editing

- **Design tokens only.** No hardcoded hex, px type sizes or ad-hoc easings. Everything
  resolves through `src/styles/tokens.css`.
- **Gold `#B08A41` is a graphics-only colour** — 3.2:1 on white. Fine for rules, the arc
  motif and large numerals; never body copy or small labels. Those go navy.
- **The hero and model band never animate in.** The site's three-second comprehension test
  rests on them, so anything that delays painting the "not a law firm" line defeats it.
  Use `<Reveal>` below the fold only.
- **No office pins, ever**, and no map that could imply owned offices. Region lists only.
- **Prohibited copy.** Never write *represent* (of Lex Bridge), *our lawyers*, *we advise*,
  *legal opinion*, *international law firm*. The full list and approved vocabulary are in
  PLAN.md §4.
- **Don't invent client facts.** Contact details, BR number and mandates are unconfirmed and
  rendered as visible placeholders on purpose. See BUILD-STATUS.md §4.
- **Images** are Unsplash placeholders behind `src/lib/images.ts` and must be replaced with
  licensed local assets before launch.

## Status

Homepage is 11 of 12 sections. The remaining 28 URLs are not built. **The static-generation
decision in BUILD-STATUS.md §5 should be settled before adding routes** — the site is
currently client-rendered, which cannot deliver the per-page metadata and schema the plan
requires.
