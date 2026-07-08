import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Technology", href: "#architecture" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Manufacturing", href: "#built-in-house" },
  { label: "Team", href: "#team" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isNavDark = scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isNavDark
        ? "bg-navy/95 backdrop-blur-md shadow-xl border-b border-primary-foreground/5"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <img src={isNavDark ? logoDark : logoDark} alt="SolarSentinel" className="h-12 md:h-14 w-auto" style={{ maxWidth: 220 }} />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                activeSection === link.href.slice(1) ? "text-gold"
                  : "text-primary-foreground/50 hover:text-primary-foreground"
              }`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-2.5 bg-gold text-navy text-[13px] font-semibold rounded-lg hover:brightness-110 transition tracking-wide">
            Request a Pilot
          </a>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className="text-primary-foreground">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-primary-foreground/5 pb-4">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground tracking-wide">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}
              className="px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-lg text-center">
              Request a Pilot
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
