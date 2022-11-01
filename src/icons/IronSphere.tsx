import classnames, {
  backgroundImage,
  borderRadius,
  boxShadow,
  dropShadow,
  gradientColorStops,
  height,
  width,
} from 'classnames/tailwind'

const sphere = classnames(
  width('w-14'),
  height('h-14'),
  borderRadius('rounded-full'),
  backgroundImage('bg-gradient-to-br'),
  gradientColorStops('from-primary', 'to-primary-background'),
  dropShadow('drop-shadow-primary'),
  boxShadow('shadow-iron-sphere')
)

export default function () {
  return <div className={sphere} />
}
