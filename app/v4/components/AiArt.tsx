/**
 * The pictures on the V4 Revyve AI page. Every word in them is a phrase
 * from app/content/revyveAi.ts. All motion is CSS, so the reduced-motion
 * rule leaves each picture finished and still.
 */

const P = {
  status: "M20 12a8 8 0 1 1-2.3-5.6M20 4v4.5h-4.5",
  queue: "M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01",
  report: "M4 20h16M7 16v-5M12 16V7M17 16v-8",
  evidence: "M19.5 11.5l-7.6 7.6a4.8 4.8 0 0 1-6.8-6.8l8-8a3.2 3.2 0 0 1 4.5 4.5l-8 8a1.6 1.6 0 0 1-2.3-2.3l7.4-7.4",
  person: "M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4.5 20.5c1-3.6 4-5.5 7.5-5.5s6.5 1.9 7.5 5.5",
  database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  portal: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z",
  ledger: "M4 5h16v14H4zM4 10h16M4 15h16M10 5v14",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  agents: "M12 4.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM5.5 14.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM18.5 14.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM10.8 9.3l-4 5.5M13.2 9.3l4 5.5M8 17h8",
  shield: "M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6zM9 12l2.2 2.2L15.5 10",
  info: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v5M12 7.8v.01",
  chart: "M4 19l5-6 4 3 7-9M15 7h5v5",
  clinic: "M4 20V9l8-5 8 5v11zM9 20v-5h6v5M12 8v4M10 10h4",
  hand: "M4 13l4-4 3 1 3-3 6 6-6 6-2-2M4 13l4 4M8 17l2-2M11 18l2-2",
  people: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c.8-3.3 3.4-5 6.5-5s5.7 1.7 6.5 5M16 4.6a3.5 3.5 0 0 1 0 6.8M17.5 15.2c2.1.5 3.6 2.1 4 4.8",
  building: "M4 21V5l8-2v18M12 8h8v13M8 8h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01M3 21h18",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  percent: "M19 5L5 19M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  steth: "M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-1.5M20 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  talk: "M4 5h16v11H9l-5 4z M8 9.5h8M8 12.5h5",
  coins: "M5 7c0-1.4 3.1-2.5 7-2.5s7 1.1 7 2.5-3.1 2.5-7 2.5S5 8.4 5 7zM5 7v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7M5 12v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5",
} as const;

export type IconName = keyof typeof P;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "ico"} aria-hidden="true">
      <path d={P[name]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" />
      <path d="M5.5 10.5l3 3 6-6.5" />
    </svg>
  );
}

/* ---- Hero: the action log, each piece of today's work checked in turn ---- */

const ROW_ICONS: IconName[] = ["status", "queue", "report", "evidence", "person"];

export function RunLogArt({ items, biller }: { items: readonly string[]; biller: string }) {
  return (
    <div className="rl" aria-hidden="true">
      <div className="rl__win glass">
        <div className="rl__bar">
          <i />
          <i />
          <i />
          <span className="rl__barSkel" />
        </div>
        <ol className="rl__rows">
          {items.map((t, i) => (
            <li className={`rl__row rl__row--${i}`} key={t}>
              <span className="rl__ico">
                <Icon name={ROW_ICONS[i] ?? "status"} />
              </span>
              <span className="rl__txt">{t}</span>
              <span className="rl__ev">
                <Icon name="evidence" className="rl__clip" />
                <span className="rl__skel" style={{ width: `${[38, 26, 44, 30, 22][i] ?? 30}px` }} />
              </span>
              <Check className={`rl__ok rl__ok--${i}`} />
            </li>
          ))}
        </ol>
      </div>

      <div className="rl__report glass">
        <Icon name="report" className="rl__reportIco" />
        <svg viewBox="0 0 120 56" className="rl__bars">
          {[30, 44, 24, 50, 36, 46].map((h, k) => (
            <rect key={k} x={4 + k * 19} y={56 - h} width="11" height={h} rx="3" style={{ animationDelay: `${k * 0.12}s` }} />
          ))}
        </svg>
      </div>

      <span className="rl__chip glass">
        <Icon name="person" className="rl__chipIco" />
        {biller}
      </span>
    </div>
  );
}

/* ---- The architecture: what goes in, the core, what does the work ------- */

export const SYSTEM_ICONS: IconName[] = ["database", "portal", "ledger", "doc"];
export const WORK_ICONS: IconName[] = ["agents", "queue", "report", "person"];

/** The wires behind the three columns, on a fixed 1200 x 400 grid. */
export function FlowWires() {
  const ys = [32, 141.3, 258.7, 368];
  const inn = (y: number) => `M380 ${y}C425 ${y} 425 200 470 200`;
  const out = (y: number) => `M730 200C775 200 775 ${y} 820 ${y}`;
  return (
    <svg className="rx-flow__wires" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
      {ys.map((y, i) => (
        <g key={y}>
          <path d={inn(y)} className="rx-wire" />
          <path d={inn(y)} pathLength={100} className="rx-pulse" style={{ animationDelay: `${i * 0.45}s` }} />
          <path d={out(y)} className="rx-wire" />
          <path d={out(y)} pathLength={100} className="rx-pulse" style={{ animationDelay: `${1.3 + i * 0.45}s` }} />
        </g>
      ))}
    </svg>
  );
}

/* ---- Release: a workflow passing each test before it is released -------- */

export function ReleaseArt({ gates }: { gates: readonly string[] }) {
  return (
    <div className="rg" aria-hidden="true">
      <span className="rg__spine" />
      <span className="rg__token" />
      <ol className="rg__gates">
        {gates.map((g, i) => (
          <li key={g} className={`rg__gate rg__gate--${i} glass`}>
            <span className="rg__lit" />
            <span className="rg__txt">{g}</span>
            <Check className={`rg__ok rg__ok--${i}`} />
          </li>
        ))}
      </ol>
    </div>
  );
}
