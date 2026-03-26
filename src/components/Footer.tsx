import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Traction", href: "#traction" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer style={{ background: "#0D2540", borderTop: "1px solid hsl(var(--gold))" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <img src={logoDark} alt="SolarSentinel" className="h-10 w-auto mb-3" style={{ maxWidth: 180 }} />
          <p className="text-white/50 text-sm italic leading-relaxed">
            Autonomous Solar UAV for Decarbonization
            <br />& Infrastructure Intelligence
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 text-sm hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-white/50 text-sm text-right leading-relaxed">
          <p>© 2026 SolarSentinel. All rights reserved.</p>
          <p>KFUPM Aerospace Engineering, Dhahran, Saudi Arabia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
