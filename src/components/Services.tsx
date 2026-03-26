import { useFadeIn } from "@/hooks/useFadeIn";
import { Clock, Radar, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "High-Endurance UAV",
    text: "Covers large industrial sites in a single mission with solar-powered flight.",
  },
  {
    icon: Radar,
    title: "Methane Detection",
    text: "TDLAS-based sensing for accurate, real-time leak identification and geolocation.",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    text: "AI-powered geotagged outputs ready for operations teams and regulators.",
  },
];

const Services = () => {
  const fade = useFadeIn();

  return (
    <section id="services" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            Built for Industrial Scale
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                style={{ borderTop: "3px solid hsl(var(--gold))" }}
              >
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">{f.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
