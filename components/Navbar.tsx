'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white px-4 py-6 rounded shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between align-center">
        <div className="text-xl text-gray-800 font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-black">
            Projects
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
