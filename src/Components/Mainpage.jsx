import React from 'react'
import Nav from './Nav'
import About from './About'

const Mainpage = () => {
  return (
    <div className='h-screen'>
        <Nav/>
        <div className='h-1/2 p-2 bg-blue-500'>
          <About/>
        </div>
        <div className='h-1/2 p-2 bg-slate-200'>
          projects
        </div>
    </div>
  )
}

export default Mainpage