import classnames, { stroke, strokeWidth } from 'classnames/tailwind'

const mainClasses = classnames(
  stroke('stroke-tertiary'),
  strokeWidth('stroke-2')
)

export default function () {
  return (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="37" cy="37" r="36" className={mainClasses} />
      <path
        d="M56.8609 43.7367C56.8609 54.7063 47.9683 63.5988 36.9988 63.5988C26.0293 63.5988 17.1367 54.7063 17.1367 43.7367C17.1367 32.7672 26.0293 43.7365 36.9988 43.7365C47.9683 43.7365 56.8609 32.7672 56.8609 43.7367Z"
        className={mainClasses}
      />
      <path
        d="M17.139 26.3533C17.139 21.9495 20.6127 18.3795 24.8976 18.3795C29.1826 18.3795 32.6563 21.9495 32.6563 26.3533C32.6562 30.7571 29.1826 26.3534 24.8976 26.3534C20.6127 26.3534 17.139 30.7571 17.139 26.3533Z"
        className={mainClasses}
      />
      <path
        d="M41.346 26.3533C41.346 21.9495 44.8197 18.3795 49.1047 18.3795C53.3896 18.3795 56.8633 21.9495 56.8633 26.3533C56.8633 30.7571 53.3896 26.3534 49.1047 26.3534C44.8197 26.3534 41.346 30.7571 41.346 26.3533Z"
        className={mainClasses}
      />
      <path d="M22.7227 39.793L22.7227 57.1723" className={mainClasses} />
      <path d="M27.6914 41.3457L27.6914 61.2078" className={mainClasses} />
      <line
        x1="33.0352"
        y1="43.207"
        x2="33.0352"
        y2="63.6898"
        className={mainClasses}
      />
      <path d="M37.6211 43.5176L37.6211 63.69" className={mainClasses} />
      <path d="M42.5859 42.8965L42.5859 62.7586" className={mainClasses} />
      <line
        x1="47.9297"
        y1="41.3457"
        x2="47.9297"
        y2="60.5871"
        className={mainClasses}
      />
      <path d="M52.5156 38.8613L52.5156 56.2406" className={mainClasses} />
    </svg>
  )
}
