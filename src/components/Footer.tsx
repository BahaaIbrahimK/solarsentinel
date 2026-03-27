import logoDark from "@/assets/logo-dark.png";

const footerLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-navy" style={{ borderTop: "1px solid hsl(var(--gold) / 0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <img src={logoDark} alt="SolarSentinel" className="h-10 w-auto mx-auto md:mx-0" style={{ maxWidth: 180 }} />
          <p className="text-primary-foreground/30 text-sm mt-3 max-w-[260px]">
            Autonomous aerial monitoring for industrial & environmental operations
          </p>
          <p className="text-primary-foreground/20 text-xs mt-1">contact@solarsentinelco.com</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-primary-foreground/40 hover:text-primary-foreground text-sm transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-primary-foreground/20 text-sm text-center md:text-right max-w-[240px]">
          © 2026 SolarSentinel.
          <br />KFUPM, Dhahran, Saudi Arabia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
