import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex align-center p-3 bg-slate-200 text-gray-800 h-12'>
        <div className='w-1/4' >
            <h1>Tolulope</h1>
        </div>
        <div  className='flex w-2/4 justify-evenly '>
            <div className="nav">
              <Link to='/'>Home</Link> 
            </div>
            <div className="nav">
              <Link to="/skills">Skills</Link>  
            </div>
            <div className="nav">
              <Link to='/projects' >Projects</Link> 
            </div>
            <div className="nav">
              <Link>Connect</Link>
            </div>
        </div>
    </div>
  )
}

export default Nav