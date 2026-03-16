"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="w-full" aria-hidden="true" role="separator">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-0.5 w-full origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #00C4B4 50%, transparent 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #181820 15%, #282830 50%, #181820 85%, transparent 100%)",
        }}
      />
    </div>
  );
}
