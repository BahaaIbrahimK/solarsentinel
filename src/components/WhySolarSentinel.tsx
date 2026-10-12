import { Reveal } from "@/components/motion/Reveal";

const reasons = [
  {
    title: "Methane-specific sensing",
    text: "TDLAS detects methane directly, not a proxy signal, for higher confidence than optical gas imaging or standard drone payloads.",
    fact: "Tunable-diode laser sensing",
  },
  {
    title: "Large-site coverage",
    text: "High endurance means fewer mission resets, built for recurring, site-scale screening.",
    fact: "4.0 m wing · hand-launched",
  },
  {
    title: "Zero-emission by design",
    text: "Solar power removes fuel and major operating costs, aligned with decarbonization goals.",
    fact: "Solar-assisted electric flight",
  },
  {
    title: "Repeatable & verifiable",
    text: "A recurring service model with optional post-repair verification. Proof the leak was found and fixed, survey after survey.",
    fact: "Post-repair verification",
  },
];

const WhySolarSentinel = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Why SolarSentinel</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
              The best fit for frequent, <span className="whitespace-nowrap">large-site</span> methane screening.
            </h2>
            <div className="mt-8 pl-5 border-l-2 border-gold">
              <p className="text-muted-foreground text-base leading-relaxed">
                Not a replacement for every LDAR method. It is the right tool where current approaches are fragmented
                or costly.
              </p>
            </div>
          </Reveal>
        </div>

        <ol className="lg:col-span-7 border-b border-navy/10">
          {reasons.map((r, i) => (
            <li key={r.title} className="border-t border-navy/10">
              <Reveal y={20} delay={i * 0.05}>
                <div className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] py-8 md:py-10">
                  <span className="font-display text-sm md:text-base font-semibold text-gold tabular-nums pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-[1.75rem] font-semibold text-navy leading-tight">{r.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed mt-3 max-w-xl">{r.text}</p>
                    <p className="mt-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/55">
                      <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-7" />
                      {r.fact}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhySolarSentinel;
