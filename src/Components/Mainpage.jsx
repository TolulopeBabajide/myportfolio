import React from 'react'
import Nav from './Nav'
import About from './About'
import project from "../projects.json"
import Projects from './Projects'
import Skills from './Skills'

const Mainpage = () => {
  return (
    <div >
        <Nav/>
        <div className=''>
          <About/>
        </div>
        
        <div className='h-fit md:flex justify-evenly text-white p-2 bg-slate-700'>
          <div className='md:w-1/2 w-full'>
            <Skills/>
          </div>
          <div className='md:w-1/2 w-full'>
            <Projects projectLink={project} />
          </div>
          
          
        </div>
    </div>
  )
}

export default Mainpage