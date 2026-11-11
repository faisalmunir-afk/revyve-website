import type { Metadata } from "next";
import Link from "next/link";
import { DEPLOYMENT } from "../../../content/deployment";
import { META } from "../../../content/site";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Linked from "../../components/Linked";
import MarkStep from "../../components/MarkStep";

export const metadata: Metadata = {
  title: META["/revyve-ai/first-deployment/"].title,
  description: META["/revyve-ai/first-deployment/"].description,
};

/**
 * First deployment results.
 *
 * The same reading form as the Insights pieces: the claim on the dark
 * ground, with the way back to Revyve AI above it (the eyebrow's own words,
 * made useful); then the report on paper, in one column. What was measured
 * sits as four figures in a grid, each with the sentence that qualifies
 * it, and the limits follow in the same column, never apart from the
 * numbers.
 *
 * Every string comes from app/content/deployment.ts, verbatim. The figures
 * are the client's own.
 */
export default function FirstDeploymentPage() {
  const { section, sub, heading, lead, before, measured, after, note, readNext } = DEPLOYMENT;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp lt">
        <article aria-labelledby="lt-title">
          <header className="lt__hero">
            <div className="fp__inner lt__heroInner">
              <p className="lt__meta">
                <Link href="/revyve-ai/" className="lt__back">
                  {section}
                </Link>
                {" · "}
                {sub}
              </p>
              <h1 className="lt__title lt__title--essay" id="lt-title">
                {heading}
              </h1>
              <p className="lt__dek">{lead}</p>
            </div>
          </header>

          <div className="lt__sheet" data-tone="light">
            <div className="lt__column lt__prose">
              {before.map((b) => [
                <h2 key={`${b.heading}-h`} className="lt__h2 dp__first">
                  {b.heading}
                </h2>,
                <p key={`${b.heading}-p`} className="lt__p">
                  {b.body}
                </p>,
              ])}

              <h2 className="lt__h2">{measured.heading}</h2>
              <dl className="dp__grid">
                {measured.items.map((m) => (
                  <div className="dp__fig" key={m.term}>
                    <dt className="dp__term">{m.term}</dt>
                    <dd className="dp__detail">{m.detail}</dd>
                  </div>
                ))}
              </dl>

              {after.map((b) => [
                <h2 key={`${b.heading}-h`} className="lt__h2">
                  {b.heading}
                </h2>,
                <p key={`${b.heading}-p`} className="lt__p">
                  {b.body}
                </p>,
              ])}

              <p className="dp__note">{note}</p>
            </div>
          </div>
        </article>

        <section className="about__next lt__next">
          <div className="about__inner">
            <MarkStep done={10} className="about__mark" />
            <p className="about__nextText">
              {readNext.lead}
              <Linked text={readNext.text} links={readNext.links} className="about__link" />
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
