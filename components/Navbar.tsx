'use client'

import Link from 'next/link'

export default function navbar() {
  return (
    <nav className=" bg-white shadow-md px-4 py-6 sticky top-0 z-50">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <div className="text-xl">My Portfolio</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-black">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
