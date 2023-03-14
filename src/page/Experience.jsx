import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Project from '../Components/Experience/Project'
import OtherProject from '../Components/Experience/OtherProject'
import Nvim from '../asset/nvim.png'
import News from '../asset/news.png'
import Fylo from '../asset/fylo.jpg'

export default function Experience() {

  useEffect(() => {
    AOS.init({duration:1000})
  }, [])

  return <section name='experience' className='section'>
    <h1 className='h1-judul-section' data-aos='fade-left'>Some Things I've Built</h1>
    <div className='experience-project'>
      <div data-aos='fade-down' className='w-2 rounded bg-bgLight3 dark:bg-cyan md:hidden'>
      </div>
      <div className='grid grid-cols-1 justify-center place-items-center gap-5 md:gap-20 lg:ml-20 xl:ml-48'>
        <Project judul='Fylo' 
          desc="This is my first project with React and Tailwindcss. Fylo it's a landing page, this chalanges form FronEndMentor which a platform for learn slicing, integerate API, etc, for front end developer like me"
          tag='React, Tailwind CSS, Netlify'
          a='https://github.com/Zeddnyx/Fylo'  a2='https://fylo-zedd.netlify.app' 
          img={Fylo} alt='Fylo landing page'
        />
        <Project judul='News homepage' 
          desc='News Homepage. this also chalanges from FrontEndMentor and im use API to update the news article, the chalanges is to use grid system and integrate API' 
          tag='React, Tailwind CSS, NYTIMES API, Netlify'
          a='https://github.com/Zeddnyx/News' a2='https://zedd-news.netlify.app' 
          img={News} alt='News' 
        />
        <Project judul='Neovim' 
          desc='Neovim configuration this is IDE that i use to development and learn front end since i started learning to code' 
          tag='Lua, Vim, Nvim'
          a='https://github.com/Zeddnyx/Znvim' a2='https://github.com/Zeddnyx/Znvim' 
          img={Nvim} alt='Nvim' 
        />
      </div>
    </div>

    <div className='mt-20' data-aos='fade-up'>
      <h3 className='h3-other-project'>Other Noteworthy Projects</h3>
      <div className='parent-other-project'>
        <OtherProject link='https://github.com/Zeddnyx/Tools' title='Tools'
          desc='Tools is a website that have bunch of tools online' tag='API, ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx/timeTrackingDashboard' title='Time Tracking Dashbord'
          desc='chalanges from FronEndMentor to train my grid skills, responsive design' tag='ReactJS, TailwindCSS'
        />
        <OtherProject link='https://github.com/Zeddnyx' title='Url Shortly'
          desc='this project to make short your url with bit.ly API no need login or signup!' tag='Bit.ly, ReactJS, TailwindCSS'
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
