import React from 'react'

const Footer = () => {
  return (
    <footer className="text-lg flex flex-col items-center gap-4 sm:gap-2 md:flex-row md:justify-between md:items-center">
      <ul className='flex flex-row items-center gap-2 md:flex-row md:gap-3'>
        <li><a href="#" className='text-primary hover:text-primary'>LinkedIn</a></li>
        <li><a href="#" className='hover:text-primary'>GitHub</a></li>
        <li><a href="#" className='hover:text-primary'>Telegram</a></li>
      </ul>
      <div>
        <h1>&copy; 2024 All rights reserved</h1>
      </div>
    </footer>
  )
}

export default Footer
