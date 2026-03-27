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
    <section id="how-it-works" className="py-28 bg-navy">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 leading-snug">
              How It Works
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <span className="text-primary-foreground font-semibold text-sm mb-1">{step.label}</span>
                <span className="text-primary-foreground/40 text-xs">{step.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
