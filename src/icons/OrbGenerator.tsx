import classnames, { height, transformOrigin, width } from 'classnames/tailwind'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'

const imgWrapper = classnames(
  transformOrigin('origin-center'),
  height('h-20'),
  width('w-20')
)

export default function ({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={imgWrapper}
      style={scrollAnimationProvider('superOrbTransformation', isVisible)}
    >
      <img src="/img/orb-generator.webp" />
    </div>
  )
}
