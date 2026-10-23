"use client";

import Link from "next/link";
import Rise from "./Rise";
import { ClaimRecord } from "./ClaimStage";
import type { Claim } from "../data/claims";

/**
 * "Input half, output half" - and the section that breaks the split and runs
 * full width, which is what this direction needs to avoid the monotony its
 * sheet warns about.
 *
 * Left field, the darkest tone: what the payer actually hands back, raw.
 * Right field, the lightest tone: what the platform makes of it, as a true
 * -size data-ui fragment. The claim the visitor picked drives both.
 *
 * The heading is split across the vertical edge. Both halves of it are
 * Revyve's own sentence from /revyve-ai/, divided at its own full stop.
 */
export default function RevyveAI({ claim }: { claim: Claim }) {
  return (
    <section className="io" aria-labelledby="io-title">
      <h2 className="visually-hidden" id="io-title">
        Systems hold the data. The work lives between them.
      </h2>

      <div className="io__fields">
        <div className="io__in">
          <div className="io__inner">
            <p className="io__label">What the payer sends back</p>
            <pre className="io__raw tabular" aria-label="Payer remittance as received">
              {claim.raw}
            </pre>
            <p className="io__note note">
              No system records what happens next. That is the gap the work
              lives in.
            </p>
          </div>
          <p className="io__edgeWord" aria-hidden="true">
            Systems hold the data.
          </p>
        </div>

        <div className="io__out">
          <div className="io__inner">
            <p className="io__label io__label--paper">
              What Revyve AI makes of it
            </p>
            <div className="io__frag" data-ui="prepared-record">
              <ClaimRecord claim={claim} />
            </div>
          </div>
          <p className="io__edgeWord io__edgeWord--paper" aria-hidden="true">
            The work lives between them.
          </p>
        </div>
      </div>

      <div className="io__prose section">
        <Rise>
          <p className="io__lede">
            We&rsquo;re building Revyve AI to connect leading AI models with the
            existing and legacy systems healthcare businesses run on, and with
            the workflows between them. Forward-deployed engineers sit with the
            billing team, map the work as it really happens, and build the
            models and agents into it.
          </p>
        </Rise>

        <div className="io__three">
          <Rise delay={0.06}>
            <p>
              <strong>Built around your existing systems.</strong> Revyve AI is
              designed to build on the software already embedded in the
              business. Our forward-deployed engineers pair with operators to
              connect authorized data, map workflows, and bring AI into the
              tools teams use every day.
            </p>
          </Rise>
          <Rise delay={0.12}>
            <p>
              <strong>The right model for each task.</strong> Use different AI
              models for different tasks, selected for quality, speed, and cost.
            </p>
          </Rise>
          <Rise delay={0.18}>
            <p>
              <strong>One shared intelligence layer.</strong> Coordinate models,
              agents, existing software, and human reviewers through shared
              infrastructure for routing, permissions, evidence, and approvals.
            </p>
          </Rise>
        </div>

        <Rise delay={0.08}>
          <figure className="io__evidence">
            <img
              src="/archive/medical-department-hospitals-boston-massachusetts-post-offic.jpg"
              alt="A 1918 archival record card from a United States Army base hospital: a typed catalogue form on the left listing number, symbol and description, with a small photograph of the hospital's post office pasted to the right of it."
              width={1920}
              height={1317}
              loading="lazy"
              decoding="async"
              className="archival io__card"
            />
            <figcaption className="note">
              A hospital record card, 1918: the form on the left, the evidence
              pasted beside it. One record, one place to look.
            </figcaption>
          </figure>
        </Rise>

        <Rise delay={0.08}>
          <p className="io__close">
            It is the platform under every company we own, not a product we
            sell. It brings those systems, their data, and everyday workflows
            together to help teams resolve claims, clear backlogs, and handle
            more work.{" "}
            <Link href="/revyve-ai/">More about Revyve AI</Link>
          </p>
        </Rise>
      </div>
    </section>
  );
}
