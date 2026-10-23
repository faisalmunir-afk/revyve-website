import Link from "next/link";
import type { ReactNode } from "react";

/**
 * A sentence with its links restored from the exact phrases the copy
 * records, so the words are never retyped. Optional footnote marker after
 * a given phrase.
 */
export default function Linked({
  text,
  links = [],
  note,
  className,
}: {
  text: string;
  links?: readonly { phrase: string; href: string }[];
  note?: { after: string; n: number };
  className?: string;
}) {
  type Seg = { text: string; href?: string; noteAfter?: number };
  let segs: Seg[] = [{ text }];

  for (const l of links) {
    const next: Seg[] = [];
    for (const s of segs) {
      if (s.href) {
        next.push(s);
        continue;
      }
      const at = s.text.indexOf(l.phrase);
      if (at === -1) {
        next.push(s);
        continue;
      }
      if (at > 0) next.push({ text: s.text.slice(0, at) });
      next.push({ text: l.phrase, href: l.href });
      const rest = s.text.slice(at + l.phrase.length);
      if (rest) next.push({ text: rest });
    }
    segs = next;
  }

  if (note) {
    const next: Seg[] = [];
    for (const s of segs) {
      const at = s.href ? -1 : s.text.indexOf(note.after);
      if (at === -1) {
        next.push(s);
        continue;
      }
      const end = at + note.after.length;
      next.push({ text: s.text.slice(0, end), noteAfter: note.n });
      const rest = s.text.slice(end);
      if (rest) next.push({ text: rest });
    }
    segs = next;
  }

  const out: ReactNode[] = segs.map((s, i) => {
    const body = s.href ? (
      <Link href={s.href} className={className} key={i}>
        {s.text}
      </Link>
    ) : (
      <span key={i}>{s.text}</span>
    );
    if (s.noteAfter === undefined) return body;
    return (
      <span key={i}>
        {body}
        <sup className="about__sup">
          <a href={`#about-note-${s.noteAfter}`} id={`about-ref-${s.noteAfter}`}>
            {s.noteAfter}
          </a>
        </sup>
      </span>
    );
  });

  return <>{out}</>;
}
