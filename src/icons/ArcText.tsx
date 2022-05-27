import classnames, {
  fill,
  fontSize,
  fontWeight,
  height,
  margin,
  scale,
  textTransform,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const textStyle = classnames(
  fill('fill-tertiary'),
  textTransform('uppercase'),
  fontWeight('font-semibold'),
  fontSize('text-xl')
)
const svgBox = classnames(
  height('md:h-64', 'h-44'),
  margin('mx-auto'),
  scale('scale-150', 'md:scale-300')
)

interface ArcTextProps {
  text: string
}

export default function ({ text }: ArcTextProps) {
  const { tablet } = useBreakpoints()
  const radius = tablet ? 85 : 110

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={tablet ? '0 0 475 475' : '0 0 500 500'}
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
    </svg>
  )
}
