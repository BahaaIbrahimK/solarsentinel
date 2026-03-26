import { useFadeIn } from "@/hooks/useFadeIn";

const Problem = () => {
  const fade = useFadeIn();

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">The Problem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-10 leading-snug">
            The Scale of the Problem Demands a New Kind of Solution
          </h3>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Every year, 120 million tonnes of methane escape from oil and gas operations globally — a gas 80 times more potent than CO₂ over a 20-year horizon. In Saudi Arabia alone, Aramco operates over 24,000 kilometers of pipelines and refinery complexes spanning thousands of acres. The gas lost to undetected leaks represents hundreds of millions of riyals annually.
            </p>
            <p>
              The tools available today were not designed for this scale. Ground crews with handheld optical gas imaging cameras inspect a large facility four times per year at best — slow, expensive, and limited by human access. Commercial drones last 20 to 45 minutes. Helicopters cost up to $2,000 per kilometer. Satellites miss transient leaks entirely, revisiting every 3 to 5 days.
            </p>
            <p>
              The industry has the sensors. It has the data science. What it has been missing is the platform — one capable of carrying professional instruments for hours, not minutes, continuously and autonomously across hundreds of kilometers of critical infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
