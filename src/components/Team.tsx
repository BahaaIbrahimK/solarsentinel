import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import bahaa from "@/assets/team/bahaa.jpg";
import muqeeth from "@/assets/team/muqeeth.jpg";
import eman from "@/assets/team/eman.jpg";
import ayman from "@/assets/team/ayman.jpg";
import ismail from "@/assets/team/ismail.jpg";
import aiaa from "@/assets/aiaa.png";
import rdia from "@/assets/rdia.png";

const team = [
  {
    photo: bahaa,
    name: "Bahaa Karawia",
    role: "Co-Founder & CEO",
    credential: "PhD Candidate, Aerospace Engineering, KFUPM",
    bio: "Leads the company and its engineering program. Designed the Version 3 airframe, built the full-scale prototypes and led flight testing.",
  },
  {
    photo: muqeeth,
    name: "Eng. Mohammed Muqeeth",
    role: "Co-Founder & Business Development Lead",
    credential: "Aerospace Engineering, KFUPM",
    bio: "Leads business development and partner engagement. Manufactures airframe components and integrates the avionics and onboard electronics.",
  },
  {
    photo: eman,
    name: "Eman Sayed",
    role: "Co-Founder & AI Lead",
    credential: "PhD Candidate, Aerospace Engineering, KFUPM",
    bio: "Built the detection model, inference pipeline, and automated GPS-tagged reporting stack, plus sensor integration.",
  },
  {
    photo: ayman,
    name: "Dr. Ayman Abdallah",
    role: "Co-Founder & Technical Advisor",
    credential: "Director, IRC-ASE · Assistant Professor, KFUPM",
    bio: "Originated the SolarSentinel concept, led design iterations, and defined the mission architecture. Provides lab infrastructure.",
  },
  {
    photo: ismail,
    name: "Dr. Md Ismail",
    role: "Advisor, Power Systems",
    credential: "Assistant Professor, KFUPM",
    bio: "Advises on solar-cell selection, energy architecture and power-management integration for sustained flight.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Team</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.08]">
            The people building SolarSentinel.
          </h2>
        </Reveal>

        {/* Each card is a 5-row subgrid so names, roles and credentials line up across a row */}
        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-14 md:gap-x-8 mb-16 md:mb-20">
          {team.map((m) => (
            <StaggerItem key={m.name} className="group grid grid-rows-subgrid row-span-5 gap-y-0 text-center">
              {/* Black and white at rest; full colour on hover */}
              <div className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-sand ring-1 ring-navy/10 ring-offset-4 ring-offset-background transition-shadow duration-500 group-hover:ring-gold/70">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-display font-semibold text-navy text-base lg:text-[15px] xl:text-base mt-6 leading-snug">{m.name}</h3>
              <p className="text-gold text-[10.5px] font-semibold uppercase tracking-[0.14em] mt-1.5 leading-snug">{m.role}</p>
              <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{m.credential}</p>
              <div>
                <div className="w-8 h-px bg-navy/15 my-4 mx-auto" />
                <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
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
