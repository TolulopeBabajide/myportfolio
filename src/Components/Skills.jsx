import React from 'react'
import Mainpage from './Mainpage'
import Nav from './Nav'
import {FaHtml5, FaCss3} from 'react-icons/fa'
import {BiLogoJavascript} from 'react-icons/bi'

const Skills = () => {
  return (
    <div>
        <Nav/>
        <div className='flex p-12 justify-between'>
            <div className="w-1/2">
                <h1 className='text-5xl'>I'm specialized in</h1>
                <p className='text-3xl'> &gt; Backend Software Development </p>

                <div className='m-5'>
                    <h2 className="p-1 border-s-2 text-left border-s-indigo-500">Frontend Development</h2>
                        <div className='flex justify-evenly'>
                            
                            <div className='flex items-center'>
                                <FaHtml5/>
                                <p>HTML5</p>
                            </div>
                            <div className='flex items-center'>
                                <FaCss3/>
                                <p>CSS3</p>
                            </div>
                            <div className='flex items-center'>
                                <BiLogoJavascript/>
                                <p>Javascript</p>
                            </div>
                            <div className='flex items-center'>
                                <BiLogoJavascript/>
                                <p>React</p>
                            </div>
                            <div className='flex items-center'>
                                <BiLogoJavascript/>
                                <p>Tailwind</p>
                            </div>
                            <div className='flex items-center'>
                                <BiLogoJavascript/>
                                <p>Bootstrap</p>
                            </div>
                        
                        </div>
                </div>

            <hr className='m-3'/>
                <div className='m-5'>
                    <h2 className=" p-1 border-s-2 text-left border-s-indigo-500">Backend Development</h2>
                        <div className='flex justify-evenly'>
                            
                            <div className='flex items-center'>
                                <FaHtml5/>
                                <p>HTML5</p>
                            </div>
                            <div className='flex items-center'>
                                <FaCss3/>
                                <p>Node.js</p>
                            </div>
                            <div className='flex items-center'>
                                <BiLogoJavascript/>
                                <p>Javascript</p>
                            </div>
                        
                        </div>
                </div>
                
                
                
            </div>
            <Mainpage/>
        </div>
        
        

        
    </div>
  )
}

export default Skills