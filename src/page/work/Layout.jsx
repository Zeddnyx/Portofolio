import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Work1() {

  useEffect(() => {
    AOS.init({duraion:800})
  }, [])

  return <section>
    <div data-aos='fade-top' className={div}>
      <Link to='/'><span className={span}>Work1</span></Link>
      <Link to='/work2'><span className={span}>Work2 </span></Link>
      <Link to='/work3'><span className={span}>Work3</span></Link>
    </div>
    <Outlet />
  </section>
}

const div = 'flex my-10 border-b-2 p-3 border-gray1 justify-between sm:justify-around'
const span = 'hover:text-cyan hover:border-b-2 border-cyan p-4 hover:bg-bg2'
