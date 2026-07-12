import { motion } from "framer-motion";
import { skillCategories } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="" title="Capabilities & tooling" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.05 }}
              className="glass glass-light group rounded-2xl border border-transparent p-7 transition-colors hover:border-indigo/30"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{cat.category}</h3>
                <span className="mono-tag rounded-full bg-indigo/10 px-3 py-1 text-indigo-dim dark:text-blue-200">
                  {cat.eyebrow}
                </span>
              </div>

              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <div key={item.name} className="group/item">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="font-mono text-xs text-current/50 opacity-0 transition-opacity group-hover/item:opacity-100">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-current/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-linear-to-r from-indigo-200 via-blue-500 to-indigo-900 shadow-[0_0_10px_rgba(41,224,201,0.4)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
