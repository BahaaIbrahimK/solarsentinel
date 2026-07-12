import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import bahaa from "@/assets/bahaa.jpg";
import eman from "@/assets/eman.jpg";
import ayman from "@/assets/ayman.jpg";
import aiaa from "@/assets/aiaa.png";
import rdia from "@/assets/rdia.png";

const team = [
  {
    photo: bahaa,
    name: "Bahaa Karawia",
    role: "Co-Founder, Team Lead & Chief Engineer",
    credential: "PhD Candidate, Aerospace Engineering, KFUPM",
    bio: "Refined the airframe, completed the structural design, built two full-scale prototypes, and led flight testing.",
    accent: "bg-gold",
  },
  {
    photo: eman,
    name: "Eman Sayed",
    role: "Co-Founder & AI Lead",
    credential: "PhD Candidate, Aerospace Engineering, KFUPM",
    bio: "Built the detection model, inference pipeline, and automated GPS-tagged reporting stack, plus sensor integration.",
    accent: "bg-green",
  },
  {
    photo: ayman,
    name: "Dr. Ayman Abdallah",
    role: "Co-Founder & Technical Advisor",
    credential: "Director, IRC-ASE · Assistant Professor, KFUPM",
    bio: "Originated the SolarSentinel concept, led design iterations, and defined the mission architecture. Provides lab infrastructure.",
    accent: "bg-navy",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Team</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            The people building SolarSentinel.
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-8 mb-14">
          {team.map((m, i) => (
            <StaggerItem key={i}>
              <div className="group h-full bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_-24px_hsl(var(--navy)/0.3)] hover:-translate-y-1">
                <div className={`h-1.5 ${m.accent}`} />
                <div className="p-8">
                  <img src={m.photo} alt={m.name} loading="lazy"
                    className="w-20 h-20 rounded-2xl object-cover mb-5 grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <h3 className="font-display font-semibold text-navy text-lg">{m.name}</h3>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mt-1 mb-1">{m.role}</p>
                  <p className="text-muted-foreground text-xs italic mb-4">{m.credential}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-6 flex items-center gap-5 bg-card">
              <img src={aiaa} alt="AIAA" className="h-10 w-auto shrink-0" />
              <div>
                <p className="font-display font-semibold text-navy text-sm">AIAA SciTech 2026 · Accepted</p>
                <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                  Peer-reviewed validation of the structural optimization, solar-power integration, and AI detection methodology.
                </p>
              </div>
            </div>
            <div className="border border-border rounded-2xl p-6 flex items-center gap-5 bg-card">
              <img src={rdia} alt="RDIA" className="h-10 w-auto shrink-0" />
              <div>
                <p className="font-display font-semibold text-navy text-sm">RDIA · Acknowledged</p>
                <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                  Recognized by Saudi Arabia's Research, Development &amp; Innovation Authority, aligned with Vision 2030.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Team;
