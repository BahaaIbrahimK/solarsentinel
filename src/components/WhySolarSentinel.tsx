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
    <section id="why" className="py-24" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-4xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold">Advantage</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-10 leading-snug">
            Why SolarSentinel
          </h3>

          <div className="space-y-5">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-primary-foreground/80 text-base md:text-lg">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolarSentinel;
