import { useFadeIn } from "@/hooks/useFadeIn";

const MarketFocus = () => {
  const fade = useFadeIn();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Market</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-10 leading-snug">
            Initial Focus: Industrial Plants
          </h3>

          <ul className="space-y-4 text-muted-foreground text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              Refineries and gas-processing plants
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              Eastern Province, Saudi Arabia
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
              High-value, recurring monitoring contracts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketFocus;
