import type { Metadata } from "next";
import { CAREERS } from "../../content/careers";
import { META } from "../../content/site";
import CopyEmail from "../../(v3)/components/CopyEmail";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroFacets3D from "../components/HeroFacets3D";
import { Icon, type IconName } from "../components/AiArt";
import "../revyve-ai/styles.css";
import "../pages.css";
import "../more.css";

export const metadata: Metadata = {
  title: META["/careers/"].title,
  description: META["/careers/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 Careers: the invitation on the left, the address on the right as a
 * glass card with its Copy button; the two roles as cards, each with the
 * picture of the work; the line on what to send.
 *
 * Every string comes from app/content/careers.ts, verbatim.
 */
const ROLE_ICONS: IconName[] = ["agents", "building"];

export default function V4Careers() {
  const { heading, lead, roles, write, email, copy } = CAREERS;

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/careers/" />

      <main id="main">
        <section className="hx rx-hero hx--page" aria-labelledby="cr-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="cr-title">
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
                <p className="mail__say">{write}</p>
                <CopyEmail email={email} label={copy} className="mail__cp" />
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec--tint" aria-labelledby="cr-roles">
          <div className="wrap">
            <header className="sec__head rv">
              <h2 className="sec__title" id="cr-roles">
                {roles.heading}
              </h2>
            </header>
            <ul className="cr-roles">
              {roles.items.map((r, i) => (
                <li key={r.title} className={`card ${i === 0 ? "card--lit" : "card--soft"} cr-role rv`}>
                  <span className="pr-why__ico cr-role__ico">
                    <Icon name={ROLE_ICONS[i] ?? "person"} />
                  </span>
                  <h3 className="card__title card__title--lg">{r.title}</h3>
                  <p className="cr-role__body">{r.body}</p>
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
