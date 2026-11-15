import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const FILM = { hd: "/media/hero-flight.mp4", sd: "/media/hero-flight-720.mp4", poster: "/media/hero-flight-poster.jpg" };
const LINES = [["Sensing", "the", "invisible,"], ["from", "the", "sky."]];
const ease = [0.22, 1, 0.36, 1] as const;

/** Full-screen flight-test footage with the brand line set word by word, in the manner of a film title. */
const FilmHero = () => {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [src, setSrc] = useState<string>();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setSrc(window.matchMedia("(max-width: 767px)").matches ? FILM.sd : FILM.hd);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src) return;
    if (reduced) v.pause();
    else v.play().catch(() => undefined);
  }, [src, reduced]);

  let i = 0;
  return (
    <section ref={ref} id="hero" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-navy-dark">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={FILM.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
      />
      {/* Weighted to the left so the type stays legible over bright sky; the aircraft keeps the right side. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--navy-dark)/0.82)_0%,hsl(var(--navy-dark)/0.55)_38%,hsl(var(--navy-dark)/0.08)_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-dark/70 to-transparent" />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
        <h1 className="font-display font-bold uppercase text-white leading-[0.98] tracking-[-0.01em] text-[2.7rem] sm:text-6xl lg:text-[5.4rem] max-w-[11ch]">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((w) => {
                const d = 0.35 + i++ * 0.11;
                return (
                  <span key={w + li} className="inline-block overflow-hidden align-bottom pr-[0.24em] -mr-[0.24em] last:pr-0">
                    <motion.span
                      className={`inline-block ${li === 1 ? "text-gold" : ""}`}
                      initial={reduced ? false : { y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, delay: d, ease }}
                    >
                      {w}&nbsp;
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-md text-base md:text-lg text-white/80 leading-relaxed"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
        >
          Solar-assisted aircraft designed to find methane leaks across refineries and gas plants.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-7 left-0 right-0 z-10 mx-auto flex max-w-7xl items-end justify-between px-6 md:px-10"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <a href="#approach" aria-label="Scroll to how it works" className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <svg width="18" height="44" viewBox="0 0 18 44" fill="none" className="motion-safe:animate-[nudge_2.4s_ease-in-out_infinite]">
            <path d="M9 0v41M1.5 34 9 41.5 16.5 34" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
        <p className="hidden sm:block text-[11px] tracking-[0.18em] uppercase text-white/60">Flight test footage · Eastern Province, Saudi Arabia</p>
      </motion.div>
    </section>
  );
};

export default FilmHero;
