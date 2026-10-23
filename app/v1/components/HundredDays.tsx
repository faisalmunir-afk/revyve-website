"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Rise from "./Rise";

/**
 * "Itinerary on a slip" - the takeover printed as a receipt, which is the
 * printed artefact of this trade and the direct descendant of the 1851
 * St. Louis account in the archive set.
 *
 * The site's 01 / 02 / 03 / 04 are gone. This is a real <ol>; the order is
 * carried by the stages' own names and by their position on the slip, which
 * is what the house rules ask for in place of index numbering.
 */

const STAGES = [
  {
    title: "Keep what works.",
    when: "Two weeks",
    body: "For the first two weeks we change nothing structural. We confirm cash controls, payer access and customer authorizations, keep the manager who knows the business, name a deputy, and write down how everything performs today.",
  },
  {
    title: "Map the work.",
    when: "One workflow",
    body: "We sit with the team and trace one workflow from start to finish, every handoff, every wait, every system. The people doing the work tell us which parts they would gladly never do again.",
  },
  {
    title: "Prove one thing.",
    when: "Against the baseline",
    body: "One workflow goes live with agents doing the repetitive steps and billers reviewing the results, measured against the baseline we wrote down. If quality holds and the work costs less end to end, it earns the next step. If not, it stops.",
  },
  {
    title: "Make it repeatable.",
    when: "The next business",
    body: "What worked becomes a package: the data, the agents, the rules, the screens, the training. The manager owns improvement from here, and the next business starts from the package instead of from zero.",
  },
];

/**
 * The page's one moving picture: the 1851 account drifts slowly down its own
 * frame as the section is scrolled, so the ledger reads as a long sheet being
 * run through rather than a still. No honest film of this subject's world
 * exists in the open collections, and the house rules take a slow drift on a
 * photograph in place of a clip.
 */
function AccountPicture() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <figure className="days__evidence" ref={ref}>
      <div className="days__frame">
        {still ? (
          <img
            src="/archive/account-of-messrs-bleifuss-with-wilson-brothers.jpg"
            alt="An itemised handwritten account dated St. Louis, April 30 1851, with a tick inked in the left margin beside each line a clerk had checked."
            width={1920}
            height={3082}
            loading="lazy"
            decoding="async"
            className="archival days__account"
          />
        ) : (
          <motion.img
            style={{ y }}
            src="/archive/account-of-messrs-bleifuss-with-wilson-brothers.jpg"
            alt="An itemised handwritten account dated St. Louis, April 30 1851, with a tick inked in the left margin beside each line a clerk had checked."
            width={1920}
            height={3082}
            loading="lazy"
            decoding="async"
            className="archival days__account"
          />
        )}
      </div>
      <figcaption className="note">
        An account from the corner of Main and Olive Street, St. Louis, 1851.
        Every line a clerk checked carries a tick in the margin. The work has
        not changed; who does the repetitive part of it has.
      </figcaption>
    </figure>
  );
}

export default function HundredDays() {
  return (
    <section className="days section" aria-labelledby="days-title">
      <Rise>
        <h2 className="days__title" id="days-title">
          The first hundred days.
        </h2>
      </Rise>

      <Rise delay={0.08}>
        <p className="days__lede">
          Taking over a business is the moment it is easiest to lose a customer.
          So the first thing we do is nothing that could.
        </p>
      </Rise>

      <Rise delay={0.16}>
        <div className="slip">
          <ol className="slip__stages">
            {STAGES.map((s) => (
              <li className="slip__stage" key={s.title}>
                <h3 className="slip__name">
                  <span className="slip__nameText">{s.title}</span>
                  <span className="slip__leader" aria-hidden="true" />
                  <span className="slip__when tabular">{s.when}</span>
                </h3>
                <p className="slip__body">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="slip__total">
            We judge the first hundred days by customers kept, collections held,
            and a team that trusts the tools. Not by how many agents we shipped.
          </p>
        </div>
      </Rise>

      <Rise delay={0.06}>
        <figure className="days__office">
          <div className="days__crop">
            <img
              src="/archive/medical-department-hospitals-travis-texas-receiving-office.jpg"
              alt="A hospital receiving office in 1918: a clerk sits at a desk with a pen in his hand, a wall of pigeonholed record slots filling the space behind him, while two men in white coats and another man wait at the counter."
              width={1920}
              height={1317}
              loading="lazy"
              decoding="async"
              className="archival"
            />
          </div>
          <figcaption className="note">
            A hospital receiving office, 1918. One person at the desk, the
            whole backlog on the wall behind him. This is the part we sit with
            before we change anything.
          </figcaption>
        </figure>
      </Rise>

      <Rise delay={0.1}>
        <AccountPicture />
      </Rise>
    </section>
  );
}
