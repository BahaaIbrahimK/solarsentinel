import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  return (
    <footer style={{ background: "#0D2540", borderTop: "1px solid hsl(var(--gold))" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoDark} alt="SolarSentinel" className="h-10 w-auto" style={{ maxWidth: 180 }} />
        <p className="text-white/40 text-sm text-center">
          © 2026 SolarSentinel. All rights reserved. KFUPM, Dhahran, Saudi Arabia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
