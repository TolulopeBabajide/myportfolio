import React from 'react'
import Nav from './Nav'

const Mainpage = () => {
  return (
    <div className='h-screen'>
        <Nav/>
        <div className='h-1/2 flex justify-between p-2 bg-blue-500'>
          <div>picture</div>
          <div>about</div>
        </div>
        <div className='h-1/2 p-2 bg-slate-200'>
          projects
        </div>
    </div>
  )
}

export default Mainpage