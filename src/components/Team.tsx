import { useFadeIn } from "@/hooks/useFadeIn";
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
    bio: "Refined the final airframe configuration, completed detailed structural design, built two full-scale prototypes, and led flight-testing campaigns.",
    accent: "bg-gold",
  },
  {
    photo: eman,
    name: "Eman Sayed",
    role: "Co-Founder & AI Lead",
    credential: "PhD Candidate, Aerospace Engineering, KFUPM",
    bio: "Developed and deployed the detection model, inference pipeline, and automated GPS-tagged reporting stack, alongside sensor-integration preparation.",
    accent: "bg-green",
  },
  {
    photo: ayman,
    name: "Dr. Ayman Abdallah",
    role: "Co-Founder & Technical Advisor",
    credential: "Director, IRC-ASE · Assistant Professor, KFUPM",
    bio: "Originated the SolarSentinel concept, led multiple design iterations, and defined the overall mission architecture. Provides lab infrastructure.",
    accent: "bg-navy",
  },
];

const Team = () => {
  const fade = useFadeIn();

  return (
    <section id="team" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <div className="text-center mb-16">
            <h2 className="section-label text-gold mx-auto">Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 leading-snug">
              The People Building SolarSentinel
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden text-center">
                <div className={`h-1 ${m.accent}`} />
                <div className="p-8">
                  <img src={m.photo} alt={m.name} loading="lazy"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-5 grayscale" />
                  <h4 className="font-bold text-navy text-lg">{m.name}</h4>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mt-1 mb-1">{m.role}</p>
                  <p className="text-muted-foreground text-xs italic mb-4">{m.credential}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-6 flex items-center gap-5">
              <img src={aiaa} alt="AIAA" className="h-10 w-auto shrink-0" />
              <div>
                <p className="font-bold text-navy text-sm">AIAA SciTech 2026 — Accepted</p>
                <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                  Peer-reviewed external validation of the structural optimization, solar-power integration, and AI detection methodology.
                </p>
              </div>
            </div>
            <div className="border border-border rounded-2xl p-6 flex items-center gap-5">
              <img src={rdia} alt="RDIA" className="h-10 w-auto shrink-0" />
              <div>
                <p className="font-bold text-navy text-sm">RDIA — Acknowledged</p>
                <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                  Recognized by Saudi Arabia's Research, Development & Innovation Authority, aligned with Vision 2030 methane-reduction priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
