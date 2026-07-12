import { motion } from "framer-motion";
import {
  Bot, BrainCircuit, LineChart, MessageSquare, Workflow, Eye, Type, Layers, Network, Sparkles,
} from "lucide-react";
import { services } from "../data/resume";
import SectionHeading from "./SectionHeading";

const icons = [Sparkles, BrainCircuit, LineChart, Bot, Network, Workflow, Eye, Type, MessageSquare, Layers];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="" title="What I can build" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-current/10 p-6 transition-colors hover:border-indigo/40"
              >
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo/0 to-teal/0 transition-all hover:text-indigo-300 duration-500 group-hover:from-indigo/5 group-hover:to-blue/5" />
                <Icon size={22} className="text-indigo-dim transition-transform duration-300 group-hover:scale-110 dark:text-blue-300" />
                <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-current/60">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
