import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Project(props) {
  return <div data-aos='fade-right' className='grid gap-5 mt-10 lg:justify-center items-center lg:justify-around'>
    <div className='project-bg'>
      <h1 className='project-h1-judul'>{props.judul}</h1>
      <p className='project-p-desc'>{props.desc}</p>
      <p className='project-p-tag'>{props.tag}</p>
      <div className='flex gap-5 mt-3'>
        <a className="text-white dark:hover:text-cyan" href={props.a}><span><FiGithub /></span></a>
        <a className="text-white dark:hover:text-cyan" href={props.a2}><span><FiExternalLink /></span></a>
      </div>
    </div>

    <div className='project-img-parent'>
      <div className='project-img-div'>
      </div>
      <img className='project-img' src={props.img} alt={props.alt} />
    </div>
  </div>
}
