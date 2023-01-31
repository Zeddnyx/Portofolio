import { useeffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from './work/Layout'
import Work1 from './work/Work1'
import Work2 from './work/Work2'
import Work3 from './work/Work3'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Work() {

  return <section name='work' className={section}>
    <h1 className={h1}>Where I've Worked</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Work1 />} />
            <Route path="work2" element={<Work2 />} />
            <Route path="work3" element={<Work3 />} />
          </Route>
        </Routes>
      </BrowserRouter>

  </section>
}
const section = 'mt-40'
const h1 = 'text-xl text-gray1 md:text-4xl font-bold font-ls hover:text-cyan md:my-8'

