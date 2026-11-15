import { useState } from "react";
import SiteNav from "@/components/site/SiteNav";
import { usePageTitle } from "@/hooks/usePageTitle";
import SiteFooter from "@/components/site/SiteFooter";
import ContactForm from "@/components/site/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import still from "@/assets/onboard-coast.jpg";

const EMAIL = "contact@solarsentinelco.com";

const ContactPage = () => {
  usePageTitle("Contact | SolarSentinel");
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }).catch(() => undefined);
  };

  return (
    <div className="min-h-screen bg-navy">
      <SiteNav />
      <section className="relative overflow-hidden">
        <img src={still} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/90 to-navy" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="font-body text-sm font-extrabold uppercase tracking-[0.16em] text-gold">Contact</p>
            <h1 className="mt-4 font-display text-6xl font-bold uppercase leading-[0.92] text-white md:text-8xl">Let's talk.</h1>
            <p className="mt-6 max-w-sm font-body text-xl font-medium leading-snug text-white">Operators, partners and investors.</p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="font-body text-[13px] font-extrabold uppercase tracking-[0.12em] text-white/70">Email</p>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <a href={`mailto:${EMAIL}`} className="break-all font-body text-2xl font-bold text-white hover:text-gold">{EMAIL}</a>
                  <button type="button" onClick={copy} className="rounded-full border-2 border-white/25 px-4 py-1.5 font-body text-[13px] font-extrabold uppercase tracking-[0.1em] text-white hover:border-white/60">
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
              <div>
                <p className="font-body text-[13px] font-extrabold uppercase tracking-[0.12em] text-white/70">Where we are</p>
                <p className="mt-2 font-body text-2xl font-bold text-white">IRC-ASE, KFUPM<br />Dhahran, Saudi Arabia</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-24">
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default ContactPage;
