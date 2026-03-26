import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const Contact = () => {
  const fade = useFadeIn();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#0D2540" }}>
      <div className="max-w-2xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            Talk to Us
          </h3>
          <p className="text-white/65 mb-10 text-base md:text-lg leading-relaxed">
            We are selectively engaging investors and strategic partners aligned with Saudi Vision 2030 and global decarbonization. If that is you — we want to hear from you.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-xl p-10 text-center">
              <p className="text-gold text-xl font-semibold mb-2">Message Sent ✓</p>
              <p className="text-white/70">Thank you for reaching out. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="text"
                placeholder="Organization"
                required
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <select
                required
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="" disabled>Select your role</option>
                <option value="Investor">Investor</option>
                <option value="Potential Client">Potential Client</option>
                <option value="Partner">Partner</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <textarea
                placeholder="Message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="text-center mt-8 text-white/60 text-sm space-y-1">
            <p>📧 bahaaibrahim117@gmail.com</p>
            <p>📍 IRC-ASE, KFUPM, Dhahran, Saudi Arabia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
