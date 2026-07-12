import { motion } from "framer-motion";
import { Sparkles, Target, Brain, Compass } from "lucide-react";
import { personal } from "../data/resume";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: Sparkles,
    title: "Professional Summary",
    body: personal.summary,
  },
  {
    icon: Target,
    title: "Career Objective",
    body: personal.objective,
  },
  {
    icon: Brain,
    title: "Why AI",
    body: "AI is the rare field where statistics, code, and real-world impact meet in the same line of work — a model that predicts, a pipeline that retrieves, an agent that acts. Building that pipeline end to end, from raw data to a working product, is what keeps me building.",
  },
  {
    icon: Compass,
    title: "Career Vision",
    body: "To grow into a Data Scientist / ML Engineer who ships intelligent, data-intensive products at scale — not just notebooks, but systems people actually use in production.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="" title="Who's behind the model" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass glass-light group relative overflow-hidden rounded-2xl p-7"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-linear-to-br from-indigo/20 to-blue-600/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-indigo/20 to-teal/20 text-indigo-dim dark:text-blue-300">
                  <c.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-current/70">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
