import classnames, { stroke, strokeWidth } from 'classnames/tailwind'

const pinkStroke = classnames(
  stroke('stroke-secondary'),
  strokeWidth('stroke-4')
)
const blueStroke = classnames(stroke('stroke-primary'), strokeWidth('stroke-4'))

export default function () {
  return (
    <svg
      width="222"
      height="222"
      viewBox="30 0 222 222"
      className="drop-shadow-secondary"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_452_4003)">
        <path
          d="M100.904 32C64.257 36.9532 36 68.4926 36 106.662C36 148.27 69.5786 182 111 182C152.421 182 186 148.27 186 106.662C186 68.4926 157.743 36.9532 121.096 32"
          className={pinkStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M129.751 42.7163C157.262 50.8429 177.347 76.3969 177.347 106.663C177.347 143.47 147.643 173.309 111.001 173.309C74.3587 173.309 44.6545 143.47 44.6545 106.663C44.6545 76.3969 64.7393 50.8429 92.2507 42.7163"
          className={pinkStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M141.408 57.4023C157.788 67.6264 168.694 85.8649 168.694 106.662C168.694 138.668 142.864 164.615 111.001 164.615C79.1387 164.615 53.309 138.668 53.309 106.662C53.309 85.8649 64.2147 67.6264 80.595 57.4023"
          className={pinkStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M74.2364 74.0637C66.5985 82.7493 61.9634 94.1619 61.9634 106.662C61.9634 133.867 83.9186 155.922 111.002 155.922C138.085 155.922 160.04 133.867 160.04 106.662C160.04 94.1619 155.405 82.7493 147.767 74.0637"
          className={pinkStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M112.442 155.857C129.297 154.344 142.731 126.677 142.731 109.56C142.731 91.956 128.524 76.9612 111 76.9612C93.4756 76.9612 79.2693 91.956 79.2693 109.56C79.2693 126.677 92.7027 154.344 109.558 155.857"
          className={pinkStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M108.118 138.266C105.78 134.01 100.379 125.497 97.4823 125.497C93.8616 125.497 92.5038 140.731 108.118 138.266Z"
          className={blueStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M113.887 138.266C116.225 134.01 121.626 125.497 124.522 125.497C128.143 125.497 129.501 140.731 113.887 138.266Z"
          className={blueStroke}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_452_4003"
          x="0"
          y="-0.000244141"
          width="222"
          height="222"
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
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.483333 0 0 0 0 0.929029 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_452_4003"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_452_4003"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
