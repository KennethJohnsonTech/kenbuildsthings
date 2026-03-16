"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { StatCard } from "./stat-card";
import { aboutSections, statCards } from "@/lib/data";

export function About() {
  return (
    <section className="flex w-full flex-col gap-8">
      <SectionHeader label="ABOUT" />

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col gap-10"
        >
          {aboutSections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h3 className="font-mono text-[11px] font-semibold tracking-wider text-teal">
                {section.heading}
              </h3>
              <p className="text-sm leading-[1.6] text-silver">
                {section.body}
              </p>
            </div>
          ))}

          {/* Image Placeholders */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-[200px] flex-col items-center justify-center rounded-xl border border-line bg-surface"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#565F64"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="mt-2 font-mono text-[10px] text-dim">
                  Image
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex w-full flex-col gap-6 lg:w-[380px]"
        >
          {statCards.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
