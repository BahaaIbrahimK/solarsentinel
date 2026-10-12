import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Pause, Play, Maximize2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const proof = [
  { v: "3", l: "Full-scale UAVs built" },
  { v: "Flight-tested", l: "Real hardware, not renderings" },
  { v: "219 t", l: "CH₄ avoided per repaired leak / yr" },
  { v: "AIAA 2026", l: "Peer-reviewed & accepted" },
];

const FILM = { hd: "/media/flight-test-film.mp4", sd: "/media/flight-test-film-720.mp4", poster: "/media/flight-test-poster.jpg" };

/** The flight-test film: loads when near view, plays only while visible, pausable. */
const FlightFilm = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.35 });
  const nearView = useInView(videoRef, { once: true, margin: "400px" });
  const reduced = useReducedMotion();
  const [src, setSrc] = useState<string>();
  const [userPaused, setUserPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (nearView && !src) setSrc(window.matchMedia("(max-width: 767px)").matches ? FILM.sd : FILM.hd);
  }, [nearView, src]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src) return;
    if (inView && !userPaused && !reduced) v.play().catch(() => undefined);
    else v.pause();
  }, [inView, userPaused, reduced, src]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().catch(() => undefined);
    } else {
      setUserPaused(true);
      v.pause();
    }
  };

  const fullscreen = () => {
    const v = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen().catch(() => undefined);
    else v.webkitEnterFullscreen?.();
  };

  return (
    <figure>
      <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-navy shadow-[0_40px_90px_-40px_hsl(var(--navy)/0.55)]">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          poster={FILM.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label="SolarSentinel flight-test film: the solar UAV flying on autopilot over the Arabian Gulf coast, Eastern Province"
        />
        {!playing && (
          <button
            onClick={toggle}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play film"
          >
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy/70 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-105">
              <Play className="w-6 h-6 md:w-7 md:h-7 ml-1" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-4">
        <span className="text-muted-foreground text-xs md:text-sm">
          Flight test, Eastern Province, Saudi Arabia.{" "}
          <span className="hidden sm:inline">Real flight footage.</span>
        </span>
        <span className="flex items-center gap-1 shrink-0">
          <button
            onClick={toggle}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-navy/70 hover:text-navy hover:bg-navy/5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            onClick={fullscreen}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-navy/70 hover:text-navy hover:bg-navy/5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Full screen</span>
          </button>
        </span>
      </figcaption>
    </figure>
  );
};

const FlightProof = () => {
  return (
    <section className="relative">
      {/* Gold statement band */}
      <div className="bg-gold pt-20 md:pt-24 pb-36 md:pb-56">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08] mb-4">
              Real hardware. Real flight hours.
            </h2>
            <p className="text-navy/70 text-base md:text-lg max-w-xl mx-auto">
              Designed, built, and flown by our own team in Dhahran, from raw materials to a flight-tested solar UAV.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {proof.map((p, i) => (
              <StaggerItem key={i}>
                <p className="font-display text-2xl md:text-3xl font-semibold text-navy">{p.v}</p>
                <p className="text-navy/60 text-sm mt-1">{p.l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Flight-test film, set over the band (transparent wrapper so the gold shows behind its top) */}
      <div className="relative z-10 -mt-24 md:-mt-40">
        <Reveal className="max-w-6xl mx-auto px-6">
          <FlightFilm />
        </Reveal>
      </div>
    </section>
  );
};

export default FlightProof;
