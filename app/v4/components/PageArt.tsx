/**
 * Pictures for the V4 For practices and Sell your firm pages. Every word in
 * them is a phrase from app/content/practices.ts or sell.ts, passed in by
 * the page. All motion is CSS; the reduced-motion rule leaves them still.
 */
import { Icon, type IconName } from "./AiArt";

function Check({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" />
    </svg>
  );
}

/** A row in a glass window that lights and is checked in turn (styles shared with the Revyve AI log). */
function Row({ i, icon, text }: { i: number; icon: IconName; text: string }) {
  return (
    <li className={`rl__row rl__row--${i}`}>
      <span className="rl__ico">
        <Icon name={icon} />
      </span>
      <span className="rl__txt">{text}</span>
      <span />
      <Check className={`rl__ok rl__ok--${i}`} />
    </li>
  );
}

/* ---- For practices: claims age along a line; past 120 days each is worked -- */

export function AgedClaimArt({ line, steps, billers }: { line: string; steps: readonly string[]; billers: string }) {
  const icons: IconName[] = ["status", "info", "chart"];
  return (
    <div className="ac" aria-hidden="true">
      <div className="ac__axis glass">
        <div className="ac__track">
          <span className="ac__late" />
          {[0, 1, 2, 3, 4].map((k) => (
            <span key={k} className="ac__dot" style={{ animationDelay: `${-k * 1.4}s` }} />
          ))}
          <span className="ac__line">
            <span className="ac__tag">{line}</span>
          </span>
        </div>
      </div>
      <div className="ac__card glass">
        <div className="rl__bar">
          <i />
          <i />
          <i />
          <span className="rl__barSkel" />
        </div>
        <ol className="rl__rows">
          {steps.map((t, i) => (
            <Row key={t} i={i} icon={icons[i] ?? "status"} text={t} />
          ))}
        </ol>
      </div>
      <span className="ac__chip glass">
        <Icon name="person" className="rl__chipIco" />
        <span className="ac__chipText">{billers}</span>
      </span>
    </div>
  );
}

/* ---- Sell your firm: the business, and what stays with it ---------------- */

export function BusinessArt({ title, parts, hold }: { title: string; parts: readonly string[]; hold: string }) {
  const icons: IconName[] = ["people", "person", "clock"];
  return (
    <div className="bz" aria-hidden="true">
      <div className="bz__win glass">
        <div className="rl__bar">
          <i />
          <i />
          <i />
          <span className="rl__barSkel" />
        </div>
        <div className="bz__head">
          <span className="bz__mark">
            <Icon name="building" />
          </span>
          <p className="bz__title">{title}</p>
        </div>
        <ol className="rl__rows bz__rows">
          {parts.map((t, i) => (
            <Row key={t} i={i} icon={icons[i] ?? "people"} text={t} />
          ))}
        </ol>
      </div>
      <span className="bz__chip glass">
        <span className="bz__seal">
          <Icon name="shield" />
        </span>
        {hold}
      </span>
    </div>
  );
}

/* ---- Sell your firm: the team gets the tools, the platform gets the work --- */

export function LoopArt({ team, platform, tools, learns }: { team: string; platform: string; tools: readonly string[]; learns: string }) {
  return (
    <div className="lp" aria-hidden="true">
      <div className="lp__node">
        <span className="lp__mark lp__mark--logo">
          <img src="/brand/revyve-logo.png" alt="" width={600} height={359} />
        </span>
        {platform}
      </div>
      <div className="lp__lanes">
        <div className="lp__lane lp__lane--down">
          <span className="lp__wire">
            <i />
          </span>
          <ul className="lp__chips">
            {tools.map((t) => (
              <li key={t} className="glass">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lp__lane lp__lane--up">
          <span className="lp__wire">
            <i />
          </span>
          <ul className="lp__chips">
            <li className="glass">{learns}</li>
          </ul>
        </div>
      </div>
      <div className="lp__node">
        <span className="lp__mark">
          <Icon name="people" />
        </span>
        {team}
      </div>
    </div>
  );
}
