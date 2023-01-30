import { useeffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Work1 from './work/Work1'
import Work2 from './work/Work2'
import Work3 from './work/Work3'
import Work4 from './work/Work4'

export default function Work() {

  return <section name='work' className={section}>
    <h1 className={h1}>Where I've Worked</h1>
  </section>
}
const section = 'mt-40'
const h1 = 'text-xl text-gray1 md:text-4xl font-bold font-ls hover:text-cyan md:my-8'
