# Lex Bridge — Build Plan

Working reference for the site build. Derived from:

- **v2.0 structure spec** (locked structure, Microlent) — governs sitemap, templates, section order
- **Client draft (CD)** — `Lex_Bridge_Website_Structure_and_Content (1).docx`, §1–§16 — governs copy
- **Spec v1.0** — *not in hand.* Referenced for 9 content blocks + full metadata set. See §2.2.

Precedence: v2.0 wins on structure. CD wins on copy, except where v2.0 marks `[REV]`.

---

## 1. The spine

Every page serves one rule:

> Lex Bridge coordinates. Independent qualified local counsel advises. The client decides.

And one comprehension standard, which the homepage hero + model band must pass alone:

| Time | Visitor must have understood |
|---|---|
| 3s | International consultancy that manages cross-border legal work. **Not a law firm.** |
| 10s | They find and manage the local lawyers. The lawyers advise. I get one contact, one report. |
| 30s | It's for multinationals with matters in several jurisdictions. Here's what they do. Here's how I start. |

29 URLs · 12 templates · 8 reusable components · 2 forms.

---

## 2. Content inventory

### 2.1 In hand and complete

| Block | Source |
|---|---|
| Positioning, brand line, message hierarchy, use/avoid word list | CD §1 |
| Homepage copy — all sections | CD §4 |
| About copy — all sections | CD §5 |
| Services overview + all 10 card summaries | CD §6 |
| **All 10 service pages, full copy** (hero, relevance, support, deliverables, value) | CD §7.1–7.10 |
| Global Reach — full copy, 7 regions, 5 build steps, coverage statement | CD §8 |
| Sectors — 8 cards with descriptions | CD §9 |
| How We Work — 6 stages, 5 governance principles, 4 engagement formats | CD §10 |
| For Local Counsel — values, expectations, submission note | CD §11 |
| Insights — 6 categories, 6 candidate article titles | CD §12 |
| Contact — copy, 10 fields, helper text, confirmation | CD §13 |
| Professional status disclaimer — 3 paragraphs | CD §16 |
| Design direction + palette | CD §15 |

Copy coverage is roughly 80% of the site by page count. **All ten service pages — the bulk of the build — are fully written.**

### 2.2 Missing — all of it lives in spec v1.0

| Needed for | Block | Ref |
|---|---|---|
| About | Leadership section spec | v1.0 §6.1 |
| Home | 3 representative mandate cards | v1.0 §6.2 |
| /faq | 17 questions + answers | v1.0 §6.3 |
| /for-local-counsel | 17-field firm form | v1.0 §6.4 |
| Both thank-you pages | Confirmation copy + onward links | v1.0 §6.5 |
| /404 | Message + 6 links | v1.0 §6.6 |
| /privacy | 11 sections | v1.0 §6.8 |
| /terms | 13 sections | v1.0 §6.9 |
| /cookies | Notice + category table | v1.0 §6.10 |
| How We Work, /professional-status | Responsibility table (C6) | v1.0 §6.11 |
| /insights | 3 launch articles | v1.0 §6.12 |
| 23 of 29 URLs | Titles + meta descriptions | v1.0 Part 7 |

CD §14 carries metadata for 6 pages only (Home, About, Services, Global Reach, How We Work, Contact). The other 23 — including all ten service pages — are missing.

**Action: obtain spec v1.0.** If it can't be produced, these blocks are authored fresh, which adds meaningful scope and puts the four legal pages back into counsel review.

---

## 3. Conflicts between v2.0 and the client draft — resolved

Found while reconciling the two documents. Resolutions applied unless flagged.

| # | Conflict | Resolution |
|---|---|---|
| 1 | Homepage core-services card 3 is "Multi-Jurisdiction **Coordination**" (CD §4); nav and service page say "Multi-Jurisdiction **Programmes**" | Use **Programmes** everywhere. One name per service. |
| 2 | Homepage card 4 is "Disputes, Transactions & Regulatory Projects" — a composite of three separate service pages. v2.0 says "each links to its service page." | Card 4 links to `/services#matter-coordination` (Group B anchor). Preserves the locked 4-card layout and lands the visitor on all five Matter Coordination services. |
| 3 | Service-page CTA button: "Discuss This Service" (CD §7.x) vs "Speak With Our Coordination Team" (CD §3) vs "Speak With Our Team" (CD §6) | v2.0 §3.4 button list is canonical. Retire the two "Speak With…" variants. |
| 4 | Global Reach CTA button: "Discuss the Jurisdictions" (CD §8) | Use **Tell Us Where You Need Support** (v2.0 §3.4). |
| 5 | Insight CTA: "Read the Latest Insight" (CD §3) vs "Read Insight" (CD §14) | Use **Read Insight**. |
| 6 | CD footer includes Careers | Omitted per v2.0 until recruitment is active. |
| 7 | Hero eyebrow: "Hong Kong-based. Internationally connected." (CD) vs "Hong Kong-based international consultancy" (v2.0 Fix 1) | Use v2.0 — it does positioning work the CD version doesn't. |
| 8 | CD hero INTRODUCTORY COPY sits where v2.0 puts a new explicit sub-headline | v2.0 Fix 1: new sub-headline at 20–22px, CD intro copy demoted to BODY beneath it. |

---

## 4. Prohibited-language audit — copy in hand

The QA gate searches for: *represent, representation, our lawyers, our attorneys, we advise, legal opinion, our offices worldwide, global legal practice, international law firm.*

**Must fix (2):**

1. **CD §4, "The bridge" body** — "We **represent** the client's objectives within the coordination process." Already caught by v2.0 Fix 4 → *"We keep the client's commercial objective at the centre of the coordination process."*
2. **CD §1, approved-words table** — the "Use" column contains **"Client-side coordination representative."** This is inside the list that is supposed to be the standard for all future copy, which makes it the highest-risk phrase in either document — it will get copied forward. Strike it; replace with **"central point of coordination."**

**Legitimate uses — keep, do not flag in QA:**

- CD §7.4 — "does not conduct court advocacy or provide reserved legal representation" (negation; v2.0 moves this into the role-boundary strip on that page)
- CD §16 disclaimer, and the footer status statement — negated uses throughout

**Watch:**

- CD §1 lists "advise on process" as approved. Safe as written, but **"we advise"** must never appear unqualified. Body copy in hand is clean.
- "Network" — CD §8 uses it only to disclaim having a fixed one. Acceptable in body copy, never in nav, headings or metadata.

Everything else is clean. No instance of *our lawyers, our attorneys, legal opinion, our offices worldwide, global legal practice,* or *international law firm* in the copy in hand.

---

## 5. Decisions taken

### 5.1 Related services map (C5) — not specified anywhere, authored here

Each service page carries three related cards from the same or adjacent group.

| Page | Related |
|---|---|
| legal-project-management | local-counsel · multi-jurisdiction · legal-operations |
| local-counsel | legal-project-management · multi-jurisdiction · professional-services |
| multi-jurisdiction | legal-project-management · local-counsel · market-entry-regulatory |
| disputes-investigations | legal-project-management · local-counsel · professional-services |
| transactions-corporate | multi-jurisdiction · market-entry-regulatory · professional-services |
| market-entry-regulatory | multi-jurisdiction · employment-mobility · professional-services |
| ip-portfolio | multi-jurisdiction · legal-operations · local-counsel |
| employment-mobility | multi-jurisdiction · market-entry-regulatory · legal-operations |
| legal-operations | legal-project-management · multi-jurisdiction · ip-portfolio |
| professional-services | local-counsel · market-entry-regulatory · legal-project-management |

### 5.2 Three launch articles — recommended selection from CD §12's six

1. **Choosing Local Counsel in an Unfamiliar Jurisdiction: Seven Questions That Matter** — *Local Counsel Strategy*
2. **Why Multi-Jurisdiction Legal Projects Fail — and How Better Coordination Helps** — *Multi-Jurisdiction Programmes*
3. **From Separate Local Opinions to One Executive View** — *Cross-Border Matter Management*

Rationale: these three map to the three Core Coordination services, sit in three different categories, and — critically — are all management-focused. Under the standing editorial rule, **none requires jurisdiction-specific legal review.** That removes a counsel-review dependency from the launch path. The other three candidates are equally good but no better on that test.

### 5.3 Homepage density — raise at design stage

The locked homepage is 12 content bands. Four of them — *The bridge* (5), *Why Lex Bridge* (7), *Who we support* (11), *International reach* (10) — restate the coordination proposition in different words, and the new model band (3) now states it more directly than any of them.

Not proposing a structural change; structure is locked. Flagging it as a **design problem to solve visually**: treat *The bridge* as the model band's introduction rather than a separate full band, and set *Who we support* as a compact inline list rather than a paragraph section. That holds the locked content while keeping the page from flattening after a strong opening.

### 5.4 Status statement placement

Verbatim, identical wording, three locations — model band caption, service-page role-boundary strip (C3), footer. Consistency matters more than variety for a compliance line; it should read as a fixed statement of fact, not fresh copy each time. Footer instance at readable size, not 10px grey.

---

## 6. Component inventory

Build these first; pages become composition.

| ID | Component | Instances | Notes |
|---|---|---|---|
| C1 | Model band | 2 | Three nodes, thin connectors, gold on centre node. The most important object on the site. |
| C2 | Credibility strip | 2 | Four proof points |
| C3 | Role boundary strip | 11 | 10 service pages + For Local Counsel (reframed) |
| C4 | CTA block | ~24 | 3 variants (A/B/C), mapped per page in v2.0 T5 |
| C5 | Related items | 13 | Service detail + insight article |
| C6 | Responsibility table | 2 | How We Work + Professional Status |
| C7 | Footer | 29 | 4 columns + status statement + legal bar |
| C8 | Cookie banner | 29 | Accept / Reject / Manage — analytics fires only after consent |

Plus: header with 3-column services mega-menu, service card, sector card, insight card, mandate card, leadership card, accordion (FAQ), stage list (numbered process), regional index, pull-quote, form field set.

---

## 7. Build sequence

**Phase 0 — foundation.** Tokens from the logo + CD §15 palette, type scale, grid, header, footer, C7/C8. Nothing renders until these exist.

**Phase 1 — the proof page.** Homepage hero + C1 model band only. Stop and test the 3-second standard on someone who hasn't seen the brief. If they can't state the business model, the design is wrong and everything downstream inherits it. This is the gate.

**Phase 2 — the template that repeats.** T5 service detail, built once, then the ten pages. Copy is already in hand for all ten, so this is the largest single win available. Carries C3, C5, C4.

**Phase 3 — supporting templates.** T4 Services overview (with Group A/B/C anchors), T2 About, T3 How We Work, T6 Global Reach, T7 Sectors.

**Phase 4 — rest of homepage.** Sections 4–13.

**Phase 5 — conversion + audience.** T12 Contact, T8 For Local Counsel, both forms, both thank-you pages.

**Phase 6 — content-dependent.** T9 legal/utility, T10/T11 Insights. Blocked on §2.2 and on counsel review.

**Phase 7 — QA gate.** v2.0 Part 7 checklist in full.

---

## 8. Technical notes

- **Routing must be locale-prefix-ready from day one** — `/tc/` is planned. Retrofitting this after 29 routes exist is expensive; designing for it now costs nothing.
- **Forms need a server.** Server-side validation, honeypot, reCAPTCHA v3, rate limiting, DB logging, autoresponder, and a virus-scanned non-public PDF upload (10 MB) cannot run on static hosting. Hosting is the client's responsibility and outside Microlent's scope — **so the hosting decision constrains the form architecture, and it needs to be made before Phase 5.** If hosting turns out to be static-only, both forms go to an external endpoint and that changes the build.
- **Schema:** `Organization` + `ProfessionalService` (Home), `FAQPage`, `Article` per insight, `BreadcrumbList` sitewide, `ContactPoint` (Contact).
- **noindex:** `/404` and both thank-you pages.
- **OG:** one 1200×630 template, generated across the set. LinkedIn is the only channel that matters here.
- **Global Reach visual: no office pins, ever.** Connection lines and regional highlights only.

---

## 9. Brand colours — sampled from the supplied logo

| Role | Logo (measured) | CD §15 | Note |
|---|---|---|---|
| Navy | **#001E4C** – #002750 | #0B2545 | Logo navy is deeper and cooler than the draft palette |
| Gold | **#B08A41** | #B58A3A | Effectively a match |
| Advisory blue | — | #2E74B5 | **Not in the logo.** Flagged for the design conversation. |
| Warm white | — | #FAF9F6 | |
| Blue-grey | — | #E8EEF5 | |
| Charcoal | — | #1A1A1A | |

The mark is a two-colour identity: deep navy and muted gold, with a bridge-span arc cutting through the LB. The arc is the obvious motif for the model band connectors, section rules and the Global Reach lines.

---

## 10. Open items

**Blocks design sign-off**

- [ ] Spec v1.0, or authorisation to author the 12 missing blocks in §2.2
- [ ] Engagement model: does the client engage local counsel, does Lex Bridge, or both? Determines final wording on Disclaimer, Terms, two FAQ answers, and the Contact form
- [ ] Registered HK address, BR number, general email, telephone, business hours
- [ ] Hosting decision — constrains the form architecture (§8)
- [ ] Confirm whether "Advisory blue" stays in the palette (§9)

**Blocks launch**

- [ ] Leadership: names, titles, bios, photographs — bios reviewed by HK counsel
- [ ] Jurisdictions that may be named on Global Reach
- [ ] Which of the 8 sectors can be evidenced
- [ ] Representative mandates confirmed accurate, edited to match reality, or reframed conditionally
- [ ] 3 insight articles approved with named authors, or Insights cut from launch scope
- [ ] Privacy, Terms, Cookie Notice, Professional Status approved by HK counsel
- [ ] Working languages, for the FAQ
