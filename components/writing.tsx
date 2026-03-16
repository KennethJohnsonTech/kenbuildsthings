"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { WritingRow } from "./writing-row";
import { writingEntries } from "@/lib/data";

export function Writing() {
  return (
    <section className="flex w-full flex-col gap-4">
      <SectionHeader label="WRITING" count="03" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        {writingEntries.map((entry, i) => (
          <div key={entry.title}>
            <WritingRow entry={entry} />
            {i < writingEntries.length - 1 && (
              <div className="h-px w-full bg-line" />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
