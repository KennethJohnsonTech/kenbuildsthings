"use client";

import { motion } from "framer-motion";
import type { StatCard as StatCardType } from "@/lib/data";

interface StatCardProps {
  stat: StatCardType;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px rgba(0, 196, 180, 0.06)",
        borderColor: "rgba(0, 196, 180, 0.2)",
      }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-1.5 rounded-xl border border-transparent bg-surface p-4"
    >
      <span className="font-mono text-[10px] font-semibold tracking-wider text-teal">
        {stat.label}
      </span>
      {stat.isPlain ? (
        <span className="font-mono text-[15px] text-white">{stat.value}</span>
      ) : (
        <span className="text-[13px] leading-relaxed text-silver">
          {stat.value}
        </span>
      )}
    </motion.div>
  );
}
