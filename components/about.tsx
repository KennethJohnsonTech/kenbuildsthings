"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { StatCard } from "./stat-card";
import { aboutSections, statCards } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section className="flex w-full flex-col gap-8">
      <SectionHeader label="ABOUT" />

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
        {/* Narrative */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-1 flex-col gap-10"
        >
          {aboutSections.map((section) => (
            <motion.div
              key={section.heading}
              variants={fadeUp}
              className="flex flex-col gap-3"
            >
              <h3 className="font-mono text-[11px] font-semibold tracking-wider text-teal">
                {section.heading}
              </h3>
              <p className="text-sm leading-[1.6] text-silver">
                {section.body}
              </p>
            </motion.div>
          ))}

          {/* Image Placeholders */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-[200px] flex-col items-center justify-center rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-line-bright"
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
          </motion.div>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex w-full flex-col gap-6 lg:w-[380px]"
        >
          {statCards.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCard stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
