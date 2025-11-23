import { AnimatedShowpiece } from "@/components/animated-showpiece"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 bg-white">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 md:text-6xl">
              Hello, I&apos;m a Developer
            </h1>
            <p className="mt-4 text-xl text-slate-600">
              I build beautiful and functional web experiences
            </p>
          </div>

          {/* Animated Showpiece */}
          <AnimatedShowpiece />

          {/* CTA Section */}
          <div className="flex gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
            >
              View My Work
            </a>
            <a
              href="/about"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
          <p className="mt-2 text-slate-600">
            A selection of my recent work and experiments
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              View all projects →
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
    </div>
  )
}
