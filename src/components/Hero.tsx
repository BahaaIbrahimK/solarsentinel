import logo from "@/assets/logo-dark.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D2540 0%, #081828 100%)" }}>
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24 pb-16">
        <img src={logo} alt="SolarSentinel" className="h-16 md:h-20 w-auto mx-auto mb-10" />

        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6">
          Methane Monitoring-as-a-Service
          <br />
          <span className="text-gold">for Industrial Facilities</span>
        </h1>

        <p className="text-white/60 text-base md:text-lg max-w-[580px] mx-auto mb-10 leading-relaxed">
          High-endurance solar UAVs enabling frequent, scalable methane detection, reporting, and verification for refineries and gas plants.
        </p>

        <a href="#contact" className="inline-block px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm">
          Request Pilot Deployment
        </a>
      </div>
    </section>
  );
};

export default Hero;
