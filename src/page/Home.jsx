import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  return <section name='home' data-aos='fade-up' className={section}>
    <span className={div1}>
      <p className={p}>Hi, my name is</p>
      <h1 className={h1}>Jaenudin.</h1>
      <h2 className={h2}>Front End Devloper.</h2>

      <p className={p2}>I am an experienced front-end developer 
         with a passion for creating 
         visually appealing and user-friendly websites. 
      </p>
      <button className={button} type="submit">Hire Me!</button>
    </span>
  </section>
}

const section = 'max-w-xs'
const div1 = 'mt-10 grid gap-2'
const p = 'font-mono text-cyan'
const h1 = 'font-ls text-5xl sm:text-6xl md:text-7xl text-gray1 lg:text-8xl'
const h2 = 'font-ls text-3xl sm:text-4xl md:text-6xl w-[600px] text-gray3'
const p2 = 'text-gray3 font-sans text-sm font-bold mt-5 pr-60 '
const button = 'w-40 mt-5 p-2 border-2 font-bold border-cyan rounded hover:bg-bg2 text-cyan font-mono'
