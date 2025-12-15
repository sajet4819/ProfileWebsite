import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App