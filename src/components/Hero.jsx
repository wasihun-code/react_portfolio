import React from 'react'
import picture from '../assets/picture.jpg'
import Dot from './Dot'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center'>
      <div className='flex flex-col md:gap-4 gap-5 md:ml-5'>        
          <h3 className='text-2xl'>Hey, I am Wasihun Ageru<Dot /></h3>
          <h1 className='text-5xl md:text-8xl'><span className='text-primary'>Fullstack</span> Developer</h1>
          <p className='text-xl text-slateGray w-full md:w-3/4'>
            I am a fullstack developer with proficiency in both backend 
            and frontend of website development. Let's get in touch. I look
            forward to hearing from you.
          </p>
          <ul className='flex flex-row gap-3 my-3'>
            <li><a className='p-3 rounded-xl bg-primary text-zincWhite' href="#">Email Me Here</a></li>
            <li><a className='p-3 rounded-xl bg-zincWhite border-primary border' href="#">My Projects</a></li>
          </ul>
      </div>
      <img className='mt-12  lg:w-2/3 lg:mr-24 border-double border-8 border-spacing-12  border-slateGray rounded-full' src={picture} alt="profile" />
    </div>
  )
}

export default Hero
