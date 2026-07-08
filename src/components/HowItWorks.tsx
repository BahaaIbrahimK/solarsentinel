import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScopeIcon, UAVIcon, MethaneIcon, ReportIcon } from "@/components/brand/icons";
import { Check } from "lucide-react";

const steps = [
  { Icon: ScopeIcon, label: "Scope the site", sub: "Define the flight path and monitoring objective." },
  { Icon: UAVIcon, label: "Autonomous survey", sub: "The solar UAV flies a planned methane-screening mission." },
  { Icon: MethaneIcon, label: "Detect & prioritize", sub: "Onboard AI flags likely sources and estimates severity." },
  { Icon: ReportIcon, label: "Report & verify", sub: "Geotagged outputs delivered, with optional repair verification." },
];

const deliverables = [
  "Recurring methane monitoring",
  "Source localization",
  "Quantified emission estimates",
  "Automated geotagged reports",
  "Optional repair verification",
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            A recurring service, built for industrial operators.
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-4 gap-8 md:gap-6 relative mb-20">
          {steps.map((s, i) => (
            <StaggerItem key={i}>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-gold shrink-0">
                    <s.Icon className="w-7 h-7" />
                  </div>
                  <span className="font-display text-4xl font-semibold text-sand-deep">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{s.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="rounded-3xl bg-navy p-8 md:p-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6">Every engagement delivers</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </span>
                  <span className="text-primary-foreground/80 text-sm leading-snug">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
