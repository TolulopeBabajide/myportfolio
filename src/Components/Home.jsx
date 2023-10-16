import React from 'react'
import Nav from './Nav'
import About from './About'
import myPicture from "../Subject.png"


const Home = () => {
  return (
    <div>
        <Nav/>
        <div className='flex p-12 md:justify-evenlylg:justify-evenly justify-between'>
          <About/>
          <div className='w-2/4 flex justify-center drop-shadow-2xl '>
            <img className='max-w-xl h-3/4 px-5 pt-5 bg-slate-700 ' src={myPicture} alt="my picture" />
          </div>
        </div>
    </div>
  )
}

export default Home