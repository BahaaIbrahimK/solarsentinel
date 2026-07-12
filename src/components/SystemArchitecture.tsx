import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScanRipple } from "@/components/brand/ScanRipple";
import { SolarPanelIcon, BatteryIcon, LaserSensorIcon, ChipIcon, BroadcastIcon } from "@/components/brand/icons";

const nodes = [
  { Icon: SolarPanelIcon, label: "Solar Array", value: "165 W peak", ripple: false },
  { Icon: BatteryIcon, label: "Power System", value: "137.6 Wh · MPPT", ripple: false },
  { Icon: LaserSensorIcon, label: "TDLAS Payload", value: "Methane sensing", ripple: true },
  { Icon: ChipIcon, label: "Onboard AI", value: "In-flight processing", ripple: false },
  { Icon: BroadcastIcon, label: "Geotagged Output", value: "Maps + GPS alerts", ripple: false },
];

const Connector = ({ delay }: { delay: number }) => (
  <>
    {/* desktop horizontal */}
    <div className="hidden md:block relative flex-1 h-px bg-primary-foreground/15 self-center mx-1">
      <span className="flow-dot" style={{ animationDelay: `${delay}s` }} />
    </div>
    {/* mobile vertical */}
    <div className="md:hidden relative w-px h-8 bg-primary-foreground/15 mx-auto">
      <span className="flow-dot-y" style={{ animationDelay: `${delay}s` }} />
    </div>
  </>
);

const SystemArchitecture = () => {
  return (
    <section id="architecture" className="relative py-24 md:py-32 bg-navy-dark overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--gold)), transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">System Architecture</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground leading-[1.08]">
            Sun in. Methane intelligence out.
          </h2>
          <p className="text-primary-foreground/50 text-base mt-5 leading-relaxed">
            An integrated power, sensing, and AI stack, engineered so a single aircraft can fly for hours and turn
            raw signal into actionable reports onboard.
          </p>
        </Reveal>

        <Stagger className="flex flex-col md:flex-row md:items-stretch">
          {nodes.map((n, i) => (
            <StaggerItem key={i} className="md:flex md:items-stretch md:flex-1">
              <div className="relative flex md:flex-col items-center md:items-center gap-4 md:gap-0 md:text-center md:flex-1">
                <div className="relative shrink-0">
                  {n.ripple && <ScanRipple className="absolute -inset-4 opacity-60" />}
                  <div className="relative w-16 h-16 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 flex items-center justify-center text-gold">
                    <n.Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="md:mt-4">
                  <p className="font-display font-semibold text-primary-foreground text-sm md:text-base">{n.label}</p>
                  <p className="text-primary-foreground/45 text-xs mt-0.5 font-mono">{n.value}</p>
                </div>
              </div>
              {i < nodes.length - 1 && <Connector delay={i * 0.5} />}
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-2 mt-14 text-primary-foreground/40 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-mono uppercase tracking-wider">Signal flow · power → sensing → intelligence → report</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SystemArchitecture;
