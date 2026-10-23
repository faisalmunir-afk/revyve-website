import type { Metadata } from "next";
import { CAREERS } from "../../content/careers";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CopyEmail from "../components/CopyEmail";
import { RoleMark, TwoRoles } from "../components/peopleDiagrams";

export const metadata: Metadata = {
  title: META["/careers/"].title,
  description: META["/careers/"].description,
};

/**
 * Careers.
 *
 * The claim and its picture — the two lanes, engineers and operators —
 * then the two open roles as two large cards, then the one way in: write
 * to the address, with what you have built or run.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/careers.ts, verbatim.
 */
export default function CareersPage() {
  const { heading, lead, roles, write, email, copy } = CAREERS;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp">
        <section className="fp__hero" aria-labelledby="cr-title">
          <div className="fp__inner fp__heroGrid">
            <div className="fp__say">
              <h1 className="fp__title" id="cr-title">
                {heading}
              </h1>
              <p className="fp__lead">{lead}</p>
            </div>
            <div className="aboutb__art fp__art">
              <TwoRoles className="aboutb__draw sd sd--armed fp__heroDraw" />
            </div>
          </div>
        </section>

        <section className="fp__why" aria-labelledby="cr-roles">
          <div className="fp__inner">
            <h2 className="fp__h2 sy__h2" id="cr-roles">
              {roles.heading}
            </h2>
            <ul className="cr__roles">
              {roles.items.map((r, i) => (
                <li className="fp__tile cr__role" key={r.title}>
                  <RoleMark i={i} className="fp__mark" />
                  <h3 className="cr__roleTitle">{r.title}</h3>
                  <p className="cr__roleBody">{r.body}</p>
                </li>
              ))}
            </ul>

            <div className="cr__write">
              <p className="cr__writeText">{write}</p>
              <CopyEmail email={email} label={copy} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
