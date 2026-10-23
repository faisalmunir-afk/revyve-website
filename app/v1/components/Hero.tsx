"use client";

import Link from "next/link";
import Rise from "./Rise";

/**
 * Hero - geometry from the dealt "Menu column, sticky photograph" blueprint:
 * a filled sheet in the left panel carrying the name, the claim, one
 * supporting paragraph and the single action, with the fixed half sticky
 * beside it.
 *
 * Its restaurant specifics (opening hours, a street address, a centred menu
 * card, a light serif) are overridden by the house rules and the dealt type
 * system, per the sheet's own settlement order.
 *
 * Why the name is the h1 and the claim is a paragraph:
 * "We buy good healthcare businesses and make them run better." is 59
 * characters. At 390px there is no display size at which it fits the
 * two-line rule and stays above body size. The house rules give the way out
 * themselves: a sentence set large is marked up as a <p> and held at
 * statement size (36px or less on desktop, 24px on a phone). So the sentence
 * keeps every word and the name carries the title, which is also what this
 * direction's hero wanted in the first place.
 */
export default function Hero() {
  return (
    <header className="hero">
      <nav className="hero__links" aria-label="Primary">
        <Link href="/revyve-ai/">Revyve AI</Link>
        <Link href="/about/">About</Link>
        <Link href="/contact/">Contact</Link>
      </nav>

      <Rise>
        <h1 className="hero__name">revyve</h1>
      </Rise>

      <Rise delay={0.07}>
        <p className="hero__claim">
          We buy good healthcare businesses and make them run better.
        </p>
      </Rise>

      <Rise delay={0.14}>
        <p className="hero__lede">
          Revyve owns and operates healthcare services companies, starting with
          medical billing. We keep the people and customers that made each
          business good, and we change how the work gets done.
        </p>
      </Rise>

      <Rise delay={0.21}>
        <div className="hero__actions">
          <Link className="action" href="/for-practices/">
            Move your billing to Revyve
          </Link>
          <Link className="action action--quiet" href="/sell-your-firm/">
            Sell us your firm
          </Link>
        </div>
      </Rise>

      <Rise delay={0.28}>
        <p className="hero__aside">
          <Link href="/about/">Why we built Revyve</Link>
        </p>
      </Rise>
    </header>
  );
}
