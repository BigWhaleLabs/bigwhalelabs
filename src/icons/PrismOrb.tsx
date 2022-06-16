import classnames, {
  dropShadow,
  height,
  margin,
  scale,
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
  width('w-40'),
  dropShadow('drop-shadow-formal-accent'),
  margin('mt-4'),
  scale('lg:scale-125')
)

export default function () {
  return (
    <svg
      width="260"
      height="283"
      viewBox="0 0 260 283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses}
    >
      <path
        d="M2 223.856H130H194H258L130 175.675L2 223.856Z"
        className={prismStroke}
      />
      <circle
        cx="129.63"
        cy="151.629"
        r="46.729"
        transform="rotate(-180 129.63 151.629)"
        fill="url(#paint0_radial_452_3983)"
      />
      <circle
        cx="129.63"
        cy="151.629"
        r="46.729"
        transform="rotate(-180 129.63 151.629)"
        fill="url(#paint1_radial_452_3983)"
      />
      <circle
        cx="129.63"
        cy="151.629"
        r="46.729"
        transform="rotate(-180 129.63 151.629)"
        fill="url(#paint2_radial_452_3983)"
      />
      <mask
        id="mask0_452_3983"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="82"
        y="104"
        width="95"
        height="95"
      >
        <circle
          cx="129.638"
          cy="151.628"
          r="46.729"
          transform="rotate(-180 129.638 151.628)"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_452_3983)">
        <circle
          cx="129.638"
          cy="151.628"
          r="46.729"
          transform="rotate(-180 129.638 151.628)"
          fill="url(#paint3_radial_452_3983)"
        />
        <rect
          x="152.344"
          y="109.477"
          width="111.687"
          height="102.222"
          transform="rotate(123.478 152.344 109.477)"
          fill="url(#paint4_radial_452_3983)"
        />
      </g>
      <path
        d="M130 2L258 223.855L130 281M130 2L2 223.855L130 281M130 2V281"
        stroke="#15A1FC"
        stroke-width="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_452_3983"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(138.68 142.744) rotate(99.2423) scale(56.3456)"
        >
          <stop stop-color="#FED823" />
          <stop offset="1" stop-color="#FF7BED" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_452_3983"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(111.86 125.961) rotate(60.5646) scale(52.8997)"
        >
          <stop stop-color="#15A1FC" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_452_3983"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(176.359 135.833) rotate(123.521) scale(30.9862 37.2961)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_452_3983"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(132.6 145.046) rotate(106.479) scale(53.3636 51.3094)"
        >
          <stop offset="0.619792" stop-color="#4F4F4F" stop-opacity="0" />
          <stop offset="0.796875" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_452_3983"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(208.187 160.588) rotate(90) scale(51.1109 56.2271)"
        >
          <stop stop-color="#01FEB6" />
          <stop offset="1" stop-color="#FED823" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
