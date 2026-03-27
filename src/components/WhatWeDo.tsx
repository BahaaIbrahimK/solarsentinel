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
    <section id="what-we-do" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 leading-snug">
              What SolarSentinel Does
            </h3>
            <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              An aerial monitoring platform combining long-range operations, methane sensing, onboard intelligence, and automated reporting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {cards.map((c, i) => (
              <div key={i} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mb-6">
                  <c.icon className="w-6 h-6 text-gold" />
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
