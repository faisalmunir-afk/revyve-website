"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Rise from "./Rise";

/**
 * "Answers as reading text" - every answer open, set as continuous reading
 * text like the notes at the back of a programme. The question is the
 * paragraph's run-in; the answer continues on the same line.
 *
 * No toggles, no icons, no boxes.
 */

function Q({ q, children }: { q: string; children: ReactNode }) {
  return (
    <p className="qs__item">
      <strong className="qs__q">{q}</strong> {children}
    </p>
  );
}

export default function Questions() {
  return (
    <section className="qs section" aria-labelledby="qs-title">
      <div className="qs__side">
        <Rise>
          <h2 className="qs__title" id="qs-title">
            Common questions
          </h2>
        </Rise>
        <Rise delay={0.12}>
          <figure className="qs__fig">
            <img
              src="/archive/a-forecast-looking-up-olive-street-st.jpg"
              alt="An engraving headed A Forecast, looking up Olive Street in St. Louis as imagined in the year 2010: airships and monorails crossing between towers, crowds on a raised plaza, and a river at the foot of the street."
              width={1920}
              height={2887}
              loading="lazy"
              decoding="async"
              className="archival qs__photo"
            />
            <figcaption className="note">
              Olive Street, St. Louis, as 1910 imagined the year 2010. From the
              Greater St. Louis Christmas Magazine, December 1910.
            </figcaption>
          </figure>
        </Rise>
      </div>

      <Rise delay={0.08}>
        <div className="qs__text">
          <Q q="What is Revyve?">
            Revyve is an AI-native holding company for healthcare services.
            Revyve buys established healthcare services businesses and runs
            them. We bring capital, engineers and operators, and we take
            responsibility for the result.
          </Q>

          <Q q="Does Revyve sell software?">
            We don&rsquo;t sell these companies software. We own them, so we can
            change who does the work, which steps still need a person, and what
            the customer is promised. It is the platform under every company we
            own, not a product we sell.
          </Q>

          <Q q="Why only healthcare?">
            We only buy in healthcare. The data rules, the payer behavior and
            the clinical judgment involved are specific enough that a general
            platform does not fit, and{" "}
            <Link href="/team/">two of our four founders practiced medicine</Link>
            .
          </Q>

          <Q q="Where is Revyve based?">
            Revyve is headquartered in San Francisco. Our first company is a
            29-year-old medical billing firm in St. Louis serving independent
            physician practices.
          </Q>

          <Q q="Is Revyve raising money?">
            We are not raising a priced round. If you back owner-operators in
            healthcare, <Link href="/contact/">write to us</Link>.
          </Q>
        </div>
      </Rise>
    </section>
  );
}
