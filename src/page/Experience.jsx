import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nvim from '../asset/nvim.png'
import News from '../asset/news.png'
import Fylo from '../asset/fylo.jpg'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { GoFileDirectory } from 'react-icons/go'

export default function Experience() {

  useEffect(() => {
    AOS.init({duration:900})
  }, [])

  const Project = props => {
    return <div data-aos='fade-down' className='grid gap-5'>
      <h1 className={number}>{props.number}</h1>
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


  const OtherProject = ({link, title, desc, tag}) => {
    return <div className='w-full bg-bgLight3 dark:bg-bg2 mx-auto p-3'>
      <div className='flex justify-between'>
        <span className='dark:text-cyan'><GoFileDirectory size='20'/></span>
        <a href={link}><FiGithub /></a>
      </div>

      <div>
        <h2 className='font-ls text-lg mt-2 text-white dark:hover:text-cyan'>{title}</h2>
        <p className='text-sm text-white'>{desc}</p>
        <p className='font-mono text-[#bbb] text-sm mt-3'>{tag}</p>
      </div>
    </div>
  }

  return <section name='experience' className={section}>
    <h1 className={h1} data-aos='fade-left'>Some Things I've Built</h1>
    <div className={parentProject}>
      <div data-aos='fade-down' className='w-2 rounded bg-bgLight3 dark:bg-cyan md:hidden'>
      </div>
      <div className='flex flex-col gap-10 flex-grow'>
        <Project number='01' judul='Fylo' 
          desc='Fylo is my first project with React and Tailwind CSS, this is a chalanges form FronEndMentor'
          tag='React, Tailwind CSS, Netlify'
          a='https://github.com/Zeddnyx/Fylo'  a2='https://fylo-zedd.netlify.app' 
          img={Fylo} alt='Fylo landing page'
        />
        <Project number='02' judul='News' 
          desc='News. this also chalanges from FrontEndMentor and i use API to update the news article' 
          tag='React, Tailwind CSS, NYTIMES API, Netlify'
          a='https://github.com/Zeddnyx/News' a2='https://zedd-news.netlify.app' 
          img={News} alt='News' 
        />
        <Project number='03' judul='Neovim' 
          desc='my Neovim configuration this is IDE that i use to development and learn Front End since i started learning to code' 
          tag='Lua, Vim, Nvim'
          a='https://github.com/Zeddnyx/Znvim' a2='https://github.com/Zeddnyx/Znvim' 
          img={Nvim} alt='Nvim' 
        />
      </div>
    </div>

    <div className='mt-20' data-aos='fade-up'>
      <h1 className='text-center text-bgLight3 dark:text-white font-ls text-3xl'>Other Noteworthy Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8 mx-5'>
        <OtherProject link='https://github.com/Zeddnyx/cekRekening' title='Check Rekening'
          desc='working with api, this tools for check rekening (name, number rekening, name bank)' tag='API, ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx/timeTrackingDashboard' title='Time Tracking Dashbord'
          desc='chalanges from FronEndMentor for train my grid skills' tag='ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx' title='Url Shortly'
          desc='this project to make short your url with bit.ly' tag='Bit.ly, ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx' title='Url Shortly'
          desc='this project to make short your url with bit.ly' tag='Bit.ly, ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx' title='Url Shortly'
          desc='this project to make short your url with bit.ly' tag='Bit.ly, ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx' title='Url Shortly'
          desc='this project to make short your url with bit.ly' tag='Bit.ly, ReactJS, TailwindCSS'
        />
      </div>
    </div>
  </section> 
}

const section = 'mt-40'
const h1 = 'text-2xl sm:text-4xl text-bg3 dark:text-gray1 md:text-5xl font-bold font-ls hover:text-bgLight3 dark:hover:text-cyan md:my-8'

const parentProject = 'mt-10 px-5 flex gap-5'

const number = 'text-bgLight3 dark:text-cyan font-ls text-3xl -mb-5 md:-mx-6 lg:-mx-16'
const projectBg = 'bg-bgLight3 dark:bg-bg2 relative w-full h-66 p-5 md:-mx-6 lg:-mx-16 shadow-xl rounded'
const h1JudulProject = 'font-bold font-ls text-2xl'
const pDesc = 'my-3 text-bgLight1 dark:text-gray2'
const pTag = 'font-mono text-sm py-3 text-LightCyan dark:text-cyan'

const divImg = ' top-0 w-full md:mx-5 lg:mx-20 xl:mx-40'
const img = 'object-cover relative rounded'
