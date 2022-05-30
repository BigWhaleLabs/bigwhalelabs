import { SphereText } from 'components/Text'
import Color from 'models/Color'
import classnames, {
  alignItems,
  borderRadius,
  display,
  fontWeight,
  height,
  justifyContent,
  textAlign,
  textColor,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'
import colorToBackground from 'helpers/colorToBackground'
import colorToDropShadow from 'helpers/colorToDropShadow'
import useScrollPercent from 'hooks/useScrollPercent'
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
  zIndex('z-10')
)
const sphereSize = (small?: boolean) =>
  classnames(height(small ? 'h-4' : 'h-7'), width(small ? 'w-4' : 'w-7'))

export default function ({
  color,
  small,
  text,
  onLeft,
}: {
  color: Color
  small?: boolean
  text?: string
  onLeft?: boolean
}) {
  const bgColor = colorToBackground(color)
  const shadowColor = colorToDropShadow(color)
  const { beforeSuperOrb } = useScrollPercent()
  const zkText = !beforeSuperOrb ? 'ZK' || text : ''

  return (
    <div
      style={scrollAnimationProvider(
        onLeft ? 'sphereAnimationLeft' : 'sphereAnimationRight'
      )}
      className={classnames(
        sphereSize(small),
        sphereStyles,
        bgColor,
        shadowColor
      )}
    >
      <SphereText>{zkText}</SphereText>
    </div>
  )
}
