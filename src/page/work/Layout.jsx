import { Outlet, Link } from 'react-router-dom'

export default function Work1() {
  return <section>
    <span className={div}>
      <Link to='/'><span className={span}>Work1</span></Link>
      <Link to='/work2'><span className={span}>Work2 </span></Link>
      <Link to='/work3'><span className={span}>Work3</span></Link>
    </span>
    <Outlet />
  </section>
}

const div = 'grid grid-cols-3 sm:gap-10 sm:grid-cols-1 my-10 border-b-2 pb-3 border-gray1 sm:border-b-0 sm:border-l-2 '
const span = 'hover:text-cyan hover:border-b-2 sm:hover:border-b-0 sm:hover:border-l-2 border-cyan p-4 hover:bg-bg2'
