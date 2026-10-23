import type { Metadata } from "next";
import { PRIVACY } from "../../content/team";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Linked from "../components/Linked";
import { UnderAgreement } from "../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/privacy/"].title,
  description: META["/privacy/"].description,
};

/**
 * Privacy.
 *
 * The page holds one paragraph until the policy is published, so it is one
 * screen: the claim and the paragraph, with its address linked, beside a
 * drawing of the paragraph — patient data inside the agreements that
 * govern it, and the way to general-purpose models stopped.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/team.ts, verbatim.
 */
export default function PrivacyPage() {
  const { heading, body, links } = PRIVACY;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp pv">
        <section className="fp__hero pv__hero" aria-labelledby="pv-title">
          <div className="fp__inner fp__heroGrid">
            <div className="fp__say">
              <h1 className="fp__title" id="pv-title">
                {heading}
              </h1>
              <p className="fp__lead pv__body">
                <Linked text={body} links={links} className="about__link" />
              </p>
            </div>
            <div className="aboutb__art fp__art">
              <UnderAgreement className="aboutb__draw sd sd--armed fp__heroDraw" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
