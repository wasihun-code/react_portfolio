import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import AllProjects from './components/AllProjects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='flex flex-col gap-y-32 mr-6 ml-6 my-4'>
      <Navbar />
      <Contact />
      {/* <AllProjects /> */}
      {/* <Hero /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Footer />
    </div>
  )
}

export default App

