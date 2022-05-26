import classnames, {
  backgroundImage,
  gradientColorStops,
  height,
  width,
} from 'classnames/tailwind'

const line = (gradientDirection: 'to-left' | 'to-right') =>
  classnames(
    height('h-px'),
    width('w-36'),
    backgroundImage(
      gradientDirection === 'to-left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
    ),
    gradientColorStops('from-primary-dark', 'to-secondary')
  )

export default ({
  gradientDirection,
}: {
  gradientDirection: 'to-left' | 'to-right'
}) => {
  return <div className={line(gradientDirection)} />
}
