import Button from "@/components/button";
import ProjectCard from "@/components/project-card";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import projects from "@/data/projects";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="py-12 sm:py-16 px-6 leading-relaxed">
      <div className="flex justify-between items-center mt-6 sm:mt-12">
        <div className="text-3xl tracking-tight font-medium">Hi, I'm Dante</div>
        <ThemeToggle />
      </div>
      <p className="mt-6 text-accent">
        I'm a university student in Canada, graduating in December 2025. I enjoy exploring and tinkering with new technologies, especially when it comes to self-hosting, home lab setups, and building things from scratch.
      </p>
      <p className="mt-6 text-accent">
        Outside of tech, I'm into football (the real kind), anime, and recently got into photography. I have an appreciation for minimalism in design, code, or how I approach daily life. I also like projects that blend creativity and problem solving, whether it's through a camera lens or a terminal.
      </p>
      <div className="flex items-center justify-start gap-4 mt-8">
        <Link href="https://github.com/daannte" target="_blank" rel="noopener noreferrer">
          <Button>
            <FiGithub /> Github
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/dantekirsman" target="_blank" rel="noopener noreferrer">
          <Button>
            <FiLinkedin /> Linkedin
          </Button>
        </Link>
      </div>
      <div className="mt-16 sm:mt-20 flex flex-col">
        <div className="text-xl font-medium tracking-tight">Projects</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {projects.map((project) => (
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
      </div>
    </div>
  );
}
