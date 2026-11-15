import { useMemo, useRef } from "react";
import { useAnimationFrame, useInView, useReducedMotion } from "framer-motion";

/* An isometric model of a gas plant on a sand slab, with a launch strip outside the fence.
   Each step of the survey is acted out frame by frame:
   0 the aircraft waits on the strip while waypoints are set over each section of the plant,
   1 it takes off and flies through the waypoints with its sensor pointed down,
   2 it circles the unit where methane is found and a crew member walks to it,
   3 the crew member is at the unit while the aircraft loiters and the report is sent.
   World units: the slab is 700 x 600 (x from -100 to 600); z is height. */

type V3 = [number, number, number];
const CO = 0.866, SI = 0.5;
const P = (x: number, y: number, z = 0): [number, number] => [(x - y) * CO, (x + y) * SI - z];
const pts = (a: [number, number][]) => a.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

const COL = {
  navy: "hsl(211 65% 15%)",
  gold: "hsl(37 87% 53%)",
  green: "hsl(150 58% 28%)",
  slabTop: "hsl(38 34% 89%)",
  slabL: "hsl(31 24% 72%)",
  slabR: "hsl(29 21% 62%)",
  road: "hsl(36 14% 78%)",
  top: "hsl(40 25% 97%)",
  faceL: "hsl(210 14% 86%)",
  faceR: "hsl(211 14% 74%)",
};

/* ---------- static scene ---------- */

const Box = ({ x, y, w, d, h, z = 0, top = COL.top, l = COL.faceL, r = COL.faceR }: { x: number; y: number; w: number; d: number; h: number; z?: number; top?: string; l?: string; r?: string }) => (
  <g stroke={COL.navy} strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round">
    <polygon points={pts([P(x + w, y, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x + w, y, z + h)])} fill={r} />
    <polygon points={pts([P(x, y + d, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x, y + d, z + h)])} fill={l} />
    <polygon points={pts([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)])} fill={top} />
  </g>
);

const Cyl = ({ cx, cy, r, h, z = 0, ring = false }: { cx: number; cy: number; r: number; h: number; z?: number; ring?: boolean }) => {
  const [sx, sb] = P(cx, cy, z);
  const st = sb - h, rx = r * 1.2247, ry = r * 0.7071;
  return (
    <g stroke={COL.navy} strokeOpacity=".35" strokeWidth=".8">
      <path d={`M ${sx - rx} ${st} L ${sx - rx} ${sb} A ${rx} ${ry} 0 0 0 ${sx + rx} ${sb} L ${sx + rx} ${st} Z`} fill="url(#cylSide)" />
      <ellipse cx={sx} cy={st} rx={rx} ry={ry} fill={COL.top} />
      {ring && <ellipse cx={sx} cy={st} rx={rx * 0.62} ry={ry * 0.62} fill="none" strokeOpacity=".25" />}
    </g>
  );
};

const Ground = ({ x, y, w, d, fill, opacity = 1 }: { x: number; y: number; w: number; d: number; fill: string; opacity?: number }) => (
  <polygon points={pts([P(x, y), P(x + w, y), P(x + w, y + d), P(x, y + d)])} fill={fill} opacity={opacity} />
);

const X0 = -100;
const SiteModel = () => (
  <g>
    {/* slab */}
    <polygon points={pts([P(X0, 600), P(600, 600), [P(600, 600)[0], P(600, 600)[1] + 26], [P(X0, 600)[0], P(X0, 600)[1] + 26]])} fill={COL.slabL} />
    <polygon points={pts([P(600, 600), P(600, 0), [P(600, 0)[0], P(600, 0)[1] + 26], [P(600, 600)[0], P(600, 600)[1] + 26]])} fill={COL.slabR} />
    <polygon points={pts([P(X0, 0), P(600, 0), P(600, 600), P(X0, 600)])} fill={COL.slabTop} />

    {/* paved area inside the fence */}
    <Ground x={90} y={25} w={485} d={550} fill="hsl(40 22% 93%)" />
    {/* desert shrubs outside the fence */}
    {[[-82, 40], [-75, 250], [-86, 575], [60, 40], [62, 300], [55, 585], [150, 588], [330, 590], [470, 586], [588, 300], [590, 450]].map(([sx, sy], k) => {
      const [gx, gy] = P(sx, sy);
      return <g key={k}><ellipse cx={gx + 3} cy={gy + 2} rx="9" ry="4" fill={COL.navy} fillOpacity=".12" /><ellipse cx={gx} cy={gy - 4} rx="7" ry="6" fill="hsl(95 22% 52%)" /><ellipse cx={gx - 2} cy={gy - 6} rx="3.5" ry="3" fill="hsl(95 25% 62%)" /></g>;
    })}

    {/* launch strip outside the fence */}
    <Ground x={-42} y={140} w={74} d={430} fill="hsl(36 12% 74%)" />
    <polyline points={pts([P(-5, 160), P(-5, 550)])} stroke="white" strokeWidth="1.6" strokeDasharray="8 7" />

    {/* roads and bund */}
    <Ground x={90} y={360} w={485} d={20} fill={COL.road} />
    <Ground x={235} y={25} w={15} d={550} fill={COL.road} />
    <polygon points={pts([P(255, 405), P(530, 405), P(530, 495), P(255, 495)])} fill="none" stroke={COL.navy} strokeOpacity=".3" strokeWidth="1.2" />

    {/* fence */}
    <polygon points={pts([P(90, 25), P(575, 25), P(575, 575), P(90, 575)])} fill="none" stroke={COL.navy} strokeOpacity=".5" strokeWidth="1" strokeDasharray="5 4" />
  </g>
);

/* Objects drawn back to front (sorted by depth). */
const Objects = () => (
  <g>
    <Cyl cx={560} cy={40} r={5} h={150} />
    <Box x={110} y={50} w={120} d={140} h={36} />
    <Cyl cx={145} cy={95} r={9} h={96} z={36} />
    <Cyl cx={190} cy={140} r={9} h={80} z={36} />
    <Box x={260} y={50} w={120} d={140} h={30} />
    <Cyl cx={320} cy={115} r={15} h={118} z={30} ring />
    <Box x={410} y={50} w={145} d={100} h={24} />
    <Cyl cx={445} cy={85} r={12} h={26} z={24} ring />
    <Cyl cx={505} cy={85} r={12} h={26} z={24} ring />
    <Box x={110} y={212} w={445} d={12} h={14} top="hsl(211 16% 70%)" l="hsl(211 16% 60%)" r="hsl(211 16% 52%)" />
    <Box x={260} y={252} w={120} d={80} h={22} />
    <Box x={420} y={250} w={120} d={90} h={32} />
    <Cyl cx={455} cy={280} r={10} h={40} z={32} />
    <Box x={-88} y={455} w={30} d={24} h={16} top="white" />
    <Cyl cx={-73} cy={448} r={1.6} h={38} z={0} />
    <Box x={110} y={470} w={60} d={48} h={20} top="hsl(150 20% 92%)" />
    <Cyl cx={300} cy={450} r={33} h={40} ring />
    <Cyl cx={390} cy={450} r={33} h={40} ring />
    <Cyl cx={480} cy={450} r={33} h={40} ring />
  </g>
);

/* ---------- motion ---------- */

type Track = { len: number; cum: number[]; at: (s: number) => V3 };
const track = (p: V3[]): Track => {
  const seg = p.slice(1).map((q, i) => Math.hypot(q[0] - p[i][0], q[1] - p[i][1], q[2] - p[i][2]));
  const cum = [0];
  seg.forEach((d) => cum.push(cum[cum.length - 1] + d));
  const len = cum[cum.length - 1];
  return {
    len,
    cum,
    at: (s) => {
      let d = Math.max(0, Math.min(s, len));
      for (let i = 0; i < seg.length; i++) {
        if (d <= seg[i] || i === seg.length - 1) {
          const f = seg[i] ? Math.min(d / seg[i], 1) : 0;
          return [p[i][0] + (p[i + 1][0] - p[i][0]) * f, p[i][1] + (p[i + 1][1] - p[i][1]) * f, p[i][2] + (p[i + 1][2] - p[i][2]) * f];
        }
        d -= seg[i];
      }
      return p[p.length - 1];
    },
  };
};
const circle = (cx: number, cy: number, r: number, z: number, a: number): V3 => [cx + r * Math.cos(a), cy + r * Math.sin(a), z];

const ALT = 205;
const PARK: V3 = [-5, 430, 4];
// One waypoint over each row of the plant, flown as a serpentine.
const WP: [number, number][] = [[150, 95], [515, 95], [515, 292], [150, 292], [150, 450], [515, 450]];
const FLIGHT_PTS: V3[] = [PARK, [-5, 250, 4], [-5, 110, 120], ...WP.map(([x, y]) => [x, y, ALT] as V3)];
const FLIGHT = track(FLIGHT_PTS);
const FIRST_WP = 3; // index of WP[0] in FLIGHT_PTS
const WALK = track([[150, 532, 0], [242, 532, 0], [242, 370, 0], [470, 370, 0], [470, 354, 0]]);
const LEAK = { x: 480, y: 295, z: 32 };

// Aircraft drawn in its own plane (heading +x): solar wing, fuselage, tailplane. Drawn larger than scale so it reads.
const K = 2.1;
const sc = (a: [number, number][]) => a.map(([u, v]) => [u * K, v * K] as [number, number]);
const WING = sc([[4, -44], [15, -44], [15, 44], [4, 44]]);
const CELLS = sc([[6, -41], [13, -41], [13, 41], [6, 41]]);
const BODY = sc([[-30, -2.6], [24, -2.2], [27, 0], [24, 2.2], [-30, 2.6]]);
const TAIL = sc([[-31, -13], [-24, -13], [-24, 13], [-31, 13]]);
const shape = (poly: [number, number][], x: number, y: number, z: number, hd: number) => {
  const c = Math.cos(hd), s = Math.sin(hd);
  return pts(poly.map(([u, v]) => P(x + u * c - v * s, y + u * s + v * c, z)));
};

const PUFFS = 8;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export const IsoPlant = ({ step }: { step: number }) => {
  const root = useRef<SVGSVGElement>(null);
  const inView = useInView(root, { amount: 0.4 });
  const reduced = useReducedMotion();
  const refs = useRef<Record<string, SVGElement | null>>({});
  const set = (k: string) => (el: SVGElement | null) => { refs.current[k] = el; };
  const start = useRef({ step: -1, t0: 0 });
  const routeD = useMemo(() => "M " + FLIGHT_PTS.map(([x, y, z]) => P(x, y, z).map((n) => n.toFixed(1)).join(" ")).join(" L "), []);

  useAnimationFrame((time) => {
    if (!inView) { start.current.step = -1; return; }
    if (start.current.step !== step) start.current = { step, t0: time };
    const t = reduced ? 8 : (time - start.current.t0) / 1000;
    const r = refs.current;
    const along = (tr: Track, s: number): [V3, number] => {
      const a = tr.at(s), b = tr.at(s + 2);
      return [a, Math.atan2(b[1] - a[1], b[0] - a[0])];
    };

    // ---- aircraft
    let pos: V3 = PARK, hd = -Math.PI / 2, beam = false, flown = 0, planeOp = 1, sFlight = 0;
    if (step === 0) {
      planeOp = clamp01(t / 0.4);
    } else if (step === 1) {
      const v = 500, per = FLIGHT.len / v + 1.2, tl = reduced ? FLIGHT.cum[FIRST_WP + 3] / v : t % per;
      sFlight = Math.min(tl * v, FLIGHT.len);
      [pos, hd] = along(FLIGHT, sFlight);
      if (sFlight >= FLIGHT.len - 0.5) hd = 0;
      beam = sFlight >= FLIGHT.cum[FIRST_WP];
      flown = sFlight / FLIGHT.len;
      planeOp = reduced ? 1 : Math.min(1, tl / 0.4, (per - tl) / 0.4);
    } else if (step === 2) {
      const a = t * 0.8; pos = circle(LEAK.x, LEAK.y, 125, 150, a); hd = a + Math.PI / 2; beam = true; flown = 1; planeOp = clamp01(t / 0.5);
    } else {
      const a = t * 0.35; pos = circle(330, 300, 205, 235, a); hd = a + Math.PI / 2; flown = 1; planeOp = clamp01(t / 0.5);
    }
    const [x, y, z] = pos;
    r.wing?.setAttribute("points", shape(WING, x, y, z, hd));
    r.cells?.setAttribute("points", shape(CELLS, x, y, z, hd));
    r.body?.setAttribute("points", shape(BODY, x, y, z, hd));
    r.tail?.setAttribute("points", shape(TAIL, x, y, z, hd));
    r.swing?.setAttribute("points", shape(WING, x, y, 0, hd));
    r.sbody?.setAttribute("points", shape(BODY, x, y, 0, hd));
    r.stail?.setAttribute("points", shape(TAIL, x, y, 0, hd));
    if (r.plane) (r.plane as SVGGElement).style.opacity = String(planeOp);
    if (r.shadow) (r.shadow as SVGGElement).style.opacity = String(planeOp);
    const [ax, ay] = P(x, y, z), [gx, gy] = P(x, y, 0);
    const bm = r.beam as SVGLineElement | null;
    if (bm) { bm.setAttribute("x1", ax.toFixed(1)); bm.setAttribute("y1", ay.toFixed(1)); bm.setAttribute("x2", gx.toFixed(1)); bm.setAttribute("y2", gy.toFixed(1)); bm.style.opacity = beam ? String(planeOp) : "0"; }
    const ft = r.foot as SVGEllipseElement | null;
    if (ft) { ft.setAttribute("cx", gx.toFixed(1)); ft.setAttribute("cy", gy.toFixed(1)); ft.style.opacity = beam ? String(planeOp) : "0"; }

    // ready pulse around the parked aircraft
    const rd = r.ready as SVGEllipseElement | null;
    if (rd) { const k = (t % 1.6) / 1.6; rd.setAttribute("rx", String(40 + k * 60)); rd.setAttribute("ry", String((40 + k * 60) * 0.58)); rd.style.opacity = step === 0 && t > 1.8 ? String(0.7 * (1 - k)) : "0"; }

    // ---- route plan and flown path
    const route = r.route as SVGPathElement | null;
    if (route) {
      const draw = step === 0 ? clamp01((t - 0.2) / 1.5) : 1;
      route.style.strokeDashoffset = String(1 - draw);
      const rv = r.routeVis as SVGPathElement | null;
      if (rv) rv.style.opacity = step <= 1 ? "1" : ".35";
    }
    const fl = r.flown as SVGPathElement | null;
    if (fl) { fl.style.strokeDashoffset = String(1 - flown); fl.style.opacity = step === 1 ? "1" : step > 1 ? ".3" : "0"; }

    // ---- waypoints: set one by one in step 0, ticked off as they are passed in step 1
    WP.forEach((_, i) => {
      const g = r[`wp${i}`] as SVGGElement | null;
      const dot = r[`wpd${i}`] as SVGCircleElement | null;
      const num = r[`wpn${i}`] as SVGTextElement | null;
      if (!g) return;
      const shown = step === 0 ? clamp01((t - 0.2 - i * 0.22) / 0.22) : 1;
      const pop = step === 0 ? 1 + 0.35 * Math.sin(Math.PI * clamp01((t - 0.2 - i * 0.22) / 0.22)) : 1;
      g.style.opacity = String(step >= 2 ? shown * 0.4 : shown);
      const [wx, wy] = P(WP[i][0], WP[i][1], ALT);
      g.setAttribute("transform", `translate(${wx.toFixed(1)} ${wy.toFixed(1)}) scale(${pop.toFixed(3)})`);
      const visited = step >= 2 || (step === 1 && sFlight >= FLIGHT.cum[FIRST_WP + i] - 1);
      dot?.setAttribute("fill", visited ? COL.gold : COL.navy);
      num?.setAttribute("fill", visited ? COL.navy : "white");
    });
    const drops = r.drops as SVGGElement | null;
    if (drops) drops.style.opacity = String(step === 0 ? clamp01((t - 0.2) / 1.5) * 0.9 : step === 1 ? 0.9 : 0.3);

    // ---- methane: puffs rising and drifting from the leaking unit, once found
    for (let i = 0; i < PUFFS; i++) {
      const el = r[`puff${i}`] as SVGEllipseElement | null;
      if (!el) continue;
      if (step < 2) { el.style.opacity = "0"; continue; }
      const life = ((t + i * (4 / PUFFS)) % 4) / 4;
      const [px, py] = P(LEAK.x + life * 110, LEAK.y - life * 30, LEAK.z + 8 + life * 70);
      const rad = 10 + life * 38;
      el.setAttribute("cx", px.toFixed(1)); el.setAttribute("cy", py.toFixed(1));
      el.setAttribute("rx", (rad * 1.2).toFixed(1)); el.setAttribute("ry", rad.toFixed(1));
      el.style.opacity = String(0.34 * Math.sin(Math.PI * Math.min(1, life * 1.4)) * (1 - life * 0.6) * Math.min(1, t / 1));
    }
    const ring = r.ring as SVGEllipseElement | null;
    if (ring) { const k = (t % 1.8) / 1.8; ring.setAttribute("rx", String(20 + k * 46)); ring.setAttribute("ry", String((20 + k * 46) * 0.58)); ring.style.opacity = step >= 2 ? String(0.8 * (1 - k)) : "0"; }
    const pin = r.pin as SVGGElement | null;
    if (pin) { const [qx, qy] = P(LEAK.x - 25, LEAK.y - 20, 70 + Math.sin(t * 2.4) * 4); pin.setAttribute("transform", `translate(${qx.toFixed(1)} ${qy.toFixed(1)}) scale(1.8)`); pin.style.opacity = step >= 2 ? String(clamp01((t - (step === 2 ? 0.5 : 0)) / 0.4)) : "0"; }

    // ---- crew member: waits by the control room, walks to the unit once the leak is pinned
    const cw = r.crew as SVGGElement | null;
    if (cw) {
      const sw = step < 2 ? 0 : step === 2 ? (reduced ? WALK.len : Math.min(Math.max(0, t - 0.7) * 170, WALK.len)) : WALK.len;
      const walking = step === 2 && sw > 0 && sw < WALK.len && !reduced;
      const [cx, cy] = WALK.at(sw), [nx] = P(...WALK.at(sw + 3)), [hx, hy] = P(cx, cy);
      const dir = walking ? (nx - hx >= 0 ? 1 : -1) : 1;
      const ph = t * 16;
      const bob = walking ? -Math.abs(Math.sin(ph)) * 2.6 : step === 3 ? -Math.max(0, Math.sin(t * 3)) * 1.6 : 0;
      cw.setAttribute("transform", `translate(${hx.toFixed(1)} ${(hy + bob * 2.5).toFixed(1)}) scale(${2.5 * dir} 2.5)`);
      const sl = walking ? Math.sin(ph) * 30 : 0;
      r.legL?.setAttribute("transform", `rotate(${sl.toFixed(1)} 0 -16)`);
      r.legR?.setAttribute("transform", `rotate(${(-sl).toFixed(1)} 0 -16)`);
      r.armL?.setAttribute("transform", `rotate(${(-sl * 0.9).toFixed(1)} 0 -29)`);
      const wave = step === 3 && !reduced ? -150 + Math.sin(t * 7) * 18 : sl * 0.9;
      r.armR?.setAttribute("transform", `rotate(${wave.toFixed(1)} 0 -29)`);
      const ok = r.ok as SVGGElement | null;
      if (ok) ok.style.opacity = step === 3 ? String(clamp01(t / 0.4)) : "0";
    }

    // flare flame flicker
    const fm = r.flame as SVGPathElement | null;
    if (fm) { const k = reduced ? 1 : 1 + Math.sin(time / 90) * 0.12 + Math.sin(time / 37) * 0.08; fm.setAttribute("transform", `translate(${P(560, 40, 150).join(" ")}) scale(1.3 ${(1.3 * k).toFixed(3)})`); }
  });

  return (
    <svg ref={root} viewBox="-625 -200 1170 890" className="h-full w-full overflow-visible" role="img"
      aria-label="Illustration: an isometric gas plant. Waypoints are set over each section while the aircraft waits on its launch strip; it flies through them with its sensor pointed down, circles the unit where methane is found, and a crew member walks to that unit.">
      <defs>
        <linearGradient id="cylSide" x1="0" x2="1">
          <stop offset="0" stopColor="hsl(40 20% 96%)" />
          <stop offset=".55" stopColor="hsl(210 12% 82%)" />
          <stop offset="1" stopColor="hsl(211 14% 68%)" />
        </linearGradient>
        <radialGradient id="slabShadow"><stop offset="0" stopColor={COL.navy} stopOpacity=".22" /><stop offset="1" stopColor={COL.navy} stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="-50" cy="665" rx="640" ry="70" fill="url(#slabShadow)" />
      <SiteModel />

      {/* ground layer: sensor footprint, aircraft shadow, ready pulse */}
      <ellipse ref={set("foot")} rx="34" ry="19" fill={COL.gold} fillOpacity=".28" stroke={COL.gold} strokeWidth="1" style={{ opacity: 0 }} />
      {(() => { const [rx, ry] = P(PARK[0], PARK[1]); return <ellipse ref={set("ready")} cx={rx} cy={ry} rx="40" ry="23" fill="none" stroke={COL.gold} strokeWidth="2.2" style={{ opacity: 0 }} />; })()}
      <g ref={set("shadow")} fill={COL.navy} fillOpacity=".16">
        <polygon ref={set("swing")} /><polygon ref={set("sbody")} /><polygon ref={set("stail")} />
      </g>
      <Objects />
      {(() => { const [rx, ry] = P(LEAK.x, LEAK.y, LEAK.z); return <ellipse ref={set("ring")} cx={rx} cy={ry} rx="20" ry="11" fill="none" stroke={COL.gold} strokeWidth="2" style={{ opacity: 0 }} />; })()}
      <path ref={set("flame")} d="M0 0 C -6 -6 -4 -16 0 -24 C 4 -16 6 -6 0 0 Z" fill={COL.gold} />

      {/* crew member in hi-vis and hard hat */}
      <g ref={set("crew")}>
        <ellipse cx="0" cy="0" rx="9" ry="3.6" fill={COL.navy} fillOpacity=".2" />
        <g ref={set("legL")}><rect x="-3.6" y="-16" width="4.2" height="16" rx="2" fill={COL.navy} /></g>
        <g ref={set("legR")}><rect x="-0.6" y="-16" width="4.2" height="16" rx="2" fill="hsl(211 50% 24%)" /></g>
        <g ref={set("armL")}><rect x="-1.8" y="-30" width="3.6" height="13" rx="1.8" fill="hsl(37 80% 44%)" /></g>
        <rect x="-6" y="-32" width="12" height="18" rx="3.5" fill={COL.gold} stroke={COL.navy} strokeWidth=".6" />
        <rect x="-6" y="-24" width="12" height="2" fill="white" />
        <g ref={set("armR")}><rect x="-1.8" y="-30" width="3.6" height="13" rx="1.8" fill={COL.gold} stroke={COL.navy} strokeWidth=".5" /></g>
        <circle cx="0" cy="-37.5" r="5.2" fill="hsl(28 45% 62%)" />
        <path d="M-6.4 -38.5 a6.4 6.2 0 0 1 12.8 0 z" fill="white" stroke={COL.navy} strokeWidth=".7" />
        <rect x="-7.6" y="-39.2" width="15.2" height="1.8" rx=".9" fill="white" stroke={COL.navy} strokeWidth=".5" />
        <g ref={set("ok")} style={{ opacity: 0 }} transform="translate(-21 -44)">
          <circle r="8" fill={COL.green} />
          <path d="M-3.6 0.2 l2.5 2.6 l4.8 -5" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* methane */}
      {Array.from({ length: PUFFS }, (_, i) => <ellipse key={i} ref={set(`puff${i}`)} fill={COL.gold} style={{ opacity: 0 }} />)}

      {/* flight plan: drop lines from each waypoint to the ground, the planned route, then the path flown */}
      <g ref={set("drops")} style={{ opacity: 0 }} stroke={COL.navy} strokeOpacity=".4" strokeWidth="1" strokeDasharray="3 4">
        {WP.map(([wx, wy], i) => { const [a, b] = P(wx, wy, ALT), [c, d] = P(wx, wy, 0); return <g key={i}><line x1={a} y1={b} x2={c} y2={d} /><ellipse cx={c} cy={d} rx="7" ry="4" fill={COL.navy} fillOpacity=".25" stroke="none" /></g>; })}
      </g>
      <mask id="routeReveal" maskUnits="userSpaceOnUse" x="-625" y="-200" width="1170" height="890">
        <path ref={set("route")} d={routeD} pathLength={1} fill="none" stroke="white" strokeWidth="10" strokeDasharray="1 1" style={{ strokeDashoffset: 1 }} />
      </mask>
      <path ref={set("routeVis")} d={routeD} mask="url(#routeReveal)" fill="none" stroke={COL.navy} strokeOpacity=".6" strokeWidth="1.8" strokeDasharray="7 6" />
      <path ref={set("flown")} d={routeD} pathLength={1} fill="none" stroke={COL.gold} strokeWidth="3" strokeLinecap="round" strokeDasharray="1 1" style={{ strokeDashoffset: 1, opacity: 0 }} />

      {/* sensor beam and aircraft */}
      <line ref={set("beam")} stroke={COL.gold} strokeWidth="2.4" strokeDasharray="5 5" style={{ opacity: 0 }} />
      <g ref={set("plane")} strokeLinejoin="round">
        <polygon ref={set("wing")} fill={COL.navy} stroke="white" strokeWidth="1.4" />
        <polygon ref={set("cells")} fill="none" stroke="hsl(211 45% 38%)" strokeWidth="1" />
        <polygon ref={set("tail")} fill="white" stroke={COL.navy} strokeWidth="1" />
        <polygon ref={set("body")} fill="white" stroke={COL.navy} strokeWidth="1" />
      </g>

      {/* waypoints */}
      {WP.map((_, i) => (
        <g key={i} ref={set(`wp${i}`)} style={{ opacity: 0 }}>
          <circle r="15" fill="white" fillOpacity=".9" stroke={COL.navy} strokeWidth="1.2" />
          <circle ref={set(`wpd${i}`)} r="11" fill={COL.navy} />
          <text ref={set(`wpn${i}`)} y="4.6" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="'Space Grotesk', Inter, sans-serif">{i + 1}</text>
        </g>
      ))}

      <g ref={set("pin")} style={{ opacity: 0 }}>
        <path d="M0 0 C -10 -14 -11 -30 0 -30 C 11 -30 10 -14 0 0 Z" fill={COL.navy} />
        <circle cx="0" cy="-20" r="4.5" fill={COL.gold} />
        <rect x="9" y="-31" width="26" height="13" rx="3" fill="white" stroke={COL.navy} strokeWidth=".7" />
        <text x="22" y="-21.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={COL.navy} fontFamily="Inter, sans-serif">U-3</text>
      </g>

      {/* drifting clouds */}
      <g className="motion-safe:animate-[cloud_70s_linear_infinite]" opacity=".9">
        <g transform="translate(-470 -110)" fill="white"><ellipse cx="0" cy="0" rx="46" ry="18" /><ellipse cx="34" cy="-10" rx="34" ry="20" /><ellipse cx="66" cy="2" rx="38" ry="15" /></g>
        <g transform="translate(300 -150)" fill="white" opacity=".8"><ellipse cx="0" cy="0" rx="38" ry="14" /><ellipse cx="28" cy="-8" rx="26" ry="15" /><ellipse cx="52" cy="2" rx="30" ry="12" /></g>
      </g>
    </svg>
  );
};
