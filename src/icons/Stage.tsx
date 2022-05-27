import { scale, stroke } from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'

export default function () {
  const { xs } = useBreakpoints()
  const scroll = useScrollPercent()

  return (
    <svg
      style={{
        animationName: 'stageAnimation',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDirection: 'linear',
        animationPlayState: 'paused',
        animationDelay: `calc(${scroll} * -1s)`,
        animationIterationCount: 1,
        animationFillMode: 'both',
      }}
      width="258"
      height="77"
      viewBox="0 0 258 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={scale(xs ? 'scale-75' : 'scale-100')}
    >
      <ellipse
        cx="129"
        cy="38.5"
        rx="128"
        ry="37.5"
        className={stroke('stroke-primary-semi-dimmed')}
        stroke-linecap="round"
        stroke-dasharray="5 5"
      />
    </svg>
  )
}
