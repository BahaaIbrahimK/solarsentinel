import { useFadeIn } from "@/hooks/useFadeIn";
import uavSky from "@/assets/uav-sky.jpg";

const cards = [
  { title: "High-Endurance UAV", text: "Designed for extended missions over large industrial and environmental assets." },
  { title: "Sensor Integration", text: "Supports methane sensing, optical gas imaging, oil detection, and air-quality payloads." },
  { title: "Onboard Intelligence", text: "Processes mission data and supports automated detection and reporting workflows." },
  { title: "Actionable Outputs", text: "Delivers geotagged results for inspection, compliance, and operational decision-making." },
];

const Platform = () => {
  const fade = useFadeIn();

  return (
    <section id="platform" className="py-24 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Platform</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            Platform Overview
          </h3>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img src={uavSky} alt="SolarSentinel UAV in flight" loading="lazy"
              className="w-full rounded-xl object-cover aspect-[4/3]" />
            <div className="grid sm:grid-cols-2 gap-5">
              {cards.map((c, i) => (
                <div key={i} className="border-l-[3px] border-gold pl-5 py-1">
                  <h4 className="font-bold text-navy text-base mb-1">{c.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
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
