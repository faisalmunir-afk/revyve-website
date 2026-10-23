import { Mark } from "./aiDiagrams";

/**
 * Drawings for /careers/ and /contact/, in the same hand as the rest.
 *
 *   TwoRoles    careers: the two lanes. Engineers start with the billing
 *               team, map a workflow, then build the agents and screens.
 *               Operators run a business — its customers, its team, its
 *               numbers — and make it better every week.
 *   RoleMark    one mark per role: an engineer at a screen; an operator
 *               with a line that rises
 *   OneAddress  contact: four kinds of letter converge on one address, and
 *               leave it for the right person
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
};

const beat = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Label({ x, y, children, anchor = "middle", live }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; live?: boolean }) {
  return (
    <text className="sd__label" x={x} y={y} textAnchor={anchor} fill={live ? C.signal : C.ice} fillOpacity={live ? 0.92 : 0.66}>
      {children}
    </text>
  );
}

function Person({ cx, cy, live, s = 1 }: { cx: number; cy: number; live?: boolean; s?: number }) {
  const c = live ? C.signal : C.ice;
  return (
    <g {...INK} stroke={c} strokeWidth="1.4">
      <circle cx={cx} cy={cy} r={6 * s} fill="#1b0f45" />
      <path d={`M${cx - 11 * s} ${cy + 18 * s}c0-6.1 4.9-11 ${11 * s}-11s${11 * s} 4.9 ${11 * s} 11`} />
    </g>
  );
}

/* ---- Careers: the two lanes ----------------------------------------- */

export function TwoRoles({ className }: { className?: string }) {
  const E = 78;
  const O = 214;
  return (
    <svg className={className} viewBox="0 0 504 280" aria-hidden="true" focusable="false">
      {/* Engineers. */}
      <g data-stay="" style={beat(0)}>
        <Label x={20} y={E - 52} anchor="start" live>Engineers</Label>
        <rect x={20} y={E - 30} width={84} height={60} rx="9" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.2" />
        <Person cx={48} cy={E - 10} s={0.8} />
        <Person cx={76} cy={E - 10} s={0.8} />
        <Label x={62} y={E + 48}>the billing team</Label>
      </g>
      <path data-draw="" pathLength={1} style={beat(300)} {...INK} stroke={C.ice} strokeOpacity="0.55" strokeWidth="1.6" d={`M104 ${E}L148 ${E - 18}L192 ${E + 12}L236 ${E - 14}L280 ${E + 6}L332 ${E}`} />
      {[148, 192, 236, 280].map((x, i) => (
        <circle key={x} data-pop="" style={beat(500 + i * 140)} cx={x} cy={[E - 18, E + 12, E - 14, E + 6][i]} r="4" fill={C.ice} />
      ))}
      <g data-stay="" style={beat(800)}>
        <Label x={214} y={E + 48}>a workflow</Label>
      </g>
      <g data-pop="" style={beat(1200)}>
        <rect x={336} y={E - 32} width={148} height={64} rx="10" fill="#3d1b8f" stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.3" />
        <Mark kind="checklist" cx={366} cy={E} size={24} tone="lit" />
        <rect x={390} y={E - 10} width={78} height={5} rx="2.5" fill={C.ice} fillOpacity="0.6" />
        <rect x={390} y={E + 2} width={54} height={5} rx="2.5" fill={C.ice} fillOpacity="0.35" />
        <Label x={410} y={E + 50}>the agents and screens</Label>
      </g>

      {/* Operators. */}
      <g data-stay="" style={beat(400)}>
        <Label x={20} y={O - 52} anchor="start" live>Operators</Label>
        <rect x={20} y={O - 30} width={230} height={60} rx="10" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.2" />
        <Person cx={50} cy={O - 10} s={0.8} />
        <Person cx={74} cy={O - 10} s={0.8} />
        <Mark kind="ledger" cx={130} cy={O} size={22} tone="base" />
        <Mark kind="bars" cx={196} cy={O} size={24} tone="base" />
        <Label x={135} y={O + 48}>its customers, its team and its numbers</Label>
      </g>
      {/* Better every week: a line that steps up. */}
      <path data-draw="" pathLength={1} style={beat(1000)} {...INK} stroke={C.signal} strokeWidth="2" d={`M262 ${O + 22}H300V${O + 8}H338V${O - 6}H376V${O - 20}H414V${O - 34}H470`} />
      <g data-stay="" style={beat(1700)}>
        <Label x={420} y={O + 48} live>better every week</Label>
      </g>
    </svg>
  );
}

export function RoleMark({ i, className }: { i: number; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g {...INK} stroke={C.lilac} strokeWidth="1.6">
        {i === 0 ? (
          <>
            {/* An engineer at the screen. */}
            <rect x="8" y="12" width="48" height="32" rx="5" />
            <path d="M24 52h16M32 44v8" />
            <path d="M18 24l6 5-6 5" stroke={C.signal} />
            <path d="M30 34h14" stroke={C.signal} />
          </>
        ) : (
          <>
            {/* An operator, and a line that rises. */}
            <circle cx="20" cy="20" r="7" stroke={C.ice} />
            <path d="M7 46c0-7.2 5.8-13 13-13s13 5.8 13 13" stroke={C.ice} />
            <path d="M34 52h8v-8h7v-8h7v-10" stroke={C.signal} />
          </>
        )}
      </g>
    </svg>
  );
}

/* ---- Contact: one address ------------------------------------------- */

export function OneAddress({ className }: { className?: string }) {
  const H = { x: 270, y: 130 };
  const tiles: { y: number; g: "doc" | "ledger" | "form" | "envelope" }[] = [
    { y: 34, g: "doc" },
    { y: 96, g: "ledger" },
    { y: 158, g: "form" },
    { y: 220, g: "envelope" },
  ];
  return (
    <svg className={className} viewBox="0 0 504 280" aria-hidden="true" focusable="false">
      {/* Which of these you are. */}
      {tiles.map((t, i) => (
        <g key={t.g}>
          <g data-stay="" style={beat(i * 120)}>
            <rect x={20} y={t.y - 20} width={76} height={40} rx="8" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.2" />
            <Mark kind={t.g} cx={58} cy={t.y} size={20} tone="base" />
          </g>
          <path data-draw="" pathLength={1} style={beat(400 + i * 120)} {...INK} stroke={C.ice} strokeOpacity="0.45" strokeWidth="1.4" d={`M96 ${t.y}C170 ${t.y} 180 ${H.y} ${H.x - 34} ${H.y}`} />
        </g>
      ))}

      {/* One address for everything. */}
      <g data-pop="" style={beat(1000)}>
        <circle cx={H.x} cy={H.y} r="34" fill="#3d1b8f" stroke={C.lilac} strokeOpacity="0.7" strokeWidth="1.4" />
        <Mark kind="envelope" cx={H.x} cy={H.y} size={30} tone="lit" />
        <Label x={H.x} y={H.y + 58}>one address</Label>
      </g>

      {/* And the reply, from the right person. */}
      <path data-draw="" pathLength={1} style={beat(1300)} {...INK} stroke={C.signal} strokeWidth="2" d={`M${H.x + 34} ${H.y}H404`} />
      <path data-pop="" style={beat(1700)} {...INK} stroke={C.signal} strokeWidth="2" d="M394 120l10 10-10 10" />
      <g data-pop="" style={beat(1800)}>
        <circle cx={444} cy={H.y} r="28" fill="#1b0f45" stroke={C.signal} strokeOpacity="0.8" strokeWidth="1.4" />
        <Person cx={444} cy={H.y - 9} live />
        <Label x={444} y={H.y + 52} live>the right person</Label>
      </g>
    </svg>
  );
}
