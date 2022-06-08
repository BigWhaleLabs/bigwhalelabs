import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'

export default function (animationName: string) {
  const scroll = useScrollPercent()
  const { onlyPhones, tablet } = useBreakpoints()

  if (onlyPhones && tablet) animationName = animationName + 'Mobile'

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
