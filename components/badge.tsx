"use client";

import { cn } from "@/lib/utils";

interface PriorityBadgeProps {
  priority: "P1" | "P2" | "P3" | "P4";
  accentColor: "teal" | "amber" | "dim";
}

const accentStyles = {
  teal: "border-teal text-teal",
  amber: "border-amber text-amber",
  dim: "border-dim text-dim",
} as const;

export function PriorityBadge({ priority, accentColor }: PriorityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded font-mono text-[10px] font-bold",
        "border-[1.5px]",
        accentStyles[accentColor],
      )}
    >
      {priority}
    </span>
  );
}

export function MostRecentBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-[3px] bg-fastest-lap px-1.5 py-0.5">
      <span className="h-[5px] w-[5px] rounded-full bg-white" />
      <span className="font-mono text-[7px] font-bold tracking-wide text-white">
        MOST RECENT
      </span>
    </span>
  );
}
