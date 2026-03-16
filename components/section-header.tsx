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
      <span className="font-mono text-[11px] font-semibold tracking-wider text-teal">
        {label}
      </span>
      <div className="h-px flex-1 bg-teal-dim" />
      {count && <span className="font-mono text-[10px] text-dim">{count}</span>}
    </motion.div>
  );
}
