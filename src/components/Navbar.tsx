import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#products", label: "Products" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-80 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <motion.a
          href="#top"
          className={`border border-blue-200 dark:border-indigo-300 flex items-center gap-2 rounded-full px-4 py-2 font-mono text-sm font-semibold tracking-tight ${
            scrolled ? "" : ""
          }`}
          whileHover={{ scale: 1.03 }}
        >
          <span className="h-2 w-2 animate-pulse-slow rounded-full bg-indigo-800" />
          PH<span className="text-indigo-800">.</span>ai
        </motion.a>

        <nav className="border border-blue-200  dark:border-indigo-300 hidden items-center gap-1 rounded-full px-2 py-2 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-current/70 transition-colors hover:bg-indigo/10 hover:text-indigo"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="border border-blue-200 dark:border-indigo-300 text-shadow-white hidden items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors hover:text-indigo sm:flex"
          >
            <Download size={14} /> Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="border border-blue-200 dark:border-indigo-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-105"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? <Sun  size={16} /> : <Moon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="glass glass-light cursor-pointer flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X  size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass glass-dark mx-5 mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="flex flex-col p-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-wide hover:bg-indigo/10 hover:text-indigo"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
