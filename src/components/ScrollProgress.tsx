import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-90 h-0.75 w-full origin-left bg-linear-to-r from-indigo via-blue-200 to-violet"
      style={{ scaleX }}
    />
  );
}
