import { useFadeIn } from "@/hooks/useFadeIn";

const services = [
  {
    title: "Methane Leak Detection",
    text: "TDLAS sensor detects methane from up to 100 meters altitude at parts-per-billion precision. OGI thermal imaging visualizes emission plumes in real time. Every leak GPS-tagged with emission rate and repair priority — ready for regulatory filing.",
  },
  {
    title: "Pipeline & Infrastructure Inspection",
    text: "Autonomous AI survey of 250+ kilometers per mission. Structural anomaly detection, corrosion flagging, and right-of-way monitoring — delivered as a digital report, not a crew debrief.",
  },
  {
    title: "Oil Leak Detection",
    text: "Computer vision model identifies surface oil contamination and spills from aerial imagery. Immediate GPS-tagged alerts enable rapid field response before leaks spread.",
  },
  {
    title: "Environmental Air Quality Mapping",
    text: "Multi-pollutant sensors map concentrations across entire cities in a single flight. Georeferenced heatmap outputs delivered to regulators, municipalities, and environmental authorities.",
  },
];

const Services = () => {
  const fade = useFadeIn();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            One Platform. Four Critical Services.
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-navy/15 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                style={{ borderTop: "3px solid hsl(var(--gold))" }}
              >
                <h4 className="font-bold text-navy text-lg mb-3">{s.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
