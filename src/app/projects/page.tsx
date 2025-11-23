import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export const metadata = {
  title: "Projects | My Portfolio",
  description: "All my projects and work",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
      <div>
        <h1 className="text-5xl font-bold text-slate-900">Projects</h1>
        <p className="mt-4 text-xl text-slate-600">
          Here are some of the projects I&apos;ve worked on
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
