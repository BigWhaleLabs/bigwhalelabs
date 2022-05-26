import classnames, {
  dropShadow,
  fill,
  scale,
  stroke,
  strokeWidth,
} from 'classnames/tailwind'

const mainStroke = classnames(stroke('stroke-primary'), strokeWidth('stroke-2'))

const secondaryStroke = classnames(
  stroke('stroke-secondary'),
  strokeWidth('stroke-2')
)
const svgClasses = classnames(
  dropShadow('drop-shadow-primary'),
  scale('scale-75', 'sm:scale-100')
)

export default function ({ large }: { large?: boolean }) {
  const circleFill = classnames(fill('fill-primary'))
  return (
    <svg
      width={large ? '158' : '62'}
      height={large ? '144' : '55'}
      viewBox="0 0 62 55"
      fill="none"
      className={svgClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.6875 45.2882C37.8173 47.844 46.6289 57.0666 58.2149 50.9329C56.0851 49.0871 52.0734 44.2143 52.0734 41.4882"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.98438 27.0771C5.25003 26.3672 12.8888 26.2252 17.3188 31.3366C22.8562 37.726 34.1383 53.6366 52.8803 40.4319"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.5604 49.8037C37.3218 51.08 33.7935 51.781 30.1015 51.781C14.3399 51.781 1.5625 39.0037 1.5625 23.242C12.9403 15.7468 19.1463 16.3141 24.1042 19.091"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="17.8986" cy="24.1426" r="1.57043" className={circleFill} />
      <path
        d="M30.5156 24.6246C32.983 27.078 37.6884 28.7643 40.6844 28.7643C44.8964 28.7643 52.8505 25.4311 52.8505 21.3194C52.8505 17.3632 45.1649 14.1277 40.8559 13.8886"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.1988 45.4973C50.8488 45.4973 60.2929 36.0532 60.2929 24.4033C60.2929 12.7534 50.8488 3.30922 39.1988 3.30922C35.0977 3.30922 31.2699 4.4796 28.0312 6.50457"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.0302 6.41462C20.9493 2.38678 15.4807 6.27281 13.3052 8.45351C14.0438 8.63468 15.8175 9.01615 17.003 9.0926C18.4848 9.18817 18.8605 11.349 20.5875 12.9674C21.9691 14.2622 24.0905 14.4588 24.9785 14.3952C22.8158 16.2779 24.038 19.2184 24.9351 21.8705C25.6528 23.9922 24.8482 26.5706 24.3562 27.5945C34.5996 24.0583 32.9029 17.1022 32.5799 15.3072C32.4014 14.3152 33.3578 13.8056 34.648 13.2444"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.8594 13.8537L40.8594 11.1652"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="40.4875"
        y1="31.8873"
        x2="40.4875"
        y2="29.7376"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="44.7188"
        y1="13.88"
        x2="45.7793"
        y2="12.8194"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.302 13.7164L35.6812 13.2322C35.0608 12.8186 34.0674 13.5217 33.4056 13.8526"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.7168 28.2636L35.2071 29.7772"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46.5003 29.776L44.9973 28.2736"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="40.8562"
        cy="21.3177"
        r="2.89526"
        className={secondaryStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
