import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ScanRipple } from "@/components/brand/ScanRipple";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", organization: "", role: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `SolarSentinel inquiry from ${form.name}${form.organization ? ` (${form.organization})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Organization: ${form.organization}`,
      `Role: ${form.role || "Not specified"}`,
      `Email: ${form.email}`,
      "",
      form.message || "(No message provided)",
    ].join("\n");

    window.location.href = `mailto:contact@solarsentinelco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-primary-foreground/[0.06] text-primary-foreground border border-primary-foreground/10 placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-sm";
  const optionStyle = { color: "#0B1E33", backgroundColor: "#ffffff" };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      <ScanRipple className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none" />
      <div className="relative max-w-xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.28em] mb-4">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 leading-tight">
              Talk to us about your site.
            </h2>
            <p className="text-primary-foreground/50 text-base max-w-md mx-auto">
              Refinery or gas-plant operator, partner, or investor — let's discuss how SolarSentinel can help.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="bg-primary-foreground/[0.06] border border-primary-foreground/10 rounded-2xl p-12 text-center">
              <p className="text-gold text-xl font-semibold mb-2 font-display">Almost there</p>
              <p className="text-primary-foreground/50">Your email client should now be open with your message ready — hit send to reach us.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              <input type="text" placeholder="Organization" required value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })} className={inputClass} />
              <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                className={`${inputClass} ${form.role ? "" : "text-primary-foreground/40"}`}>
                <option value="" style={optionStyle}>Select Role</option>
                <option style={optionStyle}>Potential Client</option>
                <option style={optionStyle}>Partner</option>
                <option style={optionStyle}>Investor</option>
                <option style={optionStyle}>Other</option>
              </select>
              <input type="email" placeholder="Email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              <textarea placeholder="Message (optional)" rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              <button type="submit"
                className="w-full py-4 bg-gold text-navy font-semibold rounded-xl hover:brightness-105 transition text-sm tracking-wide">
                Contact SolarSentinel
              </button>
            </form>
          )}

          <div className="text-center mt-10 text-primary-foreground/30 text-sm space-y-1">
            <p>contact@solarsentinelco.com</p>
            <p>IRC-ASE, KFUPM, Dhahran, Saudi Arabia</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
