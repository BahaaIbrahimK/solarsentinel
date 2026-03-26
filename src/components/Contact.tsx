import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const Contact = () => {
  const fade = useFadeIn();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", organization: "", role: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold text-center mx-auto">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-3 text-center">
            Talk to Us About Your Monitoring Use Case
          </h3>
          <p className="text-primary-foreground/60 mb-10 text-center text-base max-w-md mx-auto">
            From refineries and pipelines to landfills and air-quality programs — let's discuss how SolarSentinel can help.
          </p>

          {submitted ? (
            <div className="bg-primary-foreground/10 rounded-xl p-10 text-center">
              <p className="text-gold text-xl font-semibold mb-2">Message Sent ✓</p>
              <p className="text-primary-foreground/70">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card text-navy border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <input type="text" placeholder="Organization" required value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card text-navy border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card text-navy border border-border focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="">Select Role</option>
                <option>Potential Client</option>
                <option>Partner</option>
                <option>Investor</option>
                <option>Other</option>
              </select>
              <input type="email" placeholder="Email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card text-navy border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <textarea placeholder="Message (optional)" rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card text-navy border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
              <button type="submit"
                className="w-full py-3 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm">
                Contact SolarSentinel
              </button>
            </form>
          )}

          <div className="text-center mt-8 text-primary-foreground/50 text-sm space-y-1">
            <p>📧 bahaaibrahim117@gmail.com</p>
            <p>📍 IRC-ASE, KFUPM, Dhahran, Saudi Arabia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
