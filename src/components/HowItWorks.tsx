import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
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

const ease = [0.22, 1, 0.36, 1] as const;
// node x-centres for a 4-column layout
const cols = [12.5, 37.5, 62.5, 87.5];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            One autonomous mission, four steps.
          </h2>
        </Reveal>

        {/* Flight-path timeline (desktop) */}
        <div className="hidden md:block relative mb-16">
          <div className="relative h-16">
            <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="absolute inset-0 w-full h-16" fill="none">
              <motion.path
                d="M0,42 C150,10 250,10 375,34 S625,58 750,30 S900,8 1000,26"
                stroke="hsl(var(--gold))" strokeWidth="2" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.3 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease }}
              />
            </svg>
            {/* travelling UAV */}
            <motion.div
              className="absolute top-0 text-navy"
              initial={{ left: "0%", opacity: 0 }}
              whileInView={{ left: "97%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease }}
            >
              <UAVIcon className="w-8 h-8 -translate-x-1/2" />
            </motion.div>
            {/* nodes */}
            {cols.map((x, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${x}%` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.4, ease }}
              >
                <span className="relative flex items-center justify-center">
                  <span className="absolute w-8 h-8 rounded-full bg-gold/20 animate-ping" style={{ animationDuration: "2.5s" }} />
                  <span className="relative w-4 h-4 rounded-full bg-gold border-2 border-background" />
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6 mt-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={0.5 + i * 0.15}>
                <div className="text-center px-2">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-gold mx-auto mb-4">
                    <s.Icon className="w-6 h-6" />
                  </div>
                  <p className="font-display font-semibold text-navy mb-1.5">{`0${i + 1} · ${s.label}`}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Vertical steps (mobile) */}
        <div className="md:hidden space-y-6 mb-14">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-gold shrink-0">
                    <s.Icon className="w-6 h-6" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
                </div>
                <div className="pb-2">
                  <p className="font-display font-semibold text-navy mb-1">{`0${i + 1} · ${s.label}`}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

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
