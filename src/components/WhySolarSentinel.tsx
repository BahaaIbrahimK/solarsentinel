import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SolarWingIcon, LaserSensorIcon, EnduranceIcon, RepairIcon } from "@/components/brand/icons";
import { ScanRipple } from "@/components/brand/ScanRipple";

const WhySolarSentinel = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Why SolarSentinel</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            The best fit for frequent, large-site methane screening.
          </h2>
          <p className="text-muted-foreground text-base mt-5 leading-relaxed">
            Not a replacement for every LDAR method. It is the right tool where current approaches are fragmented or costly.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-5 auto-rows-fr">
          {/* Large feature — methane-specific sensing */}
          <StaggerItem className="md:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 md:p-10">
              <ScanRipple className="absolute -right-10 -top-10 w-56 h-56 opacity-30" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center text-navy mb-6">
                  <LaserSensorIcon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">Methane-specific sensing</h3>
                <p className="text-primary-foreground/60 text-base leading-relaxed max-w-md">
                  TDLAS detects methane directly, not a proxy signal, for higher confidence than optical gas imaging or
                  standard drone payloads.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Zero-emission */}
          <StaggerItem>
            <div className="relative h-full rounded-3xl border border-border bg-gradient-to-br from-gold/[0.12] to-transparent p-8">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-gold mb-5">
                <SolarWingIcon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">Zero-emission by design</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solar power removes fuel and major operating costs, aligned with decarbonization goals.
              </p>
            </div>
          </StaggerItem>

          {/* Large-site coverage */}
          <StaggerItem>
            <div className="relative h-full rounded-3xl border border-border bg-card p-8">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-gold mb-5">
                <EnduranceIcon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-2">Large-site coverage</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                High endurance means fewer mission resets, built for recurring, site-scale screening.
              </p>
            </div>
          </StaggerItem>

          {/* Repeatable — wide */}
          <StaggerItem className="md:col-span-2">
            <div className="relative h-full rounded-3xl border border-border bg-card p-8 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-gold shrink-0">
                <RepairIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy mb-2">Repeatable &amp; verifiable</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                  A recurring service model with optional post-repair verification. Proof the leak was found and fixed,
                  survey after survey.
                </p>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default WhySolarSentinel;
