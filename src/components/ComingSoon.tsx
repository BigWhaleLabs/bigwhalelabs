import classnames, {
  backgroundImage,
  borderRadius,
  boxShadow,
  dropShadow,
  fontSize,
  fontWeight,
  gradientColorStops,
  inset,
  letterSpacing,
  padding,
  position,
  scale,
  textAlign,
  textColor,
  textTransform,
  zIndex,
} from 'classnames/tailwind'

const wrapperStyles = classnames(
  position('relative'),
  dropShadow('drop-shadow-primary')
)
const plate = classnames(
  position('relative'),
  borderRadius('rounded-lg'),
  padding('p-2.5'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-tertiary', 'to-primary-burned'),
  fontSize('text-sm', 'md:text-2.5xl'),
  fontWeight('font-black'),
  textColor('text-primary-dark'),
  textAlign('text-center'),
  textTransform('uppercase'),
  letterSpacing('tracking-widest', 'lg:tracking-extra'),
  boxShadow('shadow-lg'),
  zIndex('z-20')
)
const gemStyle = classnames(
  scale('scale-125'),
  zIndex('z-10'),
  position('absolute'),
  inset('-top-full-125')
)

export default function () {
  return (
    <div className={wrapperStyles}>
      <div className={plate}>Coming soon</div>
      <img src="img/gem.webp" className={gemStyle} />
    </div>
  )
}
