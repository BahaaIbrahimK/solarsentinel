import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { X } from "lucide-react";

const PlayIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="M6 3.8v16.4a1 1 0 0 0 1.5.86l13.2-8.2a1 1 0 0 0 0-1.72L7.5 2.94A1 1 0 0 0 6 3.8Z" fill="hsl(var(--navy))" /></svg>
);

const WORD = "Tireless";

const FILM = { hd: "/media/flight-clean.mp4", sd: "/media/flight-clean-720.mp4", still: "/media/film-banner-v3.jpg" };

/** One word over a landscape photo; a click opens the flight-test film in a lightbox. On desktop the play disc follows the cursor. */
const FilmBanner = () => {
  const box = useRef<HTMLButtonElement>(null);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 26, mass: 0.6 });
  const y = useSpring(my, { stiffness: 260, damping: 26, mass: 0.6 });

  const move = (e: React.MouseEvent) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  // the outline words drift apart slightly as the banner scrolls through the screen
  const { scrollYProgress } = useScroll({ target: box, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const driftBack = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const opener = box.current;
    requestAnimationFrame(() => closeBtn.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && dialog.current) {
        const f = [...dialog.current.querySelectorAll<HTMLElement>("button, video")];
        const i = f.indexOf(document.activeElement as HTMLElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length]?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); opener?.focus(); };
  }, [open]);

  const src = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches ? FILM.sd : FILM.hd;

  return (
    <>
      <button
        ref={box}
        type="button"
        onClick={() => setOpen(true)}
        onMouseMove={move}
        onMouseEnter={(e) => { move(e); setHover(true); }}
        onMouseLeave={() => setHover(false)}
        aria-label="Play the flight-test film"
        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm bg-navy-dark text-left sm:aspect-[16/9] md:aspect-[2/1] [@media(hover:hover)]:cursor-none"
      >
        <img src={FILM.still} alt="" loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_45%] transition-transform duration-[2400ms] ease-out group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-navy-dark/40" />

        {/* one word, three times: outline, solid, outline */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center font-display font-bold leading-[0.86] tracking-[-0.02em] text-[12.5vw] md:text-[12.5vw] xl:text-[11.5rem]">
          <motion.span style={{ x: drift }} className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)]">{WORD}</motion.span>
          <span className="block text-white">{WORD}</span>
          <motion.span style={{ x: driftBack }} className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)]">{WORD}</motion.span>
        </div>
        <span className="sr-only">{WORD}. Play the flight-test film.</span>
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gold" />

        {/* resting play disc; on desktop it hands over to the disc that follows the cursor */}
        <span className={`absolute right-4 top-4 flex h-12 w-12 md:right-[8%] md:top-[10%] md:h-20 md:w-20 items-center justify-center rounded-full bg-gold shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-opacity duration-300 ${hover ? "opacity-0" : "opacity-100"}`}><PlayIcon className="ml-1 h-6 w-6" /></span>

        {/* desktop: disc that follows the cursor */}
        <motion.span
          aria-hidden="true"
          style={{ x, y }}
          animate={{ scale: hover ? 1 : 0.4, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -ml-10 -mt-10 left-0 top-0 hidden h-20 w-20 items-center justify-center rounded-full bg-gold shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] [@media(hover:hover)]:flex"
        >
          <PlayIcon className="ml-1 h-6 w-6" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 p-4 md:p-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            ref={dialog}
            role="dialog" aria-modal="true" aria-label="Flight-test film"
          >
            <motion.video
              src={src} autoPlay controls playsInline muted
              className="max-h-full w-full max-w-6xl rounded-lg bg-black"
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button ref={closeBtn} type="button" onClick={() => setOpen(false)} aria-label="Close film"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 md:right-8 md:top-8">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilmBanner;
