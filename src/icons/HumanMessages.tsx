import classnames, {
  margin,
  stroke,
  strokeWidth,
  zIndex,
} from 'classnames/tailwind'

const svgWrapper = classnames(zIndex('z-20'), margin('my-2'))
const commonStroke = classnames(
  stroke('stroke-accent'),
  strokeWidth('stroke-1.5')
)

export default function () {
  return (
    <svg
      width="281"
      height="228"
      viewBox="0 0 281 228"
      xmlns="http://www.w3.org/2000/svg"
      className={svgWrapper}
    >
      <mask
        id="mask0_1304_3882"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="27"
        y="0"
        width="228"
        height="228"
      >
        <circle cx="141" cy="114" r="113" fill="#1A0259" />
      </mask>
      <g mask="url(#mask0_1304_3882)">
        <circle cx="141" cy="93" r="58" fill="#1A0259" />
        <ellipse cx="141" cy="196" rx="85" ry="60" fill="#1A0259" />
      </g>
      <circle cx="141" cy="114" r="113" fill="#1A0259" opacity="0.4" />
      <path
        d="M132.5 47.5836C130.375 43.8058 123.15 36.6752 111.25 38.3752C96.3746 40.5002 75.1246 53.9583 77.9579 66.7083C80.7913 79.4583 83.6246 95.0417 77.9579 104.958C72.2913 114.875 65.2079 128.333 71.5829 138.25"
        className={commonStroke}
      />
      <path
        d="M143.516 48.5493C141.391 44.7715 134.166 37.6409 122.266 39.3409C107.391 41.4659 86.1412 54.924 88.9746 67.674C91.8079 80.424 94.6412 96.0074 88.9746 105.924C83.3079 115.841 76.2245 129.299 82.5995 139.216"
        className={commonStroke}
      />
      <path
        d="M120.85 47.1325C118.725 43.3548 111.5 36.2242 99.5996 37.9242C84.7246 40.0492 63.4746 53.5073 66.3079 66.2573C69.1413 79.0073 71.9746 94.5906 66.3079 104.507C60.6412 114.424 53.5579 127.882 59.9329 137.799"
        className={commonStroke}
      />
      <path
        d="M140.802 117.246C151.809 117.246 162.002 113.759 170.336 107.829"
        className={commonStroke}
      />
      <path
        d="M140.806 130.05C125.266 130.05 112.668 117.452 112.668 101.913C112.668 86.3727 125.266 101.912 140.806 101.912"
        className={commonStroke}
      />
      <path
        d="M112.666 77.2861C112.666 71.0475 117.587 65.9901 123.657 65.9901C129.728 65.9901 134.649 71.0475 134.649 77.2861C134.649 83.5247 129.728 77.2862 123.657 77.2862C117.587 77.2862 112.666 83.5247 112.666 77.2861Z"
        className={commonStroke}
      />
      <path d="M120.581 96.3256L120.581 120.946" className={commonStroke} />
      <path d="M127.615 98.5226L127.615 126.66" className={commonStroke} />
      <line
        x1="134.519"
        y1="101.909"
        x2="134.519"
        y2="129.426"
        className={commonStroke}
      />
      <circle cx="155.103" cy="73.2896" r="8.7061" className={commonStroke} />
      <path
        d="M196.456 101.829C201.264 101.829 205.162 97.9311 205.162 93.1228C205.162 88.3146 201.264 84.4167 196.456 84.4167"
        className={commonStroke}
      />
      <line
        x1="153.083"
        y1="32.7501"
        x2="153.083"
        y2="46.8335"
        className={commonStroke}
      />
      <line
        x1="160.167"
        y1="32.7501"
        x2="160.167"
        y2="46.8335"
        className={commonStroke}
      />
      <line
        x1="167.25"
        y1="35.5833"
        x2="167.25"
        y2="49.6666"
        className={commonStroke}
      />
      <line
        x1="174.333"
        y1="39.8334"
        x2="174.333"
        y2="53.9167"
        className={commonStroke}
      />
      <line
        x1="181.417"
        y1="46.9166"
        x2="181.417"
        y2="61"
        className={commonStroke}
      />
      <line
        x1="188.5"
        y1="55.4166"
        x2="188.5"
        y2="69.5"
        className={commonStroke}
      />
      <path
        d="M221.042 70.9584V27.0417H279.833V60.3334H231.667L221.042 70.9584Z"
        className={commonStroke}
      />
      <path
        d="M37.5834 117V87.25H0.750042V109.802H30.9267L37.5834 117Z"
        className={commonStroke}
      />
    </svg>
  )
}
