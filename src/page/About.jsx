import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '../asset/hero.jpg'

export default function About() {

  useEffect(() => {
    AOS.init({duration:900})
  }, [])

  return <div name='about' className={div1}>
    <h1 data-aos='fade-left' className={h1}>About Me <div className={h1Div}></div></h1>
    <div className={div2}>
      <article data-aos='fade-top' className={article}>
        <p>Hello! My name is Jaenudin but i would love if you call me <span className={pSpan}>Zedd</span>, and i enjoy crating things that
           live on internet. My interest in front end developer started back in 2022 when
           i decide to try make bin generator thaught me a lot about Html, Css, and JavaScript
        </p>
        <p>I also really like to costumize my linux desktop</p>
        <p>Here are a few technologies i've been working with recently</p>
        <ul className={ul}>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </article>
      <div className={divImg} data-aos='fade-bottom'>
        <div className={divDiv}></div>
        <img className={img} src={Hero} alt="it's me:)" />
      </div>
    </div>
  </div>
}

const div1 = 'mt-60 text-gray1'

const div2 = 'flex flex-col gap-12 md:flex-row'
const h1 = 'text-xl md:text-4xl font-bold font-ls hover:text-cyan md:my-8'
const h1Div = 'w-full h-[1px] bg-gray1'

const article = 'flex flex-col px-5 md:px-0 gap-4 mt-5 text-gray3 text-sm md:text-md lg:text-lg'
const pSpan = 'text-cyan'
const ul = 'grid grid-cols-2 list-disc px-5 font-mono'

const divImg = 'w-[290px] h-[310px] relative rounded border-2 border-cyan mx-auto my-5'
const divDiv = 'w-[285px] h-[300px] bg-cyan z-20 relative opacity-50 hover:opacity-0 -mx-5 md:mx-5 my-5'
const img = 'w-[300px] rounded h-[300px] relative -mx-5 -my-[300px] md:mx-5 bg-cyan -my-80'
