import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import still from "@/assets/onboard-coast.jpg";

/** Closing band on the home page: one line and one button to the contact page. */
const ContactBand = () => (
  <section className="relative overflow-hidden bg-navy">
    <img src={still} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
    <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-24 md:flex-row md:items-end md:justify-between md:px-10 md:py-32">
      <Reveal>
        <h2 className="font-display text-5xl font-bold uppercase leading-[0.95] text-white md:text-7xl">Let's talk.</h2>
        <p className="mt-5 font-body text-xl font-semibold text-white">contact@solarsentinelco.com</p>
      </Reveal>
      <Reveal delay={0.1}>
        <Link to="/contact" className="inline-flex items-center gap-3 rounded-md bg-gold px-9 py-4 font-body text-base font-extrabold uppercase tracking-[0.1em] text-navy transition hover:brightness-110">
          Contact us <span aria-hidden="true">→</span>
        </Link>
      </Reveal>
    </div>
  </section>
);

export default ContactBand;
