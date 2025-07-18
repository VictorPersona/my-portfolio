import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <ProjectCard
            title="Gym Blog Site"
            description="A personal gym blog built using React, TypeScript, and Tailwind CSS. Includes sections for routines, diet, and transformation updates."
            github="https://github.com/gauravtupe/gym-blog"
            demo="https://github.com/VictorPersona/personal-journal-app"
          />
          <ProjectCard
            title="MERN To-Do App"
            description="A fullstack to-do app using MongoDB, Express, React, and Node.js. Includes JWT auth, protected routes, and task CRUD."
            github="https://github.com/VictorPersona/E-Commerce"
          />
          <ProjectCard
            title="Compiler Simulator"
            description="Academic project to simulate a basic compiler pipeline. Built using C++ and Lex/Yacc."
            github="https://github.com/gauravtupe/compiler-sim"
          />
        </div>
      </div>
    </section>
  )
}
