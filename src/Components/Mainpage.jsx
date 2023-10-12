import React from 'react'
import Nav from './Nav'
import About from './About'
import project from "../projects.json"
import Projects from './Projects'

const Mainpage = () => {
  return (
    <div className='h-screen'>
        <Nav/>
        <div className='h-1/2 '>
          <About/>
        </div>
        <div className='h-1/2 bg-slate-200'>
          <Projects projectLink={project} />
        </div>
    </div>
  )
}

export default Mainpage