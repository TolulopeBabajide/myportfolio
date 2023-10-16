import React from 'react'
import Nav from './Components/Nav'
import Mainpage from './Components/Mainpage'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import project from './projects.json'

const App = () => {
  return (
    <div className='h-screen'>
      <Mainpage/>
    </div>
  )
}

export default App