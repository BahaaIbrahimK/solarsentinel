import { Reveal } from "@/components/motion/Reveal";
import { GitBranch, Trash2, Factory } from "lucide-react";
import { ScanRipple } from "@/components/brand/ScanRipple";

const roadmap = [
  { icon: GitBranch, name: "Pipeline Corridors" },
  { icon: Trash2, name: "Landfills" },
];

// stylised site markers within the coverage panel (x%, y%)
const sites = [
  { x: 62, y: 30, big: true },
  { x: 74, y: 46, big: false },
  { x: 55, y: 52, big: false },
  { x: 68, y: 66, big: false },
  { x: 48, y: 38, big: false },
];

const CoveragePanel = () => (
  <div className="relative aspect-[4/3] rounded-3xl bg-navy overflow-hidden border border-primary-foreground/10">
    <div className="absolute inset-0 warm-grid opacity-[0.12]" style={{ filter: "invert(1)" }} />
    {/* suggested Gulf coastline */}
    <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" fill="none">
      <path d="M400,20 C330,60 350,120 320,150 C300,175 330,220 300,300"
        stroke="hsl(var(--gold) / 0.25)" strokeWidth="1.5" />
      <path d="M0,0 L400,0 L400,300 L0,300 Z" stroke="none" fill="url(#sea)" opacity="0.0" />
      {/* faint survey routes */}
      <path d="M190,115 C230,150 250,140 296,90 C250,160 220,190 272,200 C210,175 200,150 220,110"
        stroke="hsl(var(--primary-foreground) / 0.15)" strokeWidth="1" strokeDasharray="3 4" />
    </svg>

    {/* site markers with sensing ripples */}
    {sites.map((s, i) => (
      <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
        <ScanRipple className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${s.big ? "w-24 h-24" : "w-16 h-16"} opacity-70`} />
        <span className={`relative block rounded-full bg-gold ${s.big ? "w-3 h-3" : "w-2 h-2"}`}
          style={{ boxShadow: "0 0 10px hsl(var(--gold))" }} />
      </div>
    ))}

    <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider text-primary-foreground/50">
      Eastern Province · KSA
    </div>
    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary-foreground/40">
      11 sites · 3 refineries + 8 gas facilities
    </div>
  </div>
);

const Industries = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Industries</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08] mb-5">
              Built for refineries &amp; gas-processing plants.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Phase 1 is intentionally narrow: large, methane-relevant industrial sites in Saudi Arabia's Eastern
              Province, where manual and helicopter-based inspection is costly or too infrequent.
            </p>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-navy mb-8">
              <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shrink-0 text-navy">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-primary-foreground text-base mb-1.5">
                  Oil &amp; gas refineries and gas plants
                </h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">
                  Recurring screening, source localization, and repair verification for large, distributed footprints.
                </p>
              </div>
            </div>

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

          <Reveal delay={0.15}>
            <CoveragePanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Industries;
