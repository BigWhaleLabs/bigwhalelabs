import { displayFrom } from 'helpers/visibilityClassnames'
import { useInView } from 'react-intersection-observer'
import ComingSoon from 'components/ComingSoon'
import KetlGraphicsArcText from 'components/KetlGraphicsArcText'
import classnames, {
  inset,
  margin,
  opacity,
  position,
  transitionDuration,
  transitionProperty,
  width,
  willChange,
} from 'classnames/tailwind'

const arcTextWrapper = (visible: boolean) =>
  classnames(
    position('absolute'),
    inset('right-3', '-bottom-11', 'md:left-14', 'md:right-auto'),
    opacity({ 'opacity-0': !visible }),
    willChange('will-change-opacity'),
    transitionDuration('duration-200'),
    transitionProperty('transition-opacity')
  )
const gem = classnames(
  margin('mb-8', 'md:mb-32', 'ml-16', 'md:ml-9'),
  width('w-32', 'md:w-64')
)
const wrapper = classnames(
  position('relative'),
  margin('md:ml-9', 'lg:mr-32', 'xl:!mr-84')
)

export default function () {
  const { inView, ref } = useInView()

  return (
    <div className={wrapper} ref={ref}>
      <div className={arcTextWrapper(inView)}>
        <KetlGraphicsArcText />
      </div>
      <div></div>
      <img className={displayFrom('md')} src="img/coming-soon-city.png" />
      <div className={gem}>
        <ComingSoon />
      </div>
    </div>
  )
}
