import classnames, {
  height,
  position,
  transitionDuration,
  transitionProperty,
  width,
} from 'classnames/tailwind'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'
import useBreakpoints from 'hooks/useBreakpoints'

const bgFit = classnames(
  position('absolute'),
  width('w-full'),
  height('h-full'),
  transitionProperty('transition-opacity'),
  transitionDuration('duration-2000')
)

export default function () {
  const { onlyPhones } = useBreakpoints()

  return (
    <img
      src={
        onlyPhones ? '/img/blurry-shadows-sm.svg' : '/img/blurry-shadows-lg.svg'
      }
      className={bgFit}
      style={scrollAnimationProvider('bgFades')}
    />
  )
}
