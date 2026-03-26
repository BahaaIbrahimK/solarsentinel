import { useFadeIn } from "@/hooks/useFadeIn";
import { MapPin, Plane, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  { icon: MapPin, label: "Select Site" },
  { icon: Plane, label: "Autonomous Flight" },
  { icon: Search, label: "Methane Detection" },
  { icon: FileText, label: "Report Delivery" },
  { icon: CheckCircle, label: "Verification" },
];

const HowItWorks = () => {
  const fade = useFadeIn();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy text-center mx-auto">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-16 text-center leading-snug">
            From Site to Report
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-gold" />
                </div>
                <span className="text-gold text-xs font-bold mb-1">0{i + 1}</span>
                <span className="text-navy font-semibold text-sm">{step.label}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-base">
            Start with a pilot → scale to recurring contracts
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
