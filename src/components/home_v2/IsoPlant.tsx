import { useMemo, useRef } from "react";
import { useAnimationFrame, useInView, useReducedMotion } from "framer-motion";

/* An isometric model of a gas plant on a sand slab. The aircraft, its shadow and its sensor beam are
   driven frame by frame so that each step of the survey is acted out: take-off, survey grid,
   closer passes over a leak, then the maintenance crew driving to the unit.
   World units: the slab is 600 x 600; z is height. */

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

const SiteModel = () => (
  <g>
    {/* slab */}
    <polygon points={pts([P(0, 600), P(600, 600), [P(600, 600)[0], P(600, 600)[1] + 26], [P(0, 600)[0], P(0, 600)[1] + 26]])} fill={COL.slabL} />
    <polygon points={pts([P(600, 600), P(600, 0), [P(600, 0)[0], P(600, 0)[1] + 26], [P(600, 600)[0], P(600, 600)[1] + 26]])} fill={COL.slabR} />
    <polygon points={pts([P(0, 0), P(600, 0), P(600, 600), P(0, 600)])} fill={COL.slabTop} />

    {/* paved area inside the fence */}
    <Ground x={90} y={25} w={485} d={550} fill="hsl(40 22% 93%)" />
    {/* desert shrubs outside the fence */}
    {[[30, 120], [55, 210], [24, 330], [60, 410], [150, 588], [330, 590], [470, 586], [588, 300], [590, 450]].map(([sx, sy], k) => {
      const [gx, gy] = P(sx, sy);
      return <g key={k}><ellipse cx={gx + 3} cy={gy + 2} rx="9" ry="4" fill={COL.navy} fillOpacity=".12" /><ellipse cx={gx} cy={gy - 4} rx="7" ry="6" fill="hsl(95 22% 52%)" /><ellipse cx={gx - 2} cy={gy - 6} rx="3.5" ry="3" fill="hsl(95 25% 62%)" /></g>;
    })}

    {/* roads, bund, pad */}
    <Ground x={90} y={360} w={485} d={20} fill={COL.road} />
    <Ground x={235} y={25} w={15} d={550} fill={COL.road} />
    <polygon points={pts([P(255, 405), P(530, 405), P(530, 495), P(255, 495)])} fill="none" stroke={COL.navy} strokeOpacity=".3" strokeWidth="1.2" />
    <Ground x={22} y={478} w={46} d={46} fill="hsl(36 12% 70%)" />
    <polyline points={pts([P(45, 482), P(45, 520)])} stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />

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
    <Box x={110} y={470} w={60} d={48} h={20} top="hsl(150 20% 92%)" />
    <Cyl cx={300} cy={450} r={33} h={40} ring />
    <Cyl cx={390} cy={450} r={33} h={40} ring />
    <Cyl cx={480} cy={450} r={33} h={40} ring />
    <Box x={18} y={535} w={30} d={22} h={14} top="white" />
  </g>
);

/* ---------- motion ---------- */

type Track = { len: number; at: (s: number) => V3 };
const track = (p: V3[]): Track => {
  const seg = p.slice(1).map((q, i) => Math.hypot(q[0] - p[i][0], q[1] - p[i][1], q[2] - p[i][2]));
  const len = seg.reduce((a, b) => a + b, 0);
  return {
    len,
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

const TAKEOFF = track([[45, 540, 0], [45, 450, 0], [45, 330, 80], [70, 230, 130]]);
const LANES: V3[] = [[0, 75, 175]];
[75, 180, 285, 390, 495].forEach((y, i) => { const a: V3 = [110, y, 175], b: V3 = [560, y, 175]; LANES.push(...(i % 2 ? [b, a] : [a, b])); });
const SURVEY = track(LANES);
const TRUCK = track([[175, 494, 0], [242, 494, 0], [242, 370, 0], [430, 370, 0], [430, 352, 0]]);
const LEAK = { x: 480, y: 295, z: 32 };

// Aircraft drawn in its own plane (heading +x): wing (solar cells), fuselage, tailplane.
const WING: [number, number][] = [[4, -44], [15, -44], [15, 44], [4, 44]];
const BODY: [number, number][] = [[-30, -2.6], [24, -2.2], [27, 0], [24, 2.2], [-30, 2.6]];
const TAIL: [number, number][] = [[-31, -13], [-24, -13], [-24, 13], [-31, 13]];
const shape = (poly: [number, number][], x: number, y: number, z: number, hd: number) => {
  const c = Math.cos(hd), s = Math.sin(hd);
  return pts(poly.map(([u, v]) => P(x + u * c - v * s, y + u * s + v * c, z)));
};

const PUFFS = 8;

export const IsoPlant = ({ step }: { step: number }) => {
  const root = useRef<SVGSVGElement>(null);
  const inView = useInView(root, { margin: "200px" });
  const reduced = useReducedMotion();
  const refs = useRef<Record<string, SVGElement | null>>({});
  const set = (k: string) => (el: SVGElement | null) => { refs.current[k] = el; };
  const start = useRef({ step: -1, t0: 0 });
  const trailD = useMemo(() => "M " + LANES.map(([x, y]) => P(x, y).map((n) => n.toFixed(1)).join(" ")).join(" L "), []);

  useAnimationFrame((time) => {
    if (!inView && start.current.step !== -1) return;
    if (start.current.step !== step) start.current = { step, t0: time };
    const t = reduced ? 6 : (time - start.current.t0) / 1000;
    const r = refs.current;

    // aircraft position and heading for this step
    let pos: V3, hd: number, beam = false, trail = 0;
    const along = (tr: Track, s: number): [V3, number] => {
      const a = tr.at(s), b = tr.at(s + 2);
      return [a, Math.atan2(b[1] - a[1], b[0] - a[0])];
    };
    if (step === 0) {
      const tt = t % 13, s = tt * 55;
      if (s < TAKEOFF.len) [pos, hd] = along(TAKEOFF, s);
      else { const a = (s - TAKEOFF.len) / 55 * 0.7; pos = circle(130, 230, 60, 130, a + Math.PI); hd = a + Math.PI + Math.PI / 2; }
    } else if (step === 1) {
      const per = SURVEY.len / 240 + 1.6, s = Math.min((t % per) * 240, SURVEY.len);
      [pos, hd] = along(SURVEY, s);
      beam = true;
      trail = s / SURVEY.len;
    } else if (step === 2) {
      const a = t * 0.9; pos = circle(LEAK.x, LEAK.y, 95, 120, a); hd = a + Math.PI / 2; beam = true; trail = 1;
    } else {
      const a = t * 0.4; pos = circle(330, 300, 190, 190, a); hd = a + Math.PI / 2; trail = 1;
    }
    const [x, y, z] = pos;
    r.wing?.setAttribute("points", shape(WING, x, y, z, hd));
    r.body?.setAttribute("points", shape(BODY, x, y, z, hd));
    r.tail?.setAttribute("points", shape(TAIL, x, y, z, hd));
    r.swing?.setAttribute("points", shape(WING, x, y, 0, hd));
    r.sbody?.setAttribute("points", shape(BODY, x, y, 0, hd));
    r.stail?.setAttribute("points", shape(TAIL, x, y, 0, hd));
    const [ax, ay] = P(x, y, z), [gx, gy] = P(x, y, 0);
    const bm = r.beam as SVGLineElement | null;
    if (bm) { bm.setAttribute("x1", ax.toFixed(1)); bm.setAttribute("y1", ay.toFixed(1)); bm.setAttribute("x2", gx.toFixed(1)); bm.setAttribute("y2", gy.toFixed(1)); bm.style.opacity = beam ? "1" : "0"; }
    const ft = r.foot as SVGEllipseElement | null;
    if (ft) { ft.setAttribute("cx", gx.toFixed(1)); ft.setAttribute("cy", gy.toFixed(1)); ft.style.opacity = beam ? "1" : "0"; }
    if (r.trail) { (r.trail as SVGPathElement).style.strokeDashoffset = String(1 - trail); (r.trail as SVGPathElement).style.opacity = step === 1 ? ".75" : step > 1 ? ".28" : "0"; }
    if (r.plane) (r.plane as SVGGElement).style.opacity = String(Math.min(1, t / 0.5));

    // methane: puffs rising and drifting from the leaking unit, only once found
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
    if (pin) { const [qx, qy] = P(LEAK.x - 25, LEAK.y - 20, 70 + Math.sin(t * 2.4) * 4); pin.setAttribute("transform", `translate(${qx.toFixed(1)} ${qy.toFixed(1)}) scale(1.6)`); pin.style.opacity = step >= 2 ? String(Math.min(1, Math.max(0, (t - (step === 2 ? 1.2 : 0)) / 0.5))) : "0"; }

    // maintenance truck
    const tk = r.truck as SVGGElement | null;
    if (tk) {
      const s = step === 3 ? Math.min(t * 70, TRUCK.len) : 0;
      const [tx, ty] = TRUCK.at(s), [hx, hy] = P(tx, ty);
      tk.setAttribute("transform", `translate(${hx.toFixed(1)} ${hy.toFixed(1)}) scale(1.9)`);
      tk.style.opacity = step === 3 ? "1" : "0";
    }
    // flare flame flicker
    const fl = r.flame as SVGPathElement | null;
    if (fl) { const k = reduced ? 1 : 1 + Math.sin(time / 90) * 0.12 + Math.sin(time / 37) * 0.08; fl.setAttribute("transform", `translate(${P(560, 40, 150).join(" ")}) scale(1.3 ${(1.3 * k).toFixed(3)})`); }
  });

  return (
    <svg ref={root} viewBox="-560 -175 1120 830" className="h-full w-full overflow-visible" role="img"
      aria-label="Illustration: an isometric gas plant. The aircraft takes off, flies a survey grid with its sensor pointed down, circles the unit where methane is found, and a maintenance truck drives to it.">
      <defs>
        <linearGradient id="cylSide" x1="0" x2="1">
          <stop offset="0" stopColor="hsl(40 20% 96%)" />
          <stop offset=".55" stopColor="hsl(210 12% 82%)" />
          <stop offset="1" stopColor="hsl(211 14% 68%)" />
        </linearGradient>
        <radialGradient id="slabShadow"><stop offset="0" stopColor={COL.navy} stopOpacity=".22" /><stop offset="1" stopColor={COL.navy} stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="0" cy="660" rx="600" ry="70" fill="url(#slabShadow)" />
      <SiteModel />

      {/* ground layer: survey trail, sensor footprint, aircraft shadow, hotspot ring */}
      <path ref={set("trail")} d={trailD} pathLength={1} fill="none" stroke={COL.navy} strokeWidth="2" strokeDasharray="1 1" style={{ strokeDashoffset: 1, opacity: 0 }} />
      <ellipse ref={set("foot")} rx="30" ry="17" fill={COL.gold} fillOpacity=".28" stroke={COL.gold} strokeWidth="1" style={{ opacity: 0 }} />
      <g fill={COL.navy} fillOpacity=".16">
        <polygon ref={set("swing")} /><polygon ref={set("sbody")} /><polygon ref={set("stail")} />
      </g>
      <Objects />
      {(() => { const [rx, ry] = P(LEAK.x, LEAK.y, LEAK.z); return <ellipse ref={set("ring")} cx={rx} cy={ry} rx="20" ry="11" fill="none" stroke={COL.gold} strokeWidth="2" style={{ opacity: 0 }} />; })()}
      <path ref={set("flame")} d="M0 0 C -6 -6 -4 -16 0 -24 C 4 -16 6 -6 0 0 Z" fill={COL.gold} />

      {/* truck */}
      <g ref={set("truck")} style={{ opacity: 0 }}>
        <polygon points={pts([P(-9, -5, 0), P(9, -5, 0), P(9, 5, 0), P(-9, 5, 0)])} fill={COL.navy} fillOpacity=".18" />
        <polygon points={pts([P(-8, -4, 3), P(8, -4, 3), P(8, 4, 3), P(-8, 4, 3)].map(([a, b]) => [a, b - 7] as [number, number]))} fill="white" stroke={COL.navy} strokeWidth=".8" />
        <polygon points={pts([P(2, -4, 3), P(8, -4, 3), P(8, 4, 3), P(2, 4, 3)].map(([a, b]) => [a, b - 9] as [number, number]))} fill={COL.gold} stroke={COL.navy} strokeWidth=".8" />
      </g>

      {/* methane */}
      {Array.from({ length: PUFFS }, (_, i) => <ellipse key={i} ref={set(`puff${i}`)} fill={COL.gold} style={{ opacity: 0 }} />)}

      {/* sensor beam and aircraft */}
      <line ref={set("beam")} stroke={COL.gold} strokeWidth="2" strokeDasharray="4 4" style={{ opacity: 0 }} />
      <g ref={set("plane")} strokeLinejoin="round">
        <polygon ref={set("wing")} fill={COL.navy} stroke="white" strokeWidth="1" />
        <polygon ref={set("tail")} fill="white" stroke={COL.navy} strokeWidth=".8" />
        <polygon ref={set("body")} fill="white" stroke={COL.navy} strokeWidth=".8" />
      </g>

      <g ref={set("pin")} style={{ opacity: 0 }}>
        <path d="M0 0 C -10 -14 -11 -30 0 -30 C 11 -30 10 -14 0 0 Z" fill={COL.navy} />
        <circle cx="0" cy="-20" r="4.5" fill={COL.gold} />
        <rect x="9" y="-31" width="26" height="13" rx="3" fill="white" stroke={COL.navy} strokeWidth=".7" />
        <text x="22" y="-21.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={COL.navy} fontFamily="Inter, sans-serif">U-3</text>
      </g>

      {/* drifting clouds */}
      <g className="motion-safe:animate-[cloud_70s_linear_infinite]" opacity=".9">
        <g transform="translate(-420 -95)" fill="white"><ellipse cx="0" cy="0" rx="46" ry="18" /><ellipse cx="34" cy="-10" rx="34" ry="20" /><ellipse cx="66" cy="2" rx="38" ry="15" /></g>
        <g transform="translate(260 -140)" fill="white" opacity=".8"><ellipse cx="0" cy="0" rx="38" ry="14" /><ellipse cx="28" cy="-8" rx="26" ry="15" /><ellipse cx="52" cy="2" rx="30" ry="12" /></g>
      </g>
    </svg>
  );
};
