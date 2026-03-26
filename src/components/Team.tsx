import { useFadeIn } from "@/hooks/useFadeIn";
import bahaa from "@/assets/bahaa.jpg";
import eman from "@/assets/eman.jpg";
import ayman from "@/assets/ayman.jpg";

const team = [
  {
    photo: bahaa,
    name: "Bahaa Karawia",
    role: "Co-Founder & Chief Engineer",
    bio: "The builder behind SolarSentinel. Bahaa took the concept from blueprint to runway — designing, manufacturing, and flight-testing the full-scale prototype. Ph.D. Candidate, Aerospace Engineering, KFUPM.",
  },
  {
    photo: eman,
    name: "Eman Sayed",
    role: "Co-Founder & AI Lead",
    bio: "Eman built the intelligence layer of SolarSentinel — the AI system that detects, locates, and reports emissions in real time with industry-leading accuracy. Ph.D. Candidate, Aerospace Engineering, KFUPM.",
  },
  {
    photo: ayman,
    name: "Dr. Ayman Abdallah",
    role: "Co-Founder & Advisor",
    bio: "The mind behind the mission. Dr. Abdallah originated the SolarSentinel concept and shaped its strategic direction. Director of IRC-ASE and Associate Professor of Aerospace Engineering at KFUPM.",
  },
];

const Team = () => {
  const fade = useFadeIn();

  return (
    <section id="team" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-navy">The Team</h2>

          <p className="italic text-muted-foreground text-center max-w-3xl mx-auto mt-6 mb-12 text-base md:text-lg leading-relaxed">
            "SolarSentinel was not born in a boardroom. It originated from a research vision at KFUPM and was taken from concept to flying prototype by the same team that will take it to market."
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-8 text-center">
                <div className="mx-auto w-[180px] h-[180px] rounded-full overflow-hidden border-[3px] border-gold mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-navy text-xl mb-1">{member.name}</h4>
                <p className="text-gold font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10">
            Supported by King Fahd University of Petroleum & Minerals — Dhahran, Saudi Arabia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
