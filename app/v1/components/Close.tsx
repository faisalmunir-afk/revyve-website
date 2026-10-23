"use client";

import Link from "next/link";
import Rise from "./Rise";

/**
 * "A plain sentence, one action" - the page ends on an almost empty screen.
 * No headline-sized type appears in this section, so its heading is carried
 * for the inspector and for screen readers without being set large.
 *
 * The blueprint asks for nothing but the sentence and the button. The house
 * rules outrank it on the frame: a section may not keep its content on one
 * side and leave the other half of the screen empty. So the far side is
 * closed by the page's one placed rest, a photograph of Olive Street, which
 * is the street the 1851 account at the top of the page was written on.
 *
 * The careers and investor routes are not here. Four equal calls to action
 * would be the row of identical cards the house rules ban, and the page's
 * real primary action is a practice moving its billing. Both of the other
 * routes keep their own words in the footer.
 */
export default function Close() {
  return (
    <section className="close" aria-labelledby="close-title">
      <h2 className="visually-hidden" id="close-title">
        Move your billing
      </h2>

      <div className="close__say">
        <Rise>
          <p className="close__line">
            Bring us your most frustrating unpaid claims.
          </p>
        </Rise>
        <Rise delay={0.08}>
          <div className="close__actions">
            <Link className="action" href="/for-practices/">
              Show us your claims
            </Link>
            <Link className="action action--quiet" href="/sell-your-firm/">
              Sell us your firm
            </Link>
          </div>
        </Rise>
      </div>

      <Rise delay={0.12}>
        <figure className="close__rest">
          <img
            src="/archive/st-louis-public-library-1301-olive-street.jpg"
            alt="The St. Louis Public Library on Olive Street photographed about 1910, its arched stone frontage running the length of the block with two men walking past on the pavement."
            width={1920}
            height={1504}
            loading="lazy"
            decoding="async"
            className="archival close__photo"
          />
          <figcaption className="note">
            Olive Street, St. Louis, about 1910. The same street the 1851
            account was written on.
          </figcaption>
        </figure>
      </Rise>
    </section>
  );
}
