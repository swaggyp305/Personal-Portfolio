export const metadata = {
  title: "About | My Portfolio",
  description: "Learn more about me",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
      <h1 className="text-5xl font-bold text-slate-900">About Me</h1>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Who am I?</h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I&apos;m a passionate developer with a love for building beautiful and
            functional web applications. I enjoy working across the full stack and
            constantly learning new technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            What I do
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I specialize in modern web development, from frontend design and
            implementation to backend architecture. I&apos;m experienced with React,
            Next.js, TypeScript, and various backend technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "Python",
              "Full Stack Development",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-slate-600">
            I&apos;m always open to interesting conversations and opportunities.
            Feel free to reach out!
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800"
            >
              Send me an email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
