import classnames, {
  height,
  position,
  transitionDuration,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'
import useBreakpoints from 'hooks/useBreakpoints'

const bgFit = classnames(
  position('absolute'),
  width('w-full'),
  height('h-full'),
  transitionProperty('transition-opacity'),
  transitionDuration('duration-2000'),
  zIndex('z-0')
)

export default function () {
  const { lg } = useBreakpoints()

  return (
    <img
      src={!lg ? '/img/blurry-shadows-sm.svg' : '/img/blurry-shadows-lg.svg'}
      className={bgFit}
      style={scrollAnimationProvider('bgFades')}
    />
  )
}
