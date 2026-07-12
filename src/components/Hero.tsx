import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowDown, Download, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data/resume";
const NeuralBackground = lazy(() => import("./NeuralBackground"));

function useTypewriter(words: string[], speed = 65, pause = 1200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 1.6,
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(personal.titles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 grid-noise opacity-60" />
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <NeuralBackground />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-paper dark:to-ink" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mono-tag mb-5 flex items-center gap-2 text-indigo-dim dark:text-teal">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-indigo" />
            {/* model_card // pratyush_hirawat.v1 //  */}
            status: online
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>

          <div className="mt-5 h-10 font-mono text-xl text-indigo-dim dark:text-teal sm:text-2xl">
            <span className="text-gradient">{typed}</span>
            <span className="animate-pulse-slow">_</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-current/70 sm:text-lg">
            {personal.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 rounded-full bg-linear-to-r from-blue-200 to-blue-900  dark:from-indigo-200 dark:to-indigo-700 dark:text-white opacity-90 px-6 py-3 font-mono text-xs uppercase tracking-wide text-ink shadow-lg shadow-indigo/20 transition-transform hover:scale-105"
            >
              <Download size={15} /> Download Resume
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-linear-to-r from-violet-200 to-violet-900 dark:from-blue-200 dark:to-blue-900 dark:text-white opacity-100 px-6 py-3 font-mono text-xs uppercase tracking-wide text-ink shadow-lg shadow-indigo/20 transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-linear-to-r from-blue-200 to-blue-900 dark:from-indigo-200 dark:to-indigo-700 dark:text-white  opacity-90 px-6 py-3 font-mono text-xs uppercase tracking-wide text-ink shadow-lg shadow-indigo/20 transition-transform hover:scale-105"
            >
              <Send size={14} /> Hire Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { icon: GithubIcon, href: personal.github, label: "GitHub" },
              {
                icon: LinkedinIcon,
                href: personal.linkedin,
                label: "LinkedIn",
              },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="border border-blue-200 flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110 hover:text-indigo-900"
              >
                <Icon size={17} />
              </a>
            ))}
            <div className="flex items-center gap-1.5 pl-2 font-mono text-xs text-current/50">
              <MapPin size={13} /> {personal.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-indigo/30 via-blue-400/30 to-violet/30 blur-2xl" />
          <div className="border border-blue-200 relative overflow-hidden rounded-4xl p-2">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[1.6rem] bg-linear-to-br from-surface to-surface-2 dark:from-surface dark:to-surface-2">
              <img
                src="/images/portrait.png"
                alt="Pratyush Hirawat"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-3 py-3 font-mono text-[11px] uppercase tracking-wide text-current/50">
              <span>Pratyush Hirawat</span>
              <span className="flex items-center gap-1 text-indigo">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo" /> active
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-current/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
