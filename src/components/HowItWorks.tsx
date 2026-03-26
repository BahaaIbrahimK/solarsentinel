import { useFadeIn } from "@/hooks/useFadeIn";
import { MapPin, Plane, Search, FileText, RefreshCw } from "lucide-react";

const steps = [
  { icon: MapPin, label: "Mission Planning", sub: "Site or corridor scoping" },
  { icon: Plane, label: "Aerial Data Collection", sub: "Autonomous flight operations" },
  { icon: Search, label: "Detection & Analysis", sub: "Sensor-based processing" },
  { icon: FileText, label: "Geotagged Reporting", sub: "Results delivered for review" },
  { icon: RefreshCw, label: "Repeat Monitoring", sub: "Recurring operations" },
];

const HowItWorks = () => {
  const fade = useFadeIn();

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy text-center mx-auto">Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-16 text-center leading-snug">
            How It Works
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-gold text-xs font-bold mb-1">0{i + 1}</span>
                <span className="text-navy font-semibold text-sm mb-0.5">{step.label}</span>
                <span className="text-muted-foreground text-xs">{step.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
