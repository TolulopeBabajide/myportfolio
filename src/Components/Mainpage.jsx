import React from 'react'
import Nav from './Nav'
import About from './About'
import project from "../projects.json"
import Projects from './Projects'
import Skills from './Skills'
import myPicture from "../Subject.png"


const Mainpage = () => {
  return (
    <div >
        
          <div className='w-2/4 drop-shadow-2xl'>
            <img className='max-w-xl h-3/4 px-5 pt-5 bg-slate-700 ' src={myPicture} alt="my picture" />
          </div>
        
    
    </div>
  )
}

export default Mainpage