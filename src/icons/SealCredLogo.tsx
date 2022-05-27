import classnames, { stroke, strokeWidth } from 'classnames/tailwind'

const circleStroke = classnames(
  stroke('stroke-accent'),
  strokeWidth('stroke-2')
)
const faceStroke = classnames(
  stroke('stroke-secondary'),
  strokeWidth('stroke-2')
)

export default function () {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="88.1287"
        y1="49.4456"
        x2="93.4649"
        y2="49.4456"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="88.1287"
        y1="44.5544"
        x2="93.4649"
        y2="44.5544"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="2.53784"
        y1="49.4456"
        x2="7.87406"
        y2="49.4456"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="2.53784"
        y1="44.5544"
        x2="7.87406"
        y2="44.5544"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="60.344"
        y1="18.0999"
        x2="61.9599"
        y2="12.0694"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="55.6214"
        y1="16.834"
        x2="57.2373"
        y2="10.8035"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="39.7894"
        y1="85.349"
        x2="41.4052"
        y2="79.3186"
        className={circleStroke}
        stroke-linecap="round"
      />
      <line
        x1="35.0667"
        y1="84.0833"
        x2="36.6826"
        y2="78.0528"
        className={circleStroke}
        stroke-linecap="round"
      />
      <path
        d="M54.1143 40.5586C54.1143 36.9689 56.9458 34.0589 60.4386 34.0589C63.9314 34.0589 66.7629 36.9689 66.7629 40.5586C66.7629 44.1483 63.9314 40.5587 60.4386 40.5587C56.9458 40.5587 54.1143 44.1483 54.1143 40.5586Z"
        className={faceStroke}
        stroke-linecap="round"
      />
      <path
        d="M48 52.3995C50.3635 52.3995 52.2795 52.6828 52.2795 49.9718C52.2795 47.2609 50.3635 45.0632 48 45.0632C45.6365 45.0632 43.7205 47.2609 43.7205 49.9718C43.7205 52.6828 45.6365 52.3995 48 52.3995ZM48 52.3995C48 54.0297 48 57.6571 48 59.1243M48 59.1243C48 64.0152 54.1135 64.0152 54.1135 59.1243M48 59.1243C48 64.0152 41.8865 64.0152 41.8865 59.1244"
        className={faceStroke}
        stroke-linecap="round"
      />
      <path
        d="M29.6656 40.5586C29.6656 36.9689 32.4971 34.0589 35.9899 34.0589C39.4827 34.0589 42.3142 36.9689 42.3142 40.5586C42.3142 44.1483 39.4827 40.5587 35.9899 40.5587C32.4971 40.5587 29.6656 44.1483 29.6656 40.5586Z"
        className={faceStroke}
        stroke-linecap="round"
      />
      <path
        d="M67.5635 52.3997L60.2273 53.6224"
        className={faceStroke}
        stroke-linecap="round"
      />
      <path
        d="M60.2304 57.29L67.5666 58.5127"
        className={faceStroke}
        stroke-linecap="round"
      />
      <path
        d="M28.4361 52.3987L35.7723 53.6214"
        className={faceStroke}
        stroke-linecap="round"
      />
      <path
        d="M35.7726 57.2896L28.4364 58.5123"
        className={faceStroke}
        stroke-linecap="round"
      />
      <circle
        cx="48.0006"
        cy="48.0001"
        r="46.4627"
        className={circleStroke}
        stroke-linecap="round"
      />
      <path
        d="M58.1434 85.8564C47.8258 88.621 37.3663 86.9997 28.7443 82.1354C19.8948 77.1427 12.981 68.7335 10.1434 58.1436C7.30587 47.5537 9.08877 36.8142 14.2564 28.0656M37.8562 10.1436C48.4462 7.30603 59.1856 9.08893 67.9342 14.2565C76.4578 19.2912 83.0917 27.5388 85.8562 37.8564C88.6208 48.174 86.9996 58.6335 82.1352 67.2555"
        className={circleStroke}
        stroke-linecap="round"
      />
      <path
        d="M17.8347 39.9159C20.096 31.4767 25.6056 24.7753 32.6579 20.7966C39.5288 16.9202 47.8641 15.6282 56.0863 17.8313C64.3084 20.0344 70.881 25.321 74.8932 32.1135M20.8005 63.3444C24.7792 70.3967 31.4806 75.9063 39.9198 78.1676C48.3589 80.4288 56.9173 79.008 63.8891 74.8899C70.6816 70.8777 75.9682 64.3052 78.1713 56.083"
        className={circleStroke}
        stroke-linecap="round"
      />
    </svg>
  )
}
