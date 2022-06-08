import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'

export default function (animationName: string) {
  const scroll = useScrollPercent()
  const { md } = useBreakpoints()

  if (!md) animationName = animationName + 'Mobile'

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
