import { Reveal } from "@/components/motion/Reveal";
import FactsTicker from "./FactsTicker";
import FilmBanner from "./FilmBanner";
import labBuild from "@/assets/Frame3.jpg";
import onboard from "@/assets/onboard-coast.jpg";

/** Proof: a moving strip of flight-test facts, the film behind a play banner, and two real photos. */
const BuiltAndFlown = () => (
  <section id="flight" className="bg-navy text-white">
    <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Built and flown</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl md:text-5xl font-semibold leading-[1.08] text-balance">
              Designed, built and flown by our team.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/65">
            Every airframe so far was built in our lab and flown by us, manually and on autopilot.
          </p>
        </div>
      </Reveal>
    </div>

    <div className="mt-12 md:mt-16"><FactsTicker /></div>

    <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
      <Reveal><FilmBanner /></Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Reveal>
          <figure>
            <img src={labBuild} alt="Two team members assembling the wing panels of the aircraft in the lab" loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover" />
            <figcaption className="mt-3 text-sm text-white/60">The airframe is built in our lab from identical wing panels.</figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.08}>
          <figure>
            <img src={onboard} alt="View from the camera on board the aircraft, over the Gulf coast, with the GPS module in the foreground" loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover object-[60%_50%]" />
            <figcaption className="mt-3 text-sm text-white/60">From the camera on board, over the coast.</figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);

export default BuiltAndFlown;
