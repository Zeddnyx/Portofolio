import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Logo from '../asset/z.png'
import { RiMenu3Fill } from 'react-icons/ri'
import { FaRegWindowClose } from 'react-icons/fa'
import { BsArrowDownCircle } from 'react-icons/bs'

export default function Nav() {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    AOS.init({duration:800})
  }, [])


  const Li = props => {
    return <li className={li}>
      <Link onClick={props.click} to={props.to} smooth={true} duration={900}>{props.li}</Link>
    </li>
  }

  return <nav className={nav}>
    <div className={isiNav}>

      <div className={logo} data-aos='fade-rigth'>
        <Link to='home' smooth={true} duration={900}><img src={Logo} alt="logo" /></Link>
      </div>

      <ul className={navDesk} data-aos='fade-left'>
        <Li to='about'   li='About' />
        <Li to='experience' li='Experience' />
        <Li to='work'    li='Work' />
        <Li to='contact' li='Contact' />
        <button className={btnResume} type="submit">Resume<span className={spanDownload}><BsArrowDownCircle /></span></button>
      </ul>

      <button onClick={handleNav} data-aos='fade-left' className={navMenu}>
        {!nav ? <RiMenu3Fill size='30' /> : <FaRegWindowClose size='30' /> }
      </button>

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
const isiNav = 'flex px-3 w-full z-50 bg-bg3  sm:px-16 h-20 justify-between place-items-center shadow-xl fixed'
const logo = 'w-[50px] md:w-[70px] cursor-pointer z-40'

const navDesk = 'hidden md:flex flex-row gap-5 items-center text-sm gap-10'
const navMenu = 'z-40 md:hidden outline-none text-cyan'
const navMobile = 'flex md:hidden absolute w-[75%] sm:w-[50%] h-screen items-center gap-[70px] py-36 bg-bg1 z-30 flex-col right-0 top-0'
const blur = 'w-full h-screen backdrop-blur-sm absolute top-0 left-0'
const li = 'hover:text-cyan hover:border-b cursor-pointer border-cyan font-mono font-bold text-gray1'
const btnResume = 'px-5 py-2 flex gap-2 items-center text-cyan border font-bold border-cyan rounded md:hover:bg-bg1 hover:bg-bg2 outline-none font-mono'
const spanDownload = 'animate-bounce'

