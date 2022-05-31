import Building from 'icons/Building'
import GemWithArc from 'icons/GemWithArc'
import classnames, {
  alignItems,
  display,
  height,
  inset,
  margin,
  overflow,
  position,
  space,
  width,
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

const arcTextWrapper = classnames(
  position('absolute'),
  inset('-top-20', 'md:top-auto', 'md:left-0', 'right-3', 'md:right-0')
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
            <GemWithArc text="We are hard at work • Stay tuned!" />
          </div>
        </div>
      </div>
    </div>
  )
}
