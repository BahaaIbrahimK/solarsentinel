import { useFadeIn } from "@/hooks/useFadeIn";
import { Factory, GitBranch, Trash2 } from "lucide-react";

const roadmap = [
  { icon: GitBranch, name: "Pipeline Corridors" },
  { icon: Trash2, name: "Landfills" },
];

const Industries = () => {
  const fade = useFadeIn();

  return (
    <section id="industries" className="py-28 bg-navy">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-14">
            <h2 className="section-label text-gold mx-auto">Industries</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 leading-snug">
              Built for Refineries &amp; Gas-Processing Plants
            </h3>
            <p className="text-primary-foreground/50 text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Phase 1 is intentionally narrow: large, methane-relevant industrial sites in Saudi Arabia's Eastern Province.
            </p>
          </div>

          <div className="bg-primary-foreground/[0.04] border border-gold/20 rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-primary-foreground text-lg mb-2">Oil &amp; Gas Refineries and Gas-Processing Plants</h4>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">
                  Recurring methane screening, source localization, and repair verification for large, distributed
                  industrial footprints where manual and helicopter-based inspection is costly or too infrequent.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-primary-foreground/40 text-xs font-semibold uppercase tracking-wide">On the Roadmap</span>
            {roadmap.map((r, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-primary-foreground/20 text-primary-foreground/50 text-sm">
                <r.icon className="w-4 h-4" />
                {r.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
