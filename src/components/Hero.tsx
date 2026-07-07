import logo from "@/assets/logo-dark.png";
import heroBg from "@/assets/hero-refinery-wide.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
      {/* Background photo */}
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(var(--navy)/0.88) 0%, hsl(var(--navy)/0.80) 45%, hsl(var(--navy)/0.96) 100%)" }} />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-28 pb-20">
        <img src={logo} alt="SolarSentinel" className="h-20 md:h-24 w-auto mx-auto mb-14" />

        <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-5">Solar-Powered Aerial Methane Monitoring</p>
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-primary-foreground leading-[1.1] mb-4 tracking-tight">
          Persistent Methane Intelligence
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-gold to-[hsl(37,87%,63%)] bg-clip-text text-transparent">From the Sky</span>
        </h1>

        <p className="text-primary-foreground/50 text-base md:text-lg max-w-[620px] mx-auto mb-12 leading-relaxed font-light">
          A high-endurance solar UAV service for frequent methane screening, source localization, quantified emission estimates, and repair verification — built for refineries and gas plants in Saudi Arabia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-10 py-4 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm tracking-wide">
            Request a Pilot
          </a>
          <a href="#how-it-works" className="px-10 py-4 border border-primary-foreground/20 text-primary-foreground/80 font-medium rounded-lg hover:bg-primary-foreground/5 transition text-sm tracking-wide">
            See How It Works
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />
    </section>
  );
};

export default Hero;
