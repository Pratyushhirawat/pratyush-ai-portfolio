import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="" title="Academic foundation" />

        <div className="mt-14 space-y-6">
          {education.map((e) => (
            <motion.div
              key={e.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass glass-light flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-start"
            >
              <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo/20 to-blue-300/20 text-indigo-dim dark:text-blue-300"
              >
                <GraduationCap size={26} />
              </motion.div>
              <div>
                <p className="mono-tag text-indigo-dim dark:text-blue-300">{e.period}</p>
                <h3 className="mt-1.5 font-display text-xl font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm font-medium text-current/70">{e.institution}</p>
                <p className="mt-3 text-sm leading-relaxed text-current/60">{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
