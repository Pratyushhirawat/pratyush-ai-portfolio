import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="" title="Let's build something intelligent" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: personal.location, href: undefined },
              { icon: GithubIcon, label: "GitHub", value: "View profile", href: personal.github },
              { icon: LinkedinIcon, label: "LinkedIn", value: "View profile", href: personal.linkedin },
            ].map((item) => (
              <a
               key={item.label}
               href={item.href}
                target="_blank"
                rel="noreferrer"
                className="border border-indigo-200 dark:border-blue-100 hover:bg-blue-100 dark:hover:bg-indigo-100  dark:hover:text-black flex cursor-pointer items-center gap-4 rounded-2xl p-5">
                <div className="flex h-11 w-11 shrink-0 border border-indigo-300 items-center justify-center rounded-xl bg-linear-to-br from-indigo/20 to-blue-200/20 text-indigo-dim dark:text-blue-300">
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="mono-tag text-current/40">{item.label}</p>
                  
                    <p className="truncate text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="border border-blue-200 space-y-5 rounded-2xl p-8"
          >
            <div>
              <label htmlFor="name" className="mono-tag text-current/50">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-current/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-indigo-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mono-tag text-current/50">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-current/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-indigo-400"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mono-tag text-current/50">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full resize-none rounded-xl border border-current/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-indigo-400"
                placeholder="Tell me about the project or role…"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-900 to-blue-200 px-6 py-3.5 font-mono text-xs uppercase tracking-wide text-ink"
            >
              {sent ? (
                <>
                  <Check size={15} /> Message ready — check your mail app
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
