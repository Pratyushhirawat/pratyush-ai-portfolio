import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    let raf: number;

    function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 350);
        setTimeout(onDone, 900);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative h-20 w-20">
              <motion.svg viewBox="0 0 80 80" className="h-full w-full">
                <defs>
                  <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C8CFF" />
                    <stop offset="50%" stopColor="#29E0C9" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="url(#loaderGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="214"
                  animate={{ strokeDashoffset: [214, 0, -214] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    cx={40 + 22 * Math.cos((i * 2 * Math.PI) / 3)}
                    cy={40 + 22 * Math.sin((i * 2 * Math.PI) / 3)}
                    r="3.5"
                    fill="#29E0C9"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.25 }}
                  />
                ))}
                <text
                  x="40"
                  y="46"
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="16"
                  fill="#F7F8FC"
                >
                  PH
                </text>
              </motion.svg>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="mono-tag text-paper/50">initializing system</p>
              <div className="h-0.5 w-56 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-linear-to-r from-indigo via-blue-300 to-violet"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="font-mono text-xs text-paper/70">{progress}%</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
