import logo from "@/assets/logo-dark.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D2540 0%, #081828 100%)" }}>
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24 pb-16">
        <img src={logo} alt="SolarSentinel" className="h-20 md:h-24 w-auto mx-auto mb-12" />

        <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-primary-foreground leading-tight mb-6">
          Persistent Aerial Monitoring
          <br />
          <span className="text-gold">for Industrial & Environmental Operations</span>
        </h1>

        <p className="text-primary-foreground/60 text-base md:text-lg max-w-[620px] mx-auto mb-10 leading-relaxed">
          High-endurance UAV-based monitoring solutions for methane detection, pipeline inspection, oil spill detection, landfill emissions, and air quality mapping.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm">
            Request Demo
          </a>
          <a href="#applications" className="px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/5 transition text-sm">
            Explore Applications
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
