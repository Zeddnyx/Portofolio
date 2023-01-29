import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Experience() {

  useEffect(() => {
    AOS.init({duration:900})
  }, [])

  return <section className={section}>
    <div>
      <h1 className={h1} data-aos='fade-left'>Some Things I've Built <div className={h1Div}></div></h1>
      <div>

        <div className={parentProject}>
          <div className={projectBg}>
            <h1 className={h1JudulProject}>judul</h1>
            <p className={pDesc}>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            <p className={pTag}>some tag</p>
            <div>
              <span>logo</span>
            </div>
          </div>
        </div>

      </div>
    </div> 
  </section> 
}

const section = 'mt-40'
const h1 = 'text-xl w-[400px] md:text-4xl font-bold font-ls hover:text-cyan md:my-8'
const h1Div = 'w-full h-[1px] bg-gray3'

const parentProject = 'mt-20 mx-auto max-w-sm'
const projectBg = 'bg-bg2 w-80 h-60 p-5'
const h1JudulProject = 'font-bold font-ls text-2xl'
const pDesc = 'my-3 text-gray2'
const pTag = 'font-mono text-sm'
