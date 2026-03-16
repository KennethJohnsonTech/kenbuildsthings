"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #00C4B4 0%, #00E5D2 50%, #00C4B4 100%)",
        boxShadow: "0 0 10px rgba(0, 196, 180, 0.5)",
      }}
      aria-hidden="true"
    />
  );
}
