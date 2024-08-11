import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="text-lg mb-8 mt-12 lg:mt-12 flex flex-col items-center gap-4 sm:gap-2 md:flex-row md:justify-between md:items-center">
      <ul className='flex flex-row items-center gap-2 md:flex-row md:gap-8'>
        <li>
            <a href="https://www.linkedin.com/in/wasihun-ageru-9a7336196/" 
               className='text-primary hover:text-primary text-2xl'>
                  <FaLinkedinIn />
            </a>
        </li>
        <li><a href="https://www.github.com/wasihun-code" className='hover:text-primary text-2xl'><FaGithub /></a></li>
        <li><a href="https://t.me/eneManegn" className='hover:text-primary text-2xl'><FaTelegram /></a></li>
      </ul>
      <div>
        <h1>&copy;2024 All rights reserved</h1>
      </div>
    </footer>
  )
}

export default Footer
