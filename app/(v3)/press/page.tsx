import type { Metadata } from "next";
import Link from "next/link";
import { PRESS } from "../../content/team";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { TheGap } from "../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/press/"].title,
  description: META["/press/"].description,
};

/**
 * Press.
 *
 * The word, set large, and the letters beneath it. There is one so far, so
 * it is given the room: a whole-width card, its date, title and first line
 * on one side and, as its cover, the drawing the letter itself carries.
 * The whole card is the link.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/team.ts, verbatim.
 */
export default function PressPage() {
  const { heading, items } = PRESS;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp pr">
        <section className="pr__hero" aria-labelledby="pr-title">
          <div className="fp__inner">
            <h1 className="pr__title" id="pr-title">
              {heading}
            </h1>
          </div>
        </section>

        <section className="pr__letters" aria-labelledby="pr-title">
          <div className="fp__inner">
            <ul className="pr__list">
              {items.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="pr__item">
                    <div className="pr__say">
                      <time className="pr__date" dateTime={it.dateTime}>
                        {it.date}
                      </time>
                      <h2 className="pr__name">{it.title}</h2>
                      <p className="pr__excerpt">{it.excerpt}</p>
                      <span className="pr__go" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="pr__arrow">
                          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div className="pr__cover">
                      <TheGap className="aboutb__draw sd sd--armed fp__heroDraw" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
