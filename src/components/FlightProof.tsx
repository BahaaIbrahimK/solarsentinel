import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import uavBeach from "@/assets/uav-beach.jpg";

const proof = [
  { v: "2", l: "Full-scale prototypes built" },
  { v: "Flight-tested", l: "Real hardware, not renderings" },
  { v: "AIAA 2026", l: "Peer-reviewed & accepted" },
];

const FlightProof = () => {
  return (
    <section className="relative">
      {/* Gold statement band */}
      <div className="bg-gold py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08] mb-4">
              Real hardware. Real flight hours.
            </h2>
            <p className="text-navy/70 text-base md:text-lg max-w-xl mx-auto">
              Designed, built, and flown by our own team in Dhahran, from raw materials to a flight-tested solar UAV.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {proof.map((p, i) => (
              <StaggerItem key={i}>
                <p className="font-display text-2xl md:text-3xl font-semibold text-navy">{p.v}</p>
                <p className="text-navy/60 text-sm mt-1">{p.l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Full-bleed real flight footage — plays when a video file is present,
          otherwise the real flight photo shows as the poster. Drop the file at
          public/flight-testing.mp4 and it plays automatically (muted, looped). */}
      <div className="relative h-[56vh] min-h-[380px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster={uavBeach}
          autoPlay muted loop playsInline preload="none"
          aria-label="SolarSentinel solar UAV in flight over the Arabian Gulf"
        >
          <source src="/flight-testing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, hsl(var(--navy)/0.7) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-6xl mx-auto flex items-end justify-between gap-4">
            <p className="text-primary-foreground font-display text-lg md:text-2xl font-semibold leading-snug max-w-md">
              Flight-tested over the Arabian Gulf, Eastern Province.
            </p>
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/60 backdrop-blur-sm text-gold text-[11px] font-mono uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Real flight footage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightProof;
