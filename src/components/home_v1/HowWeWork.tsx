import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlantPlan } from "./PlantPlan";

const STEPS = [
  {
    t: "Launch near the plant",
    d: "The aircraft takes off from outside the fence. Its route and height are agreed with the plant's safety team.",
  },
  {
    t: "Fly the whole plant",
    d: "It flies a steady grid over every unit, carrying a methane sensor that measures the air below. It is designed so one flight covers the site.",
  },
  {
    t: "Find the leaking unit",
    d: "Where methane rises above background, the aircraft comes back for closer passes and narrows the source down to the unit.",
  },
  {
    t: "Report to the maintenance team",
    d: "A map of what was found and where, so the team goes straight to the right unit instead of walking every line.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** Text scrolls on the left; the site plan stays in view on the right and follows the active step. */
const HowWeWork = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.step))),
      { rootMargin: window.matchMedia("(min-width: 1024px)").matches ? "-45% 0px -45% 0px" : "-58% 0px -22% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green">How we work</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-5xl font-semibold leading-[1.08] text-navy text-balance">
          From the fence line to the leaking unit.
        </h2>
        <p className="mt-4 max-w-xl text-base text-navy/60">How a survey is designed to work. Sensor flight trials are next.</p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-x-16 px-6 md:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Plan: sticky on every screen size; on phones it sits above the text */}
        <div className="sticky top-16 z-10 -mx-6 bg-sand px-6 pt-3 pb-2 lg:order-2 lg:top-0 lg:mx-0 lg:flex lg:h-screen lg:items-center lg:px-0 lg:py-0">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[min(560px,56svh)] lg:max-w-none">
            <div className="absolute inset-0 rounded-xl border border-navy/10 bg-[hsl(36_40%_96%)]" />
            <div className="absolute inset-0 p-2 md:p-4"><PlantPlan step={active} /></div>
            <AnimatePresence>
              {active === 3 && (
                <motion.div
                  key="report"
                  className="absolute bottom-3 left-3 w-[13.5rem] rounded-lg bg-navy p-4 text-white shadow-[0_24px_50px_-20px_hsl(var(--navy)/0.6)] md:bottom-6 md:left-6 md:w-64 md:p-5"
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.6, ease }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Survey report · sample</p>
                  <dl className="mt-3 space-y-2 text-[13px] leading-snug">
                    <div className="flex justify-between gap-3"><dt className="text-white/55">Area</dt><dd>Whole plant</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-white/55">Finding</dt><dd className="text-right">Methane above background</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-white/55">Source</dt><dd>Unit U-3</dd></div>
                    <div className="flex justify-between gap-3"><dt className="text-white/55">Next</dt><dd className="text-right">Maintenance check</dd></div>
                  </dl>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Steps */}
        <div className="lg:order-1">
          {STEPS.map((s, i) => (
            <div
              key={s.t}
              ref={(el) => (refs.current[i] = el)}
              data-step={i}
              className="flex flex-col justify-center py-14 lg:min-h-[72vh] lg:py-10"
            >
              <motion.div animate={{ opacity: active === i ? 1 : 0.28 }} transition={{ duration: 0.5 }}>
                <p className="font-display text-sm font-semibold tabular-nums text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl md:text-[2rem] font-semibold leading-tight text-navy">{s.t}</h3>
                <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed text-navy/70">{s.d}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
