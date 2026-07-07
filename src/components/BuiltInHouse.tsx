import { useFadeIn } from "@/hooks/useFadeIn";
import frameKit from "@/assets/Frame1.jpg";
import frameAssembly from "@/assets/Frame3.jpg";
import frameRibs from "@/assets/Frame5.jpg";
import frameWing from "@/assets/Frame6.jpg";
import frameReady from "@/assets/Frame8.jpg";

const steps = [
  {
    img: frameKit,
    title: "Every Component, Accounted For",
    text: "Carbon spars, 3D-printed ribs, and avionics — laid out before a single wing goes together.",
  },
  {
    img: frameAssembly,
    title: "Structural Assembly Begins",
    text: "Carbon-fiber spars (22mm OD) form the backbone of each wing.",
  },
  {
    img: frameRibs,
    title: "Threading the Ribs",
    text: "Topology-optimized, 3D-printed ribs are fitted along the spar for a lightweight, high-strength structure.",
  },
  {
    img: frameWing,
    title: "The Wing Takes Shape",
    text: "Ultracote covering comes next, sealing the structure ahead of final assembly.",
  },
  {
    img: frameReady,
    title: "Ready to Fly",
    text: "A finished wing, built in-house from raw materials to flight-ready hardware.",
  },
];

const BuiltInHouse = () => {
  const fade = useFadeIn();

  return (
    <section id="built-in-house" className="py-28 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="section-label text-gold mx-auto">Built In-House</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-4 leading-snug">
              From Raw Materials to Flight-Ready Hardware
            </h3>
            <p className="text-primary-foreground/50 text-base leading-relaxed">
              Every airframe is designed, built, and flight-tested by our own team — real hardware, not a rendering.
            </p>
          </div>
        </div>

        <div className={`flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory ${fade.className}`}>
          {steps.map((s, i) => (
            <div key={i} className="shrink-0 w-[78vw] sm:w-[340px] snap-start">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
              <p className="text-gold text-xs font-bold uppercase tracking-wide mt-4 mb-1.5">Step {i + 1}</p>
              <h4 className="text-primary-foreground font-bold text-base mb-1.5">{s.title}</h4>
              <p className="text-primary-foreground/45 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltInHouse;
