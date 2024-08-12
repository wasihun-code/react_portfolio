import React from 'react'
import projectsData from '../projects.json'
import ProjectCard from './ProjectCard'
import Dot from './Dot'

const Projects = () => {

  const latestProjects = projectsData.slice(0, 3)

  return (
    <div id='projects' className='flex flex-col gap-3'>
      <h1 className='text-6xl mb-8'>Projects<Dot size="text-7xl" /></h1>
      <div className='grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
        {
          latestProjects.map((project) => (
            <div className='flex flex-col gap-7 w-4/5'>
              <ProjectCard project={project}/>
            </div>
          ))
        }   
      </div>
      <a className='my-4 bg-primary text-zincWhite w-40 p-3 rounded-lg place-content-center justify-center' href="#">View All Projects</a>
    </div>
  )
}

export default Projects
