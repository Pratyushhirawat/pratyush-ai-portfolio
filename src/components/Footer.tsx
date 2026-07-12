import { Mail, ArrowUp, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data/resume";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-current/10 pt-16">
      <svg
        className="absolute -top-1 left-0 w-full text-surface dark:text-surface"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C300,60 900,-20 1200,20 L1200,0 L0,0 Z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-5 pb-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold">
              PH<span className="text-blue-800">.</span>ai
            </p>
            <p className="mt-1 max-w-xs text-sm text-current/50">
              Building intelligent, data-intensive products — one model at a time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="border border-blue-200 flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide hover:text-indigo-400 dark:hover:text-blue-300"
            >
              <Download size={14} /> Resume
            </a>
            {[
              { icon: GithubIcon, href: personal.github, label: "GitHub" },
              { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="border border-blue-200 flex h-10 w-10 items-center justify-center rounded-full hover:text-indigo-300 dark:hover:text-blue-300"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-900 to-blue-200 text-ink"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-current/10 pt-6 text-center font-mono text-[11px] text-current/40">
          © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
