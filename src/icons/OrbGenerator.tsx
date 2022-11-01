import {
  borderRadius,
  boxShadow,
  dropShadow,
  padding,
} from 'classnames/tailwind'
import GeneratorLines from 'icons/GeneratorLines'
import classNamesToString from 'helpers/classNamesToString'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'

const sphere = classNamesToString(
  dropShadow('drop-shadow-formal-accent'),
  boxShadow('shadow-orb-generator'),
  borderRadius('rounded-full'),
  padding('p-2'),
  'orb-generator-background'
)

export default function ({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={sphere}
      style={scrollAnimationProvider('superOrbTransformation', isVisible)}
    >
      <GeneratorLines />
    </div>
  )
}
