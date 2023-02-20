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
      <Link to='/'><span className={span}>TemanTrip</span></Link>
      <Link to='/work2'><span className={span}>Work </span></Link>
      <Link to='/work3'><span className={span}>Work </span></Link>
    </div>
    <Outlet />
  </section>
}

const div = 'flex my-10 border-b-2 p-3 border-LightDark dark:border-gray1 justify-between sm:justify-around dark:hover:bg-bg2'
const span = 'hover:text-bgLight3 dark:hover:text-cyan text-bg2 dark:text-gray1 font-semibold hover:border-b-2 border-bgLight3 dark:border-cyan p-3 '
