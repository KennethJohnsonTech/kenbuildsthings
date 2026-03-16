"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex w-full flex-col gap-16 lg:flex-row"
    >
      {/* Left Column */}
      <div className="flex flex-1 flex-col gap-8">
        <span className="font-mono text-xs font-semibold tracking-wider text-teal">
          PORTFOLIO
        </span>
        <div className="aspect-[924/510] w-full overflow-hidden rounded-xl border border-line bg-surface">
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-sm text-dim">Hero Image</span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex w-full flex-col justify-end gap-8 lg:w-[340px]">
        <div className="flex flex-col gap-3 border-l-2 border-r-2 border-teal px-6 py-5">
          <span className="font-mono text-xs font-semibold tracking-[2px] text-teal">
            FEATURED PROJECT
          </span>
          <p className="text-sm leading-relaxed text-silver-muted">
            LeadQuest — an AI-powered lead generation platform that finds,
            qualifies, and manages prospects automatically. Built from scratch
            with Claude as the engineering layer.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold tracking-[2px] text-teal">
            BUILT WITH
          </span>
          <span className="font-mono text-xs leading-relaxed text-silver">
            NEXT.JS / CLAUDE /
            <br />
            SUPABASE / VERCEL /
            <br />
            TAILWIND CSS
          </span>
        </div>
      </div>
    </motion.section>
  );
}
