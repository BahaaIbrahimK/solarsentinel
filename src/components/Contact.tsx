import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const Contact = () => {
  const fade = useFadeIn();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", organization: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#0D2540" }}>
      <div className="max-w-xl mx-auto px-6" ref={fade.ref}>
        <div className={fade.className}>
          <h2 className="section-label text-gold text-center mx-auto">Get Started</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 text-center">
            Start with a Pilot
          </h3>
          <p className="text-white/60 mb-10 text-center text-base">
            We're engaging partners aligned with industrial decarbonization. Let's talk.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-xl p-10 text-center">
              <p className="text-gold text-xl font-semibold mb-2">Message Sent ✓</p>
              <p className="text-white/70">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <input type="text" placeholder="Organization" required value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <input type="email" placeholder="Email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold" />
              <textarea placeholder="Message (optional)" rows={3} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white text-navy border border-navy/20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
              <button type="submit"
                className="w-full py-3 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition text-sm">
                Request Pilot Deployment
              </button>
            </form>
          )}

          <div className="text-center mt-8 text-white/50 text-sm space-y-1">
            <p>📧 bahaaibrahim117@gmail.com</p>
            <p>📍 KFUPM, Dhahran, Saudi Arabia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
