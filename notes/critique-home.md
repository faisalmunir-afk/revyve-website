# Home — critique (references/critique.md §4)

```
ROUND 1
Seen in one second: a holding company that buys medical billing firms, with a real
  unpaid claim open on the right half of the screen.
Idea (one sentence): the ticked line items of an 1851 account from Main and Olive
  Street, St. Louis, and the aged claim that is its direct descendant, become the fixed
  half of the split stage, so one claim stays on screen being worked line by line while
  the argument scrolls past it.
Live thing: the claim selector. Three real-shaped aged claims; picking one drives both
  the fixed half and the input/output section, and the claim ages against the scroll,
  crossing the 120-day line while the reader is still reading.
Layout words by section: hero=sheet beside a sticky record / hundred-days=reading column
  with a printed slip and two archival pictures / revyve-ai=two full-width fields meeting
  on a vertical edge, then a two-column prose grid / close=sentence and actions left,
  placed photograph right / questions=heading left, two columns of reading text right /
  footer=full-bleed photograph with the name across the bottom.
Scores: design 7.5 · usability 8 · creativity 8 · content 9 → overall 7.9
Caps applied: none. 0 FAIL from inspect.mjs at 1440/768/390; no eyebrow, monospace,
  index numbering, gradient, resting shadow or decorative hairline in any screenshot;
  5 real pictures plus 2 interface fragments, above the floor of 4; a real button for
  the primary action on the first screen; one live thing; margins equal; no blank
  stretch over half a screen.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. The dark input field of the Revyve AI section carries roughly 190px of empty ground
   between the remittance text and the heading at its foot (desktop-page-02.jpg, top
   left tile). The field is set to 86svh but the raw remittance is only six lines, so
   the void reads as unfilled rather than placed. Fix: let the field's height follow its
   content, or give the left half the second thing it actually has — the practice's own
   note about the claim, or the clearinghouse receipt.
2. The page carries five real pictures where the sheet asks for six to twelve, and the
   two largest sections (Revyve AI, Common questions) carry none of their own
   (desktop-page-02.jpg). Fix: search the archive for two more St. Louis or clerical
   images and give the questions section a picture on the column its heading leaves
   empty.
3. On a short desktop viewport the claim panel still scrolls inside itself, so "Next
   step, prepared" sits below the panel's own fold on laptops under about 800px tall
   (desktop-fold.jpg). Fix: drop the evidence sub-lines to a hover or a single summary
   line when the panel is shorter than the record.
```

## Defending the two remaining WARNs

**`no-footage`** — no video on the page. Defended: the open collections hold no honest
clip of this subject's world. The one candidate returned by `assets.mjs --video` was a
1957 film about postage stamps, which has nothing to do with medical billing, St. Louis
or a claim. The house rules accept "a slow scale or drift on a photograph" as the page's
one moving picture, and the 1851 account drifts inside its frame on a scroll-linked
timeline. Anything else available would be generic stock, which the skill bans more
firmly than it asks for footage.

**`pinned-over-picture`** — the pinned "142" measured 45% over a picture on screen four.
Defended: the pinned element sits in column two and every picture sits in column one;
they are side by side and never overlap at any scroll position. That adjacency is the
dealt direction itself — a fixed half beside a scrolling half is what "The split stage"
is. Unpinning it would delete the direction.

## What a second round would do
Problems 1 and 2 above, in that order. Both are additive rather than structural, so the
composition would not change.

---

# Round 2 (after fixing round 1's top three)

```
ROUND 2
Seen in one second: a holding company that buys medical billing firms, with a real
  unpaid claim open on the right half of the screen.
Idea (one sentence): unchanged, and now carried by six pictures rather than four, all
  from St. Louis and the record offices of the same trade.
Live thing: the claim selector, with the claim ageing against the scroll across the
  120-day line.
Layout words by section: hero=sheet beside a sticky record / hundred-days=reading column
  with a printed slip, a cropped receiving-office photograph and a drifting 1851 account
  / revyve-ai=two full-width fields meeting on a vertical edge, then a two-column prose
  grid with a record card / close=sentence and actions left, placed photograph right /
  questions=heading and a 1910 engraving left, two columns of reading text right /
  footer=full-bleed photograph with the name across the bottom.
Scores: design 8 · usability 8 · creativity 8 · content 9 → overall 8.1
  (Scored again as a juror who did not build it: usability keeps the internal scroll on
  short laptops, so it does not earn above 8.)
Caps applied: none.
Fixed since round 1:
1. The input field's void now splits above and below its block instead of pooling under
   it, and the output record is no longer clipped by a scroll box.
2. Six real pictures, inside the sheet's six-to-twelve range, and the questions section
   carries one of its own.
3. The log's actor moved into the day column, so each row is two lines instead of three
   and "Next step, prepared" sits inside the panel without internal scrolling at 900px
   viewport height.
Remaining, in order:
1. On viewports under about 760px tall the claim panel still scrolls internally.
2. "0 steps waiting" reads oddly mid-scroll, when every revealed action happens to be
   done. Accurate, but it wants better words.
3. The hero sheet's lower third is still quiet. The blueprint asks for an empty lower
   quarter; this is nearer a third.
```
