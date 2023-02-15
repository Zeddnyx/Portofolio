import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosSend } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { BsGithub, BsTelegram, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Contact() {
  const [notif, setNotif] = useState(false)

  const valid = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    msg: yup.string().required('Please input a message'),
  })

  const { handleSubmit, register, formState: {errors}, reset } = useForm({
    resolver: yupResolver(valid),
  })
  const callbackSubmit = data => {
    console.log(data)
    reset()
    setNotif(true)
    setTimeout(() => {
      setNotif(false)
    }, 3000);
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

      <div className={!notif ? `hidden` : `realtive z-20 delay-900 bg-bgLight3 dark:bg-bg2 mx-auto rounded w-80 my-5 p-5`}>
        <p className=' text-bgLight1 dark:text-cyan'>Messages send successful !</p>
      </div>

      <form onSubmit={handleSubmit(callbackSubmit)} className={form}>
        <input className={input} type='text' id='name' placeholder='Name' {...register('name')} />
        <span className='text-red-500 text-sm'>{errors.name?.message}</span>
        <input className={input} type='email' id='email' placeholder='your@email.com' {...register('email')} />
        <span className='text-red-500 text-sm'>{errors.email?.message}</span>
        <textarea className={textarea} type='text' id='msg' placeholder='write a message...' {...register('msg')} ></textarea>
        <span className='text-red-500 text-sm'>{errors.msg?.message}</span>

        <button className={btn} type="submit"><span className={iconSend}><IoIosSend size='25' /></span></button>
      </form>
    </div>

  </section>
  <p className={p2}>Made by Zedd with <AiFillHeart /></p>
  <div className={divSosmed}>
    <a className={aSosmed} href="https://github.com/Zeddnyx"><BsGithub size='20' /></a>
    <a className={aSosmed} href="https://t.me/Zeddnyx"><BsTelegram size='20'/></a>
    <a className={aSosmed} href="https://instagram.com/zedd.nyx"><BsInstagram size='20'/></a>
    <a className={aSosmed} href="https://www.linkedin.com/in/zedd-j-650482199"><BsLinkedin size='20'/></a>
  </div>

  <div className={divSosmedDesk}>
    <a className={aSosmed} href="https://github.com/Zeddnyx"><BsGithub size='25' /></a>
    <a className={aSosmed} href="https://t.me/Zeddnyx"><BsTelegram size='25' /></a>
    <a className={aSosmed} href="https://instagram.com/zedd.nyx"><BsInstagram size='25' /></a>
    <a className={aSosmed} href="https://www.linkedin.com/in/zedd-j-650482199"><BsLinkedin size='25' /></a>
    <div className={line}></div>
  </div>
    
  </>
}

const section = 'mt-60'

const div = 'w-full mx-auto text-center'
const h1 = 'text-2xl sm:text-4xl text-bg3 dark;text-gray1 md:text-5xl font-bold font-ls hover:text-bgLight3 dark:hover:text-cyan md:my-8'
const p = 'p-5 text-LightDark dark:text-gray3 font-semibold text-sm lg:text-md md:px-10 lg:px-40'

const form = 'grid grid-cols-1 gap-4 max-w-xs mx-auto'
const input = 'bg-transparent text-LightDark dark:text-gray1 dark:hover:bg-bg2 lg:w-96 outline-none rounded border border-bgLight3 dark:border-cyan p-2 text-LightDark dark:text-gray1 text-sm lg:text-md'
const textarea = 'bg-transparent text-LightDark dark:text-gray1 dark:hover:bg-bg2 outline-none rounded border border-bgLight3 dark:border-cyan p-2 h-40 lg:w-96 text-sm lg:text-md'
const btn = 'px-4 group py-2 rounded border-bgLight3 dark:border-cyan lg:w-96 outline-none border text-bgLight3 dark:text-cyan font-semibold font-ls my-2 hover:bg-bgLight3 hover:text-bgLight1 dark:hover:bg-bg2 flex justify-center gap-3 items-center'
const iconSend = 'group-hover:animate-ping delay-800 ease-out'
const p2 = 'text-center font-mono text-bgLight3 dark:text-cyan text-xs flex justify-center gap-2 mt-20 mb-2 items-center'

const divSosmed = 'flex justify-center gap-10 my-5 md:hidden'

const divSosmedDesk = 'md:flex items-center fixed bottom-0 left-5 lg:left-[50px] flex-col justify-center gap-10 hidden'
const line = 'w-[2px] h-20 bg-bgLight3 dark:bg-cyan'
const aSosmed = 'text-bgLight3 dark:text-cyan dark:hover:text-cyan hover:animate-ping'
