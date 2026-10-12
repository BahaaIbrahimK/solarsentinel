import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
// Unsplash License (free for commercial use, no attribution required): photo by Buddy AN, unsplash.com/photos/Ol9KJUYKVwg
import refinery from "@/assets/industries-refinery.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const Industries = () => {
  return (
    <section id="industries" className="bg-sand overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:min-h-[680px]">
        {/* Photograph, bleeding to the viewport edge */}
        <div className="relative h-[300px] sm:h-[420px] lg:h-auto overflow-hidden">
          <motion.img
            src={refinery}
            alt="Refinery distillation columns and process units"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-[55%_50%]"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
        </div>

        {/* Text */}
        <div className="flex items-center px-6 py-20 md:py-24 lg:px-16 xl:px-24">
          <Reveal className="max-w-xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Industries</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
              Built for refineries &amp; <span className="whitespace-nowrap">gas-processing</span> plants.
            </h2>
            <p className="text-navy/80 text-lg leading-relaxed mt-7">
              Phase 1 is intentionally narrow: large, methane-relevant industrial sites in Saudi Arabia's Eastern
              Province, where manual and helicopter-based inspection is costly or too infrequent.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mt-5">
              Designed for operations, integrity and emissions teams that need frequent, quantified coverage:
              recurring methane screening, source localization and repair verification across large, distributed
              sites.
            </p>

            <div className="mt-10 pt-6 border-t border-navy/15">
              <p className="text-navy/50 text-[11px] font-semibold uppercase tracking-[0.2em]">Next on the roadmap</p>
              <p className="font-display text-navy text-lg mt-2">Pipeline corridors and landfills.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Industries;
