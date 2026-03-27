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
    <section id="industries" className="py-28 bg-navy">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">Industries</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 leading-snug">
              Industries We Serve
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {industries.map((ind, i) => (
              <div key={i} className="group bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/[0.08] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <ind.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-primary-foreground text-base mb-2">{ind.name}</h4>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
