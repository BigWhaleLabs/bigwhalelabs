import classnames, { stroke, strokeWidth } from 'classnames/tailwind'

const lineClasses = classnames(
  stroke('stroke-tertiary'),
  strokeWidth('stroke-2')
)

export default function ({ open }: { open?: boolean }) {
  return (
    <svg
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      {open ? (
        <>
          <line
            className={lineClasses}
            x1="6.70035"
            x2="18.0141"
            y1="6.5"
            y2="17.8137"
          />
          <line
            className={lineClasses}
            x1="6.28613"
            x2="17.5998"
            y1="17.8138"
            y2="6.50011"
          />
        </>
      ) : (
        <>
          <line
            className={lineClasses}
            x1="4.28589"
            x2="20.2859"
            y1="6.5"
            y2="6.5"
          />
          <line
            className={lineClasses}
            x1="4.28589"
            x2="20.2859"
            y1="12.5"
            y2="12.5"
          />
          <line
            className={lineClasses}
            x1="4.28589"
            x2="20.2859"
            y1="18.5"
            y2="18.5"
          />
        </>
      )}
    </svg>
  )
}
