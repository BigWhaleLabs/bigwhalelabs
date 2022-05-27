import {
  AccentText,
  BodyText,
  ExtraBoldText,
  HeaderText,
  PrimaryAccentText,
} from 'components/Text'
import ArcText from 'icons/ArcText'
import Building from 'icons/Building'
import Button from 'components/Button'
import Diamond from 'icons/Diamond'
import classnames, {
  alignItems,
  backgroundImage,
  borderRadius,
  display,
  flexDirection,
  gradientColorStops,
  height,
  inset,
  justifyContent,
  margin,
  maxWidth,
  overflow,
  padding,
  position,
  space,
  width,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const cardBody = space('space-y-6')
const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-between'),
  space('space-y-32'),
  margin('mb-72')
)

const wrapperBoldText = classnames(
  display('flex'),
  position('absolute', 'md:relative'),
  inset('right-8', 'md:right-0'),
  alignItems('items-center'),
  justifyContent('justify-start'),
  margin('mt-20', 'md:mt-0'),
  width('md:w-96'),
  height('md:h-96'),
  overflow('md:overflow-hidden')
)
const boldTextWrapper = classnames(
  alignItems('items-center'),
  padding('px-1', 'py-0', 'md:px-2', 'md:py-2'),
  margin('ml-22.5', 'mt-auto', 'md:mx-auto', 'md:my-auto'),
  borderRadius('rounded-md'),
  width('w-fit'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-tertiary-light', 'to-tertiary'),
  zIndex('z-10')
)
const diamondWrapper = classnames(
  position('absolute'),
  inset('left-0', 'right-0', 'top-auto')
)
const cardImages = classnames(space('-space-y-44'))
const diamonTextWrapper = classnames(display('flex'), width('w-fit'))

export default function () {
  const { tablet } = useBreakpoints()
  return (
    <div className={wrapper}>
      <div className={cardImages}>
        {!tablet && (
          <div className={margin('ml-8')}>
            <Building />
          </div>
        )}
        <div className={diamonTextWrapper}>
          <div className={wrapperBoldText}>
            <div
              className={
                'absolute -top-20 -right-9 md:top-auto md:left-0 md:right-0'
              }
            >
              <ArcText text="We are hard at work • Stay tuned!" />
            </div>

            <div className={boldTextWrapper}>
              <ExtraBoldText small={tablet}>Coming soon</ExtraBoldText>
            </div>
            <div className={diamondWrapper}>
              <Diamond />
            </div>
          </div>
        </div>
      </div>
      <div className={card}>
        <PrimaryAccentText color="text-primary">Dosu</PrimaryAccentText>
        <div className={cardBody}>
          <HeaderText small>Socialize pseudonymously with ZK badges</HeaderText>
          <BodyText>
            <AccentText color="text-primary">Dosu</AccentText> will be a
            pseudonymous social network where you can share your thoughts with
            the world.
          </BodyText>
          <Button outlined>Join Discord for updates</Button>
        </div>
      </div>
    </div>
  )
}
