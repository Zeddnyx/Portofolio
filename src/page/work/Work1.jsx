import Work from '../Work'

export default function Work1() {
  return <Work >
  <span className={span}>
    <h1 className={h1}>Front End <span className='text-bgLight3 dark:text-cyan'>@TemanTrip</span></h1>
    <p className={desc}>
    </p>
  </span>
  </Work>
}

const span = 'my-10 p-10'
const h1 = 'text-xl font-bold font-ls text-LightDark dark:text-gray1'
const desc = 'text-sm text-LightDark dark:text-gray2'

