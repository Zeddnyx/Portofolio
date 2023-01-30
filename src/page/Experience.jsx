import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nvim from '../asset/nvim.png'
import News from '../asset/news.png'
import Fylo from '../asset/fylo.png'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Experience() {

  useEffect(() => {
    AOS.init({duration:900})
  }, [])

  const Project = props => {
    return <div className='grid gap-5'>
      <div className={projectBg}>
        <h1 className={h1JudulProject}>{props.judul}</h1>
        <p className={pDesc}>{props.desc}</p>
        <p className={pTag}>{props.tag}</p>
        <div className='flex gap-5 mt-3'>
          <a className="hover:text-cyan" href={props.a}><span><FiGithub /></span></a>    
          <a className="hover:text-cyan" href={props.a2}><span><FiExternalLink /></span></a>    
        </div>
      </div>

      <div className={divImg}>
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  }

  return <section className={section}>
    <h1 className={h1} data-aos='fade-left'>Some Things I've Built</h1>
    <div data-aos='fade-down'>

      <div className={parentProject}>
        <Project judul='Fylo' 
          desc='Fylo is my first project with React and Tailwind CSS, this is a chalanges form FronEndMentor'
          tag='React, Tailwind CSS'
          a='https://'  a2='https://' 
          img={Fylo} alt='Fylo landing page'
        />
        <Project judul='News' 
          desc='News. this also chalanges from FrontEndMentor and i use API to update the news article' 
          tag='React, Tailwind CSS, API'
          a='https://' a2='https://' 
          img={News} alt='News' 
        />
        <Project judul='Neovim' 
          desc='my Neovim configuration this is IDE that i use to development and learn Front End since i started learning to code' 
          tag='Lua, Vim, Nvim'
          a='https://' a2='https://' 
          img={Nvim} alt='Nvim' 
        />
      </div>

    </div>
  </section> 
}

const section = 'mt-40'
const h1 = 'text-xl md:text-4xl font-bold font-ls hover:text-cyan md:my-8'
const h1Div = 'w-full h-[1px] bg-gray1'

const parentProject = 'mt-10 relative mx-auto max-w-xl gap-36 flex flex-col'

const projectBg = 'bg-bg2 relative w-full h-66 p-5 md:-mx-5 lg:-mx-20 xl:-mx-40 shadow-xl rounded'
const h1JudulProject = 'font-bold font-ls text-2xl'
const pDesc = 'my-3 text-gray2'
const pTag = 'font-mono text-sm hover:text-cyan'

const divImg = ' top-0 w-full md:mx-5 lg:mx-20 xl:mx-40'
const img = 'object-cover relative rounded'
