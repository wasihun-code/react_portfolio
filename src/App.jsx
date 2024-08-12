import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FadeInSection from './components/FadeInSection'


const App = () => {
  return (
    <div className='flex flex-col gap-y-32 mr-6 ml-6 my-4 font-body'>
      <Navbar />

        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection>
          <Projects />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>
      
      <Footer />
    </div>
  )
}

export default App

