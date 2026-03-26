import { useFadeIn } from "@/hooks/useFadeIn";
import { Leaf, Gauge, Target } from "lucide-react";

const items = [
  { icon: Leaf, text: "Early detection reduces methane emissions at the source" },
  { icon: Gauge, text: "Improves operational efficiency for industrial operators" },
  { icon: Target, text: "Supports national and corporate decarbonization targets" },
];

const Impact = () => {
  const fade = useFadeIn();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Impact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            Climate and Operational Impact
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
