import React from 'react'
import pic from '../assets/picture.jpg'


const ProjectCard = ({project, title_size="text-3xl", desc_size='text-xl'}) => {
  return (
    <>
      <img className='w-4/4 h-72 rounded-3xl' src={pic} alt='project1' />
      <div className='flex flex-col gap-3'>
        <h1 className={title_size}>{project.title}</h1>
        <p className={`text-lessBlack ${desc_size}`}>{project.description}</p>
      </div>
    </>
  )
}

export default ProjectCard
