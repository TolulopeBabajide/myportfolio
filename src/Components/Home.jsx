import React from 'react'
import Nav from './Nav'
import About from './About'
import myPicture from "../Subject.png"
import Mainpage from './Mainpage'


const Home = () => {
  return (
    <div>
        <Nav/>
        <div className='flex p-12 md:justify-evenly lg:justify-evenly justify-between'>
          <About/>
          <Mainpage/>          
        </div>
    </div>
  )
}

export default Home