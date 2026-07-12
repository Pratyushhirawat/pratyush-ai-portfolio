import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto cursor-pointer max-w-6xl px-5">
        <SectionHeading eyebrow="" title="Training records" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass glass-light group flex items-center gap-5 rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-indigo/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo/20 to-blue-400/20 text-indigo-dim transition-transform duration-300 group-hover:scale-110 dark:text-blue-300">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{c.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-current/50">
                  {c.issuer}
                  {c.period ? ` · ${c.period}` : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
