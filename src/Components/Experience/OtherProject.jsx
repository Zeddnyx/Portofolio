import { FiGithub } from 'react-icons/fi'
import { AiOutlineFolder } from 'react-icons/ai'

export default function OtherProject({link, title, desc, tag}) {
  return <div data-aos='fade-down' className='w-full bg-bgLight3 dark:bg-bg2 mx-auto p-5'>
    <div className='flex justify-between items-center mb-8'>
      <span className='dark:text-cyan'><AiOutlineFolder size='30'/></span>
      <a href={link}><FiGithub size='20'/></a>
    </div>

    <div>
      <h2 className='font-ls text-2xl mt-2 text-white dark:hover:text-cyan'>{title}</h2>
      <p className='text-sm text-white'>{desc}</p>
      <p className='font-mono text-[#bbb] text-sm mt-3'>{tag}</p>
    </div>
  </div>
}
