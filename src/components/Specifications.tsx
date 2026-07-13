import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { useCountUp } from "@/hooks/useCountUp";

const ease = [0.22, 1, 0.36, 1] as const;

const specs = [
  { target: 4.0, decimals: 2, suffix: "", unit: "m", label: "Wingspan" },
  { target: 1.8, decimals: 1, suffix: "", unit: "m", label: "Length" },
  { target: 3.63, decimals: 2, suffix: "", unit: "kg", label: "Optimized AUW" },
  { target: 12, decimals: 0, suffix: "", unit: "m/s", label: "Cruise speed" },
  { target: 128.4, decimals: 1, suffix: "", unit: "m", label: "Max altitude" },
  { target: 6, decimals: 0, suffix: "+", unit: "hrs", label: "Endurance" },
  { target: 165, decimals: 0, suffix: "", unit: "W", label: "Peak solar power" },
  { target: 137.6, decimals: 1, suffix: "", unit: "Wh", label: "Battery energy" },
];

const SpecCell = ({ target, decimals, suffix, unit, label }: (typeof specs)[number]) => {
  const { ref, value } = useCountUp(target, 1400, decimals);
  return (
    <div ref={ref} className="group bg-card p-6 md:p-7 transition-colors hover:bg-sand">
      <p className="font-display text-3xl md:text-4xl font-semibold text-navy tabular-nums">
        {value.toFixed(decimals)}
        {suffix}
        <span className="text-gold text-lg md:text-xl ml-1 font-mono">{unit}</span>
      </p>
      <p className="text-muted-foreground text-[11px] uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
};

/** Top-view schematic of the solar UAV that draws itself on scroll. */
const AirframeBlueprint = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.6, delay: 0.2 + i * 0.15, ease }, opacity: { duration: 0.3, delay: 0.2 + i * 0.15 } },
    }),
  };
  const fade = {
    hidden: { opacity: 0 },
    show: (i: number) => ({ opacity: 1, transition: { duration: 0.5, delay: 1 + i * 0.1 } }),
  };
  const gold = "hsl(var(--gold))";
  const line = "hsl(var(--primary-foreground) / 0.85)";
  const dim = "hsl(var(--primary-foreground) / 0.4)";

  return (
    <motion.svg
      viewBox="0 0 640 340" className="w-full h-auto"
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
    >
      {/* wingspan dimension line */}
      <motion.g variants={fade} custom={0} stroke={dim} strokeWidth="1">
        <line x1="60" y1="96" x2="580" y2="96" />
        <line x1="60" y1="88" x2="60" y2="150" />
        <line x1="580" y1="88" x2="580" y2="150" />
        <path d="M60,96 l8,-4 v8 z" fill={dim} stroke="none" />
        <path d="M580,96 l-8,-4 v8 z" fill={dim} stroke="none" />
      </motion.g>
      <motion.g variants={fade} custom={1}>
        <rect x="292" y="86" width="56" height="20" rx="3" fill="hsl(var(--navy))" stroke={gold} strokeWidth="0.75" />
        <text x="320" y="100" textAnchor="middle" fill={gold} fontSize="12" fontFamily="monospace">4.00 m</text>
      </motion.g>

      {/* length dimension line */}
      <motion.g variants={fade} custom={2} stroke={dim} strokeWidth="1">
        <line x1="34" y1="120" x2="34" y2="300" />
        <line x1="26" y1="120" x2="70" y2="120" />
        <line x1="26" y1="300" x2="70" y2="300" />
        <path d="M34,120 l-4,8 h8 z" fill={dim} stroke="none" />
        <path d="M34,300 l-4,-8 h8 z" fill={dim} stroke="none" />
      </motion.g>
      <motion.g variants={fade} custom={3}>
        <rect x="8" y="200" width="52" height="20" rx="3" fill="hsl(var(--navy))" stroke={gold} strokeWidth="0.75" />
        <text x="34" y="214" textAnchor="middle" fill={gold} fontSize="12" fontFamily="monospace">1.80 m</text>
      </motion.g>

      {/* main wing */}
      <motion.path variants={draw} custom={0}
        d="M60,150 q0,-14 20,-14 h480 q20,0 20,14 q0,14 -20,14 h-480 q-20,0 -20,-14 z"
        fill="none" stroke={line} strokeWidth="2" />
      {/* solar-cell segment lines on the wing */}
      <motion.g variants={fade} custom={4} stroke="hsl(var(--primary-foreground) / 0.3)" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, i) => {
          const x = 110 + i * 40;
          return <line key={i} x1={x} y1="140" x2={x} y2="160" />;
        })}
      </motion.g>

      {/* fuselage */}
      <motion.path variants={draw} custom={1}
        d="M320,120 q10,0 12,14 v150 q0,10 -12,10 q-12,0 -12,-10 v-150 q2,-14 12,-14 z"
        fill="hsl(var(--primary-foreground) / 0.06)" stroke={line} strokeWidth="2" />
      {/* nose motor + prop */}
      <motion.g variants={fade} custom={5} stroke={gold} strokeWidth="1.5" fill="none">
        <circle cx="320" cy="120" r="4" fill={gold} />
        <line x1="300" y1="120" x2="340" y2="120" />
      </motion.g>

      {/* tail stabiliser */}
      <motion.path variants={draw} custom={2}
        d="M260,292 q0,-8 12,-8 h96 q12,0 12,8 q0,8 -12,8 h-96 q-12,0 -12,-8 z"
        fill="none" stroke={line} strokeWidth="2" />

      {/* payload marker */}
      <motion.g variants={fade} custom={6}>
        <circle cx="320" cy="210" r="6" fill="none" stroke={gold} strokeWidth="1.5" />
        <circle cx="320" cy="210" r="2" fill={gold} />
        <line x1="326" y1="210" x2="420" y2="210" stroke={dim} strokeWidth="1" strokeDasharray="3 3" />
        <text x="428" y="207" fill="hsl(var(--primary-foreground) / 0.6)" fontSize="11" fontFamily="monospace">TDLAS PAYLOAD</text>
        <text x="428" y="221" fill={dim} fontSize="9" fontFamily="monospace">methane sensor + HD camera</text>
      </motion.g>
    </motion.svg>
  );
};

const Specifications = () => {
  return (
    <section id="specifications" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Specifications</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            A full-scale, flight-tested airframe.
          </h2>
        </Reveal>

        {/* Blueprint schematic */}
        <Reveal delay={0.1}>
          <div className="relative rounded-3xl bg-navy overflow-hidden mb-6 p-6 md:p-12">
            <div className="absolute inset-0 blueprint-grid opacity-70" />
            <div className="absolute top-5 left-6 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/40">
              SolarSentinel · top view · not to scale
            </div>
            <div className="relative max-w-3xl mx-auto pt-6">
              <AirframeBlueprint />
            </div>
          </div>
        </Reveal>

        {/* Spec readout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {specs.map((s, i) => (
            <SpecCell key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
