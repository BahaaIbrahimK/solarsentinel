const Hero = () => {
  const stats = [
    { value: "6–24 hrs", label: "Continuous\nflight endurance" },
    { value: "250+ km", label: "Coverage per\nsingle mission" },
    { value: "0.96", label: "AI precision\n& recall" },
    { value: "72%", label: "Methane\nreduction" },
    { value: "120 Mt", label: "CH₄ leaked\nglobally/yr" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D2540 0%, #081828 100%)" }}>
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-6">
          Built at KFUPM · Dhahran, Saudi Arabia
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
          Saudi Arabia's Energy Infrastructure Is Leaking.
          <br className="hidden md:block" />
          We Built the Platform to Stop It.
        </h1>
        <p className="text-white/65 text-lg md:text-xl font-normal max-w-[640px] mx-auto mb-10 leading-relaxed">
          SolarSentinel is an autonomous solar-powered UAV that flies continuously for 6 to 24 hours — detecting methane leaks, inspecting pipelines, and mapping emissions across the Kingdom's vast energy infrastructure. Not a concept. A working system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm">
            Request a Demo
          </a>
          <a href="#solution" className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition text-sm">
            View Our Technology
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full" style={{ background: "#112035" }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i > 0 ? "md:border-l md:border-gold/30" : ""}`}>
              <div className="text-white text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-white/55 text-xs mt-1 whitespace-pre-line leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
