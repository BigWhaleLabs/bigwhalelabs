import classNamesToString from 'helpers/classNamesToString'
import classnames, {
  alignItems,
  animation,
  aspectRatio,
  backgroundColor,
  borderRadius,
  display,
  height,
  inset,
  justifyContent,
  margin,
  padding,
  position,
  width,
  zIndex,
} from 'classnames/tailwind'

const wrapper = classnames(
  width('w-full'),
  height('h-full'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  padding('px-6', 'md:px-0')
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
  inset('-right-2', 'top-4', 'md:right-2', 'md:top-8'),
  width('w-40', 'sm:w-48', 'md:w-60'),
  aspectRatio('aspect-square'),
  borderRadius('rounded-full'),
  animation('animate-float'),
  backgroundColor('bg-purple-700')
)

export default function () {
  return (
    <div className={wrapper}>
      <div className={position('relative')}>
        <img
          alt="big-whale-labs"
          className={imageStyles}
          src="/img/bigWhaleLabs.png"
        />

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
