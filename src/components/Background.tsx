import ChildrenProp from 'models/ChildrenProp'
import classnames, {
  height,
  opacity,
  position,
  transitionDuration,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'

export default function ({
  background,
  blur = 0,
  bottom,
  height,
  inView = true,
  left,
  reversedAppear,
  rotate = 0,
  saturate = 1,
  width,
}: {
  width: number
  height: number
  background: string
  bottom: number
  left: number
  rotate?: number
  reversedAppear?: boolean
  inView?: boolean
  blur?: number
  saturate?: number
}) {
  return (
    <div
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, ${background} 0%, ${background}00 100%)`,
        borderRadius: '100%',
        bottom: `${bottom}%`,
        filter: `blur(${blur}px) saturate(${saturate})`,
        height: `${height}px`,
        left: `${left}%`,
        opacity: reversedAppear ? (inView ? 0 : 0.6) : inView ? 0.6 : 0,
        position: 'absolute',
        rotate: `${rotate}deg`,
        transitionDuration: '4s',
        transitionProperty: 'opacity',
        width: `${width}px`,
        willChange: 'opacity',
        zIndex: -1,
      }}
    />
  )
}

const appearAnimation = (inView: boolean) =>
  classnames(
    transitionProperty('transition-opacity'),
    transitionDuration('duration-2000'),
    opacity({ 'opacity-0': !inView }),
    zIndex('-z-10'),
    width('w-full'),
    height('h-full'),
    position('absolute')
  )
export const BackgroundsAnimated = ({
  children,
  inView,
}: {
  inView: boolean
} & ChildrenProp) => <div className={appearAnimation(inView)}>{children}</div>
