import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import frame1 from "@/assets/Frame1.jpg";
import frame3 from "@/assets/Frame3.jpg";
import frame5 from "@/assets/Frame5.jpg";
import frame6 from "@/assets/Frame6.jpg";
import frame8 from "@/assets/Frame8.jpg";

const steps = [
  { img: frame1, title: "Every component, accounted for", text: "Carbon spars, 3D-printed ribs, solar cells, and avionics, laid out before a single wing goes together." },
  { img: frame3, title: "Structural assembly", text: "Carbon-fiber spars (22 mm OD) form the lightweight backbone of each wing." },
  { img: frame5, title: "Threading the ribs", text: "Topology-optimized, 3D-printed ribs are fitted along the spar for strength at minimum weight." },
  { img: frame6, title: "The wing takes shape", text: "Covering film seals the structure ahead of final assembly and integration." },
  { img: frame8, title: "Ready to fly", text: "A finished airframe, built in-house from raw materials and carried out for flight testing." },
];

const N = steps.length;

const BuiltInHouse = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.max(0, Math.min(N - 1, Math.floor(p * N)));
    setActive(idx);
  });

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="built-in-house" ref={ref} className="relative bg-navy" style={{ height: `${N * 90}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="mb-8 md:mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-3">Built In-House</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground leading-[1.08] max-w-2xl">
              From raw materials to flight-ready hardware.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Image stack — cross-fade driven by active step */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              {steps.map((s, i) => (
                <motion.img
                  key={i}
                  src={s.img}
                  alt={s.title}
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.04 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-navy/70 backdrop-blur-sm text-gold text-xs font-semibold tracking-wide">
                Step {active + 1} / {N}
              </div>
            </div>

            {/* Text */}
            <div className="relative min-h-[190px]">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ pointerEvents: active === i ? "auto" : "none" }}
                >
                  <span className="font-display text-5xl font-semibold text-primary-foreground/15 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-primary-foreground/55 text-base leading-relaxed max-w-md">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10 h-px bg-primary-foreground/10 relative overflow-hidden rounded-full">
            <motion.div className="absolute inset-y-0 left-0 bg-gold" style={{ width: barWidth }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltInHouse;
