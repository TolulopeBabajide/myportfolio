import React from 'react'
import Nav from './Nav'
import About from './About'
import project from "../projects.json"
import Projects from './Projects'
import Skills from './Skills'
import myPicture from "../Subject.png"


const Mainpage = () => {
  return (
    <div className="" >
        
          <div className='md:w-2/4 w-2/4 md:h-full drop-shadow-2xl'>
            <img className='md:max-w-xl md:h-3/4 px-5 pt-5 bg-slate-700 ' src={myPicture} alt="my picture" />
          </div>
        
    
    </div>
  )
}

export default Mainpage