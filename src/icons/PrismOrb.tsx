import classnames, {
  dropShadow,
  height,
  margin,
  stroke,
  strokeWidth,
  width,
} from 'classnames/tailwind'

const prismStroke = classnames(
  stroke('stroke-primary'),
  strokeWidth('stroke-2')
)
const svgClasses = classnames(
  height('h-auto'),
  width('w-40', 'xl:w-fit'),
  dropShadow('drop-shadow-formal-accent')
)

export default function () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 258.84 280.41"
      className={svgClasses}
    >
      <defs>
        <mask
          id="mask"
          x="75.41"
          y="85.3"
          width="121.11"
          height="124.39"
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
        >
          <g id="mask0_94_2837">
            <circle cx="129.66" cy="151.66" r="46.66" fill="#c4c4c4" />
          </g>
        </mask>
        <radialGradient
          id="radial-gradient"
          cx="-833.61"
          cy="666.34"
          r="1"
          gradientTransform="matrix(9.05, -55.61, -55.61, -9.05, 44722, -40171.22)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fed823" />
          <stop offset="1" stop-color="#ff7bed" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="-843.25"
          cy="672.05"
          r="1"
          gradientTransform="matrix(-26, -46.07, -46.07, 26, 9186.55, -56145.02)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#15a1fc" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-3"
          cx="-824.93"
          cy="657.58"
          r="1"
          gradientTransform="matrix(17.11, -25.83, -31.09, -20.6, 34644.61, -7600.56)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-4"
          cx="-831.75"
          cy="664.31"
          r="1"
          gradientTransform="matrix(15.14, -51.17, -49.2, -14.55, 45401.57, -32736.32)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.62" stop-color="#fff" stop-opacity="0" />
          <stop offset="0.8" stop-color="#fff" stop-opacity="0" />
          <stop offset="1" stop-color="#fff" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-5"
          cx="-846.82"
          cy="679.77"
          r="1"
          gradientTransform="matrix(0, -51.11, -56.23, 0, 38300.47, -43154.09)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#01feb6" />
          <stop offset="1" stop-color="#fed823" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="radial-gradient-6"
          cx="-844.12"
          cy="651.3"
          r="1"
          gradientTransform="matrix(0, -26.33, -27, 0, 17689.95, -22039.06)"
          xlinkHref="#radial-gradient-3"
        />
        <radialGradient
          id="radial-gradient-7"
          cx="-839.85"
          cy="659.96"
          r="1"
          gradientTransform="matrix(0, -36.69, -37.61, 0, 24978.58, -30692.34)"
          xlinkHref="#radial-gradient-3"
        />
      </defs>
      <path
        d="M2,223.86H258L130,175.68Z"
        transform="translate(-0.58 -1.5)"
        className={prismStroke}
        fill="none"
      />
      <g style="mask:url(#mask)">
        <circle
          cx="129.05"
          cy="150.13"
          r="46.73"
          fill="url(#radial-gradient)"
        />
        <circle
          cx="129.05"
          cy="150.13"
          r="46.73"
          style="fill:url(#radial-gradient-2)"
        />
        <circle
          cx="129.05"
          cy="150.13"
          r="46.73"
          style="fill:url(#radial-gradient-3)"
        />
        <g>
          <circle
            cx="129.06"
            cy="150.13"
            r="46.73"
            style="fill:url(#radial-gradient-4)"
          />
          <rect
            x="23.06"
            y="76.75"
            width="111.69"
            height="102.22"
            transform="matrix(0.55, -0.83, 0.83, 0.55, -71.85, 121.65)"
            style="fill:url(#radial-gradient-5)"
          />
        </g>
        <rect
          x="75.41"
          y="157.04"
          width="53.64"
          height="52.65"
          style="fill:url(#radial-gradient-6)"
        />
        <path
          d="M197.09,160.18h-74.7V86.8h74.7Z"
          transform="translate(-0.58 -1.5)"
          style="fill:url(#radial-gradient-7)"
        />
      </g>
      <path
        d="M130,2,258,223.85,130,281M130,2,2,223.85,130,281M130,2V281"
        transform="translate(-0.58 -1.5)"
        className={prismStroke}
        fill="none"
      />
    </svg>
  )
}
