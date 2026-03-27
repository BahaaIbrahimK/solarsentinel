import { useFadeIn } from "@/hooks/useFadeIn";
import { Maximize2, Layers, RefreshCw, Settings, Zap } from "lucide-react";

const points = [
  { icon: Maximize2, text: "Built for large-area monitoring" },
  { icon: Layers, text: "Supports multiple sensing applications" },
  { icon: RefreshCw, text: "Designed for recurring operations" },
  { icon: Settings, text: "Adaptable across industrial and environmental use cases" },
  { icon: Zap, text: "Combines airborne monitoring with automated outputs" },
];

const WhySolarSentinel = () => {
  const fade = useFadeIn();

  return (
    <section id="why" className="py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-14">
            <h2 className="section-label text-gold mx-auto">Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 leading-snug">
              Why SolarSentinel
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-card hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-navy font-medium text-sm md:text-base">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolarSentinel;
