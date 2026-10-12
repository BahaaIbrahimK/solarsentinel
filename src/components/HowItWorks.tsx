import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { ScopeIcon, MethaneIcon, ReportIcon, EnduranceIcon, RepairIcon } from "@/components/brand/icons";
import { RotateCcw } from "lucide-react";

/*
 * Mirrors the "How it works" scene of the booth film: the site is scoped, the
 * route is drawn, the aircraft flies it, a source is detected and reported,
 * and the four steps light up as the mission progresses.
 */

const steps = [
  { title: "Scope the site", text: "Survey boundary and flight route agreed with your team." },
  { title: "Fly the mission", text: "The solar UAV flies the planned route autonomously." },
  { title: "Detect & prioritize", text: "TDLAS sensing and onboard AI rank likely sources by severity." },
  { title: "Report the evidence", text: "GPS-tagged findings, with optional repair verification." },
];

const deliverables = [
  { Icon: EnduranceIcon, text: "Recurring methane monitoring" },
  { Icon: ScopeIcon, text: "Source localization" },
  { Icon: MethaneIcon, text: "Quantified emission estimates" },
  { Icon: ReportIcon, text: "Automated geotagged reports" },
  { Icon: RepairIcon, text: "Optional repair verification" },
];

// Stage geometry, in viewBox units
const VW = 1200;
const VY = 60; // top of the visible stage
const VH = 312;
const SOURCE = { x: 943, y: 262 };
const FLIGHT_START = 1.1;
const FLIGHT_END = 6.2;
const DURATION = 6.6;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2);
const reveal = (t: number, a: number, b: number) => easeInOut(clamp((t - a) / (b - a)));

const routeY = (u: number) => 150 - 48 * Math.sin(u * Math.PI * 2.3) - 22 * Math.sin(u * Math.PI);
const routePoint = (u: number) => {
  const x = 70 + 1060 * u;
  const y = routeY(u);
  const u2 = Math.min(1, u + 0.002);
  const angle = (Math.atan2(routeY(u2) - y, 1060 * (u2 - u)) * 180) / Math.PI;
  return { x, y, angle };
};
const routePath = Array.from({ length: 81 }, (_, i) => {
  const p = routePoint(i / 80);
  return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
}).join(" ");

const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const left = (x: number) => pct(x, VW);
const top = (y: number) => pct(y - VY, VH);

/** Mission clock: runs once when the stage scrolls into view; replayable. */
const useMissionClock = (inView: boolean, reduced: boolean | null) => {
  const [t, setT] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setT(DURATION);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const s = (now - start) / 1000;
      setT(Math.min(s, DURATION));
      if (s < DURATION) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, run]);
  return { t, replay: () => { setT(0); setRun((r) => r + 1); } };
};

const HowItWorks = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const { t, replay } = useMissionClock(inView, reduced);

  const scope = reveal(t, 0.15, 0.9);
  const route = reveal(t, 0.35, 1.9);
  const u = reveal(t, FLIGHT_START, FLIGHT_END);
  const plane = routePoint(u);
  const detect = clamp((u - 0.6) / 0.12);
  const report = clamp((u - 0.76) / 0.12);
  const active = t < FLIGHT_START ? 0 : u < 0.6 ? 1 : u < 0.8 ? 2 : 3;
  const done = t >= DURATION;

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-10 md:mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            One autonomous mission.<br className="hidden md:block" /> Four decisive steps.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5 leading-relaxed">
            From flight planning to evidence an operator can act on.
          </p>
        </Reveal>

        {/* Mission stage */}
        <div ref={stageRef} className="relative" aria-hidden="true">
          <svg viewBox={`0 ${VY} ${VW} ${VH}`} className="w-full h-auto block" fill="none">
            {/* ground */}
            <path d={`M20 320 H${VW - 20}`} stroke="hsl(var(--navy))" strokeOpacity="0.16" strokeWidth="1.5" />

            {/* scoped site, left */}
            <g stroke="hsl(var(--navy))" strokeOpacity="0.42" strokeWidth="3">
              <path d="M78 320 v-58 h86 v58" />
              <path d="M188 320 v-104 h128 v104" />
              <path d="M340 320 v-74 h78 v74" />
            </g>
            <g opacity={scope}>
              <ellipse cx="248" cy="300" rx="214" ry="62" fill="hsl(var(--green))" fillOpacity="0.07"
                stroke="hsl(var(--green))" strokeWidth="2.5" strokeDasharray="10 8" />
            </g>

            {/* processing site, right */}
            <g stroke="hsl(var(--navy))" strokeOpacity="0.42" strokeWidth="3">
              <path d="M772 320 v-38 h52 v38" />
              <path d="M842 320 v-96 h40 v96" />
              <path d="M900 320 v-130 h86 v130" />
              <path d="M926 180 h34 M934 168 h18" strokeWidth="2.5" />
            </g>

            {/* route */}
            <path d={routePath} stroke="hsl(var(--navy))" strokeOpacity="0.1" strokeWidth="4" strokeLinecap="round" />
            <path d={routePath} pathLength={1} stroke="hsl(var(--gold))" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="1" strokeDashoffset={1 - route} />

            {/* plume + detection */}
            <g opacity={detect} transform={`translate(0 ${(1 - detect) * 24})`}>
              <ellipse cx={SOURCE.x} cy={SOURCE.y - 2} rx="44" ry="20" fill="hsl(var(--green))" fillOpacity="0.1" />
              <ellipse cx={SOURCE.x} cy={SOURCE.y - 34} rx="32" ry="16" fill="hsl(var(--green))" fillOpacity="0.15" />
              <ellipse cx={SOURCE.x} cy={SOURCE.y - 60} rx="19" ry="11" fill="hsl(var(--green))" fillOpacity="0.22" />
            </g>
            <g opacity={detect}>
              <path d={`M${plane.x} ${plane.y} L${SOURCE.x} ${SOURCE.y}`} stroke="hsl(var(--gold))" strokeWidth="2.5" strokeDasharray="8 7" />
              <circle cx={SOURCE.x} cy={SOURCE.y} r="13" fill="hsl(var(--sand))" stroke="hsl(var(--gold))" strokeWidth="3.5" />
              <circle cx={SOURCE.x} cy={SOURCE.y} r="4" fill="hsl(var(--gold))" />
            </g>
            <path d={`M${SOURCE.x + 15} ${SOURCE.y} H1008`} stroke="hsl(var(--navy))" strokeOpacity="0.4" strokeWidth="1.5"
              strokeDasharray="5 4" opacity={report} />

            {/* aircraft: top view, 4.0 m span to 1.8 m length */}
            <g transform={`translate(${plane.x} ${plane.y}) rotate(${plane.angle}) scale(1.05)`} opacity={route > 0.05 ? 1 : 0}>
              <path d="M22 0 C22 -2.6 16 -3.2 6 -3.2 L-17 -1.5 L-17 1.5 L6 3.2 C16 3.2 22 2.6 22 0 Z" fill="hsl(var(--navy))" />
              <path d="M7 -2 L5.6 -41 L0.6 -41 L-2.2 -2 L-2.2 2 L0.6 41 L5.6 41 L7 2 Z" fill="hsl(var(--navy))" />
              <path d="M2.6 -37 V-5 M2.6 5 V37" stroke="hsl(var(--gold))" strokeWidth="2.2" strokeDasharray="5 1.6" />
              <path d="M-13 -1 L-14.5 -12 L-19 -12 L-19 12 L-14.5 12 L-13 1 Z" fill="hsl(var(--navy))" />
              <path d="M23.5 -7 V7" stroke="hsl(var(--navy))" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          </svg>

          {/* Labels as HTML so they stay legible at every width */}
          <span
            className="hidden sm:block absolute -translate-x-1/2 -translate-y-1/2 text-green text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] whitespace-nowrap"
            style={{ left: left(248), top: top(342), opacity: scope }}
          >
            Survey boundary
          </span>
          <div
            className="hidden sm:block absolute -translate-y-1/2 rounded-xl border border-navy/15 bg-card px-3 py-2.5 md:px-4 md:py-3 shadow-[0_12px_30px_-18px_hsl(var(--navy)/0.45)]"
            style={{ left: left(1010), top: top(SOURCE.y), opacity: report, transform: `translateY(calc(-50% + ${(1 - report) * 10}px))` }}
          >
            <p className="text-gold text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap">Source located</p>
            <p className="font-display text-navy text-sm md:text-base font-semibold mt-0.5 whitespace-nowrap">GPS-tagged</p>
            <p className="text-muted-foreground text-[11px] md:text-xs whitespace-nowrap">Priority evidence</p>
          </div>
        </div>

        {/* Step bar, lit by the mission clock */}
        <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-8 md:mt-10">
          {steps.map((s, i) => {
            const current = i === active;
            const reached = i <= active;
            return (
              <li key={s.title}>
                <div
                  className="h-[3px] rounded-full transition-colors duration-500"
                  style={{
                    background: current ? "hsl(var(--gold))" : reached ? "hsl(var(--green))" : "hsl(var(--navy) / 0.12)",
                  }}
                />
                <div className="flex items-baseline gap-3 mt-5">
                  <span
                    className="font-display text-2xl md:text-3xl font-semibold tabular-nums transition-colors duration-500"
                    style={{ color: current ? "hsl(var(--gold))" : reached ? "hsl(var(--green))" : "hsl(var(--navy) / 0.25)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 ${
                      reached ? "text-navy" : "text-navy/35"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mt-2 transition-colors duration-500 ${reached ? "text-muted-foreground" : "text-muted-foreground/50"}`}>
                  {s.text}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="flex justify-end mt-6 h-6">
          {done && !reduced && (
            <button
              onClick={replay}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-navy/50 hover:text-navy transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Replay mission
            </button>
          )}
        </div>

        {/* What every engagement delivers */}
        <Reveal>
          <div className="mt-14 md:mt-16 border-t border-navy/10 pt-10">
            <p className="text-navy/60 text-xs font-semibold uppercase tracking-[0.22em] mb-7">Every engagement delivers</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">
              {deliverables.map((d) => (
                <li key={d.text} className="flex items-start gap-3">
                  <d.Icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-navy text-sm leading-snug">{d.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
