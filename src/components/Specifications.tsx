import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { UAVIcon } from "@/components/brand/icons";

const specs = [
  { value: "4.00", unit: "m", label: "Wingspan" },
  { value: "1.45", unit: "m", label: "Length" },
  { value: "3.63", unit: "kg", label: "Optimized AUW" },
  { value: "12", unit: "m/s", label: "Cruise speed" },
  { value: "128.4", unit: "m", label: "Max altitude" },
  { value: "6+", unit: "hrs", label: "Endurance" },
  { value: "165", unit: "W", label: "Peak solar power" },
  { value: "137.6", unit: "Wh", label: "Battery energy" },
];

const Specifications = () => {
  return (
    <section id="specifications" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal className="max-w-2xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Specifications</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
              A full-scale, flight-tested airframe.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 text-muted-foreground">
              <UAVIcon className="w-8 h-8 text-gold" />
              <span className="font-mono text-xs uppercase tracking-wider">Payload: TDLAS methane sensor + HD camera</span>
            </div>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {specs.map((s, i) => (
            <StaggerItem key={i}>
              <div className="h-full bg-card p-7 md:p-8">
                <p className="font-display text-3xl md:text-4xl font-semibold text-navy tabular-nums">
                  {s.value}
                  <span className="text-gold text-xl md:text-2xl ml-1 font-mono">{s.unit}</span>
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-2">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Specifications;
