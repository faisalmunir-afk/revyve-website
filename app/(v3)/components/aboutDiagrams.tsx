import { G, Mark } from "./aiDiagrams";

/**
 * Five flat drawings for the About page, one per essay, each made from
 * what its essay says. Same hand as the Revyve AI and hundred-days
 * drawings: thin strokes, the brand's violets, ice for what is active,
 * teal for what is live.
 *
 *   Opportunity  the small firms most people never see — a field of them,
 *                a few lit — and the share of every dollar that is
 *                administrative work, drawn as a slice (no figure printed)
 *   Own          a business held, not sold: the firm with its name, its
 *                manager and its customers kept inside the holding's
 *                bracket; beside it, the way the others do it, a tag on a
 *                box, dimmed
 *   Healthcare   only healthcare: one lit field among others left dark,
 *                and the two founders who practiced, marked
 *   Platform     Revyve AI under every company: the layer with the
 *                companies standing on it and the models above
 *   Where        two cities on one line — the HQ and the operations — and
 *                the one firm between them
 *
 * The small labels are words lifted from the essays — "firms", "held",
 * "healthcare", "the layer", "San Francisco", "St. Louis" — never new copy.
 *
 * Every stroke that draws itself carries `pathLength="1"`. The data
 * attributes are the contract with the stylesheet. Unarmed, all of it
 * renders finished.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const C = {
  violet: "#6420d4",
  lilac: "#b689f8",
  ice: "#dce6ff",
  signal: "#6fe3d6",
};

const beat = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Block({ x, y, w, h, lit, dim }: { x: number; y: number; w: number; h: number; lit?: boolean; dim?: boolean }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="8"
      fill={lit ? "#3d1b8f" : dim ? "#140b36" : "#1b0f45"}
      stroke={C.lilac}
      strokeOpacity={lit ? 0.6 : dim ? 0.14 : 0.26}
      strokeWidth="1.3"
    />
  );
}

function Label({ x, y, children, anchor = "middle", live }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; live?: boolean }) {
  return (
    <text className="sd__label" x={x} y={y} textAnchor={anchor} fill={live ? C.signal : C.ice} fillOpacity={live ? 0.9 : 0.6}>
      {children}
    </text>
  );
}

/* ---- The opportunity ------------------------------------------------- */

const FIRMS: { x: number; y: number; w: number; h: number; g?: keyof typeof G; lit?: boolean }[] = [
  { x: 18, y: 30, w: 58, h: 40, g: "ledger", lit: true },
  { x: 86, y: 18, w: 46, h: 32 },
  { x: 142, y: 40, w: 70, h: 46, g: "inbox" },
  { x: 222, y: 22, w: 40, h: 30 },
  { x: 24, y: 86, w: 44, h: 30 },
  { x: 80, y: 72, w: 52, h: 48, g: "calendar", lit: true },
  { x: 144, y: 98, w: 40, h: 28 },
  { x: 196, y: 70, w: 64, h: 42, g: "form" },
  { x: 36, y: 130, w: 66, h: 40, g: "doc" },
  { x: 112, y: 134, w: 46, h: 30 },
  { x: 170, y: 140, w: 56, h: 40, g: "folder", lit: true },
  { x: 236, y: 126, w: 36, h: 28 },
];

export function Opportunity({ className }: { className?: string }) {
  /* The slice: the administrative share of every dollar. Its angle is
     between the two figures the copy gives and is not printed. */
  const cx = 404, cy = 110, r = 62;
  const frac = 0.22;
  const a = -Math.PI / 2, b = a + frac * 2 * Math.PI;
  const ax = cx + r * Math.cos(a), ay = cy + r * Math.sin(a);
  const bx = cx + r * Math.cos(b), by = cy + r * Math.sin(b);
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* The firms most people never see. A few are lit: the ones that stand to gain. */}
      {FIRMS.map((f, i) => (
        <g key={i} data-stay="" style={beat(i * 50)}>
          <Block x={f.x} y={f.y} w={f.w} h={f.h} lit={f.lit} dim={!f.g} />
          {f.g && <Mark kind={f.g} cx={f.x + f.w / 2} cy={f.y + f.h / 2} size={Math.min(20, f.h * 0.5)} tone={f.lit ? "lit" : "dim"} />}
        </g>
      ))}
      <g data-stay="" style={beat(700)}>
        <Label x={18} y={200} anchor="start">the firms most people never see</Label>
      </g>

      {/* Every dollar the country spends on care. */}
      <circle data-draw="" pathLength={1} style={beat(500)} {...INK} stroke={C.ice} strokeOpacity="0.5" strokeWidth="2" cx={cx} cy={cy} r={r} />
      {/* The share that is administrative work. */}
      <path
        data-draw=""
        pathLength={1}
        style={beat(1100)}
        {...INK}
        stroke={C.signal}
        strokeWidth="2.2"
        d={`M${cx} ${cy}L${ax} ${ay}A${r} ${r} 0 0 1 ${bx} ${by}Z`}
      />
      <path data-stay="" style={beat(1600)} d={`M${cx} ${cy}L${ax} ${ay}A${r} ${r} 0 0 1 ${bx} ${by}Z`} fill={C.signal} fillOpacity="0.16" />
      <g data-stay="" style={beat(1800)}>
        <Label x={cx} y={200} live>administrative work</Label>
      </g>
    </svg>
  );
}

/* ---- Why we own ------------------------------------------------------ */

export function Own({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* The holding's bracket: what is inside it is kept. */}
      <path data-draw="" pathLength={1} style={beat(0)} {...INK} stroke={C.ice} strokeWidth="2" d="M40 30H24V190H40" />
      <path data-draw="" pathLength={1} style={beat(0)} {...INK} stroke={C.ice} strokeWidth="2" d="M280 30H296V190H280" />

      {/* The business, with its name, its manager and its customers. */}
      <g data-pop="" style={beat(500)}>
        <Block x={64} y={52} w={192} h={116} lit />
        <Mark kind="ledger" cx={100} cy={84} size={24} tone="lit" />
        {/* its name */}
        <rect x={124} y={76} width={96} height={5} rx="2.5" fill={C.ice} fillOpacity="0.7" />
        <rect x={124} y={88} width={60} height={4} rx="2" fill={C.ice} fillOpacity="0.4" />
      </g>
      {/* its manager */}
      <g data-pop="" style={beat(900)}>
        <circle cx={100} cy={128} r="7" fill="#1b0f45" stroke={C.ice} strokeWidth="1.4" />
        <path {...INK} stroke={C.ice} strokeWidth="1.4" d="M88 148c0-6.6 5.4-12 12-12s12 5.4 12 12" />
      </g>
      {/* its customers */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} data-pop="" style={beat(1100 + i * 120)}>
          <circle cx={140 + i * 26} cy={134} r="5.5" fill="#1b0f45" stroke={C.lilac} strokeWidth="1.3" />
          <path {...INK} stroke={C.lilac} strokeWidth="1.3" d={`M${130 + i * 26} 150c0-5.5 4.5-10 10-10s10 4.5 10 10`} />
        </g>
      ))}
      <g data-stay="" style={beat(1500)}>
        <Label x={160} y={204}>held, not sold</Label>
      </g>

      {/* The other way: software sold to them from outside. Dimmed. */}
      <g data-stay="" style={beat(1700)}>
        <Block x={352} y={82} w={120} h={60} dim />
        <path {...INK} stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.3" d="M372 104h14l10 10-10 10h-14z" />
        <circle cx={378} cy={114} r="1.8" fill={C.lilac} fillOpacity="0.5" />
        <rect x={404} y={106} width={48} height={4} rx="2" fill={C.lilac} fillOpacity="0.25" />
        <rect x={404} y={116} width={32} height={4} rx="2" fill={C.lilac} fillOpacity="0.25" />
        <Label x={412} y={168}>sold from outside</Label>
      </g>
    </svg>
  );
}

/* ---- Only healthcare ------------------------------------------------- */

const FIELDS: { x: number; label?: string; lit?: boolean }[] = [
  { x: 40 },
  { x: 150 },
  { x: 260, label: "healthcare", lit: true },
  { x: 370 },
];

export function Healthcare({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {FIELDS.map((f, i) => (
        <g key={i} data-stay="" style={beat(i * 140)}>
          <Block x={f.x} y={44} w={94} h={94} lit={f.lit} dim={!f.lit} />
          {f.lit ? (
            <>
              {/* The cross: what the field is. */}
              <path {...INK} stroke={C.ice} strokeOpacity="0.9" strokeWidth="2" d={`M${f.x + 47} 70v42M${f.x + 26} 91h42`} />
            </>
          ) : (
            <path {...INK} stroke={C.lilac} strokeOpacity="0.2" strokeWidth="1.3" d={`M${f.x + 30} 91h34`} />
          )}
          {f.label && <Label x={f.x + 47} y={162} live>{f.label}</Label>}
        </g>
      ))}
      {/* The ring: only this one. */}
      <rect data-draw="" pathLength={1} style={beat(800)} {...INK} stroke={C.signal} strokeWidth="2" x={250} y={34} width={114} height={114} rx="12" />
      {/* Two of the four founders practiced medicine. */}
      {[0, 1, 2, 3].map((i) => {
        const x = 220 + i * 30;
        const md = i < 2;
        return (
          <g key={i} data-pop="" style={beat(1300 + i * 140)}>
            <circle cx={x} cy={190} r="6.5" fill="#1b0f45" stroke={md ? C.signal : C.lilac} strokeOpacity={md ? 1 : 0.5} strokeWidth="1.4" />
            <path {...INK} stroke={md ? C.signal : C.lilac} strokeOpacity={md ? 1 : 0.5} strokeWidth="1.4" d={`M${x - 11} 210c0-6 5-11 11-11s11 5 11 11`} />
          </g>
        );
      })}
      <g data-stay="" style={beat(2000)}>
        <Label x={190} y={206} anchor="end" live>practiced medicine</Label>
      </g>
    </svg>
  );
}

/* ---- Revyve AI ------------------------------------------------------- */

export function Platform({ className }: { className?: string }) {
  const BAR = 150;
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* The models above. */}
      {[0, 1, 2].map((i) => {
        const cx = 180 + i * 72;
        return (
          <g key={i} data-pop="" style={beat(1300 + i * 140)}>
            <circle cx={cx} cy={38} r="12" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.3" />
            <circle cx={cx} cy={38} r="3.5" fill={C.signal} />
            <path data-draw="" pathLength={1} style={beat(1500 + i * 140)} {...INK} stroke={C.lilac} strokeOpacity="0.5" strokeWidth="1.3" d={`M${cx} 50V${BAR - 10}`} />
          </g>
        );
      })}
      <g data-stay="" style={beat(1800)}>
        <Label x={252} y={20}>frontier models</Label>
      </g>

      {/* Every company we own, standing on it. */}
      {[0, 1, 2, 3].map((i) => {
        const x = 60 + i * 104;
        return (
          <g key={i} data-pop="" style={beat(700 + i * 140)}>
            <Block x={x} y={BAR - 54} w={72} h={44} lit={i === 0} />
            <Mark kind={(["ledger", "inbox", "calendar", "form"] as const)[i]} cx={x + 36} cy={BAR - 32} size={20} tone={i === 0 ? "lit" : "base"} />
            <path {...INK} stroke={C.ice} strokeOpacity="0.5" strokeWidth="1.4" d={`M${x + 36} ${BAR - 10}V${BAR}`} />
          </g>
        );
      })}

      {/* The layer, under all of them. */}
      <path data-draw="" pathLength={1} style={beat(0)} {...INK} stroke={C.ice} strokeWidth="3" d={`M24 ${BAR}H480`} />
      <path data-draw="" pathLength={1} style={beat(200)} {...INK} stroke={C.violet} strokeWidth="9" strokeOpacity="0.35" d={`M24 ${BAR}H480`} />
      <g data-stay="" style={beat(600)}>
        <Label x={24} y={BAR + 30} anchor="start" live>the platform under every company we own</Label>
      </g>
    </svg>
  );
}

/* ---- Where we are ---------------------------------------------------- */

export function Where({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* One line between the two. */}
      <path data-draw="" pathLength={1} style={beat(400)} {...INK} stroke={C.ice} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="5 7" d="M80 110H424" />

      {/* Headquarters. */}
      <g data-pop="" style={beat(0)}>
        <circle cx={80} cy={110} r="26" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.4" />
        <circle cx={80} cy={110} r="6" fill={C.lilac} />
        <Label x={80} y={162}>San Francisco</Label>
        <Label x={80} y={180}>headquarters</Label>
      </g>

      {/* Operations, and the first company there. */}
      <g data-pop="" style={beat(1200)}>
        <circle cx={424} cy={110} r="26" fill="#1b0f45" stroke={C.signal} strokeOpacity="0.8" strokeWidth="1.4" />
        <circle cx={424} cy={110} r="6" fill={C.signal} />
        <Label x={424} y={162} live>St. Louis</Label>
        <Label x={424} y={180}>operations</Label>
      </g>
      <g data-pop="" style={beat(1600)}>
        <Block x={216} y={70} w={72} h={48} lit />
        <Mark kind="ledger" cx={252} cy={94} size={22} tone="lit" />
        <Label x={252} y={144}>the first company</Label>
      </g>
    </svg>
  );
}
