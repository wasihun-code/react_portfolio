import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-between text-lg ">
      <ul className='flex justify-between gap-3 '>
        <li> <a href="#" className='text-primary hover:text-primary'> Linkedin </a> </li>
        <li> <a href="#" className='hover:text-primary'> Github </a> </li>
        <li> <a href="#" className='hover:text-primary'> Telegram </a> </li>
      </ul>
      <div>
        <h1>&copy 2024 All rights Reserved </h1>
      </div>
    </footer>
  )
}

export default Footer
