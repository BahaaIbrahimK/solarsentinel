import { useFadeIn } from "@/hooks/useFadeIn";
import { Factory, GitBranch, Droplets, Trash2, Wind } from "lucide-react";

const industries = [
  { icon: Factory, name: "Oil & Gas Refineries", text: "Monitor large facilities for methane leaks, emissions hotspots, and inspection support." },
  { icon: GitBranch, name: "Pipelines", text: "Segment long pipeline corridors for recurring aerial inspection and anomaly detection." },
  { icon: Droplets, name: "Oil Spill Monitoring", text: "Detect and localize surface oil contamination across industrial zones and sensitive areas." },
  { icon: Trash2, name: "Landfills", text: "Monitor methane emissions and support recurring environmental compliance workflows." },
  { icon: Wind, name: "Air Quality", text: "Map pollutants and support urban or industrial air-quality assessment programs." },
];

const Industries = () => {
  const fade = useFadeIn();

  return (
    <section id="industries" className="py-24 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Industries</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            Industries We Work With
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-7 flex gap-5 items-start hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center shrink-0">
                  <ind.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-base mb-1">{ind.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
