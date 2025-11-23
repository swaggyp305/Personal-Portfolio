export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A description of your first project and what you built.",
    tags: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/yourusername/project-one",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Details about your second project and its features.",
    tags: ["Python", "Data Science"],
    link: "https://example.com/project-two",
  },
  {
    id: "3",
    title: "Project Three",
    description: "Your third project showcasing different skills.",
    tags: ["Full Stack", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project-three",
  },
]
