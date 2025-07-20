

interface ProjectCardProps {
  title: string
  description: string
  github: string
  demo?: string
}

export default function ProjectCard({
  title,
  description,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-x-4">
        <a
          href={github}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Github
        </a>
        {typeof demo === 'string' && (
          <a
            href={demo}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
