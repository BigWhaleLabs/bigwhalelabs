import classnames, {
  opacity,
  transitionDuration,
  transitionProperty,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'

export default function (animationName: string, blockVisible = true) {
  const scroll = useScrollPercent()
  const { expandedTablet, mobile } = useBreakpoints()

  if (expandedTablet) animationName = animationName + 'Tablet'
  if (!mobile) animationName = animationName + 'Mobile'

  return blockVisible
    ? {
        animationDelay: `calc(${scroll} * -1s)`,
        animationDirection: 'linear',
        animationDuration: '1s',
        animationFillMode: 'both',
        animationIterationCount: 1,
        animationName,
        animationPlayState: 'paused',
        animationTimingFunction: 'ease-in-out',
      }
    : {}
}

export const revealAnimation = (visible: boolean) =>
  classnames(
    opacity(visible ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-opacity'),
    transitionDuration('duration-1000')
  )
