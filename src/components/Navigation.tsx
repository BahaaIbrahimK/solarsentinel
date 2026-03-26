import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#services" },
  { label: "Traction", href: "#traction" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isNavDark ? "bg-navy shadow-lg border-b border-navy-light" : "bg-white border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero">
          <img src={isNavDark ? logoDark : logo} alt="SolarSentinel" className="h-14 w-auto" style={{ maxWidth: 220 }} />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1) ? "text-gold"
                  : isNavDark ? "text-white/70 hover:text-white" : "text-navy/70 hover:text-navy"
              }`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 px-5 py-2 bg-gold text-navy text-sm font-semibold rounded-lg hover:brightness-110 transition">
            Request Pilot
          </a>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={isNavDark ? "text-white" : "text-navy"}>{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className={`lg:hidden ${isNavDark ? "bg-navy" : "bg-white"} border-t ${isNavDark ? "border-navy-light" : "border-border"} pb-4`}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${isNavDark ? "text-white/80 hover:text-white" : "text-navy/80 hover:text-navy"}`}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}
              className="px-5 py-2 bg-gold text-navy text-sm font-semibold rounded-lg text-center">
              Request Pilot
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
