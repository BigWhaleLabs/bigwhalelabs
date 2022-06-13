import classnames, {
  height,
  opacity,
  position,
  transitionDuration,
  transitionProperty,
  width,
} from 'classnames/tailwind'
import useBgFade from 'hooks/useBgFade'
import useBreakpoints from 'hooks/useBreakpoints'

const bgFit = (fadeIn?: boolean) =>
  classnames(
    position('absolute'),
    width('w-full'),
    height('h-full'),
    opacity(fadeIn ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-opacity'),
    transitionDuration('duration-2000')
  )

export default function () {
  const { onlyPhones } = useBreakpoints()
  const { fadeIn } = useBgFade()

  return (
    <img
      src={
        onlyPhones ? '/img/blurry-shadows-sm.svg' : '/img/blurry-shadows-lg.svg'
      }
      className={bgFit(fadeIn)}
    />
  )
}
