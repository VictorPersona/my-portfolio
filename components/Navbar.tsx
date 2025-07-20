'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  // const [isDark, setIsDark] = useState(false)
  // const changeTheme = () => {
  //   setIsDark(!isDark)
  // }
  return (
    <nav className="bg-white px-4 py-6 rounded shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between align-center">
        <Link href="/">
          <div className="text-xl text-gray-800 font-bold">My Portfolio</div>
        </Link>

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
          {/* <button
            onClick={changeTheme}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Dark
          </button> */}
        </div>
      </div>
    </nav>
  )
}
