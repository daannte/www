import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { ReactNode } from "react";
import Button from "./button";

interface ProjectCardProps {
  name: string
  description: string
  demo?: string
  github: string
  icon?: ReactNode
}

export default function ProjectCard({ name, description, demo, github, icon }: ProjectCardProps) {
  return (
    <div className="group bg-card h-64 rounded-xl flex flex-col border border-button p-2">
      <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-button transition-transform duration-200 group-hover:scale-102 group-hover:shadow-lg">
        <div className="absolute top-1/2 left-1/2 flex h-full translate-x-[-50%] translate-y-[-50%] gap-32">
          <span className="h-full border-l border-dashed border-button"></span>
          <span className="h-full border-r border-dashed border-button"></span>
        </div>
        <div className="absolute top-1/2 left-1/2 flex flex-col w-full translate-x-[-50%] translate-y-[-50%] gap-24">
          <span className="w-full border-t border-dashed border-button"></span>
          <span className="w-full border-b border-dashed border-button"></span>
        </div>
        {icon && (
          <div className="relative z-10 bg-card p-3 flex items-center justify-center border-button border rounded-xl">
            {icon}
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="flex items-center gap-2">
            {demo && (
              <Link href={demo} target="_blank" rel="noopener noreferrer">
                <Button>
                  <FiExternalLink />
                </Button>
              </Link>
            )}
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Button>
                <FiGithub />
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-accent text-sm">{description}</p>
      </div>
    </div>
  )
}
