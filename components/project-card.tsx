"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { PriorityBadge } from "./badge";
import { MetaItem } from "./meta-item";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.01, borderColor: "rgba(0, 196, 180, 0.15)" }}
      transition={{ duration: 0.2 }}
      className="flex flex-1 flex-col gap-2.5 rounded-lg border border-transparent p-1"
    >
      <div className="flex items-center gap-2.5">
        <span
          className="h-[7px] w-[7px] rounded-full"
          style={{ backgroundColor: project.statusDotColor }}
          aria-hidden="true"
        />
        <h3
          className="text-[22px] font-bold tracking-tight text-white"
          style={{ textWrap: "balance" }}
        >
          {project.name}
        </h3>
        <PriorityBadge
          priority={project.priority}
          accentColor={project.accentColor}
        />
      </div>
      <p className="max-w-[380px] text-[13px] leading-[1.6] text-silver-muted">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-5 pt-1">
        {project.meta.map((m) => (
          <MetaItem key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </motion.article>
  );
}
