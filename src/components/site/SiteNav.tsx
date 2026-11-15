import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/v3/logo-white-notag.png";

const LINKS = [
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "About", to: "/about" },
];

/** Site header: transparent over each page's opening image, solid navy once the page scrolls. */
const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;
  const link = ({ isActive }: { isActive: boolean }) =>
    `font-body text-[15px] font-bold uppercase tracking-[0.08em] transition-colors ${isActive ? "text-gold" : "text-white/85 hover:text-white"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" aria-label="SolarSentinel home">
          <img src={logo} alt="SolarSentinel" className="h-9 w-auto md:h-10" style={{ maxWidth: 200 }} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {LINKS.map((l) => <NavLink key={l.to} to={l.to} className={link}>{l.label}</NavLink>)}
          <NavLink to="/contact"
            className={({ isActive }) => `rounded-md px-6 py-3 font-body text-[15px] font-extrabold uppercase tracking-[0.08em] transition ${isActive ? "bg-white text-navy" : "bg-gold text-navy hover:brightness-110"}`}>
            Contact
          </NavLink>
        </nav>

        <button className="flex h-11 w-11 items-center justify-center text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M3 1l16 14M19 1L3 15" /> : <path d="M0 2h22M0 8h22M0 14h22" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-white/10 px-6 pb-6 pt-2 md:hidden" aria-label="Main">
          {[...LINKS, { label: "Contact", to: "/contact" }].map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `block py-3 ${link({ isActive })}`}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteNav;
