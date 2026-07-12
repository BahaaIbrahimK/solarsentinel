import { Reveal } from "@/components/motion/Reveal";
import { GitBranch, Trash2, Factory } from "lucide-react";

const roadmap = [
  { icon: GitBranch, name: "Pipeline Corridors" },
  { icon: Trash2, name: "Landfills" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Industries</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08] mb-5">
            Built for refineries &amp; gas-processing plants.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Phase 1 is intentionally narrow: large, methane-relevant industrial sites in Saudi Arabia's Eastern
            Province, where manual and helicopter-based inspection is costly or too infrequent.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl bg-navy p-8 md:p-12 overflow-hidden mb-8">
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="relative flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center shrink-0 text-navy">
                <Factory className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-primary-foreground text-xl md:text-2xl mb-3">
                  Oil &amp; gas refineries and gas-processing plants
                </h3>
                <p className="text-primary-foreground/60 text-base leading-relaxed max-w-2xl">
                  Recurring methane screening, source localization, and repair verification for large, distributed
                  industrial footprints, designed for operations, integrity, and emissions teams that need frequent,
                  quantified coverage.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em]">On the roadmap</span>
            <div className="flex flex-wrap gap-3">
              {roadmap.map((r, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-navy/25 text-navy/60 text-sm bg-card/50">
                  <r.icon className="w-4 h-4" />
                  {r.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Industries;
