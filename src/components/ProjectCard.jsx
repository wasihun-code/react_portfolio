import React from 'react'
import pic from '../assets/picture.jpg'


const ProjectCard = ({project, img_class}) => {
  return (
    <>
      <div className='relative group'>
        <img className={`${img_class} w-full`} src={`image${id}.jpg`} alt='project1' />
        <div className="absolute inset-0 flex gap-2 items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
          <a href={project.preview} className="bg-primary  hover:border-2 hover:bg-white hover:text-lessBlack text-white px-4 py-2 m-2 rounded-lg">
              View Project
            </a>
            <a href={project.code} className="bg-primary hover:border-2 hover:bg-white hover:text-lessBlack text-white px-4 py-2 m-2 rounded-lg">
              View Code
            </a>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className={`text-3xl md:text-3xl font-bold `}>{project.title}</h1>
        <p className={`text-lessBlack text-xl md:text-2xl`}>{project.description}</p>
        <p className='text-xl md:text-2xl text-lessBlack'><span className='font-bold'>Technologies Used:</span> {project.Tech}</p>
      </div>
    </>
  )
} 


export default ProjectCard
