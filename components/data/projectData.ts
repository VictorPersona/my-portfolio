export type Project = {
  title: string
  description: string
  stack: string[]
  github: string
  live: string
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'A sleek, responsive portfolio built with Next.js and Tailwind CSS.',
    stack: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://your-portfolio.vercel.app',
  },
  {
    title: 'Todo App',
    description: 'A fullstack MERN to-do list app with JWT auth and MongoDB.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/todo-app',
    live: 'https://todo-app.vercel.app',
  },
]
