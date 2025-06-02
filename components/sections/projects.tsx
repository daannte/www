import { motion } from "motion/react"
import ANIMATION_VARIANTS from "@/lib/animations"
import PROJECTS from "@/data/projects"

import ProjectCard from "@/components/ui/project-card"

export default function Projects() {
  return (
    <motion.section
      className="mt-16 sm:mt-20 flex flex-col"
      variants={ANIMATION_VARIANTS.item}
    >
      <h2 className="text-xl font-medium tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            demo={project.demo}
            github={project.github}
            icon={project.icon}
          />
        ))}
      </div>
    </motion.section>
  )
}
