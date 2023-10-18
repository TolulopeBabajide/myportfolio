import React from 'react'
import Nav from './Components/Nav'
import Mainpage from './Components/Mainpage'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import project from './projects.json'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects"  element={<Projects projectLink={project}/>}/>
    </Routes>
  )
}

export default App