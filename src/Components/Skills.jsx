import React from 'react'
import Mainpage from './Mainpage'
import Nav from './Nav'
import {FaHtml5, FaCss3, FaNodeJs, FaBootstrap, FaReact} from 'react-icons/fa'
import {BiLogoJavascript} from 'react-icons/bi'
import {SiExpress, SiMongoose, SiMongodb, SiTailwindcss, SiRedux} from 'react-icons/si'

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
                        <div className='flex col-4 justify-evenly'>
                            
                            <div className='flex items-center'>
                                <FaHtml5/>
                                <p className='ms-1'>HTML5</p>
                            </div>
                            <div className='flex items-center'>
                                <FaCss3/>
                                <p className='ms-1'>CSS3</p>
                            </div>
                            <div className='flex items-center'>
                                <BiLogoJavascript/>
                                <p className='ms-1'>Javascript</p>
                            </div>
                            <div className='flex items-center'>
                                <FaReact/>
                                <p className='ms-1'>React</p>
                            </div>
                            <div className='flex items-center'>
                                <SiRedux/>
                                <p className='ms-1'>Redux</p>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss/>
                                <p className='ms-1'>Tailwind</p>
                            </div>
                            <div className='flex items-center'>
                                <FaBootstrap/>
                                <p className='ms-1'>Bootstrap</p>
                            </div>
                        
                        </div>
                </div>

            <hr className='m-3'/>
                <div className='m-5'>
                    <h2 className=" p-1 border-s-2 text-left border-s-indigo-500">Backend Development</h2>
                        <div className='flex justify-evenly'>
                            
                            <div className='flex items-center'>
                                <FaHtml5/>
                                <p className='ms-1'>HTML5</p>
                            </div>
                            <div className='flex items-center'>
                                <FaNodeJs/>
                                <p className='ms-1'>Node.js</p>
                            </div>
                            <div className='flex items-center'>
                                <SiMongodb/>
                                <p className='ms-1'>MongoDB</p>
                            </div>
                            <div className='flex items-center'>
                                <SiMongoose/>
                                <p className='ms-1'>Mongoose</p>
                            </div>
                            <div className='flex items-center'>
                                <SiExpress/>
                                <p className='ms-1'>Express</p>
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