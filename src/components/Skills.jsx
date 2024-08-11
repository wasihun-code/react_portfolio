import React from 'react'
import skillsData from '../skills.json'
import Dot from './Dot';

const Skills = () => {
  
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-6xl mb-8'>Skills<Dot size="text-6xl"/></h1>
      <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>   
        {skillsData.map((item, index) => (
          <div key={index} className='flex flex-col gap-3'>
            <h1 className='text-3xl font-bold mb-3'>{item.category}</h1>
            <div className='flex flex-col gap-1'>
              {item.skills.map((skill, idx) => (
                <h2 key={idx} className='text-lessBlack text-xl text-zinc-400'>{skill}</h2>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
