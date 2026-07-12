import { useState } from "react";
import { motion } from "framer-motion";
import { achievements } from "../data/resume";
import { useCountUp } from "../hooks/useCountUp";

function Counter({ value, label, delay }: { value: number; label: string; delay: number }) {
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      onViewportEnter={() => setActive(true)}
      transition={{ duration: 0.5, delay }}
      className="border border-blue-200 rounded-2xl p-8 text-center"
    >
      <p className="font-display text-4xl text-blue-500 dark:text-indigo-200 font-semibold  sm:text-5xl">{count}+</p>
      <p className="mono-tag mt-3 text-current/50">{label}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Counter key={a.label} value={a.value} label={a.label} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
