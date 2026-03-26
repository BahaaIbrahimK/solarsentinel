import { useFadeIn } from "@/hooks/useFadeIn";
import bahaa from "@/assets/bahaa.jpg";
import eman from "@/assets/eman.jpg";
import ayman from "@/assets/ayman.jpg";

const team = [
  {
    photo: bahaa,
    name: "Bahaa Karawia",
    role: "Co-Founder & Chief Engineer",
    bio: "Designed, built, and flight-tested the full-scale prototype. Ph.D. Candidate, Aerospace Engineering, KFUPM.",
  },
  {
    photo: eman,
    name: "Eman Sayed",
    role: "Co-Founder & AI Lead",
    bio: "Built the AI detection system for real-time methane sensing. Ph.D. Candidate, Aerospace Engineering, KFUPM.",
  },
  {
    photo: ayman,
    name: "Dr. Ayman Abdallah",
    role: "Co-Founder & Advisor",
    bio: "Originated the SolarSentinel concept. Director of IRC-ASE, Associate Professor at KFUPM.",
  },
];

const Team = () => {
  const fade = useFadeIn();

  return (
    <section id="team" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mt-4 mb-12 leading-snug">
            The Founding Team
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-8 text-center">
                <div className="mx-auto w-[140px] h-[140px] rounded-full overflow-hidden border-[3px] border-gold mb-5">
                  <img src={member.photo} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-navy text-lg mb-1">{member.name}</h4>
                <p className="text-gold font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10">
            Supported by King Fahd University of Petroleum & Minerals — Dhahran, Saudi Arabia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
