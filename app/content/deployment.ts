/**
 * Revyve — /revyve-ai/first-deployment/, transcribed verbatim from
 * revyveholdings.com/revyve-ai/first-deployment/ (added by the client in
 * November 2026).
 *
 * Every string is Revyve's own wording, character for character. The
 * figures are the client's own, with the limits the client states beside
 * them; neither is ever shown without the other.
 */

import type { Linked } from "./about";

export const DEPLOYMENT = {
  /** Rendered as a way back to Revyve AI, not as a label. */
  eyebrow: "Revyve AI · First deployment",
  section: "Revyve AI",
  sub: "First deployment",
  heading: "The first deployment, measured.",
  lead: "One workflow, inside the billing operation we own. These are the numbers, what they measure, and what they do not.",
  before: [
    {
      heading: "The workflow",
      body: "The first workflow was aged-claim status checks and reporting. Agents check the status of aged claims, attach the payer's response and supporting records to the claim, update the controlled work queue, and produce the daily aging and revenue reports. Billers review exceptions and any consequential action.",
    },
    {
      heading: "The deployment",
      body: "The workflow ran in a supervised deployment across a first group of the practices served by our billing operation.",
    },
  ],
  measured: {
    heading: "What we measured",
    items: [
      { term: "Handling time", detail: "Median human handling time per check fell from 6.5 minutes to 3.1 minutes." },
      {
        term: "Workflow cost",
        detail: "Preliminary cost for this one workflow, including human review, models and tools, came in approximately 40% below the pre-agent baseline.",
      },
      { term: "Audit agreement", detail: "196 of 200 audited actions matched the payer record." },
      { term: "Collections", detail: "Unchanged during the initial measurement period." },
    ],
  },
  after: [
    {
      heading: "What the audit measures",
      body: "The audit compares a sample of the agent's recorded actions against the payer record and counts agreement on those checked actions. It does not measure overall autonomous billing accuracy, and it says nothing about workflows the agent does not run.",
    },
    {
      heading: "What remains to be shown",
      body: "These results cover one supervised workflow during its initial deployment period. They do not represent automation or cost reduction across the entire billing operation, and broader platform and company-level results remain to be demonstrated.",
    },
  ],
  note: "Figures are a snapshot from the initial deployment period, not live counters.",
  readNext: {
    lead: "Read next: ",
    text: "Revyve AI; For practices.",
    links: [
      { phrase: "Revyve AI", href: "/revyve-ai/" },
      { phrase: "For practices", href: "/for-practices/" },
    ] as Linked[],
  },
} as const;
