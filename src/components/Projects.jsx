import React from 'react'
import projectsData from '../projects.json'
import ProjectCard from './ProjectCard'
const Projects = () => {

  const latestProjects = projectsData.slice(0, 3)

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-6xl mb-8'>Projects</h1>
      <div className='grid grid-cols-3 gap-10'>
        {
          latestProjects.map((project) => (
            <ProjectCard project={project}/>
          ))
        }   
      </div>
      <a className='my-4 bg-primary text-zincWhite justify-self-center w-40 p-3 rounded-lg' href="#">View All Projects</a>
    </div>
  )
}

export default Projects
