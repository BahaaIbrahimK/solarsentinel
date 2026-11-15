import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Opening band for the inner pages: a photo under navy, one bold uppercase title, at most one line under it. */
const PageHero = ({ kicker, title, line, image, position = "50% 50%" }: { kicker: string; title: string; line?: string; image?: string; position?: string }) => {
  const reduced = useReducedMotion();
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-navy-dark pb-16 pt-36 md:min-h-[70svh] md:pb-24">
      {image && (
        <motion.img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }}
          initial={reduced ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease }} />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--navy-dark)/0.88)_0%,hsl(var(--navy-dark)/0.6)_45%,hsl(var(--navy-dark)/0.25)_100%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.p className="font-body text-sm font-extrabold uppercase tracking-[0.16em] text-gold"
          initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
          {kicker}
        </motion.p>
        <motion.h1 className="mt-4 max-w-[16ch] font-display text-[2.6rem] font-bold uppercase leading-[0.98] text-white sm:text-6xl lg:text-[5rem]"
          initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}>
          {title}
        </motion.h1>
        {line && (
          <motion.p className="mt-6 max-w-xl font-body text-xl font-medium leading-snug text-white md:text-2xl"
            initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }}>
            {line}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
