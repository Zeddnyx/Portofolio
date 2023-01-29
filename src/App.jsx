import React from 'react'
import Nav from './page/Nav'
import Home from './page/Home'
import About from './page/About'
// import Work from './page/Work'
// import Contact from './page/Contact'
// import Footer from './page/Footer'

function App() {

  return (
    <div className='text-white bg-bg3 relative'>
      <Nav />
      <div className='px-6 bg-bg3 h-full w-full sm:px-20 lg:px-40'>
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App
