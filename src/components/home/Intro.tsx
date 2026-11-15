import { Reveal } from "@/components/motion/Reveal";

/** One statement after the film. */
const Intro = () => (
  <section id="approach" className="bg-white">
    <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <h2 className="font-display text-4xl font-bold uppercase leading-[1] text-navy md:text-7xl text-balance">
          Built for plants <span className="text-gold">too large to walk.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl font-body text-xl font-medium leading-snug text-navy md:text-2xl">
          Finding a methane leak today means crews walking kilometres of pipework. Our aircraft is designed to cover the whole plant from the air.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Intro;
