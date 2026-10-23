/**
 * The three claims behind the page's one live thing.
 *
 * SAMPLE CONTENT - real in shape, invented in detail. Revyve must confirm or
 * replace these before launch. No real patient, practice or payer is named,
 * and nothing here is presented as a Revyve result or statistic.
 *
 * Every promise these records keep is one the site already makes:
 *   "Anything over 120 days gets a status check, a reason and a next action."
 *   "Each claim is tied to its encounter, its payer evidence, the person
 *    responsible for it and the next step allowed."
 *   "Every action is logged with its evidence and its outcome."
 *   "Coding, write-offs and payer disputes stay with qualified billers."
 */

export type ClaimEvent = {
  /** What happened. */
  what: string;
  /** Who or what did it. */
  by: "agent" | "biller" | "payer" | "practice";
  /** Day of the claim's life. */
  day: number;
  /** Done and checked, or still open. */
  done: boolean;
  /** The record behind it, shown as evidence. */
  evidence?: string;
};

export type Claim = {
  id: string;
  payer: string;
  /** Days since the claim went out. */
  age: number;
  amount: string;
  /** The payer's own adjustment code, and what it means in plain words. */
  code: string;
  codeMeaning: string;
  /** The payer's response exactly as it arrives: the raw input half. */
  raw: string;
  /** Short status for the bar across the foot of the stage. */
  status: string;
  events: ClaimEvent[];
  /** What the platform prepares next. */
  nextStep: string;
  /** Why a person has to sign this one, or why they don't. */
  review: string;
  /** Whether a person must approve before anything goes to the payer. */
  needsBiller: boolean;
};

/** The age past which everyone else stops working a claim. */
export const AGED_LINE = 120;

export const CLAIMS: Claim[] = [
  {
    id: "0417-2",
    payer: "Commercial",
    age: 142,
    amount: "$1,840.00",
    code: "CO-97",
    codeMeaning:
      "The benefit for this service is included in the payment for another service already adjudicated.",
    raw: [
      "CLM 0417-2  SVC 29827  DOS 05/14  BILLED 1840.00  PAID 0.00",
      "ADJ CO-97 1840.00",
      "RMK N19 PROCEDURE CONSIDERED INCIDENTAL TO PRIMARY",
      "   ... REMIT 835 SEG 2430 LQ HE N19",
    ].join("\n"),
    status: "Waiting on a biller",
    events: [
      {
        what: "Claim submitted",
        by: "practice",
        day: 0,
        done: true,
        evidence: "837P, batch 0514-A",
      },
      {
        what: "Payer acknowledged",
        by: "payer",
        day: 3,
        done: true,
        evidence: "277CA, accepted",
      },
      {
        what: "Bundled, paid at zero",
        by: "payer",
        day: 31,
        done: true,
        evidence: "835 remittance, CO-97 with remark N19",
      },
      {
        what: "Status checked, reason recorded",
        by: "agent",
        day: 121,
        done: true,
        evidence: "Payer portal, claim finalised 06/14",
      },
      {
        what: "Operative note and modifier evidence gathered",
        by: "agent",
        day: 141,
        done: true,
        evidence: "Op note 05/14, separate site documented",
      },
      {
        what: "Appeal drafted, held for review",
        by: "agent",
        day: 142,
        done: false,
      },
    ],
    nextStep:
      "Appeal the bundling with the operative note attached, arguing a distinct procedural service at a separate site.",
    review:
      "A qualified biller approves this one before it goes out: it changes how the service is coded.",
    needsBiller: true,
  },
  {
    id: "0392-8",
    payer: "Medicare Advantage",
    age: 96,
    amount: "$412.50",
    code: "CO-16",
    codeMeaning: "The claim is missing information needed to adjudicate it.",
    raw: [
      "CLM 0392-8  SVC 99214  DOS 07/02  BILLED 412.50  PAID 0.00",
      "ADJ CO-16 412.50",
      "RMK MA61 MISSING/INCOMPLETE REFERRING PROVIDER IDENTIFIER",
      "   ... REMIT 835 SEG 2430 LQ HE MA61",
    ].join("\n"),
    status: "Resubmitting",
    events: [
      {
        what: "Claim submitted",
        by: "practice",
        day: 0,
        done: true,
        evidence: "837P, batch 0702-C",
      },
      {
        what: "Rejected for a missing referring NPI",
        by: "payer",
        day: 11,
        done: true,
        evidence: "835 remittance, CO-16 with remark MA61",
      },
      {
        what: "Referring provider matched in the practice record",
        by: "agent",
        day: 94,
        done: true,
        evidence: "Encounter 07/02, referral on file",
      },
      {
        what: "Corrected claim queued",
        by: "agent",
        day: 96,
        done: false,
      },
    ],
    nextStep:
      "Resubmit with the referring provider identifier corrected from the referral already on file.",
    review:
      "No coding changes, so an agent completes this one. A biller sees it in the day's sample.",
    needsBiller: false,
  },
  {
    id: "0455-1",
    payer: "Commercial",
    age: 211,
    amount: "$3,275.00",
    code: "No response",
    codeMeaning:
      "The payer has returned nothing at all: no acknowledgement, no remittance, no denial.",
    raw: [
      "CLM 0455-1  SVC 27447  DOS 03/28  BILLED 3275.00  PAID 0.00",
      "ADJ (none)",
      "RMK (none on file)",
      "   ... no 277CA, no 835 received",
    ].join("\n"),
    status: "Payer dispute",
    events: [
      {
        what: "Claim submitted",
        by: "practice",
        day: 0,
        done: true,
        evidence: "837P, batch 0328-B",
      },
      {
        what: "Clearinghouse accepted, payer silent",
        by: "agent",
        day: 7,
        done: true,
        evidence: "Clearinghouse receipt 03/28",
      },
      {
        what: "Status checked, nothing on file",
        by: "agent",
        day: 121,
        done: true,
        evidence: "Payer portal, no claim found",
      },
      {
        what: "Proof of timely filing assembled",
        by: "agent",
        day: 209,
        done: true,
        evidence: "Clearinghouse acceptance, 03/28",
      },
      {
        what: "Dispute drafted, held for review",
        by: "agent",
        day: 211,
        done: false,
      },
    ],
    nextStep:
      "Open a payer dispute with the clearinghouse acceptance as proof the claim was filed on time.",
    review:
      "A qualified biller approves this one before it goes out: it is a payer dispute.",
    needsBiller: true,
  },
];
