import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Service'
import Footer from './components/Footer'
import WorkPage from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <WorkPage/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App