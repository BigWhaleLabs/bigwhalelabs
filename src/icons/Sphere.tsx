import { SphereText } from 'components/Text'
import Color from 'models/Color'
import classnames, {
  alignItems,
  borderRadius,
  boxShadow,
  display,
  fontWeight,
  height,
  justifyContent,
  textAlign,
  textColor,
  transitionProperty,
  width,
  willChange,
  zIndex,
} from 'classnames/tailwind'
import colorToBackground from 'helpers/colorToBackground'
import colorToShadowColor from 'helpers/colorToShadowColor'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'

const sphereStyles = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  fontWeight('font-bold'),
  textColor('text-primary-dark'),
  display('inline-block'),
  borderRadius('rounded-full'),
  textAlign('text-center'),
  transitionProperty('transition-all'),
  willChange('will-change-transform'),
  zIndex('z-10'),
  boxShadow('shadow-lg')
)
const sphereSize = (small?: boolean) =>
  classnames(
    height(small ? 'h-4' : { 'h-6': true, 'tiny:h-7': true }),
    width(small ? 'w-4' : { 'tiny:w-7': true, 'w-6': true })
  )

export default function ({
  animated = true,
  color,
  onLeft,
  small,
  text,
}: {
  color: Color
  small?: boolean
  text?: string
  onLeft?: boolean
  animated?: boolean
}) {
  const bgColor = colorToBackground(color)
  const shadowColor = colorToShadowColor(color)

  return (
    <div
      className={classnames(
        sphereSize(small),
        sphereStyles,
        bgColor,
        shadowColor
      )}
      style={
        animated
          ? scrollAnimationProvider(
              onLeft ? 'sphereAnimationLeft' : 'sphereAnimationRight'
            )
          : undefined
      }
    >
      <SphereText>{text}</SphereText>
    </div>
  )
}
