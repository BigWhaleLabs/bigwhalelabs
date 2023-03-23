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
  diameter = 200,
  text,
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
        className={textBox}
        style={{
          fontSize: `${diameter / 10}px`,
          height: diameter,
          transform: 'translateX(45%)',
          width: diameter / 2,
        }}
      >
        {chars.map((char, index) => (
          <span
            style={{
              height: `${diameter}px`,
              position: 'absolute',
              transform: `rotate(${(360 / textLength) * index}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
