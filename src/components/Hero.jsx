import React from 'react'
import picture from '../assets/picture.jpg'
const Hero = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col gap-5'>
        <h3 className='text-2xl'>Hey, I am Wasihun Ageru</h3>
        <h1 className='text-8xl'><span className='text-primary'>Fullstack</span>< br/> Developer</h1>
        <p className=' w-3/4 text-xl text-slateGray'>
          I am a fullstack developer with proficiency in both backend 
          and frontend of website development. Lets get in touch. I look
          forward to hearing from you.
          </p>
        <ul className='flex flex-row gap-3'>
          <li><a className='p-3 rounded-xl bg-primary text-zincWhite' href="#">Email Me Here</a></li>
          <li><a className='p-3 rounded-xl bg-zincWhite border-primary border' href="#">My Projects</a></li>
        </ul>
      </div>
        <img className='rounded-full w-2/4 h-full mr-20' src={picture} alt="" />
    </div>
  )
}

export default Hero
