import { Reveal } from "@/components/motion/Reveal";
import { GitBranch, Trash2, Factory } from "lucide-react";
import { ScanRipple } from "@/components/brand/ScanRipple";

const roadmap = [
  { icon: GitBranch, name: "Pipeline Corridors" },
  { icon: Trash2, name: "Landfills" },
];

// Saudi Arabia outline (stylised, recognisable) — viewBox 400x340
const SAUDI = "M150,40 L250,32 L292,56 L300,80 L297,104 L303,118 L305,118 L309,152 L313,118 L322,126 L342,160 L351,206 L322,240 L270,270 L212,284 L176,276 L152,206 L141,140 L146,84 Z";
// Eastern Province highlight (east strip hugging the Gulf)
const EASTERN = "M292,56 L300,80 L297,104 L303,118 L309,152 L313,118 L322,126 L342,160 L351,206 L322,240 L316,150 L305,90 Z";

// site markers positioned over the Eastern Province, in SVG coords (viewBox 400x340)
const sites = [
  { x: 311, y: 120, big: true },
  { x: 327, y: 158, big: false },
  { x: 301, y: 98, big: false },
  { x: 330, y: 198, big: false },
  { x: 317, y: 172, big: false },
];

const CoveragePanel = () => (
  <div className="relative aspect-[4/3] rounded-3xl bg-navy overflow-hidden border border-primary-foreground/10">
    <div className="absolute inset-0 warm-grid opacity-[0.10]" style={{ filter: "invert(1)" }} />

    <svg viewBox="0 0 400 340" className="absolute inset-0 w-full h-full">
      {/* Arabian Gulf hint (east of the country) */}
      <path d="M300,50 C340,80 365,130 355,190 C350,235 365,275 345,330 L400,330 L400,30 Z"
        fill="hsl(var(--gold) / 0.05)" />
      {/* country body */}
      <path d={SAUDI} fill="hsl(var(--primary-foreground) / 0.06)" stroke="hsl(var(--primary-foreground) / 0.25)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* eastern province highlight */}
      <path d={EASTERN} fill="hsl(var(--gold) / 0.12)" stroke="hsl(var(--gold) / 0.5)" strokeWidth="1.2" strokeLinejoin="round" />
      {/* faint survey routes over the eastern province */}
      <path d="M311,120 C330,140 326,160 301,150 C325,170 332,185 327,158" fill="none"
        stroke="hsl(var(--primary-foreground) / 0.2)" strokeWidth="1" strokeDasharray="3 4" />
      {/* site dots */}
      {sites.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={s.big ? 4 : 3} fill="hsl(var(--gold))" />
        </g>
      ))}
    </svg>

    {/* pulsing sensing ripples over the sites (HTML overlay, % of panel) */}
    {sites.map((s, i) => (
      <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${(s.x / 400) * 100}%`, top: `${(s.y / 340) * 100}%` }}>
        <ScanRipple className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${s.big ? "w-20 h-20" : "w-14 h-14"} opacity-70`} />
      </div>
    ))}

    <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider text-primary-foreground/50">
      Kingdom of Saudi Arabia
    </div>
    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-gold/70">
      Eastern Province · 11 sites
    </div>
    <div className="absolute bottom-4 right-4 font-mono text-[9px] text-primary-foreground/35">
      3 refineries + 8 gas facilities
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
