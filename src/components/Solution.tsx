import { useFadeIn } from "@/hooks/useFadeIn";
import uavSky from "@/assets/uav-sky.jpg";

const Solution = () => {
  const fade = useFadeIn();

  return (
    <section id="solution" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Our Solution</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            A Scalable Monitoring Service
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={uavSky}
              alt="SolarSentinel UAV in flight"
              loading="lazy"
              className="w-full rounded-xl object-cover aspect-[4/3]"
            />
            <ul className="space-y-6">
              {[
                { title: "Large-Site Coverage", text: "Single missions cover entire industrial facilities — no gaps, no repeat sorties." },
                { title: "Automated Detection", text: "Onboard methane sensing identifies and geolocates leaks autonomously during flight." },
                { title: "Actionable Reporting", text: "AI-powered reports with GPS-tagged findings delivered for immediate decision-making." },
              ].map((item, i) => (
                <li key={i} className="border-l-[3px] border-gold pl-5">
                  <h4 className="font-bold text-navy text-lg mb-1">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
