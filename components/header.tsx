"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex w-full flex-col gap-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="flex flex-col" aria-label="Ken Builds Things">
          <span className="font-sans text-lg font-black tracking-[2px] text-[#C8CCCE]">
            KEN
          </span>
          <span
            className="font-sans text-lg font-black tracking-[2px] text-[#00A19B]"
            style={{ textShadow: "0 0 60px rgba(0, 161, 155, 0.2)" }}
          >
            BUILDS
          </span>
          <span className="font-sans text-lg font-black tracking-[2px] text-[#F0F0F0]">
            THINGS.
          </span>
        </h1>
        <div
          className="flex flex-col gap-1 sm:text-right"
          aria-label="Project metadata"
          role="status"
        >
          <span className="font-mono text-[10px] text-dim sm:text-xs">
            PROJECT: KENBUILDSTHINGS.COM
          </span>
          <span className="font-mono text-[10px] text-dim sm:text-xs">
            PHASE: BUILDING [V.01]
          </span>
          <span className="font-mono text-[10px] text-dim sm:text-xs">
            DATE: MAR.2025
          </span>
        </div>
      </div>
      <div className="h-0.5 w-full bg-teal" aria-hidden="true" />
    </motion.header>
  );
}
