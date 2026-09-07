import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "../data/resume";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="border border-blue-200 rounded-3xl p-2"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        className="rounded-[1.4rem] transition-transform duration-200 ease-out"
      >
        <div className="relative overflow-hidden rounded-[1.4rem] bg-linear-to-br from-surface to-surface-2 p-7">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-linear-to-br from-indigo/25 to-teal/15 blur-3xl" />

          <div className="relative flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="mono-tag text-blue-300">project_0{index + 1}</span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-paper">{project.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="mono-tag rounded-full bg-black px-3 py-1 text-white/70">
                {project.category}
              </span>
              <span
                className={`mono-tag rounded-full px-3 py-1 ${
                  project.status === "Shipped"
                    ? "bg-teal/15 text-blue-300"
                    : "bg-coral/15 text-coral"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          <p className="relative mt-4 text-sm leading-relaxed text-paper/70">{project.tagline}</p>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-paper/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative mt-6 flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 font-mono text-xs uppercase text-paper transition-colors hover:bg-white/20"
              >
                <GithubIcon size={14} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-linear-to-r from-indigo to-blue-300 px-4 py-2 font-mono text-xs uppercase text-ink transition-transform hover:scale-105"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="ml-auto flex items-center gap-1 font-mono text-xs uppercase text-paper/60 transition-colors hover:text-indigo-dim cursor-pointer"
            >
              Details
              <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative overflow-hidden"
              >
                <div className="mt-6 grid grid-cols-1 gap-5 border-t border-white/10 pt-6 text-paper/80 sm:grid-cols-2">
                  <div>
                    <p className="mono-tag text-indigo-dim">Problem</p>
                    <p className="mt-2 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="mono-tag text-indigo-dim">Solution</p>
                    <p className="mt-2 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="mono-tag text-indigo-dim">Features</p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
                      {project.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-200" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mono-tag text-indigo-dim">Architecture</p>
                    <p className="mt-2 text-sm leading-relaxed">{project.architecture}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="mono-tag text-indigo-dim">Results</p>
                    <p className="mt-2 text-sm leading-relaxed">{project.results}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="" title="Shipped AI projects" />
        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
