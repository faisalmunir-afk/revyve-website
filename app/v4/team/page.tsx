import type { Metadata } from "next";
import Link from "next/link";
import { TEAM } from "../../content/team";
import { META, TEAM_BACKGROUND, TEAM_BACKGROUND_HEADING } from "../../content/site";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import HeroFacets3D from "../components/HeroFacets3D";
import ReadNext from "../components/ReadNext";
import { v4 } from "../components/links";
import "../revyve-ai/styles.css";
import "../pages.css";
import "../more.css";

export const metadata: Metadata = {
  title: META["/team/"].title,
  description: META["/team/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 Team: the claim on the left, the four founders as glass monograms on
 * the right; then the four as cards, physicians marked by their MD; the
 * team's background as a glass strip; the hiring line; read next.
 *
 * Every string comes from app/content/team.ts and site.ts, verbatim. There
 * are no photographs on file, so each founder is shown by initials.
 */
const initials = (name: string) =>
  name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("");

export default function V4Team() {
  const { heading, lead, founders, hiring, readNext } = TEAM;
  const work = readNext.links.find((l) => l.href === "/careers/");

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/team/" />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx rx-hero" aria-labelledby="tm-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="tm-title">
                {heading}
              </h1>
              <p className="hx__lede">{lead}</p>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <div className="tm-four" aria-hidden="true">
                {founders.map((f, i) => (
                  <div key={f.name} className={`tm-four__tile glass tm-four__tile--${i}`}>
                    <span className="tm-mono">{initials(f.name)}</span>
                    <span className="tm-four__name">{f.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- The four ------------------------------------------------- */}
        <section className="sec sec--tint" aria-label={heading}>
          <div className="wrap">
            <ul className="tm-grid">
              {founders.map((f, i) => (
                <li key={f.name} className={`card ${i === 0 ? "card--lit" : "card--soft"} tm-card rv`}>
                  <span className="tm-mono tm-mono--lg" aria-hidden="true">
                    {initials(f.name)}
                  </span>
                  <div className="tm-card__say">
                    <h2 className="card__title">{f.name}</h2>
                    <p className="tm-card__role">{f.role}</p>
                  </div>
                  <p className="card__body">{f.body}</p>
                </li>
              ))}
            </ul>

            <div className="glass tmx__logos tm-logos rv" aria-label={TEAM_BACKGROUND_HEADING}>
              <div className="tmx__track">
                {[0, 1].map((copy) => (
                  <ul className="tmx__row" key={copy} aria-hidden={copy === 1 || undefined}>
                    {TEAM_BACKGROUND.map((l) => (
                      <li key={l.src} className={l.solid ? "tmx__logo tmx__logo--solid" : "tmx__logo"}>
                        <img src={l.src} alt={copy ? "" : l.alt} width={l.w} height={l.h} loading="lazy" decoding="async" />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <p className="tm-logos__label">{TEAM_BACKGROUND_HEADING}</p>

            <div className="card card--lit tm-hire rv">
              <p className="card__statement">{hiring}</p>
              {work && (
                <Link href={v4(work.href)} className="btn btn--onlit">
                  {work.phrase}
                  <Arrow />
                </Link>
              )}
            </div>
          </div>
        </section>

        <ReadNext lead={readNext.lead} links={readNext.links} />
      </main>

      <Footer />
    </>
  );
}
