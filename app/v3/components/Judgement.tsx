"use client";

import { useEffect, useRef, useState } from "react";
import { HOME } from "../../content/home";

/**
 * The judgement.
 *
 * The line that used to close the hundred days, given a band of its own so
 * it lands after the stages rather than under them. It types itself in,
 * each letter resolving out of a blur, and the three things the hundred
 * days are actually judged by are set in the brand's ink.
 *
 * The wording is never touched. The highlights are produced by splitting
 * the original sentence on the phrases listed in `closeMarks`, so the text
 * on screen is the source string and nothing else.
 *
 * Until the client mounts — and permanently, under reduced motion — the
 * sentence renders as a plain paragraph, fully visible.
 */

type Part = { text: string; mark: boolean };

/** Cut the sentence into marked and unmarked runs, losing no character. */
function split(line: string, marks: readonly string[]): Part[] {
  let parts: Part[] = [{ text: line, mark: false }];

  for (const m of marks) {
    const next: Part[] = [];
    for (const p of parts) {
      if (p.mark) {
        next.push(p);
        continue;
      }
      const at = p.text.indexOf(m);
      if (at === -1) {
        next.push(p);
        continue;
      }
      if (at > 0) next.push({ text: p.text.slice(0, at), mark: false });
      next.push({ text: m, mark: true });
      const rest = p.text.slice(at + m.length);
      if (rest) next.push({ text: rest, mark: false });
    }
    parts = next;
  }
  return parts;
}

/**
 * `active` hands control of the typing to a parent (the hundred days, which
 * runs it off its own scroll); left undefined, the band watches the screen
 * itself. `embedded` strips the band's own ground and padding so it can sit
 * inside another frame.
 */
export default function Judgement({
  active,
  embedded = false,
}: {
  active?: boolean;
  embedded?: boolean;
}) {
  const { close, closeMarks } = HOME.hundredDays;
  const host = useRef<HTMLElement>(null);

  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);
  const on = active ?? seen;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
    if (active !== undefined) return;

    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          setSeen(true);
          io.disconnect();
        }
      },
      /* Starts once the band is properly on screen, not as it grazes it. */
      { rootMargin: "0px 0px -28% 0px", threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  const parts = split(close, closeMarks);

  return (
    <section
      ref={host}
      className={[
        "judge",
        on ? "judge--on" : "",
        embedded ? "judge--embed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      /* Embedded, the frame's cap carries the light tone for the nav. */
      data-tone={embedded ? undefined : "light"}
      aria-labelledby="judge-line"
    >
      <div className="judge__inner">
        <p className="judge__line" id="judge-line">
          {armed ? typed(parts) : plain(parts)}
        </p>
      </div>
    </section>
  );
}

/** The served sentence: marked runs, nothing else. */
function plain(parts: Part[]) {
  return parts.map((p, i) =>
    p.mark ? (
      <span className="judge__mark" key={i}>
        {p.text}
      </span>
    ) : (
      <span key={i}>{p.text}</span>
    ),
  );
}

/**
 * The same sentence, one span per letter so each can resolve on its own
 * beat. Words are kept whole so none of them breaks mid-way, and the
 * spaces between them stay real spaces.
 */
function typed(parts: Part[]) {
  /* Every character with its own mark flag, in order. */
  const chars: { ch: string; mark: boolean }[] = [];
  for (const p of parts) for (const ch of Array.from(p.text)) chars.push({ ch, mark: p.mark });

  /* Then words, split on whitespace across the whole sentence — so a comma
     after a marked phrase belongs to that word and cannot break away from
     it, and the spaces between words stay real spaces. */
  const out: React.ReactNode[] = [];
  let word: typeof chars = [];
  let n = 0;
  let k = 0;
  const flush = () => {
    if (!word.length) return;
    out.push(
      <span className="judge__w" key={k++}>
        {word.map((c) => (
          <span
            className={c.mark ? "judge__c judge__c--mark" : "judge__c"}
            key={n}
            style={{ ["--i" as string]: n++ }}
          >
            {c.ch}
          </span>
        ))}
      </span>,
    );
    word = [];
  };
  for (const c of chars) {
    if (/\s/.test(c.ch)) {
      flush();
      out.push(<span key={k++}>{c.ch}</span>);
    } else {
      word.push(c);
    }
  }
  flush();
  return out;
}
