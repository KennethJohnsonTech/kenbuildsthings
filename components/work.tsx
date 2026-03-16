"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section className="flex w-full flex-col gap-8">
      <SectionHeader label="WORK" count="04" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pb-7 md:pr-7">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="hidden h-auto w-px bg-line md:block" />
          <div className="border-t border-line md:hidden" />
          <div className="flex-1 pb-7 pt-7 md:pl-7 md:pt-0">
            <ProjectCard project={projects[1]} />
          </div>
        </div>

        {/* Row Border */}
        <div className="h-px w-full bg-line" />

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pt-7 md:pr-7">
            <ProjectCard project={projects[2]} />
          </div>
          <div className="hidden h-auto w-px bg-line md:block" />
          <div className="border-t border-line md:hidden" />
          <div className="flex-1 pt-7 md:pl-7">
            <ProjectCard project={projects[3]} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
