# Handoff: Made By Zaye — Portfolio Site (Concept 2b)

## Overview
A single-page portfolio site for Zaye, a Product Design Lead / Creative Technologist. One scrolling page: header, hero with at-a-glance facts, a scrolling skills marquee, a three-up "Selected work" grid on a red band, a featured case study, an experience list, and a contact footer.

Concept 2b is the "slicker" direction: white ground, hairline rules, Archivo Black display type, and red (#CC0101) used as a scalpel — plus one full-bleed red band behind Selected work.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, Astro, Vue, etc.) using its established patterns, component structure, and styling approach. If no codebase exists yet, choose the most appropriate framework and implement it there. The HTML uses hand-written CSS with custom properties; translate those values into the project's own token/theme system rather than shipping this stylesheet as-is.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, shadows, hover states and animation timings are final. Recreate pixel-perfectly. The only unfinished content is imagery: every striped rectangle is a placeholder labeled with the intended filename.

## Screens / Views

### Single page — desktop (≥ 641px) and mobile (≤ 640px)
Purpose: convince a hiring manager or client within one scroll, then hand off to email.

Page background `#FFFFFF`, text `#000000`. Horizontal gutter is `56px` desktop / `20px` mobile (CSS var `--gutter`). Full-width sections; no max-width container — content spans the viewport minus gutters.

#### 1. Header
- Layout: flex, space-between, center-aligned. Padding `24px 56px` (mobile `16px 20px`). Bottom border `1px solid rgba(0,0,0,.1)`.
- Logo: `assets/madebyzaye-logo.svg`, height `34px` (mobile `26px`), width auto.
- Nav: flex, gap `32px`, `12px/1` Archivo 500, letter-spacing `.1em`, uppercase. Links "Work", "About", "Writing" in `rgba(0,0,0,.55)`.
- Nav CTA "Get in touch": `1px solid #000`, padding `10px 18px`, radius `999px`. Hover: background and border `#CC0101`, text `#fff`, transition `.2s`.
- Mobile: the three text links are hidden; only the CTA remains, relabeled "Contact" if desired (font `10px`, padding `9px 16px`).

#### 2. Hero
- Layout: grid `1fr 320px`, gap `72px`, `align-items:end`, padding `88px 56px 72px`. Entry animation `rise .6s ease both` (fade up 14px).
- Mobile: single column, gap `26px`, padding `34px 20px 30px`.
- Eyebrow: flex, gap `12px`, `11px/1` Archivo 500, letter-spacing `.24em`, uppercase, `rgba(0,0,0,.45)`; preceded by a `28px × 1px` red rule (mobile `20px`). Text: "Creative Technologist".
- H1: Archivo Black `116px`, line-height `.9`, letter-spacing `-.06em`. Copy: "Creating what I wish existed." — the final period is `#CC0101`. Mobile `52px`, line-height `.92`, letter-spacing `-.055em`.
- Lede: `19px/1.6` Archivo 400, `rgba(0,0,0,.62)`, `max-width:54ch`, `text-wrap:pretty`, margin-top `36px`. Mobile `15px`, margin-top `20px`. Copy: "Product Design Lead using AI to create meaningful experiences. Twelve years shaping UX at Geico, CNN and Publicis Sapient — complex systems, aligned teams, products that feel personal."
- Buttons (flex, gap `12px`, margin-top `38px`; mobile stacked full-width, gap `10px`):
  - Primary "Explore my work" — background `#000`, text `#fff`, padding `17px 30px`, radius `999px`, `13px/1` Archivo 600, letter-spacing `.1em`, uppercase. Hover background `#CC0101`.
  - Secondary "Résumé" — transparent, border `1px solid rgba(0,0,0,.18)`, text `rgba(0,0,0,.65)`.
- Facts column (right, 320px): stacked rows, top border and per-row bottom border `1px solid rgba(0,0,0,.1)`, each row padding `18px 0`.
  - Row key: `10px/1` Archivo 500, letter-spacing `.22em`, uppercase, `rgba(0,0,0,.4)`.
  - Row value: Archivo Black `24px/1`, letter-spacing `-.03em`.
  - Rows: "Now building / BrotherSignal", "Experience / 12 years", "Status / Open to work".
  - Status value is `15px/1` Archivo 600 preceded by a `7px` red dot, `border-radius:50%`, animation `blink 1.6s steps(1) infinite` (hard on/off, 50% duty).
  - Mobile: only the Status row shows, laid out as a single space-between row under a `1px` top hairline (padding-top `16px`).

#### 3. Marquee band
- Container: background `#000`, text `#fff`, padding `15px 0`, `overflow:hidden`, top border `1px solid rgba(0,0,0,.1)`.
- Track: flex, `width:200%`, gap `26px`, `white-space:nowrap`, Archivo Black `30px/1`, letter-spacing `-.03em`. Animation `mq 22s linear infinite` translating `0 → -50%`.
- Content is the four phrases repeated exactly twice so the loop is seamless: "Product Thinking", "Creative Direction", "Frontend w/ AI", "Prototyping", each followed by a `✳` in `#CC0101`.
- Mobile: padding `11px 0`, font `20px`, gap `16px`, duration `16s`, no top border.
- Decorative — mark `aria-hidden="true"`. In a component implementation, duplicate the phrase list programmatically rather than by hand.

#### 4. Selected work
- Band: background `#CC0100`, padding `72px 56px` (mobile `32px 20px`).
- Head: flex, space-between, baseline, margin-bottom `38px` (mobile `20px`). H2 "Selected work" Archivo Black `40px/1`, letter-spacing `-.045em`, `#FFFFFF` (mobile `30px`). Right label "Three of twelve", `11px/1` Archivo 500, letter-spacing `.2em`, uppercase, `rgba(0,0,0,.4)` — hidden on mobile.
- Grid: `repeat(3,1fr)`, gap `28px`. Mobile: single column, gap `16px`.
- Card: background `#fff`, radius `14px`, `overflow:hidden`, shadow `0 1px 2px rgba(0,0,0,.06)`. Hover: shadow `0 18px 40px rgba(0,0,0,.12)` and `translateY(-5px)`, transition `.25s` on both.
- Card image slot: height `230px` (mobile `165px`), placeholder fill `repeating-linear-gradient(135deg,#f0eae1 0 10px,#fff 10px 20px)`, filename label bottom-left, padding `14px`, JetBrains Mono `11px/1`, `rgba(0,0,0,.42)`.
- Card body padding `22px 22px 24px` (mobile `18px`):
  - Kicker `10px/1` Archivo 500, letter-spacing `.2em`, uppercase, `#CC0101`.
  - Title Archivo Black `27px/1.05`, letter-spacing `-.035em`, margin-top `12px` (mobile `24px`).
  - Description `15px/1.55` Archivo 400, `rgba(0,0,0,.6)`, margin-top `10px` (mobile `14px`).
- Cards, in order:
  1. `brothersignal-hero.jpg` · Product · 2026 · **BrotherSignal** · "An SMS platform delivering culturally relevant daily affirmations."
  2. `candypaint-cover.jpg` · Identity · 2025 · **Candy Paint** · "Generative type, motion and machine-made texture."
  3. `usbank-flow.jpg` · Enterprise UX · 2024 · **US Bank** · "One system across a fragmented product estate."

#### 5. Featured case study
- Section: background `#F7F1EA`, padding `76px 56px`, grid `1fr 1fr`, gap `64px`, `align-items:center`.
- Mobile: single column, gap `20px`, padding `32px 20px`; the image slot moves **below** the copy (`order:2`).
- Eyebrow "Case study" — same eyebrow spec but color `#CC0101`.
- H3 Archivo Black `62px`, line-height `.95`, letter-spacing `-.05em`, margin-top `22px`. Copy: "Quiet affirmations at scale". Mobile `42px`, margin-top `16px`.
- Body `18px/1.6` Archivo 400, `rgba(0,0,0,.62)`, `max-width:42ch`, margin-top `22px` (mobile `15px`). Copy: "How BrotherSignal turned a text message into a daily ritual for Black men — consent-first, no app required."
- CTA "Read the case study →": background `#CC0101`, text `#fff`, padding `17px 30px`, radius `999px`, `13px/1` Archivo 600, letter-spacing `.1em`, uppercase, margin-top `30px`. Mobile: full-width, centered, `16px` padding.
- Image slot: height `340px` (mobile `200px`), radius `14px`, border `1px solid #000`, fill `repeating-linear-gradient(135deg,#f0eae1 0 10px,#F7F1EA 10px 20px)`, filename label bottom-left `case-study-screens.png`, padding `16px` (mobile `12px`).

#### 6. Experience
- Section padding `48px 56px 76px` (mobile `36px 20px 32px`), white ground.
- H2 "Experience" Archivo Black `40px/1`, letter-spacing `-.045em`, margin-bottom `30px` (mobile `30px` font, `14px` margin).
- Rows: grid `150px 1fr 200px`, gap `24px`, padding `22px 0`, top border `1px solid rgba(0,0,0,.12)`; last row also gets a bottom border. `align-items:baseline`. Hover: `padding-left:12px`, transition `.25s`.
- Columns: date `12px/1` Archivo 500, letter-spacing `.14em`, `#CC0101`; role Archivo Black `24px/1`, letter-spacing `-.03em`; company `15px/1.4` Archivo 400, `rgba(0,0,0,.5)`.
- Mobile: single column, gap `6px`, padding `16px 0`, no hover indent; sizes `11px / 19px / 14px`.
- Rows: "2021 — NOW / Product Design Lead / Publicis Sapient", "2018 — 2021 / Senior UX Designer / CNN", "2014 — 2018 / UX Designer / Geico".

#### 7. Footer
- Background `#000`, text `#fff`, padding `76px 56px`, flex space-between with `align-items:flex-end`.
- Lead: Archivo Black `82px`, line-height `.92`, letter-spacing `-.055em`. Copy: "Let's build it." — final period `#CC0101`.
- Email button: background `#fff`, text `#000`, padding `17px 30px`, radius `999px`, `13px/1` Archivo 600, letter-spacing `.1em`, uppercase, margin-top `26px`. Links to `mailto:hey@madebyzaye.com`.
- Right meta: right-aligned `15px/1.8` Archivo 400, `rgba(255,255,255,.6)`. "LinkedIn · GitHub · Bluesky" / "© 2026 Made By Zaye".
- Mobile: column, stretched, gap `20px`; lead `46px`; button full-width centered; meta left-aligned `13px`.

## Interactions & Behavior
- **Nav / CTAs**: anchor navigation to `#work`, `#about`, `#contact`; the email button is a `mailto:` link. Real destinations for "Writing", "Résumé", and the case-study CTA are still TBD — wire them to routes once the pages exist.
- **Hover states**: nav CTA fills red; primary dark button fills red; work cards lift `-5px` with a deeper shadow; experience rows indent `12px`. All `.2s`–`.25s`, default easing.
- **Marquee**: infinite horizontal loop, `22s` desktop / `16s` mobile, `linear`, translate `0 → -50%` on a `200%`-wide track holding two copies of the list. Never pauses.
- **Status dot**: `blink 1.6s steps(1) infinite` — instant on/off, not a fade.
- **Hero entry**: fade + 14px rise over `.6s` on load. No other scroll-triggered animation in this concept; if the codebase has a reveal-on-scroll pattern, applying it to section headings is acceptable but not specified.
- **Reduced motion**: the prototype disables the marquee, blink and hero rise under `prefers-reduced-motion: reduce`. Keep this.
- **Responsive**: single breakpoint at `640px`. Everything is fluid within each mode; the desktop layout is designed at `1280px` and the mobile at `390px`. There is no tablet-specific layout — verify the 641–900px range and, if it feels cramped, collapse the work grid to two columns there.
- No loading, error or form states — the page is static content.

## State Management
None required. The page is fully static: no data fetching, no client state, no interactive components beyond CSS hover and anchor navigation. If work items and experience rows are moved into a CMS or a local data file, model them as:
- `WorkItem { image, kicker, title, description, href }`
- `ExperienceRow { period, role, company }`
- `Fact { label, value }` (hero facts)

## Design Tokens

Colors
- Red (accent): `#CC0101`
- Red (Selected work band): `#CC0100`
- Black: `#000000`
- White: `#FFFFFF`
- Cream: `#F7F1EA`
- Placeholder stripe: `#f0eae1`
- Hairline: `rgba(0,0,0,.1)` · stronger hairline `rgba(0,0,0,.12)` · button border `rgba(0,0,0,.18)`
- Ink tints: `.62` body, `.6` card body, `.55` nav, `.5` company, `.45` eyebrow, `.42` slot label, `.4` fact key
- Footer meta: `rgba(255,255,255,.6)`

Spacing
- Gutter `56px` desktop / `20px` mobile
- Section padding: hero `88/72`, work `72`, case `76`, experience `48/76`, footer `76` (mobile `30–36`)
- Grid gaps: `72px` hero, `28px` work, `64px` case, `24px` experience row
- Rhythm within blocks: `10 · 12 · 16 · 18 · 20 · 22 · 26 · 30 · 38`

Typography
- Display: **Archivo Black** 400 — 116 / 82 / 62 / 40 / 27 / 30 / 24 (mobile 52 / 46 / 42 / 30 / 24 / 19)
- UI + body: **Archivo** 400/500/600 — 19 / 18 / 15 / 13 / 12 / 11 / 10
- Mono: **JetBrains Mono** 500, 11px — placeholder filenames only
- Letter-spacing: display `-.03em` to `-.06em` (tighter as size grows); uppercase micro-labels `+.1em` to `+.24em`
- Line-height: display `.9`–`1.05`; body `1.55`–`1.6`; micro-labels `1`

Radius
- `14px` cards and image slots · `999px` pills · `50%` status dot

Shadow
- Card rest `0 1px 2px rgba(0,0,0,.06)` · card hover `0 18px 40px rgba(0,0,0,.12)`

## Assets
- `assets/madebyzaye-logo.svg` — the Made By Zaye wordmark, included in this bundle. Use as-is; do not recolor.
- Fonts load from Google Fonts (Archivo, Archivo Black, JetBrains Mono). Self-host or use the codebase's font pipeline in production.
- **All imagery is still missing.** Every striped rectangle is a placeholder labeled with its intended filename: `brothersignal-hero.jpg`, `candypaint-cover.jpg`, `usbank-flow.jpg`, `case-study-screens.png`. Zaye will supply real screenshots; keep the aspect ratios implied by the slot heights (`230px` at ~1/3 of a 1280 grid; `340px` at half width).
- No icon set is used. The only glyphs are the `✳` asterisk in the marquee and `→` in the case-study CTA — plain text characters, not icons.

## Files
- `index.html` — the full responsive design reference (desktop and mobile in one document, breakpoint at 640px). This is the file to recreate.
- `assets/madebyzaye-logo.svg` — logo asset.

Source of truth in the design project: `Madebyzaye Redesign.dc.html`, option **2b** ("Slicker — white ground, hairline grid, red as a scalpel"), which also contains the 2a and 2c alternatives for context.
