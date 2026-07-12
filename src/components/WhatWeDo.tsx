import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SolarWingIcon, LaserSensorIcon, MethaneIcon } from "@/components/brand/icons";
import uavSky from "@/assets/uav-sky-new.jpg";
import flyover from "@/assets/hero-refinery-flyover.jpg";
import missionPath from "@/assets/mission-path.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const rows = [
  {
    Icon: SolarWingIcon,
    kicker: "The Platform",
    title: "A high-endurance solar UAV",
    text: "6+ hours of flight-tested endurance means one aircraft screens an entire refinery in a single mission, with no battery swaps and no resets. Powered by the sun, it flies with a near-zero operational footprint.",
    stats: [
      { v: "6+ hrs", l: "Endurance" },
      { v: "4.0 m", l: "Wingspan" },
      { v: "128 m", l: "Max altitude" },
    ],
    img: uavSky,
    alt: "SolarSentinel solar UAV in flight",
  },
  {
    Icon: LaserSensorIcon,
    kicker: "The Sensor",
    title: "TDLAS methane sensing",
    text: "A high-precision tunable-diode laser detects methane specifically, not a proxy signal, from altitudes up to 100 m. It sees leaks the eye and standard cameras miss, across large, distributed sites.",
    stats: [
      { v: "100 m", l: "Sensing altitude" },
      { v: "TDLAS", l: "Methane-specific" },
    ],
    img: flyover,
    alt: "UAV scanning an industrial gas plant",
    reverse: true,
  },
  {
    Icon: MethaneIcon,
    kicker: "The Intelligence",
    title: "Onboard AI & automated reporting",
    text: "Detection, source localization, and emission estimation run onboard during flight. Operators receive automated, geotagged maps and quantified emission estimates, ready for integrity teams and compliance.",
    stats: [
      { v: "In-flight", l: "Processing" },
      { v: "Geotagged", l: "Reports" },
    ],
    img: missionPath,
    alt: "Autonomous mission flight path over a facility",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32 bg-sand overflow-hidden">
      <div className="absolute inset-0 warm-grid opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            A methane-monitoring service, not just a drone.
          </h2>
        </Reveal>

        <div className="space-y-20 md:space-y-32">
          {rows.map((r, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${r.reverse ? "md:[direction:rtl]" : ""}`}>
              {/* Text */}
              <motion.div
                className="[direction:ltr]"
                initial={{ opacity: 0, x: r.reverse ? 48 : -48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center text-gold">
                    <r.Icon className="w-6 h-6" />
                  </div>
                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">{r.kicker}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy mb-4 leading-tight">{r.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-7 max-w-md">{r.text}</p>
                <div className="flex flex-wrap gap-8">
                  {r.stats.map((s, j) => (
                    <div key={j}>
                      <p className="font-display text-2xl font-semibold text-navy">{s.v}</p>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="[direction:ltr]"
                initial={{ opacity: 0, x: r.reverse ? -48 : 48, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_-30px_hsl(var(--navy)/0.4)] border border-navy/5">
                  <img src={r.img} alt={r.alt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
