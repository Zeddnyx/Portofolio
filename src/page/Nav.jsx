import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Logo from '../asset/z.png'
import { RiMenu3Fill } from 'react-icons/ri'
import { FaRegWindowClose } from 'react-icons/fa'

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
      <Link to={props.to} smooth={true} duration={900}>{props.li}</Link>
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
        <button className={btnResume} type="submit">Resume</button>
      </ul>

      <button onClick={handleNav} data-aos='fade-left' className={navMenu}>
        {!nav ? <RiMenu3Fill size='30' /> : <FaRegWindowClose size='30' /> }
      </button>

      <ul className={!nav ? `hidden` : `${navMobile}`}>
        <Li to='about'   li='About' />
        <Li to='experience' li='Experience' />
        <Li to='work'    li='Work' />
        <Li to='contact' li='Contact' />
        <button className={btnResume} type="submit">Resume</button>
      </ul>

    </div>
  </nav>
}

const nav = 'w-full top-0 left-0 z-50'

const isiNav = 'flex px-3 w-full z-50 sm:px-16 h-20 justify-between place-items-center bg-bg3 shadow-xl fixed'
const logo = 'w-[50px] md:w-[70px] cursor-pointer'

const navDesk = 'hidden md:flex flex-row gap-5 items-center text-sm gap-10'
const navMenu = 'z-40 md:hidden outline-none text-cyan'
const navMobile = 'flex md:hidden absolute w-[75%] sm:w-[50%] h-screen items-center gap-[70px] py-36 bg-bg1 z-30 flex-col right-0 top-0'
const li = 'hover:text-cyan hover:border-b cursor-pointer border-cyan font-mono font-bold text-gray1'
const btnResume = 'px-5 py-2 text-cyan border-2 font-bold border-cyan rounded md:hover:bg-bg1 hover:bg-bg2 outline-none font-mono'

