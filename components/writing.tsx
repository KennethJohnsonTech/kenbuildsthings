"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { WritingRow } from "./writing-row";
import { writingEntries } from "@/lib/data";

const rowVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function Writing() {
  return (
    <section className="flex w-full flex-col gap-4">
      <SectionHeader label="WRITING" count="03" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {writingEntries.map((entry, i) => (
          <motion.div key={entry.title} variants={rowVariants} custom={i}>
            <WritingRow entry={entry} />
            {i < writingEntries.length - 1 && (
              <div className="h-px w-full bg-line" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
