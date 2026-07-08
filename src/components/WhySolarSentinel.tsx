import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SolarWingIcon, LaserSensorIcon, EnduranceIcon, RepairIcon } from "@/components/brand/icons";

const points = [
  {
    Icon: SolarWingIcon,
    title: "Zero-emission by design",
    text: "Solar power removes fuel and major operating costs — lower-emission monitoring that aligns with decarbonization goals.",
  },
  {
    Icon: LaserSensorIcon,
    title: "Methane-specific sensing",
    text: "TDLAS detects methane directly, not a proxy — higher confidence than optical-gas-imaging or standard drone payloads.",
  },
  {
    Icon: EnduranceIcon,
    title: "Large-site coverage",
    text: "High endurance means fewer mission resets — built for recurring, site-scale screening rather than one-off inspection flights.",
  },
  {
    Icon: RepairIcon,
    title: "Repeatable & verifiable",
    text: "A recurring service model with optional post-repair verification — proof the leak was found and fixed.",
  },
];

const WhySolarSentinel = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Why SolarSentinel</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            The best fit for frequent, large-site methane screening.
          </h2>
          <p className="text-muted-foreground text-base mt-5 leading-relaxed">
            Not a replacement for every LDAR method — the right tool where current approaches are fragmented or costly.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <StaggerItem key={i}>
              <div className="group h-full flex gap-5 p-7 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-[0_20px_50px_-20px_hsl(var(--navy)/0.25)] hover:-translate-y-1 hover:border-gold/40">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <p.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default WhySolarSentinel;
