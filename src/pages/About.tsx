import SiteNav from "@/components/site/SiteNav";
import { usePageTitle } from "@/hooks/usePageTitle";
import SiteFooter from "@/components/site/SiteFooter";
import PageHero from "@/components/site/PageHero";
import TeamGrid from "@/components/site/TeamGrid";
import ContactBand from "@/components/site/ContactBand";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import hero from "@/assets/uav-beach.jpg";

/* Methane figure: IPCC AR6 WG1, Table 7.15, GWP-20 of fossil methane about 82.5. Other facts as on the home page. */
const DONE = [
  { k: "Built", v: "Three full-scale airframes, designed and made in our lab." },
  { k: "Flown", v: "A 30-minute test flight with autopilot waypoints, up to 128.4 m." },
  { k: "Recognised", v: "Acknowledged by RDIA. Design paper at AIAA SciTech 2026." },
];

const About = () => {
  usePageTitle("About | SolarSentinel");
  return (
  <div className="min-h-screen">
    <SiteNav />
    <PageHero kicker="About" title="Who we are." line="We design and build aircraft to find methane leaks from the air." image={hero} position="50% 60%" />

    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="font-display text-3xl font-bold leading-[1.15] text-navy md:text-5xl text-balance">
            Methane traps more than <span className="text-gold">80 times</span> as much heat as CO₂ in its first 20 years. We are building the aircraft to find it.
          </p>
          <p className="mt-6 font-body text-sm font-bold uppercase tracking-[0.1em] text-navy/80">Source: IPCC Sixth Assessment Report, 2021</p>
        </Reveal>
      </div>
    </section>

    <section className="bg-navy text-white">
      <Stagger className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
        {DONE.map((d) => (
          <StaggerItem key={d.k} className="border-t-2 border-gold pt-6">
            <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">{d.k}</h2>
            <p className="mt-4 font-body text-xl font-medium leading-snug">{d.v}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>

    <TeamGrid title={<>The <span className="text-gold">founders.</span></>} />


    <ContactBand />
    <SiteFooter />
  </div>
  );
};

export default About;
