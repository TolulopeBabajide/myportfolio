import React from 'react'
import 'animate.css';


const About = () => {
  return (

        <div className='w-2/4 '>
            <h1 className='text-7xl my-4 text-slate-200 ' > &gt;Tolulope Babajide <span className='animate__animated animate__flash animate__infinite animate__slow'>_</span> </h1>
            <h2 className='text-5xl my-4 text-slate-200'>Fullstack Software Developer</h2>
            <p className='text-slate-400 py-4'> crafting digital solutions that work and inspire. Let's turn ideas into reality together.</p>
            
            
            <div className='p-4 m-4 text-white bg-slate-900'>

                <p className='text-'>
                    <span className='text-blue-500'>const</span> <span className='text-yellow-100'>services</span> = [
                </p>
                <div className=''>
                    <ol className='p-3 text-red-300'>
                        <li>'Frontend Development'</li>
                        <li>'Backend Development'</li>
                    </ol>
                </div>
                
                    
                    
                <p>] <br /> <span className='text-blue-500'>if</span> (have_a_project) <span className='text-blue-500'>navigate</span><span className='text-red-300'>('/contact)</span></p> 
             </div>
        </div>
        

  )
}

export default About