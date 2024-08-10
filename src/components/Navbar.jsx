import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between text-lg">
      <a src='https://github.com/wasihun-code'>wasihun-code<span className='text-primary text-3xl'>.</span></a>
      <ul className='flex justify-between gap-3 '>
        <li> <a href="#" className='hover:text-primary'> Home </a> </li>
        <li> <a href="#" className='text-primary hover:text-primary'> Projects </a> </li>
        <li> <a href="#" className='hover:text-primary'> About </a> </li>
      </ul>
      <a href='#'> Contact me </a>
    </nav>
  )
}

export default Navbar
