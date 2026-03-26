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
    <footer style={{ background: "hsl(var(--navy))", borderTop: "1px solid hsl(var(--gold))" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <img src={logoDark} alt="SolarSentinel" className="h-10 w-auto mx-auto md:mx-0" style={{ maxWidth: 180 }} />
          <p className="text-primary-foreground/50 text-sm italic mt-2 max-w-[240px]">
            Autonomous aerial monitoring for industrial & environmental operations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-primary-foreground/40 text-sm text-center md:text-right max-w-[240px]">
          © 2026 SolarSentinel. All rights reserved.
          <br />KFUPM, Dhahran, Saudi Arabia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
