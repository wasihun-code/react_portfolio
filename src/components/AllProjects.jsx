import React from 'react'
import ProjectCard from './ProjectCard'
import projectData from '../projects.json'

const AllProjects = () => {
  return (
    <>
      <h1 className='text-6xl'>Projects</h1>
      <div className='flex flex-col gap-y-52 md:gap-y-36'>
          {
            projectData.map((project) => (
              <div className='flex flex-col gap-10 h-96'>
                <ProjectCard project={project} title_size='text-5xl' desc_size='text-2xl'/>
              </div>
            ))
          }   
    </div>
  </>
  )
}

export default AllProjects
