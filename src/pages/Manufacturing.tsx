import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import SiteNav from "@/components/site/SiteNav";
import { usePageTitle } from "@/hooks/usePageTitle";
import SiteFooter from "@/components/site/SiteFooter";
import PageHero from "@/components/site/PageHero";
import CtaPair from "@/components/site/CtaPair";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import hero from "@/assets/v3/mfg-18_wing_structure_overhead.jpg";
import ribs from "@/assets/v3/mfg-14_lattice_ribs.jpg";
import spar from "@/assets/v3/mfg-15_ribs_on_carbon_tubes.jpg";
import panels from "@/assets/v3/mfg-17_wing_panels_table.jpg";
import f1 from "@/assets/Frame1.jpg";
import f2 from "@/assets/Frame2.jpg";
import f3 from "@/assets/Frame3.jpg";
import f4 from "@/assets/Frame4.jpg";
import f5 from "@/assets/Frame5.jpg";
import f6 from "@/assets/Frame6.jpg";
import f7 from "@/assets/Frame7.jpg";
import f8 from "@/assets/Frame8.jpg";

/* Facts on this page (from our build and flight records): 3D-printed topology-optimised ribs, 22 mm carbon spar,
   full assembly about 15 min by two people, an outer wing panel fitted in under a minute (team-measured),
   three airframes built, 4 m span. */

const FRAMES = [f1, f2, f3, f4, f5, f6, f7, f8];
const STAGES = ["Parts laid out", "Panels assembled", "Wing joined", "Ready to fly"];

/** A time-lapse from our lab, scrubbed by scrolling: from parts on the table to a finished aircraft. */
const TimeLapse = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [i, setI] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => setI(Math.max(0, Math.min(FRAMES.length - 1, Math.floor(p * FRAMES.length)))));
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const stage = Math.min(STAGES.length - 1, Math.floor(i / 2));

  return (
    <section ref={ref} className="relative bg-navy" style={{ height: "320vh" }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-6xl">From parts<br />to aircraft.</h2>
            <p className="font-body text-sm font-extrabold uppercase tracking-[0.14em] text-white/70">Time-lapse · scroll</p>
          </div>
          <div className="relative mt-8 aspect-[16/9] max-h-[58svh] w-full overflow-hidden rounded-md bg-navy-dark">
            {FRAMES.map((src, k) => (
              <img key={k} src={src} alt={k === FRAMES.length - 1 ? "A team member carrying the finished aircraft across the lab" : ""} aria-hidden={k !== FRAMES.length - 1}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300" style={{ opacity: k === i ? 1 : 0 }} loading={k < 2 ? "eager" : "lazy"} />
            ))}
            <p className="absolute bottom-4 left-4 rounded bg-navy-dark/80 px-3 py-1.5 font-body text-sm font-extrabold uppercase tracking-[0.12em] text-gold md:bottom-6 md:left-6">{STAGES[stage]}</p>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {STAGES.map((s, k) => (
              <p key={s} className={`font-body text-xs font-extrabold uppercase tracking-[0.1em] transition-colors md:text-sm ${k <= stage ? "text-white" : "text-white/35"}`}>{s}</p>
            ))}
          </div>
          <div className="relative mt-3 h-[3px] bg-white/15"><motion.div className="absolute inset-y-0 left-0 bg-gold" style={{ width: bar }} /></div>
        </div>
      </div>
    </section>
  );
};

const PARTS = [
  { img: ribs, title: "Printed ribs", line: "Lattice ribs, printed to carry the load at the lowest weight.", alt: "3D-printed lattice wing ribs laid out on a table" },
  { img: spar, title: "Carbon spars", line: "A 22 mm carbon tube runs through each panel and carries the main load.", alt: "A wing panel with printed ribs threaded on carbon tubes" },
  { img: panels, title: "Modular panels", line: "The wing is built from panels that join on the carbon spar.", alt: "Finished wing panels on the workbench" },
];

const NUMBERS: [string, string][] = [
  ["3", "airframes built"],
  ["4 m", "wingspan"],
  ["15 min", "typical assembly, two people"],
  ["Under 1 min", "to fit an outer wing panel"],
];

const Manufacturing = () => {
  usePageTitle("Manufacturing | SolarSentinel");
  return (
  <div className="min-h-screen">
    <SiteNav />
    <PageHero kicker="Manufacturing" title="Built in-house." line="Every airframe is designed, printed and assembled by our team in Dhahran." image={hero} position="50% 40%" />

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-navy md:text-6xl">How it's made</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          {PARTS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="overflow-hidden rounded-md">
                <img src={p.img} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase text-navy">{p.title}</h3>
              <p className="mt-2 font-body text-lg font-medium leading-snug text-navy">{p.line}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <TimeLapse />

    <section className="bg-sand">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 py-20 md:grid-cols-4 md:px-10 md:py-28">
        {NUMBERS.map(([v, l]) => (
          <StaggerItem key={l} className="border-l-2 border-gold pl-5">
            <p className="font-display text-4xl font-bold text-navy md:text-6xl">{v}</p>
            <p className="mt-2 font-body text-base font-bold uppercase tracking-[0.06em] text-navy md:text-lg">{l}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>

    <CtaPair spaced />
    <SiteFooter />
  </div>
  );
};

export default Manufacturing;
