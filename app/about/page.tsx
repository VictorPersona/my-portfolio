// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="min-h-screen py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Me
      </h1>

      <div className="max-w-4xl mx-auto px-4">
        {/* Bio */}
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Hello! I'm Gaurav Tupe — a passionate fullstack developer and aspiring
          cloud engineer. I enjoy building backend systems, designing scalable
          architecture, and exploring modern technologies like containerization,
          distributed systems, and OS-level optimization. I'm currently focused
          on advancing my cloud computing knowledge while sharpening my
          TypeScript and Go backend development skills.
        </p>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <span>TypeScript</span>
            <span>React / Next.js</span>
            <span>Tailwind CSS</span>
            <span>Node.js</span>
            <span>Go (Golang)</span>
            <span>MongoDB / PostgreSQL</span>
            <span>Docker</span>
            <span>Git & GitHub</span>
            <span>Linux</span>
          </div>
        </div>
      </div>
    </section>
  )
}
