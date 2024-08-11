import React from 'react'
import pic from '../assets/picture.jpg'


const ProjectCard = ({project, title_size="", desc_size='text-xl'}) => {
  return (
    <>
      <img className='h-72 rounded-3xl' src={pic} alt='project1' />
      <div className='flex flex-col gap-3'>
        <h1 className={`text-4xl md:text-5xl `}>{project.title}</h1>
        <p className={`text-lessBlack text-xl md:text-2xl`}>{project.description}</p>
      </div>
    </>
  )
}

export default ProjectCard
