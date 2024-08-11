import React from 'react'
import Dot from './Dot'
import picture from '../assets/picture.jpg'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center'>
      <div className='flex flex-col md:gap-4 gap-5 md:ml-5'>        
          <h3 className='text-2xl md:text-5xl'>Hello, Lets Get In Touch<Dot size='text-5xl'/></h3>
          <p className='text-xl text-slateGray w-full md:w-3/4'>
            I am eager to hear what you have to say. I want to be part of the
            next big thing you want to build. 
          </p>
          <ul className='flex flex-col gap-4 my-3'>
            <li><a className='text-lessBlack text-xl' href="#">wasihunageru@gmail.com</a></li>
            <li><a className='text-lessBlack text-xl' href="#">+91 953 753 6476</a></li>
          </ul>
      </div>
      <img 
        className='mt-12 w-3/4  lg:w-1/3 lg:mr-24 border-double border-8 border-spacing-12  border-slateGray rounded-full' 
        src={picture} 
        alt="profile" 
      />
    </div>
  )
}

export default Contact
