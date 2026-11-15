import { useState } from "react";

const ROLES = ["Plant operator", "Partner", "Investor", "Other"];
const EMAIL = "contact@solarsentinelco.com";

/** The form opens the visitor's email app with the message filled in; nothing is stored on a server. */
const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [role, setRole] = useState("");
  const [f, setF] = useState({ name: "", org: "", email: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `SolarSentinel enquiry from ${f.name}${f.org ? ` (${f.org})` : ""}`;
    const body = [`Name: ${f.name}`, `Organisation: ${f.org}`, `I am a: ${role || "Not specified"}`, `Email: ${f.email}`, "", f.message].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = "peer w-full border-0 border-b-2 border-white/25 bg-transparent px-0 pb-3 pt-6 font-body text-lg font-semibold text-white placeholder-transparent focus:border-gold focus:outline-none focus:ring-0";
  const label = "pointer-events-none absolute left-0 top-0 font-body text-[13px] font-extrabold uppercase tracking-[0.12em] text-white/70";

  if (sent) return (
    <div className="rounded-lg border border-white/15 p-10">
      <p className="font-display text-3xl font-bold uppercase text-gold">Almost there</p>
      <p className="mt-3 font-body text-lg font-medium text-white">Your email app should open with the message ready. If nothing opened, email us at <span className="select-all font-bold">{EMAIL}</span>.</p>
      <button type="button" onClick={() => setSent(false)} className="mt-6 font-body text-sm font-extrabold uppercase tracking-[0.12em] text-white underline underline-offset-4">Back to the form</button>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="relative block"><input required value={f.name} onChange={set("name")} placeholder="Name" className={field} /><span className={label}>Name</span></label>
        <label className="relative block"><input required value={f.org} onChange={set("org")} placeholder="Organisation" className={field} /><span className={label}>Organisation</span></label>
      </div>
      <label className="relative block"><input required type="email" value={f.email} onChange={set("email")} placeholder="Email" className={field} /><span className={label}>Email</span></label>

      <fieldset>
        <legend className="font-body text-[13px] font-extrabold uppercase tracking-[0.12em] text-white/70">I am a</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {ROLES.map((r) => (
            <button key={r} type="button" aria-pressed={role === r} onClick={() => setRole(role === r ? "" : r)}
              className={`rounded-full border-2 px-5 py-2 font-body text-[15px] font-bold transition ${role === r ? "border-gold bg-gold text-navy" : "border-white/25 text-white hover:border-white/60"}`}>
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="relative block"><textarea rows={3} value={f.message} onChange={set("message")} placeholder="Message" className={`${field} resize-none`} /><span className={label}>Message</span></label>

      <button type="submit" className="w-full rounded-md bg-gold py-4 font-body text-base font-extrabold uppercase tracking-[0.1em] text-navy transition hover:brightness-110 sm:w-auto sm:px-12">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
