import React from 'react'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import FadeInSection from '../components/FadeInSection'


const HomePage = () => {
  return (
    <>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>
    </>
  )
}

export default HomePage
