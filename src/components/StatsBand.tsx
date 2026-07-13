import { useCountUp } from "@/hooks/useCountUp";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  { value: 3, suffix: "", label: "UAVs Built", note: "fleet expanding" },
  { value: 6, suffix: "+", label: "Hours Endurance", note: "flight-tested" },
  { value: 100, suffix: " m", label: "Sensing Altitude", note: "planned TDLAS payload" },
  { value: 99999, suffix: "", label: "Max Detection Range", note: "ppm·m · planned payload" },
];

const StatItem = ({ value, suffix, label, note }: (typeof stats)[number]) => {
  const { ref, value: count } = useCountUp(value);
  return (
    <StaggerItem>
      <div ref={ref} className="text-center md:text-left md:border-l md:border-primary-foreground/15 md:pl-6">
        <p className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground tabular-nums">
          {count.toLocaleString()}
          <span className="text-gold">{suffix}</span>
        </p>
        <p className="text-primary-foreground/80 text-sm font-semibold mt-2">{label}</p>
        <p className="text-primary-foreground/40 text-xs mt-0.5">{note}</p>
      </div>
    </StaggerItem>
  );
};

const StatsBand = () => {
  return (
    <section className="py-16 md:py-20 bg-navy-dark">
      <Stagger className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
        {stats.map((s, i) => (
          <StatItem key={i} {...s} />
        ))}
      </Stagger>
    </section>
  );
};

export default StatsBand;
