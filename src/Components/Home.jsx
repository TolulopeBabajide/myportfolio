import React from 'react'
import Nav from './Nav'
import About from './About'
import myPicture from "../Subject.png"
import Mainpage from './Mainpage'


const Home = () => {
  return (
    <div className='h-screen md:overflow-hidden  bg-slate-950 '>
        <Nav/>
        <div className='flex p-12 justify-between'>
          <About/>
          <Mainpage/>          
        </div>
    </div>
  )
}

export default Home