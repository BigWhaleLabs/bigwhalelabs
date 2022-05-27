import classnames, {
  dropShadow,
  scale,
  stroke,
  strokeWidth,
} from 'classnames/tailwind'

const mainStroke = classnames(stroke('stroke-primary'), strokeWidth('stroke-2'))

const svgClasses = classnames(
  dropShadow('drop-shadow-primary'),
  scale('scale-50', 'sm:scale-90')
)

export default function () {
  return (
    <svg
      width="260"
      height="283"
      viewBox="0 0 260 283"
      fill="none"
      className={svgClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 223.856H130H194H258L130 175.675L2 223.856Z"
        className={mainStroke}
      />
      <g filter="url(#filter0_d_81_856)">
        <mask
          id="mask0_81_856"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="83"
          y="104"
          width="94"
          height="95"
        >
          <circle
            cx="129.661"
            cy="151.66"
            r="46.6597"
            transform="rotate(-180 129.661 151.66)"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask0_81_856)">
          <circle
            cx="129.63"
            cy="151.629"
            r="46.729"
            transform="rotate(-180 129.63 151.629)"
            fill="url(#paint0_radial_81_856)"
          />
          <circle
            cx="129.63"
            cy="151.629"
            r="46.729"
            transform="rotate(-180 129.63 151.629)"
            fill="url(#paint1_radial_81_856)"
          />
          <circle
            cx="129.63"
            cy="151.629"
            r="46.729"
            transform="rotate(-180 129.63 151.629)"
            fill="url(#paint2_radial_81_856)"
          />
          <mask
            id="mask1_81_856"
            style={{ maskType: 'alpha' }}
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
          <g mask="url(#mask1_81_856)">
            <circle
              cx="129.638"
              cy="151.628"
              r="46.729"
              transform="rotate(-180 129.638 151.628)"
              fill="url(#paint3_radial_81_856)"
            />
            <rect
              x="152.344"
              y="109.477"
              width="111.687"
              height="102.222"
              transform="rotate(123.478 152.344 109.477)"
              fill="url(#paint4_radial_81_856)"
            />
          </g>
          <g style={{ mixBlendMode: 'soft-light' }}>
            <rect
              x="129.625"
              y="211.191"
              width="53.6397"
              height="52.6524"
              transform="rotate(-180 129.625 211.191)"
              fill="url(#paint5_radial_81_856)"
            />
          </g>
          <g style={{ mixBlendMode: 'soft-light' }}>
            <path
              d="M197.094 160.184L122.393 160.184L122.393 86.7999L197.094 86.7999L197.094 160.184Z"
              fill="url(#paint6_radial_81_856)"
            />
          </g>
        </g>
      </g>
      <path
        d="M130 2L258 223.855L130 281M130 2L2 223.855L130 281M130 2V281"
        className={mainStroke}
      />
      <defs>
        <filter
          id="filter0_d_81_856"
          x="39.0009"
          y="60.9999"
          width="181.319"
          height="181.319"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="22" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_81_856"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_81_856"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_81_856"
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
          id="paint1_radial_81_856"
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
          id="paint2_radial_81_856"
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
          id="paint3_radial_81_856"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(132.6 145.046) rotate(106.479) scale(53.3636 51.3094)"
        >
          <stop offset="0.619792" stop-color="white" stop-opacity="0" />
          <stop offset="0.796875" stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_81_856"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(208.187 160.588) rotate(90) scale(51.1109 56.2271)"
        >
          <stop stop-color="#01FEB6" />
          <stop offset="1" stop-color="#FED823" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_81_856"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(156.445 237.517) rotate(90) scale(26.3262 27.004)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint6_radial_81_856"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(159.743 123.492) rotate(-90) scale(36.6922 37.6068)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
