import classnames, {
  height,
  position,
  transitionProperty,
  width,
  willChange,
  zIndex,
} from 'classnames/tailwind'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'
import useBreakpoints from 'hooks/useBreakpoints'

const bgFit = classnames(
  position('absolute'),
  width('w-full'),
  height('h-full'),
  transitionProperty('transition-opacity'),
  willChange('will-change-auto'),
  zIndex('z-0')
)

export default function () {
  const { lg } = useBreakpoints()

  return (
    <img
      src={!lg ? '/img/blurry-shadows-sm.webp' : '/img/blurry-shadows-lg.webp'}
      className={bgFit}
      style={scrollAnimationProvider('bgFades')}
    />
  )
}
