import { useFadeIn } from "@/hooks/useFadeIn";
import { Rocket, RefreshCw, ShieldCheck } from "lucide-react";

const items = [
  { icon: Rocket, title: "Paid Pilot Deployment", text: "Validate performance at a single facility before committing." },
  { icon: RefreshCw, title: "Recurring Contracts", text: "Ongoing monitoring with scheduled missions and continuous coverage." },
  { icon: ShieldCheck, title: "Verification Services", text: "Optional follow-up flights for compliance and audit support." },
];

const BusinessModel = () => {
  const fade = useFadeIn();

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-5xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Business Model</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            Monitoring-as-a-Service
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
