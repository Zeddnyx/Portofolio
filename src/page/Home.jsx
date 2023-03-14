import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({duration:800})
  }, [])

  return <section name='home' data-aos='fade-up' className='home-section'>
    <div className='home-div'>
      <p className='home-p'>Hi, my name is</p>
      <h1 className='home-h1'>Jaenudin.</h1>
      <h2 className='home-h2'>Jr Front End Developer.</h2>

      <p className='home-p2'>I am an experienced front-end developer 
         with a passion for creating 
         visually appealing and user-friendly websites. 
      </p>
      <button className='home-btn' type="submit">Hire Me!</button>
    </div>
  </section>
}

