# Revyve — Brand Guidelines for Presentations

Use this document to design a Revyve pitch deck that looks and reads like
revyveholdings.com. Every rule here comes from the live website. Where the
document gives an exact value (a hex code, a font weight, a size), use that
value. Do not substitute close alternatives.

The files referred to below sit beside this document in the `brand-kit` folder:

```
brand-kit/
  REVYVE-BRAND-GUIDELINES.md     this document
  logo/revyve-logo.png           stacked logo: faceted check above the wordmark
  logo/revyve-wordmark.png       wordmark only, one line
  fonts/Manrope-Variable.woff2   the brand typeface, weights 200 to 800
  fonts/IBMPlexMono-Regular.woff2
  fonts/IBMPlexMono-Medium.woff2 the technical face, for small labels only
  facets/facet-field-wide.svg    the facet artwork, wide version (16:9 slides)
  facets/facet-band-narrow.svg   the facet artwork, narrow band version
  facets/facet-pattern-tile.svg  a repeating facet tile, for faint texture
```

---

## 1. Who Revyve is

Revyve is an AI-native holding company for healthcare services. It buys
established healthcare services businesses, keeps their people and customers,
and changes how the work gets done. Its first company is a 29-year-old medical
billing firm in St. Louis. Its platform, Revyve AI, runs under every company it
owns. It is based in San Francisco, with operations in St. Louis.

The brand should feel **calm, exact and confident**: a company that runs
real businesses, not a startup selling a demo. Dark, deep and quiet, with one
violet accent and one cool light.

---

## 2. Voice and copy rules

These rules matter as much as the visuals.

1. **Use the client's words.** Take headlines and body copy from the content
   supplied. Do not rewrite, shorten, "improve" or re-punctuate it.
2. **Never invent numbers.** No statistics, percentages, client counts,
   revenue figures, logos or testimonials unless they appear in the supplied
   content. If a slide seems to need a number and none is supplied, leave the
   number out.
3. **Plain and specific.** Short declarative sentences. No hype words
   ("revolutionary", "game-changing", "seamless", "unlock", "supercharge").
   No exclamation marks. No emoji.
4. **Sentence case** for every headline. Headlines that are full sentences end
   with a full stop, as on the site: "Keep what works." "Write to us."
5. **One idea per slide.** A headline and, at most, a short paragraph or a
   small set of parallel points.
6. **No small labels above headings** (eyebrows) as decoration. A date, a
   section name or a source line is fine when it carries information.
7. **No numbered markers** like "01 / 02 / 03" as decoration. Show order by
   position.

Reference lines from the website, quoted exactly (use them only where the deck
content calls for them):

- "We buy good healthcare businesses and make them run better."
- "Revyve owns and operates healthcare services companies, starting with
  medical billing. We keep the people and customers that made each business
  good, and we change how the work gets done."
- The first hundred days: "Keep what works." "Map the work." "Prove one
  thing." "Make it repeatable."
- "Operators, engineers and physicians. The same four people."
- "Every claim followed up. Every action visible."
- "Built something that works? We'd like to run it."

---

## 3. Logo

**Files**

| File | What it is | Use it for |
| --- | --- | --- |
| `logo/revyve-logo.png` (600×359) | The faceted violet check, stacked above the REVYVE wordmark | Title slide, closing slide |
| `logo/revyve-wordmark.png` (480×94) | REVYVE on one line; the V is the violet check | Slide footers, headers, small placements |

Both files are **white lettering with a violet check, on a transparent
background**. They are drawn for dark backgrounds.

**Rules**

- Place the logo on the dark brand backgrounds (`#07041a`, `#0b0622` or the
  brand gradient). This is the default.
- On the light paper background, the website shows the wordmark in solid
  near-black. If you need the logo on paper, render the letters in `#140d2d`
  and keep the check violet. Never place the white artwork on white or paper.
- Clear space: keep empty space around the logo at least equal to the height
  of the wordmark's letters.
- Minimum size: wordmark at least 120 px wide on a 1920 px slide.
- Do not recolour the check, stretch, rotate, outline, add a shadow, add a
  glow, or put the logo inside a box or pill.

---

## 4. Colour

Revyve is **dark-first**. Most slides sit on the deep indigo ground, with light
text. Paper slides are used occasionally for contrast, such as a reading slide
or a dense table.

### Core palette

| Name | Hex | Role |
| --- | --- | --- |
| Abyss | `#07041a` | The main background. Most slides use this. |
| Deep | `#150c38` | One step up from Abyss: raised panels, cards. |
| Violet | `#6420d4` | The brand colour. Primary buttons, key accents, the logo check. Use sparingly. |
| Lilac | `#b689f8` | The brand's light: links, small accents, line drawings, highlighted words. |
| Ice | `#dce6ff` | Text on dark backgrounds, and the cool highlight. |
| Muted | `#8d85ac` | Secondary text on dark: captions, legal lines, notes. |
| Signal | `#6fe3d6` | The "it worked" colour: a completed step, a result, a tick. Small amounts only. |

Text on dark backgrounds: headlines in Ice `#dce6ff` at full strength. Body
paragraphs in Ice at about 75% opacity (`rgba(220, 230, 255, 0.75)`).
Captions in Muted.

### Paper palette (light slides)

| Name | Hex | Role |
| --- | --- | --- |
| Paper | `#f5f4fb` | Light slide background. A cool off-white, never pure white. |
| Ink | `#140d2d` | Headlines and strong text on paper. |
| Ink 2 | `#3c3459` | Body text on paper. |
| Paper muted | `#6b6389` | Captions on paper. |
| Paper link | `#5a1ccc` | Links and accents on paper. |

### Surfaces and gradients

The site uses gradients only as quiet surfaces, never as loud decoration.

| Surface | Value |
| --- | --- |
| Card | `linear-gradient(160deg, #1b0f47 0%, #120a33 55%, #0c0726 100%)` with a 1 px border in Lilac at 16% (`rgba(182, 137, 248, 0.16)`) |
| Brand panel (statement slides) | `linear-gradient(160deg, #2a0f63 0%, #190e40 52%, #0f0829 100%)` |
| Footer band | `linear-gradient(to bottom, #110a2e 0%, #0b0622 100%)` |
| Drawing plate | `#1b0f45` fill; highlighted shapes `#3d1b8f` |

The home page hero has a soft, slowly drifting field of violet light behind the
headline: Abyss with a large, blurred glow of Violet `#6420d4` and Lilac
`#b689f8` near the top centre, darkening to Abyss at the bottom and edges.
Use this look **only on the title slide**, as a soft, out-of-focus background.

### Proportions

Roughly 70% Abyss and Deep, 20% Ice text and paper, under 10% Violet, Lilac and
Signal combined. If a slide looks purple overall, there is too much accent.

---

## 5. Typography

### Typefaces

| Face | File | Use |
| --- | --- | --- |
| **Manrope** | `fonts/Manrope-Variable.woff2` (weights 200–800) | Everything: headlines, body, buttons, captions |
| **IBM Plex Mono** | `fonts/IBMPlexMono-Regular.woff2`, `-Medium.woff2` | Rarely: a code-like label, a pronunciation, a system name. Never for headlines or body text. |

If Manrope cannot be loaded, the fallback order is "Segoe UI", system-ui,
sans-serif. Do not use any other display or serif font.

### Weights

- **Headlines: Manrope 500 (Medium).** Not bold, not light.
- **Statements set large** (a single sentence as the slide's main content):
  Manrope 400.
- **Body text: Manrope 400 (Regular).**
- **Card titles, sub-headings:** Manrope 500. Small sub-headings in body text: 600.
- **Buttons and small UI labels:** Manrope 500.
- Never use 700 or 800 for headlines, and never use weights under 400 for text.

### Scale for a 1920 × 1080 slide

| Style | Size | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- |
| Title (cover slide) | 104–120 px | 500 | 1.0 | −0.03em |
| Slide headline | 64–80 px | 500 | 1.04 | −0.024em |
| Section headline (on cards, columns) | 44–52 px | 500 | 1.08 | −0.02em |
| Large statement | 40–48 px | 400 | 1.25 | −0.012em |
| Lead paragraph | 30–34 px | 400 | 1.45 | 0 |
| Body | 24–28 px | 400 | 1.55 | 0 |
| Caption, source, legal | 18–20 px | 400 | 1.4 | 0 |
| Diagram label | 16–18 px | 400 | 1.2 | +0.02em |

Rules:

- Headlines are short: aim for one or two lines. Split a two-sentence headline
  at its own full stop, one sentence per line.
- Keep body lines under about 60 characters wide.
- Left-align text by default. Centre only the cover, section dividers and a
  single centred statement.
- No all-caps headlines. No underlines except on links.

---

## 6. Layout and grid (16:9, 1920 × 1080)

- **Margins:** 96 px left and right, 80 px top and bottom.
- **Grid:** 12 columns, 32 px gutters.
- **Common splits:** words left / picture right at about 45/55; or a headline
  across the top with two to four cards beneath.
- **Whitespace:** generous. If a slide feels full, split it into two slides.
- **Footer line (optional on content slides):** the wordmark at about 120 px
  wide, bottom-left, and a small page number bottom-right in Muted.
- **Corners:** cards and panels 14–16 px radius. Buttons 2 px (almost square).
  Pills and round markers fully round. Nothing in between.
- **Lines:** hairlines at 1 px, in Ice at 10–12% opacity on dark, or Ink at 14%
  on paper, only to separate a heading from its content or a list's rows.
- No drop shadows anywhere.

---

## 7. Graphic language

### 7.1 Line drawings (the main illustration style)

Revyve explains itself with simple, flat line drawings, made from the content
of the slide they sit on: documents, ledgers, calendars, people, claims moving
along a line, checks along a timeline.

- **Strokes:** 1.4–2 px at 1920 px slide width, round caps and joins.
- **Colours:** shapes in Lilac `#b689f8` at 45–70% opacity; filled tiles in
  `#1b0f45`, the highlighted one in `#3d1b8f`; the line that shows the result
  or the finished step in Signal `#6fe3d6`.
- **Labels inside drawings:** Manrope 400, 16–18 px, Ice at 66% opacity, or
  Signal for the outcome. **Every label must be a phrase taken from the
  slide's own copy.**
- **Icons:** the same line style, 24-unit grid: document, ledger, calendar,
  bars, inbox, form, folder, clock, envelope, shield, checklist, person.
- Drawings sit on Abyss, or on a dark plate when placed on a paper slide, often
  framed by one faint circle in Lilac at 14% opacity.
- No 3D, no isometric views, no gradients inside icons, no clip-art people, no
  emoji, no stock illustration packs.

### 7.2 The facets (Revyve's own artwork)

The faceted triangles of the logo, scattered into a field. Use the supplied
files exactly; do not redraw them.

- `facets/facet-field-wide.svg`: for a cover, a section divider or a closing
  slide. Place it at the right edge, bleeding off the slide, at 35–60%
  opacity, fading towards the text.
- `facets/facet-band-narrow.svg`: a horizontal band along the bottom of a slide.
- `facets/facet-pattern-tile.svg`: repeat at 120 × 104 px at about 10% opacity
  as a faint texture behind a section divider. Never behind body text.
- Facet colours, for reference: `#261A55`, `#6420D4`, `#7028E8`, `#B878F8`,
  `#110C38`.
- One facet element per slide at most, and not on every slide.

### 7.3 The check

The Revyve mark is a check: a person confirming a line of work. Small Signal or
Violet ticks can mark completed steps in a process or timeline. Don't use the
logo itself as a bullet.

### 7.4 Photography and logos

- The website uses no photography. Prefer line drawings. If a photo is
  essential, use a real one supplied by the client, never stock photos of
  doctors, handshakes or people at laptops.
- Founder-background logos (Amazon, Y Combinator, TAG, BNY Mellon, trivago,
  UCLA, Icahn School of Medicine at Mount Sinai, Plug and Play) are shown
  together under the heading "Background of the team", in white or a single
  light tint on a dark background. They are the founders' background, **never
  clients, partners or press**, and must never be captioned as such.

---

## 8. Components

**Primary button / call to action:** Violet `#6420d4` fill, white text,
Manrope 500 at body size, 2 px corners, generous horizontal padding.

**Secondary button:** transparent, 1 px border in Ice at 24%, Ice text,
2 px corners.

**Text link:** Lilac on dark (`#5a1ccc` on paper) with a thin underline.

**Card:** the card gradient from section 4, 1 px Lilac 16% border, 14 px
corners, 48–56 px inner padding. Inside: an optional line icon at about 56 px,
a title in Manrope 500, then body text in Ice at 72%.

**Statement panel:** the brand panel gradient, one sentence in Manrope 400 at
40–48 px, nothing else.

**Process / timeline:** a single horizontal line with round nodes; completed
nodes get a Signal tick. Step titles in Manrope 500 and one line of detail
underneath.

**Table:** used rarely, on paper. Ink text, 1 px row dividers, no fills and no
zebra stripes. Right-align figures.

**Charts:** only when the supplied content contains the numbers. Flat bars or
lines in Lilac and Violet, with Signal for the highlighted value. No 3D, no
pie charts, no gradient fills, no gridline clutter.

---

## 9. Slide templates for a pitch deck

Use these as the deck's building blocks. Adapt the order to the content.

1. **Cover.** Abyss background with the soft violet light field near the top
   (section 4). The stacked logo, or the wordmark plus the title in Manrope 500
   at 104–120 px, centred. One supporting line in Ice at 75%. Optional facet
   field at the right edge.
2. **The claim.** One headline across the slide, left-aligned, 64–80 px.
   A lead paragraph beneath, at most 60 characters wide.
3. **Problem / opportunity.** Headline on the left, a line drawing on the right
   built from the slide's own phrases.
4. **How it works (process).** Headline on top; four steps on one line with
   nodes and Signal ticks. Example: Keep what works → Map the work → Prove one
   thing → Make it repeatable.
5. **Platform.** Headline left; a simple diagram right: the systems the
   business already runs on, then the shared platform, then the work done, as
   blocks connected by single lines.
6. **Four-card grid.** Headline on top, four cards in a 2 × 2 or 4 × 1 grid.
7. **Statement.** The brand panel gradient with one sentence. Use it once or
   twice in a deck, to land a key idea.
8. **Evidence / results.** Only with numbers from the supplied content. One
   large figure per idea at 96–120 px in Ice, with its plain-language label
   under it in Ice at 75%, and its source in Muted.
9. **Team.** Four plain cards: name (Manrope 500), role in Lilac, a short bio.
   No photos unless the client supplies them. Optionally the "Background of the
   team" logo row beneath.
10. **Section divider.** Abyss, or Abyss with the faint facet pattern tile; one
    short headline, centred.
11. **Reading slide (dense text).** Paper background, Ink headline, Ink 2 body
    in one column of about 60 characters.
12. **Closing / contact.** Abyss with the facet field at the right; the
    wordmark; "Write to us." as the headline; hello@revyveholdings.com large in
    Manrope 400; "Revyve, Inc. San Francisco and St. Louis." in Muted.

Keep a deck to one visual system. The same margins, the same headline size and
the same position for the headline on every content slide.

---

## 10. Motion (if the deck is animated)

- Elements arrive with a short fade and a slight upward move (8–16 px), or a
  fade with a soft blur clearing, over 400–700 ms, staggered by about 80 ms.
- Line drawings draw themselves on stroke by stroke; labels fade in after their
  line.
- Slide transitions: simple fade. No spins, flips, bounces, zooms or
  3D cube transitions.
- Nothing follows the mouse or moves on its own in a loop, except the slow drift
  of the facet field or the cover's light field.

---

## 11. Do and don't

**Do**

- Keep most slides dark, with Ice text and one violet accent.
- Use Manrope 500 for headlines and 400 for text, everywhere.
- Explain with simple line drawings whose labels come from the slide's copy.
- Leave plenty of empty space.
- Use the client's exact words and only the client's numbers.

**Don't**

- Don't add glows, neon edges, glass or frosted panels, or drop shadows.
  The client has explicitly rejected glowing cards as "AI slop".
- Don't use 3D icons, isometric illustrations, or stock imagery.
- Don't use gradient-filled text, rainbow gradients or more than one accent
  colour per slide.
- Don't use bold or extra-bold (700–800) for headlines, or light weights for
  body text.
- Don't use pure white `#ffffff` or pure black `#000000` as backgrounds.
- Don't put decorative labels above headings or "01 / 02" numbering.
- Don't present the founders' background logos as clients or partners.
- Don't invent statistics, testimonials, quotes or customer names.

---

## 12. Quick reference

```
Background      #07041a   Abyss (default)        Paper      #f5f4fb
Raised          #150c38   Deep                   Ink        #140d2d
Brand           #6420d4   Violet                 Ink 2      #3c3459
Light accent    #b689f8   Lilac                  Muted      #8d85ac
Text on dark    #dce6ff   Ice                    Result     #6fe3d6  Signal

Type            Manrope 500 headlines, 400 text; IBM Plex Mono for rare labels
Slide           1920 x 1080, margins 96 / 80 px, 12 columns, 32 px gutters
Corners         cards 14-16 px, buttons 2 px, pills round
Effects         none: no shadows, no glows, no 3D
Contact         hello@revyveholdings.com
Legal line      Revyve, Inc. San Francisco and St. Louis.
```
