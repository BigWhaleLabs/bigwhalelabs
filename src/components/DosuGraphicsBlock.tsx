import { displayFrom } from 'helpers/visibilityClassnames'
import DosuGraphicsArcText from 'components/DosuGraphicsArcText'
import classnames, {
  display,
  inset,
  margin,
  position,
} from 'classnames/tailwind'

const arcTextWrapper = classnames(
  position('absolute'),
  inset('right-3', '-bottom-11', 'md:left-14', 'md:right-auto')
)
const smallGem = classnames(
  display('block', 'md:hidden'),
  margin('ml-16', 'tiny:ml-32')
)
const wrapper = classnames(position('relative'), margin('lg:mr-32', 'xl:mr-84'))

export default function () {
  return (
    <div className={wrapper}>
      <div className={arcTextWrapper}>
        <DosuGraphicsArcText />
      </div>
      <img src="img/dosu-coming-soon-lg.png" className={displayFrom('md')} />
      <img src="img/dosu-coming-soon-sm.png" className={smallGem} width="125" />
    </div>
  )
}
