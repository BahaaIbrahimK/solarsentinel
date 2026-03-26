import { useFadeIn } from "@/hooks/useFadeIn";
import uavBeach from "@/assets/uav-beach.jpg";
import flightMap from "@/assets/flight-map.png";
import aiaa from "@/assets/aiaa.png";
import rdia from "@/assets/rdia.png";

const Traction = () => {
  const fade = useFadeIn();

  return (
    <section id="traction" className="py-24" style={{ background: "#0D2540" }}>
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold">Proof</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 leading-snug">
            Flight-Tested and Peer-Reviewed
          </h3>
          <p className="text-white/60 mb-12 max-w-xl text-base">
            Not a concept — a working system validated in the field.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={uavBeach} alt="Flight test — Dhahran" loading="lazy" className="w-full rounded-xl object-cover aspect-[4/3]" />
              <p className="text-white/60 text-sm mt-3 text-center">Flight test — Dhahran, Saudi Arabia</p>
            </div>
            <div className="relative">
              <img src={flightMap} alt="GPS trajectory" loading="lazy" className="w-full rounded-xl object-cover aspect-[4/3]" />
              <span className="absolute top-3 left-3 bg-navy text-white text-xs font-medium px-3 py-1 rounded-full">30-min flight · 128m altitude</span>
              <p className="text-white/60 text-sm mt-3 text-center">GPS trajectory — Cesium visualization</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <img src={aiaa} alt="AIAA" loading="lazy" className="w-[130px] brightness-0 invert" />
              <img src={rdia} alt="RDIA" loading="lazy" className="w-[110px] brightness-0 invert" />
              <p className="text-white/60 text-sm text-center mt-2">Peer-reviewed & nationally acknowledged</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
