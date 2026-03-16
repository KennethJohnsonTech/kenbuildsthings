"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

const metaVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: 0.6 + i * 0.1 },
  }),
};

export function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col gap-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="flex flex-col" aria-label="Ken Builds Things">
          <motion.span
            variants={letterVariants}
            custom={0}
            className="font-sans text-lg font-black tracking-[2px] text-[#C8CCCE]"
          >
            KEN
          </motion.span>
          <motion.span
            variants={letterVariants}
            custom={1}
            className="font-sans text-lg font-black tracking-[2px] text-[#00A19B]"
            style={{ textShadow: "0 0 60px rgba(0, 161, 155, 0.2)" }}
          >
            BUILDS
          </motion.span>
          <motion.span
            variants={letterVariants}
            custom={2}
            className="font-sans text-lg font-black tracking-[2px] text-[#F0F0F0]"
          >
            THINGS.
          </motion.span>
        </h1>
        <div
          className="flex flex-col gap-1 sm:text-right"
          aria-label="Project metadata"
          role="status"
        >
          {[
            "PROJECT: KENBUILDSTHINGS.COM",
            "PHASE: BUILDING [V.01]",
            "DATE: MAR.2025",
          ].map((text, i) => (
            <motion.span
              key={text}
              variants={metaVariants}
              custom={i}
              className="font-mono text-[10px] text-dim sm:text-xs"
            >
              {text}
            </motion.span>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="h-0.5 w-full origin-left bg-teal"
        aria-hidden="true"
      />
    </motion.header>
  );
}
