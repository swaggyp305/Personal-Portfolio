import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 transition-all hover:shadow-lg">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-slate-900"
          >
            <Github size={16} />
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-slate-900"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
