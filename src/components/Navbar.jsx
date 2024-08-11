import React from 'react'
import Dot from './Dot'

const Navbar = () => {
  return (
      <nav className="flex flex-col md:flex-row justify-between items-center text-lg p-4">
        <a href="https://github.com/wasihun-code" className="mb-4 md:mb-0">
          wasihun-code<Dot />
        </a>
        <ul className="flex flex-col md:flex-row justify-between gap-3 mb-4 md:mb-0">
          <li><a href="#" className="hover:text-primary">Home</a></li>
          <li><a href="#" className="text-primary hover:text-primary">Projects</a></li>
          <li><a href="#" className="hover:text-primary">About</a></li>
        </ul>
        <a href="#" className="hover:text-primary">Contact me</a>
      </nav>
  )
}

export default Navbar
