import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_PAGE } from "../../content/careers";
import { META } from "../../content/site";
import CopyEmail from "../../(v3)/components/CopyEmail";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import HeroFacets3D from "../components/HeroFacets3D";
import { Icon, type IconName } from "../components/AiArt";
import { v4 } from "../components/links";
import "../revyve-ai/styles.css";
import "../pages.css";
import "../more.css";

export const metadata: Metadata = {
  title: META["/contact/"].title,
  description: META["/contact/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 Contact: one address, as a glass card with its Copy button; then the
 * four reasons to write, as cards. Each card that has a page of its own
 * links there; the card's title is the link's name.
 *
 * Every string comes from app/content/careers.ts (CONTACT_PAGE), verbatim.
 */
const CARD_ICONS: IconName[] = ["clinic", "hand", "person", "chart"];
const CARD_PAGES: (string | null)[] = ["/for-practices/", "/sell-your-firm/", "/careers/", null];

export default function V4Contact() {
  const { heading, lead, email, copy, cards } = CONTACT_PAGE;

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/contact/" />

      <main id="main">
        <section className="hx rx-hero hx--page" aria-labelledby="ct-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="ct-title">
                {heading}
              </h1>
              <p className="hx__lede">{lead}</p>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <div className="mail glass">
                <span className="mail__ico">
                  <Icon name="talk" />
                </span>
                <CopyEmail email={email} label={copy} className="mail__cp" />
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec--tint" aria-label={lead}>
          <div className="wrap">
            <ul className="ct-cards">
              {cards.map((c, i) => {
                const page = CARD_PAGES[i];
                return (
                  <li key={c.title} className={`card ${i === 3 ? "card--lit" : "card--soft"} ct-card rv`}>
                    <span className="pr-why__ico">
                      <Icon name={CARD_ICONS[i] ?? "talk"} />
                    </span>
                    <div className="card__text">
                      <h2 className="card__title">{c.title}</h2>
                      <p className="card__body">{c.body}</p>
                    </div>
                    {page ? (
                      <Link href={v4(page)} className="rx-go__arrow ct-card__go" aria-label={c.title}>
                        <Arrow />
                      </Link>
                    ) : (
                      <a href={`mailto:${email}`} className="rx-go__arrow ct-card__go" aria-label={c.title}>
                        <Arrow />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
