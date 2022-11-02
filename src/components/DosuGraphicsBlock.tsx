import { displayFrom } from 'helpers/visibilityClassnames'
import ComingSoon from 'components/ComingSoon'
import DosuGraphicsArcText from 'components/DosuGraphicsArcText'
import classnames, { inset, margin, position, width } from 'classnames/tailwind'

const arcTextWrapper = classnames(
  position('absolute'),
  inset('right-3', '-bottom-11', 'md:left-14', 'md:right-auto')
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
  return (
    <div className={wrapper}>
      <div className={arcTextWrapper}>
        <DosuGraphicsArcText />
      </div>
      <div></div>
      <img src="img/coming-soon-city.png" className={displayFrom('md')} />
      <div className={gem}>
        <ComingSoon />
      </div>
    </div>
  )
}
