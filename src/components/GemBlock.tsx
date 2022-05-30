import { ExtraBoldText } from 'components/Text'
import ArcText from 'icons/ArcText'
import Building from 'icons/Building'
import classnames, {
  alignItems,
  backgroundImage,
  borderRadius,
  display,
  gradientColorStops,
  height,
  inset,
  margin,
  overflow,
  padding,
  position,
  space,
  width,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const gemCard = space('-space-y-44')
const diamonTextWrapper = classnames(display('flex'), width('w-fit'))
const wrapperBoldText = classnames(
  display('flex'),
  position('absolute', 'md:relative'),
  inset('right-8', 'md:right-0'),
  alignItems('items-center'),
  margin('mt-20', 'md:mt-0'),
  width('md:w-96'),
  height('md:h-96'),
  overflow('md:overflow-hidden')
)
const boldTextWrapper = classnames(
  alignItems('items-center'),
  padding('px-1', 'py-0', 'md:p-2'),
  margin('ml-22.5', 'mt-auto', 'md:m-auto'),
  borderRadius('rounded-md'),
  width('w-fit'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-tertiary-light', 'to-tertiary'),
  zIndex('z-10')
)
const arcTextWrapper = classnames(
  position('absolute'),
  inset('-top-20', 'md:top-auto', 'md:left-0', 'right-8', 'md:right-0')
)
const diamondWrapper = classnames(
  position('absolute'),
  inset('md:left-12', 'top-auto')
)

export default function () {
  const { tablet } = useBreakpoints()

  return (
    <div className={gemCard}>
      {!tablet && (
        <div className={margin('ml-8')}>
          <Building />
        </div>
      )}
      <div className={diamonTextWrapper}>
        <div className={wrapperBoldText}>
          <div className={arcTextWrapper}>
            <ArcText text="We are hard at work • Stay tuned!" />
          </div>

          <div className={boldTextWrapper}>
            <ExtraBoldText small={tablet}>Coming soon</ExtraBoldText>
          </div>
          <div className={diamondWrapper}>
            <img src="/img/gem.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}
