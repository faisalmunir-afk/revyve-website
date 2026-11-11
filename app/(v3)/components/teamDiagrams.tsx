import { Mark } from "./aiDiagrams";

/**
 * Drawings for /team/, the Insights pages and /privacy/, in the same hand
 * as the rest.
 *
 *   FourFounders   team hero: two who have built and run companies, two who
 *                  practiced medicine, all four sitting with the billing
 *                  team inside the first business
 *   TheGap         Our Thesis: what no model can generate on one side,
 *                  email, spreadsheets and one person's memory on the
 *                  other, and the gap between them bridged
 *   TheLoop        Why We Buy Businesses: the five things ownership gives,
 *                  in the essay's order, as one ring ("These five only work
 *                  together"), with "The loop is the asset." at its centre
 *   UnderAgreement privacy: patient data inside the agreements that govern
 *                  it, and the path to general-purpose models stopped
 *
 * Every label is a phrase lifted from the copy beside it. Every stroke that
 * draws itself carries `pathLength="1"`; unarmed, all of it renders
 * finished.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const C = {
  lilac: "#b689f8",
  ice: "#dce6ff",
  signal: "#6fe3d6",
  deep: "#1b0f45",
  plate: "#3d1b8f",
};

const beat = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Label({
  x,
  y,
  children,
  anchor = "middle",
  live,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  live?: boolean;
}) {
  return (
    <text
      className="sd__label"
      x={x}
      y={y}
      textAnchor={anchor}
      fill={live ? C.signal : C.ice}
      fillOpacity={live ? 0.92 : 0.66}
    >
      {children}
    </text>
  );
}

function Person({ cx, cy, live, s = 1 }: { cx: number; cy: number; live?: boolean; s?: number }) {
  const c = live ? C.signal : C.ice;
  return (
    <g {...INK} stroke={c} strokeWidth="1.4">
      <circle cx={cx} cy={cy} r={6 * s} fill={C.deep} />
      <path d={`M${cx - 11 * s} ${cy + 18 * s}c0-6.1 4.9-11 ${11 * s}-11s${11 * s} 4.9 ${11 * s} 11`} />
    </g>
  );
}

/** A physician's badge: a cross in a ring. */
function Cross({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) {
  const a = r * 0.45;
  return (
    <g {...INK} stroke={C.signal} strokeWidth="1.4">
      <circle cx={cx} cy={cy} r={r} fill={C.deep} />
      <path d={`M${cx - a} ${cy}h${2 * a}M${cx} ${cy - a}v${2 * a}`} />
    </g>
  );
}

/** A company's badge: a briefcase, in a ring like the physician's cross. */
function Briefcase({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) {
  return (
    <g {...INK} stroke={C.lilac} strokeWidth="1.3">
      <circle cx={cx} cy={cy} r={r} fill={C.deep} />
      <rect x={cx - 4.6} y={cy - 2.4} width={9.2} height={6.6} rx={1.4} />
      <path d={`M${cx - 1.8} ${cy - 2.4}v-1.4h3.6v1.4`} />
    </g>
  );
}

/* ---- Team hero: the same four people ---------------------------------- */

export function FourFounders({ className }: { className?: string }) {
  const XS = [96, 186, 318, 408];
  const Y = 84;
  const SEATS = [160, 221, 283, 344];
  const TABLE = 222;
  return (
    <svg className={className} viewBox="0 0 504 290" aria-hidden="true" focusable="false">
      {/* Two of us have built and run companies. Two of us practiced medicine. */}
      <path data-draw="" pathLength={1} style={beat(500)} {...INK} stroke={C.lilac} strokeOpacity="0.5" strokeWidth="1.3" d="M76 46v-6h130v6" />
      <path data-draw="" pathLength={1} style={beat(600)} {...INK} stroke={C.signal} strokeOpacity="0.6" strokeWidth="1.3" d="M298 46v-6h130v6" />
      <g data-stay="" style={beat(800)}>
        <Label x={141} y={28}>built and run companies</Label>
        <Label x={363} y={28} live>practiced medicine</Label>
      </g>

      {XS.map((x, i) => (
        <g key={x}>
          <g data-stay="" style={beat(i * 90)}>
            <Person cx={x} cy={Y} s={1.3} />
          </g>
          <g data-pop="" style={beat(560 + i * 110)}>
            {i < 2 ? <Briefcase cx={x + 14} cy={Y - 10} /> : <Cross cx={x + 14} cy={Y - 10} />}
          </g>
        </g>
      ))}

      {/* The first business, with the billing team at its table. */}
      <g data-stay="" style={beat(900)}>
        <rect x={40} y={166} width={424} height={104} rx="14" fill={C.deep} stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.2" />
        <Label x={60} y={188} anchor="start" live>the first business</Label>
        <Mark kind="ledger" cx={420} cy={196} size={22} tone="base" />
      </g>
      <g data-stay="" style={beat(1050)}>
        {[190.5, 252, 313.5].map((x) => (
          <Person key={x} cx={x} cy={206} s={0.72} />
        ))}
        <rect x={140} y={TABLE} width={224} height={8} rx="4" fill={C.plate} stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.1" />
      </g>

      {/* All of us sit with the billing team. */}
      {XS.map((x, i) => (
        <path
          key={`l${x}`}
          data-draw=""
          pathLength={1}
          style={beat(1200 + i * 110)}
          {...INK}
          stroke={C.ice}
          strokeOpacity="0.5"
          strokeWidth="1.4"
          d={`M${x} ${Y + 30}C${x} 160 ${SEATS[i]} 160 ${SEATS[i]} ${TABLE - 6}`}
        />
      ))}
      {SEATS.map((x, i) => (
        <circle key={`s${x}`} data-pop="" style={beat(1650 + i * 80)} cx={x} cy={TABLE - 6} r="4.5" fill={C.signal} />
      ))}
      <g data-stay="" style={beat(1900)}>
        <Label x={252} y={256}>the billing team</Label>
      </g>
    </svg>
  );
}

/* ---- The letter: the gap ---------------------------------------------- */

export function TheGap({ className }: { className?: string }) {
  const ROWS = [78, 138, 198];
  const HAVE: { label: string; g?: "doc" | "ledger" }[] = [
    { label: "customers" },
    { label: "the payer rules", g: "doc" },
    { label: "systems", g: "ledger" },
  ];
  const RUN: { label: string; g?: "envelope" | "ledger" }[] = [
    { label: "email", g: "envelope" },
    { label: "spreadsheets", g: "ledger" },
    { label: "one person's memory" },
  ];
  return (
    <svg className={className} viewBox="0 0 600 290" aria-hidden="true" focusable="false">
      {/* What no model can generate. */}
      <g data-stay="" style={beat(0)}>
        <Label x={120} y={34} live>what no model can generate</Label>
      </g>
      {HAVE.map((h, i) => (
        <g key={h.label} data-stay="" style={beat(150 + i * 120)}>
          <rect x={30} y={ROWS[i] - 22} width={180} height={44} rx="10" fill={C.plate} stroke={C.lilac} strokeOpacity="0.55" strokeWidth="1.2" />
          {h.g ? <Mark kind={h.g} cx={58} cy={ROWS[i]} size={22} tone="lit" /> : <Person cx={58} cy={ROWS[i] - 6} s={0.8} />}
          <Label x={82} y={ROWS[i] + 4} anchor="start">
            {h.label}
          </Label>
        </g>
      ))}

      {/* They also run on. */}
      <g data-stay="" style={beat(500)}>
        <Label x={480} y={34}>They also run on</Label>
      </g>
      {RUN.map((r, i) => (
        <g key={r.label} data-stay="" style={beat(650 + i * 120)}>
          <rect x={390} y={ROWS[i] - 22} width={180} height={44} rx="10" fill={C.deep} stroke={C.lilac} strokeOpacity="0.35" strokeWidth="1.1" strokeDasharray="4 4" />
          {r.g ? <Mark kind={r.g} cx={418} cy={ROWS[i]} size={22} tone="dim" /> : <Person cx={418} cy={ROWS[i] - 6} s={0.8} />}
          <Label x={442} y={ROWS[i] + 4} anchor="start">
            {r.label}
          </Label>
        </g>
      ))}

      {/* The gap, and what crosses it. */}
      <path data-stay="" style={beat(1000)} {...INK} stroke={C.ice} strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 6" d="M250 52V224" />
      <path data-stay="" style={beat(1050)} {...INK} stroke={C.ice} strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="3 6" d="M350 52V224" />
      {ROWS.map((y, i) => (
        <path
          key={`b${y}`}
          data-draw=""
          pathLength={1}
          style={beat(1250 + i * 150)}
          {...INK}
          stroke={C.signal}
          strokeOpacity={i === 1 ? 1 : 0.55}
          strokeWidth={i === 1 ? 2 : 1.4}
          d={`M210 ${y}C262 ${y} 264 ${y - 16} 300 ${y - 16}S338 ${y} 390 ${y}`}
        />
      ))}
      {ROWS.map((y, i) => (
        <circle key={`n${y}`} data-pop="" style={beat(1600 + i * 150)} cx={300} cy={y - 16} r={4.5} fill={C.signal} />
      ))}
      <g data-stay="" style={beat(2000)}>
        <Label x={300} y={262} live>That gap is the opportunity.</Label>
      </g>
    </svg>
  );
}

/* ---- Why We Buy Businesses: the loop ---------------------------------- */

export function TheLoop({ className }: { className?: string }) {
  const cx = 300;
  const cy = 140;
  const rx = 200;
  const ry = 100;
  const at = (deg: number) => {
    const r = (deg * Math.PI) / 180;
    return { x: cx + rx * Math.cos(r), y: cy + ry * Math.sin(r) };
  };
  /* The five, in the order the essay gives them, clockwise from the top. */
  const NODES: { label: string; deg: number; w: number }[] = [
    { label: "Access", deg: -90, w: 76 },
    { label: "Ground truth", deg: -18, w: 112 },
    { label: "Aligned incentives", deg: 54, w: 146 },
    { label: "Trust", deg: 126, w: 66 },
    { label: "Scale", deg: 198, w: 66 },
  ];
  /* One chevron midway along each leg, pointing the way the loop turns. */
  const CHEVRONS = [-54, 18, 90, 162, 234].map((deg) => {
    const p = at(deg);
    const r = (deg * Math.PI) / 180;
    const angle = (Math.atan2(ry * Math.cos(r), -rx * Math.sin(r)) * 180) / Math.PI;
    return { ...p, angle };
  });
  return (
    <svg className={className} viewBox="0 0 600 290" aria-hidden="true" focusable="false">
      {/* The ring. */}
      <ellipse data-draw="" pathLength={1} style={beat(0)} {...INK} cx={cx} cy={cy} rx={rx} ry={ry} stroke={C.signal} strokeOpacity="0.7" strokeWidth="1.6" />
      {CHEVRONS.map((c, i) => (
        <path
          key={i}
          data-pop=""
          style={beat(700 + i * 120)}
          {...INK}
          stroke={C.signal}
          strokeWidth="1.8"
          d="M-4 -5L2 0L-4 5"
          transform={`translate(${c.x} ${c.y}) rotate(${c.angle})`}
        />
      ))}

      {/* The five. */}
      {NODES.map((n, i) => {
        const p = at(n.deg);
        return (
          <g key={n.label} data-pop="" style={beat(400 + i * 160)}>
            <rect x={p.x - n.w / 2} y={p.y - 15} width={n.w} height={30} rx="15" fill={i === 0 ? C.plate : C.deep} stroke={C.lilac} strokeOpacity={i === 0 ? 0.8 : 0.5} strokeWidth="1.2" />
            <Label x={p.x} y={p.y + 4}>
              {n.label}
            </Label>
          </g>
        );
      })}

      {/* The loop is the asset. */}
      <g data-stay="" style={beat(1400)}>
        <circle cx={cx} cy={cy - 14} r={5} fill={C.signal} />
        <Label x={cx} y={cy + 10} live>
          The loop is the asset.
        </Label>
      </g>
      <g data-stay="" style={beat(1600)}>
        <Label x={cx} y={276}>These five only work together.</Label>
      </g>
    </svg>
  );
}

/* ---- Our strategy: the four steps, in order ------------------------------ */

/**
 * The essay's four steps as one rising line, each step a node labelled
 * above (clear of the line, which only runs below and beside it), and its
 * own last word on them underneath: "The sequence is the strategy."
 */
export function FourSteps({ className }: { className?: string }) {
  const STEPS = [
    { x: 92, y: 196, label: "buy billing services" },
    { x: 232, y: 156, label: "rebuild from inside" },
    { x: 372, y: 116, label: "earn the right to productize" },
    { x: 512, y: 76, label: "sell the platform to the industry" },
  ];
  return (
    <svg className={className} viewBox="0 0 600 290" aria-hidden="true" focusable="false">
      <path
        data-draw=""
        pathLength={1}
        style={beat(0)}
        {...INK}
        stroke={C.signal}
        strokeOpacity="0.75"
        strokeWidth="1.8"
        d={`M40 ${STEPS[0].y + 20}H${STEPS[0].x}V${STEPS[0].y}H${STEPS[1].x}V${STEPS[1].y}H${STEPS[2].x}V${STEPS[2].y}H${STEPS[3].x}V${STEPS[3].y}H566`}
      />
      {STEPS.map((s, i) => (
        <g key={s.label}>
          <g data-pop="" style={beat(500 + i * 260)}>
            <circle cx={s.x} cy={s.y} r={15} fill={i === 3 ? C.plate : C.deep} stroke={i === 3 ? C.signal : C.lilac} strokeOpacity={i === 3 ? 0.9 : 0.6} strokeWidth="1.4" />
            <circle cx={s.x} cy={s.y} r={4.5} fill={i === 3 ? C.signal : C.lilac} />
          </g>
          <g data-stay="" style={beat(650 + i * 260)}>
            <Label x={s.x} y={s.y - 26} live={i === 3}>
              {s.label}
            </Label>
          </g>
        </g>
      ))}
      <g data-stay="" style={beat(1800)}>
        <Label x={300} y={276} live>
          The sequence is the strategy.
        </Label>
      </g>
    </svg>
  );
}

/* ---- Revyve AI: how capabilities are released --------------------------- */

/**
 * Workflow by workflow: one workflow at a time passes the four measures the
 * paragraph names, and only then is released. Labels are its own phrases.
 */
export function ReleaseGate({ className }: { className?: string }) {
  const CHECKS = ["measured coverage", "error severity", "review requirements", "consistent performance"];
  return (
    <svg className={className} viewBox="0 0 504 240" aria-hidden="true" focusable="false">
      {/* Workflows waiting, one at a time. */}
      {[0, 1, 2].map((i) => (
        <g key={i} data-stay="" style={beat(i * 120)}>
          <rect x={20} y={70 + i * 40} width={88} height={28} rx="14" fill={i === 0 ? C.plate : C.deep} stroke={C.lilac} strokeOpacity={i === 0 ? 0.7 : 0.3} strokeWidth="1.2" />
          <rect x={36} y={81.5 + i * 40} width={[52, 40, 46][i]} height={5} rx="2.5" fill={C.ice} fillOpacity={i === 0 ? 0.7 : 0.3} />
        </g>
      ))}
      <g data-stay="" style={beat(300)}>
        <Label x={64} y={210}>workflow by workflow</Label>
      </g>

      {/* The four measures it has to pass. */}
      <path data-draw="" pathLength={1} style={beat(400)} {...INK} stroke={C.ice} strokeOpacity="0.5" strokeWidth="1.4" d="M108 84H150" />
      <g data-stay="" style={beat(500)}>
        <rect x={150} y={24} width={210} height={192} rx="14" fill={C.deep} stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.2" />
      </g>
      {CHECKS.map((c, i) => (
        <g key={c}>
          <g data-pop="" style={beat(800 + i * 220)}>
            <circle cx={176} cy={60 + i * 42} r={10} fill={C.deep} stroke={C.signal} strokeWidth="1.4" />
            <path {...INK} stroke={C.signal} strokeWidth="1.8" d={`M171 ${60 + i * 42}l3.5 3.5 6.5-7`} />
          </g>
          <g data-stay="" style={beat(700 + i * 220)}>
            <Label x={196} y={64 + i * 42} anchor="start">
              {c}
            </Label>
          </g>
        </g>
      ))}

      {/* Then, and only then, released. */}
      <path data-draw="" pathLength={1} style={beat(1800)} {...INK} stroke={C.signal} strokeWidth="2" d="M360 120H430" />
      <path data-pop="" style={beat(2100)} {...INK} stroke={C.signal} strokeWidth="2" d="M422 112l8 8-8 8" />
      <g data-pop="" style={beat(2200)}>
        <rect x={436} y={104} width={52} height={32} rx="16" fill={C.plate} stroke={C.signal} strokeOpacity="0.8" strokeWidth="1.3" />
        <circle cx={462} cy={120} r={5} fill={C.signal} />
      </g>
      <g data-stay="" style={beat(2300)}>
        <Label x={462} y={160} live>released</Label>
      </g>
    </svg>
  );
}

/* ---- Privacy: under the agreements ------------------------------------ */

export function UnderAgreement({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 280" aria-hidden="true" focusable="false">
      {/* The agreements that govern it. */}
      <path data-draw="" pathLength={1} style={beat(0)} {...INK} stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.4" d="M48 52H242A18 18 0 0 1 260 70V214A18 18 0 0 1 242 232H48A18 18 0 0 1 30 214V70A18 18 0 0 1 48 52Z" />
      <g data-stay="" style={beat(300)}>
        <Label x={30} y={38} anchor="start">the agreements that govern it</Label>
      </g>
      <g data-pop="" style={beat(500)}>
        <Mark kind="shield" cx={70} cy={92} size={30} tone="lit" />
      </g>

      {/* Patient data. */}
      <g data-pop="" style={beat(700)}>
        <rect x={104} y={110} width={112} height={72} rx="10" fill={C.plate} stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.3" />
        <Person cx={128} cy={136} s={0.8} live />
        <rect x={148} y={132} width={52} height={5} rx="2.5" fill={C.ice} fillOpacity="0.6" />
        <rect x={148} y={144} width={38} height={5} rx="2.5" fill={C.ice} fillOpacity="0.35" />
        <rect x={120} y={162} width={80} height={5} rx="2.5" fill={C.ice} fillOpacity="0.25" />
      </g>
      <g data-stay="" style={beat(900)}>
        <Label x={160} y={208} live>Patient data</Label>
      </g>

      {/* The way out, stopped. */}
      <path data-stay="" style={beat(1100)} {...INK} stroke={C.ice} strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="5 6" d="M216 146H354" />
      <g data-pop="" style={beat(1500)}>
        <circle cx={368} cy={146} r={13} fill={C.deep} stroke={C.lilac} strokeWidth="1.6" />
        <path {...INK} stroke={C.lilac} strokeWidth="1.8" d="M359 137l18 18" />
      </g>

      {/* General-purpose models. */}
      {[106, 146, 186].map((y, i) => (
        <g key={y} data-stay="" style={beat(1200 + i * 100)}>
          <rect x={398} y={y - 14} width={78} height={28} rx="7" fill={C.deep} stroke={C.ice} strokeOpacity="0.22" strokeWidth="1.1" />
          <circle cx={414} cy={y} r={4} fill="none" stroke={C.ice} strokeOpacity="0.4" strokeWidth="1.2" />
          <rect x={426} y={y - 2.5} width={[38, 30, 42][i]} height={5} rx="2.5" fill={C.ice} fillOpacity="0.22" />
        </g>
      ))}
      <g data-stay="" style={beat(1600)}>
        <Label x={437} y={222}>general-purpose models</Label>
      </g>
    </svg>
  );
}
