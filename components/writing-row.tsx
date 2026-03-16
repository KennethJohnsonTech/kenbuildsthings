"use client";

import { motion } from "framer-motion";
import type { WritingEntry } from "@/lib/data";
import { MostRecentBadge } from "./badge";

interface WritingRowProps {
  entry: WritingEntry;
}

export function WritingRow({ entry }: WritingRowProps) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(22, 22, 25, 0.5)" }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-start justify-between gap-3 rounded-lg px-2 py-[18px] sm:flex-row sm:items-center sm:gap-4"
    >
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold tracking-tight text-white">
          {entry.title}
        </span>
        <span className="text-xs text-dim">{entry.subtitle}</span>
        {entry.mostRecent && (
          <div className="mt-1">
            <MostRecentBadge />
          </div>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <span className="h-[7px] w-[7px] rounded-full bg-teal" />
        <span className="font-mono text-[11px] text-silver-muted">
          {entry.status}
        </span>
      </div>
    </motion.div>
  );
}
