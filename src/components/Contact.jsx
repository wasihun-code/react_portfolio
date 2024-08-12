import React from 'react'
import Dot from './Dot'
import picture from '../assets/picture.jpg'
import FadeInSection from './FadeInSection'

const Contact = () => {
  return (
    <FadeInSection>
      <div id='contact' className='flex flex-col md:flex-row gap-10 md:gap-6'>
          <div className='flex flex-col gap-5 md:gap-4'>        
              <h3 className='text-3xl md:text-4xl lg:text-5xl'>Lets Get In Touch<Dot size='text-5xl'/></h3>
              <p className='text-xl w-3/4 md:w-3/3 text-slateGray lg:w-3/4 md:w-4/4'>
                I am eager to hear what you have to say. I want to be part of the
                next big thing you want to build. 
              </p>
            
          </div>
          <ul className='flex flex-col gap-4 my-3'>
              <li><a className='text-lessBlack text-xl' href="#">wasihunageru@gmail.com</a></li>
              <li><a className='text-lessBlack text-xl' href="#">+91 953 753 6476</a></li>
          </ul>      
        </div>
    </FadeInSection>
  )
}

export default Contact
