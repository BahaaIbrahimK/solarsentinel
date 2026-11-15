import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { X } from "lucide-react";

const FILM = { hd: "/media/flight-clean.mp4", sd: "/media/flight-clean-720.mp4", still: "/media/film-banner.jpg" };

/** A still from the flight test. On desktop a play disc follows the cursor; a click opens the film in a lightbox. */
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
        className="group relative block aspect-[16/9] w-full overflow-hidden rounded-xl bg-navy-dark text-left md:aspect-[2/1] [@media(hover:hover)]:cursor-none"
      >
        <img src={FILM.still} alt="" loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[70%_30%] transition-transform duration-[2400ms] ease-out group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--navy-dark)/0.78)_0%,hsl(var(--navy-dark)/0.35)_45%,transparent_75%)]" />

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <p className="font-display text-3xl font-bold uppercase leading-none text-white md:text-6xl">Watch the<br />flight test</p>
          <p className="mt-4 text-sm text-white/70">45 seconds · real speed · Eastern Province, Saudi Arabia</p>
        </div>

        {/* touch screens: a fixed play disc */}
        <span className="absolute right-6 top-6 hidden h-16 w-16 items-center justify-center rounded-full bg-gold text-[11px] font-bold uppercase tracking-[0.18em] text-navy [@media(hover:none)]:flex">Play</span>

        {/* desktop: disc that follows the cursor */}
        <motion.span
          aria-hidden="true"
          style={{ x, y }}
          animate={{ scale: hover ? 1 : 0.4, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -ml-14 -mt-14 left-0 top-0 hidden h-28 w-28 items-center justify-center rounded-full bg-gold pl-[0.22em] text-xs font-bold uppercase tracking-[0.22em] text-navy [@media(hover:hover)]:flex"
        >
          Play
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
