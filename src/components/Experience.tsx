import { motion } from "framer-motion";
import { experienceTimeline } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="" title="Learning & building timeline" />

        <div className="relative mt-16 pl-8">
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-linear-to-b from-indigo via-blue-300 to-violet/40" />

          <div className="space-y-10">
            {experienceTimeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-blue-300 bg-ink dark:bg-ink" />
                <p className="mono-tag text-indigo-dim dark:text-blue-300">{item.period}</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-current/65">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
