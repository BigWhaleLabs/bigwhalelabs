import classnames, {
  animation,
  fontWeight,
  textColor,
  textTransform,
  transformOrigin,
} from 'classnames/tailwind'

const textBox = classnames(
  textTransform('uppercase'),
  fontWeight('font-semibold'),
  textColor('text-tertiary'),
  transformOrigin('origin-left')
)

const animate = animation('animate-rotate-slow')

export default function ({
  text,
  diameter = 200,
}: {
  text: string
  diameter?: number
}) {
  const chars = text.split('')
  // Add spaces to make text more readable
  chars.unshift(' ')
  chars.push(' ')

  const textLength = chars.length

  return (
    <div className={animate}>
      <div
        // using diameter/2 prevents overflow
        style={{
          width: diameter / 2,
          height: diameter,
          fontSize: `${diameter / 10}px`,
          transform: 'translateX(45%)',
        }}
        className={textBox}
      >
        {chars.map((char, index) => (
          <span
            style={{
              height: `${diameter}px`,
              transform: `rotate(${(360 / textLength) * index}deg)`,
              position: 'absolute',
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
