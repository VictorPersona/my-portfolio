import Image from 'next/image'
import Link from 'next/link'
import avatar from '@/public/avatar.png'

export default function HomePage() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen py-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I'm Gaurav
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
          Aspiring Fullstack Developer
        </h2>
        <p className="text-gray-500 mb-6">
          Learning and Building Fullstack websites
        </p>
        <Link href="/projects">
          <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            View Projects
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <Image
          src={avatar}
          alt="avatar-image"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        ></Image>
      </div>
    </section>
  )
}
