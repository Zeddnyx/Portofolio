import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './page/Nav'
import Home from './page/Home'
import About from './page/About'
import Expe from './page/Experience'
import Work from './page/Work'
import Contact from './page/Contact'
import Work1 from './page/work/Work1.jsx'
import Work2 from './page/work/Work2.jsx'
import Work3 from './page/work/Work3.jsx'

function App() {

  return (
  <Router>
    <div className='text-white bg-gray1 dark:bg-bg3 relative overflow-hidden'>
      <Nav />
      <div className='px-6 dark:bg-bg3 h-full w-full sm:px-20 lg:px-40'>
        <Home />
        <About />
        <Expe />

        <Routes>
          <Route path="/" element={<Work1 />} />
          <Route path="/freelance" element={<Work2 />} />
          <Route path="/work3" element={<Work3 />} />
        </Routes>

        <Contact />
      </div>
    </div>
  </Router>
  )
}

export default App
