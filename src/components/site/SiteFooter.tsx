import { Link } from "react-router-dom";
import logo from "@/assets/v3/logo-white-notag.png";

export const HASHTAG = "#MethaneFromAbove";

const SiteFooter = () => (
  <footer className="bg-navy-dark text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
      <div>
        <img src={logo} alt="SolarSentinel" className="h-10 w-auto" style={{ maxWidth: 200 }} />
        <p className="mt-6 font-display text-2xl font-bold uppercase leading-tight">
          Sensing the invisible,<br /><span className="text-gold">from the sky.</span>
        </p>
      </div>
      <div>
        <p className="font-body text-sm font-extrabold uppercase tracking-[0.12em] text-gold">Company</p>
        <ul className="mt-4 space-y-3 font-body text-base font-semibold">
          <li><Link to="/manufacturing" className="text-white/80 hover:text-white">Manufacturing</Link></li>
          <li><Link to="/about" className="text-white/80 hover:text-white">About</Link></li>
          <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <p className="font-body text-sm font-extrabold uppercase tracking-[0.12em] text-gold">Contact</p>
        <ul className="mt-4 space-y-3 font-body text-base font-semibold text-white/80">
          <li><a href="mailto:contact@solarsentinelco.com" className="break-all hover:text-white">contact@solarsentinelco.com</a></li>
          <li>IRC-ASE, KFUPM<br />Dhahran, Saudi Arabia</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <p className="mx-auto max-w-7xl px-6 py-6 font-body text-sm font-semibold text-white/55 md:px-10">
        © 2026 SolarSentinel <span className="mx-2">|</span> <span className="uppercase tracking-[0.08em]">{HASHTAG}</span>
      </p>
    </div>
  </footer>
);

export default SiteFooter;
