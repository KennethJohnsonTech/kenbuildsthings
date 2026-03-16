"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export function Work() {
  return (
    <section className="flex w-full flex-col gap-8">
      <SectionHeader label="WORK" count="04" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row">
          <motion.div
            variants={cardVariants}
            custom={0}
            className="flex-1 pb-7 md:pr-7"
          >
            <ProjectCard project={projects[0]} />
          </motion.div>
          <div className="hidden h-auto w-px bg-line md:block" />
          <div className="border-t border-line md:hidden" />
          <motion.div
            variants={cardVariants}
            custom={1}
            className="flex-1 pb-7 pt-7 md:pl-7 md:pt-0"
          >
            <ProjectCard project={projects[1]} />
          </motion.div>
        </div>

        {/* Row Border */}
        <div className="h-px w-full bg-line" />

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row">
          <motion.div
            variants={cardVariants}
            custom={2}
            className="flex-1 pt-7 md:pr-7"
          >
            <ProjectCard project={projects[2]} />
          </motion.div>
          <div className="hidden h-auto w-px bg-line md:block" />
          <div className="border-t border-line md:hidden" />
          <motion.div
            variants={cardVariants}
            custom={3}
            className="flex-1 pt-7 md:pl-7"
          >
            <ProjectCard project={projects[3]} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
