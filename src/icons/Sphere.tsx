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
} from 'classnames/tailwind'
import colorToBackground from 'helpers/colorToBackground'
import colorToDropShadow from 'helpers/colorToDropShadow'

const sphereStyles = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  fontWeight('font-bold'),
  textColor('text-primary-dark'),
  display('inline-block'),
  borderRadius('rounded-full'),
  textAlign('text-center'),
  transitionProperty('transition-all')
)
const sphereSize = (small?: boolean) =>
  classnames(height(small ? 'h-4' : 'h-7'), width(small ? 'w-4' : 'w-7'))

export default function ({
  color,
  small,
  text,
}: {
  color: Color
  small?: boolean
  text?: string
}) {
  const bgColor = colorToBackground(color)
  const shadowColor = colorToDropShadow(color)

  return (
    <div
      className={classnames(
        sphereSize(small),
        sphereStyles,
        bgColor,
        shadowColor
      )}
    >
      <SphereText>{text}</SphereText>
    </div>
  )
}
