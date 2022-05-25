import classnames, {
  backgroundImage,
  gradientColorStops,
  height,
  width,
} from 'classnames/tailwind'

const line = (toLeft?: boolean) =>
  classnames(
    height('h-px'),
    width('w-36'),
    backgroundImage(toLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r'),
    gradientColorStops('from-primary-dark', 'to-secondary')
  )

export default ({ toLeft }: { toLeft?: boolean }) => {
  return <div className={line(toLeft)} />
}
