import flyover from "@/assets/hero-refinery-flyover.jpg";

const VisionBreak = () => {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={flyover} alt="SolarSentinel UAV flying low over an industrial gas plant" loading="lazy"
        className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(var(--navy)/0.55) 0%, hsl(var(--navy)/0.25) 40%, hsl(var(--navy)/0.75) 100%)" }} />
      <div className="relative z-10 h-full flex items-end pb-12 px-6">
        <div className="max-w-3xl mx-auto w-full text-center">
          <p className="text-primary-foreground text-xl md:text-2xl font-semibold leading-snug">
            Engineered to fly for hours. Built to catch what others miss.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionBreak;
