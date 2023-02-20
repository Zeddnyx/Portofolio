import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LogoDark from '../asset/LogoDark.png'
import LogoLight from '../asset/LogoLight.png'
import { RiMenu3Fill } from 'react-icons/ri'
import { FaRegWindowClose } from 'react-icons/fa'
import { BsArrowDownCircle, BsFillMoonFill,  } from 'react-icons/bs'
import { IoMdSunny } from 'react-icons/io'

export default function Nav() {
  const [theme, setTheme] = useState('dark')
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    AOS.init({duration:800})

    // check if default system is prefer dark or not if dark then dark
    if(window.matchMedia('(prefers-color-scheme: dark)').mathces) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  // everyyime toggle theme click will be update
  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  const Li = props => {
    return <li className={li}>
      <Link onClick={props.click} to={props.to} smooth={true} duration={900}>{props.li}</Link>
    </li>
  }

  return <nav className={nav}>
    <div className={isiNav}>

      <div className={logo} data-aos='fade-rigth'>
        <Link to='home' smooth={true} duration={900}><img src={theme === 'dark' ? LogoDark : LogoLight} alt="logo" /></Link>
      </div>

      <ul className={navDesk} data-aos='fade-left'>
        <Li to='about'   li='About' />
        <Li to='experience' li='Experience' />
        <Li to='work'    li='Work' />
        <Li to='contact' li='Contact' />
        <button className={btnResume} type="submit">Resume<span className={spanDownload}><BsArrowDownCircle /></span></button>
      </ul>

      <div data-aos='fade-left' className='flex gap-10'>
        <button className={navTheme} onClick={handleTheme}>
          {theme === 'dark' ? <BsFillMoonFill /> : <IoMdSunny />}
        </button>

        <button onClick={handleNav} data-aos='fade-left' className={navMenu}>
          {!nav ? <RiMenu3Fill size='30' /> : <FaRegWindowClose size='30' /> }
        </button>
      </div>

      <div className={!nav ? `hidden` : `${blur}`}></div>
      <ul className={!nav ? `hidden` : `${navMobile}`}>
        <Li click={() => setNav(false)} to='about'   li='About' />
        <Li click={() => setNav(false)} to='experience' li='Experience' />
        <Li click={() => setNav(false)} to='work'    li='Work' />
        <Li click={() => setNav(false)} to='contact' li='Contact' />
        <button className={btnResume} type="submit">Resume <span className={spanDownload}><BsArrowDownCircle /></span></button>
      </ul>

    </div>
  </nav>
}

const nav = 'w-full top-0 left-0 z-50'
// bg-bg3/10 backdrop-blur-md -  to make blur bg
const isiNav = 'flex px-3 w-full z-50 bg-gray1 dark:bg-bg3  sm:px-16 h-20 justify-between place-items-center shadow-xl shadow-bgLight3/10 dark:shadow-black/20 fixed'
const logo = 'w-[40px] md:w-[50px] cursor-pointer z-40'

const navDesk = 'hidden md:flex flex-row gap-5 items-center text-sm gap-10'

const navTheme = 'text-bgLight3 dark:text-cyan outline-none text-xl z-50 transition hover:animate-spin'

const navMenu = 'z-40 md:hidden outline-none text-bgLight3 dark:text-cyan '
const navMobile = 'flex md:hidden absolute w-[75%] sm:w-[50%] h-screen items-center gap-[70px] py-36 bg-gray1 dark:bg-bg1 z-30 flex-col right-0 top-0'
const blur = 'w-full h-screen backdrop-blur-sm absolute top-0 left-0'
const li = 'hover:text-bgLight3 dark:hover:text-cyan hover:border-b cursor-pointer border-bgLight3 dark:border-cyan font-mono font-bold text-LightDark dark:text-gray1'
const btnResume = 'px-5 py-2 flex gap-2 items-center text-bgLight3 dark:text-cyan border font-bold border-bgLight3 dark:border-cyan rounded hover:bg-bgLight3 hover:text-bgLight1 dark:md:hover:bg-bg1 dark:hover:bg-bg2 outline-none font-mono'
const spanDownload = 'animate-bounce'

