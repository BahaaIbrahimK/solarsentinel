import { useFadeIn } from "@/hooks/useFadeIn";
import uavSky from "@/assets/uav-sky-new.jpg";

const cards = [
  { title: "High-Endurance Solar UAV", text: "6+ hours projected endurance based on flight-tested data and energy modeling." },
  { title: "TDLAS Methane Payload", text: "High-precision TDLAS methane sensing from altitudes up to 100 m." },
  { title: "Onboard AI Workflow", text: "Automated onboard processing and geotagged reporting during flight." },
  { title: "Actionable Reports", text: "Automated geotagged maps and quantified emission estimates." },
];

const Platform = () => {
  const fade = useFadeIn();

  return (
    <section id="platform" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold">Platform</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-14 leading-snug">
            Platform Overview
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={uavSky} alt="SolarSentinel UAV in flight" loading="lazy"
                className="w-full object-cover aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <div className="grid gap-6">
              {cards.map((c, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-sm">0{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base mb-1">{c.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
