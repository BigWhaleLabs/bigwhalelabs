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
  width,
  height,
  background,
  bottom,
  left,
  rotate = 0,
  reversedAppear,
  inView = true,
  blur = 0,
  saturate = 1,
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
        position: 'absolute',
        bottom: `${bottom}%`,
        left: `${left}%`,
        width: `${width}px`,
        height: `${height}px`,
        background: `radial-gradient(50% 50% at 50% 50%, ${background} 0%, ${background}00 100%)`,
        rotate: `${rotate}deg`,
        borderRadius: '100%',
        willChange: 'opacity',
        filter: `blur(${blur}px) saturate(${saturate})`,
        opacity: reversedAppear ? (inView ? 0 : 0.6) : inView ? 0.6 : 0,
        transitionDuration: '4s',
        transitionProperty: 'opacity',
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
  inView,
  children,
}: {
  inView: boolean
} & ChildrenProp) => <div className={appearAnimation(inView)}>{children}</div>
