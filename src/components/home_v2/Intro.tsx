import { Reveal } from "@/components/motion/Reveal";

/** One short statement after the film: who we are and why the plant needs it. */
const Intro = () => (
  <section id="approach" className="bg-white">
    <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
      <Reveal>
        <h2 className="font-display text-3xl md:text-[2.9rem] font-semibold leading-[1.1] text-navy text-balance">
          Built for plants too large to walk.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-7 max-w-[60ch] text-base md:text-lg leading-relaxed text-navy/70">
          A refinery or gas plant has kilometres of pipework. Finding a leak today means crews walking with handheld
          cameras, a satellite that sees the site but not the unit, or a drone that lands after half an hour.
          We design and build an aircraft made to stay up long enough to cover the whole plant.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Intro;
