import classnames, {
  fill,
  fontSize,
  fontWeight,
  height,
  margin,
  scale,
  textTransform,
  willChange,
} from 'classnames/tailwind'

const textStyle = classnames(
  fill('fill-tertiary'),
  textTransform('uppercase'),
  fontWeight('font-semibold'),
  fontSize('text-3xl', 'md:text-xl')
)
const svgBox = classnames(
  height('md:h-80', 'h-44'),
  margin('mx-auto', '-mb-4'),
  scale('scale-200'),
  willChange('will-change-transform')
)

interface ArcTextProps {
  text: string
}

export default function ({ text }: ArcTextProps) {
  const radius = 65
  const size = 500
  const labelSize = size * 0.4

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${size} ${size}`}
      className={svgBox}
    >
      <title>{text}</title>
      <defs>
        <path
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
          id="textcircle"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="30s"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            repeatCount="indefinite"
          />
        </path>
      </defs>
      <use transform="rotate(90 250 250)" />
      <use transform="rotate(45 250 250)" />
      <use transform="rotate(-45 250 250)" />
      <text
        dy={radius}
        textLength={text.length * 36}
        className={textStyle}
        letter-spacing={(radius * 3.14) / 10}
      >
        <textPath xlinkHref="#textcircle">{text}</textPath>
      </text>
      <image
        x={size / 4}
        y={size / 4}
        width={size / 2}
        height={size / 2}
        href="/img/gem.webp"
      />
      <image
        x={(size - labelSize) / 2}
        y={(size - labelSize) / 2}
        width={labelSize}
        height={labelSize}
        href="/img/coming-soon.svg"
      />
    </svg>
  )
}
