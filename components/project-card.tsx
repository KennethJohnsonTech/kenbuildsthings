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
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="flex flex-1 flex-col gap-2.5"
    >
      <div className="flex items-center gap-2.5">
        <span
          className="h-[7px] w-[7px] rounded-full"
          style={{ backgroundColor: project.statusDotColor }}
        />
        <span className="text-[22px] font-bold tracking-tight text-white">
          {project.name}
        </span>
        <PriorityBadge
          priority={project.priority}
          accentColor={project.accentColor}
        />
      </div>
      <p className="max-w-[380px] text-[13px] leading-[1.6] text-silver-muted">
        {project.description}
      </p>
      <div className="flex gap-5 pt-1">
        {project.meta.map((m) => (
          <MetaItem key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </motion.div>
  );
}
