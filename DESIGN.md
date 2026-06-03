# Design System — natepinches.com

> Derived from the source brief at `~/.gstack/projects/nate_pinches/briefs/2026-05-13-design-brief.md`.
> The brief is the narrative spec. This file is the structured token reference. Where they conflict, the brief wins and this file gets updated.

## Product Context

- **What this is:** Single-scroll personal site for Nate Pinches at natepinches.com.
- **Two jobs:** (1) credibility anchor for CappaWork prospects searching Nate; (2) advisory/board/speaking surface that wouldn't fit under a company URL. Fundraising is a downstream beneficiary, not a design driver.
- **Audience-of-one:** someone arriving from a LinkedIn intro or referral, asking *"Is this person who they say they are?"*
- **Project type:** editorial single-scroll personal site. Not portfolio-grid, not SaaS marketing, not agency-deck.
- **Sibling brand:** CappaWork. Same operator's hand, different room. Split is felt, not declared. See `project-cappawork-context` memory.

## Memorable Thing

> "This person ships serious work for serious companies — and the type, spacing, and project picks tell you he has the taste to match."

Combination of "ships serious work" (credibility) + "unusual taste" (the way the page is made). Every choice serves both.

## Aesthetic Direction

- **Direction:** Editorial-operator. Working notebook, not glossy marketing.
- **Reference points:** Patrick Collison's personal site, Stripe Press, Nat Friedman's site, Pirijan's old portfolio.
- **Decoration level:** Minimal. Type and whitespace do the work. No decorative blobs, no ornaments, no AI-slop gradients.
- **Mood:** Restrained, generous, asymmetric. Serious-person-with-receipts. Light dry humor in copy is welcome; visual humor is not.

## Typography

The page lives or dies on the headline treatment. Spend disproportionate effort here. Large serif statement, mixed roman and italic, accent color used surgically on one or two words.

### Stack

| Role | Primary (open) | Premium alternative (commercial) | Notes |
|---|---|---|---|
| Display / Hero | **Fraunces** (Google Fonts) | GT Sectra, Tiempos Headline | Use opsz axis at large sizes. Mix roman and italic in the hero statement. |
| Body | **Inter Tight** (Google Fonts) | ABC Diatype | Tight neo-grotesque. Default 16–18px. |
| UI / Labels | Inter Tight (same as body) | — | One typeface for body + UI keeps the page quiet. |
| Metadata / Tags / Numbers | **IBM Plex Mono** (Google Fonts) | Berkeley Mono | Warm monospace. Used for project status, dates, numeric labels in proof strip captions. |
| Code (if any writing posts include code) | IBM Plex Mono | — | Match the metadata mono. |

### Type scale

Modular scale, base 16px (1rem), ratio ~1.333 (perfect fourth) for body, custom for display.

| Level | Size | Use |
|---|---|---|
| `display-xl` | clamp(3.5rem, 7vw, 6.5rem) | Hero statement only. One per page. |
| `display-lg` | clamp(2.25rem, 4vw, 3.5rem) | Section opener (rare). |
| `h2` (as `.label`) | `text-meta` (0.75rem) | Section headings ("My Work", "Background", "Get in touch") are semantic `<h2>` but styled as the mono `.label` eyebrow — a deliberate editorial inversion (small mono markers, not large headings). The display weight lives in the content below them, not the label. |
| `h3` | 1.375rem | Project card titles, essay titles. |
| `body-lg` | 1.125rem | Background paragraph, project descriptions. |
| `body` | 1rem | Default. |
| `meta` | 0.8125rem | Mono labels, status badges, dates. |

### Treatment rules

- **Headline:** Mix roman and italic in the same line. Accent color on 1–2 words maximum, never a phrase. Italic carries the words doing the most semantic lifting (e.g., the verb or the unusual combination word).
- **Numbers:** Display numbers in the proof strip use `Fraunces` with `font-variant-numeric: oldstyle-nums` for the small caption mono labels and `lining-nums tabular-nums` for the giant numbers themselves.
- **No all-caps display.** Small caps in mono labels only.
- **No letter-spacing > 0.05em** anywhere except all-caps mono labels.

## Color

Warm. Restrained. One accent. Optional gold echo for the CappaWork sibling resemblance.

### Palette

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F4F1EA` | Warm off-white background. Paper, not screen-white. |
| `--bg-sunk` | `#EBE6DB` | Subtle inset surfaces (project card backgrounds, code blocks). Use sparingly. |
| `--ink` | `#1A1814` | Near-black ink. Warm, not pure black. Body and headings. |
| `--ink-soft` | `#3A3530` | Body paragraphs (slightly lighter than ink for less weight). |
| `--ink-muted` | `#6B6359` | Captions, mono labels, dates, secondary metadata. |
| `--ink-faint` | `#A39B8E` | Borders, dividers, the lightest typographic gestures. |
| `--accent` | `#B8410E` | Rust / terracotta. The 1–2-word headline accent and the lone underline-on-hover for inline links. |
| `--accent-deep` | `#8C2F09` | Hover state on accent. |
| `--echo-gold` | `#B8893E` | Optional muted gold echo of CappaWork's gold. Reserve for one element max (e.g., the hero proof number underline, OR a small mark next to "CappaWork" in the work section — pick one, not both). |

### Usage rules

- The accent appears at most **3 times above the fold**: 1–2 words in the hero, the proof-strip lead number, and one inline link. After that it should disappear.
- No accent on body text, no accent on UI chrome, no accent on borders.
- Dark mode: deferred. Brief did not call for it. The warm paper aesthetic does not benefit from a dark equivalent. Add only if a clear need emerges.

## Spacing

- **Base unit:** 4px.
- **Density:** Spacious. The site holds the domain by giving content room to breathe.
- **Scale:** `2xs:2 / xs:4 / sm:8 / md:16 / lg:24 / xl:32 / 2xl:48 / 3xl:80 / 4xl:128` (px).
- **Section rhythm:** Major sections separated by `4xl` (128px) on desktop, `3xl` (80px) on mobile. The proof strip and hero share a tighter rhythm — the proof strip lands `2xl` (48px) below the hero to feel like an answer to it.
- **Max content width:** `64rem` (1024px) for the page container. Body text column inside that caps at `36rem` (576px / `max-w-xl`) on the homepage — newspaper-column reading width. Work **detail pages** (`/work/[slug]`) widen the reading column to `42rem` (`max-w-2xl`) because case-study prose and the "At a glance" fields are denser than the homepage; this is an intentional per-template width, not drift.
- **Asymmetry:** Sections do not center inside the container. Content sits left-aligned with the left margin at `lg` (24px) on mobile, scaling to a generous `4xl+` (128px+) left inset on desktop. Right margin is loose. This asymmetry IS the editorial signal.

## Layout

- **Approach:** Hybrid — disciplined column for body content, intentional asymmetry for hero, proof strip, and project cards.
- **Hero:** Full-width container, content left-anchored with deep left inset on desktop. Hero statement breaks across 2–3 lines maximum. The customer line ("founder-led service businesses, $3–10M revenue") sits below in `body-lg` muted ink, indented to align with the second line of the hero.
- **Proof strip:** Desktop: 4 columns, the 5× number is given visual prominence (larger size or italic accent). Mobile: 2×2 grid, 5× still leads. Each cell is a giant `Fraunces` number with a 2-line mono caption underneath.
- **Background:** Single column, `body-lg`, max 36rem width.
- **Work cards:** Responsive grid (2-col on `sm+`, single column on mobile); the set has grown past four, so it flows rather than locking to 2×2. Each card is a flat block — no shadow, no border-radius, no card chrome. Card front: a small mono status label, the project name in `h3` (links to its detail page, with a `→` arrow), a one-line descriptive subtitle in italic, a short (1–3 sentence) blurb in Nate's first-person voice, and a `•`-separated mono technology line. Cards animate in (see Motion → Work-card entrance).
- **Logo backdrop (approved 2026-06-03):** A single NP mark sits fixed behind all content as a faint watermark (`body::before`, `10%` opacity, centered at `center 40%`, `min(82vw, 820px)`). Stacking is load-bearing: paper lives on `html` (the canvas), `body` has **no** background, and the watermark sits at `z-index: -1` — so it paints above the paper canvas but below content. A background on `body` (or `bg-paper` on `<main>`) would paint over it and hide it, so both `<main>` elements are transparent. Asset: `public/np_logo.svg` (ink stroke). This is the one decorative graphic on the site.
- **Work detail pages (approved deviation, 2026-06-02):** `/work/[slug]` carries the full case study (status, name, tagline, narrative intro, an "At a glance" block of Problem / Solution / Why it was hard / Impact, AI components, technology, optional live link). This deviates from the original single-scroll, "Not portfolio-grid" brief — approved by the user so the site can serve both prospective clients and technical evaluators with depth the card can't hold. Content source of truth: `src/content/work.ts`. The homepage stays a single scroll; detail pages are typographic and static (no entrance motion).
- **Writing:** If present, list of titled links with a one-line dek and date. No grid, no card.
- **Contact:** Single line. Email · Calendly (optional) · LinkedIn. Mono. Quiet.

## Border Radius

- **`--radius-sm`:** `0` (default — sharp).
- **`--radius-md`:** `2px` (subtle, only on the rare element that needs it — none currently planned).
- **`--radius-lg`:** `0` (no rounded buttons, no rounded cards).
- **Rationale:** Editorial sites use sharp corners. Rounded everything reads as SaaS. The brief explicitly opposes that aesthetic.

## Motion

- **Approach:** Minimal-functional.
- **Permitted:** Inline link underline reveal on hover (150ms ease-out). Subtle accent-color transition on accent hover (150ms ease-out). External link arrow nudge on hover (100ms ease-out, 4px translate).
- **Work-card entrance (approved deviation, 2026-06-02):** Work cards fade in and rise 12px on scroll-into-view, staggered ~60ms per card, 450ms ease-out, firing once. Disabled (rendered static) under `prefers-reduced-motion`. This is the one place motion exceeds the 250ms cap and the one permitted entrance animation — approved by the user to give the expanded Work section life without tipping into SaaS-marketing motion. Implemented in CSS + a small IntersectionObserver (`.reveal` in globals.css, `WorkCard.tsx`); no GSAP. Scope is limited to Work cards — the proof strip, hero, and detail-page sections stay static.
- **Forbidden by brief:** Animated counters, parallax, hero video, scroll-driven choreography, entrance animations on sections *other than the Work-card entrance above*.
- **Easing:** `ease-out` for enter, `ease-in` for exit, `ease-in-out` for shifts.
- **Duration:** UI motion stays under 250ms, with the single documented exception of the Work-card entrance (450ms). Anything longer feels theatrical and breaks the operator voice.

## Voice (tone reference)

First-person, direct, plainspoken. Operator voice: "I built a thing. Here's the number. Here's who paid for it."

**Allowed:** Specific clients by name, specific numbers, light dry humor, sentence fragments where they earn their place.

**Not allowed:** "Passionate about." "I help X do Y." Any phrase from the founder-LinkedIn vocabulary. Anything that calls itself out as a website ("welcome to my site"). Cross-references to CappaWork as "my company" — see `project-cappawork-context` memory.

**Specificity rule:** Every claim has a number or a name behind it or it gets cut.

## Anti-patterns (explicit refusals)

These are off-limits regardless of how well-implemented they might be:

- Testimonial carousel
- Logo wall (Michaels can be mentioned in prose; a logo wall reads as agency)
- "Services" or "packages" page or section
- Tech stack badges (Next.js icon, TypeScript icon, etc.)
- Animated counters on the proof numbers
- Hero video, parallax, scroll-driven animation
- Hero CTAs ("Hire me," "Book a call," etc. — distract from the credibility job)
- Contact form (a direct email feels like a person; a form feels like an agency)
- Purple gradient anywhere
- 3-column feature grid with icons in colored circles
- Centered everything
- Bubble border-radius on all elements
- system-ui as the display or body font

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-13 | Initial design system created from user-authored brief | User provided a complete strategic + aesthetic brief; this DESIGN.md captures it as a structured token reference. Source brief preserved at `~/.gstack/projects/nate_pinches/briefs/2026-05-13-design-brief.md`. |
| 2026-05-13 | Fraunces + Inter Tight + IBM Plex Mono as the open-source stack | Brief named Fraunces/GT Sectra/Tiempos for display and Inter Tight/ABC Diatype for body. Fraunces and Inter Tight are the immediately-shippable open variants on Google Fonts; IBM Plex Mono pairs warmly with Fraunces. Premium alternates noted in the type stack table for future upgrade. |
| 2026-05-13 | Dark mode deferred | Brief did not call for it; the warm paper aesthetic does not benefit from a dark equivalent. Revisit only if a clear need emerges. |
| 2026-05-13 | No accent except in 3 surgical spots above the fold | Brief: "accent color used surgically on one or two words." Extending: hero accent + proof-strip lead number + one inline link, then the accent disappears. Restraint is the differentiator from category. |
| 2026-06-02 | Added `/work/[slug]` case-study detail pages | User expanded Work to 8 case studies that must serve both prospective clients and technical evaluators. A one-liner card can't hold that depth, so cards now link to per-project detail pages. Deviates from the original single-scroll / "Not portfolio-grid" framing; homepage remains a single scroll. Content lives in `src/content/work.ts`. |
| 2026-06-02 | Work-card entrance motion (level A) | User requested motion on the cards. Chose the restrained option: fade + 12px rise on scroll-into-view, staggered, 450ms ease-out, once, reduced-motion safe. CSS + IntersectionObserver, no GSAP. Crosses the brief's "no entrance animations" rule and 250ms cap by explicit approval; scope limited to Work cards to avoid reading as SaaS-marketing motion. |
| 2026-06-03 | Work copy rewritten in Nate's first-person voice; card blurbs and detail intros cut hard | Earlier card/detail copy was a third-person wall of text. User rewrote each project in his own plainspoken first-person voice ("I needed a CRM… so I built it"). Card blurbs are now 1–3 short sentences; detail-page intros are a tight 1–2 short paragraphs. Matches the brief's operator voice; trades exhaustive technical narrative for legibility. Apostrophes/quotes normalized to curly across `work.ts` (FIND-013). |
| 2026-06-03 | Logo watermark backdrop + favicon/app-icon set | User supplied brand assets (`Natelogos/`). Favicon via Next file conventions (`app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`) plus a web manifest (`app/manifest.ts`, 192/512 PNGs). NP mark added as a faint fixed backdrop (see Layout → Logo backdrop). First decorative graphic on the site; kept near-invisible to respect restraint. |
