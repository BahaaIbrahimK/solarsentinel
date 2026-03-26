import { useFadeIn } from "@/hooks/useFadeIn";

const bullets = [
  "High-endurance coverage for large industrial sites",
  "Methane-specific sensing with proven accuracy",
  "Designed for recurring, contract-based monitoring",
  "Lower-emission operation compared to helicopter alternatives",
];

const Differentiation = () => {
  const fade = useFadeIn();

  return (
    <section className="py-24" style={{ background: "#0D2540" }}>
      <div className="max-w-3xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold">Differentiation</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-10 leading-snug">
            Why SolarSentinel
          </h3>

          <ul className="space-y-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80 text-base md:text-lg">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
