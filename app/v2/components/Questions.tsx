"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { HOME } from "../../content/home";
import Accent from "./Accent";

/**
 * Common questions.
 *
 * Every answer is open. Five short answers hidden behind toggles would be
 * five clicks for no reason, and the answers are the reassurance.
 *
 * The links the original site puts inside two of the answers are restored
 * from the content module's `link` field, so the sentence is never retyped
 * to hold an anchor.
 */
function withLink(
  answer: string,
  link: { phrase: string; href: string } | null,
): ReactNode {
  if (!link) return answer;
  const i = answer.indexOf(link.phrase);
  if (i === -1) return answer;
  return (
    <>
      {answer.slice(0, i)}
      <Link href={link.href} className="qa__inline">
        {link.phrase}
      </Link>
      {answer.slice(i + link.phrase.length)}
    </>
  );
}

export default function Questions() {
  const { heading, items } = HOME.faq;

  return (
    <section className="qa" aria-labelledby="qa-title">
      <div className="qa__inner">
        <h2 className="qa__heading" id="qa-title">
          <Accent text={heading} phrase="questions" />
        </h2>

        <dl className="qa__grid">
          {items.map((it) => (
            <div className="qa__item" key={it.q}>
              <dt className="qa__q">
                <span className="qa__mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12">
                    <path
                      d="M3 11.5 L9 17.5 L21 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.4"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
                {it.q}
              </dt>
              <dd className="qa__a">{withLink(it.answer, it.link)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
