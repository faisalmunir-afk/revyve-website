# Revyve — website

A rebuild of `revyveholdings.com` with a new visual identity. Every word of Revyve's
copy is reused verbatim; only the design changed.

**The site is V3**, in `app/(v3)/`, served at the root. Built: `/`, `/about/`,
`/revyve-ai/`, `/for-practices/`, `/sell-your-firm/`, `/careers/`, `/contact/`.
Not built yet: `/team/`, `/press/`, `/press/why-we-built-revyve/`, `/privacy/`.

The two earlier versions are kept for reference at `/v1/` and `/v2/`. Old `/v3/...`
links redirect to the root (see `vercel.json`).

All copy lives in `app/content/`, transcribed verbatim from revyveholdings.com.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export into out/
node scripts/serve-out.mjs 4321   # serve the export at http://127.0.0.1:4321
```

The export uses absolute asset paths, so it must be served from a web root. Opening
`out/index.html` straight off the disk will not load its CSS or images.

## The art direction

Built with [tasteskill v2](https://github.com/Leonxlnx/taste-skill), installed at
`.agents/skills/design-taste-frontend`. The direction was dealt, not chosen:

| | |
| --- | --- |
| Direction | **The split stage** · seed `2009664481` · sector health · tone technical |
| Type | **Clash Grotesk**, one family, self-hosted in `public/fonts/` |
| Colour | **Green-black and bone** — `#161c1a` ground, `#e3e2da` ink, `#9fc7b8` accent |
| Hero | Menu column, sticky photograph (redrawn) |
| Sections | Itinerary on a slip → Input half, output half → A plain sentence, one action → Answers as reading text → Name across the last photograph |
| Motion | The claim ages against the scroll |

The sheet is saved at `.taste-skill/direction.json`; reprint it with:

```bash
node .agents/skills/design-taste-frontend/scripts/draw.mjs --show
```

### The idea

> On this page, the ticked line items of an 1851 account from Main and Olive Street,
> St. Louis, and the aged claim that is its direct descendant, become the fixed half of
> the split stage: one claim stays on screen for the whole visit, being worked line by
> line, while the argument scrolls past it.

Revyve's mark is a check. The ticks in the margin of that 1851 account are the same
gesture: a person confirming a line. Full notes in [`notes/idea.md`](notes/idea.md).

## The gate

The house rules are mechanically enforced. Both must stay clean:

```bash
node .agents/skills/design-taste-frontend/scripts/lint.mjs app
node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://127.0.0.1:4321/
```

Current state: **0 FAIL, 2 WARN**, both defended in
[`notes/critique-home.md`](notes/critique-home.md).

### Rules that will bite you

Tailwind's defaults are exactly what the inspector fails. When editing:

- no `shadow-*`, no `bg-gradient-*`, no `backdrop-blur-*`, no mid border radii
- no monospace, no eyebrow labels above headings, no `01 / 02 / 03` numbering
- no 1px rules outside a `[data-ui]` root
- headlines must fit **two lines at every width**, including 390px
- every hidden starting state goes inside `@media (prefers-reduced-motion: no-preference)`
  and is armed by script, so neither a reduced-motion visitor nor a visitor without
  script is ever shown a hidden element

## Layout

```
app/
  layout.tsx            metadata, fonts, global CSS
  page.tsx              home; owns the selected claim and the scroll-linked ageing
  globals.css           tokens; everything downstream references these only
  page.css              the page's compositions
  data/claims.ts        the three claims behind the live thing (SAMPLE CONTENT)
  components/
    Hero.tsx            the sheet
    ClaimStage.tsx      the fixed half, a real [data-ui] interface fragment
    HundredDays.tsx     the printed slip
    RevyveAI.tsx        input half / output half
    Close.tsx           the plain sentence
    Questions.tsx       answers as reading text
    SiteFooter.tsx      the name across the last photograph
    Rise.tsx            the section entrance
public/
  archive/              six public-domain pictures, credited in the footer
  brand/                Revyve's own logo, wordmark and the founder-background logos
  fonts/                Clash Grotesk
notes/                  the argument, the idea, the copy deck, the critique
assets/credits.json     source and licence for every found picture
```

## Before launch

- **Replace or confirm the three claim records in `app/data/claims.ts`.** They are real
  in shape and invented in detail. No real patient, practice or payer is named.
- The seven founder-background logos in `public/brand/` are downloaded but not yet used
  on the home page; they belong on `/team/`.
- No privacy policy yet — the live site says one will be published before launch.
