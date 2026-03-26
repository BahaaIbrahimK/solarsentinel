import { useFadeIn } from "@/hooks/useFadeIn";

const Vision = () => {
  const fade = useFadeIn();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={`${fade.className} grid lg:grid-cols-2 gap-16 items-start`}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-snug">
            The global methane monitoring market is an $8.2 billion opportunity. Saudi Arabia is the single most concentrated opportunity on the planet.
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Aramco operates over 100 facilities across the Kingdom — gas processing plants, crude complexes, and thousands of kilometers of transmission pipelines. Every one of them needs continuous, reliable emissions monitoring.
            </p>
            <p>
              SolarSentinel enters through the Kingdom's highest-priority facilities — the large gas processing plants that represent the greatest leakage risk. From there, we scale to pipeline networks, municipal environmental monitoring, and international markets across the Gulf and beyond.
            </p>
            <p className="font-medium text-navy">
              We are not building a product. We are building the infrastructure layer for energy sector decarbonization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
