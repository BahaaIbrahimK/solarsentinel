import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import labBuild from "@/assets/Frame3.jpg";
import inFlight from "@/assets/uav-sky-new.jpg";

const FILM = { hd: "/media/flight-clean.mp4", sd: "/media/flight-clean-720.mp4", poster: "/media/flight-clean-poster.jpg" };

/** Our flight-test film: loads near view, plays while visible, can be paused. */
const Film = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const near = useInView(ref, { once: true, margin: "500px" });
  const reduced = useReducedMotion();
  const [src, setSrc] = useState<string>();
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (near && !src) setSrc(window.matchMedia("(max-width: 767px)").matches ? FILM.sd : FILM.hd);
  }, [near, src]);
  useEffect(() => {
    const v = ref.current;
    if (!v || !src) return;
    if (inView && !paused && !reduced) v.play().catch(() => undefined);
    else v.pause();
  }, [inView, paused, reduced, src]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { setPaused(false); v.play().catch(() => undefined); } else { setPaused(true); v.pause(); }
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-navy-dark">
      <video ref={ref} className="absolute inset-0 h-full w-full object-cover" src={src} poster={FILM.poster} muted loop playsInline preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onClick={toggle}
        aria-label="SolarSentinel flight-test film, Eastern Province, Saudi Arabia" />
      {!playing && (
        <button onClick={toggle} aria-label="Play film" className="group absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:scale-105 md:h-20 md:w-20">
            <Play className="ml-1 h-6 w-6" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};

const BuiltAndFlown = () => (
  <section id="flight" className="bg-navy text-white">
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Built and flown</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl md:text-5xl font-semibold leading-[1.08] text-balance">
              Designed, built and flown by our team.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/65">
            Three full-scale airframes built so far, flown manually and on autopilot.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 md:mt-16">
        <Film />
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Reveal>
          <figure>
            <img src={labBuild} alt="Two team members assembling the wing panels of the aircraft in the lab" loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover" />
            <figcaption className="mt-3 text-sm text-white/60">The airframe is built in our lab from identical wing panels.</figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.08}>
          <figure>
            <img src={inFlight} alt="The aircraft seen from below in flight against a clear sky" loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover" />
            <figcaption className="mt-3 text-sm text-white/60">A 4 m wing, on a test flight.</figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);

export default BuiltAndFlown;
