import { useFadeIn } from "@/hooks/useFadeIn";
import { Plane, Radar, Cpu, FileText } from "lucide-react";

const cards = [
  { icon: Plane, title: "Long-Range UAV Operations", text: "Extended missions across large industrial sites and distributed infrastructure." },
  { icon: Radar, title: "Methane-Specific Sensing", text: "Purpose-built detection for accurate leak identification and quantification." },
  { icon: Cpu, title: "Onboard Intelligence", text: "Real-time processing and automated detection during flight." },
  { icon: FileText, title: "Automated Reporting", text: "Geotagged outputs ready for operations, compliance, and decision-making." },
];

const WhatWeDo = () => {
  const fade = useFadeIn();

  return (
    <section id="what-we-do" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-6 leading-snug max-w-2xl">
            What SolarSentinel Does
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
            An aerial monitoring platform combining long-range UAV operations, methane-specific sensing, onboard intelligence, and automated reporting for recurring industrial missions.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-7 hover:shadow-lg transition-shadow duration-300"
                style={{ borderTop: "3px solid hsl(var(--gold))" }}>
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-5">
                  <c.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-base mb-2">{c.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
