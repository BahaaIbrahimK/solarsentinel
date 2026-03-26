import { useFadeIn } from "@/hooks/useFadeIn";
import uavSky from "@/assets/uav-sky.jpg";

const solutionBlocks = [
  {
    title: "Solar Endurance",
    text: "Wing-mounted solar cells generate 165W peak power under Saudi irradiance — exceeding cruise demand and enabling 6 to 24 hours of continuous flight. One mission. 250+ kilometers. No battery swap. No crew rotation.",
  },
  {
    title: "Modular & Low-Cost",
    text: "Built from 3D-printed components, balsa wood, and carbon fiber. Assembles in under 5 minutes in the field — plug and play. Each unit costs a fraction of any commercial equivalent, making fleet-scale deployment viable from day one.",
  },
  {
    title: "Onboard AI Intelligence",
    text: "NVIDIA Jetson runs a tested YOLOv8 model at 20 frames per second — no ground station required. GPS-tagged leak alerts and automated inspection reports generated in real time, in the air.",
  },
];

const Solution = () => {
  const fade = useFadeIn();

  return (
    <section id="solution" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Our Solution</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-3 leading-snug">
            SolarSentinel — Autonomous. Solar. Intelligent.
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl text-base md:text-lg">
            A fixed-wing UAV engineered for endurance, modularity, and real-time intelligence — flight-tested and ready to deploy.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <img
              src={uavSky}
              alt="SolarSentinel UAV in flight"
              loading="lazy"
              className="w-full rounded-xl object-cover aspect-[4/3]"
            />
            <div className="space-y-8">
              {solutionBlocks.map((block, i) => (
                <div key={i} className="border-l-[3px] border-gold pl-5">
                  <h4 className="font-bold text-navy text-lg mb-2">{block.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
