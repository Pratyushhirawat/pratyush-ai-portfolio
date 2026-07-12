import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center" : ""}
    >
      <p className="mono-tag text-indigo-dim dark:text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-16 bg-linear-to-r from-indigo to-blue-200 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
