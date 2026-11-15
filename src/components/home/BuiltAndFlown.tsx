import { Reveal } from "@/components/motion/Reveal";
import FactsTicker from "./FactsTicker";
import FilmBanner from "./FilmBanner";

/** Proof: a moving strip of flight-test facts and the film behind a play banner. */
const BuiltAndFlown = () => (
  <section id="flight" className="bg-navy text-white">
    <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
      <Reveal>
        <h2 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] md:text-7xl text-balance">
          Built and flown by our team.
        </h2>
      </Reveal>
    </div>

    <div className="mt-12 md:mt-16"><FactsTicker /></div>

    <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
      <Reveal><FilmBanner /></Reveal>
    </div>
  </section>
);

export default BuiltAndFlown;
