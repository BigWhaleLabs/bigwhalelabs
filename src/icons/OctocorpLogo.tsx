import classnames, {
  dropShadow,
  stroke,
  strokeWidth,
} from 'classnames/tailwind'

const octoCorpContainer = dropShadow('drop-shadow-secondary')
const pinkStroke = classnames(
  stroke('stroke-secondary'),
  strokeWidth('stroke-4')
)
const blueStroke = classnames(stroke('stroke-primary'), strokeWidth('stroke-4'))

export default function () {
  return (
    <svg
      width="154"
      height="154"
      viewBox="0 0 154 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={octoCorpContainer}
    >
      <path
        d="M66.9038 2C30.257 6.9532 2 38.4926 2 76.6616C2 118.27 35.5786 152 77 152C118.421 152 152 118.27 152 76.6616C152 38.4926 123.743 6.9532 87.0962 2"
        className={pinkStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M95.7507 12.7163C123.262 20.8429 143.347 46.3969 143.347 76.6632C143.347 113.47 113.643 143.309 77.0007 143.309C40.3587 143.309 10.6545 113.47 10.6545 76.6632C10.6545 46.3969 30.7393 20.8429 58.2507 12.7163"
        className={pinkStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M107.408 27.4023C123.788 37.6264 134.694 55.8649 134.694 76.662C134.694 108.668 108.864 134.615 77.0014 134.615C45.1388 134.615 19.3091 108.668 19.3091 76.662C19.3091 55.8649 30.2148 37.6264 46.5951 27.4023"
        className={pinkStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.2364 44.0637C32.5985 52.7493 27.9634 64.1619 27.9634 76.6621C27.9634 103.867 49.9186 125.922 77.0018 125.922C104.085 125.922 126.04 103.867 126.04 76.6621C126.04 64.1619 121.405 52.7493 113.767 44.0637"
        className={pinkStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M78.4424 125.857C95.2974 124.344 108.731 96.6774 108.731 79.5595C108.731 61.956 94.5245 46.9612 77.0001 46.9612C59.4756 46.9612 45.2693 61.956 45.2693 79.5595C45.2693 96.6774 58.7027 124.344 75.5577 125.857"
        className={pinkStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M74.1182 108.266C71.7799 104.01 66.379 95.4966 63.4824 95.4966C59.8617 95.4966 58.504 110.731 74.1182 108.266Z"
        className={blueStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M79.8867 108.266C82.225 104.01 87.6259 95.4966 90.5225 95.4966C94.1432 95.4966 95.5009 110.731 79.8867 108.266Z"
        className={blueStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
