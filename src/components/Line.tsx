import Color from 'models/Color'
import classnames, { backgroundImage, height, width } from 'classnames/tailwind'
import colorsToGradientColorStops from 'helpers/colorsToGradientColorStops'
import useBreakpoints from 'hooks/useBreakpoints'

const line = (gradientDirection: 'to-left' | 'to-right', small?: boolean) => {
  const { xs } = useBreakpoints()

  return classnames(
    height('h-px'),
    width(small ? (xs ? 'w-8' : 'w-20') : 'w-36'),
    backgroundImage(
      gradientDirection === 'to-left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
    )
  )
}

export default ({
  color,
  gradientDirection,
  fromLight,
  small,
}: {
  color: Color
  gradientDirection: 'to-left' | 'to-right'
  fromLight?: boolean
  small?: boolean
}) => {
  const gradient = colorsToGradientColorStops(color, fromLight)

  return (
    <div className={classnames(line(gradientDirection, small), gradient)} />
  )
}
