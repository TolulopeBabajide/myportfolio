import React from 'react'
import {FaHome} from "react-icons/fa"
import {BsPersonWorkspace} from 'react-icons/bs'
import {MdWork, MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Nabar = () => {
  return (
    <div className='flex fixed bottom-0 w-full px-6 py-3 items-center justify-between align-center text-slate-200 bg-gray-800 h-fit'>
        
        
            <div className=" justify-center text-3xl">
              <Link to='/'><FaHome/></Link> 
            </div>
            <div className=" justify-center text-3xl">
              <Link to="/skills"><BsPersonWorkspace/></Link>  
            </div>
            <div className=" justify-center text-3xl">
              <Link to='/projects' ><MdWork/></Link> 
            </div>
            <div className=" justify-center text-3xl">
              <Link><MdEmail/></Link>
            </div>
        
    </div>
  )
}

export default Nabar