import type { Metadata } from "next";
import { PRIVACY } from "../../content/team";
import { META } from "../../content/site";
import Linked from "../../(v3)/components/Linked";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Icon } from "../components/AiArt";
import "../revyve-ai/styles.css";
import "../pages.css";
import "../more.css";

export const metadata: Metadata = {
  title: META["/privacy/"].title,
  description: META["/privacy/"].description,
  robots: { index: false, follow: false },
};

/** V4 Privacy: the heading and the one paragraph, in a card. Verbatim from app/content/team.ts. */
export default function V4Privacy() {
  const { heading, body, links } = PRIVACY;
  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/privacy/" />

      <main id="main">
        <section className="hx hx--page pv" aria-labelledby="pv-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap pv__in">
            <h1 className="hx__title pv__title" id="pv-title">
              {heading}
            </h1>
            <div className="card card--soft pv__card">
              <span className="pr-why__ico">
                <Icon name="shield" />
              </span>
              <p className="pv__body">
                <Linked text={body} links={links} className="tlink tlink--inline" />
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
