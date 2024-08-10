import React from 'react'
import pic from '../assets/picture.jpg'

const Projects = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-6xl mb-8'>Projects</h1>
      <div className='grid grid-cols-3 gap-10'>   
        <div className='flex flex-col gap-7 w-4/5'>
          <img className='w-4/4 h-64 rounded-3xl' src={pic} alt='project1' />
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Hypothyroid</h1>
            <p className='text-lessBlack'>Hypothyroid disease detector using machine learning algorithms</p>
          </div>
        </div>
        <div className='flex flex-col gap-7 w-4/5'>
          <img className='w-4/4 h-64 rounded-3xl' src={pic} alt='project1' />
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Hypothyroid</h1>
            <p className='text-lessBlack'>Hypothyroid disease detector using machine learning algorithms</p>
          </div>
        </div>
        <div className='flex flex-col gap-7 w-4/5'>
          <img className='w-4/4 h-64 rounded-3xl' src={pic} alt='project1' />
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Hypothyroid</h1>
            <p className='text-lessBlack'>Hypothyroid disease detector using machine learning algorithms</p>
          </div>
        </div>
      </div>
      <a className='my-4 bg-primary text-zincWhite justify-self-center w-40 p-3 rounded-lg' href="#">View All Projects</a>
    </div>
  )
}

export default Projects
