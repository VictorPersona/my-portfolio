import Image from 'next/image'
import avatar from '@/public/avatar.png'
import Link from 'next/link'
export default function HomePage() {
  return (
    <section className="flex flex-col-reverse md:flex-row  py-10 items-center  max-w-6xl mx-auto px-4 justify-between min-h-screen ">
      <div className="flex-1 text-center md:text-left ">
        <h1 className="text-4xl font-extrabold md:text-5xl text-gray-800 mb-4">
          Hi, I'm Gaurav Tupe
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
          Aspiring FullStack Developer
        </h2>
        <p className=" text-gray-500 mb-6">
          Learning and Building FullStack Websites
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/projects"
            className="inline-block px-6 py-2 bg-black text-white rounded transition hover:bg-gray-800"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            className="inline-block px-6 py-2 bg-black text-white rounded transition hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <Image
          src={avatar}
          height={300}
          width={300}
          alt="avatar"
          className="rounded-full shadow-lg"
        ></Image>
      </div>
    </section>
  )
}
