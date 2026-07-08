import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SolarWingIcon, LaserSensorIcon, MethaneIcon, ReportIcon } from "@/components/brand/icons";

const cards = [
  { Icon: SolarWingIcon, title: "High-Endurance Solar UAV", text: "6+ hours of projected endurance, flight-tested — covering large sites in a single mission." },
  { Icon: LaserSensorIcon, title: "TDLAS Methane Sensing", text: "High-precision laser-based methane detection from altitudes up to 100 m." },
  { Icon: MethaneIcon, title: "Onboard AI Detection", text: "Real-time source localization and emission estimation, processed in flight." },
  { Icon: ReportIcon, title: "Automated Reporting", text: "Geotagged maps and quantified emission estimates, ready for operations and compliance." },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="relative py-28 md:py-36 bg-sand overflow-hidden">
      <div className="absolute inset-0 warm-grid opacity-60" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            A methane-monitoring service, not just a drone.
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <StaggerItem key={i}>
              <div className="group relative h-full bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_20px_50px_-20px_hsl(var(--navy)/0.25)] hover:-translate-y-1 hover:border-gold/40">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <c.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default WhatWeDo;
