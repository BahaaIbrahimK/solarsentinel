import { useFadeIn } from "@/hooks/useFadeIn";
import { Flame, GitBranch, Droplets, Trash2, Wind } from "lucide-react";

const solutions = [
  { icon: Flame, name: "Methane Monitoring", text: "Detect, localize, and track methane emissions across refineries, gas plants, pipelines, and landfill sites." },
  { icon: GitBranch, name: "Pipeline Segmentation", text: "Break long pipeline assets into manageable aerial monitoring segments for repeat inspection workflows." },
  { icon: Droplets, name: "Oil Detection", text: "Identify visible oil spills or contaminated surface areas from aerial imagery." },
  { icon: Trash2, name: "Landfill Monitoring", text: "Support landfill methane observation and broader environmental monitoring operations." },
  { icon: Wind, name: "Air Quality Mapping", text: "Collect spatial environmental data to support urban and industrial air-quality programs." },
];

const MonitoringSolutions = () => {
  const fade = useFadeIn();

  return (
    <section id="solutions" className="py-28 bg-navy">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">Solutions</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 leading-snug">
              Monitoring Solutions
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="group bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/[0.08] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-5 h-5 text-gold" />
                  <h4 className="font-bold text-primary-foreground text-lg">{s.name}</h4>
                </div>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSolutions;
