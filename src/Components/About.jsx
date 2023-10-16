import React from 'react'
import myPicture from "../Subject.png"

const About = () => {
  return (
    <div className='flex p-12 md:justify-evenlylg:justify-evenly justify-between'>
        <div className='w-2/4 md:w-3/4 lg:w-3/4'>
            <h1 className='text-7xl text-slate-700' > &gt;Tolulope Babajide <span className=''>_</span> </h1>
            <h2 className='text-5xl text-slate-500'>Fullstack Software Developer</h2>
            <p className='text-slate-900'> Passionate about leveraging technology to proffer solutions to businesses and improve business development. Seeking an entry-level software developer position to apply my strong analytical and problem-solving skills gained from my background in business, as well as my current knowledge of programming languages.</p>
            
            
            <div className='p-4 m-4 text-white bg-slate-900'>
                <p className='text-'>
                    <span className='text-blue-500'>const</span> <span className='text-yellow-100'>services</span> = [
                </p>
                <div className=' bg-slate-400'>
                    <ol className='p-3 text-red-300 bg-slate-900'>
                        <li>'Frontend Development'</li>
                        <li>'Backend Development'</li>
                    </ol>
                </div>
                
                    
                    
                <p>] <br /> <span className='text-blue-500'>if</span> (have_a_project) <span className='text-blue-500'>navigate</span><span className='text-red-300'>('/contact)</span></p> 
             </div>
        </div>
        <div className='w-2/4 flex justify-center drop-shadow-2xl '>
            <img className='max-w-xl h-3/4 px-5 pt-5 bg-slate-700 ' src={myPicture} alt="my picture" />
        </div>

    </div>
  )
}

export default About