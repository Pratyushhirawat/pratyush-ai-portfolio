import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pointerActive, setPointerActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setPointerActive(!!el.closest("a, button, [data-cursor-interactive]"));
    }
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-200 mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: pointerActive ? 44 : 16,
          height: pointerActive ? 44 : 16,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="rounded-full border border-white bg-white/20"
      />
    </motion.div>
  );
}
