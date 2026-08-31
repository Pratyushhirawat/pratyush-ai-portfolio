import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "./icons";
import { products, filterTags } from "../data/products";
import SectionHeading from "./SectionHeading";

const statusColor: Record<string, string> = {
  Live: "bg-indigo/15 text-indigo",
  "In Development": "bg-coral/15 text-coral",
  Archived: "bg-current/10 text-current/50",
};

export default function Products() {
  const [active, setActive] = useState<(typeof filterTags)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="products" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="" title="AI Products & Full Stack Applications" />
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-current/60">
          A growing, data-driven catalogue of complete products — frontend to backend to AI layer.
          New builds get added here as a single data entry.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`relative rounded-full cursor-pointer opacity-95 px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                active === tag ? "text-ink" : "text-current/60 hover:text-indigo-dim dark:hover:text-blue-200"
              }`}
            >
              {active === tag && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-800 to-blue-200"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{tag}</span>
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className=" border border-blue-300 group flex flex-col overflow-hidden rounded-2xl"
                >
                   <div className="relative flex h-36 items-center justify-center overflow-hidden bg-linear-to-br from-indigo/15 via-teal/10 to-violet/15">
                    {p.image ? (
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-widest text-current/40">
                        {p.name}
                      </span>
                    )}
                    <div className="absolute right-3 top-3 flex gap-1.5">
                      <span className="mono-tag rounded-full bg-current/10 px-2.5 py-1 text-current/70">
                        {p.category}
                      </span>
                      <span className={`mono-tag rounded-full px-2.5 py-1 ${statusColor[p.status]}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-current/65">
                      {p.description}
                    </p>

                    <div className="mt-4">
                      <p className="mono-tag text-current/40">stack</p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-current/5 px-2.5 py-0.5 font-mono text-[10px] text-current/60"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="mono-tag text-current/40">ai tech</p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {p.aiTech.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-indigo/10 px-2.5 py-0.5 font-mono text-[10px] text-indigo-dim dark:text-teal"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-2 border-t border-current/10 pt-4">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-current/5 transition-colors hover:bg-indigo/15 hover:text-indigo-dim"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live demo"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-current/5 transition-colors hover:bg-blue-700/15 hover:text-blue-700"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      {p.caseStudyUrl && (
                        <a
                          href={p.caseStudyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto flex items-center gap-1.5 font-mono text-[11px] uppercase text-current/60 hover:text-indigo-dim"
                        >
                          <FileText size={13} /> Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="mt-14 text-center font-mono text-sm text-current/40">
            No products tagged "{active}" yet.
          </p>
        )}
      </div>
    </section>
  );
}
