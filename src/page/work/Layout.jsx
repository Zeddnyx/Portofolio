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
      <Link to='/'><div className={span}>TemanTrip</div></Link>
      <Link to='/work2'><div className={span}>Work </div></Link>
      <Link to='/work3'><div className={span}>Work </div></Link>
    </div>
    <Outlet />
  </section>
}

const div = 'font-mono grid grid-cols-3 text-sm text-center my-10 border-b-2  border-LightDark dark:border-gray1'
const span = 'hover:text-bgLight3 dark:hover:text-cyan text-bg2 dark:text-gray1 font-semibold hover:border-b-2  dark:hover:bg-bg2 border-bgLight3 dark:border-cyan p-3 '
