import classnames, { stroke, strokeWidth } from 'classnames/tailwind'

const lineClasses = classnames(
  stroke('stroke-tertiary'),
  strokeWidth('stroke-2')
)

export default function ({ open }: { open?: boolean }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {open ? (
        <>
          <line
            x1="6.70035"
            y1="6.5"
            x2="18.0141"
            y2="17.8137"
            className={lineClasses}
            stroke-linecap="round"
          />
          <line
            x1="6.28613"
            y1="17.8138"
            x2="17.5998"
            y2="6.50011"
            className={lineClasses}
            stroke-linecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="4.28589"
            y1="6.5"
            x2="20.2859"
            y2="6.5"
            className={lineClasses}
            stroke-linecap="round"
          />
          <line
            x1="4.28589"
            y1="12.5"
            x2="20.2859"
            y2="12.5"
            className={lineClasses}
            stroke-linecap="round"
          />
          <line
            x1="4.28589"
            y1="18.5"
            x2="20.2859"
            y2="18.5"
            className={lineClasses}
            stroke-linecap="round"
          />
        </>
      )}
    </svg>
  )
}
