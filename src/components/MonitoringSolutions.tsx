import { useFadeIn } from "@/hooks/useFadeIn";

const solutions = [
  { name: "Methane Monitoring", text: "Detect, localize, and track methane emissions across refineries, gas plants, pipelines, and landfill sites." },
  { name: "Pipeline Segmentation", text: "Break long pipeline assets into manageable aerial monitoring segments for repeat inspection workflows." },
  { name: "Oil Detection", text: "Identify visible oil spills or contaminated surface areas from aerial imagery." },
  { name: "Landfill Monitoring", text: "Support landfill methane observation and broader environmental monitoring operations." },
  { name: "Air Quality Mapping", text: "Collect spatial environmental data to support urban and industrial air-quality programs." },
];

const MonitoringSolutions = () => {
  const fade = useFadeIn();

  return (
    <section id="solutions" className="py-24 bg-light-gray">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            Monitoring Solutions
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-7 hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-navy text-lg mb-2">{s.name}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSolutions;
