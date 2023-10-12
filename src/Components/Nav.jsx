import React from 'react'

const Nav = () => {
  return (
    <div className='flex align-center p-3 bg-slate-200 text-gray-800 h-12'>
        <div className='w-1/4' >
            <h1>Tolulope</h1>
        </div>
        <div  className='flex w-2/4 justify-evenly '>
            <div className="nav">Home</div>
            <div className="nav">Skills</div>
            <div className="nav">Projects</div>
            <div className="nav">Connect</div>
        </div>
    </div>
  )
}

export default Nav