"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  count?: string;
}

export function SectionHeader({ label, count }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <h2 className="font-mono text-[11px] font-semibold tracking-wider text-teal">
        {label}
      </h2>
      <div className="h-px flex-1 bg-teal-dim" aria-hidden="true" />
      {count && (
        <span
          className="font-mono text-[10px] text-dim"
          aria-label={`${count} items`}
        >
          {count}
        </span>
      )}
    </motion.div>
  );
}
