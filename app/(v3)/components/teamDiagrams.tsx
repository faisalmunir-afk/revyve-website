import { Mark } from "./aiDiagrams";

/**
 * Drawings for /team/, the letter at /press/why-we-built-revyve/ and
 * /privacy/, in the same hand as the rest.
 *
 *   FourFounders   team hero: two who have built and run companies, two who
 *                  practiced medicine, all four sitting with the billing
 *                  team inside the first business
 *   TheGap         the letter: what no model can generate on one side,
 *                  email, spreadsheets and one person's memory on the
 *                  other, and the gap between them bridged
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
