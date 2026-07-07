import { useFadeIn } from "@/hooks/useFadeIn";
import { Check, CircleDashed } from "lucide-react";

const today = [
  "Recurring methane monitoring",
  "Source localization",
  "Quantified emission estimates",
  "Automated geotagged reports",
  "Optional repair verification",
];

const roadmap = [
  "Pipeline corridor monitoring",
  "Landfill methane mapping",
];

const Applications = () => {
  const fade = useFadeIn();

  return (
    <section id="applications" className="py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">Applications</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 leading-snug">
              What You Get Today — and What's Next
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-navy font-bold text-sm uppercase tracking-wide mb-5">Today</p>
              <ul className="space-y-4">
                {today.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </span>
                    <span className="text-navy text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-8">
              <p className="text-muted-foreground font-bold text-sm uppercase tracking-wide mb-5">On the Roadmap</p>
              <ul className="space-y-4">
                {roadmap.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <CircleDashed className="w-3 h-3 text-muted-foreground" />
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground/70 text-xs mt-6 leading-relaxed">
                Expansion planned after Phase 1 recurring contracts are established.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
