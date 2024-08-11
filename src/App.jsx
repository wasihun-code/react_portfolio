import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import AllProjects from './components/AllProjects'

const App = () => {
  return (
    <div className='flex flex-col gap-y-16 sm:gap-y-32 mr-6 ml-6 my-4'>
      <Navbar />
      {/* <AllProjects /> */}
      <Hero />
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Footer />
    </div>
  )
}

export default App

