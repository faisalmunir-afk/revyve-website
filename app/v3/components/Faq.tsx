"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HOME } from "../../content/home";

/**
 * Common questions.
 *
 * An accordion: each question is a button, its answer folds open beneath
 * it. The first starts open so the section never reads as a wall of
 * closed rows, and more than one can be open at once — closing what the
 * reader just opened to show them something else is a trick, not a
 * courtesy.
 *
 * The fold is a grid row going from 0fr to 1fr, which is the one way to
 * animate to an unknown height smoothly without measuring it. The mark on
 * the right is a plus that turns into a cross.
 *
 * Until the client mounts — and so with no script — every answer is
 * open: `faq--armed` is what lets a panel close. Each button carries
 * aria-expanded and names its panel, so the state is announced.
 *
 * Two answers carry a link in the original. The copy records the phrase
 * and the destination rather than markup, so the sentence is split on the
 * exact phrase here and the words are never retyped.
 *
 * Every string comes from app/content/home.ts, verbatim.
 */

type Linked = { phrase: string; href: string } | null;

/** The answer with its link restored, from the exact phrase. */
function withLink(answer: string, link: Linked) {
  if (!link) return answer;
  const at = answer.indexOf(link.phrase);
  if (at === -1) return answer;
  return (
    <>
      {answer.slice(0, at)}
      <Link href={link.href} className="faq__link">
        {link.phrase}
      </Link>
      {answer.slice(at + link.phrase.length)}
    </>
  );
}

type Item = { q: string; answer: string; link: Linked };

/** The home page's questions by default; any page can pass its own. */
export default function Faq({
  heading = HOME.faq.heading,
  items = HOME.faq.items,
}: {
  heading?: string;
  items?: readonly Item[];
} = {}) {

  const [armed, setArmed] = useState(false);
  const [open, setOpen] = useState<number[]>([0]);

  useEffect(() => setArmed(true), []);

  const toggle = (i: number) =>
    setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  return (
    <section
      className={armed ? "faq faq--armed" : "faq"}
      aria-labelledby="faq-title"
    >
      <div className="faq__inner">
        <h2 className="faq__title" id="faq-title">
          {heading}
        </h2>

        <dl className="faq__list">
          {items.map((it, i) => {
            const isOpen = !armed || open.includes(i);
            return (
              <div
                className={isOpen ? "faq__item is-open" : "faq__item"}
                key={it.q}
                style={{ ["--i" as string]: i }}
              >
                <dt className="faq__q">
                  <button
                    type="button"
                    className="faq__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq__qText">{it.q}</span>
                    <span className="faq__plus" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>
                </dt>
                <dd
                  className="faq__panel"
                  id={`faq-a-${i}`}
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq__fold">
                    <p className="faq__a">{withLink(it.answer, it.link)}</p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
