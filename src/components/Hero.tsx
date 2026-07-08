import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-refinery-wide.jpg";
import { ScanRipple } from "@/components/brand/ScanRipple";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[680px] flex flex-col justify-center overflow-hidden bg-navy">
      {/* Parallax background photo */}
      <motion.img
        src={heroBg} alt="" aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(var(--navy)/0.86) 0%, hsl(var(--navy)/0.72) 40%, hsl(var(--navy)/0.97) 100%)" }} />
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Signature scan-ripple, offset behind headline */}
      <ScanRipple className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] opacity-40 pointer-events-none" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-[16vh]">
        <motion.p
          className="text-gold text-xs md:text-sm font-semibold tracking-[0.32em] uppercase mb-6"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          Solar-Powered Aerial Methane Monitoring
        </motion.p>

        <h1 className="font-display text-[2.6rem] md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.04] mb-7">
          <motion.span className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }}>
            Sensing the invisible,
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-gold via-[hsl(37,90%,62%)] to-gold bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease }}
          >
            from the sky.
          </motion.span>
        </h1>

        <motion.p
          className="text-primary-foreground/70 text-lg md:text-xl max-w-[520px] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease }}
        >
          Frequent, quantified methane monitoring for refineries and gas plants — powered by the sun.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.62, ease }}
        >
          <a href="#contact" className="group px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:brightness-105 transition text-sm tracking-wide inline-flex items-center justify-center gap-2">
            Request a Pilot
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#how-it-works" className="px-8 py-4 border border-primary-foreground/25 text-primary-foreground/85 font-medium rounded-full hover:bg-primary-foreground/5 transition text-sm tracking-wide backdrop-blur-sm">
            See How It Works
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-primary-foreground/40 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="scroll-cue w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
