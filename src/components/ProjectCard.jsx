import React from 'react'
import pic from '../assets/picture.jpg'


const ProjectCard = ({project}) => {
  return (
    <div className='flex flex-col gap-7 w-4/5'>
        <img className='w-4/4 h-64 rounded-3xl' src={pic} alt='project1' />
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl'>{project.title}</h1>
          <p className='text-lessBlack'>{project.description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
