import logoDark from "@/assets/logo-dark.png";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "What We Do", href: "#what-we-do" },
      { label: "Technology", href: "#architecture" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Industries", href: "#industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Manufacturing", href: "#built-in-house" },
      { label: "Team", href: "#team" },
      { label: "Request a Pilot", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy">
      {/* Statement + links */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground leading-[1.1] max-w-md">
              Sensing the invisible, from the sky.
            </h2>
            <a href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gold text-navy font-semibold rounded-full hover:brightness-105 transition text-sm tracking-wide">
              Request a Pilot <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">Contact</p>
              <ul className="space-y-3 text-sm text-primary-foreground/60">
                <li><a href="mailto:contact@solarsentinelco.com" className="hover:text-primary-foreground transition-colors break-all">contact@solarsentinelco.com</a></li>
                <li>IRC-ASE, KFUPM<br />Dhahran, Saudi Arabia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoDark} alt="SolarSentinel" className="h-9 w-auto" style={{ maxWidth: 170 }} />
          <p className="text-primary-foreground/35 text-xs text-center md:text-right">
            © 2026 SolarSentinel · Solar-Powered Aerial Methane Monitoring
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
