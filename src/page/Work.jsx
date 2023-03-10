import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Work({ children }) {
   
  useEffect(() => {
    AOS.init({duration:800})
  }, [])

  return <section name='work' className={section}>
    <h1 className={h1} data-aos='fade-left'>Where I've Worked</h1>

    <div data-aos='fade-top' className={div}>
      <Link to='/'><div className={span}>TemanTrip</div></Link>
      <Link to='/freelance'><div className={span}>Freelance</div></Link>
      <Link to='/work3'><div className={span}>Work </div></Link>
    </div>

    {children}
  </section>
}
const section = 'mt-40'
const h1 = 'text-2xl sm:text-4xl text-bg3 dark:text-gray1 md:text-5xl font-bold font-ls hover:text-bgLight3 dark:hover:text-cyan md:my-8'

const div = 'font-mono grid grid-cols-3 text-sm text-center my-10 border-b-2  border-LightDark dark:border-gray1'
const span = 'hover:text-bgLight3 dark:hover:text-cyan text-bg2 dark:text-gray1 font-semibold hover:border-b-2  dark:hover:bg-bg2 border-bgLight3 dark:border-cyan p-3 '
