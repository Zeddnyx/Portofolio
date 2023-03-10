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
    return <li className='nav-li'>
      <Link onClick={props.click} to={props.to} smooth={true} duration={900}>{props.li}</Link>
    </li>
  }

  return <nav className='nav'>
    <div className='nav-bg'>

      <div className='logo' data-aos='fade-rigth'>
        <Link to='home' smooth={true} duration={900}><img src={theme === 'dark' ? LogoDark : LogoLight} alt="logo" /></Link>
      </div>

      <ul className='nav-desktop' data-aos='fade-left'>
        <Li to='about'   li='About' />
        <Li to='experience' li='Experience' />
        <Li to='work'    li='Work' />
        <Li to='contact' li='Contact' />
        <button className='btn-resume' type="submit">Resume<span className='animate-bounce'><BsArrowDownCircle /></span></button>
      </ul>

      <div data-aos='fade-left' className='flex gap-10'>
        <button className='btn-theme' onClick={handleTheme}>
          {theme === 'dark' ? <BsFillMoonFill /> : <IoMdSunny />}
        </button>

        <button onClick={handleNav} data-aos='fade-left' className='nav-menu'>
          {!nav ? <RiMenu3Fill size='30' /> : <FaRegWindowClose size='30' /> }
        </button>
      </div>

      <div className={!nav ? `hidden` : `nav-blur`}></div>
      <ul className={!nav ? `hidden` : `nav-mobile`}>
        <Li click={() => setNav(false)} to='about'   li='About' />
        <Li click={() => setNav(false)} to='experience' li='Experience' />
        <Li click={() => setNav(false)} to='work'    li='Work' />
        <Li click={() => setNav(false)} to='contact' li='Contact' />
        <button className='btn-resume' type="submit">Resume <span className='animate-bounce'><BsArrowDownCircle /></span></button>
      </ul>

    </div>
  </nav>
}
