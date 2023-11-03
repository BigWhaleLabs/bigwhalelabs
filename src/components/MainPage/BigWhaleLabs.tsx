import classNamesToString from 'helpers/classNamesToString'
import classnames, {
  alignItems,
  animation,
  borderRadius,
  display,
  height,
  inset,
  justifyContent,
  margin,
  position,
  width,
  zIndex,
} from 'classnames/tailwind'

const wrapper = classnames(
  width('w-full'),
  height('h-full'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center')
)
const imageStyles = classNamesToString(
  position('relative'),
  width('w-114'),
  margin('mr-32'),
  zIndex('z-10'),
  animation('animate-float'),
  'animation-delay-300'
)
const videoStyles = classnames(
  position('absolute'),
  inset('right-2', 'top-8'),
  width('w-60'),
  borderRadius('rounded-full'),
  animation('animate-float')
)

export default function () {
  return (
    <div className={wrapper}>
      <div className={position('relative')}>
        <img className={imageStyles} src="/img/bigWhaleLabs.png" />
        <video
          autoPlay
          loop
          muted
          className={videoStyles}
          src="/img/ketlTeam.mp4"
        />
      </div>
    </div>
  )
}
