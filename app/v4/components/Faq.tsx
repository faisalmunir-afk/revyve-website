"use client";

import { useState } from "react";
import Link from "next/link";

type Item = { q: string; answer: string; link: { phrase: string; href: string } | null };

/**
 * The questions as soft rows: one open at a time; opening one closes the
 * other, clicking the open one closes it. Every answer is in the HTML, so
 * it reads without script; the panel height animates with grid rows.
 */
export default function Faq({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="fq">
      {items.map((it, i) => {
        const isOpen = open === i;
        const at = it.link ? it.answer.indexOf(it.link.phrase) : -1;
        return (
          <div className={isOpen ? "fq__item is-open" : "fq__item"} key={it.q}>
            <h3 className="fq__h">
              <button
                type="button"
                className="fq__q"
                aria-expanded={isOpen}
                aria-controls={`fq-${i}`}
                onClick={() => setOpen((o) => (o === i ? null : i))}
              >
                {it.q}
                <span className="fq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="fq__panel" id={`fq-${i}`} role="region">
              <div className="fq__inner">
                <p className="fq__a">
                  {at >= 0 && it.link ? (
                    <>
                      {it.answer.slice(0, at)}
                      <Link href={it.link.href} className="tlink tlink--inline">
                        {it.link.phrase}
                      </Link>
                      {it.answer.slice(at + it.link.phrase.length)}
                    </>
                  ) : (
                    it.answer
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
