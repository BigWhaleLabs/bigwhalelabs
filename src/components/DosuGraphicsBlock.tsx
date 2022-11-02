import { displayFrom } from 'helpers/visibilityClassnames'
import ComingSoon from 'components/ComingSoon'
import DosuGraphicsArcText from 'components/DosuGraphicsArcText'
import classnames, {
  display,
  inset,
  margin,
  position,
  width,
} from 'classnames/tailwind'

const arcTextWrapper = classnames(
  position('absolute'),
  inset('right-3', '-bottom-11', 'md:left-14', 'md:right-auto')
)
const smallGem = classnames(
  display('block', 'md:hidden'),
  margin('mb-8', 'ml-16', 'tiny:ml-32'),
  width('w-32')
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
      <img src="img/dosu-coming-soon-lg.png" className={displayFrom('md')} />
      <div className={smallGem}>
        <ComingSoon />
      </div>
    </div>
  )
}
