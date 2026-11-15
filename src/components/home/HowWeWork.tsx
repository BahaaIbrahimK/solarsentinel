import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IsoPlant } from "./IsoPlant";

const STEPS = [
  { t: "Plan the flight", d: "We set a waypoint over every section of the plant." },
  { t: "Survey the whole site", d: "The aircraft flies the route on autopilot, scanning for methane below." },
  { t: "Pinpoint the leak", d: "It circles the source so the crew can walk straight to it." },
  { t: "Report and repair", d: "Each leak is reported with its unit, location and repair priority." },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* Sample values only, labelled as such on the card. */
const REPORT: [string, string][] = [
  ["Source", "Unit U-3"],
  ["Emission rate", "12 kg/h  ± 3"],
  ["Location", "Within ± 5 m"],
  ["Priority", "High · repair in 24 h"],
];

const Report = () => (
  <motion.div
    className="mt-8 w-full max-w-md overflow-hidden rounded-lg bg-white text-navy shadow-[0_30px_60px_-24px_hsl(var(--navy)/0.45)] ring-1 ring-navy/10"
    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.6, ease }}
  >
    <div className="flex items-center justify-between bg-navy px-5 py-3 text-white">
      <p className="font-body text-[13px] font-extrabold uppercase tracking-[0.14em]">Methane survey report</p>
      <span className="rounded bg-white/15 px-2 py-0.5 font-body text-[11px] font-bold uppercase tracking-[0.12em]">Sample</span>
    </div>
    <div className="px-5 pb-5 pt-4">
      <div className="flex items-center justify-between font-body text-sm font-semibold text-navy/75">
        <span>Gas plant · whole site</span><span>Survey 01</span>
      </div>
      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 font-body text-[13px] font-extrabold uppercase tracking-[0.1em] text-navy">
        <span className="h-2 w-2 rounded-full bg-gold" /> Leak found
      </div>
      <dl className="mt-4 divide-y divide-navy/10 font-body">
        {REPORT.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 py-2.5">
            <dt className="text-[15px] font-semibold text-navy/70">{k}</dt>
            <dd className="text-right text-lg font-bold tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 font-body text-sm font-extrabold uppercase tracking-[0.1em] text-navy/80">Illustrative values</p>
    </div>
  </motion.div>
);

/** Text scrolls on the left; the plant stays in view on the right and acts out the active step. */
const HowWeWork = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.step))),
      { rootMargin: window.matchMedia("(min-width: 1024px)").matches ? "-45% 0px -45% 0px" : "-40% 0px -40% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative bg-sand">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
        <h2 className="font-display text-5xl font-bold uppercase leading-[0.95] text-navy md:text-7xl">How it works</h2>
        <p className="mt-4 font-body text-base font-extrabold uppercase tracking-[0.12em] text-navy/80">How a survey will run</p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-x-14 px-6 md:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Plant: sticky on every screen size; on phones it sits above the text */}
        <div className="sticky top-[72px] z-10 -mx-6 bg-sand px-6 pb-2 pt-3 lg:order-2 lg:top-0 lg:mx-0 lg:flex lg:h-screen lg:items-center lg:px-0 lg:py-0">
          <div className="relative mx-auto aspect-[1170/890] w-full max-w-[min(640px,56svh)] lg:max-w-none">
            <IsoPlant step={active} />
            <p className="absolute -bottom-1 right-0 font-body text-xs font-extrabold uppercase tracking-[0.12em] text-navy/80">Illustration</p>
          </div>
        </div>

        {/* Steps */}
        <div className="lg:order-1">
          {STEPS.map((s, i) => (
            <div key={s.t} ref={(el) => (refs.current[i] = el)} data-step={i} className="flex flex-col justify-center py-14 lg:min-h-[74vh] lg:py-10">
              <motion.div animate={{ opacity: active === i ? 1 : 0.55 }} transition={{ duration: 0.5 }}>
                <p className="font-display text-lg font-bold tabular-nums text-gold">0{i + 1}</p>
                <h3 className="mt-2 font-display text-4xl font-bold leading-[1.02] text-navy md:text-5xl">{s.t}</h3>
                <p className="mt-4 max-w-md font-body text-xl font-medium leading-snug text-navy md:text-2xl">{s.d}</p>
                <AnimatePresence>{i === 3 && active === 3 && <Report key="report" />}</AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
