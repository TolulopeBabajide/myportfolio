import React from 'react'
import myPicture from "../Subject.png"

const About = () => {
  return (
    <div className='flex  h-full md:justify-evenly lg:justify-evenly justify-between items-center'>
        <div className='w-1/4  flex justify-center h-full items-center'>
            <img className='max-w-xl h-full px-5 pt-5 bg-slate-700' src={myPicture} alt="my picture" />
        </div>
        <div className='w-2/4 md:w-3/4 lg:w-3/4 '>
            <h1 className='text-5xl'>Tolulope Babajide</h1>
            <h2 className='text-2xl'>Fullstack Software Developer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, non! Magni minima tenetur impedit. Nemo?</p>
        </div>
    </div>
  )
}

export default About