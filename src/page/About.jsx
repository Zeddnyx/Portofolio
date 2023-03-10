import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '../asset/hero.jpg'

export default function About() {

  useEffect(() => {
    AOS.init({duration:1000})
  }, [])

  return <section name='about' className='section'>
    <h1 data-aos='fade-left' className='h1-judul-section'>About Me</h1>
    <div className='about-div'>
      <article data-aos='fade-top' className='about-introduce'>
        <p>Hello! My name is Jaenudin but i would love if you call me <span className='about-span'>Zedd</span> or <span className='about-span'>Jay</span> , and i enjoy crating things that
           live on internet. My interest in front end developer started back in 2022 when
           i decide to try make bin generator thaught me a lot about HTML, CSS, and JavaScript
        </p>
        <p>I also really like to costumize my linux desktop</p>
        <p>Here are a few technologies i've been working with recently</p>
        <ul className='about-ul'>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>ReactJS</li>
          <li>Next.JS</li>
          <li>Linux (Arch)</li>
          <li>Neovim (IDE)</li>
        </ul>
      </article>
      <div className='about-img' data-aos='fade-bottom'>
        <div className='about-img-div'></div>
        <img className='about-img-img' src={Hero} alt="it's me:)" />
      </div>
    </div>
  </section>
}
