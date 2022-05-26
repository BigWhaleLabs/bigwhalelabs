import { stroke } from 'classnames/tailwind'

export default function () {
  return (
    <svg
      width="258"
      height="77"
      viewBox="0 0 258 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
