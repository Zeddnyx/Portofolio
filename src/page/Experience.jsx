import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nvim from '../asset/nvim.png'
import News from '../asset/news.png'
import Fylo from '../asset/fylo.png'

export default function Experience() {

  useEffect(() => {
    AOS.init({duration:900})
  }, [])

  return <section className={section}>
    <h1 className={h1} data-aos='fade-left'>Some Things I've Built</h1>
    <div data-aos='fade-down'>

      <div className={parentProject}>
        <div className={projectBg}>
          <h1 className={h1JudulProject}>judul</h1>
          <p className={pDesc}>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          <p className={pTag}>some tag</p>
          <div>
            <span>logo</span>
          </div>
        </div>

        <div className={divImg}>
          <img src={Fylo} alt="fylo landing page" />
        </div>
      </div>

    </div>
  </section> 
}

const section = 'mt-40'
const h1 = 'text-xl md:text-4xl font-bold font-ls hover:text-cyan md:my-8'
const h1Div = 'w-full h-[1px] bg-gray1'

const parentProject = 'mt-10 relative mx-auto max-w-sm grid gap-4'

const projectBg = 'bg-bg2 relative w-full h-60 p-5'
const h1JudulProject = 'font-bold font-ls text-2xl'
const pDesc = 'my-3 text-gray2'
const pTag = 'font-mono text-sm'

const divImg = ' top-0 w-full'
const img = 'object-cover relative'
