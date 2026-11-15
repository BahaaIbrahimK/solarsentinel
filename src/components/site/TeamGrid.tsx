import type { ReactNode } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import bahaa from "@/assets/v3/team-bahaa.jpg";
import muqeeth from "@/assets/v3/team-muqeeth.jpg";
import eman from "@/assets/v3/team-eman.jpg";
import ayman from "@/assets/v3/team-ayman.jpg";

/* Four co-founders, with their current titles. */
const TEAM = [
  { photo: bahaa, name: "Bahaa Karawia", role: "Co-Founder & CEO", bio: "Leads the company, airframe design and flight testing." },
  { photo: ayman, name: "Dr. Ayman Abdallah", role: "Co-Founder & CTO", bio: "Director of IRC-ASE, KFUPM's aerospace research centre." },
  { photo: muqeeth, name: "Mohammed Muqeeth", role: "Co-Founder & CMO", bio: "Leads go-to-market, partnerships and business development." },
  { photo: eman, name: "Eman Sayed", role: "Co-Founder & Sensing Lead", bio: "Leads methane detection and sensor integration." },
];

/** Four co-founders, black-and-white round portraits framed head and shoulders. */
export const Brand = () => <span className="whitespace-nowrap">Solar<span className="text-gold">Sentinel</span></span>;

const TeamGrid = ({ title = <>The people behind <Brand />.</> }: { title?: ReactNode }) => (
  <section id="team" className="bg-white">
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28">
      <Reveal>
        <p className="font-body text-sm font-extrabold uppercase tracking-[0.16em] text-green">Team</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-navy md:text-6xl text-balance">{title}</h2>
      </Reveal>
      <Stagger className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:gap-x-10">
        {TEAM.map((m) => (
          <StaggerItem key={m.name} className="group text-center">
            <div className="mx-auto h-36 w-36 overflow-hidden rounded-full bg-sand ring-1 ring-navy/10 ring-offset-4 ring-offset-white transition-shadow duration-500 group-hover:ring-gold md:h-44 md:w-44">
              <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover object-[50%_15%] grayscale transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold leading-snug text-navy">{m.name}</h3>
            <p className="mt-1 font-body text-[13px] font-extrabold uppercase leading-snug tracking-[0.08em] text-green">{m.role}</p>
            <p className="mx-auto mt-2 max-w-[220px] font-body text-base font-medium leading-snug text-navy">{m.bio}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default TeamGrid;
