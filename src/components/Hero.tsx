import logo from "@/assets/logo-dark.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent 70%)" }} />
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-28 pb-20">
        <img src={logo} alt="SolarSentinel" className="h-20 md:h-24 w-auto mx-auto mb-14" />

        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-primary-foreground leading-[1.15] mb-8 tracking-tight">
          Persistent Aerial Monitoring
          <br />
          <span className="text-gold">for Industrial & Environmental Operations</span>
        </h1>

        <p className="text-primary-foreground/50 text-base md:text-lg max-w-[600px] mx-auto mb-12 leading-relaxed font-light">
          High-endurance UAV-based monitoring solutions for methane detection, pipeline inspection, oil spill detection, landfill emissions, and air quality mapping.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-10 py-4 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm tracking-wide">
            Request Demo
          </a>
          <a href="#applications" className="px-10 py-4 border border-primary-foreground/20 text-primary-foreground/80 font-medium rounded-lg hover:bg-primary-foreground/5 transition text-sm tracking-wide">
            Explore Applications
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />
    </section>
  );
};

export default Hero;
