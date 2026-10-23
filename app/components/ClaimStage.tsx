"use client";

import { CLAIMS, AGED_LINE, type Claim } from "../data/claims";

/**
 * The fixed half of the split stage.
 *
 * It is the page's one live thing and its principal picture: a real interface
 * fragment (data-ui), not a drawing of one. Picking a claim drives this panel
 * and the input/output section further down the page.
 *
 * The signature move the sheet dealt is "the fixed half changes as its
 * matching section arrives". Here the claim ages as the argument scrolls past
 * it: the log fills in one action at a time and the counter climbs, crossing
 * the 120-day line everyone else stops at while the reader is still reading.
 *
 * The tick in the left margin of each completed line is the page's idea: the
 * same gesture as the ticks in the margin of the 1851 St. Louis account that
 * opens the archive set. A person confirming a line.
 */

function Tick({ done }: { done: boolean }) {
  if (!done) {
    return (
      <span className="stage__pending" aria-hidden="true">
        &middot;
      </span>
    );
  }
  return (
    <svg
      className="stage__tick"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 8.6 L6.2 12.8 L14 3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ClaimRecord({
  claim,
  revealed,
}: {
  claim: Claim;
  /** How many of the log's actions have happened yet. Defaults to all. */
  revealed?: number;
}) {
  const shown = Math.min(
    claim.events.length,
    Math.max(1, revealed ?? claim.events.length),
  );
  const day = claim.events[shown - 1].day;
  const aged = day > AGED_LINE;
  const open = claim.events.slice(0, shown).filter((e) => !e.done).length;

  return (
    <div className="stage__record">
      <div className="stage__head">
        <span className="stage__id tabular">Claim {claim.id}</span>
        <span className="stage__payer">{claim.payer}</span>
      </div>

      <p className="stage__age tabular">
        <span className="stage__ageNum">{day}</span>
        <span className="stage__ageWord">
          {day === 0
            ? "days old"
            : aged
              ? "days old, past the line everyone else stops at"
              : "days old"}
        </span>
      </p>

      <dl className="stage__facts">
        <div>
          <dt>Billed</dt>
          <dd className="tabular">{claim.amount}</dd>
        </div>
        <div>
          <dt>Paid</dt>
          <dd className="tabular">$0.00</dd>
        </div>
        <div>
          <dt>Payer said</dt>
          <dd className="tabular">{claim.code}</dd>
        </div>
      </dl>

      <p className="stage__meaning">{claim.codeMeaning}</p>

      <h3 className="stage__sub">Every action, with its evidence</h3>
      <ol className="stage__log">
        {claim.events.map((e, i) => (
          <li
            key={i}
            className={
              (e.done ? "is-done" : "is-open") +
              (i < shown ? " is-here" : " is-later")
            }
            aria-hidden={i < shown ? undefined : true}
          >
            <Tick done={e.done} />
            <span className="stage__when">
              <span className="stage__day tabular">Day {e.day}</span>
              <span className="stage__by">{e.by}</span>
            </span>
            <span className="stage__what">
              {e.what}
              {e.evidence ? (
                <span className="stage__evidence">{e.evidence}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>

      <div className="stage__next">
        <h3 className="stage__sub">Next step, prepared</h3>
        <p>{claim.nextStep}</p>
        <p className={claim.needsBiller ? "stage__gate is-held" : "stage__gate"}>
          {claim.review}
        </p>
      </div>

      <p className="stage__open note tabular">
        {open} step{open === 1 ? "" : "s"} waiting
      </p>
    </div>
  );
}

export default function ClaimStage({
  selected,
  onSelect,
  revealed,
}: {
  selected: number;
  onSelect: (i: number) => void;
  revealed?: number;
}) {
  const claim = CLAIMS[selected];
  // The bar reads the same day as the record, so the two never disagree while
  // the claim is ageing against the scroll.
  const shown = Math.min(
    claim.events.length,
    Math.max(1, revealed ?? claim.events.length),
  );
  const day = claim.events[shown - 1].day;

  return (
    <div className="stage" data-ui="claim-record">
      <div className="stage__picker" role="group" aria-label="Pick an aged claim">
        {CLAIMS.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={i === selected ? "stage__pick is-on" : "stage__pick"}
            aria-pressed={i === selected}
            onClick={() => onSelect(i)}
          >
            <span className="tabular">{c.age} days</span>
            <span className="stage__pickPayer">{c.payer}</span>
          </button>
        ))}
      </div>

      <div className="stage__body">
        <ClaimRecord claim={claim} revealed={revealed} />
      </div>

      <div className="stage__bar">
        <span className="tabular">
          Claim {claim.id} &middot; {day} days
        </span>
        <span>{shown === claim.events.length ? claim.status : "Being worked"}</span>
      </div>
    </div>
  );
}

/**
 * The no-script fallback.
 *
 * Without script the panel above already renders the first claim in full, so
 * this adds only the two the picker cannot reach. Nothing on the page depends
 * on the script to be readable: no starting state is hidden, and the record
 * is served complete.
 */
export function ClaimStageFallback() {
  return (
    <noscript>
      <div className="stage stage--all" data-ui="claim-record">
        <div className="stage__body">
          {CLAIMS.slice(1).map((c) => (
            <ClaimRecord key={c.id} claim={c} />
          ))}
        </div>
      </div>
    </noscript>
  );
}
