import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosSend } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { BsGithub, BsTelegram, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function Contact() {
  const [email, setlEmail] = useState('')
  const [name, setlName] = useState('')
  const [msg, setlMsg] = useState('')

  const handleSub = e => {
    e.preventDefault()

    console.log('email:', email)
    console.log('name:', name)
    console.log('msg:', msg)
    alert('Succes Send')
  }

  useEffect(() => {
    AOS.init({duration:800})
  }, [])

  return <>
    <section name='contact' data-aos='fade-top' className={section}>
    <div className={div}>
      <h1 className={h1}>Get In Touch</h1>
      <p className={p}>I’m currently looking for any new opportunities, 
         my inbox is always open. Whether you have a question or just want to say hi, 
         I’ll try my best to get back to you!
      </p>

      <form onSubmit={handleSub} className={form}>
        <input className={input} onChange={e => setlEmail(e.target.value)} type="email"  placeholder='example@gmail.com'/>
        <input className={input} onChange={e => setlName(e.target.value)} type="text"  placeholder='alex'/>
        <textarea className={textarea} onChange={e => setlMsg(e.target.value)} placeholder='say hello!'> </textarea>
        <button className={btn} type="submit"><span className={iconSend}><IoIosSend size='25' /></span></button>
      </form>
    </div>

  </section>
  <p className={p2}>Made by Zedd with <AiFillHeart /></p>
  <div className={divSosmed}>
    <a className={aSosmed} href="https://github.com/Zeddnyx"><BsGithub size='20' /></a>
    <a className={aSosmed} href="https://t.me/Zeddnyx"><BsTelegram size='20'/></a>
    <a className={aSosmed} href="https://instagram.com/zedd.nyx"><BsInstagram size='20'/></a>
    <a className={aSosmed} href="https://linkdn.com/Jhondoe"><BsLinkedin size='20'/></a>
  </div>

  <div className={divSosmedDesk}>
    <a className={aSosmed} href="https://github.com/Zeddnyx"><BsGithub size='25' /></a>
    <a className={aSosmed} href="https://t.me/Zeddnyx"><BsTelegram size='25' /></a>
    <a className={aSosmed} href="https://instagram.com/zedd.nyx"><BsInstagram size='25' /></a>
    <a className={aSosmed} href="https://linkdn.com/Jhondoe"><BsLinkedin size='25' /></a>
    <div className={line}></div>
  </div>
    
  </>
}

const section = 'mt-60'

const div = 'w-full mx-auto text-center'
const h1 = 'text-2xl sm:text-4xl text-gray1 md:text-5xl font-bold font-ls hover:text-cyan md:my-8'
const p = 'p-5 text-gray3 font-semibold text-sm lg:text-md md:px-10 lg:px-40'

const form = 'grid grid-cols-1 gap-4 max-w-xs mx-auto'
const input = 'bg-transparent text-gray1 hover:bg-bg2 lg:w-96 outline-none rounded border-2 border-cyan p-2 text-gray1 text-sm lg:text-md'
const textarea = 'bg-transparent text-gray1 hover:bg-bg2 outline-none rounded border-2 border-cyan p-2 h-40 lg:w-96 text-sm lg:text-md'
const btn = 'px-4 py-2 rounded border-cyan lg:w-96 outline-none border-2 text-cyan font-semibold font-ls my-2 hover:bg-bg2 flex justify-center gap-3 items-center'
const iconSend = 'hover:animate-spin delay-800 ease-out'
const p2 = 'text-center font-mono text-cyan text-xs flex justify-center gap-2 mt-20 mb-2 items-center'

const divSosmed = 'flex justify-center gap-10 my-3 md:hidden'

const divSosmedDesk = 'md:flex items-center fixed bottom-0 left-5 lg:left-[50px] flex-col justify-center gap-10 hidden'
const line = 'w-[2px] h-20 bg-gray1'
const aSosmed = 'hover:text-cyan hover:animate-ping'
