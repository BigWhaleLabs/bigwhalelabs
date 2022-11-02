import { display } from 'classnames/tailwind'
import { useInView } from 'react-intersection-observer'
import classNamesToString from 'helpers/classNamesToString'

export default function () {
  const { ref, inView } = useInView()

  const grid = classNamesToString(display({ hidden: !inView }), 'grid')

  return (
    <div className="grid-wrapper" ref={ref}>
      <div className={grid} />
    </div>
  )
}
