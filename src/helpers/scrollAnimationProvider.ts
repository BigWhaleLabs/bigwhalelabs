import classnames, {
  opacity,
  transitionDuration,
  transitionProperty,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'

export default function (animationName: string) {
  const scroll = useScrollPercent()
  const { mobile, expandedTablet } = useBreakpoints()

  if (expandedTablet) animationName = animationName + 'Tablet'
  if (!mobile) animationName = animationName + 'Mobile'

  return {
    animationName,
    animationTimingFunction: 'ease-in-out',
    animationDuration: '1s',
    animationDirection: 'linear',
    animationPlayState: 'paused',
    animationDelay: `calc(${scroll} * -1s)`,
    animationIterationCount: 1,
    animationFillMode: 'both',
  }
}

export const revealAnimation = (visible: boolean) =>
  classnames(
    opacity(visible ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-opacity'),
    transitionDuration('duration-1000')
  )
