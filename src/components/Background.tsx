import { useInView } from 'react-intersection-observer'

export default function ({
  width,
  height,
  background,
  bottom,
  left,
  rotate,
  reversedAppear,
}: {
  width: number
  height: number
  background: string
  bottom: number
  left: number
  rotate?: number
  reversedAppear?: boolean
}) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div
      style={{
        position: 'absolute',
        bottom: `${bottom}%`,
        left: `${left}%`,
        width: `${width}px`,
        height: `${height}px`,
        background,
        rotate: rotate ? `${rotate}deg` : undefined,
        filter: 'blur(175px)',
        borderRadius: '100%',
        opacity: reversedAppear ? (inView ? 0 : 0.7) : inView ? 0.7 : 0,
        transitionDuration: '4s',
        transitionProperty: 'opacity',
        zIndex: -1,
      }}
      ref={ref}
    />
  )
}
