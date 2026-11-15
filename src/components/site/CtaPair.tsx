import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
import contactImg from "@/assets/v3/cta-contact.jpg";
import aboutImg from "@/assets/v3/cta-about.jpg";

const CARDS = [
  { img: contactImg, pos: "50% 30%", title: "Let's work together", cta: "Contact us", to: "/contact" },
  { img: aboutImg, pos: "50% 18%", title: "The next generation of aerial sensing", cta: "About us", to: "/about" },
];

const Card = ({ c, show, delay, still }: { c: (typeof CARDS)[number]; show: boolean; delay: number; still: boolean }) => (
  <motion.div
    initial={still ? false : { opacity: 0, y: 260 }}
    animate={still || show ? { opacity: 1, y: 0 } : { opacity: 0, y: 260 }}
    transition={{ duration: 1.9, delay, ease: [0.33, 1, 0.68, 1] }}
  >
    <Link to={c.to} className="group relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-sm bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      <img src={c.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]" style={{ objectPosition: c.pos }} />
      <div className="absolute inset-0 bg-navy-dark/35 transition-colors duration-500 group-hover:bg-navy-dark/25" />
      <div className="relative px-6 text-center">
        <h2 className="mx-auto max-w-[16ch] font-display text-3xl font-bold uppercase leading-[1.05] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.5)] md:text-[2.6rem]">{c.title}</h2>
        <span className="mt-6 inline-flex items-center gap-3 bg-gold px-7 py-3.5 font-body text-[15px] font-extrabold uppercase tracking-[0.08em] text-navy transition group-hover:brightness-110">
          <span className="block h-px w-6 bg-navy transition-all duration-500 group-hover:w-9" aria-hidden="true" />
          {c.cta}
        </span>
      </div>
    </Link>
  </motion.div>
);

/** Two large photo cards before the footer. Once a quarter of the section is on screen they rise slowly
    from below, the second a moment after the first, so the visitor sees them arrive. */
const CtaPair = ({ spaced = false }: { spaced?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const show = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section className="overflow-hidden bg-white">
      <div ref={ref} className={`mx-auto grid max-w-7xl gap-6 px-6 pb-20 ${spaced ? "pt-20 md:pt-28" : "pt-2"} md:grid-cols-2 md:gap-8 md:px-10 md:pb-28`}>
        <Card c={CARDS[0]} show={show} delay={0} still={reduced} />
        <Card c={CARDS[1]} show={show} delay={0.35} still={reduced} />
      </div>
    </section>
  );
};

export default CtaPair;
